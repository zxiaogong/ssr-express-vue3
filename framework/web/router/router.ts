
import { createRouter as _createRouter, createWebHistory, createMemoryHistory } from "vue-router"
import routers from "@router/webRouter/router"

export default function createRouter(isSever?: boolean) {
    return _createRouter({
        history: isSever ? createMemoryHistory() : createWebHistory(),     //路由模式
        routes: routers 
    })
}


