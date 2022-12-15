/*
 * @Author: zs.duan
 * @Date: 2022-09-30 15:03:03
 * @LastEditors: zs.duan
 * @LastEditTime: 2022-12-15 09:57:07
 * @FilePath: \vue2+js+eui+template\src\views\calender\config.js
 */

export const code1 = `

// 传入

time string 2022-09-30 12:00:00 或者 new Date()


/*
 * @name 获取农历
 * @parame time : "", ?/时间 string  / DATE
 * @method success : (reslut) =>{},//成功后的相关数据
 * @method fail : (error) =>{}, //失败返回     
 * @return 返回  {
    gregorianYear: null, //公历年
    gregorianMonth: null, //公历月
    gregorianDay: null, //公历日
    weekday: null, //星期
    hours: null,
    minutes: null,
    seconds: null,

    lunarYear: null, //农历年
    lunarMonth: null, //农历月
    lunarDay: null, //农历日

    lunarYearCn: "", //农历天干地支纪年
    lunarMonthCn: "", //农历中文月
    lunarDayCn: "", //农历中文日
    zodiacYear: "", //农历生肖年

    solarTerm: "", //节气
    gregorianFestival: "", //公历节日
    lunarFestival: "", //农历节日
}
*/ 
// 使用
import calender from "@/utils/calender";
calender({
    time : "", // string / date
    success : (reslut) =>{},
    fail : (error) =>{},
})

`