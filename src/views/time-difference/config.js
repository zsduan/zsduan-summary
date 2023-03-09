/*
 * @Author: zs.duan
 * @Date: 2022-09-30 14:30:02
 * @LastEditors: zs.duan
 * @LastEditTime: 2022-12-15 14:05:42
 * @FilePath: \vue2+js+eui+template\src\views\time-difference\config.js
 */

export const code1 = `
/**
 * @name 计算时间差
 * @param option 配置对象
 * @desc option 配置说明
 * @param {Date | string} option.startDate 开始时间 必填
 * @param {Date | string} option.endDate 结束时间
 * @param {Function} option.success 成功返回
 * @param {Function} option.fail 失败返回
 * @return {
      day : dayDiff, //天数
      hours : hours, //小时
      minutes : minutes, //分钟
      seconds : seconds, //结束时间
    }
*/

  //使用
  import timeDifference from "@/utils/time-difference";
  timeDifference({
      startDate : date / string,
      endDate : date / string,
      success : (res)=>{}
  })
`