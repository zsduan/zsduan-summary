/*
 * @Author: zs.duan
 * @Date: 2022-09-30 17:07:40
 * @LastEditors: zs.duan
 * @LastEditTime: 2022-11-23 17:56:46
 * @FilePath: \vue2+elui+template\src\utils\setTime.js
 */

/*
 * @name 处理时间
 * @parame date Date/string 
 * @return 处理后的时间
*/ 
const formatTime = (date) => {
  if (typeof date == "string") {
    date = new Date(date);
  }
  date = date || new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  return {
    android: `${[year, month, day].map(formatNumber).join("-")} ${[
      hour,
      minute,
      second,
    ]
      .map(formatNumber)
      .join(":")}`,
    ios: `${[year, month, day].map(formatNumber).join("/")} ${[
      hour,
      minute,
      second,
    ]
      .map(formatNumber)
      .join(":")}`,
  };
};

const formatNumber = (n) => {
  n = n.toString();
  return n[1] ? n : `0${n}`;
};

export default formatTime;
