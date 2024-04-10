/*
 * @Author: zs.duan
 * @Date: 2022-09-30 17:10:34
 * @LastEditors: zs.duan
 * @LastEditTime: 2022-09-30 17:18:51
 * @FilePath: \vue2+js+eui+template\src\views\setTime\config.js
 */

export const code1 = `
// 共有两个方法 formatTime 和 asyncFormatTime 其中 asyncFormatTime 返回一个Promise对象
import {formatTime , asyncFormatTime , chainFormatTime} from "../../utils/format-time";


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

// 方式一
formatTime({
    date : new Date(),
    format : "yyyy-MM-dd HH:mm:ss",
    success : (res)=>{
        this.time2 = res
    },
    fail : (err)=>{
        console.log(err)
    },
})

// 方式二
let time = formatTime({
    date : new Date(),
    format : "yyyy-MM-dd",
});

// 方式三
formatTime(new Date())

// 方式四 Promise
asyncFormatTime({
    date : new Date(),
    format : "yyyy-MM-dd HH:mm:ss",
}).then((res)=>{
    this.time3 = res
}).catch((err)=>{
    console.log(err)
})

// 方式五 链式调用
chainFormatTime(new Date()).format("yyyy-MM-dd HH:mm:ss").time;

// 方式六 统一调用 不支持Promise 但是支持回调
import {setTime} from "../../utils/format-time";
/**
* 格式化时间
* @param {Object | string | number | Date | Function} [options] 配置参数/回调函数 可以是对象 字符串 时间戳 时间对象
* @param {string | number | Date} [options.date] 时间
* @param {string} [options.format] 格式化方式 yyyy-MM-dd HH:mm:ss
* @param {Function} [callback] 回调函数
* @returns {string} 格式化后的时间
* */ 
setTime.format({
    date : new Date(),
    format : "yyyy-MM-dd HH:mm:ss"
})
`

export const code2 = `
import {setTime} from "../../utils/format-time";
/**
* 对比时间差
* @param {Object} options 配置参数
* @param {Date | string | number} options.startDate 开始时间
* @param {Date | string | number} [options.endDate] 结束时间 不传默认为当前时间
* @param {Function} [callback] 回调函数
* @returns {Object} 对比后的时间差
* @description 返回的数据格式 {allday : 0 , day : 0 , hours : 0 , allHours : 0 , minutes : 0 , allMinutes : 0 , seconds : 0 , allSeconds : 0 , timeDiff : 0}
* */ 
this.diffTime = setTime.diff({
    startDate : "2024-01-01 12:00:00",
    endDate : "2023-01-01 18:00:00",
})
`

export const code3 = `
import {setTime} from "../../utils/format-time";
/**
* 前n天(小时/周)后n天(小时/周) 前用负数 后用正数
* @param {Object | Function} [options] 配置参数/回调函数
* @param {Date | string | number} [options.date] 时间 默认为当前时间
* @param {number} [options.num] 需要前后多少天(小时/周) 默认1
* @param {string} [options.type] 类型 day hour week 默认 day
* @param {Function} [callback] 回调函数
* @returns {Object} 时间信息
* */ 
this.lastTime = setTime.last({
    date : new Date(),
    num : 2 ,
    type : "day"
})
`

export const code4 = `
import {setTime} from "../../utils/format-time";
/**
* 获取当前日期是星期几
* @param {Date | string | number | Function} [date] 时间/直接为回调函数 默认为当前时间 
* @param {Function} [callback] 回调函数
* @return {String} 返回星期几
* */ 
this.week = setTime.week()
`

export const code5 = `
import {setTime} from "../../utils/format-time";
/**
* 指定日期是当前(年、月、周)的多少天
* @param {Object | Function} [options] 配置参数/回调函数
* @param {Date | string | number} [options.date] 时间 默认为当前时间
* @param {string} [options.type] 类型 year month week 默认 year
* @param {Function} [callback] 回调函数
* @returns {Number} 返回指定日期是当前(年、月、周)的多少天
* */ 
this.day= setTime.day({
    date : new Date(),
    type : "year"
})
`

export const code6 = `
import {setTime} from "../../utils/format-time";
/**
* 是否为闰年
* @param {Date | string | number | Function} [date] 时间/直接为回调函数 默认为当前时间
* @param {Function} [callback] 回调函数
* @returns {Boolean} 返回是否为闰年
* */ 
this.leapYear =setTime.leapYear(new Date())
`