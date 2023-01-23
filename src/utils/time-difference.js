/*
 * @Author: zs.duan
 * @Date: 2022-09-30 14:20:09
 * @LastEditors: zs.duan
 * @LastEditTime: 2022-12-15 14:04:59
 * @FilePath: \vue2+js+eui+template\src\utils\time-difference.js
 */

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
export default (...arg) => { //作为一个变量传进来
  let options = {
    startDate: null,
    endDate: null,
    success: (reslut) => { },
    fail: (error) => { },
  }
  options = {
    ...options,
    ...arg[0]
  }
  if (!options.startDate) {
    options.fail({
      code: -1,
      msg: "startDate must be null"
    })
    return;
  }
  //如果时间格式是正确的，那下面这一步转化时间格式就可以不用了
  let dateBegin = "";
  if (typeof options.startDate == 'string') {
    dateBegin = options.startDate.replace(/T/g, " "); //将-转化为/，使用new Date
    dateBegin = new Date(dateBegin.replace(/-/g, "/")); //将-转化为/，使用new Date 用于苹果手机
  } else {
    dateBegin = options.startDate;
  }

  if (options.endDate && typeof options.endDate == 'string') {
    options.endDate = options.endDate.replace(/T/g, " "); //处理后端数据
    options.endDate = new Date(options.endDate.replace(/-/g, '/'));
  }
  let dateEnd = options.endDate || new Date(); //获取当前时间
  let dateDiff = dateBegin.getTime() - dateEnd.getTime(); //时间差的毫秒数
  let dayDiff = Math.floor(dateDiff / (24 * 3600 * 1000)); //计算出相差天数
  let leave1 = dateDiff % (24 * 3600 * 1000) //计算天数后剩余的毫秒数
  let hours = Math.floor(leave1 / (3600 * 1000)) //计算出小时数
  //计算相差分钟数
  let leave2 = leave1 % (3600 * 1000) //计算小时数后剩余的毫秒数
  let minutes = Math.floor(leave2 / (60 * 1000)) //计算相差分钟数
  //计算相差秒数
  let leave3 = leave2 % (60 * 1000) //计算分钟数后剩余的毫秒数
  let seconds = Math.round(leave3 / 1000);
  options.success({
    day: dayDiff, //天数
    hours: hours, //小时
    minutes: minutes, //分钟
    seconds: seconds, //结束时间
  })
}