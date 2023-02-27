import { createApp } from '../web/main';
import createRouter from "../web/router/router"
import 'ant-design-vue/dist/antd.css';
const router =  createRouter()
createApp(window._INIT_PROPS_).use(router).mount('#app')