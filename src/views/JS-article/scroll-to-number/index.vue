<template>
    <section>
        <public-item title="基础用法" :code="code1">
            <div id="number">0</div>
        </public-item>
        <public-item title="参数说明" :list="tableData"></public-item>
        <public-item title="源代码查看" :links="links"></public-item>
        <dzs-backtop  target=".el-main"></dzs-backtop>
        <dzs-navigation-title></dzs-navigation-title>
    </section>
</template>
<script>
import { code1 } from './config';
import scrollToNumber from "@/tool/scrollToNumber.js";
import {tableData} from "./desc";
export default {
    data() {
        return {
            code1 : {
                title : "代码示例",
                code : code1,
                lang : "js"
            },
            tableData : tableData,
            links : {
                href : "https://github.com/zsduan/zsduan-summary/blob/master/src/tool/scrollToNumber.js",
                title : "源码"
            }
        }
    },
    mounted() {
        this.scrollToNumber();
    },
    methods: {
        scrollToNumber(){
            scrollToNumber(0 , new Date().getFullYear() , 2000 , "number")
        }
    }
}
</script>
<style lang="scss" scoped>
#number{
    font-size: 50px;
    color: red;
    text-align: center;
}
</style>