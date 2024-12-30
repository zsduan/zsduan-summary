(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[129],{

/***/ "./src/views/directive/auto-open/config.js":
/*!*************************************************!*\
  !*** ./src/views/directive/auto-open/config.js ***!
  \*************************************************/
/*! exports provided: code1, code2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"code1\", function() { return code1; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"code2\", function() { return code2; });\nconst code1 = `\n<template>\n    <section>\n        <el-button @click=\"isOpen = !isOpen\">展开与收起</el-button>\n        <div class=\"line\"></div>\n        <ul class=\"open-list\" v-dzs-autoExpand=\"isOpen\">\n            <li class=\"open-lsit-item\" v-for=\"(item, index) in list\" :key=\"index\">{{ item.Text }}</li>\n        </ul>\n    </section>\n</template>\n<script>\nimport { autoExpand } from \"@/directive\"; //二选一\n\nimport Vue from \"vue\";\nimport directive from \"@/directive\"; //二选一\nexport default {\n    created() {\n        Vue.use(directive); //三选一\n\n        autoExpand(Vue); //三选一\n\n        autoExpand(this); //三选一\n    },\n    data() {\n        return {\n            isOpen: true,\n            list: [\n                {\n                    Text: \"重庆\",\n                    Value: \"chongqing\"\n                },\n                {\n                    Text: \"上海\",\n                    Value: \"shanghai\"\n                },\n                {\n                    Text: \"北京\",\n                    Value: \"beijing\"\n                }\n            ],\n        };\n    }\n};\n</script>\n<style lang=\"scss\" scoped>\n.line{\n    height: 10px;\n    width: 100%;\n}\n.open-list{\n    width: 100px;\n    .open-lsit-item{\n        width: 100%;\n        border: 1px solid #ccc;\n        padding: 10px;\n        text-align: center;\n    }\n}\n</style>\n`;\nconst code2 = `\n<template>\n    <el-input v-model=\"throttleText\" v-dzs-throttle=\"throttleInput\" placeholder=\"节流\">\n</el-input>\n</template>\n<script>\nimport { throttle } from \"@/directive\"; //二选一\n\nimport Vue from \"vue\";\nimport directive from \"@/directive\"; //二选一\nexport default {\n    data() {\n        return {\n            throttleText: '',\n        };\n    },\n    created() {\n        Vue.use(directive); //三选一\n\n        throttle(Vue); //三选一\n\n        throttle(this); //三选一\n    },\n    methods: {\n        throttleInput() {\n            // do something\n        }\n    }\n};\n</script>\n`;\n\n//# sourceURL=webpack:///./src/views/directive/auto-open/config.js?");

/***/ })

}]);