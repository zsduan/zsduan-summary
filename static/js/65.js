(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[65],{

/***/ "./src/views/JS-article/encryption-decryption/desc.js":
/*!************************************************************!*\
  !*** ./src/views/JS-article/encryption-decryption/desc.js ***!
  \************************************************************/
/*! exports provided: encryptTableData, decryptTableData, md5TableData, returDecryptTableData, returnEcryptTableData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"encryptTableData\", function() { return encryptTableData; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"decryptTableData\", function() { return decryptTableData; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"md5TableData\", function() { return md5TableData; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"returDecryptTableData\", function() { return returDecryptTableData; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"returnEcryptTableData\", function() { return returnEcryptTableData; });\nconst encryptTableData = [{\n  key: \"option\",\n  type: \"param\",\n  parameterType: \"Object | String\",\n  desc: \"配置对象 | 需要加密的字符串\",\n  remark: \"必填\",\n  children: [{\n    key: \"word\",\n    type: \"param\",\n    parameterType: \"Array | String | Object\",\n    desc: \"需要加密的值\",\n    remark: \"\"\n  }, {\n    key: \"key\",\n    type: \"param\",\n    parameterType: \"String\",\n    desc: \"秘钥\",\n    remark: \"\"\n  }, {\n    key: \"success\",\n    type: \"param\",\n    parameterType: \"Function\",\n    desc: \"成功返回\",\n    remark: \"\"\n  }, {\n    key: \"fail\",\n    type: \"param\",\n    parameterType: \"Function\",\n    desc: \"失败返回\",\n    remark: \"\"\n  }]\n}];\nconst decryptTableData = [{\n  key: \"option\",\n  type: \"param\",\n  parameterType: \"Object | String\",\n  desc: \"配置对象 | 需要解密的字符串\",\n  remark: \"必填\",\n  children: [{\n    key: \"word\",\n    type: \"param\",\n    parameterType: \"Array | String | Object\",\n    desc: \"需要解密的值\",\n    remark: \"\"\n  }, {\n    key: \"key\",\n    type: \"param\",\n    parameterType: \"String\",\n    desc: \"秘钥\",\n    remark: \"\"\n  }, {\n    key: \"type\",\n    type: \"param\",\n    parameterType: \"String\",\n    desc: \"类型\",\n    remark: \"string | object 默认 string\"\n  }, {\n    key: \"success\",\n    type: \"param\",\n    parameterType: \"Function\",\n    desc: \"成功返回\",\n    remark: \"\"\n  }, {\n    key: \"fail\",\n    type: \"param\",\n    parameterType: \"Function\",\n    desc: \"失败返回\",\n    remark: \"\"\n  }]\n}];\nconst md5TableData = [{\n  key: \"option\",\n  type: \"param\",\n  parameterType: \"Object | String\",\n  desc: \"配置对象 | 需要解密的字符串\",\n  remark: \"必填\",\n  children: [{\n    key: \"word\",\n    type: \"param\",\n    parameterType: \"Array | String | Object\",\n    desc: \"需要解密的值\",\n    remark: \"\"\n  }, {\n    key: \"success\",\n    type: \"param\",\n    parameterType: \"Function\",\n    desc: \"成功返回\",\n    remark: \"\"\n  }, {\n    key: \"fail\",\n    type: \"param\",\n    parameterType: \"Function\",\n    desc: \"失败返回\",\n    remark: \"\"\n  }]\n}];\nconst returDecryptTableData = [{\n  key: \"string\",\n  type: \"return\",\n  parameterType: \"Array\",\n  desc: \"加密后的结果\",\n  remark: \"\"\n}];\nconst returnEcryptTableData = [{\n  key: \"string\",\n  type: \"return\",\n  parameterType: \"Array\",\n  desc: \"解密后的结果\",\n  remark: \"\"\n}];\n\n//# sourceURL=webpack:///./src/views/JS-article/encryption-decryption/desc.js?");

/***/ })

}]);