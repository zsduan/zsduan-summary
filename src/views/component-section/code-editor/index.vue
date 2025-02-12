<template>
    <section>
        <public-item title="基本用法" :code="code1">
            <dzs-code-editor v-model="code" language="x-vue" :height="600"></dzs-code-editor>
        </public-item>
        <public-item title="参数说明" :list="tableData"></public-item>
        <public-item title="组件源代码查看" :links="links"></public-item>
        <dzs-backtop  target=".el-main"></dzs-backtop>
        <dzs-navigation-title></dzs-navigation-title>
    </section>
</template>
<script>
import dzsCodeEditor from "@/components/dzs-code-editor";
import { code1 } from "./config";
import { tableData } from "./desc";
export default{
    components:{
        dzsCodeEditor
    },
    data(){
        return{
            code:'',
            code1:{
                title:'代码示例',
                code:code1,
                language:'vue'
            },
            tableData,
            links:{
                href:'https://github.com/zsduan/zsduan-summary/blob/master/src/components/dzs-code-editor/index.vue',
                title:'组件源码'
            }
        }
    }
}
</script>
<style lang="scss" scoped>

</style>