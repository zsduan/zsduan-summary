<template>
    <section>
        <public-item title="基础用法" :code="code1">
            <dzs-upload-file @change="change" ></dzs-upload-file>
        </public-item>
        <public-item title="参数说明" :list="tableData"></public-item>
        <public-item title="组件源代码查看" :links="links"></public-item>
        <dzs-backtop  target=".el-main"></dzs-backtop>
        <dzs-navigation-title></dzs-navigation-title>
    </section>
</template>
<script>
import dzsUploadFile from "@/components/dzs-upload-file";
import {code1 } from "./config.js";
import {tableData} from "./desc.js";
export default {
    components:{
        dzsUploadFile
    },
    data() {
        return {
            code1: {
                title: "代码示例",
                code: code1,
                lang: "vue"
            },
            links: {
                href: "https://github.com/zsduan/zsduan-summary/blob/master/src/components/dzs-upload-file/index.vue",
                title: "组件源码"
            },
            tableData,
        }
    },
    methods: {
        change(fileList){
            // do something
        }
    }
}
</script>
<style lang="scss" scoped>

</style>