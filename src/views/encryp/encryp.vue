<!--
 * @Author: zs.duan
 * @Date: 2022-11-22 17:33:31
 * @LastEditors: zs.duan
 * @LastEditTime: 2022-12-15 14:09:52
 * @FilePath: \vue2+js+eui+template\src\views\encryp\encryp.vue
-->
<template>
    <div>
        <dzs-header title="对称加密/解密/MD5加密"></dzs-header>
        <div class="page">
            <h2>对称加密 普通文本</h2>
            <div class="item">
                <div class="my-box">
                    <el-input class="ipt" v-model="Text1"  placeholder="请输入你要加密的文本"></el-input>
                    <el-button type="primary" @click="encrypt1" class="btn">点我加密</el-button>
                </div>
                <div>{{encryptText1}}</div>
                <dzs-code title="使用方法" :value="code1"></dzs-code>
            </div>
            <h2>对称加密 对象</h2>
            <div class="item">
                <div style="width : 100%">{{encryptText2}}</div>
                <dzs-code title="使用方法" :value="code2"></dzs-code>
            </div>
            <h2>对称解密 普通文本</h2>
            <div class="item">
                <div class="my-box">
                    <el-input class="ipt" v-model="Text3"  placeholder="复制上面的普通加密文本"></el-input>
                    <el-button type="primary" @click="decrypt1" class="btn">点我解密</el-button>
                </div>
                <div>{{decryptText1}}</div>
                <dzs-code title="使用方法" :value="code3"></dzs-code>
            </div>
            <h2>对称解密 对象</h2>
            <div class="item">
                <div class="my-box">
                    <el-input class="ipt" v-model="Text4"  placeholder="复制上面的对象加密文本"></el-input>
                    <el-button type="primary" @click="decrypt2" class="btn">点我解密</el-button>
                </div>
                <div>{{decryptText2}}</div>
                <dzs-code title="使用方法" :value="code4"></dzs-code>
            </div>
            <h2>MD5加密</h2>
            <div class="item">
                <div class="my-box">
                    <el-input class="ipt" v-model="Text5"  placeholder="复制上面的对象加密文本"></el-input>
                    <el-button type="primary" @click="md5Encrypt" class="btn">点我加密</el-button>
                </div>
                <div>{{md5Text}}</div>
                <dzs-code title="使用方法" :value="code5"></dzs-code>
            </div>
            <h2>更多加密方式 访问cryptojs</h2>
            <div class="item">
                <a href="https://cryptojs.gitbook.io/docs/" target="_blank">访问cryptojs</a>
            </div>
            <h2>源代码下载/查看</h2>
            <div class="item">
                <a target="_blank" href="https://github.com/zsduan/zsduan-summary/blob/master/src/utils/encryp.js">下载/查看地址</a>
            </div>
        </div>
        <el-backtop :visibility-height="20">
        </el-backtop>
    </div>
</template>
<script>
import {ACEencrypt , ACEdecrypt , MD5} from "@/utils/encryp";
import {code1 , code2 , code3 , code4  , code5} from "./config" 
export default {
    data(){
        return {
            Text1 : "我是加密的文本",
            encryptText1 : "",
            Text2 : {
                name : "我是加密",
                desc : "用的是crypto-js"
            },
            encryptText2 : "",
            code1 : code1,
            code2 : code2,
            code3 : code3,
            code4 : code4,
            code5 : code5,
            decryptText1 : "",
            decryptText2 : "",
            Text3 : "",
            Text4 : "",
            Text5 : "我是加密的MD5",
            md5Text : ""
        }
    },
    mounted(){
        this.encrypt1();
        this.encrypt2();
        this.md5Encrypt();
    },
    methods:{
        encrypt1(){
            if(!this.Text1){
                this.$message({
                    message: "不能为空",
                    type: "error",
                });
                return ;
            }
            ACEencrypt({
                word : this.Text1,
                success : (res) =>{
                    this.encryptText1 = res;
                }
            });
        },
        encrypt2(){
            ACEencrypt({
                word : this.Text2,
                success : (res) =>{
                    this.encryptText2 = res;
                }
            });
        },
        decrypt1(){
            if(!this.Text3){
                this.$message({
                    message: "不能为空",
                    type: "error",
                });
                return ;
            }
            ACEdecrypt({
                word : this.Text3,
                success : (res)=>{
                    this.decryptText1 = res;
                }
            });
        },
        decrypt2(){
            if(!this.Text4){
                this.$message({
                    message: "不能为空",
                    type: "error",
                });
                return ;
            }
            ACEdecrypt({
                word : this.Text4,
                type : "object",
                success : (res)=>{
                    this.decryptText2 = res;
                }
            });
        },
        md5Encrypt(){
            if(!this.Text5){
                this.$message({
                    message: "不能为空",
                    type: "error",
                });
                return ;
            }
            MD5({
                word : this.Text5,
                success : (res) =>{
                    this.md5Text = res;
                }
            });
        }
    }
}
</script>
<style lang="less" scoped>
.my-box{
    display: flex;
    .ipt{
        width: 40%;
    }
    @media screen and (max-width: 768px) {
        .ipt{
            width: 70%;
        }
    }
    .btn{
        display: inline-block;
        margin-left: 20px;
    }
}
</style>