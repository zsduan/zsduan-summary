<template>
    <section>
        <public-item title="基础用法" :code="code1">
            <div class="ipt-box">
                <el-input v-model="title" placeholder="请输入标题" />
                <el-button @click="notification">点击发送</el-button>
            </div>
        </public-item>
        <public-item title="带有详情信息" :code="code2">
            <div class="ipt-box">
                <el-input v-model="title" placeholder="请输入标题" />
                <el-input v-model="msg" placeholder="请输入详细内容" />
                <el-button @click="notificationByMsg">点击发送</el-button>
            </div>
        </public-item>
        <public-item title="延时时间与位置信息" :code="code3">
            <div class="ipt-box">
                <el-input v-model="title" placeholder="请输入标题" />
                <el-input v-model="duration" placeholder="请输入延时时间" />
                <el-input v-model="position" placeholder="请输入位置信息" />
                <el-button @click="notificationByDuration">点击发送</el-button>
            </div>
        </public-item>
        <public-item title="带有提示语" :code="code4">
            <div class="ipt-box">
                <el-input v-model="title" placeholder="请输入标题" />
                <el-input v-model="audioUrl" placeholder="请输入提示语地址" />
                <el-button @click="notificationByAudio">点击发送</el-button>
            </div>
        </public-item>
        <public-item title="参数说明" :list="tableData"></public-item>
        <public-item title="源代码查看" :links="links"></public-item>
        <dzs-backtop  target=".el-main"></dzs-backtop>
        <dzs-navigation-title></dzs-navigation-title>
    </section>
</template>
<script>
import sendNotification from "@/tool/sendNotification";
import { code1 , code2 , code3 , code4 } from "./config";
import { tableData } from "./desc.js";
export default {
    data() {
        return {
            title : "zs.duan的个人总结",
            msg : "欢迎来到我的个人总结",
            position : "top-right",
            duration : 3000,
            audioUrl : require("./newMsg.mp3"),
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
            tableData ,
            links: {
                href: "https://github.com/zsduan/zsduan-summary/blob/master/src/tool/sendNotification.js",
                title: "源码"
            },
        };
    },
    methods: {
        notification() {
            sendNotification({
                title: this.title,
                Vue : this,
            });
        },
        notificationByMsg () {
            sendNotification({
                title: this.title,
                msg : this.msg,
                Vue : this,
            });
        },
        notificationByDuration(){
            sendNotification({
                title: this.title,
                duration : this.duration,
                position : this.position,
                Vue : this,
            });
        },
        notificationByAudio(){
            sendNotification({
                title: this.title,
                audioUrl : this.audioUrl,
                Vue : this,
            });
        }
    }
};
</script>
<style lang="scss" scoped>
.ipt-box{
    display: flex;
    align-items: center;
    .el-button{
        margin-left: 10px;
    }
    .el-input{
        margin-right: 10px;
    }
}
</style>