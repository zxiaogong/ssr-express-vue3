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


const app = express()
async function createServer() {
    const vite = await createServerVite({
        server: { middlewareMode: 'ssr' }
    })
    // 使用 vite 的 Connect 实例作为中间件
    app.use(vite.middlewares)
    /**第三方插件，接收post数据 */
    app.use(bodyParser.urlencoded({ extended: false }))

    app.use('*', async (req, res) => {
        let url = req.originalUrl
        try {
            if (url.indexOf('/_api/') === 0) {
                let query = req.query
                let mode = RequsetMode.GET
                if (JSON.stringify(req.body) !== '{}') {
                    query = req.body
                    mode = RequsetMode.POST
                }
                const response = await apiCall(url, mode, query || {})
                res.send(response)
                return
            }

            // 1. 读取 index.html
            let template = fs.readFileSync(
                path.resolve(__dirname, './index.html'),
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

    app.listen(8888, () => {
        console.log('http://localhost:8888/index');
    })
}

createServer()