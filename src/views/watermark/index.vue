<template>
    <div>
        <div class="page">
            <h2>基础用法</h2>
            <div class="item">
                <dzs-code title="使用方法" :value="code1"></dzs-code>
            </div>
            <h2>解析html</h2>
            <div class="item">
                <dzs-code title="使用方法" :value="code2"></dzs-code>
            </div>
            <h2>源代码下载/查看</h2>
            <div class="item">
                <a target="_blank" href="https://github.com/zsduan/zsduan-summary/blob/master/src/utils/watermark.js">下载/查看地址</a>
            </div>
        </div>
        <el-backtop :visibility-height="20" ></el-backtop>
    </div>
</template>
<script>

import {code1 , code2} from "./config";
export default {
    data(){
        return {
            code1 : code1,
            code2 : code2
        }
    },
    methods:{
        
    }
}
</script>
<style lang="less" scoped>
.ua{
    padding-top: 10px;
}
</style>