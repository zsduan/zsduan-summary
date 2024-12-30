(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[62],{

/***/ "./src/views/JS-article/dynamic-route/config.js":
/*!******************************************************!*\
  !*** ./src/views/JS-article/dynamic-route/config.js ***!
  \******************************************************/
/*! exports provided: code1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"code1\", function() { return code1; });\nconst code1 = `\nimport setRouter from '@/router/setRouter'\nconst menus = [\n    {\n        path: '/about-component',\n        component: \"Layout\",\n        redirect: '/dzs-dialog',\n        name: \"aboutcComponent\",\n        meta: {\n            title: \"组件篇\"\n        },\n        children: [\n            {\n                path: '/dzs-dialog',\n                component: \"component-section/dzs-dialog/index\",\n                name: 'dzsDialog',\n                meta: { title: '弹窗组件' }\n            },\n        ]\n    }\n]\n\nsetRouter(menus)\n`;\n\n//# sourceURL=webpack:///./src/views/JS-article/dynamic-route/config.js?");

/***/ })

}]);