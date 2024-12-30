(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[97],{

/***/ "./src/views/component-section/dzs-editor/config.js":
/*!**********************************************************!*\
  !*** ./src/views/component-section/dzs-editor/config.js ***!
  \**********************************************************/
/*! exports provided: code1, code2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"code1\", function() { return code1; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"code2\", function() { return code2; });\nconst code1 = `\n<template>\n    <dzs-editor @save=\"save\"></dzs-editor>\n</template>\n<script>\nimport dzsEditor from \"@/components/dzs-editor/index.vue\";\nexdefault {\n    components : {\n        dzsEditor\n    },\n    methods:{\n        save(val) {\n            // do something\n        }\n    }\n}\n</script>\n`;\nconst code2 = `\n<template>\n    <dzs-editor v-model=\"value\" @save=\"save\"></dzs-editor>\n</template>\n<script>\nimport dzsEditor from \"@/components/dzs-editor/index.vue\";\nexdefault {\n    components : {\n        dzsEditor\n    },\n    data(){\n        return {\n            value : \"<p>这是默认值</p>\"\n        }\n    },\n    methods:{\n        save(val) {\n            // do something\n        }\n    }\n}\n</script>\n`;\n\n//# sourceURL=webpack:///./src/views/component-section/dzs-editor/config.js?");

/***/ })

}]);