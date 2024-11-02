import { createApp } from '@framework/web/main';
import createRouter from "@framework/web/router/router"
import 'ant-design-vue/dist/reset.css';
const router =  createRouter()
createApp(window._INIT_PROPS_).use(router).mount('#app')