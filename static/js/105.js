(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[105],{

/***/ "./src/views/component-section/dzs-license-plate-keyboard/config.js":
/*!**************************************************************************!*\
  !*** ./src/views/component-section/dzs-license-plate-keyboard/config.js ***!
  \**************************************************************************/
/*! exports provided: code1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"code1\", function() { return code1; });\nconst code1 = `\n<template>\n    <div>\n        <el-input placeholder=\"请输入车牌号\" v-model=\"plateNumber\" class=\"ipt\" @focus=\"showKeyboard = true\"></el-input>\n        <dzs-license-plate-keyboard :isShow.sync=\"showKeyboard\" @change=\"changeKeyboard\" @del=\"del\">\n        </dzs-license-plate-keyboard>\n    </div>\n</template>\n<script>\nimport dzsLicensePlateKeyboard from \"@/components/dzs-license-plate-keyboard/index.vue\";\nexport default{\n    components:{\n        dzsLicensePlateKeyboard\n    },\n    data(){\n        return{\n            plateNumber:\"\",\n            showKeyboard:false\n        }\n    },\n    methods: {\n        changeKeyboard(e) {\n            this.plateNumber += e;\n        },\n        del() {\n            this.plateNumber = this.plateNumber.substring(0, this.plateNumber.length - 1)\n        }\n    }\n}\n</script>\n`;\n\n//# sourceURL=webpack:///./src/views/component-section/dzs-license-plate-keyboard/config.js?");

/***/ })

}]);