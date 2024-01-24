/*
 * @Author: zs.duan
 * @Date: 2022-11-25 14:05:26
 * @LastEditors: zs.duan
 * @LastEditTime: 2022-11-25 14:07:45
 * @FilePath: \vue2+elui+template\src\views\readeXlsx\config.js
 */

export const code1 = `
/**
 * 新版xlsx读取 支持xlsx和xls
 * @param {Object | File} option 配置信息 | 文件blod 
 * @param {File | String} option.file 文件blod | 文件id | 文件ref
 * @param {any} [option.Vue] vue的this指向 当file为ref时必填
 * @param {Object} option.tableConfig 表格配置 可选
 * @param {String} option.tableConfig.boder 表格边框 是否有边框 默认1px solid #ccc
 * @param {String} option.tableConfig.padding 表格内边距 默认5px
 * @param {String} option.tableConfig.fontSize 表格字体大小 默认14px
 * @param {String} option.tableConfig.borderColor 表格边框颜色 默认#ccc
 * @param {String} option.tableConfig.backgroundColor 表格背景颜色 默认#fff
 * @param {String} option.tableConfig.color 表格字体颜色 默认#000
 * @param {Function} option.success 成功回调
 * @param {Function} option.fail 失败回调
 * @returns {
 *    code : 200,
 *    data : Object, //json数据
 *    value : Object, //value rowspan colspan 数据
 *    html : Object, //展示的html
 *    cvs : Object, // cvs
 *    formulae : Object, //生成公式列表(带有值回退)
 *    TextUtf16 : Object, // 文字
 *    xlsxname : String, //文件名称
 *    sheetname : Object, //sheet名称
 *    outCvs : Function, //导出cvs
 *    outXlsx : Function, //导出xlsx
 *    outXls : Function, //导出xls
 * }
 * */

import {readeExcel , asyncReadeExcel} from "../../utils/readeXlsx";
// readeExcel 为同步读取
// asyncReadeExcel 为异步读取
// 使用方法
readeExcel({
    file : "myfile",
    Vue : this,
    success:(res) =>{
        
    },
})
`