<template>
    <div>
        <dzs-header title="分组排序" v-if="!newIndex"></dzs-header>
        <div class="page">
            <h2>基础用法-排序</h2>
            <div class="item">
                <div>{{value1}}</div>
                <dzs-code title="使用方法" :value="code1"></dzs-code>
            </div>
            <h2>基础用法-排序-降序</h2>
            <div class="item">
                <div>{{value2}}</div>
                <dzs-code title="使用方法" :value="code2"></dzs-code>
            </div>
            <h2>基础用法-分组</h2>
            <div class="item">
                <div>{{value3}}</div>
                <dzs-code title="使用方法" :value="code3"></dzs-code>
            </div>
            <h2>源代码下载/查看</h2>
            <div class="item">
                <a target="_blank" href="https://github.com/zsduan/zsduan-summary/blob/master/src/utils/group-sorting.js">下载/查看地址</a>
            </div>
        </div>
        <el-backtop :visibility-height="20" v-if="!newIndex"></el-backtop>
    </div>
</template>
<script>
import groupOrSort from "../../utils/group-sorting";
import { code1 , code2 , code3 } from "./config";
export default {
    props: {
        newIndex: {
            type: Boolean,
            default: () => {
                return false
            }
        }
    },
    data() {
        return {
            code1: code1,
            code2 : code2,
            code3 : code3,
            value1 : "",
            value2 : "",
            value3 : ""
        }
    },
    mounted() {
        let list = [
            {
                age: 18,
                name: "张三"
            },
            {
                age: 18,
                name: "李四"
            },
            {
                age: 17,
                name: "王五"
            },
            {
                age: 17,
                name: "王麻子"
            },
            {
                age: 20,
                name: "赵六"
            },
            {
                age : 24 ,
                name : "赵六器"
            },
            {
                age: 20,
                name: "赵六器"
            }
        ]
        this.value1 = groupOrSort({
            list,
            key: "age",
        });
        // 排序降序
        this.value2 = groupOrSort({
            list,
            key: "age",
            order: "desc"
        });
        // 分组
        this.value3 = groupOrSort({
            list,
            key: "name",
            type : "group"
        });
    },
    methods: {

    }
}
</script>
<style lang="less" scoped>
.guid {
    padding-top: 10px;
}
</style>