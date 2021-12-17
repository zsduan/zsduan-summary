<template>
	<div>
		<div v-if="show_top">
			<Header @onSearch="search" @onAdd="openAdd"  :operationHeader="OPERATION_HEADER" :headerList="HEADER_LIST">
		</Header>
		</div>
		<div v-if="show_top" class="content" :style="{height:(this.$store.state.innerHeight - 290) + 'px'}">
			<TableList :tableHeader="TABALE_HEADER" :tableList="tableList" :pageSize="pageSize"
				:operation="OPERATION" @onDeL="onDeL" @SizeChange="handleSizeChange"
				@CurrentChange="handleCurrentChange"></TableList>
		</div>
		<MyPopup :isShow="show_pup" :success_txt="success_txt" :title="pup_title" @onClose="onClose"
			@onSubmit="onSubmit">
			<div class="pup-wrops">
				<div class="top-wrop">
					<div class="top">
						<label class="name">角色名称</label>
						<el-input placeholder="请输入角色名称" v-model="power_name_pup"></el-input>
					</div>
				</div>
				<div class="views-power">
					<div class="views-title">页面权限</div>
					<div class="views-list">
						<div class="item" v-for="(item,index) in viewsList" :key="index">
							<el-checkbox v-model="item.active" :label="item.title" border v-if="item.url"></el-checkbox>
						</div>
					</div>
					<div class="views-title">操作权限</div>
					<div class="views-list">
						<div class="item" v-for="(item,index) in myOperationList" :key="index">
							<el-checkbox v-model="item.active" :label="item.title" border></el-checkbox>
						</div>
					</div>
				</div>
			</div>
		</MyPopup>
	</div>
</template>

