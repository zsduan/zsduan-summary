/*
 * @Author: zs.duan
 * @Date: 2023-02-02 15:35:53
 * @LastEditors: zs.duan
 * @LastEditTime: 2023-02-02 16:00:19
 * @FilePath: \vue2+js+eui+template\src\views\setHtml\config.js
 */
export const code1 = `
/**
 * 处理html 目前仅支持处理图片
 * @description 将图片的宽度变成 100% 高度自适应
 * @param {object} option 配置文件
 * @description option 数据详情
 * @param {string} option.html html源码
 * @param {string} [option.imgUrl] 是否需要拼接图片的url 选填
 * @return {Function} option.success 成功返回
 * @return {Function} option.fail 失败返回
 * */ 
// data
oldHtml : '<img src='' />",
newHtml : ""
// js
import setHtml from "../../utils/sethtml"
setHtml({
    html : this.oldHtml,
    success : (res)=>{
        this.newHtml = res;
    },
})
`