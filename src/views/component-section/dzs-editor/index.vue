<template>
    <section>
        <public-item title="基础用法" :code="code1" tips="基于 tinymce@5.8.2 @tinymce/tinymce-vue@3.2.8">
            <dzs-editor @save="save"></dzs-editor>
        </public-item>
        <public-item title="携带默认值" :code="code2">
            <dzs-editor v-model="value"></dzs-editor>
        </public-item>
        <public-item title="参数说明" :list="tableData"></public-item>
        <public-item title="组件源代码查看" :links="links"></public-item>
        <dzs-backtop  target=".el-main"></dzs-backtop>
    </section>
</template>
<script>
import dzsEditor from "@/components/dzs-editor/index.vue";
import { tableData } from "./desc.js";
import { code1 , code2} from "./config.js";
export default {
    components: {
        dzsEditor
    },
    data() {
        return {
            value: "<p>这是默认值</p>",
            links: {
                href: "https://github.com/zsduan/zsduan-summary/blob/master/src/components/dzs-editor/index.vue",
                title: "组件源码"
            },
            tableData: tableData,
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
        }
    },
    methods:{
        save(val) {
            // do something
        }
    }
}
</script>
<style lang="scss" scoped></style>