/*
 * @Author: zs.duan
 * @Date: 2022-09-30 17:07:40
 * @LastEditors: zs.duan
 * @LastEditTime: 2022-11-23 17:56:46
 * @FilePath: \vue2+elui+template\src\utils\setTime.js
 */

/**
 * 获取格式化时间
 * @param {Object} option 配置对象
 * @param {String} option.format 格式化字符串 yyyy-MM-dd HH:mm:ss
 * @param {Date | string | number} [option.date] 日期对象 | 日期字符串 | 时间戳
 * @param {Function} [option.success] 成功返回
 * @param {Function} [option.fail] 失败返回
 * @returns {String} 格式化后的时间
 * @example
 * getTime({
 * format : 'yyyy-MM-dd HH:mm:ss',
 * date : new Date(),
 * success : (reslut)=>{},
 * }) // 2021-04-05 15:54:28
 * */
function getTime(option){
    let options = {
        format: "yyyy-MM-dd HH:mm:ss",
        date: new Date(),
        success: (reslut) => { },
        fail : (error)=>{}
    }
    options = Object.assign(options, option);
    if (!options.format) {
        options.format = "yyyy-MM-dd HH:mm:ss"
    }
    if (typeof options.format !== 'string') {
        options.fail('format must be a string');
        return ;
    }
    let date = options.date;
    let format = options.format;
    if(date && typeof date == 'number'){
        try {
            date = new Date(date);
        }catch (error) {
            options.fail('Incorrect timing');
            throw new Error('Incorrect timing');
        }
    }
    if (date && typeof date == 'string') {
        try {
            date = new Date(date);
        } catch (error) {
            options.fail('Incorrect timing');
            throw new Error('Incorrect timing');
        }
    }
    if (Object.prototype.toString.call(date) !== '[object Date]') {
        options.fail('date must be a Date object');
        return ;
    }
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
    options.success(format);
    return format;
}

getTime.install = function (Vue) {
    Vue.prototype.$getTime = getTime;
}
export default getTime;
