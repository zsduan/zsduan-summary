(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[100],{

/***/ "./src/views/JS-article/version-control/config.js":
/*!********************************************************!*\
  !*** ./src/views/JS-article/version-control/config.js ***!
  \********************************************************/
/*! exports provided: code1, code2, code3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"code1\", function() { return code1; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"code2\", function() { return code2; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"code3\", function() { return code3; });\nconst code1 = `\n// main.js\nimport Vue from 'vue';\nimport VersionControl from './your-path/version-control.js';\nVue.use(VersionControl, {\n    currentVersion: '1.0.0',\n    suffixRules: [\n        { name: 'dev', isHide: true , desc : '开发环境' },\n        { name: 'bate', isHide: true , desc : '测试环境' },\n        { name: 'alpha', isHide: false , desc : '预发布环境' },\n    ],\n    debug: true\n});\n\n// xx.vue\n<div v-version=\"'0.9.0'\">xx</div> // 0.9.0版本 显示\n<div v-version=\"'1.0.0'\">xx</div> // 1.0.0版本 显示\n<div v-version=\"'1.0.1'\">xx</div> // 1.0.1版本 不显示\n`;\nconst code2 = `\n// main.js\nimport { createApp } from 'vue';\nimport App from './App.vue';\nimport VersionControl from './your-path/version-control.js';\nconst app = CreateApp(App);\napp.use(VersionControl, {\n    currentVersion: '1.0.0',\n    suffixRules: [\n        { name: 'dev', isHide: true , desc : '开发环境' },\n        { name: 'bate', isHide: true , desc : '测试环境' },\n        { name: 'alpha', isHide: false , desc : '预发布环境' },\n    ],\n    debug: true\n})\n\n// xx.vue\n<div v-version=\"'0.9.0'\">xx</div> // 0.9.0版本 显示\n<div v-version=\"'1.0.0'\">xx</div> // 1.0.0版本 显示\n<div v-version=\"'1.0.1'\">xx</div> // 1.0.1版本 不显示\n`;\nconst code3 = `\n// xx.html\n<script src=\"./your-path/version-control.js\"></script>\n\n<script>\n    VersionControl.initNative({\n        currentVersion: '1.0.0',\n        suffixRules: [\n            { name: 'dev', isHide: true , desc : '开发环境' },\n            { name: 'bate', isHide: true , desc : '测试环境' },\n            { name: 'alpha', isHide: false , desc : '预发布环境' },\n        ],\n        debug: true\n    })\n</script>\n\n<div data-version=\"0.9.0\">xx</div> // 0.9.0版本 显示\n<div data-version=\"1.0.0\">xx</div> // 1.0.0版本 显示\n<div data-version=\"1.0.1\">xx</div> // 1.0.1版本 不显示\n`;\n\n//# sourceURL=webpack:///./src/views/JS-article/version-control/config.js?");

/***/ })

}]);