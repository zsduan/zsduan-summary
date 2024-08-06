<template>
    <section>
        <public-item title="基础用法" :code="code1">
            <div class="ipt-box">
                <el-input v-model="text" placeholder="请输入内容"></el-input>
                <el-button @click="copyText">复制文本</el-button>
            </div>
        </public-item>
        <public-item title="复制html" :code="code2" tips="https | localhost && 浏览器支持 navigator.clipboard api">
            <div class="ipt-box">
                <el-input v-model="htmlText" placeholder="请输入内容"></el-input>
                <el-button @click="copyHtml">复制文本</el-button>
            </div>
            <div class="editer" contenteditable="true">粘贴到这里</div>
        </public-item>
        <public-item title="复制图片" :code="code3" tips="https | localhost && 浏览器支持 navigator.clipboard api">
            <div class="ipt-box">
                <img :src="imgText" alt="">
                <el-button @click="copyImg">复制图片</el-button>
            </div>
            <div class="editer" contenteditable="true">粘贴到这里</div>
        </public-item>
        <public-item title="参数说明" :list="tableData"></public-item>
        <public-item title="源代码查看" :links="links"></public-item>
        <dzs-backtop  target=".el-main"></dzs-backtop>
    </section>
</template>
<script>
import copy from "@/tool/copy";
import { code1, code2, code3 } from "./config";
import {tableData} from "./desc";
export default {
    data() {
        return {
            text: "https://github.com/zsduan/zsduan-summary",
            imgText: require("../../../assets/logo.png"),
            htmlText: "<h2>hello world</h2>",
            code1: {
                title: "代码示例",
                code: code1,
                lang: "js"
            },
            code2: {
                title: "代码示例",
                code: code2,
                lang: "js"
            },
            code3: {
                title: "代码示例",
                code: code3,
                lang: "js"
            },
            tableData ,
            links: {
                href: "https://github.com/zsduan/zsduan-summary/blob/master/src/tool/copy.js",
                title: "源码"
            }
        }
    },
    methods: {
        copyText() {
            copy({
                text: this.text,
                success: () => {
                    this.$message({
                        message: "复制成功",
                        type: "success"
                    })
                }
            });
        },
        copyHtml() {
            copy({
                text: this.htmlText,
                type: "html",
                success: () => {
                    this.$message({
                        message: "复制成功",
                        type: "success"
                    })
                }
            });
        },
        copyImg() {
            copy({
                text: this.imgText,
                type: "image",
                success: () => {
                    this.$message({
                        message: "复制成功",
                        type: "success"
                    })
                }
            });
        }
    }
}
</script>
<style lang="scss" scoped>
.ipt-box {
    display: flex;
    justify-content: center;

    .el-button {
        margin-left: 10px;
    }
}

.editer {
    width: 100%;
    height: 150px;
    border: 1px solid #ccc;
    margin-top: 10px;
    text-align: center;
    padding: 10px;
}
</style>