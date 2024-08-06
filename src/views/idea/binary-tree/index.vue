<template>
    <section>
        <public-item title="二叉树" :code="code" :isOpen="true"></public-item>
    </section>
</template>
<script>
import BSTree from "@/utils/binary-tree.js";
import { code1 } from "./config.js";
export default {
    data() {
        return {
            code: {
                title: "代码示例",
                code: code1,
                lang: "js"
            },
        }
    },
    mounted() {
        this.initTree()
    },
    methods: {
        initTree() {
            const CreatedTreeNode = new BSTree
            CreatedTreeNode.insert(4);
            CreatedTreeNode.insert(3);
            CreatedTreeNode.insert(5);
            CreatedTreeNode.insert(6);
            CreatedTreeNode.insert(2);
            console.log("二叉树 ==>", CreatedTreeNode)
            console.log("最小值 ==>", CreatedTreeNode.getMinNode());
            console.log("最大值 ==>", CreatedTreeNode.getMaxNode());
            console.log("查询 ==>", CreatedTreeNode.find(5));
            CreatedTreeNode.romve(5)
            console.log("删除 ==>", CreatedTreeNode);
            console.log("最小值 ==>", CreatedTreeNode.getMinNode());
        }
    },
}
</script>