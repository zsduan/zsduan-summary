/*
 * @Author: zs.duan
 * @Date: 2022-09-30 14:30:02
 * @LastEditors: zs.duan
 * @LastEditTime: 2022-12-15 14:05:42
 * @FilePath: \vue2+js+eui+template\src\views\time-difference\config.js
 */

export const code1 = `
/*
 * @name 计算时间差
 * @parame startDate Date / string 开始时间 必填
 * @parame endDate Date / string 结束时间 
 * @method success 成功返回 code 100网页成功 200网页和系统都成功
 * @method fail 失败返回
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