<template>
	<div class="public-header"  v-if="headerList.length || operationHeader.is_add">
		<div class="lable" v-for="(item,index) in headerList" :key="index">
			<label v-if="item.type && item.lable">{{item.lable}}</label>
			<!-- 输入框 -->
			<div v-if="item.type == 'input' && item.lable">
				<el-input v-model="item.value" :placeholder="'请输入' + item.lable" @input="changeInput($event,item.key)">
				</el-input>
			</div>

			<!-- 选择框 -->
			<div v-if="item.type == 'select' && item.lable" class="select-name">
				<el-select v-model="item.value" :placeholder="'请选择' + item.lable"
					@change="changeSelect($event,item.key)">
					<div class="options">
						<el-option v-for="itm in item.list" :key="itm.value" :label="itm.label" :value="itm.value">
						</el-option>
					</div>
				</el-select>
			</div>

			<!-- 时间 -->
			<div v-if="item.type == 'time' && item.lable">
				<el-date-picker v-model="item.value" type="datetimerange" align="right" unlink-panels range-separator="—" value-format="yyyy-MM-dd HH:mm" format="yyyy-MM-dd HH:mm"
					start-placeholder="开始时间" end-placeholder="结束时间" :picker-options="pickerOptions" :clearable="false"
					@change="changeTime($event,item.key)">
				</el-date-picker>
			</div>
		</div>

		<div class="btns">
			<div class="add btn-wrop" v-if="$jurisdiction.is_add && operationHeader.is_add">
				<el-button type="primary" class="btn" icon="el-icon-plus" @click="onAdd">添加</el-button>
			</div>
			<div class="search btn-wrop" v-if="operationHeader.is_search && headerList.length">
				<el-button type="primary" class="btn" icon="el-icon-search" @click="onSearch">查询</el-button>
			</div>
			<div class="export btn-wrop" v-if="operationHeader.is_export && headerList.length">
				<el-button type="primary" class="btn" icon="el-icon-upload2" @click="onExport">导出</el-button>
			</div>
			<div class="reset btn-wrop" v-if="operationHeader.is_reset && headerList.length">
				<el-button type="info" class="btn" icon="el-icon-refresh-right" @click="reset">重置</el-button>
			</div>
		</div>
	</div>
</template>

<script>
	/* 
	 *@props :headerList 表单渲染数据 
	 * 数据格式 {type : "表单类型 必填 input select time" , 
	 * 			lable : "提示内容 必填 string" , 
	 * 			key : "返回对象的关键字 必填 string",
	 * 			value:"输入参数 必填" , 
	 * 			list : [select 的数组 选填] }
	 *@props :operationHeader 操作列表 数据格式 {is_add: true,is_search: true,is_reset: true}
	 *@props : 
	 *@props :
	 * 
	 * @methods:onSearch 搜索 返回对象 key 为 headerList里面的key  未输入/未选择返回空
	 * @methods:onAdd 添加数据
	 * 
	 */
	import {
		pickerOptions,
	} from "./config.js";
	import jurisdiction from "@/config/jurisdiction.json";
	export default {
		props: {
			headerList : {
				type : Array,
				default:()=>{
					return [];
				}
			},
			operationHeader:{
				type : Object,
				default:()=>{
					return {}
					
				}
			}
		},
		data() {
			return {
				headerLists: [],
				pickerOptions: pickerOptions,
				sendData: {}, //点击搜索返回的数据
			}
		},
		created() {
			// let jurisdiction = {};
			// jurisdiction = JSON.parse(this.decrypt(this.$cookie.readCookie("functonPower")));
			this.$jurisdiction = jurisdiction;
			this.reset();
		},
		mounted() {
			
		},
		methods: {
			onSearch() {
				this.headerList.forEach(v => {
					if (v.value === "") {
						this.sendData[`${v.key}`] = "";
					}
				})
				this.$emit("onSearch",this.sendData);
			},
			// 添加事件
			onAdd() {
				this.$emit("onAdd");
			},
			reset() {
				this.headerList.forEach(v => {
					v.value = "";
				})
				this.sendData = {};
				this.onSearch();
			},
			// 导出
			onExport(){
				this.$emit("onExport");
			},
			changeInput(e, type) {
				this.sendData[`${type}`] = e;
				this.$forceUpdate();
			},
			changeSelect(e, type) {
				this.sendData[`${type}`] = e;
			},
			changeTime(e, type) {
				let startTime = this.setTime(new Date(e[0]));
				let endTime = this.setTime(new Date(e[1]));
				this.sendData[`${type}`] = {
					startTime: startTime,
					endTime: endTime
				}
			},
			// 计算时间
			setTime(date) {
				let year = date.getFullYear(),
					mouth = date.getMonth() + 1,
					day = date.getDate(),
					hours = date.getHours(),
					min = date.getMinutes(),
					sec = date.getSeconds();
				let time =
					`${year}-${this.addzro(mouth)}-${this.addzro(day)} ${this.addzro(hours)}:${this.addzro(min)}:${this.addzro(sec)}`
				return time;
			},
			addzro(num) {
				if (num < 10) {
					return '0' + num
				}
				return num;
			},
		}
	}
</script>

<style lang="less" scoped>
	@import "../../assets/css/reset.less";
	
	.public-header {
		display: flex;
		flex-wrap: wrap;
		padding: 20px;
		padding-top: 0;
		// .box-show();
		background-color: #fff;
		color: @fontColor;
		.not-select();
		>div {
			display: flex;
			align-items: center;
			margin-right: 30px;
			padding-top: 20px;

			>label {
				display: inline-block;
				padding-right: 15px;
				
			}
		}

		.btn-wrop {
			padding-left: 20px;

			&:first-child {
				padding-left: 0;
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
		}
		.el-button--primary{
			background-color: @ThemeColor;
			border-color:@ThemeColor;
		}
	}

	.options {
		padding: 0 10px;
	}
</style>
