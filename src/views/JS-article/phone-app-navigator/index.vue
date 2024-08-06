<template>
    <section>
        <public-item title="基础用法" :code="code1">
            {{ phoneAppNavigator }}
        </public-item>
        <public-item title="参数说明" :list="tableData"></public-item>
        <public-item title="源代码查看" :links="links"></public-item>
        <dzs-backtop target=".el-main"></dzs-backtop>
    </section>
</template>
<script>
import phoneAppNavigator from '@/tool/phoneAppNavigator';
import { code1 } from "./config";
import { tableData } from "./desc";
export default {
    data() {
        return {
            phoneAppNavigator: phoneAppNavigator(),
            code1: {
                title: "代码示例",
                code: code1,
                lang: "js"
            },
            tableData,
            links: {
                href: "https://github.com/zsduan/zsduan-summary/blob/master/src/tool/phoneAppNavigator.js",
                title: "源码"
            }
        }
    }
}
</script>
<style lang="scss" scoped></style>