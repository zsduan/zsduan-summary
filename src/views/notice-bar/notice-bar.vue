<!--
 * @Author: zs.duan
 * @Date: 2022-11-23 17:35:39
 * @LastEditors: zs.duan
 * @LastEditTime: 2023-01-11 15:33:38
 * @FilePath: \vue2+js+eui+template\src\views\myNotification\myNotification.vue
-->
<template>
    <div>
        <dzs-header title="消息通知栏" v-if="!newIndex"></dzs-header>
        <div class="page">
            <h2>基础用法</h2>
            <div class="item">
                <dzs-notice-bar text="zs.duan的个人博客"></dzs-notice-bar>
                <dzs-code title="使用方法" :value="code1"></dzs-code>
            </div>
            <h2>更换图标</h2>
            <div class="item">
                <el-divider content-position="left">饿了吗自带图标</el-divider>
                <dzs-notice-bar icon="el-icon-warning-outline"></dzs-notice-bar>
                <el-divider content-position="left">地址图标</el-divider>
                <dzs-notice-bar imgSrc="https://anran233.com/img/Applet.jpg"></dzs-notice-bar>
                <el-divider content-position="left">右边图标</el-divider>
                <dzs-notice-bar closeIcon="el-icon-warning-outline"></dzs-notice-bar>
                <el-divider content-position="left">右边地址图标</el-divider>
                <dzs-notice-bar closeImgSrc="https://anran233.com/img/Applet.jpg"></dzs-notice-bar>
                <dzs-code title="使用方法" :value="code2"></dzs-code>
            </div>
            <h2>关闭图标显示</h2>
            <div class="item">
                <dzs-notice-bar :showCloseIcon="false" :showIcon="false"></dzs-notice-bar>
                <dzs-code title="使用方法" :value="code3"></dzs-code>
            </div>
            <h2>滚动和滚动速度</h2>
            <div class="item">
                <dzs-notice-bar :speed="5" :isMove="true"></dzs-notice-bar>
                <dzs-code title="使用方法" :value="code4"></dzs-code>
            </div>
            <h2>多行显示</h2>
            <div class="item">
                <dzs-notice-bar :isEline="true" text="zs.duan的个人博客 zs.duan的个人博客 zs.duan的个人博客 zs.duan的个人博客 zs.duan的个人博客 zs.duan的个人博客 zs.duan的个人博客 zs.duan的个人博客 zs.duan的个人博客 zs.duan的个人博客 zs.duan的个人博客 zs.duan的个人博客"></dzs-notice-bar>
                <dzs-code title="使用方法" :value="code5"></dzs-code>
            </div>
            <h2>自定义颜色</h2>
            <div class="item">
                <dzs-notice-bar color="red" backgroundColor="rgba(255,0,0,0.1)"></dzs-notice-bar>
                <dzs-code title="使用方法" :value="code6"></dzs-code>
            </div>
            <h2>源代码下载/查看</h2>
            <div class="item">
                <a target="_blank" href="https://github.com/zsduan/zsduan-summary/blob/master/src/components/dzs-notice-bar/index.vue">下载/查看地址</a>
            </div>
        </div>
        <el-backtop :visibility-height="20" v-if="!newIndex"></el-backtop>
    </div>
</template>
<script>
import dzsNoticeBar from "@/components/dzs-notice-bar/index.vue";
import {code1 , code2 , code3 , code4 , code5 , code6} from "./config.js"
export default {
    props:{
        newIndex : {
            type : Boolean,
            default:()=>{
                return false
            }
        }
    },
    components:{
        dzsNoticeBar
    },
    data(){
        return {
            code1 : code1,
            code2 : code2,
            code3 : code3,
            code4 : code4,
            code5 : code5,
            code6 : code6,
        }
    },
    mounted(){

    },
    methods:{
        
    }
}
</script>
<style lang="less" scoped>
</style>