/*
 * @Author: zs.duan
 * @Date: 2021-12-16 17:53:43
 * @LastEditors: zs.duan
 * @LastEditTime: 2021-12-17 11:26:00
 * @FilePath: \template\src\config\env.js
 */

import store from '../store';

// 配置初始化文件
let initJson = {
    dev : true,// 是否是开发模式
    devUrl : "http://localhost:3000/api/",
    FormalUrl: "/",
}

// 初始化屏幕高度
function init(){
    getInner();
}

function getInner(){
    let innerWidth = window.innerWidth;
    let innerHeight = window.innerHeight;
    store.commit("setinnerWidth",innerWidth);
    store.commit("setinnerHeight",innerHeight);
}


// 获取屏幕宽高
window.onresize = function () {
    getInner();
};

init();

export const ENV = {
    sliderName: "xx后台管理系统", //侧边栏名称
    sliderWidth : "200px", //侧边栏最大宽度
    indexName: "xx后台", //主页名称
    baseURL: initJson.dev ? initJson.devUrl : initJson.FormalUrl, //请求地址
};
