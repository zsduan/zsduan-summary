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
 * @returns {Promise} 返回一个Promise对象
 * */
const formatTime = function (options) {
    if(!options)options = {};
    if (typeof options === 'string' || typeof options === 'number' || Object.prototype.toString.call(options) === '[object Date]') {
        options = {
            date: options
        }
    }
    if (typeof options !== 'object') {
        throw new Error('options must be an object or string or number or Date object');
    }
    let option = {
        format: "yyyy-MM-dd HH:mm:ss",
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
    return new Promise((resolve, reject) => {
        if (typeof format !== 'string') {
            options.complete({
                code: -1,
                msg: "format 必须是字符串"
            });
            options.fail('format 必须是字符串');
            reject('format 必须是字符串');
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
            reject('时间格式错误');
            throw new Error('时间格式错误');
        }

        let reslut = _formatTime(date, format);
        options.complete({
            code: 200,
            msg: "success",
            data: reslut
        });
        options.success(reslut);
        resolve(reslut);
    })
}

module.exports = formatTime