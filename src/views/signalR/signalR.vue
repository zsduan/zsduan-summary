<!--
 * @Author: zs.duan
 * @Date: 2022-11-25 14:15:46
 * @LastEditors: zs.duan
 * @LastEditTime: 2022-11-25 14:24:19
 * @FilePath: \vue2+elui+template\src\views\signalR\signalR.vue
-->
<template>
    <div>
        <dzs-header title="signalR连接"></dzs-header>
        <div class="page">
            <div class="tips-box">signalR 是.net 提供的及时通信</div>
            <h2>基础用法</h2>
            <div class="item">
                <dzs-code title="源代码" :value="code1"></dzs-code>
            </div>
            <h2>源代码下载/查看</h2>
            <div class="item">
                <a target="_blank" href="https://github.com/zsduan/zsduan-summary/blob/master/src/utils/signalR.js">下载/查看地址</a>
            </div>
        </div>
        <el-backtop :visibility-height="20">
        </el-backtop>
    </div>
</template>
<script>
import {code1} from "./config";
import {signalRcoont} from "@/utils/signalR";
export default {
    data(){
        return {
            code1 : code1
        }
    }
}
</script>
<style lang="less" scoped>

</style>