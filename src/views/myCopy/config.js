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
/**
 * @name 复制
 * @param {object} option 配置对象
 * @desc option 配置说明
 * @param {string} option.content 复制内容
 * @param {string} option.type 复制类型 Text Html Image
 * @param {Function} option.success 成功回调
 * @param {Function} option.fail 失败回调
 * @return
    success : (reslut) =>{}, //成功
    fail : (error) =>{} //失败
*/
myCopy({
    content : content,
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
/**
 * @name 复制
 * @param {object} option 配置对象
 * @desc option 配置说明
 * @param {string} option.content 复制内容
 * @param {string} option.type 复制类型 Text Html Image
 * @param {Function} option.success 成功回调
 * @param {Function} option.fail 失败回调
 * @return
    success : (reslut) =>{}, //成功
    fail : (error) =>{} //失败
*/
myCopy({
    content : content,
    type : "html" , //Html Image 仅支持 windows  Text 全系统支持支持
    is_input : false , //是否为 原始的input复制 仅支持文字 默认 false
    success : (reslut) =>{}, //成功
    fail : (error) =>{} //失败
})
`