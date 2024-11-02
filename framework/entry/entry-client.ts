import { createApp } from '@framework/web/main';
import createRouter from "@framework/web/router/router"
import NutUI from "@nutui/nutui";
import Antd from 'ant-design-vue';
import "@nutui/nutui/dist/style.css";
import 'ant-design-vue/dist/reset.css';
const router =  createRouter()
createApp(window._INIT_PROPS_).use(router).use(Antd).use(NutUI).mount('#app')