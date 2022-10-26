import { createApp } from './main';
import createRouter from "./router/router"
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