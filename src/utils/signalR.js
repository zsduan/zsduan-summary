/*
 * @Author: zs.duan
 * @Date: 2022-11-25 12:51:37
 * @LastEditors: zs.duan
 * @LastEditTime: 2022-11-25 14:28:55
 * @FilePath: \vue2+elui+template\src\utils\signalR.js
 */


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
import * as signalR from "@microsoft/signalr"

export const signalRcoont = (...arg)=>{
    let SR = {};
    let data = {
        connUrl : "/api/chathub",
        data : {},
        success : (reslut) =>{},
        fail : (error) =>{},
        stop : (stop) => {},
    }
    for (const key in data) {
        if (Object.hasOwnProperty.call(data, key)) {
           data[key] = arg[0][key];
        }
    }
    if(!data.connUrl){
        data.fail({
            code : -1,
            msg : "connUrl must be not null"
        })
        return ;
    }
    if(typeof word !== 'string' || (!Object.prototype.toString.call(word) === "[object String]")){
        data.fail({
            code : -1,
            msg : "connUrl must be string"
        })
        return ;
    }
    if(typeof data.data != 'object'){
        data.fail({
            code : -1,
            msg : "data must be object"
        })
        return ;
    }
    SR = initSignalR(SR , data);
    startSignalR(SR , data);
    SR.onclose(closeSignalR())
}

const initSignalR = (SR , data) =>{
    SR = new signalR.HubConnectionBuilder()
        .withUrl(data.connUrl,data.data)
        .configureLogging(signalR.LogLevel.Error)
        .build()
    return SR;
}

const startSignalR = async (SR , data) =>{
    try {
        await SR.start();
        data.success({
            code : 200,
            data : {
                SR : SR,
                stop : stopSignalR(SR,data)
            }
        });
    } catch {
        setTimeout(()=>{startSignalR},1000)
    }
}

const closeSignalR = async () =>{
    await startSignalR();
}

export const stopSignalR = async (SR , data) =>{
    await SR.stop();
    data.stop({
        code : 200,
        msg : "stop success"
    })
}