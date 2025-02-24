import { ElLoading, ElNotification } from 'element-ui'
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
 * @param {Boolean} [options.downFile] 是否是文件下载
 * @param {Function} [options.success] 成功回调
 * @param {Function} [options.fail] 失败回调
 * @param {Function} [options.complete] 完成回调
 * @returns {Promise} Promise对象
 * */

export const fetchRequset = (options) => {
    options.retryCount = options.retryCount || 1;
    let headers = !options.downFile && !options.uplodFile ? Object.assign({
        'Content-Type': 'application/json;charset=UTF-8',
    }, options.headers) : options.headers;
    let fetchOption = {
        method: options.method?.toUpperCase() || 'GET',
        headers: headers || {},
        credentials: fetchRequset.defaults.withCredentials ? 'include' : 'same-origin',
        timeout: options.timeout ||  fetchRequset.defaults.timeout,
        body: null,
    }
    if (options.method?.toUpperCase() !== 'GET') {
        if (!options.uplodFile) {
            if (!options.data) options.data = { _t: new Date().getTime() };
        }
        fetchOption.body = options.uplodFile ? options.data : JSON.stringify(options.data);
    }
    let loading = null;
    if (options.loading) {
        loading = showLoading(options.loadingMsg);
    }
    let config = fetchRequset.interceptors.request({ ...options , ...fetchOption });
    if (config) {
        for (let key in fetchOption) {
            fetchOption[key] = config[key] ? config[key] : fetchOption[key];
        }
        for (let key in options) {
            options[key] = config[key] ? config[key] : options[key];
        }
    }
    let url = options.url.indexOf('http') === 0 ? options.url : fetchRequset.defaults.baseURL + config.url;
    let timeoutTimer = 0;
    return new Promise((resolve, reject) => {
        if(fetchOption.timeout){
            timeoutTimer = setTimeout(() => {
                loading && loading.close();
                options.fail && options.fail({
                    message: '请求超时'
                });
                options.complete && options.complete({
                    code: 408,
                    data: '请求超时'
                });
                reject({
                    message: '请求超时'
                });
                clearTimeout(timeoutTimer);
            }, fetchOption.timeout)
        }
        fetch(url, fetchOption).then(res => {
            res = fetchRequset.interceptors.response(res);
            if (res.status === 200) {
                if (options.downFile) {
                    return res.blob();
                }
                return res.json();
            }
            reject(res);
            return res.json().then(err => {
                loading && loading.close();
                err = fetchRequset.interceptors.error(err);
                options.fail && options.fail(err);
                options.complete && options.complete({
                    code: res.status,
                    data: res.statusText
                });
                if (err.message) {
                    ElNotification({
                        title: '错误',
                        message: err.message,
                        type: 'error'
                    });
                }
                reject(err);
                return err;
            })
        }).then(res => {
            if(options.downFile){
                options.complete && options.complete({
                    code: 200,
                    data: res
                });
                options.success && options.success({
                    code: 200,
                    data: res
                });
                resolve(res);
                return ;
            }
            if (options.downFile) {
                options.success && options.success({
                    blob: res,
                    blobUrl: URL.createObjectURL(res)
                });
                options.complete && options.complete({
                    code: 200,
                    data: {
                        blob: res,
                        blobUrl: URL.createObjectURL(res)
                    }
                });
                resolve({
                    blob: res,
                    blobUrl: URL.createObjectURL(res)
                });
                return;
            }
            options.success && options.success(res);
            options.complete && options.complete({
                code: 200,
                data: res
            });
            resolve(res);
        }).catch((error) => {
            let retryCount = options.retryCount || -1;
            if(retryCount < fetchRequset.defaults.retryCount && retryCount >= 0){
                options.retryCount = retryCount + 1;
                return fetchRequset(options);
            }
            error = fetchRequset.interceptors.error(error);
            options.fail && options.fail(error);
            options.complete && options.complete({
                code: error.status,
                data: error.statusText
            });
            reject(error);
        })
    }).finally(() => {
        timeoutTimer && clearTimeout(timeoutTimer)
        if (loading) loading.close();
    })
}

fetchRequset.defaults = {
    baseURL: "",
    timeout:  12000,
    withCredentials: false,
    retryCount : 4
}

fetchRequset.interceptors = {
    request: (config) => {
        return config;
    },
    response: (res) => {
        return res;
    },
    error: (error) => { 
        return error;
    }
}

/**
 * 请求拦截
 * @param {Object} options 请求配置
 * @param {Function} options.before 请求之前拦截
 * @param {Function} options.fail 请求错误拦截
 * @param {Function} options.after 请求之后拦截
 * */
export const requestInterceptorsOnFetch = (options) => {
    let option = {
        before: () => { },
        fail: () => { },
        after: () => { }
    }
    Object.assign(option, options)
    fetchRequset.interceptors.request = (config) => {
        option.before && option.before(config);
        return config;
    }

    fetchRequset.interceptors.error = (error) => {
        option.fail && option.fail(error);
        return error;
    }

    fetchRequset.interceptors.response = (res) => {
        option.after && option.after(res);
        return res;
    }

}

/**
 * @name fetchRequset请求配置
 * @param {Object} config fetchRequset配置
 * @param {Boolean} config.withCredentials 是否携带cookie
 * @param {Number} config.timeout 超时时间
 * @param {String} config.BASE_URL 请求地址
 * */ 
export const fetchRequsetRequestConfig = config => {
    let configs = {
        withCredentials : true,
        timeout : 12000,
        BASE_URL : "",
        retryCount : 4
    }
    if(typeof config === "object"){
        Object.assign(configs, config);
    }
    console.log(configs , fetchRequset.defaults)
    fetchRequset.defaults.withCredentials = configs.withCredentials || false;
    fetchRequset.defaults.timeout = configs.timeout || 12000;
    fetchRequset.defaults.baseURL = configs.BASE_URL || "";
    fetchRequset.defaults.retryCount = configs.retryCount || 4;
}

fetchRequsetRequestConfig();