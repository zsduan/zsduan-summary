/*
 * @Author: zs.duan
 * @Date: 2021-12-22 09:31:48
 * @LastEditors: zs.duan
 * @LastEditTime: 2021-12-22 09:31:49
 * @FilePath: \templatef:\我的博客\adminBlog\src\components\from\cinfig.js
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
