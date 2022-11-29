/*
 * @Author: zs.duan
 * @Date: 2022-11-23 19:50:45
 * @LastEditors: zs.duan
 * @LastEditTime: 2022-11-29 21:11:00
 * @FilePath: \vue2+elui+template\src\views\myCopy\config.js
 */

export const code1 = `
// 导入
import {myCopy} from "@/utils/myCopy";
// 使用
/*
 * @name 复制
 * @parame Text 复制的文本
 * @return {
 * success : (reslut) =>{}, //成功
    fail : (error) =>{} //失败
 * }
*/ 
myCopy({
    Text : this.Text,
    type : "navigator" , //navigator 浏览器自带 / input 原生 input 方法 兼容ie
    success : (reslut) =>{}, //成功
    fail : (error) =>{} //失败
})
`