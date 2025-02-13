<template>
    <section>
        <public-item title="PC端" >
            <dzs-header-button></dzs-header-button>
        </public-item>
        <public-item title="手机端" :code="code1">
            <div class="phone-public">
                <dzs-header-button></dzs-header-button>
            </div>
        </public-item>
        <public-item title="参数说明" :list="tableData"></public-item>
        <public-item title="组件源代码查看" :links="links"></public-item>
        <dzs-backtop  target=".el-main"></dzs-backtop>
    </section>
</template>
<script>
import dzsHeaderButton from "@/components/dzs-header-button";
import { code1 } from "./config.js";
import {tableData} from "./desc";
export default{
    components:{
        dzsHeaderButton
    },
    data(){
        return {
            links: {
                href: "https://github.com/zsduan/zsduan-summary/blob/master/src/components/dzs-form/index.vue",
                title: "组件源码"
            },
            tableData: tableData,
            code1: {
                title: "代码示例",
                code: code1,
                lang: "vue"
            },

        }
    }
}
</script>
<style lang="scss" scoped>
</style>