import { createApp } from './main';
import createRouter from "./router/router"
const router =  createRouter()
createApp(window._INIT_PROPS_).use(router).mount('#app')