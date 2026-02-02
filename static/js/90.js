(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[90],{

/***/ "./src/views/JS-article/scroll-to-number/config.js":
/*!*********************************************************!*\
  !*** ./src/views/JS-article/scroll-to-number/config.js ***!
  \*********************************************************/
/*! exports provided: code1, code2, code3, code4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"code1\", function() { return code1; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"code2\", function() { return code2; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"code3\", function() { return code3; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"code4\", function() { return code4; });\nconst code1 = `\n<div id=\"number\">0</div>\n// 使用\nimport scrollToNumber from \"@/utils/scrollToNumber.js\";\nscrollToNumber({\n    start : 0,\n    end :new Date().getFullYear(),\n    duration : 2000,\n    el : 'number',\n})\n`;\nconst code2 = `\n<div class=\"show-number number-box\" >0</div>\n// 使用\nimport scrollToNumber from \"@/utils/scrollToNumber.js\";\nscrollToNumber({\n    start : 0,\n    end :new Date().getFullYear(),\n    duration : 2000,\n    dom : document.querySelector('.show-number'),\n})\n`;\nconst code3 = `\n<div class=\"number-box\" ref=\"showNumber\">0</div>\n// 使用\nimport scrollToNumber from \"@/utils/scrollToNumber.js\";\nscrollToNumber({\n    start : 0,\n    end :new Date().getFullYear(),\n    duration : 2000,\n    ref : this.$refs.showNumber,\n})\n`;\nconst code4 = `\n<div class=\"number-box\" :data-number=\"new Date().getFullYear()\">0</div>\n// 使用\nimport scrollToNumber from \"@/utils/scrollToNumber.js\";\nscrollToNumber()\n`;\n\n//# sourceURL=webpack:///./src/views/JS-article/scroll-to-number/config.js?");

/***/ })

}]);