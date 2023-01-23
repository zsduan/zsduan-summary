<!--
 * @Author: zs.duan
 * @Date: 2022-09-30 09:53:35
 * @LastEditors: zs.duan
 * @LastEditTime: 2023-01-11 15:32:40
 * @FilePath: \vue2+js+eui+template\src\views\guid\guid.vue
-->
<template>
    <div>
        <dzs-header title="生成guid" v-if="!newIndex"></dzs-header>
        <div class="page">
            <h2>基础用法</h2>
            <div class="item">
                <div class="tips-box">点按钮直接打开</div>
                <el-button type="primary" @click="setGuid">点击生成guid</el-button>
                <div class="guid">{{guid}}</div>
                <dzs-code title="使用方法" :value="code1"></dzs-code>
            </div>
            <h2>源代码下载/查看</h2>
            <div class="item">
                <a target="_blank" href="https://github.com/zsduan/zsduan-summary/blob/master/src/utils/guid.js">下载/查看地址</a>
            </div>
        </div>
        <el-backtop :visibility-height="20" v-if="!newIndex"></el-backtop>
    </div>
</template>
<script>
import guid from "@/utils/guid";
import {code1} from "./config";
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
            guid : "",
            code1 : code1
        }
    },
    methods:{
        setGuid(){
            this.guid = guid();
        }
    }
}
</script>
<style lang="less" scoped>
.guid{
    padding-top: 10px;
}
</style>