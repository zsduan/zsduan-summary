<template>
	<div class="home" :style="{height:(this.$store.state.innerHeight) + 'px'}">
		<div class="wrops">
			<el-container>
				<!-- 侧边栏 -->
				<div class="slider">
					<el-aside :style="{maxWidth:$env.sliderWidth}">
						<Slider :menuList="menuList" @goPath="goPath" :active_slider="active_slider"></Slider>
					</el-aside>
				</div>
                
				<div class="slider-empty" :style="{width:$env.sliderWidth}"></div>
                <el-container class="main-wrop">
                    <el-container>
						<!-- 这是头部 -->
						<el-header class="headers" style="width:calc(100% - $env.sliderWidth)">
							<HomeHeader :title="header_title"></HomeHeader>
						</el-header>
						<div class="header-empty"></div>

						<el-main>
							<div class="main box-show" :style="{minHeight:(this.$store.state.innerHeight - 180) + 'px'}">
								<router-view></router-view>
							</div>
						</el-main>
						<!-- 这是底部 -->
						<el-footer>
							<div class="footer">
								<p>&copy;2021-{{year}},{{this.$env.sliderName}}</p>
							</div>
						</el-footer>
					</el-container>
				</el-container>
			</el-container>
		</div>
	</div>
</template>
<script>
	import Slider from "../components/slider/slider.vue"; //侧边栏
	import HomeHeader from "../components/home-header/home-header.vue"; //侧边栏
	import subMenu from "@/subMenu.json";
	export default {
		name: "home",
		components: {
			Slider,
			HomeHeader,
		},
		data() {
			return {
				navlist: [],
				year: "",
				user_name: "未登录", //用户名
				active_slider: "1", //当前选择
				menuList: [],
				header_title: this.$env.sliderName,
			};
		},
		mounted() {
			this.menuList = JSON.parse(this.decrypt(this.$cookie.readCookie("menu")));
			this.getYears();  //获取当前年费
			this.$store.commit("setMenuList", subMenu);
			this.changeSlider();
		},
		methods: {
			getYears() {
				let date = new Date;
				this.year = date.getFullYear();
			},

			// 页面跳转
			goPath(e) {
				this.header_title = e == '首页' ? this.$env.indexName : e ? e : this.$env.indexName;
			},

			// 自动切换侧边栏
			changeSlider() {
				this.menuList.forEach(v => {
					if (v.pathName == this.$route.name) {
						this.active_slider = v.id;
						this.goPath(v.title);
					}
					v.list.forEach(o => {
						if (o.pathName == this.$route.name) {
							this.active_slider = o.id;
							this.goPath(o.title);
						}
					})
				})
			},
		}
	};
</script>
<style lang="less" scoped>
	@import "../assets/css/reset.less";

	.slider{
			position: fixed;
	}

	.slider-empty{
		height: 100%;
	}
	.home {
		min-width: 1200px;
	}

	.wrops {
		background-color: #fff;
		min-width: 1200px;
	}

	.header {
		width: 100%;
		height: 70px;
		display: flex;
		justify-content: space-between;
		align-items: center;

		.title {
			font-size: 30px;
			font-weight: bold;
			padding-left: 20px;
		}
		
	}


	.aside {
		min-height: 700px;
		background-color: #393D49;
		overflow-y: auto;
		width: 100%;
		padding-bottom: 20px;
		-ms-overflow-style: none;
		/* IE 10+ */
		scrollbar-width: none;

		/* Firefox */
		&::-webkit-scrollbar {
			/* Chrome Safari */
			display: none;
		}

		/deep/.el-submenu {
			width: 200px;
		}

		/deep/.el-menu-item {
			width: 200px;
		}

		.title {
			text-align: center;
			font-size: 30px;
			padding: 20px 0;
			color: #fff;
		}
	}

	.main-wrop {
		background-color: #F8F8F8;
	}

	.headers {
		background-color: #fff;
		position: fixed;
		width: calc(100% - 200px);
		z-index: 9;
		.box-show();
	}

	.header-empty{
		width: 100%;
		height: 60px;
	}

	.main {
		margin: 20px;
		position: relative;
		overflow-y: auto;
		min-width: 960px;
		-ms-overflow-style: none;
		/* IE 10+ */
		scrollbar-width: none;

		/* Firefox */
		&::-webkit-scrollbar {
			/* Chrome Safari */
			display: none;
		}
	}

	.show-main {
		background-color: #fff;
		.box-show();
	}


	.footer {
		text-align: center;
		line-height: 40px;
		.not-select();
	}
</style>
