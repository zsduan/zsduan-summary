/*
 * @Author: zs.duan
 * @Date: 2022-09-30 17:10:34
 * @LastEditors: zs.duan
 * @LastEditTime: 2022-09-30 17:18:51
 * @FilePath: \vue2+js+eui+template\src\views\setTime\config.js
 */

export const code1 = `
/**
 * 获取格式化时间
 * @param {Object} option 配置对象
 * @param {String} option.Format 格式化字符串 yyyy-MM-dd HH:mm:ss
 * @param {Date | string} [option.date] 日期对象
 * @param {Function} [option.success] 成功返回
 * @param {Function} [option.fail] 失败返回
 * @returns {String} 格式化后的时间
 * @example
 * getTime({
 * Format : 'yyyy-MM-dd HH:mm:ss',
 * date : new Date(),
 * success : (reslut)=>{},
 * }) // 2021-04-05 15:54:28
 * */

setTime({
    date : Time,
    success : (res)=>{
        this.time = res
    }
})
`

export const code2 = `
/**
 * 获取格式化时间
 * @param {Object} option 配置对象
 * @param {String} option.Format 格式化字符串 yyyy-MM-dd HH:mm:ss
 * @param {Date | string} [option.date] 日期对象
 * @param {Function} [option.success] 成功返回
 * @param {Function} [option.fail] 失败返回
 * @returns {String} 格式化后的时间
 * @example
 * getTime({
 * Format : 'yyyy-MM-dd HH:mm:ss',
 * date : new Date(),
 * success : (reslut)=>{},
 * }) // 2021-04-05 15:54:28
 * */

setTime({
    date : e.Time,
    Format : "yyyy-MM-dd",
    success : (res)=>{
        this.time1 = res
    }
})
`

export const code3 = `
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

import formatTime from "../../utils/format-time";

formatTime({
    date : new Date(),
    format : "yyyy-MM-dd HH:mm:ss",
    success : (res)=>{
        this.time2 = res
    },
    fail : (err)=>{
        console.log(err)
    },
    complete : (reslut)=>{
        console.log("成功" , {code : 200 , msg : "成功" , date : "xxx"})
        console.log("失败" , {code : -1 , msg : "xxx"})
    }
})

`

export const code4 = `
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

import formatTime from "../../utils/format-time";

formatTime({
    date : new Date(),
    format : "yyyy-MM-dd HH:mm:ss",
}).then((res)=>{
    this.time3 = res
}).catch((err)=>{
    console.log(err)
})

// 也可以全部都是空 使用 async await
async time = await formatTime()

// 也可以直接传一个时间参数 使用 async await
async time = await formatTime(new Date())

// 也可以直接传format参数直接格式化当前时间
async time = await formatTime({format : "yyyy-MM-dd HH:mm:ss"})
`