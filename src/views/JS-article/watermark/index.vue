<template>
    <section>
        <public-item title="基础用法" :code="code1"></public-item>
        <public-item title="设置html水印" :code="code2"></public-item>
        <public-item title="清空水印" :code="code3"></public-item>
        <public-item title="参数说明" :list="tableData"></public-item>
        <public-item title="源代码查看" :links="links"></public-item>
        <dzs-backtop  target=".el-main"></dzs-backtop>
        <dzs-navigation-title></dzs-navigation-title>
    </section>
</template>
<script>
import { code1 , code2 , code3} from './config';
import watermark , {clearWatermark} from "@/tool/watermark.js";
import ua from "@/tool/ua";
import {formatTime } from "@/tool/format-time";
import {tableData} from "./desc";
export default {
    data() {
        return {
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
                href: "https://github.com/zsduan/zsduan-summary/blob/master/src/tool/watermark.js",
                title: "源码"
            }
        }
    },
    created() {
        watermark({
            watermark_txt : `<p>zsduan的个人总结</p><p>${ua().browserName} ${ua().browserVersion}</p><p>${formatTime()}</p>`,
            isHtml : true,
            watermark_color : "rgba(0,0,0,0.2)",
        })
    },
    beforeDestroy() {
        clearWatermark();
    }
}
</script>
<style lang="scss" scoped>

</style>