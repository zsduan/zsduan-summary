(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[133],{

/***/ "./src/views/idea/binary-tree/config.js":
/*!**********************************************!*\
  !*** ./src/views/idea/binary-tree/config.js ***!
  \**********************************************/
/*! exports provided: code1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"code1\", function() { return code1; });\n/*\r\n * @Author: zs.duan\r\n * @Date: 2023-01-14 14:50:36\r\n * @LastEditors: zs.duan\r\n * @LastEditTime: 2023-01-14 17:31:56\r\n * @FilePath: \\vue2+js+eui+template\\src\\views\\binary-tree\\config.js\r\n */\nconst code1 = `\n/**\n * 创建二叉树\n * @method insert 插入节点\n * @method romve 删除节点\n * @method find 查找节点\n * @method getMaxNode 获取最大节点\n * @method getMinNode 获取最小节点\n*/ \nimport BSTree from \"@/utils/binary-tree\";\nconst CreatedTreeNode = new BSTree;\nCreatedTreeNode.insert(4);\nCreatedTreeNode.insert(3);\nCreatedTreeNode.insert(5);\nCreatedTreeNode.insert(6);\nCreatedTreeNode.insert(2);\nconsole.log(\"二叉树 ==>\" ,CreatedTreeNode)\nconsole.log(\"最小值 ==>\" , CreatedTreeNode.getMinNode());\nconsole.log(\"最大值 ==>\" , CreatedTreeNode.getMaxNode());\nconsole.log(\"查询 ==>\" , CreatedTreeNode.find(5));\nCreatedTreeNode.romve(5)\nconsole.log(\"删除 ==>\" ,  CreatedTreeNode);\nconsole.log(\"最小值 ==>\" , CreatedTreeNode.getMinNode());\n`;\n\n//# sourceURL=webpack:///./src/views/idea/binary-tree/config.js?");

/***/ })

}]);