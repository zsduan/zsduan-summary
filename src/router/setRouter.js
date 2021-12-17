/*
 * @Author: zs.duan
 * @Date: 2021-12-16 15:27:00
 * @LastEditors: zs.duan
 * @LastEditTime: 2021-12-17 17:27:27
 * @FilePath: \template\src\router\setRouter.js
 */

/* 
 *@data 2021-09-26\
 *@author zs.duan
 *动态路由的处理
 *
 */
function setRouters(menuList) {
	let newMenuList = [],
		router = [];
	menuList.forEach(v => {
		newMenuList.push(v);
		v.list.forEach(o => {
			newMenuList.push(o);
		})
	})
	newMenuList.forEach(v => {
		if (v.is_show && v.url) {
			let json = {
				path: `/${v.url}`,
				name: v.pathName,
				component: loadView(`${v.url}/${v.url}.vue`),
				meta: {
					title: v.title
				}
			};
			router.push(json);
		}
	})
	let newRouter = {
		path: '/',
		name: 'Home',
		redirect: router[0].path,
		component:loadView("Home.vue"),
		children: [],
	};
	newRouter.children = router;
	return newRouter;
}

function loadView(view) {
	// 路由懒加载
	return () => import(`@/views/${view}`);
}


function setRouter(menuList,router) {
	let routers = setRouters(menuList);
	router.addRoute(routers);
	return true;
}


export default setRouter;
