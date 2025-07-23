(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[68],{

/***/ "./src/views/JS-article/date-to-calender/config.js":
/*!*********************************************************!*\
  !*** ./src/views/JS-article/date-to-calender/config.js ***!
  \*********************************************************/
/*! exports provided: code1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"code1\", function() { return code1; });\nconst code1 = `\nimport getCalendar from \"@/tool/calender\";\n\n// 调用方式一\nconst calendar = getCalendar(new Date());\n\n// 调用方式二\ngetCalendar({\n    time : new Date(),\n    success : (data) => {\n        console.log(data);\n    }\n});\n`;\n\n//# sourceURL=webpack:///./src/views/JS-article/date-to-calender/config.js?");

/***/ })

}]);