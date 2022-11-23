<!--
 * @Author: zs.duan
 * @Date: 2022-11-23 17:37:43
 * @LastEditors: zs.duan
 * @LastEditTime: 2022-11-23 19:52:49
 * @FilePath: \vue2+elui+template\src\views\myCopy\myCopy.vue
-->
<template>
    <div>
        <dzs-header title="js复制"></dzs-header>
        <div class="page">
            <h2>基础用法</h2>
            <div class="item">
                <div class="my-box">
                    <el-input class="ipt" v-model="Text"  placeholder="请输入需要复制的文字"></el-input>
                    <el-button type="primary" class="btn" @click="copys">复制</el-button>
                </div>
                <dzs-code title="使用方法" :value="code1"></dzs-code>
            </div>
            <h2>源代码下载/查看</h2>
            <div class="item">
                <a target="_blank" href="https://github.com/zsduan/zsduan-summary/blob/master/src/utils/myCopy.js">下载/查看地址</a>
            </div>
        </div>
        <el-backtop :visibility-height="20"></el-backtop>
    </div>
</template>
<script>
import {myCopy} from "@/utils/myCopy";
import {code1} from "./config"
export default {
    data(){
        return {
            Text : "我是复制的文本",
            code1 : code1
        }
    },
    mounted(){

    },
    methods:{
        copys(){
            if(!this.Text){
                this.$message({
                    message : "必填",
                    type : "error"
                })
            }
            let is_copy = myCopy({
                Text : this.Text
            })
            if(is_copy){
                this.$message({
                    message : "复制成功",
                    type : "success"
                })
            }
        }
    }
}
</script>
<style lang="less" scoped>
.my-box{
    display: flex;
    .ipt{
        width: 30%;
        margin-left: 10px;
        &:first-child{
            margin-left: 0;
        }
    }
    .btn{
        display: inline-block;
        margin-left: 10px;
    }
}
</style>