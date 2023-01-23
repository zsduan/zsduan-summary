/*
 * @Author: zs.duan
 * @Date: 2022-11-22 20:34:33
 * @LastEditors: zs.duan
 * @LastEditTime: 2022-12-15 09:36:23
 * @FilePath: \vue2+js+eui+template\src\views\blurSearch\config.js
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
 * @parame data 搜索的数据原始 Array 必填
 * @parame searValue string 搜索的关键词 必填
 * @parame key 匹配的对象key
 * @method success 返回成功
 * @method fail 返回失败
*/ 

// methods
import {blurSearch} from "@/utils/blurSearch.js"
blurSearch(
    {
        list : [],
        searValue : "",
        key : "",
        success : (reslut) =>{},
        fail : (error) =>{}
    }
);
`