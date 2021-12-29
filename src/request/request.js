/*
 * @Author: zs.duan
 * @Date: 2021-12-16 17:15:06
 * @LastEditors: zs.duan
 * @LastEditTime: 2021-12-27 14:16:00
 * @FilePath: \adminBlog\src\request\request.js
 */

var cookie = require("../common/cookie");
import axios from 'axios';
import ElementUI from 'element-ui';
import router from '../router'
cookie = cookie.default;

/* 
 * 本页面 2021-09-23 重写
 *post和get参数相同
 *@parame url 请求路径 必填
 *@parame data 请求携带参数 
 *@parame is_url 是否拼接url  true 不拼接 传啥用啥  false 拼接默认的地址加url地址
 *@parame is_dwon 是否为下载文件
 *@parame formDatas 上传文件 本参数传在data中
 *@parame header 头部
 *
 *返回值是 Promise
 *
 */

const apiList = require("./api").api;
let reqList = {};


let LoadingFun = null;
// 加载中
const loading = () => {
    LoadingFun = ElementUI.Loading.service({
        lock: true,
        text: '正在处理，请稍等~~',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
    });
}


const $get = (obj) => {
    let urls = `${obj.url}`; //拼接 url
    urls = obj.is_url ? obj.url : urls; //是否需要重写url 接外部的请求
    return function (data) {
        let token = cookie.readCookie("TK");
        if(token){
            if(!data) data = {};
            data.token = token;
        } 
        let count = 0;
        let getData = ""; //发送数据
        for (let key in data) {
            if (count == 0) {
                getData += '?' + key + "=" + data[key];
            } else {
                getData += '&' + key + "=" + data[key];
            }
            count++;
        }
        let requestData = {
            header: obj.header || "",
            url: urls + "" + getData,
            Loading: obj.is_loading,
            is_dwon : obj.is_dwon ? true : false,
            method: "GET",
            data: {}
        }
        return request(requestData);
    }
}

const $requests = (obj) => {
    let urls = `${obj.url}`; //拼接 url
    urls = obj.is_url ? obj.url : urls; //是否需要重写url 接外部的请求
    return function (data) {
        let token = cookie.readCookie("TK");
        if(token){
            if(!data) data = {};
            data.token = token;
        } 
        let requestData = {
            header: obj.header,
            url: urls,
            Loading: obj.is_loading,
            method: obj.method,
            data: data,
            is_dwon : obj.is_dwon ? true : false,
        }
        return request(requestData);
    }
}

for (const item in apiList) {
    if (apiList[item].method == "get") {
        reqList[`${item}`] = $get(apiList[item]);
    } else {
        reqList[`${item}`] = $requests(apiList[item])
    }
}

// 请求
const request = (data) => {
    if(data.Loading){
        loading();
    }
    return new Promise((resolve, reject) => {
        axios({
            header: { 'content-type': data.header ? data.header : 'application/json; charset=utf-8' },
            url: data.url,
            method: data.method,
            data: data.data,
            responseType: data.is_dwon ? "arraybuffer" : ""
        }).then(res => {
            data.Loading ? LoadingFun.close() : "";
            if (res.status != 200 && res.status != 304) {
                ElementUI.Message({
					showClose: true,
					message: "网络或请求错误",
					type: 'warning',
					duration: 1000
				});
                reject({
                    code: -1,
                    msg: "网络或请求错误"
                });
                return;
            }
            if (res.data.code < 0) { //专属判断
                ElementUI.Message({
					showClose: true,
					message: res.data.msg,
					type: 'error',
					duration: 1000
				});
                reject({
                    code: -1,
                    msg: res.data.msg,
                    data: res.data
                });
                if(res.data.code == -104){
                    setTimeout(() => {
                        router.push({
                            name: "Login",
                        });
                    }, 1500);
                }
                return;
            }
            resolve(res.data);

        }).catch(err => {
            console.log(err);
            data.Loading ? LoadingFun.close() : "";
            ElementUI.Message({
				showClose: true,
				message: "服务器有点小问题刷新试一试",
				type: 'error',
				duration: 1000
			});
            reject({
                code: -2,
                msg: "服务器问题",
                data : err
            });
        })
    })
}

export default reqList;