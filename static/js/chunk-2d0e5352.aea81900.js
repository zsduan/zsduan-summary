(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e5352"],{9401:function(n,t,o){"use strict";o.r(t),o.d(t,"code1",(function(){return i}));const i='\n/**\n * 处理html 目前仅支持处理图片\n * @description 将图片的宽度变成 100% 高度自适应\n * @param {object} option 配置文件\n * @description option 数据详情\n * @param {string} option.html html源码\n * @param {string} [option.imgUrl] 是否需要拼接图片的url 选填\n * @return {Function} option.success 成功返回\n * @return {Function} option.fail 失败返回\n * */ \n// data\noldHtml : \'<img src=\'\' />",\nnewHtml : ""\n// js\nimport setHtml from "../../utils/sethtml"\nsetHtml({\n    html : this.oldHtml,\n    success : (res)=>{\n        this.newHtml = res;\n    },\n})\n'}}]);
//# sourceMappingURL=chunk-2d0e5352.aea81900.js.map