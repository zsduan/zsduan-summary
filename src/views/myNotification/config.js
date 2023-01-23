/*
 * @Author: zs.duan
 * @Date: 2022-11-23 19:29:17
 * @LastEditors: zs.duan
 * @LastEditTime: 2022-12-15 11:10:22
 * @FilePath: \vue2+js+eui+template\src\views\myNotification\config.js
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
/*
 * @name 通知
 * @parame _this 全局this
 * @parame title 标题 string 必填
 * @parame msg 详情信息 string
 * @parame audioUrl 音频地址 string
 * @parame duration 延时时间 number
 * @method success 成功返回 code 100网页成功 200网页和系统都成功
 * @method fail 失败返回
 *
*/ 
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
/*
 * @name 通知
 * @parame _this 全局this
 * @parame title 标题 string 必填
 * @parame msg 详情信息 string
 * @parame audioUrl 音频地址 string
 * @parame duration 延时时间 number
 * @method success 成功返回 code 100网页成功 200网页和系统都成功
 * @method fail 失败返回
 *
*/ 
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
/*
 * @name 通知
 * @parame _this 全局this
 * @parame title 标题 string 必填
 * @parame msg 详情信息 string
 * @parame audioUrl 音频地址 string
 * @parame duration 延时时间 number
 * @method success 成功返回 code 100网页成功 200网页和系统都成功
 * @method fail 失败返回
 *
*/ 
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
/*
 * @name 通知
 * @parame _this 全局this
 * @parame title 标题 string 必填
 * @parame msg 详情信息 string
 * @parame audioUrl 音频地址 string
 * @parame duration 延时时间 number
 * @method success 成功返回 code 100网页成功 200网页和系统都成功
 * @method fail 失败返回
 *
*/ 
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

