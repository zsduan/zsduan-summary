<template>
    <section>
        <public-item title="基础用法" :code="code1">
            <el-button @click="getGuid">生成</el-button>
            {{guid}}
        </public-item>
        <public-item title="源代码查看" :links="links"></public-item>
        <dzs-backtop  target=".el-main"></dzs-backtop>
        <dzs-navigation-title></dzs-navigation-title>
    </section>
</template>
<script>
import guid from "@/tool/guid";
import {code1} from "./config.js";
export default {
    data() {
        return {
            guid : guid(),
            code1 : {
                title : "代码示例",
                code : code1,
                lang : "js"
            },
            links : {
                href : "https://github.com/zsduan/zsduan-summary/blob/master/src/tool/guid.js",
                title : "源码"
            }
        };
    },
    methods : {
        getGuid() {
            this.guid = guid();
        }
    }
};
</script>
<style lang="scss" scoped>

</style>