<!--
 * @Author: zs.duan
 * @Date: 2022-12-27 13:35:24
 * @LastEditors: zs.duan
 * @LastEditTime: 2022-12-28 13:40:17
 * @FilePath: \vue2+js+eui+template\src\views\slide-verification\slide-verification.vue
-->
<template>
    <div>
        <dzs-header title="滑动验证"></dzs-header>
        <div class="page">
            <h2>基础用法</h2>
            <div class="item">
                <el-button type="primary" @click="isShow = true" class="btn">点我打开验证</el-button>
                <dzs-slide-verification :isShow.sync="isShow" @success="isShow = false"></dzs-slide-verification>
                <dzs-code title="使用方法" :value="code1"></dzs-code>
            </div>
            <h2>组件源代码下载</h2>
            <div class="item">
                <a target="_blank" href="https://github.com/zsduan/zsduan-summary/blob/master/src/components/dzs-slide-verification/index.vue">滑动验证组件下载地址</a>
            </div>
        </div>
        <el-backtop :visibility-height="20"></el-backtop>
    </div>
</template>
<script>
import dzsSlideVerification from "@/components/dzs-slide-verification/index.vue";
import {code1} from "./config";
export default {
    components:{
        dzsSlideVerification
    },
    data(){
        return {
            isShow : false,
            code1 : code1
        }
    }
}
</script>
<style lang="less" scoped>

</style>