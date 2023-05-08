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