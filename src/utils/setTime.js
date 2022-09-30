/*
 * @Author: zs.duan
 * @Date: 2022-09-30 17:07:40
 * @LastEditors: zs.duan
 * @LastEditTime: 2022-09-30 17:17:35
 * @FilePath: \vue2+js+eui+template\src\utils\setTime.js
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
