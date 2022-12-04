/*
 * @Author: zs.duan
 * @Date: 2022-11-23 19:50:45
 * @LastEditors: zs.duan
 * @LastEditTime: 2022-12-04 14:32:40
 * @FilePath: \vue2+elui+template\src\views\myCopy\config.js
 */

export const code1 = `
// 导入
import {myCopy} from "@/utils/myCopy";
// 使用
/*
 * @name 复制
 * @parame copyContent 复制的内容
 * @parame is_input 是否为 原始的input复制 仅支持文字 默认 false
 * @parame is_input 为false 支持 Html Html 仅支持 windows  Text 全系统支持支持
 * @return
    success : (reslut) =>{}, //成功
    fail : (error) =>{} //失败
*/
myCopy({
    copyContent : copyContent,
    type : "Text" , //Html Image 仅支持 windows  Text 全系统支持支持
    is_input : false , //是否为 原始的input复制 仅支持文字 默认 false
    success : (reslut) =>{}, //成功
    fail : (error) =>{} //失败
})
`

export const code2 = `
// 导入
import {myCopy} from "@/utils/myCopy";
// 使用
/*
 * @name 复制
 * @parame copyContent 复制的内容
 * @parame is_input 是否为 原始的input复制 仅支持文字 默认 false
 * @parame is_input 为false 支持 Html Html 仅支持 windows  Text 全系统支持支持
 * @return
    success : (reslut) =>{}, //成功
    fail : (error) =>{} //失败
*/
myCopy({
    copyContent : copyContent,
    type : "html" , //Html Image 仅支持 windows  Text 全系统支持支持
    is_input : false , //是否为 原始的input复制 仅支持文字 默认 false
    success : (reslut) =>{}, //成功
    fail : (error) =>{} //失败
})
`