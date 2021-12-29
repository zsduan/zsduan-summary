<template>
	<div class="table-wrop">
		<div class="list-wrop">
			<el-table :data="tableList" class="table" :height="(this.$store.state.innerHeight - 240) + 'px'" @selection-change="handleSelectionChange">
				<el-table-column type="selection" width="55" v-if="show_Checkbox">
				</el-table-column>
				<el-table-column :label="itm.lable" v-for="(itm,idx) in tableHeader" :key="idx" :width="itm.width">
					<template slot-scope="scope">
						<div v-if="itm.is_switch">
							<el-switch
								v-model="scope.row[`${itm.key}`]"
								active-color="#0065ff"
								@change="changSwicth($event,scope.$index,tableList,itm.key)"
								>
							</el-switch>
						</div>
						<div v-else-if="itm.is_img">
							<el-image 
								style="width: 40px; height: 60px"
								:src="scope.row[`${itm.key}`]" 
								:preview-src-list="[scope.row[`${itm.key}`]]">
							</el-image>
						</div>
						<div v-else-if="itm.is_tag && scope.row[`${itm.key}`]">
							<el-tag
								:color="scope.row.color"
								effect="dark"
								size="medium"
								>
								{{ scope.row[`${itm.key}`] }}
							</el-tag>
						</div>
						<span :style="{color:itm.is_color ? scope.row.color : ''}" class="scope-span" v-else>{{ scope.row[`${itm.key}`] }}</span>
					</template>
				</el-table-column>
				<el-table-column fixed="right" label="操作"
					v-if="$jurisdiction.is_add || $jurisdiction.is_edit || $jurisdiction.is_details || $jurisdiction.is_del">
					<template slot-scope="scope">
						<el-button type="text" size="small" v-for="(item,index) in operation" :key="index">
							<span v-if="item == 'add' && $jurisdiction.is_add" @click="onAdd">新增</span>
							<span v-if="item == 'edit' && $jurisdiction.is_edit"
								@click="onEdit(scope.$index,tableList)">编辑</span>
							<span v-if="item == 'details' && $jurisdiction.is_details"
								@click="onDetails(scope.$index,tableList)">详情</span>
							<el-popconfirm title="确定删除吗？" @confirm="onDeL(scope.$index,tableList)">
                                <template #reference>
                                    <span v-if="item == 'del' && $jurisdiction.is_del">删除</span>
                                </template>
                            </el-popconfirm>
							<!-- 自定义名称 -->
						</el-button>
						<el-button type="text" size="small" @click="onOther(scope.$index,tableList)">
							<slot name="tableBtn"></slot>
						</el-button>
					</template>
				</el-table-column>
			</el-table>
		</div>
		<div class="table-footer" v-if="pageSize > maxSize">
			<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
				:page-sizes="[maxSize, maxSize * 2, maxSize * 4]" layout="total, sizes, prev, pager, next, jumper" :total="pageSize">
			</el-pagination>
		</div>
	</div>
</template>

<script>
	/* 
	 *@props tableList 列表数据
	 *@props operation 操作数据 add 新增 edit 编辑 details 详情 del 删除
	 *@props tableHeader 表头数据及表单key  lable 表头名称  key 显示关键字 is_tag:是否为tag is_img:是否为图片 is_switch是否为开关
	 *@props pageSize 总页码
	 *@props show_Checkbox 是否显示多选 默认 false 不显示  true 显示
	 *@props maxSize 最多条数
	 * 
	 *@methods boxChange 是否选中  返回选中的列表数据 
	 *@methods SizeChange 改变条数  返回选中条数
	 *@methods CurrentChange 改变页码  返回改变页码
	 *@methods onAdd 新增
	 *@methods onEdit 编辑 返回编辑数据
	 *@methods onDetails 详情  返回详情数据
	 *@methods onDeL 删除 返回删除数据
	 *@methods changSwicth 改变开关
	 * 
	 */
	import jurisdiction from "@/config/jurisdiction.json";

	export default {
		name: "table-list",
		props: {
			tableList: { //表格列表数据
				type: Array,
				default: () => {
					return []
				}
			},
			operation: { //表格操作
				type: Array,
				default: () => {
					return []
				}
			},
			tableHeader: {
				type: Array,
				default: () => {
					return []
				}
			},
			pageSize: { //总页数
				type: Number,
				default: () => {
					return 0
				}
			},
			show_Checkbox: {
				type: Boolean,
				default: () => {
					return false
				}
			},
			maxSize : {
				type :Number,
				default:()=>{
					return 10
				}
			}
		},
		data() {
			return {
				
			}
		},
		created() {
			// let jurisdiction = {};
			// jurisdiction = JSON.parse(this.decrypt(this.$cookie.readCookie("functonPower")));
			this.$jurisdiction = jurisdiction;
		},
		methods: {
			// 选择条数改变
			handleSizeChange(e) {
				this.$emit("SizeChange", e);
			},
			// 页码改变
			handleCurrentChange(e) {
				this.$emit("CurrentChange", e);
			},
			// 新增
			onAdd() {
				if (!this.$jurisdiction.is_add) return;
				this.$emit("onAdd");
			},
			// 编辑
			onEdit(index, list) {
				if (!this.$jurisdiction.is_edit) return;
				this.$emit("onEdit", list[index]);
			},
			// 详情
			onDetails(index, list) {
				if (!this.$jurisdiction.is_details) return;
				this.$emit("onDetails", list[index]);
			},
			// 删除
			onDeL(index, list) {
				if (!this.$jurisdiction.is_del) return;
				this.$emit("onDeL", list[index]);
			},
			// 选中事件
			handleSelectionChange(val) {
				this.$emit("boxChange", val);
			},

			// 其他点击
			onOther(index, list) {
				this.$emit("onOther", list[index]);
			},

			// 改变开关
			changSwicth(e,index,list,key){
				this.$emit("changSwicth",{e:e,item:list[index],key:key})
			}

		}
	}
</script>

<style lang="less" scoped>
	@import "../../assets/css/reset.less";

	.table-wrop {
		height: 100%;
		position: relative;

		.list-wrop {
			padding: 0 10px;
			height: calc(100% - 95px);
			overflow-y: scroll;

			-ms-overflow-style: none;
			/* IE 10+ */
			scrollbar-width: none;

			/* Firefox */
			&::-webkit-scrollbar {
				/* Chrome Safari */
				display: none;
			}

			/deep/.el-table th,
			.el-table tr {
				background-color: #f3f8ff;

				.cell {
					font-weight: normal;
					span{
						display: block;
					}
				}
			}

			/deep/.el-table__fixed-right-patch {
				background-color: #f3f8ff;
			}
		}


		.table-footer {
			position: absolute;
			bottom: 10px;
			right: 10px;
			z-index: 9;
		}

		.operation {
			cursor: pointer;

			>span {
				padding-right: 10px;
				color: #0000EE;

				span {
					font-size: 14px;
				}

				&:last-child {
					padding-right: 0;
				}
			}
		}

		.empty {
			text-align: center;
			padding-top: 10px;
		}
		
		.scope-span{
			color: @fontColor;
		}

		/deep/.el-tag--dark{
			border-color: transparent;
			display: inline-block !important;
			padding:  0 10px;
			margin: 0 auto;
		}


	}
</style>
