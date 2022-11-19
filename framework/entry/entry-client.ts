import { createApp } from '../web/main';
import createRouter from "../web/router/router"
import ElementPlus from "element-plus"
import 'element-plus/dist/index.css'
const router =  createRouter()
createApp(window._INIT_PROPS_).use(router).use(ElementPlus).mount('#app')