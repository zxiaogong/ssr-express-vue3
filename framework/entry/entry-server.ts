
import {createApp} from "@framework/web/main"
import createRouter from "@framework/web/router/router"
/**服务器不会编译css */
import 'ant-design-vue/dist/reset.css';
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