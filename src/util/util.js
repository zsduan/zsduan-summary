/*
 * @Author: zs.duan
 * @Date: 2021-12-17 13:51:38
 * @LastEditors: zs.duan
 * @LastEditTime: 2021-12-17 13:53:27
 * @FilePath: \template\src\util\util.js
 */

// 获取当前时间
const formatTime = date => {
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const hour = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()
  
    return {
        time : `${[year, month, day].map(formatNumber).join('/')} ${[hour, minute, second].map(formatNumber).join(':')}`,
        year : year,
        month : month,
        day : day,
        hour : hour,
        minute : minute,
        second : second
    }
  }
  
  const formatNumber = n => {
    n = n.toString()
    return n[1] ? n : `0${n}`
  }
  
  const timeDifference = (date) => { //di作为一个变量传进来
    //如果时间格式是正确的，那下面这一步转化时间格式就可以不用了
    let dateBegin = date.replace(/T/g, " "); //将-转化为/，使用new Date
    dateBegin = new Date(dateBegin.replace(/-/g, "/")); //将-转化为/，使用new Date
    let dateEnd = new Date(); //获取当前时间
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
      day : dayDiff,
      hours : hours,
      minutes : minutes,
      seconds : seconds,
    }
  }

  module.exports = {
    formatTime,
    timeDifference
  }