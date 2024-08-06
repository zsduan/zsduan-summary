import Vue from 'vue';
import "./element-ui";

import "../assets/css/reset.scss";

import myDirective from "../directive";

import publicItem from "../components/public-item";
import dzsTable from "../components/dzs-table";
import dzsBacktop from "../components/dzs-backtop";
Vue.use(publicItem);
Vue.use(dzsTable);
Vue.use(dzsBacktop);
Vue.use(myDirective);