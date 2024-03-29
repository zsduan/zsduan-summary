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
    if(typeof options.date == 'string'){
        options.date = options.date.replace(/-/g , '/');
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
 * @name 时间处理 只支持链式调用 
 * @description 所有参数不传时 默认为当前时间
 * @description format 格式化时间
 * @description diff 对比时间差
 * @description last 前n天(小时/周)后n天(小时/周)
 * @description week 获取指定日期是星期几 
 * @description day 指定日期是当前(年、月、周)的多少天
 * @description leapYear 今年是否是闰年
 * */
class Time {
    /**
     * 格式化时间
     * @param {Object | string | number | Date | Function} [options] 配置参数/回调函数 可以是对象 字符串 时间戳 时间对象
     * @param {string | number | Date} [options.date] 时间
     * @param {string} [options.format] 格式化方式 yyyy-MM-dd HH:mm:ss
     * @param {Function} [callback] 回调函数
     * @returns {string} 格式化后的时间
     * */ 
    format(options , callback){
        if(typeof options == 'function'){
            callback = options;
            options = {};
        }
        
        if(!callback) callback = (timeInfo) =>{};
        return _format(options , callback);
    };
    /**
     * 对比时间差
     * @param {Object} options 配置参数
     * @param {Date | string | number} options.startDate 开始时间
     * @param {Date | string | number} [options.endDate] 结束时间 不传默认为当前时间
     * @param {Function} [callback] 回调函数
     * @returns {Object} 对比后的时间差
     * @description 返回的数据格式 {allday : 0 , day : 0 , hours : 0 , allHours : 0 , minutes : 0 , allMinutes : 0 , seconds : 0 , allSeconds : 0 , timeDiff : 0}
     * */ 
    diff(options , callback){
        if(!callback) callback = (timeInfo) =>{};
        return _diff(options , callback)
    };
    /**
     * 前n天(小时/周)后n天(小时/周) 前用负数 后用正数
     * @param {Object | Function} [options] 配置参数/回调函数
     * @param {Date | string | number} [options.date] 时间 默认为当前时间
     * @param {number} [options.num] 需要前后多少天(小时/周) 默认1
     * @param {string} [options.type] 类型 day hour week 默认 day
     * @param {Function} [callback] 回调函数
     * @returns {Object} 时间信息
     * */ 
    last(options , callback){
        if(!callback) callback = (timeInfo) =>{};
        if(typeof options == 'function'){
            callback = options;
            options = {};
        }
        return _last(options , callback)
    };
    /**
     * 获取当前日期是星期几
     * @param {Date | string | number | Function} [date] 时间/直接为回调函数 默认为当前时间 
     * @param {Function} [callback] 回调函数
     * @return {String} 返回星期几
     * */ 
    week(date , callback){
        if(typeof date == 'function'){
            callback = date;
            date = null;
        }
        if(!callback) callback = (timeInfo) =>{};
        return _week(date , callback)
    };
    /**
     * 指定日期是当前(年、月、周)的多少天
     * @param {Object | Function} [options] 配置参数/回调函数
     * @param {Date | string | number} [options.date] 时间 默认为当前时间
     * @param {string} [options.type] 类型 year month week 默认 year
     * @param {Function} [callback] 回调函数
     * @returns {Number} 返回指定日期是当前(年、月、周)的多少天
     * */ 
    day(options , callback){
        if(!callback) callback = (timeInfo) =>{};
        if(typeof options == 'function'){
            callback = options;
            options = {};
        }
        return _day(options , callback)
    };
    /**
     * 是否为闰年
     * @param {Date | string | number | Function} [date] 时间/直接为回调函数 默认为当前时间
     * @param {Function} [callback] 回调函数
     * @returns {Boolean} 返回是否为闰年
     * */ 
    leapYear(date , callback){
        if(!callback) callback = (timeInfo) =>{};
        if(typeof date == 'function'){
            callback = date;
            date = null;
        }
        return _leapYear(date , callback);
    };
}

/**获取当前时间的年月日 时分秒 时间戳*/
function _getNowDate(date){
    if(!date)date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let time = date.getTime();
    return {year,month,day,hour,minutes,seconds ,time}
} 

/**格式化时间*/ 
function _format(options , callback){
    let data = formatTime(options);
    if(data.code == -1) return;
    let date = options.date ? new Date(options.date) : new Date();
    callback({
        ..._getNowDate(date),
        format : data,
        date : new Date(options.date)
    })
    return data
}

/**对比时间差*/ 
function _diff(options , callback){
    if(typeof options !== 'object')throw new Error('options must be an object');
    if(!options.startDate)throw new Error('startDate must be null');
    if(!options.endDate)options.endDate = new Date();
    if(options.startDate && typeof options.startDate == 'string'){
        options.startDate = options.startDate.replace(/-/g, "/"); 
    }
    if(options.endDate && typeof options.endDate == 'string'){
        options.endDate = options.endDate.replace(/-/g, "/"); 
    }
    try {
        options.startDate = new Date(options.startDate);
        options.endDate = new Date(options.endDate);
    }catch (error) {
        throw new Error('时间格式错误');
    }
    let timeDiff = options.startDate.getTime() - options.endDate.getTime();
    let sendData = {
        allday : 0 , //所有差天数
        day : 0 , //天数
        hours : 0 , //小时
        allHours : 0 , //所有小时
        minutes : 0 , //分钟
        allMinutes : 0 , //所有分钟
        seconds : 0 , //秒
        allSeconds : 0 , //所有秒
        timeDiff : timeDiff,
    }
    sendData.allday = Number((timeDiff / (24 * 3600 * 1000)).toFixed(3));
    sendData.day = Math.floor(timeDiff / (24 * 3600 * 1000));
    sendData.hours = Math.floor(timeDiff % (24 * 3600 * 1000) / (3600 * 1000));
    sendData.allHours = Number(Math.floor(timeDiff / (3600 * 1000)).toFixed(3));
    sendData.minutes = Math.floor(timeDiff % (3600 * 1000) / (60 * 1000));
    sendData.allMinutes = Number(Math.floor(timeDiff / (60 * 1000)).toFixed(3));
    sendData.seconds = Math.floor(timeDiff % (60 * 1000) / 1000);
    sendData.allSeconds = Number(Math.floor(timeDiff / 1000).toFixed(3));
    callback(sendData);
    return sendData;
}

/**前n天(小时/周)后n天(小时/周) 前用负数 后用正数*/
function _last(options , callback){
    if(typeof options !== 'object')throw new Error('options must be an object');
    if(!options.date)options.date = new Date();
    if(!options.num)options.num = 1;
    if(!options.type)options.type = 'day';
    if(options.date && typeof options.date == 'string'){
        options.date = options.date.replace(/-/g, "/"); 
    }
    try {
        options.date = new Date(options.date);
    }catch (error) {
        throw new Error('时间格式错误');
    }
    let sendData = {
        format : "" ,
        date : null
    }
    if(options.type == 'day'){
        sendData.date = new Date(options.date.setDate(options.date.getDate() + options.num));
        sendData.format = _formatTime(sendData.date , 'yyyy-MM-dd');
        Object.assign(sendData , _getNowDate(sendData.date));
    }
    if(options.type == 'hour'){
        sendData.date = new Date(options.date.setHours(options.date.getHours() + options.num));
        sendData.format = _formatTime(sendData.date , 'yyyy-MM-dd HH:mm:ss');
        Object.assign(sendData , _getNowDate(sendData.date));
    }
    if(options.type == 'week'){
        sendData.date = new Date(options.date.setDate(options.date.getDate() + options.num * 7));
        sendData.format = _formatTime(sendData.date , 'yyyy-MM-dd');
        Object.assign(sendData , _getNowDate(sendData.date));
    }
    callback(sendData);
    return sendData;
} 

/**获取日期是星期几*/
function _week(date , callback){
    const weekList = ['日','一','二','三','四','五','六'];
    if(!date)date = new Date();
    if(typeof date == 'string'){
        date = date.replace(/-/g, "/");
    }
    try {
        date = new Date(date);
    }catch (error) {
        throw new Error('时间格式错误');
    }
    let week = date.getDay();
    let sendData = {
        format : _formatTime(date , 'yyyy-MM-dd') ,
        date : date,
        ..._getNowDate(date),
        week : weekList[week]
    }
    callback(sendData);
    return weekList[week];
} 

/**
 * 指定日期是当前(年、月、周)的多少天
 * */ 
function _day(options , callback){
    if(typeof options !== 'object')throw new Error('options must be an object');
    if(!options.date)options.date = new Date();
    if(!options.type)options.type = 'year';
    if(options.date && typeof options.date == 'string'){
        options.date = options.date.replace(/-/g, "/"); 
    }
    try {
        options.date = new Date(options.date);
    }catch (error) {
        throw new Error('时间格式错误');
    }
    let sendData = {
        format : _formatTime(options.date , 'yyyy-MM-dd') ,
        date : options.date,
        ..._getNowDate(options.date),
        num : 0
    }
    let start = null;
    let diff = null;
    let oneDay = 0;
    switch(options.type){
        case 'year':
            start = new Date(options.date.getFullYear(), 0, 0);
            diff = options.date - start;
            oneDay = 1000 * 60 * 60 * 24;
            sendData.num = Math.floor(diff / oneDay);
            break;
        case 'month':
            start = new Date(options.date.getFullYear(), options.date.getMonth(), 0);
            diff = options.date - start;
            oneDay = 1000 * 60 * 60 * 24;
            sendData.num = Math.floor(diff / oneDay);
            break;
        case 'week':
            const week = options.date.getDay();
            sendData.num = week;
            break;
        default:
            throw new Error('type is not defined');
    }
    callback(sendData);
    return sendData.num;
}

/**
 * 指定日期是否为闰年
 * */ 
function _leapYear(date , callback){
    if(!date)date = new Date();
    if(typeof date == 'string'){
        date = date.replace(/-/g, "/");
    }
    if(date.length == 4 || typeof date == 'number'){
        date = date + '/01/01';
    }
    try {
        date = new Date(date);
    }catch (error) {
        throw new Error('时间格式错误');
    }
    let year = date.getFullYear();
    let sendData = {
        format : _formatTime(date , 'yyyy-MM-dd') ,
        date : date,
        ..._getNowDate(date),
        leapYear : false
    }
    if((year % 4 == 0 && year % 100 != 0) || year % 400 == 0){
        sendData.leapYear = true;
    }
    callback(sendData);
    return sendData.leapYear;
}

/**
 * @name 时间处理 只支持链式调用 
 * @description 所有参数不传时 默认为当前时间
 * @description format 格式化时间
 * @description diff 对比时间差
 * @description last 前一天后一天
 * @description week 获取指定日期是星期几 
 * @description day 指定日期是当前(年、月、周)的多少天
 * @description leapYear 今年是否是闰年
 * */
const setTime = new Time();

/**
 * 挂载到Vue原型上
 * */ 
const install = function (Vue) {
    Vue.prototype.$formatTime = formatTime;
    Vue.prototype.$asyncFormatTime = asyncFormatTime;
    Vue.prototype.$chainFormatTime = chainFormatTime;
    Vue.prototype.$setTime = setTime;
}

/**
 * 支持CommonJs规范
 * */ 
if (typeof module === 'object' && module.exports) {
    module.exports = {
        formatTime ,
        asyncFormatTime,
        chainFormatTime,
        install,
        setTime
    };
}

export default {
    formatTime ,
    asyncFormatTime,
    chainFormatTime,
    install,
    setTime
}