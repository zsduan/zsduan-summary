<!--
 * @Author: zs.duan
 * @Date: 2022-12-05 17:30:22
 * @LastEditors: zs.duan
 * @LastEditTime: 2023-01-11 15:27:31
 * @FilePath: \vue2+js+eui+template\src\views\markdown\markdown.vue
-->
<template>
    <div>
        <dzs-header title="markdown组件" v-if="!newIndex"></dzs-header>
        <div class="page">
            <h2>基础用法</h2>
            <div class="item">
                <dzs-markdown v-model="mark1"></dzs-markdown>
                <dzs-code title="源代码" :value="code1"></dzs-code>
            </div>
            <h2>默认值</h2>
            <div class="item">
                <dzs-markdown v-model="mark2"></dzs-markdown>
                <dzs-code title="源代码" :value="code2"></dzs-code>
            </div>
            <h2>组件源代码下载</h2>
            <div class="item">
                <a target="_blank" href="https://github.com/zsduan/zsduan-summary/blob/master/src/components/dzs-markdown/index.vue">markdown组件下载地址</a>
            </div>
        </div>
        <el-backtop :visibility-height="20" v-if="!newIndex"></el-backtop>
    </div>
</template>
<script>
import dzsMarkdown from "../../components/dzs-markdown/index.vue";
import {code1 , code2} from "./config";
export default {
    props:{
        newIndex : {
            type : Boolean,
            default:()=>{
                return false
            }
        }
    },
    data(){
        return {
            code1 : code1,
            code2 : code2,
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