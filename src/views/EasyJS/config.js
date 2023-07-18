/*
 * @Author: zs.duan
 * @Date: 2022-12-26 14:19:31
 * @LastEditors: zs.duan
 * @LastEditTime: 2022-12-26 14:44:56
 * @FilePath: \vue2+js+eui+template\src\views\EasyJS\config.js
 */

export const code1 = `
// 方法1
const newJson = JSON.parse(JSON.stringify(oldJson));
// 方法2
const newJson = {...oldJson}
`;

export const code2 = `
/**
 * 延时函数
 * @param {Number} [time] 延时时间 默认500ms
 * @param {Function} [fn] 回调函数
 * */ 
const sleep = (time = 500 , fn) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (fn && typeof fn === 'function') {
                resolve(fn())
            }else{
                resolve(true)
            }
        }, time)
    })
}

// 使用
await sleep(1000);
`

export const code3 = `
const flatten = list => list.reduce((prev, next) => ([
    ...prev,
    ...(Array.isArray(next) ? flatten(next) : [next])
]), []);

// 使用

flatten([[1, 2, [3, 4], 5, [6, [7, 8]]]]); // = [1, 2, 3, 4, 5, 6, 7, 8]
`

export const code4 = `
const ascending = (fn) => (a, b) => {
    const valA = fn(a);
    const valB = fn(b);
    return valA < valB ? -1 : valA > valB ? 1 : 0;
}

// 使用
const byPrice = ascending(val => val.price);
[{ price: 300 }, { price: 100 }, { price: 200 }].sort(byPrice); 
// = [{ price: 100 }, { price: 200 }, { price: 300 }]
`

export const code5 = `
const descending = (fn) => (a, b) => {
    const valA = fn(b);
    const valB = fn(a);
    return valA < valB ? -1 : valA > valB ? 1 : 0;
}

// 使用
const byPrice = descending(val => val.price);
[{ price: 300 }, { price: 100 }, { price: 200 }].sort(byPrice); 
// = [{ price: 300 }, { price: 200 }, { price: 100 }]
`

export const code6 = `
const reverseString = string => [...string].reverse().join('');
// 使用
reverseString('Medium'); // 'muideM'
`

export const code7 = `
// 是否已为IE浏览器
    IEVersion() {
        let userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
        let isIE =
            userAgent.indexOf("compatible") > -1 &&
            userAgent.indexOf("MSIE") > -1; //判断是否IE<11浏览器
        let isEdge = userAgent.indexOf("Edge") > -1 && !isIE; //判断是否IE的Edge浏览器
        let isIE11 =
            userAgent.indexOf("Trident") > -1 &&
            userAgent.indexOf("rv:11.0") > -1;
        if (isIE) {
            let reIE = new RegExp("MSIE (\\d+\\.\\d+);");
            reIE.test(userAgent);
            let fIEVersion = parseFloat(RegExp["$1"]);
            if (fIEVersion == 7) {
                return 7;
            } else if (fIEVersion == 8) {
                return 8;
            } else if (fIEVersion == 9) {
                return 9;
            } else if (fIEVersion == 10) {
                return 10;
            } else {
                return 6; //IE版本<=7
            }
        } else if (isEdge) {
            return "edge"; //edge
        } else if (isIE11) {
            return 11; //IE11
        } else {
            return -1; //不是ie浏览器
        }
    }
`

export const code8 = `
/**
 * 获取 当前天数的指定前后天数
 * @param {Date} [date] 当前日期
 * @param {Number} [day] 前后天数 -1：前一天 1：后一天
 * */
getNextDate(date, day) {
    let dd = new Date(date);
    dd.setDate(dd.getDate() + day);
    let y = dd.getFullYear();
    let m = dd.getMonth() + 1 < 10 ? "0" + (dd.getMonth() + 1) : dd.getMonth() + 1;
    let d = dd.getDate() < 10 ? "0" + dd.getDate() : dd.getDate();
    return y + "-" + m + "-" + d;
},
`


export const code9 = `
/**
 * 将url参数转换为对象
 * @param {String} [url] url地址
 * */ 
parseQueryString(url) {
    url = url == null ? window.location.href : url
    const search = url.substring(url.lastIndexOf('?') + 1)
    const obj = {}
    const reg = /([^?&=]+)=([^?&=]*)/g
    search.replace(reg, (rs, $1, $2) => {
        const name = decodeURIComponent($1)
        let val = decodeURIComponent($2)
        val = String(val)
        obj[name] = val
        return rs
    })
    return obj
}
`

export const code10 = `
/**
 * 将对象转换为url参数
 * @param {Object} obj 对象
 * */ 
param(json) {
    if (!json) return ''
    return cleanArray(
        Object.keys(json).map(key => {
            if (json[key] === undefined) return ''
            return encodeURIComponent(key) + '=' + encodeURIComponent(json[key])
        })
    ).join('&')
}
`

export const code11 = `
/**
 * 深拷贝
 * @param {Object} source 对象
 * */ 
deepClone(source) {
    if (!source && typeof source !== 'object') {
        throw new Error('error arguments', 'deepClone')
    }
    const targetObj = source.constructor === Array ? [] : {}
    Object.keys(source).forEach(keys => {
        if (source[keys] && typeof source[keys] === 'object') {
            targetObj[keys] = deepClone(source[keys])
        } else {
            targetObj[keys] = source[keys]
        }
    })
    return targetObj
}
`


export const code12 = `
import axios  from "axios";

/**
 * 文件上传下载
 * @param {Object} options
 * @param {String} options.url 请求地址
 * @param {String} [options.method] 请求方式 默认post
 * @param {File} [options.file] 文件 File对象 和 FormData对象必须有一个 优先级 File > FormData
 * @param {FormData} [options.FormData] FormData对象 和 File对象必须有一个
 * @param {Object} [options.header] 请求头 默认{"Content-Type" : "multipart/form-data"}
 * @param {Function} [options.onUploadProgress] 上传进度回调
 * @param {Function} [options.onDownloadProgress] 下载进度回调
 * @param {Function} [options.success] 成功回调
 * @param {Function} [options.fail] 失败回调
 * @returns {void}
*/
const fileAxios = (options) => {
    let option = {
        url : "",
        method : "post",
        file : null,
        FormData : null,
        header : {
            "Content-Type" : "multipart/form-data"
        },
        onUploadProgress : (progress) => {},
        onDownloadProgress : (progress) => {},
        success : (res) => {},
        fail : (err) => {}
    }
    Object.assign(option, options);
    if(option.url === ""){
        throw new Error("url不能为空");
    }
    if(option.file === null && option.FormData === null){
        throw new Error("file和FormData不能同时为空");
    }
    let formData = null;
    if(option.file){
        formData = new FormData();
        formData.append("file", option.file);
        option.file = formData;
    }else{
        formData = option.file;
    }
    axios({
        url : option.url,
        method : option.method,
        data : formData,
        headers : option.header,
        onUploadProgress : (progressEvent)=>{
            let upLoadProgress= progressEvent.loaded / progressEvent.total * 100 ;//实时获取上传进度
            option.onUploadProgress(upLoadProgress);
        },
        onDownloadProgress : (progressEvent)=>{
            let downLoadProgress= progressEvent.loaded / progressEvent.total * 100 ;//实时获取下载进度
            option.onDownloadProgress(downLoadProgress);
        },
    }).then((res)=>{
        option.success(res);
    }).catch((err)=>{
        option.fail(err);
    });
}

export default fileAxios;
`