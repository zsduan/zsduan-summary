<template>
    <section>
        <public-item tips="基于 crypto-js@4.1.1"></public-item>
        <public-item title="对称加密(字符串)" :code="code1">
            <el-input v-model="encryptByString" @input="onEncryptByString" placeholder="请输入需要加密的字符串" />
            加密后:{{encryptRealutByString}}
        </public-item>
        <public-item title="参数说明" :list="encryptTableData"></public-item>
        <public-item title="返回参数说明" :list="returnEcryptTableData"></public-item>

        <public-item title="对称加密(对象)" :code="code2">
            <el-input v-model="encryptByObject" @input="onEncryptByObject" placeholder="请输入需要加密的对象" />
            加密后:{{encryptRealutByObject}}
        </public-item>
        <public-item title="参数说明" :list="encryptTableData"></public-item>
        <public-item title="返回参数说明" :list="returnEcryptTableData"></public-item>

        <public-item title="对称解码(字符串)" :code="code3">
            <el-input v-model="decryptByString" @input="onDecryptByString" placeholder="请输入需要解密的字符串" />
            解密后:{{decryptRealutByString}}
        </public-item>
        <public-item title="参数说明" :list="decryptTableData"></public-item>
        <public-item title="返回参数说明" :list="returDecryptTableData"></public-item>


        <public-item title="对称解密(对象)" :code="code4">
            <el-input v-model="decryptByObject" @input="onDecryptByObject" placeholder="请输入需要解密的对象" />
            解密后:{{decryptRealutByObject}}
        </public-item>
        <public-item title="参数说明" :list="decryptTableData"></public-item>
        <public-item title="返回参数说明" :list="returDecryptTableData"></public-item>


        <public-item title="MD5加密" :code="code5">
            <el-input v-model="MD5" @input="onMD5" placeholder="请输入需要加密的字符串" />
            加密后:{{MD5Realut}}
        </public-item>
        <public-item title="参数说明" :list="md5TableData"></public-item>
        <public-item title="返回参数说明" :list="returnEcryptTableData"></public-item>

        <public-item title="源代码查看" :links="links"></public-item>
        <dzs-backtop  target=".el-main"></dzs-backtop>
    </section>
</template>
<script>
import {ACEencrypt , ACEdecrypt , MD5} from "@/tool/encryp";
import { code1 , code2 , code3 , code4 , code5} from "./config";
import {encryptTableData , decryptTableData , md5TableData} from "./desc";
import {returDecryptTableData , returnEcryptTableData} from "./desc";
export default {
    data() {
        return {
            encryptByString : "zs.duan个人总结",
            encryptRealutByString : "",
            encryptByObject : JSON.stringify({
                name : "zsduan",
                age : 18
            }),
            encryptRealutByObject : "",
            decryptByString : "GlIVeLBhtberF5W5g0gC7AVZ2fQAMQb7zQOIC+HHm1M=",
            decryptRealutByString : "",
            decryptByObject : "hUQb0L4GtuNbRLcuCbQvdWqaV0f31jOtpAHW4kov8lE=",
            decryptRealutByObject : {},
            MD5 : "zs.duan个人总结",
            MD5Realut : "",
            code1 : {
                title : "代码示例",
                code : code1,
                lang : "js"
            },
            code2 : {
                title : "代码示例",
                code : code2,
                lang : "js"
            },
            code3 : {
                title : "代码示例",
                code : code3,
                lang : "js"
            },
            code4 : {
                title : "代码示例",
                code : code4,
                lang : "js"
            },
            code5 : {
                title : "代码示例",
                code : code2,
                lang : "js"
            },
            links : {
                href : "https://github.com/zsduan/zsduan-summary/blob/master/src/tool/encryp.js",
                title : "源码"
            },
            encryptTableData,
            decryptTableData,
            md5TableData,
            returnEcryptTableData,
            returDecryptTableData
        };
    },
    mounted(){
        this.onEncryptByString();
        this.onEncryptByObject();
        this.onMD5();
        this.onDecryptByObject();
        this.onDecryptByString();
    },
    methods:{
        onEncryptByString(){
            this.encryptRealutByString = ACEencrypt(this.encryptByString);
        },
        onEncryptByObject(){
            let obj = {};
            try{
                obj = JSON.parse(this.encryptByObject);
            }catch(e){
                this.$message({
                    message : "请输入正确的对象",
                    type : "warning"
                })
            }
            this.encryptRealutByObject = ACEencrypt({
                word : obj
            });
        },
        onDecryptByString(){
            this.decryptRealutByString = ACEdecrypt(this.decryptByString);
        },
        onDecryptByObject(){
            this.decryptRealutByObject = ACEdecrypt({
                word : this.decryptByObject,
                type : "object"
            });
        },
        onMD5(){
            this.MD5Realut = MD5(this.MD5);
        }
    }
};
</script>
<style lang="scss" scoped>

</style>