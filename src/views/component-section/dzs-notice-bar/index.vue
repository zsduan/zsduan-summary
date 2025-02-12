<template>
    <section>
        <public-item title="基础用法" :code="code1">
            <dzs-notice-bar text="欢迎来到zs.duan的个人总结"></dzs-notice-bar>
        </public-item>
        <public-item title="图标显示" :code="code2">
            <el-divider content-position="left">左边 饿了吗自带图标</el-divider>
            <dzs-notice-bar icon="el-icon-warning-outline"></dzs-notice-bar>
            <el-divider content-position="left">左边 地址图标</el-divider>
            <dzs-notice-bar imgSrc="https://anran233.com/img/Applet.jpg"></dzs-notice-bar>
            <el-divider content-position="left">右边 饿了吗自带图标</el-divider>
            <dzs-notice-bar closeIcon="el-icon-warning-outline"></dzs-notice-bar>
            <el-divider content-position="left">右边 地址图标</el-divider>
            <dzs-notice-bar closeImgSrc="https://anran233.com/img/Applet.jpg"></dzs-notice-bar>
            <el-divider content-position="left">关闭图标显示</el-divider>
            <dzs-notice-bar :showCloseIcon="false" :showIcon="false"></dzs-notice-bar>
        </public-item>
        <public-item title="滚动与滚动速度" :code="code3">
            <dzs-notice-bar :speed="5" :isMove="true"></dzs-notice-bar>
        </public-item>
        <public-item title="多行显示" :code="code4">
            <dzs-notice-bar :isEline="true"
                text="zs.duan的个人博客 zs.duan的个人博客 zs.duan的个人博客 zs.duan的个人博客 zs.duan的个人博客 zs.duan的个人博客 zs.duan的个人博客 zs.duan的个人博客 zs.duan的个人博客 zs.duan的个人博客 zs.duan的个人博客 zs.duan的个人博客">
            </dzs-notice-bar>
        </public-item>
        <public-item title="自定义颜色" :code="code5">
            <dzs-notice-bar color="red" backgroundColor="rgba(255,0,0,0.1)"></dzs-notice-bar>
        </public-item>
        <public-item title="参数说明" :list="tableData"></public-item>
        <public-item title="组件源代码查看" :links="links"></public-item>
        <dzs-backtop  target=".el-main"></dzs-backtop>
        <dzs-navigation-title></dzs-navigation-title>
    </section>
</template>
<script>
import dzsNoticeBar from "@/components/dzs-notice-bar/index.vue";
import {tableData} from "./desc.js";
import {code1 , code2 , code3 , code4 , code5 , code6} from "./config.js";
export default {
    components: {
        dzsNoticeBar
    },
    data(){
        return {
            links: {
                href: "https://github.com/zsduan/zsduan-summary/blob/master/src/components/dzs-notice-bar/index.vue",
                title: "组件源码"
            },
            tableData,
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
            code3: {
                title: "代码示例",
                code: code3,
                lang: "vue"
            },
            code4: {
                title: "代码示例",
                code: code5,
                lang: "vue"
            },
            code5: {
                title: "代码示例",
                code: code5,
                lang: "vue"
            },
        }
    }
}
</script>
<style lang="scss" scoped></style>