(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c51d8"],{"3e5e":function(n,t,e){"use strict";e.r(t),e.d(t,"code1",(function(){return o})),e.d(t,"code2",(function(){return r}));const o='\n// 共有两个方法 formatTime 和 asyncFormatTime 其中 asyncFormatTime 返回一个Promise对象\nimport {formatTime , asyncFormatTime} from "../../utils/format-time";\n\n\n/**\n * @name 格式化时间 \n * @description options 建议使用对象传参 也可以使用字符串 | 时间戳 | 日期对象\n * @description 所有参数不传时 默认为当前时间\n * @param {Object | string | Date | number} [options] 配置对象 | 日期字符串 | 日期对象 | 时间戳\n * @param {String} options.format 格式化字符串 yyyy-MM-dd HH:mm:ss\n * @param {Date | string | number} [options.date] 日期对象 | 日期字符串 | 时间戳\n * @param {Function} [options.success] 成功返回\n * @param {Function} [options.fail] 失败返回\n * @param {Function} [options.complete] 完成返回\n * @returns {String} 格式化后的时间\n * */\n\nformatTime({\n    date : new Date(),\n    format : "yyyy-MM-dd HH:mm:ss",\n    success : (res)=>{\n        this.time2 = res\n    },\n    fail : (err)=>{\n        console.log(err)\n    },\n})\n\n// 还可以\nlet time = formatTime({\n    date : new Date(),\n    format : "yyyy-MM-dd",\n});\n',r='\nasyncFormatTime({\n    date : new Date(),\n    format : "yyyy-MM-dd HH:mm:ss",\n}).then((res)=>{\n    this.time3 = res\n}).catch((err)=>{\n    console.log(err)\n})\n'}}]);
//# sourceMappingURL=chunk-2d0c51d8.9267e05e.js.map