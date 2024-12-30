(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[91],{

/***/ "./src/views/JS-article/watermark/config.js":
/*!**************************************************!*\
  !*** ./src/views/JS-article/watermark/config.js ***!
  \**************************************************/
/*! exports provided: code1, code2, code3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"code1\", function() { return code1; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"code2\", function() { return code2; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"code3\", function() { return code3; });\nconst code1 = `\nimport watermark from \"./tool/watermark.js\";\nwatermark({\n    watermark_txt : \"zsduan\",\n})\n`;\nconst code2 = `\nimport watermark , {clearWatermark} from \"@/tool/watermark.js\";\nwatermark({\n    watermark_txt : \"<p>zsduan的个人总结</p>\",\n    isHtml : true,\n    watermark_color : \"rgba(0,0,0,0.2)\",\n})\n`;\nconst code3 = `\nimport {clearWatermark} from \"@/tool/watermark.js\";\nclearWatermark()\n`;\n\n//# sourceURL=webpack:///./src/views/JS-article/watermark/config.js?");

/***/ })

}]);