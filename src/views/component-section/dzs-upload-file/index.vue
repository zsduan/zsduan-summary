<template>
    <section>
        <public-item title="基础用法" :code="code1">
            <dzs-upload-file @change="change" ></dzs-upload-file>
        </public-item>
        <public-item title="按钮模式" :code="code2">
            <dzs-upload-file :isButton="true" @change="change" ></dzs-upload-file>
        </public-item>
        <public-item title="关闭提示" :code="code3">
            <dzs-upload-file :isOpenTip="false" :isButton="true" @change="change" ></dzs-upload-file>
        </public-item>
        <public-item title="参数说明" :list="tableData"></public-item>
        <public-item title="组件源代码查看" :links="links"></public-item>
        <dzs-backtop  target=".el-main"></dzs-backtop>
    </section>
</template>
<script>
import dzsUploadFile from "@/components/dzs-upload-file";
import {code1  , code2 , code3} from "./config.js";
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
            code2: {
                title: "代码示例",
                code: code2,
                lang: "vue"
            },
            code3: {
                title: "代码示例",
                code: code3,
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