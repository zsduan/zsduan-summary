/*
 * @Author: zs.duan
 * @Date: 2022-11-25 12:51:37
 * @LastEditors: zs.duan
 * @LastEditTime: 2022-12-15 10:45:52
 * @FilePath: \vue2+js+eui+template\src\utils\signalR.js
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
    let options = {
        connUrl : "/api/chathub",
        data : {},
        success : (reslut) =>{},
        fail : (error) =>{},
        stop : (stop) => {},
    }
    options = {
        ...options,
        ...arg[0]
    }
    if(!options.connUrl){
        options.fail({
            code : -1,
            msg : "connUrl must be not null"
        })
        return ;
    }
    if(typeof options.connUrl !== 'string' || (!Object.prototype.toString.call(options.connUrl) === "[object String]")){
        options.fail({
            code : -1,
            msg : "connUrl must be string"
        })
        return ;
    }
    if(typeof options.data != 'object'){
        options.fail({
            code : -1,
            msg : "data must be object"
        })
        return ;
    }
    SR = initSignalR(SR , options);
    startSignalR(SR , options);
    SR.onclose(closeSignalR())
}

const initSignalR = (SR , options) =>{
    SR = new signalR.HubConnectionBuilder()
        .withUrl(options.connUrl,options.data)
        .configureLogging(signalR.LogLevel.Error)
        .build()
    return SR;
}

const startSignalR = async (SR , options) =>{
    try {
        await SR.start();
        options.success({
            code : 200,
            data : {
                SR : SR,
                stop : stopSignalR(SR,options)
            }
        });
    } catch {
        setTimeout(()=>{startSignalR},1000)
    }
}

const closeSignalR = async () =>{
    await startSignalR();
}

export const stopSignalR = async (SR , options) =>{
    await SR.stop();
    options.stop({
        code : 200,
        msg : "stop success"
    })
}