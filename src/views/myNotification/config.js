/*
 * @Author: zs.duan
 * @Date: 2022-11-23 19:29:17
 * @LastEditors: zs.duan
 * @LastEditTime: 2022-11-23 19:38:37
 * @FilePath: \vue2+elui+template\src\views\myNotification\config.js
 */

export const code1 = `
// 导入
import {notification} from "@/utils/notification.js";
// 使用
<div class="item">
    <div class="my-box">
        <el-input class="ipt" v-model="Text"  placeholder="请输入需要发送的文字"></el-input>
        <el-button type="primary" class="btn" @click="sendMsg">发送通知</el-button>
    </div>
</div>
// data
Text
// methods
sendMsg(){
    notification(this,{
        title : Text
    })
},
`;

export const code2 = `
// 导入
import {notification} from "@/utils/notification.js";
// 使用
<div class="item">
    <div class="my-box">
        <el-input class="ipt" v-model="Text"  placeholder="请输入需要发送的文字"></el-input>
        <el-input class="ipt" v-model="Text1"  placeholder="请输入需要提示的文字"></el-input>
        <el-button type="primary" class="btn" @click="sendMsg">发送通知</el-button>
    </div>
</div>
// methods
sendMsg(){
    if(!this.Text){
        this.errorTips();
        return
    }
    notification(this,{
        title : Text,
        msg : Text
    })
},
`;

export const code3 = `
// 导入
import {notification} from "@/utils/notification.js";
// 使用
<div class="item">
    <div class="my-box">
        <el-input class="ipt" v-model="Text"  placeholder="请输入需要发送的文字"></el-input>
        <el-input class="ipt" v-model="Text2" type="Number" placeholder="请输入时长"></el-input>
        <el-button type="primary" class="btn" @click="sendMsg">发送通知</el-button>
    </div>
</div>
// data
Text
// methods
sendMsg(){
    if(!this.Text){
        this.errorTips();
        return
    }
    notification(this,{
        title : this.Text,
        msg : Text,
        duration : Number / String number
    })
},
`;

export const code4 = `
// 导入
import {notification} from "@/utils/notification.js";
import audioUrl from "../../assets/audio/newMsg.mp3";
// 使用
<div class="item">
    <div class="my-box">
        <el-input class="ipt" v-model="Text"  placeholder="请输入需要发送的文字"></el-input>
        <el-input class="ipt" v-model="Text1"  placeholder="请输入音频地址"></el-input>
        <el-button type="primary" class="btn" @click="sendMsg">发送通知</el-button>
    </div>
</div>
// data
Text
// methods
sendMsg(){
    if(!this.Text){
        this.errorTips();
        return
    }
    notification(this,{
        title : this.Text,
        msg : Text,
        duration : Number / String number,
        audioUrl : string
    })
},
`;

