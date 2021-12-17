/*
 * @Author: zs.duan
 * @Date: 2021-12-16 15:27:00
 * @LastEditors: zs.duan
 * @LastEditTime: 2021-12-17 11:46:37
 * @FilePath: \template\src\views\powerSet\config.js
 */
const TABALE_HEADER = [{
		lable: "角色名称",
		key: "roleName"
	},
	{
		lable: "页面权限",
		key: "pagePowerStrShow"
	},
	
	{
		lable: "操作权限",
		key: "functonPowerStrShow"
	},
	{
	
		lable: "状态",
		key: "state"
	}

]

const OPERATION = [
	// "details",
	"del"
]
// 配置顶部搜索
const HEADER_LIST = [
	{
		type : "input",
		lable : "角色名称",
		key : "power_name",
		value : ""
	},
]

const OPERATION_HEADER = {
	is_search: true,
	is_reset: true,
	is_add : true
}


let configList = {
	TABALE_HEADER,
	OPERATION,
	HEADER_LIST,
	OPERATION_HEADER
}
export default configList;