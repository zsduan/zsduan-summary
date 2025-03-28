(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[80],{

/***/ "./src/views/JS-article/group-sort/config.js":
/*!***************************************************!*\
  !*** ./src/views/JS-article/group-sort/config.js ***!
  \***************************************************/
/*! exports provided: code1, code2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"code1\", function() { return code1; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"code2\", function() { return code2; });\nconst code1 = `\nimport groupOrSort from \"@/tool/groupOrSort.js\";\nconst list = [\n    {\n        age: 18,\n        name: \"张三\"\n    },\n    {\n        age: 16,\n        name: \"李四\"\n    },\n    {\n        age: 17,\n        name: \"王五\"\n    },\n    {\n        age: 17,\n        name: \"赵六\"\n    },\n],\n\n// 方式一\nconst sortList = groupOrSort({\n    list: list,\n    order: 'desc',\n    key: \"age\"\n});\n\n// 方式二\ngroupOrSort({\n    list: list,\n    order: 'desc',\n    key: \"age\",\n    success: (res) => {\n        // do something\n    }\n});\n`;\nconst code2 = `\nimport groupOrSort from \"@/tool/groupOrSort.js\";\nconst list = [\n    {\n        age: 18,\n        name: \"张三\"\n    },\n    {\n        age: 16,\n        name: \"李四\"\n    },\n    {\n        age: 17,\n        name: \"王五\"\n    },\n    {\n        age: 17,\n        name: \"赵六\"\n    },\n],\n\n// 方式一\nconst groupList = groupOrSort({\n    list: list,\n    type: 'group',\n    key: \"age\"\n});\n\n// 方式二\ngroupOrSort({\n    list: list,\n    type: 'group',\n    key: \"age\",\n    success: (res) => {\n        // do something\n    }\n});\n`;\n\n//# sourceURL=webpack:///./src/views/JS-article/group-sort/config.js?");

/***/ })

}]);