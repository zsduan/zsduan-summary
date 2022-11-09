/*
 * @Author: zs.duan
 * @Date: 2022-09-30 14:20:09
 * @LastEditors: zs.duan
 * @LastEditTime: 2022-11-01 11:08:57
 * @FilePath: \vue2+js+eui+template\src\utils\time-difference.js
 */

export default (startDate , endDate) => { //di作为一个变量传进来
    if(!startDate){
        throw new Error("startDate must be null");
    }
    //如果时间格式是正确的，那下面这一步转化时间格式就可以不用了
    let dateBegin = "";
    if(typeof endDate == 'string'){
      dateBegin = startDate.replace(/T/g, " "); //将-转化为/，使用new Date
      dateBegin = new Date(dateBegin.replace(/-/g, "/")); //将-转化为/，使用new Date 用于苹果手机
    }
    
    if(endDate && typeof endDate == 'string'){
        endDate = endDate.replace(/T/g," "); //处理后端数据
        endDate = new Date(endDate.replace(/-/g,'/'));
    }
    let dateEnd = endDate || new Date(); //获取当前时间
    let dateDiff = dateBegin.getTime() - dateEnd.getTime() ; //时间差的毫秒数
    let dayDiff = Math.floor(dateDiff / (24 * 3600 * 1000)); //计算出相差天数
    let leave1 = dateDiff % (24 * 3600 * 1000) //计算天数后剩余的毫秒数
    let hours = Math.floor(leave1 / (3600 * 1000)) //计算出小时数
    //计算相差分钟数
    let leave2 = leave1 % (3600 * 1000) //计算小时数后剩余的毫秒数
    let minutes = Math.floor(leave2 / (60 * 1000)) //计算相差分钟数
    //计算相差秒数
    let leave3 = leave2 % (60 * 1000) //计算分钟数后剩余的毫秒数
    let seconds = Math.round(leave3 / 1000);
    return {
      day : dayDiff, //天数
      hours : hours, //小时
      minutes : minutes, //分钟
      seconds : seconds, //结束时间
    }
  }