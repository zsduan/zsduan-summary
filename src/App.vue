<!--
 * @Author: zs.duan
 * @Date: 2021-12-16 15:26:59
 * @LastEditors: zs.duan
 * @LastEditTime: 2021-12-17 11:10:33
 * @FilePath: \template\src\App.vue
-->
<template>
	<div id="app">
		<router-view />
	</div>
</template>

<style>
	@import "assets/css/reset.less";
	html,
	body {
		width: 100%;
		height: 100%;
		box-sizing: border-box;
		padding: 0px;
		margin: 0px;
	}

	#app {
		font-family: "Avenir", Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		width: 100%;
		height: 100%;
	}
</style>
