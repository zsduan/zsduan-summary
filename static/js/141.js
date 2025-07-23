(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[141],{

/***/ "./src/views/directive/anti-vibration-and-throttling/desc.js":
/*!*******************************************************************!*\
  !*** ./src/views/directive/anti-vibration-and-throttling/desc.js ***!
  \*******************************************************************/
/*! exports provided: antiShakeData, throttleData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"antiShakeData\", function() { return antiShakeData; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"throttleData\", function() { return throttleData; });\n/**\r\n * @name 防抖 表格\r\n * */\nconst antiShakeData = [{\n  key: \"time\",\n  type: \"param\",\n  parameterType: \"Number\",\n  desc: \"延迟时间\",\n  remark: \"time | callback | options 三选一\"\n}, {\n  key: \"callback\",\n  type: \"param\",\n  parameterType: \"Function\",\n  desc: \"回调函数\",\n  remark: \"time | callback | options 三选一\"\n}, {\n  key: \"options\",\n  type: \"param\",\n  parameterType: \"object \",\n  desc: \"配置对象\",\n  remark: \"time | callback | options 三选一\",\n  children: [{\n    key: \"time\",\n    type: \"param\",\n    parameterType: \"Number\",\n    desc: \"延迟时间\",\n    remark: \"\"\n  }, {\n    key: \"callback\",\n    type: \"param\",\n    parameterType: \"Function\",\n    desc: \"回调函数\",\n    remark: \"\"\n  }, {\n    key: \"type\",\n    type: \"param\",\n    parameterType: \"String\",\n    desc: \"防抖类型\",\n    remark: \"默认 button 支持 input\"\n  }]\n}];\n\n/**\r\n * @name 节流 表格\r\n * */\nconst throttleData = [{\n  key: \"time\",\n  type: \"param\",\n  parameterType: \"Number\",\n  desc: \"延迟时间\",\n  remark: \"time | callback | options 三选一\"\n}, {\n  key: \"callback\",\n  type: \"param\",\n  parameterType: \"Function\",\n  desc: \"回调函数\",\n  remark: \"time | callback | options 三选一\"\n}, {\n  key: \"options\",\n  type: \"param\",\n  parameterType: \"object \",\n  desc: \"配置对象\",\n  remark: \"time | callback | options 三选一\",\n  children: [{\n    key: \"time\",\n    type: \"param\",\n    parameterType: \"Number\",\n    desc: \"延迟时间\",\n    remark: \"\"\n  }, {\n    key: \"callback\",\n    type: \"param\",\n    parameterType: \"Function\",\n    desc: \"回调函数\",\n    remark: \"\"\n  }, {\n    key: \"type\",\n    type: \"param\",\n    parameterType: \"String\",\n    desc: \"节流类型\",\n    remark: \"默认 input 支持 button\"\n  }]\n}];\n\n//# sourceURL=webpack:///./src/views/directive/anti-vibration-and-throttling/desc.js?");

/***/ })

}]);