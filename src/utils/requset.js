/**
 * @date: 2023-12-31 
 * @LastEditors: zsduan
 * @author: zsduan
 * */

import axios from "axios";

/**
 * toast提示
 * @param {Function} showToast 显示内容
 * @param {Function} clearToast 清除加载中
 * */

const toast = {
    toastElement: null,
    init() {
        // 使用CSS来样式化toast
        const style = document.createElement('style');
        style.textContent = `
        .axios-toast {
            position: fixed;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
            background: rgba(0, 0, 0, 0.7);
            color: #fff;
            padding: 10px 20px;
            border-radius: 5px;
            z-index: 9999;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .axios-toast .loading {
            margin-right: 10px;
            border: 2px solid #fff;
            border-top: 2px solid transparent;
            border-radius: 50%;
            width: 20px;
            height: 20px;
            animation: spin 1s linear infinite;
        }
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
        `;
        document.head.appendChild(style);
    },
    /**
    * @param {object | string} option
    * @param {string} option.msg 提示信息
    * @param {number} option.duration 延时时间
    * @param {boolean} option.isLoading 加载中
     * */

    showToast(option) {
        let options = {
            msg: "",
            duration: 1000,
            isLoading: false
        }
        if (typeof option == 'string') {
            options.msg = option
        } else {
            Object.assign(options, option);
        }
        this.toastElement = document.createElement('div');
        this.toastElement.className = 'axios-toast';
        if (options.isLoading) {
            const loading = document.createElement('div');
            loading.className = 'loading';
            this.toastElement.appendChild(loading);
        }
        this.toastElement.textContent = options.msg;
        document.body.appendChild(this.toastElement);
        if (options.isLoading) return;
        setTimeout(() => {
            this.clearToast();
        }, options.duration);
    },
    clearToast() {
        if (this.toastElement) {
            document.body.removeChild(this.toastElement);
            this.toastElement = null;
        }
    }
}

toast.init();

/**
 * 请求配置封装
 * @param {Object} option
 * @param {Number} [option.timeout] 请求超时时间 默认10000
 * @param {String} [option.baseUrl] 请求基础地址 默认""
 * @param {Boolean} [option.withCredentials] 是否携带cookie 默认true
 * @param {Function} [option.beforRequest] 请求前回调
 * @param {Function} [option.afterRequest] 请求后回调
 * @param {Function} [option.fail] 请求失败回调
 * */
const requestSetting = (option) => {
    let options = {
        timeout: 10000,
        baseUrl: "",
        withCredentials: true,
        beforRequest: (config) => { },
        afterRequest: (res) => { },
        fail: (err) => { }
    }
    if(!option){
        option = {};
    }
    Object.assign(options, option);
    axios.defaults.timeout = options.timeout;
    axios.defaults.baseURL = options.baseUrl;
    axios.defaults.withCredentials = options.withCredentials;
    axios.interceptors.request.use((config) => {
        // 对ie10 11等浏览器的兼容
        if (config.method === 'get') {
            config.params = {
                ...config.params,
                _t: new Date().getTime()
            }
        }
        options.beforRequest(config);
        return config;
    })
    axios.interceptors.response.use((res) => {
        options.afterRequest(res);
        return res;
    }, (err) => {
        // 对 401 404 405 500 等错误进行处理
        if (error.response) {
            switch (error.response.status) {
                case 401:
                    toast.showToast("未授权");
                    break;
                case 404:
                    toast.showToast("请求地址不存在");
                    break;
                case 405:
                    toast.showToast("请求方式错误");
                    break;
                case 500:
                    toast.showToast("服务器错误");
                    break;
                default:
                    toast.showToast("未知错误");
                    break;
            }
        }
        options.fail(err);
        return Promise.reject(err);
    })
}

requestSetting();

/**
 * 请求封装
 * @param {Object} options
 * @param {String} options.url 请求地址
 * @param {Boolean} [options.isLoading] 是否显示loading 默认false
 * @param {String} [options.loadingText] 加载中提示文字
 * @param {String} [options.method] 请求方式 默认post
 * @param {Object} [options.data] 请求数据 默认{}
 * @param {Object} [options.params] 请求参数 默认{}
 * @param {Object} [options.headers] 请求头 默认{"Content-Type": "application/json"}
 * @param {Function} [options.success] 请求成功回调
 * @param {Function} [options.fail] 请求失败回调
 * @returns Promise
 */

const request = (options = {}) => {
    let option = {
        url: "",
        isLoading: false,
        loadingText : "数据获取中",
        method: "post",
        data: {},
        params: {},
        headers: {
            "Content-Type": "application/json"
        },
        success: (res) => { },
        fail: (err) => { }
    }
    Object.assign(option, options);
    if (isLoading) {
        toast.showToast({
            msg: options.loadingText,
            isLoading: true
        });
    }
    return new Promise((resolve, reject) => {
        axios({
            url: option.url,
            method: option.method,
            data: option.data,
            params: option.params,
            headers: option.headers
        }).then(res => {
            option.success(res);
            resolve(res);
        }).catch(err => {
            option.fail(err);
            reject(err);
        }).finally(() => {
            toast.clearToast();
        })
    })
}
export default {
    requestSetting,
    request
}
