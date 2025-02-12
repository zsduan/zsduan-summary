<template>
    <section>
        <public-item title="基础用法" :code="code1">
            <div class="ipt-box">
                <el-input v-model="myCode" placeholder="请输入验证码" class="ipt"></el-input>
                <div class="code-box">
                    <dzs-identifying-code-canvans v-model="code"></dzs-identifying-code-canvans>
                </div>
            </div>
            <div class="tips" >tips：{{myCode == code ? '验证成功' : '未输入/验证失败'}}</div>
        </public-item>
        <public-item title="自定义验证码" :code="code2">
            <div class="ipt-box">
                <el-input v-model="myCode2" placeholder="请输入验证码" class="ipt"></el-input>
                <div class="code-box">
                    <dzs-identifying-code-canvans v-model="editCode2"  :codeArr="['技','术','部','好','样']"></dzs-identifying-code-canvans>
                </div>
            </div>
            <div class="tips" >tips：{{myCode2 == editCode2 ? '验证成功' : '未输入/验证失败'}}</div>
        </public-item>
        <public-item title="参数说明" :list="tableData"></public-item>
        <public-item title="组件源代码查看" :links="links"></public-item>
        <dzs-backtop  target=".el-main"></dzs-backtop>
        <dzs-navigation-title></dzs-navigation-title>
    </section>
</template>
<script>
import dzsIdentifyingCodeCanvans from "@/components/dzs-identifying-code-canvans";
import { tableData } from "./desc.js";
import { code1 , code2} from "./config.js";
export default {
    components: {
        dzsIdentifyingCodeCanvans
    },
    data() {
        return {
            myCode: "",
            code: "",
            myCode2 : "",
            editCode2 : "",
            links: {
                href: "https://github.com/zsduan/zsduan-summary/blob/master/src/components/dzs-identifying-code-canvans/index.vue",
                title: "组件源码"
            },
            tableData: tableData,
            code1: {
                title: "代码示例",
                code: code1,
                lang: "vue"
            },
            code2: {
                title: "代码示例",
                code: code2,
                lang: "vue"
            },
        }
    },
}
</script>
<style lang="scss" scoped>
.ipt-box {
    display: flex;
    align-items: center;

    .code-box {
        width: 150px;
        height: 40px;
        margin-left: 20px;
    }

    .ipt {
        width: 300px;
    }
}
.tips{
    color: #999;
    padding-top: 10px;
    font-size: 12px;
}
</style>