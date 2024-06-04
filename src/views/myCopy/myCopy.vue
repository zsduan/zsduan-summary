<template>
    <div>
        <div class="page">
            <h2>基础用法 复制文本</h2>
            <div class="item">
                <div class="my-box">
                    <el-input class="ipt" v-model="Text"  placeholder="请输入需要复制的文字"></el-input>
                    <el-button type="primary" class="btn" @click="copys">复制</el-button>
                </div>
                <dzs-code title="使用方法" :value="code1"></dzs-code>
            </div>
            <h2>复制HTML</h2>
            <div class="item">
                <div class="my-box">
                    <el-input class="ipt" v-model="Text1"  placeholder="请输入需要复制的html"></el-input>
                    <el-button type="primary" class="btn" @click="copy2">复制</el-button>
                </div>
                <dzs-code title="使用方法" :value="code2"></dzs-code>
                <dzs-code title="测试 直接粘贴到这里">
                    <div class="editer" contenteditable="true"></div>
                </dzs-code>
            </div>
            <h2>源代码下载/查看</h2>
            <div class="item">
                <a target="_blank" href="https://github.com/zsduan/zsduan-summary/blob/master/src/utils/myCopy.js">下载/查看地址</a>
            </div>
        </div>
        <el-backtop :visibility-height="20" ></el-backtop>
    </div>
</template>
<script>
import {myCopy} from "@/utils/myCopy.js";
import {code1 , code2} from "./config.js"
export default {
    data(){
        return {
            Text : "我是复制的文本",
            code1 : code1,
            Text1 : "<h2>复制image</h2>",
            code2 : code2,
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
            myCopy({
                content : this.Text,
                success : ()=>{
                    this.$message({
                        message : "复制成功",
                        type : "success"
                    })
                }
            })
        },
        copy2(){
             if(!this.Text1){
                this.$message({
                    message : "必填",
                    type : "error"
                })
            }
            myCopy({
                content : this.Text1,
                type : "Html",
                success : ()=>{
                    this.$message({
                        message : "复制成功",
                        type : "success"
                    })
                }
            })
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
    @media screen and (max-width: 768px) {
        .ipt{
            width: 70%;
        }
    }
    .btn{
        display: inline-block;
        margin-left: 10px;
    }
}

.editer{
    width: 100%;
    height: 100px;
    border: 1px solid #ccc;
}
</style>