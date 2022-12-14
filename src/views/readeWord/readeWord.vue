<!--
 * @Author: zs.duan
 * @Date: 2022-11-25 14:39:08
 * @LastEditors: zs.duan
 * @LastEditTime: 2022-11-25 14:41:38
 * @FilePath: \vue2+elui+template\src\views\readeWord\readeWord.vue
-->
<template>
    <div>
        <dzs-header title="读取word"></dzs-header>
        <div class="page">
            <h2>基础用法</h2>
            <div class="item">
                <dzs-code title="源代码" :value="code1"></dzs-code>
            </div>
            <h2>源代码下载/查看</h2>
            <div class="item">
                <a target="_blank" href="https://www.npmjs.com/package/docx-preview">docx-preview npm 地址</a>
            </div>
        </div>
        <el-backtop :visibility-height="20">
        </el-backtop>
    </div>
</template>
<script>
import {code1} from "./config";
export default {
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
</style>