(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[64],{

/***/ "./src/views/JS-article/encryption-decryption/config.js":
/*!**************************************************************!*\
  !*** ./src/views/JS-article/encryption-decryption/config.js ***!
  \**************************************************************/
/*! exports provided: code1, code2, code3, code4, code5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"code1\", function() { return code1; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"code2\", function() { return code2; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"code3\", function() { return code3; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"code4\", function() { return code4; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"code5\", function() { return code5; });\nconst code1 = `\nimport {ACEencrypt} from \"@/tool/encryp\";\n\n// 方式一\nconst result = ACEencrypt({\n    word : \"123456\",\n    key : \"123456\",\n    success : (res) => {\n        console.log(res);\n    }\n})\n\n// 方式二\nconst result = ACEencrypt(74646464)\n`;\nconst code2 = `\nimport {ACEencrypt} from \"@/tool/encryp\";\n\nconst result = ACEencrypt({\n    word : {'name' : '张三', 'age' : 18},\n    key : \"123456\",\n    success : (res) => {\n        console.log(res);\n    }\n})\n\n`;\nconst code3 = `\nimport { ACEdecrypt } from \"@/tool/encryp\";\n\n// 方式一\nconst result = ACEdecrypt({\n    word : \"GlIVeLBhtberF5W5g0gC7AVZ2fQAMQb7zQOIC+HHm1M=\",\n    key : \"\",\n    success : (res) => {\n        console.log(res);\n    }\n})\n\n// 方式二\nconst result = ACEdecrypt(\"GlIVeLBhtberF5W5g0gC7AVZ2fQAMQb7zQOIC+HHm1M=”)\n`;\nconst code4 = `\nimport { ACEdecrypt } from \"@/tool/encryp\";\n\nconst result = ACEdecrypt({\n    word : \"GlIVeLBhtberF5W5g0gC7AVZ2fQAMQb7zQOIC+HHm1M=\",\n    key : \"\",\n    type : \"object\",\n    success : (res) => {\n        console.log(res);\n    }\n})\n\n\n`;\nconst code5 = `\nimport { MD5} from \"@/tool/encryp\";\n\n// 方式一\nconst result = MD5({\n    word : \"123456\",\n    success : (res) => {\n        console.log(res);\n    }\n})\n\n// 方式二\nconst result = MD5(\"123456\")\n`;\n\n//# sourceURL=webpack:///./src/views/JS-article/encryption-decryption/config.js?");

/***/ })

}]);