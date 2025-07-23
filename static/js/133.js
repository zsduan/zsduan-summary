(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[133],{

/***/ "./src/views/component-section/dzs-upload-file/config.js":
/*!***************************************************************!*\
  !*** ./src/views/component-section/dzs-upload-file/config.js ***!
  \***************************************************************/
/*! exports provided: code1, code2, code3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"code1\", function() { return code1; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"code2\", function() { return code2; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"code3\", function() { return code3; });\n/**基础用法*/\nconst code1 = `\n<template>\n    <section>\n        <dzs-upload-file @change=\"change\"></dzs-upload-file>\n    </section>\n</template>\n<script>\nimport dzUploadFile from \"@/components/dzs-upload-file\"\nexport default {\n    components:{\n        dzUploadFile\n    },\n    methods: {\n        change(fileList){\n            // do something\n        }\n    }\n}\n</script>\n`;\n/**按钮模式*/\nconst code2 = `\n<template>\n    <section>\n        <dzs-upload-file :isButton=\"true\" @change=\"change\"></dzs-upload-file>\n    </section>\n</template>\n<script>\nimport dzUploadFile from \"@/components/dzs-upload-file\"\nexport default {\n    components:{\n        dzUploadFile\n    },\n    methods: {\n        change(fileList){\n            // do something\n        }\n    }\n}\n</script>\n`;\n\n/**不显示提示*/\nconst code3 = `\n<template>\n    <section>\n        <dzs-upload-file :isOpenTip=\"false\" :isButton=\"true\" @change=\"change\"></dzs-upload-file>\n    </section>\n</template>\n<script>\nimport dzUploadFile from \"@/components/dzs-upload-file\"\nexport default {\n    components:{\n        dzUploadFile\n    },\n    methods: {\n        change(fileList){\n            // do something\n        }\n    }\n}\n</script>\n`;\n\n//# sourceURL=webpack:///./src/views/component-section/dzs-upload-file/config.js?");

/***/ })

}]);