/**
 * @name signalR连接 .net
 * @date 2022-11-25
 * 
*/ 

import * as signalR from "@microsoft/signalr";

/**
 * @name signalR连接 .net
 * @date 2022-11-25
 * @param {Object} option
 * @param {String} option.url 连接的url
 * @param {Function} option.success 成功方法
 * @param {Function} option.fail 失败方法
 * @param {Function} option.stop 停止后返回的方法
 * @returns {
 *      code : 200,
 *      data : {
 *          SR : SR, //连接成功后的返回
 *          stop : stopSignalR(SR,data) //返回的停止函数
 *      }
 * }
 *
 **/ 
export const signalRcoont = (option)=>{
    let SR = {};
    let options = {
        url : "",
        success : (reslut) =>{},
        fail : (error) =>{},
        stop : (stop) => {},
    }
    Object.assign(options , option);
    if(!options.url || typeof options.url !== 'string'){
        options.fail({
            code : -1,
            msg : "url must be not null / url must be string"
        })
        console.error("url must be not null / url must be string")
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

export default signalRcoont