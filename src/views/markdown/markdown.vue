<template>
    <div>
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
        <el-backtop :visibility-height="20" ></el-backtop>
    </div>
</template>
<script>
import dzsMarkdown from "../../components/dzs-markdown/index.vue";
import {code1 , code2} from "./config";
export default {
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