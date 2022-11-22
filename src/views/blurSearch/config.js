/*
 * @Author: zs.duan
 * @Date: 2022-11-22 20:34:33
 * @LastEditors: zs.duan
 * @LastEditTime: 2022-11-22 21:07:52
 * @FilePath: \vue2+elui+template\src\views\blurSearch\config.js
 */

export const code1 = `
//data
searchList : [
    {
        Text : "重庆",
        Value : "chongqing"
    },
    {
        Text : "上海",
        Value : "shanghai"
    },
    {
        Text : "北京",
        Value : "beijing"
    },
    {
        Text : "山西",
        Value : "shanxi"
    },
    {
        Text : "陕西",
        Value : "shanxi"
    }
],

/*
 * @name 模糊查询
 * @parame data 搜索的数据原始 Array 必填  searValue string 搜索的关键词 必填 key 匹配的对象key
*/ 


import {blurSearch} from "@/utils/blurSearch.js"
blurSearch(data , searValue , key);
`