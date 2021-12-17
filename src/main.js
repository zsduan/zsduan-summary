/*
 * @Author: zs.duan
 * @Date: 2021-12-16 15:26:59
 * @LastEditors: zs.duan
 * @LastEditTime: 2021-12-17 11:55:37
 * @FilePath: \template\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import reqList from "./request/request";
import { encrypt, decrypt } from '@/common/encryp.js';
import jurisdiction from "@/config/jurisdiction.json";
import * as echarts from 'echarts';

// cookie
import cookie from "./common/cookie.js";

// 项目配置
const env = require("./config/env").ENV ;

// 引入icon
import './assets/icon/iconfont.css';


// 弹窗组件
import MyPopup from '@/components/my-popup/my-popup';
Vue.component('MyPopup', MyPopup);

// 表单组件
import TableList from '@/components/tableList/tableList';
Vue.component('TableList', TableList);

// 表单组件
import Header from '@/components/header/header';
Vue.component('Header', Header);


Vue.config.productionTip = false;

Vue.use(ElementUI,{ size: 'small', zIndex: 3000 });//全局配置饿了吗

Vue.prototype.encrypt = encrypt; //ACE加密

Vue.prototype.decrypt = decrypt; //ACE解密

Vue.prototype.$echarts = echarts;

Vue.prototype.$jurisdiction = jurisdiction ; //权限

Vue.prototype.$api = reqList; //所有请求

Vue.prototype.$env = env; //所有请求

Vue.prototype.$cookie = cookie; //cookie

Vue.prototype.setConfigPage =  (data) => {
  for(let key in data){
    Vue.prototype[`${key}`] = data[key];//初始化页面数据，在传参的时候
  }
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
