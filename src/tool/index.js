import getua from "./getua";
import copy from "./copy";
import { formatTime, asyncFormatTime, chainFormatTime, setTime } from "./format-time";
import guid from "./guid";
import getUA from "./ua";
import getCalendar from "./calender";
import readeExcel ,{ asyncReadeExcel } from "./readeExcel";
import signalRcoont from "./signalR";
import sendNotification from "./sendNotification";
import Search from "./fuzzySearch";
import {ACEencrypt , ACEdecrypt , MD5} from "@/tool/encryp";
import setThemecolor from "./setThemecolor";
import phoneAppNavigator from "./phoneAppNavigator";
import watermark from "./watermark";
import scrollToNumber from "./scrollToNumber";
import groupOrSort from "./groupOrSort";
import fileSliceMerge from "./file-slice-and-merge";

/**
 * 导出方法说明
 * @param {Function} getua 获取浏览器ua
 * @param {Function} copy 复制
 * @param {Function} formatTime 时间格式化
 * @param {Function} asyncFormatTime 异步时间格式化
 * @param {Function} chainFormatTime 链式时间格式化
 * @param {Function} setTime 设置时间 format 格式化时间  diff 对比时间差 last 前一天后一天 week 获取指定日期是星期几 day 指定日期是当前(年、月、周)的多少天 leapYear 今年是否是闰年 
 * @param {Function} guid 生成guid
 * @param {Function} getUA 获取ua
 * @param {Function} getCalendar 获取农历
 * @param {Function} readeExcel 读取excel
 * @param {Function} asyncReadeExcel 异步读取excel
 * @param {Function} signalRcoont signalR连接
 * @param {Function} sendNotification 发送通知
 * @param {Function} Search 搜索
 * @param {Function} ACEencrypt ACE加密
 * @param {Function} ACEdecrypt ACE解密
 * @param {Function} MD5 MD5加密
 * @param {Function} setThemecolor 设置主题色
 * @param {Function} phoneAppNavigator 判断手机应用
 * @param {Function} watermark 水印
 * @param {Function} scrollToNumber 滚动到指定数字
 * @param {Function} groupOrSort 分组或排序
 * @param {Function} fileSliceMerge 文件切片
 * */
export default {
    version : "1.0.0",
    getua,
    copy,
    formatTime,
    asyncFormatTime,
    chainFormatTime,
    setTime,
    guid,
    getUA,
    getCalendar,
    readeExcel,
    asyncReadeExcel,
    signalRcoont,
    sendNotification,
    Search,
    ACEencrypt,
    ACEdecrypt,
    MD5,
    setThemecolor,
    phoneAppNavigator,
    watermark,
    scrollToNumber,
    groupOrSort,
    fileSliceMerge
}