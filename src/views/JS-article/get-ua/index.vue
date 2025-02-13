<template>
    <section>
        <public-item title="基础用法" :code="code1">
            {{ua}}
        </public-item>
        <public-item title="返回参数说明" :list="tableData"></public-item>
        <public-item title="源代码查看" :links="links"></public-item>
        <dzs-backtop  target=".el-main"></dzs-backtop>
    </section>
</template>
<script>
import getUA from "@/tool/ua";
import {code1} from "./config.js";
import {tableData} from "./desc.js";
export default {
    data() {
        return {
            ua : getUA(),
            code1 : {
                title : "代码示例",
                code : code1,
                lang : "js"
            },
            links : {
                href : "https://github.com/zsduan/zsduan-summary/blob/master/src/tool/guid.js",
                title : "源码"
            },
            tableData
        };
    }
};
</script>
<style lang="scss" scoped>

</style>