<script>
	import configList from "./config.js";
	import subMenu from "@/subMenu.json";
	import jurisdiction from "@/config/jurisdiction.json";
	export default {
		data() {
			return {
				power_name: "",
				power_name_pup: "",
				power_grade: "", //权限等级
				show_pup: false,
				pup_title: '',
				success_txt: "",
				tableList: [],
				subMenuList: subMenu,
				viewsList: [],
				myOperationList: [], //自己的操作权限
				pageIndex: 1,
				pageSize: 0, //总页码
				page_size: 10,
				parms: {
					roleName: "",
					pagePowerStr: "",
					functonPowerStr: "",
					state: 0
				},
				searchList : {},
				show_top : false
			}
		},
		mounted() {
			this.setConfigPage(configList);
			setTimeout(()=>{
				this.show_top = true;
			},200)
			this.init();
			this.roleList();
		},
		methods: {
			init() {
				this.subMenuList = subMenu;
				this.subMenuList.forEach(v => {
					v.active = false;
					v.pid = 0;
					v.list.forEach(o => {
						o.active = false;
						o.pid = v.id;
					})
				})
				let arr = [];
				this.subMenuList.forEach(v => {
					arr.push(v);
					v.list.forEach(o => {
						arr.push(o);
					})
				})

				this.viewsList = JSON.parse(JSON.stringify(arr));

				this.viewsList.forEach(v => {
					v.list = [];
				})
				this.myOperationList = [];
				for (let key in jurisdiction) {
					let title = "";
					if (key == "is_del") title = "删除";
					if (key == "is_add") title = "添加";
					if (key == "is_details") title = "详情";
					if (key == "is_edit") title = "编辑";
					let json = {
						title: title,
						active: false,
						key: key
					}
					this.myOperationList.push(json);
				}
			},
			search(e) {
				this.searchList.power_name = e.power_name;				
				this.roleList();
			},
			reset() {
				this.power_name = "";
			},
			openAdd() {
				this.show_pup = true;
				this.pup_title = "新增角色";
				this.success_txt = "新增";
				this.power_name_pup = "";
				this.init();
			},
			onClose() {
				this.show_pup = false;
			},
			onSubmit() {
				if (!this.power_name_pup) {
					this.$message({
						message: '请输入角色名称',
						type: 'warning'
					})
					return;
				}

				let data = this.powerSet();

				this.parms = {
					parms: {
						roleName: this.power_name_pup,
						pagePowerStr: data.viewsList,
						functonPowerStr: data.myOperationList,
						state: 0
					}
				}

				setTimeout(() => {
					this.$message({
						message: "角色添加成功！",
						type: 'success',
						duration: 1000
					});
					this.roleList();
					this.onClose()
				}, 500)
			},
			// 删除
			onDeL(item) {
				this.$confirm('是否删除该角色?', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
					this.$message({
						type: 'success',
						message: '删除成功!'
					});

				}).catch(() => {
					this.$message({
						type: 'info',
						message: '已取消删除'
					});
				});
			},
			// 改变页码
			handleCurrentChange(e) {
				this.pageIndex = e;
				this.roleList();
			},

			// 改变条数
			handleSizeChange(e) {
				this.pageIndex = 1;
				this.page_size = e;
				this.roleList();
			},



			// 权限清算
			powerSet() {
				let viewsList = [];
				this.viewsList.forEach(v => {
					if (!v.pid) {
						v.is_show = v.active;
						viewsList.push(v);
					}
				})
				viewsList.forEach(item => {
					this.viewsList.forEach(v => {
						if (v.pid == item.id) {
							v.is_show = v.active;
							if (v.is_show) item.is_show = true;
							delete v.pid;
							item.list.push(v);
						}
					})
					delete item.pid;
				})
				viewsList = JSON.parse(JSON.stringify(viewsList));

				viewsList.forEach(v => {
					delete v.active;
					v.list.forEach(o => {
						delete o.active;
					})
				})

				// 处理操作数据
				let myOperationList = {};
				this.myOperationList.forEach(v => {
					myOperationList[`${v.key}`] = v.active;
				})

				return {
					viewsList: this.encrypt(JSON.stringify(viewsList)),
					myOperationList: this.encrypt(JSON.stringify(myOperationList))
				}
			},
			// 获取权限
			roleList() {
				
			},

			// 权限处理 渲染权限
			powerSetShow(list) {
				let arr = [],
					pagePowerStrShow = "";
				list.pagePowerStr.forEach(v => {
					arr.push(v);
					v.list.forEach(o => {
						arr.push(o);
					})
				})
				arr.forEach(v => {
					if (v.is_show && v.url) { 
						pagePowerStrShow += v.title + "  ";
					}
				})

				let functonPowerStrShow = "";
				for (let key in list.functonPowerStr) {
					let title = "";
					if (key == "is_del") title = "删除";
					if (key == "is_add") title = "添加";
					if (key == "is_details") title = "详情";
					if (key == "is_edit") title = "编辑";
					if (list.functonPowerStr[`${key}`]) {
						functonPowerStrShow += title + "  "
					}
				}
				list.functonPowerStrShow = functonPowerStrShow;
				list.pagePowerStrShow = pagePowerStrShow;
				return list;
			},

		}
	}
</script>

<style lang="less" scoped>
	@import "../../assets/css/reset.less";

	.header {
		display: flex;
		flex-wrap: wrap;
		padding: 20px;
		padding-top: 0;
		.box-show();
		.not-select();

		>div {
			display: flex;
			align-items: center;
			margin-right: 40px;
			padding-top: 20px;

			>label {
				display: inline-block;
				padding-right: 15px;
			}
		}


		.name-title {
			width: 100px;
		}

		.btn {
			width: 75px;
			height: 30px;
			font-size: 14px;
			padding: 0 10px;
			background-color: @ThemeColor;
			border-color: @ThemeColor;
		}
	}

	.content {
		padding: 10px;
	}

	.pup-wrops {
		width: 700px;

		.top-wrop {
			display: flex;
			justify-content: space-between;
			padding-top: 20px;
			padding-bottom: 30px;
			border-bottom: 1px solid rgba(155, 155, 155, 0.7);

			>div {
				display: flex;
				align-items: center;

				label {
					padding-right: 10px;
				}

				.name {
					width: 90px;
				}
			}
		}
	}

	.views-power {
		.views-title {
			padding: 10px 0;
		}

		.views-list {
			display: flex;
			flex-wrap: wrap;
			padding-bottom: 10px;

			.item {
				padding-right: 10px;
				margin-top: 10px;
			}
		}
	}

	.options {
		padding: 0 10px;
	}
</style>
