import { createApp } from '../web/main';
import createRouter from "../web/router/router"
import ElementPlus from "element-plus"
/**服务器不会编译css */
// import 'element-plus/dist/index.css'
const router = createRouter(true)

export async function render({
    url,
    initData,
}) {
    router.push({
        path: url
    })
    const app = createApp(initData).use(router).use(ElementPlus)
    return app
} 