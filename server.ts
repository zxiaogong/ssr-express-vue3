import moduleAlias from "module-alias/register"
moduleAlias
import fs from 'fs'
import path from 'path'
import express from 'express'
import { renderToString } from 'vue/server-renderer'
import { createServer as createServerVite } from 'vite'
import serviceCall from '@framework/server/router/serviceCall'
import apiCall from '@framework/server/router/apiCall'
import { RequsetMode } from '@framework/server/router/types'
import bodyParser from "body-parser"
const dirname = process.env.NODE_ENV === "development" ? __dirname : path.resolve()
const app = express()
async function createServer() {
    const vite = await createServerVite({
        server: { middlewareMode: 'ssr' }
    })
    // 使用 vite 的 Connect 实例作为中间件
    app.use(vite.middlewares)
    /**第三方插件，接收post数据 */
    app.use(bodyParser.json())

    app.get('*', async (req, res) => {
        let url = req.originalUrl
        try {
            if (url.indexOf('/_api/') === 0) {
                let query = req.query
                let mode = RequsetMode.GET
                const firstParameter = url.split("?")[1]?.split("=")[0]
                if(firstParameter&&query[firstParameter]){
                    url = url.split(`?${firstParameter}`)[0]
                }
                const response = await apiCall(url, mode, query || {})
                res.send(response)
                return
            }

            // 1. 读取 index.html
            let template = fs.readFileSync(
                path.resolve(dirname, './index.html'),
                'utf-8'
            )
            let initData = await serviceCall(url, RequsetMode.GET, req.query)

            const { render } = await vite.ssrLoadModule('/framework/entry/entry-server.ts')

            const appHtml = await render({
                url,
                initData
            })
            renderToString(appHtml).then((html) => {
                /** 返回渲染后的html */
                res.status(200)
                    .set({
                        'Content-Type': 'text/html',
                        'Cache-Control': 'no-cache',
                    })
                    .send(template
                        .replace('<!--ssr-outlet-->', html)
                        .replace('/*init data*/', `window._INIT_PROPS_=${JSON.stringify((initData))}`)
                    )
            })
        } catch (e) {
            //报错，捕获异常
            vite.ssrFixStacktrace(e)
            console.error(e)
            res.status(500).end(e.message)
        }
    })
    app.post("*", async (req, res) => {
        let url = req.originalUrl
        if (url.indexOf('/_api/') === 0) {
            let body = req.body
            let mode = RequsetMode.POST
            const response = await apiCall(url, mode, body || {})
            res.send(response)
            return
        }
        res.send({ msg: "非法接口" })
    })

    app.listen(8888, () => {
        console.log('http://localhost:8888/index');
    })
}

createServer()