<template>
    <section>
        <public-item title="PC端" :code="code1">
            <el-button @click="isShow = true">点击打开滑动验证</el-button>
            <dzs-slide-verification :isShow.sync="isShow" @success="success">
            </dzs-slide-verification>
        </public-item>
        <public-item title="参数说明" :list="tableData"></public-item>
        <public-item title="组件源代码查看" :links="links"></public-item>
        <dzs-backtop  target=".el-main"></dzs-backtop>
    </section>
</template>
<script>
import dzsSlideVerification from "@/components/dzs-slide-verification";
import {tableData} from "./desc.js";
import {code1 } from "./config.js";
export default {
    components: {
        dzsSlideVerification
    },
    data() {
        return {
            isShow: false,
            links: {
                href: "https://github.com/zsduan/zsduan-summary/blob/master/src/components/dzs-slide-verification/index.vue",
                title: "组件源码"
            },
            tableData,
            code1: {
                title: "代码示例",
                code: code1,
                lang: "vue"
            },
        }
    },
    methods: {
        success() {
            this.isShow = false;
            // do something
        }
    }
}
</script>
<style lang="scss" scoped>

</style>
