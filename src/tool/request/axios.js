import axios from "axios";
import { ElLoading, ElNotification } from 'element-ui';

console.dir(axios);

/**
 * 请求拦截
 * @param {Object} options 请求配置
 * @param {Function} options.before 请求之前拦截
 * @param {Function} options.fail 请求错误拦截
 * @param {Function} options.after 请求之后拦截
 * */
export const requestInterceptorsOnAxios = (options) => {
    let option = {
        before: () => { },
        fail: () => { },
        after: () => { }
    }
    option = Object.assign(option, options);
    axios.interceptors.request.use(
        config => {
            // 对ie10 11等浏览器的兼容
            if (config.method?.toUpperCase() === 'GET') {
                config.params = {
                    ...config.params
                }
            }
            option.before && option.before(config);
            return config;
        },
        error => {
            option.fail && option.fail(error);
            return Promise.reject(error);
        }
    );

    axios.interceptors.response.use(
        response => {
            option.after && option.after(response);
            return response;
        },
        error => {
            option.fail && option.fail(error);
            return Promise.reject(error);
        }
    );
}

/**
 * 加载loading
 * @param {String} [msg] 提示信息
 * @returns {Object} loading对象
 * */
const showLoading = (msg = '请求中') => {
    const loading = ElLoading.service({
        lock: true,
        text: msg,
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
    });
    return loading;
}

/**
 * axios请求方法
 * @param {object | String} options 请求参数配置 或者 请求地址
 * @param {string} options.url 请求地址
 * @param {string} [options.method] 请求方法
 * @param {object} [options.data] 请求参数
 * @param {object} [options.params] 请求参数 get
 * @param {object} [options.headers] 请求头
 * @param {Boolean} [options.loading] 是否显示loading
 * @param {string} [options.loadingMsg] loading提示信息
 * @param {Number} [options.timeout] 超时时间
 * @param {Boolean} [options.downFile] 是否是文件下载
 * @param {Function} [options.success] 成功回调
 * @param {Function} [options.fail] 失败回调
 * @param {Function} [options.complete] 完成回调
 * @returns {Promise} Promise对象
 * */
export const axiosRequest = (options) => {
    let loading = null;
    if (options.loading) loading = showLoading(options.loadingMsg);
    options.retryCount = options.retryCount || 1;
    return new Promise((resolve, reject) => {
        axios({
            url: options.url,
            method: options.method,
            headers: options.headers,
            data: options.data,
            params: options.params,
            responseType: options.downFile ? 'blob' : 'json'
        }).then(res => {
            if (res.status === 200) {
                options.success && options.success(res.data);
                options.complete && options.complete(res.data);
                resolve(res.data);
            } else {
                if (res.data.message) {
                    ElNotification({
                        title: '错误',
                        message: res.data.message,
                        type: 'error'
                    });
                }
                options.fail && options.fail(res.data);
                options.complete && options.complete(res.data);
                reject(res.data);
            }
        }).catch(err => {
            let retryCount = options.retryCount || -1;
            if(retryCount < setting.retryCount && retryCount >= 0){
                options.retryCount = retryCount + 1;
                return axiosRequest(options);
            }
            options.fail && options.fail(err);
            options.complete && options.complete(err);
            reject(err);
            err?.response?.data.message && ElNotification({
                title: '错误',
                message: err.response.data.message,
                type: 'error'
            });
        }).finally(() => {
            if (loading) loading.close();
        })
    })
}

/**
 * @name axios请求配置
 * @param {Object} config axios配置
 * @param {Boolean} config.withCredentials 是否携带cookie
 * @param {Number} config.timeout 超时时间
 * @param {String} config.BASE_URL 请求地址
 * */ 
export const axiosRequestConfig = config => {
    let configs = {
        withCredentials : true,
        timeout : 12000,
        BASE_URL : "",
        retryCount : 4
    }
    if(typeof config === "object"){
        Object.assign(configs, config);
    }
    axios.defaults.withCredentials = configs.withCredentials || false;
    axios.defaults.timeout = configs.timeout || 12000;
    axios.defaults.baseURL = configs.BASE_URL || "";
    axios.defaults.retryCount = configs.retryCount || 4;
}

axiosRequestConfig();

export default axiosRequest;