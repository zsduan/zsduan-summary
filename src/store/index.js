/*
 * @Author: zs.duan
 * @Date: 2021-12-16 15:27:00
 * @LastEditors: zs.duan
 * @LastEditTime: 2021-12-17 10:29:26
 * @FilePath: \template\src\store\index.js
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		showMainBck: false,
		token: "",
		menuList: {},
		innerWidth : 0,
		innerHeight : 0
	},
	mutations: {
		showMainBck(state, params) {
			state.showMainBck = params;
		},

		setToken(state, params) {
			state.token = params;
		},

		setMenuList(state, params) {
			state.menuList = params;
		},

		setinnerWidth(state, params){
			state.innerWidth = params;
		},

		setinnerHeight (state, params){
			state.innerHeight = params;
		}
	},
	actions: {},
	modules: {}
})
