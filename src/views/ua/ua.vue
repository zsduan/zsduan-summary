<!--
 * @Author: zs.duan
 * @Date: 2022-09-30 14:13:09
 * @LastEditors: zs.duan
 * @LastEditTime: 2022-09-30 14:17:15
 * @FilePath: \vue2+js+eui+template\src\views\ua\ua.vue
-->
<template>
    <div>
        <dzs-header title="获取浏览器信息"></dzs-header>
        <div class="page">
            <h2>基础用法</h2>
            <div class="item">
                <div class="tips-box">点按钮直接打开</div>
                <el-button type="primary" @click="getUa">点击获取浏览器信息</el-button>
                <div class="ua">{{ua}}</div>
                <dzs-code title="使用方法" :value="code1"></dzs-code>
            </div>
            <h2>源代码下载/查看</h2>
            <div class="item">
                <a href="https://github.com/zsduan/zsduan-summary/blob/master/src/utils/ua.js">下载/查看地址</a>
            </div>
        </div>
    </div>
</template>
<script>
import ua from "@/utils/ua";
import {code1} from "./config";
export default {
    data(){
        return {
            ua : "",
            code1 : code1
        }
    },
    methods:{
        getUa(){
            this.ua = ua();
        }
    }
}
</script>
<style lang="less" scoped>
.ua{
    padding-top: 10px;
}
</style>