/*
 * @Author: zs.duan
 * @Date: 2022-09-30 14:30:02
 * @LastEditors: zs.duan
 * @LastEditTime: 2022-09-30 14:45:39
 * @FilePath: \vue2+js+eui+template\src\views\time-difference\config.js
 */

export const code1 = `
// 传入 
startDate //开始时间 必填 string 2022-09-30 12:00:00 endDate 结束时间 选填 不填默认 当前时间 
// 计算方法 开始时间 - 结束时间 
//返回
return {
    day : dayDiff, //天数
    hours : hours, //小时
    minutes : minutes, //分钟
    seconds : seconds, //结束时间
  }

  //使用
  import timeDifference from "@/utils/time-difference";
  timeDifference(e.startTime , e.endTime)
`