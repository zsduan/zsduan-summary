import Vue from 'vue';
import VueRouter from 'vue-router';
import cookie from '../common/cookie.js';
import store from '../store';
import setRouter from "./setRouter.js";
import {decrypt} from "../common/encryp.js";

Vue.use(VueRouter);
//获取原型对象上的push函数
const originalPush = VueRouter.prototype.push;
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}
const routes = [
	{
		path: "/login",
		name: "Login",
		component: () => import("../views/login.vue"),
		meta: {
			title: "智慧停车登录"
		}
	},
	{
		path: "/404",
		name: "404",
		component: () => import("../views/error-page/404.vue"),
		meta: {
			title: "页面不见啦~"
		}
	},
	// {
	// 	path: "*",
	// 	redirect: {
	// 		name: "404"
	// 	}
	// }
]

const router = new VueRouter({
	// mode: 'history',
	base: process.env.BASE_URL,
	mode: 'hash',
	routes
})

router.beforeEach((to, from, next) => {
	document.title = to.meta.title || "智慧停车管理系统";
	let url = window.location.pathname,jurisdiction = false;
	let routerList = router.getRoutes();
	let Tk = cookie.readCookie("TK");
	let urls = window.location.href;
	urls = urls.split("#");
	let arr = urls[1].split("toPath");
	if(arr.length == 1){
		url = urls[1];
	}
	if(to.name){
		next();
		return ;
	}
	if(!Tk && to.name !== 'Login'){
		next({
			name : "Login"
		})
		return ;
	}
	routerList.forEach(v =>{
		if(v.path == url) jurisdiction = true;
	})
	if(!Tk && to.name !== 'Login'){
		next({name:"Login"});
		return;
	}
	if(to.name !== 'Login' && !jurisdiction){
		next({
			name: "Login",
			query : {toPath : url}
		});
	}else{
		next();
	}
})

export default router
