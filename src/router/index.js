/*
 * @Author: zs.duan
 * @Date: 2022-09-20 13:49:02
 * @LastEditors: zs.duan
 * @LastEditTime: 2022-09-27 09:53:46
 * @FilePath: \vue2+js+eui+template\src\router\index.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
]

const router = new VueRouter({
  // mode: 'history',
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach(async(to, from, next) => {
  document.title = to.meta?.title ? to.meta.title : "zs.duan的个人总结";
  next();
})

export default router
