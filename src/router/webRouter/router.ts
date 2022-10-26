import { RouteRecordRaw } from "vue-router"
/**vue路由 */
const routers: RouteRecordRaw[] = [
    {
        name: '首页',
        path: '/index',
        component: () => import('@src/web/index.vue')
    },
    {
        name: 'page404',
        path: '/page404',
        component: () => import('@src/web/page404.vue')
    },
    /**非法路由重定向至404 */
    {
        name: 'page404',
        path: '/:pathMatch(.*)',
        component: () => import('@src/web/page404.vue')
    },
  
];

export default routers