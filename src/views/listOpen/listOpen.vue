<!--
 * @Author: zs.duan
 * @Date: 2022-11-23 14:55:50
 * @LastEditors: zs.duan
 * @LastEditTime: 2022-11-23 16:18:18
 * @FilePath: \vue2+elui+template\src\views\listOpen\listOpen.vue
-->
<template>
    <div>
        <dzs-header title="指令 展开列表"></dzs-header>
        <div class="page">
            <h2>基础用法</h2>
            <div class="item">
                <el-button type="primary" @click="is_open = !is_open" v-dzs-debounce="1000">点我切换</el-button>
                <div class="open-list" v-dzs-list-open="is_open">
                    <div class="open-lsit-item" v-for="(item , index) in list" :key="index">{{item.Text}}</div>
                </div>
                <dzs-code title="使用方法" :value="code1"></dzs-code>
            </div>
            <h2>源代码下载/查看</h2>
            <div class="item">
                <a target="_blank" href="https://github.com/zsduan/zsduan-summary/blob/master/src/utils/instructions.js">下载/查看地址</a>
            </div>
        </div>
        <el-backtop :visibility-height="20"></el-backtop>
    </div>
</template>
<script>
import {code1} from "./config"
export default {
    data(){
        return {
            code1 : code1,
            list : [
                {
                    Text : "重庆",
                    Value : "chongqing"
                },
                {
                    Text : "上海",
                    Value : "shanghai"
                },
                {
                    Text : "北京",
                    Value : "beijing"
                },
                {
                    Text : "天津",
                    Value : "tianjin"
                },
                {
                    Text : "深圳",
                    Value : "shenzhen"
                },
                {
                    Text : "山西",
                    Value : "shanxi"
                },
                {
                    Text : "陕西",
                    Value : "shanxi"
                }
            ],
            is_open : false,
        }
    },
    mounted(){

    },
    methods:{}
}
</script>
<style lang="less" scoped>
.open-list{
    border: 1px solid #ccc;
    width: 200px;
    margin-top: 10px;
    .open-lsit-item{
        width: 200px;
        border-bottom: 1px solid #ccc;
        padding: 10px;
        text-align: center;
    }
}
</style>