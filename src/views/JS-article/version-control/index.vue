<template>
    <section>
        <public-item title="vue2中使用" :code="code1"></public-item>
        <public-item title="vue3中使用" :code="code2"></public-item>
        <public-item title="普通html中使用" :code="code3"></public-item>
        <public-item title="参数说明" :list="tableData"></public-item>
        <public-item title="源代码查看" :links="links"></public-item>
        <dzs-backtop  target=".el-main"></dzs-backtop>
    </section>
</template>
<script>
import {code1 , code2 , code3} from "./config.js";
import {tableData } from "./desc.js";
export default {
    data() {
        return {
            code1 : {
                title : "代码示例",
                code : code1,
                lang : "js"
            },
            code2 : {
                title : "代码示例",
                code : code2,
                lang : "js"
            },
            code3 : {
                title : "代码示例",
                code : code3,
                lang : "js"
            },
            tableData : tableData,
            links : {
                href : "https://github.com/zsduan/zsduan-summary/blob/master/src/directive/version-control.js",
                title : "源码"
            }
        };
    }
};
</script>
<style lang="scss" scoped>

</style>