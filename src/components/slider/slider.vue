<template>
	<div>
		<div class="aside" :style="{height:(this.$store.state.innerHeight) + 'px'}">
			<!-- 为后面自定义用 -->
			<slot></slot>
			<div class="title" v-if="title">{{title}}</div>
			<div class="title" v-else>{{navTitle}}</div>
			<el-col class="el-col-back">
				<el-menu background-color="#393D49"  text-color="#999" :default-active="active_slider"
					active-text-color="#fff">
					<div v-for="(item,index) in menuList" :key="index" class="aside-title" >
						<el-submenu :index="(item.id).toString()" v-if="item.list.length && item.is_show">
							<template slot="title" >
								<div :class="title ? 'show_pup' : ''">
									<i class="iconfont" :class="item.icon"></i>
									<span>{{item.title}}</span>
								</div>
							</template>	
							<div v-if="itm.is_show">
								<el-menu-item-group  v-for="(itm,idx) in item.list" :key="idx" >
									<el-menu-item :index="itm.id" @click="goPath(index,idx)">
										<div :class="title ? 'show_pup' : ''">
											<i class="iconfont" :class="itm.icon"></i>
											<span>{{itm.title}}</span>
										</div>
									</el-menu-item>
								</el-menu-item-group>
							</div>
						</el-submenu>
						<div @click="goPath(index)" class="aside-title" v-if="item.is_show">
							<el-menu-item :index="(item.id).toString()" v-if="!item.list.length">
								<div :class="title ? 'show_pup' : ''">
									<i class="iconfont" :class="item.icon"></i>
									<span>{{item.title}}</span>
								</div>
							</el-menu-item>
						</div>
					</div>
				</el-menu>
			</el-col>
		</div>
	</div>
</template>

<script>
	/* 
	 * @data : 2021-09-13
	 * @props : title : 页面标题
	 * @props : menuList : 侧边栏列表
	 * @props ：active_slider : 默认展示
	 * 
	 * @methods : goPath : 跳转路径
	 */
	export default {
		name: "slider",
		props: {
			title: { //标题
				type: String,
				default: () => {
					return ""
				}
			},
			menuList: { //菜单
				type: Array,
				default: () => {
					return []
				}
			},
			active_slider: { //首先显示
				type: String,
				default: () => {
					return "1"
				}
			}
		},
		data() {
			return {
				isCollapse: true,
				navTitle : this.$env.sliderName
			}
		},

		methods: {
			// 跳转
			goPath(index, idx) {
				let v = this.menuList[index];
				if (idx != undefined) {
					v = this.menuList[index].list[idx]
				}
				if (v.pathName) {
					this.$router.push({
						name: v.pathName,
					});
					this.$emit("goPath", v.title);
				}
			},
		}

	}
</script>

<style lang="less" scoped>
	@import "../../assets/css/reset.less";
	
	.aside {
		min-height: 700px;
		background-color: @sliderColor;
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
		.el-col-back{
			background-color: @sliderColor;
		}
		/deep/.el-menu-item{
			background-color: @sliderColor !important;
		}
		
		/deep/.el-submenu__title{
			background-color: @sliderColor !important;
		}
		
		/deep/.menubar{
			background-color: @sliderColor !important;
		}
		
		/deep/.el-menu-item-group__title{
			background-color: @sliderColor !important;
		}


		.title {
			text-align: center;
			font-size: 22px;
			color: #878fa7;
			line-height: 60px;
			font-family: Avenir,Helvetica Neue,Arial,Helvetica,sans-serif;
			font-weight: bold;
			&::after{
				content: '';
				display: block;
				margin: 0 auto;
				width: 85%;
				height: 1px;
				background-color: hsla(0,0%,70.6%,.3);				
			}
		}
	}

	.aside-title {
		width: 200px;
		.is-active{
			background-color:@ThemeColor!important;
		}
		i{
			font-size: 20px;
			margin-right: 10px;
		}
		span{
			font-size: 14px;
		}
	}
</style>
