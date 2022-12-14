/*
 * @Author: zs.duan
 * @Date: 2022-11-25 14:22:15
 * @LastEditors: zs.duan
 * @LastEditTime: 2022-11-25 14:24:03
 * @FilePath: \vue2+elui+template\src\views\signalR\config.js
 */
export const code1 = `
/*
 * @name signalR连接 .net、
 * @parame connUrl 连接的url
 * @parame data 连接中携带的参数 object
 * @method success 成功方法
 * @method fail 失败方法
 * @method stop 停止后返回的方法
 * @return {
 * code : 200,
    data : {
        SR : SR, //连接成功后的返回
        stop : stopSignalR(SR,data) //返回的停止函数
    }}
 *
*/ 
// 使用
import {signalRcoont} from "@/utils/signalR";
signalRcoont({
    connUrl : "",
    data : {},
    success : (reslut) =>{},
    fail : (error) =>{},
    stop : (stop) => {},
})
`