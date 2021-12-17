<!--
 * @Author: zs.duan
 * @Date: 2021-12-16 15:27:00
 * @LastEditors: zs.duan
 * @LastEditTime: 2021-12-17 11:11:23
 * @FilePath: \template\src\views\index\index.vue
-->
<template>
	<div class="wrop">
		欢迎使用{{this.$env.sliderName}}
	</div>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		mounted() {
			
		},
		methods: {
			
		}
	}
</script>

<style lang="less" scoped>
	@import "../../assets/css/reset.less";
	.wrop{
		font-size: 30px;
		font-weight: bold;
		text-align: center;
		padding-top: 40px;
		width: 100%;
		height: 100%;
	}
</style>
