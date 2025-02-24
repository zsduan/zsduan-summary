
import { axiosRequest, requestInterceptorsOnAxios , axiosRequestConfig} from "./axios";
import { fetchRequset , requestInterceptorsOnFetch , fetchRequsetRequestConfig} from "./fecth";
import { socketCoonnect , socketSend } from "./socket";
/**
 * 请求方法
 * @param {object | String} options 请求参数配置 或者 请求地址
 * @param {string} options.url 请求地址
 * @param {string} [options.method] 请求方法
 * @param {object} [options.data] 请求参数
 * @param {object} [options.params] 请求参数 get
 * @param {object} [options.headers] 请求头
 * @param {Boolean} [options.loading] 是否显示loading
 * @param {string} [options.loadingMsg] loading提示信息
 * @param {Boolean} [options.downFile] 是否是文件下载
 * @param {Function} [options.success] 成功回调
 * @param {Function} [options.fail] 失败回调
 * @param {Function} [options.complete] 完成回调
 * @param {string} [method] 请求方法 方便参数传递 调用
 * @param {object} [data] 请求参数 方便参数传递 调用
 * @param {Function} [callback] 回调函数 方便参数传递 调用
 * @returns {Promise} Promise对象
 * */

export const request = (options , method , data , callback ) => {
    let option  = {
        url: "",
        method: "get",
        data: {},
        params: {},
        headers: {},
        loading: false,
        loadingMsg: "加载中...",
        uplodFile: false,
        downFile: false,
        success: () => { },
        fail: () => { },
        complete: () => { }
    }
    option.method = method || "get";
    option.data = data || {};
    option.success = callback || option.success;
    if (typeof options === "string") option.url = options;
    else option = Object.assign(option, options);
    if(option.method?.toUpperCase() === 'GET'){
        let params = '';
        let url = option.url;
        for(let key in options.params){
            params += `${key}=${options.params[key]}&`;
        }
        for(let key in options.data){
            params += `${key}=${options.data[key]}&`;
        }
        if(params){
            params = params.substring(0, params.length - 1);
            url += `?${params}&_t=${new Date().getTime()}`;
        }else{
            if(url.indexOf('?') === -1){
                url += `?_t=${new Date().getTime()}`;
            }else{
                if(url.indexOf('?') === url.length - 1){
                    url += `_t=${new Date().getTime()}`;
                }else{
                    url += `&_t=${new Date().getTime()}`;
                }
            }
        }
        option.params = {};
        option.data = {};
        option.url = url;
    }
    return new Promise((resolve, reject) => {
        if (!options) {
            let message = "请求数据为空";
            console.error(message);
            option.fail && option.fail(message);
            reject(message);
            return;
        }
        if (!option.url) {
            let message = "请求地址不能为空 本次请求已终止";
            console.error(message);
            option.fail && option.fail(message);
            reject(message);
            return;
        }

        if (request.defaluts.requestType == 'axios' || !window.fetch) {
            requestInterceptorsOnAxios();
            axiosRequest(option).then(res => {
                resolve(res);
            }).catch(err => {
                reject(err);
            })
            return;
        }
        fetchRequset(option).then(res =>{
            resolve(res);
        }).catch(err => {
            reject(err);
        })
    })
}

/**
 * @name post 请求
 * @param {object | String} options 请求参数配置 或者 请求地址
 * @param {string} [options.url] 请求地址
 * @param {object} [options.data] 请求参数
 * @param {object} [options.params] 请求参数 get
 * @param {object} [options.headers] 请求头
 * @param {Boolean} [options.loading] 是否显示loading
 * @param {string} [options.loadingMsg] loading提示信息
 * @param {Boolean} [options.downFile] 是否是文件下载
 * @param {Function} [options.success] 成功回调
 * @param {Function} [options.fail] 失败回调
 * @param {Function} [options.complete] 完成回调
 * @param {string} [data] 请求数据
 * @param {Function} [callback] 回调函数
 * @returns {Promise} Promise对象
 * 
 * */ 
request.post = (options , data , callback) =>{
    let option  = {
        url: "",
        method: "post",
        data: {},
        params: {},
        headers: {},
        loading: false,
        loadingMsg: "加载中...",
        uplodFile: false,
        downFile: false,
        success: () => { },
        fail: () => { },
        complete: () => { }
    }
    if(typeof options === "string"){
        option.url = options;
    }else{
        option = Object.assign(option, options);
    }
    return request(option, "post", data, callback);
}


/**
 * @name get 请求
 * @param {object | String} options 请求参数配置 或者 请求地址
 * @param {string} [options.url] 请求地址
 * @param {object} [options.data] 请求参数
 * @param {object} [options.params] 请求参数 get
 * @param {object} [options.headers] 请求头
 * @param {Boolean} [options.loading] 是否显示loading
 * @param {string} [options.loadingMsg] loading提示信息
 * @param {Boolean} [options.downFile] 是否是文件下载
 * @param {Function} [options.success] 成功回调
 * @param {Function} [options.fail] 失败回调
 * @param {Function} [options.complete] 完成回调
 * @param {string} [data] 请求数据
 * @param {Function} [callback] 回调函数
 * @returns {Promise} Promise对象
 * 
 * */ 
request.get = (options, data , callback) =>{
    let option = {
        url: "",
        method: "get",
        data: {},
        params: {},
        headers: {},
        loading: false,
        loadingMsg: "加载中...",
        uplodFile: false,
        downFile: false,
        success: () => { },
        fail: () => { },
        complete: () => { }
    }
    if(typeof options === "string"){
        option.url = options;
    }else{
        option = Object.assign(option, options);
    }
    return request(option, "get", data, callback);
}

/**基本配置信息*/
request.defaluts = {
    requestType : 'auto', // 请求类型 auto 自动判断  axios axios请求  fetch fetch请求
} 

/**导出请求拦截*/ 
export const requestInterceptors = (options) =>{
    if(request.defaluts.requestType == 'axios' || !window.fetch){
        requestInterceptorsOnAxios(options);
        return;
    }
    requestInterceptorsOnFetch(options);
}
/**
 * @name 导出请求配置
 * @param {Object} config fetchRequset配置
 * @param {Boolean} config.withCredentials 是否携带cookie
 * @param {Number} config.timeout 超时时间
 * @param {String} config.BASE_URL 请求地址
 * @param {string} config.requestType 请求类型 auto 自动判断  axios axios请求  fetch fetch请求
 * */ 
export const requestConfig = (config) =>{
    request.defaluts.requestType = config.requestType;
    if(request.defaluts.requestType == 'axios' || !window.fetch){
        axiosRequestConfig(config);
        return;
    }
    fetchRequsetRequestConfig(config);
} 

request.webSocket = {
    socketCoonnect,
    socketSend
}

export default request;