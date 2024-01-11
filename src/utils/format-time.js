/**
 * @name 格式化时间
 * @author zs.duan
 * @eamil zs.duan@qq.com
 * @version 2.0.0
 * @description 共有两个方法 formatTime 和 asyncFormatTime 其中 asyncFormatTime 返回一个Promise对象 
 * @description 可以使用 Vue.use(); 挂载到Vue原型上 $formatTime $asyncFormatTime
 * @description chainFormatTime 链式调用
 * */ 

/**
 * 格式化时间 内部方法
 * @param {Date} date 日期对象
 * @param {String} format 格式化字符串
 * */
const _formatTime = function (date, format) {
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    let millisecond = date.getMilliseconds();
    let o = {
        "M+": month,
        "d+": day,
        "H+": hour,
        "m+": minute,
        "s+": second,
        "S+": millisecond,
    };
    if (/(y+)/.test(format)) {
        format = format.replace(
            RegExp.$1,
            (year + "").substr(4 - RegExp.$1.length)
        );
    }
    for (var k in o) {
        if (new RegExp("(" + k + ")").test(format)) {
            format = format.replace(
                RegExp.$1,
                RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(String(o[k]).length)
            );
        }
    }
    return format;
}


/**
 * @name 格式化时间 
 * @description options 建议使用对象传参 也可以使用字符串 | 时间戳 | 日期对象
 * @description 所有参数不传时 默认为当前时间
 * @param {Object | string | Date | number} [options] 配置对象 | 日期字符串 | 日期对象 | 时间戳
 * @param {String} options.format 格式化字符串 yyyy-MM-dd HH:mm:ss
 * @param {Date | string | number} [options.date] 日期对象 | 日期字符串 | 时间戳
 * @param {Function} [options.success] 成功返回
 * @param {Function} [options.fail] 失败返回
 * @param {Function} [options.complete] 完成返回
 * @returns {String} 格式化后的时间
 * */
export const formatTime = function (options) {
    if(!options)options = {};
    if (typeof options === 'string' || typeof options === 'number' || Object.prototype.toString.call(options) === '[object Date]') {
        options = {
            date: options
        }
    }
    if (typeof options !== 'object' && options) {
        throw new Error('options must be an object or string or number or Date object');
    }
    let option = {
        format: "yyyy-MM-dd HH:mm:ss",
        isInternal : false , // 是否是内部调用
        date: new Date(),
        success: function (reslut) { },
        fail: function (error) { },
        complete: function (reslut) { }
    }
    options = Object.assign(option, options);
    let date = options.date;
    let format = options.format;
    if(!format)format = "yyyy-MM-dd HH:mm:ss";
    if(!date)date = new Date();
    if (typeof format !== 'string') {
        options.complete({
            code: -1,
            msg: "format 必须是字符串"
        });
        options.fail('format 必须是字符串');
        if(options.isInternal)return {code: -1, data: 'format 必须是字符串'};
        throw new Error('format 必须是字符串');
    }
    try {
        date = new Date(date);
    }catch (error) {
        options.complete({
            code: -1,
            msg: "时间格式错误"
        });
        options.fail('时间格式错误');
        if(options.isInternal) return {code : -1 , data : '时间格式错误'};
        throw new Error('时间格式错误');
    }

    let reslut = _formatTime(date, format);
    options.complete({
        code: 200,
        msg: "success",
        data: reslut
    });
    options.success(reslut);
    if(options.isInternal) return {code : 200 , data : reslut};
    return reslut;
}

/**
 * @name 格式化时间 
 * @description options 建议使用对象传参 也可以使用字符串 | 时间戳 | 日期对象
 * @description 所有参数不传时 默认为当前时间
 * @param {Object | string | Date | number} [options] 配置对象 | 日期字符串 | 日期对象 | 时间戳
 * @param {String} options.format 格式化字符串 yyyy-MM-dd HH:mm:ss
 * @param {Date | string | number} [options.date] 日期对象 | 日期字符串 | 时间戳
 * @param {Function} [options.success] 成功返回
 * @param {Function} [options.fail] 失败返回
 * @param {Function} [options.complete] 完成返回
 * @returns {Promise} 返回一个Promise对象
 * */
export const asyncFormatTime = function (options = {}) {
    options.isInternal = true;
    let data = formatTime(options);
    return new Promise((resolve, reject) => {
        if(data.code == -1){
            return reject(data.data);
        }
        resolve(data.data);
    })
}

/**
 * 链式调用
 * @param {Date | string | number} [time] 日期对象 | 日期字符串 | 时间戳
 * @returns {Object} 返回一个对象
 * */ 
export function chainFormatTime(time){
    let returnTime = "";
    if(!time)time = new Date();
    try {
        time = new Date(time);
    }catch (error) {
        throw new Error('时间格式错误');
    }
    function format(formatStr){
        if(typeof formatStr !== 'string')throw new Error('format 必须是字符串');
        returnTime = _formatTime(time, formatStr);
        return this
    }
    
    return {
        format,
        get time(){
            return returnTime;
        }
    }
}

/**
 * 挂载到Vue原型上
 * */ 
const install = function (Vue) {
    Vue.prototype.$formatTime = formatTime;
    Vue.prototype.$asyncFormatTime = asyncFormatTime;
    Vue.prototype.$chainFormatTime = chainFormatTime;
}

/**
 * 支持CommonJs规范
 * */ 
if (typeof module === 'object' && module.exports) {
    module.exports = {
        formatTime ,
        asyncFormatTime,
        chainFormatTime,
        install
    };
}

export default {
    formatTime ,
    asyncFormatTime,
    chainFormatTime,
    install
}