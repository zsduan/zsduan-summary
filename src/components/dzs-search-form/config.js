/*
 * @Author: zs.duan
 * @Date: 2022-12-26 16:41:09
 * @LastEditors: zs.duan
 * @LastEditTime: 2022-12-26 16:41:10
 * @FilePath: \vue2+js+eui+template\src\components\dzs-search-form\config.js
 */

export const pickerOptions = {
	shortcuts: [{
		text: '最近一周',
		onClick(picker) {
			const end = new Date();
			const start = new Date();
			start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
			picker.$emit('pick', [start, end]);
		}
	}, {
		text: '最近一个月',
		onClick(picker) {
			const end = new Date();
			const start = new Date();
			start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
			picker.$emit('pick', [start, end]);
		}
	}, {
		text: '最近三个月',
		onClick(picker) {
			const end = new Date();
			const start = new Date();
			start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
			picker.$emit('pick', [start, end]);
		}
	}]
}
