/*
 * @Author: zs.duan
 * @Date: 2023-01-14 14:50:36
 * @LastEditors: zs.duan
 * @LastEditTime: 2023-01-14 17:31:56
 * @FilePath: \vue2+js+eui+template\src\views\binary-tree\config.js
 */
export const code1 = `
/**
 * 创建二叉树
 * @method insert 插入节点
 * @method romve 删除节点
 * @method find 查找节点
 * @method getMaxNode 获取最大节点
 * @method getMinNode 获取最小节点
*/ 
import BSTree from "@/utils/binary-tree";
const CreatedTreeNode = new BSTree;
CreatedTreeNode.insert(4);
CreatedTreeNode.insert(3);
CreatedTreeNode.insert(5);
CreatedTreeNode.insert(6);
CreatedTreeNode.insert(2);
console.log("二叉树 ==>" ,CreatedTreeNode)
console.log("最小值 ==>" , CreatedTreeNode.getMinNode());
console.log("最大值 ==>" , CreatedTreeNode.getMaxNode());
console.log("查询 ==>" , CreatedTreeNode.find(5));
CreatedTreeNode.romve(5)
console.log("删除 ==>" ,  CreatedTreeNode);
console.log("最小值 ==>" , CreatedTreeNode.getMinNode());
`