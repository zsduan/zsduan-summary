(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[140],{

/***/ "./src/views/directive/anti-vibration-and-throttling/config.js":
/*!*********************************************************************!*\
  !*** ./src/views/directive/anti-vibration-and-throttling/config.js ***!
  \*********************************************************************/
/*! exports provided: code1, code2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"code1\", function() { return code1; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"code2\", function() { return code2; });\nconst code1 = `\n<template>\n    <el-button v-dzs-debounce=\"1000\" @click=\"debounceClick\">防抖</el-button>\n</template>\n<script>\nimport { debounce } from \"@/directive\"; //二选一\n\nimport Vue from \"vue\";\nimport directive from \"@/directive\"; //二选一\nexport default {\n    created() {\n        Vue.use(directive); //三选一\n\n        debounce(Vue); //三选一\n\n        debounce(this); //三选一\n    },\n    methods: {\n        debounceClick() {\n            // do something\n        },\n    }\n};\n</script>\n`;\nconst code2 = `\n<template>\n    <el-input v-model=\"throttleText\" v-dzs-throttle=\"throttleInput\" placeholder=\"节流\">\n</el-input>\n</template>\n<script>\nimport { throttle } from \"@/directive\"; //二选一\n\nimport Vue from \"vue\";\nimport directive from \"@/directive\"; //二选一\nexport default {\n    data() {\n        return {\n            throttleText: '',\n        };\n    },\n    created() {\n        Vue.use(directive); //三选一\n\n        throttle(Vue); //三选一\n\n        throttle(this); //三选一\n    },\n    methods: {\n        throttleInput() {\n            // do something\n        }\n    }\n};\n</script>\n`;\n\n//# sourceURL=webpack:///./src/views/directive/anti-vibration-and-throttling/config.js?");

/***/ })

}]);