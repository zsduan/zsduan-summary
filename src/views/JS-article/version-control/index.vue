<template>
    <section>
        <div v-version="'0.9.0.dev'">2.3.1</div>
        <public-item title="vue2中使用" :code="code1"></public-item>
        <public-item title="vue3中使用" :code="code2"></public-item>
        <public-item title="普通html中使用" :code="code3"></public-item>
        <public-item title="开始全局调试模式" :code="code4" tips="在 isDev = true 的模式下 会全部显示版本号 作为开发使用 会直接忽略所有配置项 你在vue中 可以结合 process.env.NODE_ENV == 'development'使用 "></public-item>
        <public-item title="参数说明" :list="tableData"></public-item>
        <public-item title="源代码查看" :links="links"></public-item>
        <dzs-backtop  target=".el-main"></dzs-backtop>
    </section>
</template>
<script>
import {code1 , code2 , code3 , code4} from "./config.js";
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
            code4 : {
                title : "代码示例",
                code : code4,
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