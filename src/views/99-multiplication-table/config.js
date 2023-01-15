/*
 * @Author: zs.duan
 * @Date: 2023-01-15 14:50:11
 * @LastEditors: zs.duan
 * @LastEditTime: 2023-01-15 14:55:18
 * @FilePath: \vue2+js+eui+template\src\views\99-multiplication-table\config.js
 */

export const code1 = `
// 导入
import {multiplicationTable99} from "../../utils/99-multiplication-table"
/*
 * @name 99乘法表
 * @parame {boolen} true //是否天空数组
 * method success 成功返回
*/ 
// 使用
multiplicationTable99({
    success : (res =>{})
});
`

export const code2 = `
// 导入
import {multiplicationTable99} from "../../utils/99-multiplication-table"
/*
 * @name 99乘法表
 * @parame {boolen} true //是否天空数组
 * method success 成功返回
*/ 
// 使用
multiplicationTable99({
    is_empty : false,
    success : (res =>{})
});
`