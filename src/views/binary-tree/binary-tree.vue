<template>
    <div>
        <dzs-header title="二叉树" v-if="!newIndex"></dzs-header>
        <div class="page">
            <h2>基础用法</h2>
            <div class="item">
                <dzs-code title="使用方法" :value="code1" :open="true"></dzs-code>
            </div>
            <h2>可以自定义原始数据</h2>
            <div class="item">
                <dzs-code title="使用方法" :value="code2" :open="true"></dzs-code>
            </div>
            <h2>源代码下载/查看</h2>
            <div class="item">
                <a target="_blank" href="https://github.com/zsduan/zsduan-summary/blob/master/src/utils/binary-tree.js">下载/查看地址</a>
            </div>
        </div>
        <el-backtop :visibility-height="20" v-if="!newIndex"></el-backtop>
    </div>
</template>
<script>
import {CreatedTreeNodes , CreatedTreeNode} from "../../utils/binary-tree";
import {code1 , code2} from "./config";
export default {
    props:{
        newIndex : {
            type : Boolean,
            default:()=>{
                return false
            }
        }
    },
    data(){
        return {
            code1 : code1,
            code2 : code2
        }
    },
    mounted(){
        // CreatedTreeNode.insert(4);
        // CreatedTreeNode.insert(3);
        // CreatedTreeNode.insert(5);
        // CreatedTreeNode.insert(6);
        // CreatedTreeNode.insert(2);
        // console.log("二叉树 ==>" ,CreatedTreeNode)
        // console.log("最小值 ==>" , CreatedTreeNode.getMinNode());
        // console.log("最大值 ==>" , CreatedTreeNode.getMaxNode());
        // console.log("查询 ==>" , CreatedTreeNode.find(5));
        // CreatedTreeNode.romve(5)
        // console.log("删除 ==>" ,  CreatedTreeNode);
        // console.log("最小值 ==>" , CreatedTreeNode.getMinNode());
        // let TreeNode = null;
        // CreatedTreeNodes({
        //     success : (res)=>{
        //         TreeNode = res;
        //         TreeNode.insert(2);
        //         console.log(TreeNode);
        //     }
        // })
    }
}
</script>
<style lang="less" scoped>
    
</style>