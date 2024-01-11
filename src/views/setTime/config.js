/*
 * @Author: zs.duan
 * @Date: 2022-09-30 17:10:34
 * @LastEditors: zs.duan
 * @LastEditTime: 2022-09-30 17:18:51
 * @FilePath: \vue2+js+eui+template\src\views\setTime\config.js
 */

export const code1 = `
// 共有两个方法 formatTime 和 asyncFormatTime 其中 asyncFormatTime 返回一个Promise对象
import {formatTime , asyncFormatTime} from "../../utils/format-time";


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

// 还可以
let time = formatTime({
    date : new Date(),
    format : "yyyy-MM-dd",
});
`

export const code2 = `
asyncFormatTime({
    date : new Date(),
    format : "yyyy-MM-dd HH:mm:ss",
}).then((res)=>{
    this.time3 = res
}).catch((err)=>{
    console.log(err)
})
`