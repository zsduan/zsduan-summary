(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c9aab"],{"59b3":function(e,n,o){"use strict";o.r(n),o.d(n,"code1",(function(){return r}));const r='\n/**\n * 创建二叉树\n * @method insert 插入节点\n * @method romve 删除节点\n * @method find 查找节点\n * @method getMaxNode 获取最大节点\n * @method getMinNode 获取最小节点\n*/ \nimport BSTree from "@/utils/binary-tree";\nconst CreatedTreeNode = new BSTree;\nCreatedTreeNode.insert(4);\nCreatedTreeNode.insert(3);\nCreatedTreeNode.insert(5);\nCreatedTreeNode.insert(6);\nCreatedTreeNode.insert(2);\nconsole.log("二叉树 ==>" ,CreatedTreeNode)\nconsole.log("最小值 ==>" , CreatedTreeNode.getMinNode());\nconsole.log("最大值 ==>" , CreatedTreeNode.getMaxNode());\nconsole.log("查询 ==>" , CreatedTreeNode.find(5));\nCreatedTreeNode.romve(5)\nconsole.log("删除 ==>" ,  CreatedTreeNode);\nconsole.log("最小值 ==>" , CreatedTreeNode.getMinNode());\n'}}]);
//# sourceMappingURL=chunk-2d0c9aab.2568bc73.js.map