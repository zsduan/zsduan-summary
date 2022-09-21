<!--
 * @Author: zs.duan
 * @Date: 2022-09-20 16:23:08
 * @LastEditors: zs.duan
 * @LastEditTime: 2022-09-21 10:13:03
 * @FilePath: \vue2+js+eui+template\src\components\dzs-popup\index.vue
-->
<template>
    <el-dialog v-bind="{...dialogProps}" :title="title" :visible="isShow" :width="width" @close="close" @open="open">
        <slot></slot>

        <div slot="footer">
            <slot name="footer"></slot>
        </div>
    </el-dialog>
</template>

<script>
/*
 *@props : title 弹窗标题
 *@props : isShow  是否显示
 *@props : width 宽度
 *@props : dialogProps 饿了吗ui原生属性
 *
 *@methods :close 关闭弹窗
 *@methods :open 打开弹窗
 *
 */
export default {
    name: "dzs-popup",
    props: {
        title: {
            type: String,
            default: () => {
                return "提示";
            },
        },
        isShow: {
            type: Boolean,
            default: () => {
                return false;
            },
        },
        width: {
            type: String,
            default: () => {
                return "50%";
            },
        },
        dialogProps: {
            type: Object,
            default: () => {
                return {};
            },
        },
    },
    data() {
        return {};
    },
    methods: {
        close() {
            console.log("欧文没");
            this.$emit("update:isShow", false);
            this.$emit("close");
        },
        open() {
            this.$emit("open");
        },
    },
};
</script>

<style lang="less" scoped>
</style>
