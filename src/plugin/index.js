import Vue from 'vue';
import store from '../store';
import "./element-ui";

import "../assets/css/reset.scss";

import myDirective from "../directive";

import publicItem from "../components/public-item";
import dzsTable from "../components/dzs-table";
import dzsBacktop from "../components/dzs-backtop";
import dzsNavigationTitle from "../components/dzs-navigation-title";
Vue.use(publicItem);
Vue.use(dzsTable);
Vue.use(dzsBacktop);
Vue.use(myDirective);
Vue.use(dzsNavigationTitle);

// 监听浏览器窗口变化
window.onresize = () => {
    store.dispatch("isPhone/setIsPhone", window.innerWidth < 1200);
};
store.dispatch("isPhone/setIsPhone", window.innerWidth < 1200);