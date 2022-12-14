/*
 * @Author: zs.duan
 * @Date: 2022-09-30 14:30:02
 * @LastEditors: zs.duan
 * @LastEditTime: 2022-11-23 19:23:27
 * @FilePath: \vue2+elui+template\src\views\time-difference\config.js
 */

export const code1 = `
/*
 * @name 计算时间差
 * @parame startDate Date / string 开始时间 必填
 * @parame endDate Date / string 结束时间 
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
    endDate : date / string
})
`