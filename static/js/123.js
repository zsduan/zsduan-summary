(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[123],{

/***/ "./src/views/component-section/dzs-pull-to-refresh/config.js":
/*!*******************************************************************!*\
  !*** ./src/views/component-section/dzs-pull-to-refresh/config.js ***!
  \*******************************************************************/
/*! exports provided: code1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"code1\", function() { return code1; });\n/**基础用法*/\nconst code1 = `\n<template>\n    <dzs-pull-to-refresh ref=\"refresh\" :enableReachBottom=\"true\" :onReachBottom=\"onReachBottom\" :onPullDownRefresh=\"onPullDownRefresh\">\n        <div v-for=\"(item, index) in items\" :key=\"index\" class=\"item\">\n            {{ item }}\n        </div>\n    </dzs-pull-to-refresh>\n</template>\n<script>\nimport dzsPullToRefresh from \"@/components/dzs-pull-to-refresh/index.vue\";\nexdefault {\n    components : {\n        dzsPullToRefresh\n    },\n    data() {\n        return {\n            items: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5' , 'Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5' , 'Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'],\n        }\n    }\n}\n</script>\n`;\n\n//# sourceURL=webpack:///./src/views/component-section/dzs-pull-to-refresh/config.js?");

/***/ })

}]);