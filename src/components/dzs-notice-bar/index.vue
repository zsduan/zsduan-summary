<template>
    <div class="dzs-notice-bar" :style="{backgroundColor : backgroundColor}" v-if="showNoticeBar">
        <div class="left-icon" v-if="showIcon">
            <slot name="left-icon"></slot>
            <i class="icon" :style="{color:color}" :class="icon" v-if="icon && !imgSrc"></i>
            <img class="img" :src="imgSrc" v-if="imgSrc" />
        </div>
        <div class="content-box" @click="contentClick">
            <slot></slot>
            <span v-if="!isEline" :style="{color:color , animationDuration : speeds}" :class="['text' , isMove && 'text-move' ] " >{{text}}</span>
            <div v-if="isEline" :style="{color:color}" class="eline-text">{{text}}</div>
        </div>
        <div class="right-icon" @click="close" v-if="showCloseIcon" >
            <slot name="right-icon"></slot>
            <i class="icon" :style="{color:color}" :class="closeIcon" v-if="closeIcon && !closeImgSrc"></i>
            <img class="img" :src="closeImgSrc" v-if="closeImgSrc" />
        </div>
    </div>
</template>
<script>
/**
 * @name : dzs-notice-bar 消息通知栏
 * @description : 消息通知栏
 * @date : 2021-06-28 13:56:00
 * @version : V1.0.0
 * @Author : zs.duan
 * 
 * @param {String} icon 饿了吗 icon图标
 * @param {String} imgSrc 图片 icon 优先级高于icon
 * @param {String} closeIcon 关闭按钮 icon图标
 * @param {String} closeImgSrc 关闭按钮图片 icon 优先级高于closeIcon
 * @param {String} text 提示文字
 * @param {Number | String} speed 文字滚动速度
 * @param {Boolean} isMove 是否可以滚动
 * @param {Boolean} isEline 是否多行显示
 * @param {Boolean} showIcon 是否显示左边的icon
 * @param {Boolean} showCloseIcon 是否显示右边的icon
 * @param {String} color 文字颜色
 * @param {String} backgroundColor 背景颜色
 * 
 * @method close 关闭
 * @method contentClick 点击内容
 * @method closeNoticeBar  关闭通知栏 ref方式调用
 * 
 * @slot left-icon 左边的icon
 * @slot right-icon 右边的icon
 * @slot 默认插槽
 * */ 
export default{
    name : "dzsNoticeBar",
    props : {
        /**饿了吗 icon图标*/
        icon : {
            type : String,
            default : ()=>{
                return "el-icon-bell"
            }
        },
        /**图片 icon 优先级低于icon*/
        imgSrc : {
            type : String,
            default : ()=>{
                return ""
            }
        },
        /**关闭按钮 icon图标*/
        closeIcon : {
            type : String,
            default : ()=>{
                return "el-icon-close"
            }
        },
        /**关闭按钮图片 icon 优先级低于closeIcon*/
        closeImgSrc : {
            type : String,
            default : ()=>{
                return ""
            }
        },
        /**提示文字*/
        text : {
            type : String,
            default : ()=>{
                return "我是一段提示文字"
            }
        },
        /**文字滚动速度*/
        speed : {
            type : Number | String,
            default : ()=>{
                return 5
            }
        },
        /**是否可以滚动*/
        isMove : {
            type : Boolean,
            default : ()=>{
                return false
            }
        },
        /**是否多行显示*/
        isEline : {
            type : Boolean,
            default : ()=>{
                return false
            }
        },
        /**是否显示左边的icon*/
        showIcon : {
            type : Boolean,
            default : ()=>{
                return true
            }
        },
        /**是否显示右边的icon*/
        showCloseIcon : {
            type : Boolean,
            default : ()=>{
                return true
            }
        },
        /**文字颜色*/ 
        color : {
            type : String,
            default : ()=>{
                return "#66b1ff"
            }
        },
        /**背景颜色*/
        backgroundColor : {
            type : String,
            default : ()=>{
                return "rgba(102,177,255,0.2)"
            }
        }
    },
    computed : {
        speeds(){
            if(typeof this.speed == "number"){
                return this.speed + "s"
            }else if(typeof this.speed == "string"){
                return this.speed
            }
        },
        /**content-box 的宽度*/
        contentBoxWidth(){
            if(this.showIcon && this.showCloseIcon){
                return "calc(100% - 60px)"
            }else if(this.showIcon || this.showCloseIcon){
                return "calc(100% - 30px)"
            }else{
                return "100%"
            }
        }
    },
    data(){
        return {
            showNoticeBar : true
        }
    },
    methods : {
        close(){
            this.closeNoticeBar();
            this.$emit("close")
        },
        contentClick(){
            this.$emit("noticeClick")
        },
        /**关闭natice*/ 
        closeNoticeBar(){
            this.showNoticeBar = false;
        }
    },
}
</script>
<style lang="scss" scoped>
.dzs-notice-bar{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 10px;
    width: 100%;
    background-color: v-bind(backgroundColor);
    border-radius: 2px;
    cursor: pointer;
    .left-icon,.right-icon{
        width: 30px;
        height: 20px;
        padding-top: 1px;
        .icon{
            font-size: 20px;
            color: v-bind(color);
        }
        .img{
            width: 20px;
            height: 20px;
            object-fit: cover;
        }
    }
    .right-icon{
        cursor: pointer;
        margin-left: 20px;
    }
    .content-box{
        flex: 1;
        width: v-bind(contentBoxWidth);
        overflow: hidden;
        .text{
            color: v-bind(color);
            display: block;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
        }
        .eline-text{
            color: v-bind(color);
        }
        // 超出一行隐藏
        .eline{
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
        // 文字滚动
        .text-move{
            display: inline-block;
            animation: move v-bind(speeds) linear infinite;
        }
        @keyframes move{
            0%{
                transform: translateX(0);
            }
            100%{
                transform: translateX(-100%);
            }
        }


    }
}
</style>
