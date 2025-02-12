<template>
    <section>
        <public-item title="排序" :code="code1">
            <el-select v-model="listSort" placeholder="请选择排序方式" @change="changeSort">
                <el-option v-for="item in changeList" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
            </el-select>
            <p> {{sortList}}</p>
        </public-item>
        <public-item title="排序" :code="code2">
            <el-select v-model="groupValue" placeholder="请选择分组方式" @change="changeGroup">
                <el-option v-for="item in changeGroupList" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
            </el-select>
            <p> {{groupList}}</p>
        </public-item>
        <public-item title="参数说明" :list="tableData"></public-item>
        <public-item title="源代码查看" :links="links"></public-item>
        <dzs-backtop  target=".el-main"></dzs-backtop>
        <dzs-navigation-title></dzs-navigation-title>
    </section>
</template>
<script>
import groupOrSort from "@/tool/groupOrSort.js";
import { code1 , code2 } from "./config";
import {tableData} from "./desc";
export default {
    data() {
        return {
            list: [
                {
                    age: 18,
                    name: "张三"
                },
                {
                    age: 16,
                    name: "李四"
                },
                {
                    age: 17,
                    name: "王五"
                },
                {
                    age: 17,
                    name: "赵六"
                },
            ],
            listSort: "desc",
            changeList: [
                {
                    label: "倒序",
                    value: "desc"
                },
                {
                    label: "升序",
                    value: "asc"
                }
            ],
            groupValue : "age",
            changeGroupList: [
                {
                    label: "名称",
                    value: "name"
                },
                {
                    label: "年龄",
                    value: "age"
                }
            ],
            sortList : [],
            groupList : [],
            code1: {
                title: "代码示例",
                code: code1,
                lang: "js"
            },
            code2: {
                title: "代码示例",
                code: code2,
                lang: "js"
            },
            tableData ,
            links: {
                href: "https://github.com/zsduan/zsduan-summary/blob/master/src/tool/groupOrSort.js",
                title: "源码"
            }
        }
    },
    mounted() {
        this.changeSort();
        this.changeGroup();
    },
    methods: {
        changeSort() {
            this.sortList = groupOrSort({
                list: this.list,
                order: this.listSort,
                key: "age"
            });
        },
        changeGroup(){
            this.groupList = groupOrSort({
                list: this.list,
                type: 'group',
                key: this.groupValue
            });
        }
    }
}
</script>
<style lang="scss" scoped>
p{
    margin-top: 10px;
    padding: 0 10px;
}
</style>