<!--
 * @Author: zs.duan
 * @Date: 2022-11-23 17:35:39
 * @LastEditors: zs.duan
 * @LastEditTime: 2022-11-23 19:40:17
 * @FilePath: \vue2+elui+template\src\views\myNotification\myNotification.vue
-->
<template>
    <div>
        <dzs-header title="Notification 消息通知"></dzs-header>
        <div class="page">
            <h2>基础用法 不带提示</h2>
            <div class="tips-box">https才能发送系统通知</div>
            <div class="item">
                <div class="my-box">
                    <el-input class="ipt" v-model="Text"  placeholder="请输入需要发送的文字"></el-input>
                    <el-button type="primary" class="btn" @click="sendMsg">发送通知</el-button>
                </div>
                <dzs-code title="使用方法" :value="code1"></dzs-code>
            </div>
            <h2>基础用法 带提示</h2>
            <div class="item">
                <div class="my-box">
                    <el-input class="ipt" v-model="Text2"  placeholder="请输入需要发送的文字"></el-input>
                    <el-input class="ipt" v-model="Text3"  placeholder="请输入需要发送的提示文字"></el-input>
                    <el-button type="primary" class="btn" @click="sendMsg2">发送提示通知</el-button>
                </div>
                <dzs-code title="使用方法" :value="code2"></dzs-code>
            </div>
            <h2>基础用法 延长时间</h2>
            <div class="item">
                <div class="my-box">
                    <el-input class="ipt" v-model="Text4"  placeholder="请输入需要发送的文字"></el-input>
                    <el-input class="ipt" v-model="Text5" type="Number" placeholder="请输入时长"></el-input>
                    <el-button type="primary" class="btn" @click="sendMsg3">发送通知</el-button>
                </div>
                <dzs-code title="使用方法" :value="code3"></dzs-code>
            </div>
            <h2>基础用法 播放音乐</h2>
            <div class="item">
                <div class="my-box">
                    <el-input class="ipt" v-model="Text6"  placeholder="请输入需要发送的文字"></el-input>
                    <el-input class="ipt" v-model="Text7"  placeholder="请输入音频地址"></el-input>
                    <el-button type="primary" class="btn" @click="sendMsg4">发送通知</el-button>
                </div>
                <dzs-code title="使用方法" :value="code4"></dzs-code>
            </div>
            <h2>源代码下载/查看</h2>
            <div class="item">
                <a target="_blank" href="https://github.com/zsduan/zsduan-summary/blob/master/src/utils/notification.js">下载/查看地址</a>
            </div>
        </div>
        <el-backtop :visibility-height="20"></el-backtop>
    </div>
</template>
<script>
import {notification} from "@/utils/notification.js";
import audioUrl from "../../assets/audio/newMsg.mp3";
import {code1 , code2 , code3 , code4 } from "./config"
export default {
    data(){
        return {
            Text : "我是消息",
            Text2 : "我是带有提示文字的消息",
            Text3 : "我是提示文字",
            Text4 : "我是控制时间的消息",
            Text5 : "3000",
            Text6 : "我是可以有音频地址的",
            Text7 : audioUrl,
            code1 : code1,
            code2 : code2,
            code3 : code3,
            code4 : code4,
        }
    },
    mounted(){

    },
    methods:{
        sendMsg(){
            if(!this.Text){
                this.errorTips();
                return
            }
            notification(this,{
                title : this.Text
            })
        },
        sendMsg2(){
            if(!this.Text2){
                this.errorTips();
                return
            }
            notification(this,{
                title : this.Text2,
                msg : this.Text3
            })
        },
        sendMsg3(){
            if(!this.Text4){
                this.errorTips();
                return
            }
            notification(this,{
                title : this.Text4,
                msg : "延长时间" + this.Text5,
                duration : this.Text5 ? Number(this.Text5) : 5000
            })
        },
        sendMsg4(){
            if(!this.Text6){
                this.errorTips();
                return
            }
            notification(this,{
                title : this.Text6,
                msg : "音频地址" + this.Text7,
                duration : 5000,
                audioUrl: this.Text7
            })
        },
        errorTips(){
            this.$message({
                message : "必填",
                type : "error"
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
    .btn{
        display: inline-block;
        margin-left: 10px;
    }
}
</style>