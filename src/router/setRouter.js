/*
 * @Author: zs.duan
 * @Date: 2022-09-20 15:03:54
 * @LastEditors: zs.duan
 * @LastEditTime: 2023-01-28 22:08:10
 * @FilePath: \vue2+elui+template\src\router\setRouter.js
 */
import MENU from "../subMenu.json" ;
const modules = import.meta.glob("../subMenu.json");
console.log(modules["../subMenu.json"])
import Router from "./index";

class setRouter {
    constructor(menu){
        this.newMenu = [];
        this.menu = menu;
    }

    set(){
        let menu = this.getRouters(this.menu);
        menu.forEach(v => {
            Router.addRoute(v); 
        })
        
    }

    // 递归处理 路由
    getRouters(menu , list){
        list = list ? list : [];
        menu.forEach(v => {
            if(v.isShow){
                let router = {
                    path: `/${v.pathName}`,
                    name: v.pathName,
                    component: this.loadView(`${v.page}.vue`),
                    meta: {
                        title: v.title,
                    }
                }
                if(!v.PID){
                    router.children = [];
                    list.push(router);
                }
                list.forEach(item => {
                    if(v.PID === item.ID){
                        item.children.push(item);
                    }
                })
                if(v.children && v.children.length){
                    this.getRouters(v.children , list);
                }
            }
        })
        return list;
    }

    // 路由懒加载
    loadView(view) {
        console.log(process.env)
        if(process.env.VUE_APP_IS_VITE == 'true'){
            let modules = import.meta.glob("../views/**/*.vue");
            return modules[`../views/${view}`]; //vite
        }
        return () => import(`@/views/${view}`);  //webpack
    }
}

let newMenu = new setRouter(MENU);
newMenu.set();