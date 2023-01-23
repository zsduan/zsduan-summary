<!--
 * @Author: zs.duan
 * @Date: 2022-11-25 14:26:21
 * @LastEditors: zs.duan
 * @LastEditTime: 2023-01-11 15:33:47
 * @FilePath: \vue2+js+eui+template\src\views\myRouter\myRouter.vue
-->
<template>
    <div>
        <dzs-header title="vue动态路由" v-if="!newIndex"></dzs-header>
        <div class="page">
            <h2>基础用法</h2>
            <div class="item">
                <dzs-code title="源代码" :value="code1"></dzs-code>
            </div>
            <h2>源代码下载/查看</h2>
            <div class="item">
                <a target="_blank" href="https://github.com/zsduan/zsduan-summary/blob/master/src/router/setRouter.js">下载/查看地址1 setRouter</a>
                <a target="_blank" href="https://github.com/zsduan/zsduan-summary/blob/master/src/router/inderx.js">下载/查看地址2 index</a>
                <a target="_blank" href="https://github.com/zsduan/zsduan-summary/blob/master/src/subMenu.json">下载/查看地址3 menuJson</a>
            </div>
        </div>
        <el-backtop :visibility-height="20" v-if="!newIndex">
        </el-backtop>
    </div>
</template>
<script>
import {code1} from "./config";
import {signalRcoont} from "@/utils/signalR";
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
            code1 : code1
        }
    }
}
</script>
<style lang="less" scoped>
.item{
    a{
        margin-left: 10px;
        &:first-child{
            margin-left: 0;
        }
    }
}
@media screen and (max-width: 768px) {
    .item{
        a{
            display: block;
            margin-left: 0;
            margin-top: 10px;
        }
    }
}
</style>