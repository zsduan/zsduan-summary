<!--
 * @Author: zs.duan
 * @Date: 2022-12-05 17:30:22
 * @LastEditors: zs.duan
 * @LastEditTime: 2022-12-05 18:19:20
 * @FilePath: \vue2+elui+template\src\views\markdown\markdown.vue
-->
<template>
    <div>
        <dzs-header title="富文本组件"></dzs-header>
        <div class="page">
            <h2>基础用法</h2>
            <div class="item">
                <dzs-markdown v-model="mark1"></dzs-markdown>
                <dzs-code title="源代码" :value="code1"></dzs-code>
            </div>
            <h2>默认值</h2>
            <div class="item">
                <dzs-markdown v-model="mark2"></dzs-markdown>
                <dzs-code title="源代码" :value="code1"></dzs-code>
            </div>
        </div>
    </div>
</template>
<script>
import dzsMarkdown from "../../components/dzs-markdown/index.vue";
import {code1} from "./config";
export default {
    data(){
        return {
            code1 : code1,
            mark1 : "",
            mark2 : "# 我是默认标题"
        }
    },
    components:{
        dzsMarkdown
    },
    methods:{

    }
}
</script>
<style lang="less" scoped>
    
</style>