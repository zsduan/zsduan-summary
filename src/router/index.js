import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/aboutFather',
    name: 'boutFather',
    component: ()=> import("../views/about-father/about-father.vue"),
    meta : {
      title : "父亲过世记账"
    }
  },
  {
    path: '/',
    name: 'Index',
    component: ()=> import("../views/Index/Index.vue"),
    meta : {
      title : "zs.duan的个人总结"
    }
  },
]

const router = new VueRouter({
  mode: process.env.NODE_ENV == "development" ? 'history' : 'hash',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach(async(to, from, next) => {
  document.title = to.meta?.title ? to.meta.title : "zs.duan的个人总结";
  next();
})

export default router
