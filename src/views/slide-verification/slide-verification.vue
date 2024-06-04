<template>
    <div>
        <div class="page">
            <h2>基础用法</h2>
            <div class="item">
                <el-button type="primary" @click="isShow = true" class="btn">点我打开验证</el-button>
                <dzs-slide-verification :isShow.sync="isShow" @success="isShow = false"></dzs-slide-verification>
            </div>
            <h2>代码示例</h2>
            <div class="item">
                <dzs-code title="代码示例" :value="code1" :open="true"></dzs-code>
            </div>
            <h2>参数说明</h2>
            <div class="item">
                <dzs-table :tableHeader="descHeader" :list="descData" :showOperation="false" :tableOptions="descTableOptions">
                </dzs-table>
            </div>
            <h2>组件源代码下载</h2>
            <div class="item">
                <a target="_blank" href="https://github.com/zsduan/zsduan-summary/blob/master/src/components/dzs-slide-verification/index.vue">滑动验证组件下载地址</a>
            </div>
        </div>
        <el-backtop :visibility-height="20" ></el-backtop>
    </div>
</template>
<script>
import dzsSlideVerification from "@/components/dzs-slide-verification/index.vue";
import {code1} from "./config";
import {descHeader , descData , descTableOptions} from "./desc";
export default {
    components:{
        dzsSlideVerification
    },
    data(){
        return {
            isShow : false,
            code1 : code1,
            descHeader : descHeader,
            descData : descData,
            descTableOptions : descTableOptions
        }
    }
}
</script>
<style lang="less" scoped>

</style>