<template>
    <div class="qr-code">
        <div class="page">
            <h2>表单配置</h2>
            <div class="item">
               <div id="number">0</div>
               <dzs-code title="使用方法" :value="code" :open="true"></dzs-code>
            </div>
            <h2>源代码下载/查看</h2>
            <div class="item">
                <a target="_blank" href="https://github.com/zsduan/zsduan-summary/blob/master/src/utils/scrollToNumber.js">下载/查看地址</a>
            </div>
        </div>
    </div>
</template>
<script>
import scrollToNumber from "../../utils/scrollToNumber.js";
import {code} from "./config.js";
export default{
    data(){
        return {
            code : code
        }
    },
    mounted() {
        this.scrollToNumber();
    },
    methods: {
        scrollToNumber(){
            scrollToNumber(0 , new Date().getFullYear() , 2000 , "number")
        }
    }
}
</script>
<style lang="less" scoped>
#number{
    font-size: 45px;
    text-align: center;
    padding: 20px 0;
}
</style>