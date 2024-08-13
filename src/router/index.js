import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
/* Layout */
import Layout from '@/layout';
/** setting */
import defaultSetting from "../seeting";
/** setRouter */
import setRouter from "./setRouter";

export const routes = [
    {
        path: '/',
        component: Layout,
        redirect: '/dashboard',
        name: "",
        children: [
            {
                path: '/dashboard',
                component: () => import('@/views/dashboard/index'),
                name: 'Dashboard',
                meta: { title: '首页' }
            },
        ],
        hidden : true
    },
    {
        path: '/about-father',
        component: () => import('@/views/about-father/index'),
        name: 'about-father',
        meta: { title: '关于父亲' }
    },
    ...setRouter()
]

const router = new VueRouter({
    // mode: 'hash',
    mode: 'history',
    base: process.env.NODE_ENV === "production" ? '/zhongjie/' : '/',
    routes
})

router.beforeEach((to, from, next) => {
    if(to.meta && to.meta.title){
        document.title = to.meta.title + " - " + defaultSetting.title;
    }else{
        document.title = defaultSetting.title;
    }
    next()
})

export default router
