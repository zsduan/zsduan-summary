<template>
    <div>
        <div class="page" >
            <div class="item">
                <h2>基本用法</h2>
                <div class="ipt-box">
                    <el-input v-model="myCode" placeholder="请输入验证码" class="ipt"></el-input>
                    <div class="code-box">
                        <dzs-verification-code v-model="verification_code"></dzs-verification-code>
                    </div>
                </div>
                <div v-if="verification_code == myCode.toLocaleUpperCase()">验证成功</div>
                <div v-if="verification_code != myCode.toLocaleUpperCase()">验证失败/未输入</div>
                <dzs-code title="代码片段" :value="code1"></dzs-code>
            </div>
            <div class="item">
                <h2>自定义随机文字</h2>
                <div class="ipt-box">
                    <el-input v-model="myCode2" placeholder="请输入验证码" class="ipt"></el-input>
                    <div class="code-box">
                        <dzs-verification-code v-model="verification_code2" :codeArr="['技','术','部','好','样']"></dzs-verification-code>
                    </div>
                </div>
                <div v-if="verification_code2 == myCode2.toLocaleUpperCase()">验证成功</div>
                <div v-if="verification_code2 != myCode.toLocaleUpperCase()">验证失败/未输入</div>
                <dzs-code title="代码片段" :value="code2"></dzs-code>
            </div>
            <h2>参数说明</h2>
            <div class="item">
                <dzs-table :tableHeader="descHeader" :list="descData" :showOperation="false" :tableOptions="descTableOptions">
                </dzs-table>
            </div>
            <h2>组件源代码下载</h2>
            <div class="item">
                <a target="_blank" href="https://github.com/zsduan/zsduan-summary/blob/master/src/components/dzs-verification-code/index.vue">表单组件下载地址</a>
            </div>
        </div>
        <el-backtop :visibility-height="20" ></el-backtop>
    </div>
</template>
<script>
import dzsVerificationCode from "@/components/dzs-verification-code/index.vue";
import {code1 , code2} from "./config";
import {descHeader , descData , descTableOptions} from "./desc";
export default {
    components:{dzsVerificationCode},
    data() {
        return {
            myCode : "",
            myCode2 : "",
            verification_code : "",
            verification_code2 : "",
            code1 : code1,
            code2 : code2,
            descHeader : descHeader,
            descData : descData,
            descTableOptions : descTableOptions
        };
    },
    mounted() {},
    methods:{
        
    }
};
</script>
<style lang="less" scoped>
.ipt-box{
    display: flex;
    align-items: center;
    .code-box{
        width: 200px;
        height: 80px;
        margin-left: 20px;
    }
    .ipt{
        width: 300px;
    }
}
</style>