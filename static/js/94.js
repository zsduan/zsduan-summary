(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[94],{

/***/ "./src/views/JS-article/signalR/config.js":
/*!************************************************!*\
  !*** ./src/views/JS-article/signalR/config.js ***!
  \************************************************/
/*! exports provided: code1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"code1\", function() { return code1; });\nconst code1 = `\nimport signalRcoont from \"@/tool/signalR\";\nconst signalR = signalRcoont({\n    url : \"\",\n    data : {\n        token : \"123456\"\n    },\n    success : (reslut) =>{\n        console.log(reslut)\n    },\n    fail : (error) =>{\n        console.log(error)\n    },\n    stop : (stop) => {\n        console.log(stop)\n    }\n})\n`;\n\n//# sourceURL=webpack:///./src/views/JS-article/signalR/config.js?");

/***/ })

}]);