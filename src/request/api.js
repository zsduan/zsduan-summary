/*
 * @Author: zs.duan
 * @Date: 2021-12-16 17:14:42
 * @LastEditors: zs.duan
 * @LastEditTime: 2021-12-17 10:21:16
 * @FilePath: \template\src\request\api.js
 */


/*
 *@param ： baseURL ： 公共的url
 *@example  ：
 * "getRanking" : {
 *      url : baseURL + "url地址",
 *      method : "get",
 *  },
 */
const env = require("../config/env").ENV ;
console.log()
// 请求的头部
let contentType = {
    form: "application/x-www-form-urlencoded; charset=UTF-8",
    json: "application/json",
    multipart: "multipart/form-data",
    stream: "application/json",
    arraybuffer: "arraybuffer" // 图片buffer
}

const baseURL = env.baseURL;

export const api ={
    /*
        获取活动信息
    */
    "getSlider": {
        url: baseURL + "admin/getSlider",
        method: "get",
        is_loading: true
    },
}