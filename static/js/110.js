(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[110],{

/***/ "./src/views/component-section/dzs-dialog/config.js":
/*!**********************************************************!*\
  !*** ./src/views/component-section/dzs-dialog/config.js ***!
  \**********************************************************/
/*! exports provided: code1, code2, code3, code4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"code1\", function() { return code1; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"code2\", function() { return code2; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"code3\", function() { return code3; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"code4\", function() { return code4; });\nconst code1 = `\n<template>\n    <dzs-dialog :isShow.sync=\"isShow\">\n        <div>我是一个默认的弹窗</div>\n    </dzs-dialog>\n</template>\nimport dzsDialog from \"@/components/dzs-dialog/index.vue\"\nexport default {\n    components: {\n        dzsDialog\n    },\n    data(){\n        return {\n            isShow : false\n        }\n    }\n}\n`;\nconst code2 = `\n<template>\n    <dzs-dialog :isShow.sync=\"isShow\">\n        <div>我是一个有底部的弹窗</div>\n        <template slot=\"footer\">\n            <el-button>提交</el-button>\n        </template>\n    </dzs-dialog>\n</template>\n<script>\nimport dzsDialog from \"@/components/dzs-dialog/index.vue\"\nexport default {\n    components: {\n        dzsDialog\n    },\n    data(){\n        return {\n            isShow : false\n        }\n    }\n}\n</script>\n\n`;\nconst code3 = `\n<template>\n    <dzs-dialog :isShow.sync=\"isShow\" title=\"设置标题栏颜色与标题字体颜色\"   background-color=\"red\" fontColor=\"#fff\">\n        <div>设置标题栏颜色与标题字体颜色</div>\n    </dzs-dialog>\n</template>\n<script>\nimport dzsDialog from \"@/components/dzs-dialog/index.vue\"\nexport default {\n    components: {\n        dzsDialog\n    },\n    data(){\n        return {\n            isShow : false\n        }\n    }\n}\n</script>\n\n`;\nconst code4 = `\n<template>\n    <dzs-dialog :isShow.sync=\"isShow\" title=\"设置高度\"  height=\"200px\">\n        <div v-for=\"item in 50\">滑动查看内容{{ item }}</div>\n    </dzs-dialog>\n</template>\n<script>\nimport dzsDialog from \"@/components/dzs-dialog/index.vue\"\nexport default {\n    components: {\n        dzsDialog\n    },\n    data(){\n        return {\n            isShow : false\n        }\n    }\n}\n</script>\n\n`;\n\n//# sourceURL=webpack:///./src/views/component-section/dzs-dialog/config.js?");

/***/ })

}]);