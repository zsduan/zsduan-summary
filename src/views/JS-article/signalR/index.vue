<template>
    <section>
        <public-item title="基础用法" :code="code1"></public-item>
        <public-item title="参数说明" :list="tableData"></public-item>
        <public-item title="返回参数说明" :list="returnTableData"></public-item>
        <public-item title="源代码查看" :links="links"></public-item>
        <dzs-backtop  target=".el-main"></dzs-backtop>
        <dzs-navigation-title></dzs-navigation-title>
    </section>
</template>
<script>
import {code1} from "./config.js";
import {tableData , returnTableData} from "./desc.js";
export default {
    data() {
        return {
            code1 : {
                title : "代码示例",
                code : code1,
                lang : "js"
            },
            tableData : tableData,
            returnTableData : returnTableData,
            links : {
                href : "https://github.com/zsduan/zsduan-summary/blob/master/src/tool/signalR.js",
                title : "源码"
            }
        };
    }
};
</script>
<style lang="scss" scoped>

</style>