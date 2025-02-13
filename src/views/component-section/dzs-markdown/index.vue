<template>
    <section>
        <public-item title="基础用法" :code="code1" tips="基于 mavon-editor 2.10.4">
            <dzs-markdown v-model="value" ></dzs-markdown>
        </public-item>
        <public-item title="参数说明" :list="tableData"></public-item>
        <public-item title="组件源代码查看" :links="links"></public-item>
        <dzs-backtop  target=".el-main"></dzs-backtop>
    </section>
</template>
<script>
import dzsMarkdown from "@/components/dzs-markdown/index.vue";
import { code1 } from "./config.js";
import {tableData} from "./desc.js";
export default {
    components: {
        dzsMarkdown
    },
    data() {
        return {
            value : "# 我是一级标题",
            code1: {
                title: "代码示例",
                code: code1,
                lang: "vue"
            },
            tableData,
            links: {
                href: "https://github.com/zsduan/zsduan-summary/blob/master/src/components/dzs-markdown/index.vue",
                title: "组件源码"
            },
        }
    }
}
</script>
<style lang="scss" scoped>

</style>