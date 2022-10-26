import { createSSRApp, createApp as _createApp } from 'vue';
import App from "./app.vue"


export function createApp(_props: any = {}) {
  if (typeof window !== undefined) {
    return _createApp(App, _props)
  } else {
    return createSSRApp(App, _props)
  }
}
