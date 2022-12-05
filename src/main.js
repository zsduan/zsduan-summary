/*
 * @Author: zs.duan
 * @Date: 2022-09-20 13:49:02
 * @LastEditors: zs.duan
 * @LastEditTime: 2022-12-05 17:51:56
 * @FilePath: \vue2+elui+template\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./router/setRouter"
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import "./assets/css/reset.css"
import {initDirective} from "./utils/instructions";
Vue.use(ElementUI);
// markdown
import mavonEditor from 'mavon-editor';
Vue.use(mavonEditor);

Vue.config.productionTip = false;

import dzsHeader from "@/components/dzs-header/index"
Vue.component("dzsHeader", dzsHeader);

import dzsCode from "@/components/dzs-code/index"
Vue.component("dzsCode", dzsCode);

// 新增指令
initDirective(Vue)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
