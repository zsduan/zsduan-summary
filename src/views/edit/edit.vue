<!--
 * @Author: zs.duan
 * @Date: 2022-09-21 14:52:41
 * @LastEditors: zs.duan
 * @LastEditTime: 2022-11-22 19:14:06
 * @FilePath: \vue2+elui+template\src\views\edit\edit.vue
-->
<template>
    <div>
        <dzs-header title="富文本组件"></dzs-header>
        <div class="page">
            <h2>基础用法</h2>
            <div class="item">
                <dzs-editor></dzs-editor>
                <dzs-code title="源代码" :value="code1"></dzs-code>
            </div>
            <h2>默认值</h2>
            <div class="item">
                <dzs-editor :value.sync="defaultValue"></dzs-editor>
                <dzs-code title="源代码" :value="code2"></dzs-code>
            </div>
            <h2>更多功能</h2>
            <div class="item">
                <div class="tips-box">自己在源代码去看</div>
            </div>
            <h2>组件源代码下载</h2>
            <div class="item">
                <a target="_blank" href="https://github.com/zsduan/zsduan-summary/blob/master/src/components/dzs-editor/index.vue">富文本组件下载地址</a>
            </div>
        </div>
    </div>
</template>
<script>
import dzsEditor from "@/components/dzs-editor/index.vue";
import {code1 , code2} from "./config"
export default {
    components : {
        dzsEditor
    },
    data(){
        return {
            code1 : code1,
            code2 : code2,
            defaultValue : "<p>我是默认值</p>"
        }
    },
    mounted(){
        // console.log(process.env.NODE_ENV)
    }
}
</script>
<style lang="less" scoped>
.page {
    .item {
        padding: 10px 0;
        a{
            display: inline-block;
            padding: 10px 20px;
            text-align: center;
            border: 1px solid #ccc;
            border-radius: 10px;
        }
    }
}
</style>