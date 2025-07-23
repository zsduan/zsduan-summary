(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[74],{

/***/ "./src/views/JS-article/file-slice-and-merge/config.js":
/*!*************************************************************!*\
  !*** ./src/views/JS-article/file-slice-and-merge/config.js ***!
  \*************************************************************/
/*! exports provided: code1, code2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"code1\", function() { return code1; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"code2\", function() { return code2; });\n/*\r\n * @Author: zs.duan\r\n * @Date: 2022-11-25 18:27:44\r\n * @LastEditors: zs.duan\r\n * @LastEditTime: 2022-11-25 19:29:14\r\n * @FilePath: \\vue2+elui+template\\src\\views\\file-slice-and-merge\\config.js\r\n */\nconst code1 = `\n/**\n * 文件切片与合并 支持Promise\n * @param {Object } options 配置对象\n * @param {File | string | object | Array} options.file 文件(文件列表) 可选 fileId/file/refs/fileList 任选其一\n * @param {any} options.Vue vue本身也就是this\n * @param {'slice' | 'merge'} options.type 切片还是合并 默认切片 \n * @param {boolean} options.md5 是否需要md5值 默认不需要 true 需要 false 不需要 md5会影响分片速度\n * @param {number} options.chunkSize 切片大小 默认 5M\n * @param {string} options.fileName 合并的文件名称\n * @param {boolean} options.sort 合并进行排序 默认true 合并文件较多建议开启\n * @param {Function} options.success 成功返回 \n * @param {Function} options.fail 错误返回\n * @returns Promise\n * @description 分片返回数据\n * @returns \n * { \n *    code : 200,\n *    list : [\n *      {\n            sort : number, //排序\n            file : file, //分片文件bold\n            filename : string ,//文件名称 name-1 name-2\n            md5 : string //分片文件的md5值\n        }\n *    ], //文件分片的list数据\n *    filename : string, //文件原始名称\n *    file : file, //原始文件 blod数据\n *    md5 : string //原始文件的md5值\n * }\n * @description 合并返回数据\n * @returns\n * {\n *     code : 200,\n *     file : file, //文件 blod数据\n *     filename : string //文件名称\n * }\n * \n * */\n//使用\nimport {fileSliceMerge} from \"@/utils/file-slice-and-merge\"\n// 切片\nfileSliceMerge({\n    file : \"myfile\",\n    Vue : this,\n    chunkSize :1024 * 1024 * 5,\n    md5 : true,\n    success : (res)=>{\n        // 分片文件返回\n    }\n})\n`;\nconst code2 = `\n// 合并\nfileSliceMerge({\n    file : \"myfile1\",\n    Vue : this,\n    type : \"merge\",\n    success : (res)=>{\n        // 合并文件返回\n    }\n})\n`;\n\n//# sourceURL=webpack:///./src/views/JS-article/file-slice-and-merge/config.js?");

/***/ })

}]);