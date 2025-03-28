(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[104],{

/***/ "./src/views/component-section/dzs-dialog/config.js":
/*!**********************************************************!*\
  !*** ./src/views/component-section/dzs-dialog/config.js ***!
  \**********************************************************/
/*! exports provided: code1, code2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"code1\", function() { return code1; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"code2\", function() { return code2; });\nconst code1 = `\n<template>\n    <dzs-popup :isShow.sync=\"isShow\">\n        <div>我是一个默认的弹窗</div>\n    </dzs-popup>\n</template>\nimport dzsDialog from \"@/components/dzs-dialog/index.vue\"\nexport default {\n    components: {\n        dzsDialog\n    },\n    data(){\n        return {\n            isShow : false\n        }\n    }\n}\n`;\nconst code2 = `\n<template>\n    <dzs-popup :isShow.sync=\"isShow\">\n        <div>我是一个有底部的弹窗</div>\n        <template slot=\"footer\">\n            <el-button>提交</el-button>\n        </template>\n    </dzs-popup>\n</template>\n<script>\nimport dzsDialog from \"@/components/dzs-dialog/index.vue\"\nexport default {\n    components: {\n        dzsDialog\n    },\n    data(){\n        return {\n            isShow : false\n        }\n    }\n}\n</script>\n\n`;\n\n//# sourceURL=webpack:///./src/views/component-section/dzs-dialog/config.js?");

/***/ })

}]);