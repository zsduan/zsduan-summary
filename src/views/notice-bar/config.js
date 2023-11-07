
/**基础用法*/ 
export const code1 = `
/**
 * @name : dzs-notice-bar 消息通知栏
 * @description : 消息通知栏
 * @date : 2023-11-07 15:24
 * @version : V1.0.1
 * @Author : dzs
 * 
 * @param {String} icon 饿了吗 icon图标
 * @param {String} imgSrc 图片 icon 优先级低于icon
 * @param {String} closeIcon 关闭按钮 icon图标
 * @param {String} closeImgSrc 关闭按钮图片 icon 优先级低于closeIcon
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
 * @method closeClick 点击关闭按钮 自定义关闭按钮时使用
 * @method closeNoticeBar  关闭通知栏 ref方式调用
 * 
 * @slot left-icon 左边的icon
 * @slot right-icon 右边的icon
 * @slot 默认插槽
 * 
 * 
 * */ 

<dzs-notice-bar :text="text"></dzs-notice-bar>

import dzsNoticeBar from "@/components/dzs-notice-bar/index.vue";

components : {
    dzsNoticeBar
},

`

/**图标的使用*/ 
export const code2 = `

<el-divider content-position="left">饿了吗自带图标</el-divider>
<dzs-notice-bar icon="el-icon-warning-outline"></dzs-notice-bar>
<el-divider content-position="left">地址图标</el-divider>
<dzs-notice-bar imgSrc="https://yy.yunweicn.com/mp-wx-img/userIcon.png"></dzs-notice-bar>
<el-divider content-position="left">右边图标</el-divider>
<dzs-notice-bar closeIcon="el-icon-warning-outline"></dzs-notice-bar>
<el-divider content-position="left">右边地址图标</el-divider>
<dzs-notice-bar closeImgSrc="https://yy.yunweicn.com/mp-wx-img/userIcon.png"></dzs-notice-bar>

import dzsNoticeBar from "@/components/dzs-notice-bar/index.vue";

components : {
    dzsNoticeBar
},

`
/**关闭图标*/ 
export const code3 = `

<dzs-notice-bar :showCloseIcon="false" :showIcon="false"></dzs-notice-bar>

import dzsNoticeBar from "@/components/dzs-notice-bar/index.vue";

components : {
    dzsNoticeBar
},

`

/**滚动文字*/ 
export const code4 = `

<dzs-notice-bar :speed="5" :isMove="true"></dzs-notice-bar>

import dzsNoticeBar from "@/components/dzs-notice-bar/index.vue";

components : {
    dzsNoticeBar
},

`

/**多行显示*/ 
export const code5 = `

<dzs-notice-bar :isEline="true" text="zs.duan的个人博客 zs.duan的个人博客 zs.duan的个人博客 zs.duan的个人博客 zs.duan的个人博客 zs.duan的个人博客 zs.duan的个人博客 zs.duan的个人博客 zs.duan的个人博客 zs.duan的个人博客 zs.duan的个人博客 zs.duan的个人博客"></dzs-notice-bar>

import dzsNoticeBar from "@/components/dzs-notice-bar/index.vue";

components : {
    dzsNoticeBar
},

`

/**自定义颜色*/
export const code6 = `

<dzs-notice-bar :text="text" color="red" backgroundColor="rgba(255,0,0,0.1)"></dzs-notice-bar>

import dzsNoticeBar from "@/components/dzs-notice-bar/index.vue";

components : {
    dzsNoticeBar
},

`