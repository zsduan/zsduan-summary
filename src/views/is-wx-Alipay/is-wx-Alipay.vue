<template>
    <div>
        <div class="page">
            <h2>基础用法</h2>
            <div class="item">
                <div class="tips-box">点按钮直接打开</div>
                <el-button type="primary" @click="is_wx_Alipays">点我获取</el-button>
                <div class="guid">{{is_wx_Alipay}}</div>
                <dzs-code title="使用方法" :value="code1"></dzs-code>
            </div>
            <h2>源代码下载/查看</h2>
            <div class="item">
                <a target="_blank" href="https://github.com/zsduan/zsduan-summary/blob/master/src/utils/guid.js">下载/查看地址</a>
            </div>
        </div>
        <el-backtop :visibility-height="20" ></el-backtop>
    </div>
</template>
<script>
import {is_wx_Alipays} from "@/utils/is_wx_Alipay";
import {code1} from "./config";
export default {
    data(){
        return {
            is_wx_Alipay : is_wx_Alipays,
            code1 : code1
        }
    },
    methods:{
        is_wx_Alipays(){
            this.is_wx_Alipays = is_wx_Alipays;
        }
    }
}
</script>
<style lang="less" scoped>
.guid{
    padding-top: 10px;
}
</style>