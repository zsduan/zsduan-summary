<!--
 * @Author: zs.duan
 * @Date: 2022-11-23 14:54:38
 * @LastEditors: zs.duan
 * @LastEditTime: 2023-01-11 15:31:14
 * @FilePath: \vue2+js+eui+template\src\views\debounce\debounce.vue
-->
<template>
    <div>
        <dzs-header title="指令 防抖 节流" v-if="!newIndex"></dzs-header>
        <div class="page">
            <h2>防抖 默认时间</h2>
            <div class="item">
                <el-button type="primary" v-dzs-debounce @click="showText1.push('默认时间0.5s')">防抖 默认时间</el-button>
                <div>{{showText1}}</div>
                <dzs-code title="使用方法" :value="code1"></dzs-code>
            </div>
            <h2>防抖 自定义事件</h2>
            <div class="item">
                <el-button type="primary" v-dzs-debounce="1000" @click="showText2.push('自定义时间1s')">防抖 自定义事件</el-button>
                <div>{{showText2}}</div>
                <dzs-code title="使用方法" :value="code2"></dzs-code>
            </div>
            <h2>节流 input</h2>
            <div class="item">
                <el-input v-model="Text1" placeholder="请输入节流文字" v-dzs-input-throttle="setShowText3"></el-input>
                <div>{{showText3}}</div>
                <dzs-code title="使用方法" :value="code3"></dzs-code>
            </div>
            <h2>节流 button 默认时间</h2>
            <div class="item">
                <el-button type="primary"  @click="showText4.push('默认时间0.5s')" v-dzs-btn-throttle>节流 默认时间</el-button>
                <div>{{showText4}}</div>
                <dzs-code title="使用方法" :value="code4"></dzs-code>
            </div>
            <h2>节流 button 自定义时间</h2>
            <div class="item">
                <el-button type="primary" @click="showText5.push('自定义时间1s')" v-dzs-btn-throttle="1000">节流 默认时间</el-button>
                <div>{{showText5}}</div>
                <dzs-code title="使用方法" :value="code5"></dzs-code>
            </div>
            <h2>源代码下载/查看</h2>
            <div class="item">
                <a target="_blank" href="https://github.com/zsduan/zsduan-summary/blob/master/src/utils/instructions.js">下载/查看地址</a>
            </div>
        </div>
        <el-backtop :visibility-height="20" v-if="!newIndex"></el-backtop>
    </div>
</template>
<script>
import {code1 , code2 , code3 , code4 , code5 } from "./config"
export default {
    props:{
        newIndex : {
            type : Boolean,
            default:()=>{
                return false
            }
        }
    },
    data(){
        return {
            showText1 : [],
            showText2 : [],
            showText3 : [],
            showText4 : [],
            showText5 : [],
            Text1 : "",
            code1 : code1,
            code2 : code2,
            code3 : code3,
            code4 : code4,
            code5 : code5,
        }
    },
    mounted(){

    },
    methods:{
        setShowText3(){
            this.showText3.push("我是input节流 ")
        }
    }
}
</script>
<style lang="less" scoped>

</style>