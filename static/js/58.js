(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[58],{

/***/ "./src/views/JS-article/copy/config.js":
/*!*********************************************!*\
  !*** ./src/views/JS-article/copy/config.js ***!
  \*********************************************/
/*! exports provided: code1, code2, code3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"code1\", function() { return code1; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"code2\", function() { return code2; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"code3\", function() { return code3; });\nconst code1 = `\nimport copy from \"@/tool/copy\";\n\n// 方式一\ncopy({\n    text : \"需要复制的文本\",\n    success : ()=>{\n        // do something\n    }\n});\n\n// 方式二\ncopy(\"需要复制的文本\");\n`;\nconst code2 = `\nimport copy from \"@/tool/copy\";\n\ncopy({\n    text : \"需要复制的html\",\n    type : \"html\",\n    success : ()=>{\n        // do something\n    }\n});\n`;\nconst code3 = `\nimport copy from \"@/tool/copy\";\ncopy({\n    text : \"需要复制的url地址\",\n    type : \"image\",\n    success : ()=>{\n        // do something\n    }\n});\n`;\n\n//# sourceURL=webpack:///./src/views/JS-article/copy/config.js?");

/***/ })

}]);