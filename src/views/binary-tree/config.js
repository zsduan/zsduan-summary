/*
 * @Author: zs.duan
 * @Date: 2023-01-14 14:50:36
 * @LastEditors: zs.duan
 * @LastEditTime: 2023-01-14 17:31:56
 * @FilePath: \vue2+js+eui+template\src\views\binary-tree\config.js
 */
export const code1 = `
// 使用方法1
import {CreatedTreeNode} from "../../utils/binary-tree";
// 具有方法
/*
 * method insert 插入节点
 * method romve 删除节点
 * method find 查找节点
 * method getMaxNode 获取最大节点
 * method getMinNode 获取最小节点
 * 
*/ 
/*
 * 优点 导入之后 编辑器有提示可以操作的函数提示 
 * 缺点 导入之后只能用它 不能多变量使用
*/
// 使用
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

export const code2 = `
// 使用方法2
import {CreatedTreeNodes} from "../../utils/binary-tree";
// 具有方法
/*
 * parame TreeNode 原始节点 非必填
 * method fail 失败返回
 * method success 成功返回
 * 
*/ 
// 其他说明
/*返回成功后 使用的方法和使用方法1是一致的*/ 
/*
 * 优点 导入之后 可以多处使用 还可以使用上一个的二叉树
 * 缺点 导入之后 没有智能提示
*/ 

// 使用
let TreeNode = null;
CreatedTreeNodes({
    success : (res)=>{
        TreeNode = res;
        reeNode.insert(2);
        console.log(TreeNode);
    }
})
`