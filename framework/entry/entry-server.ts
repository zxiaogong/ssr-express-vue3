import { createApp } from '../web/main';
import createRouter from "../web/router/router"
/**服务器不会编译css */
import 'ant-design-vue/dist/antd.css';
const router = createRouter(true)

export async function render({
    url,
    initData,
}) {
    router.push({
        path: url
    })
    const app = createApp(initData).use(router)
    return app
} 