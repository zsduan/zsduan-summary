/*
 * @Author: zs.duan
 * @Date: 2021-12-16 17:15:06
 * @LastEditors: zs.duan
 * @LastEditTime: 2021-12-16 17:40:16
 * @FilePath: \template\src\request\request.js
 */

var cookie = require("../common/cookie");
import axios from 'axios';
import ElementUI from 'element-ui';
cookie = cookie.default;

/* 
 * 本页面 2021-09-23 重写
 *post和get参数相同
 *@parame url 请求路径 必填
 *@parame data 请求携带参数 
 *@parame is_url 是否拼接url  true 不拼接 传啥用啥  false 拼接默认的地址加url地址
 *@parame formDatas 上传文件 本参数传在data中
 *@parame header 头部
 *
 *返回值是 Promise
 *
 */

const apiList = require("./api").api;
let reqList = {};


// 加载中
const loading = () => {
    const Loading = ElementUI.Loading.service({
        lock: true,
        text: '正在获取数据，请稍等~~',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
    });
    return Loading;
}


const $get = (obj) => {
    let urls = `${obj.url}`; //拼接 url
    urls = obj.is_url ? obj.url : urls; //是否需要重写url 接外部的请求

    return function (data) {
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
        let requestData = {
            header: obj.header,
            url: urls,
            Loading: obj.is_loading,
            method: obj.method,
            data: data
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
    let load = loading();
    data.Loading ? load : null;
    return new Promise((resolve, reject) => {
        axios({
            header: { 'content-type': data.header ? data.header : 'application/json; charset=utf-8' },
            url: data.url,
            method: data.method,
            data: data.data,
        }).then(res => {
            data.Loading ? load.close() : "";
            if (res.statusCode != 200 && res.statusCode != 304) {
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
            if (res.data.StatusCode != undefined && res.data.StatusCode != 1) { //专属判断
                ElementUI.Message({
					showClose: true,
					message: res.data.result.msg,
					type: 'error',
					duration: 1000
				});
                reject({
                    code: -1,
                    msg: res.data.Message,
                    data: res.data
                });
                return;
            }
            resolve(res.data);

        }).catch(err => {
            data.Loading ? load.close() : "";
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