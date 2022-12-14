/*
 * @Author: zs.duan
 * @Date: 2022-11-23 17:04:19
 * @LastEditors: zs.duan
 * @LastEditTime: 2022-11-23 17:10:07
 * @FilePath: \vue2+elui+template\src\views\debounce\config.js
 */

export const code1 = `
//防抖 默认时间
//使用方法 全部  单独请导入 debounce
import {initDirective} from "./utils/instructions";
//全部初始化 传入 Vue 或者this
initDirective(Vue / this) debounce(Vue / this)
//使用
<div class="item">
    <el-button type="primary" v-dzs-debounce @click="showText1.push('默认时间0.5s')">防抖 默认时间</el-button>
    <div>{{showText1}}</div>
</div>
`

export const code2 = `
//防抖 自定义时间
//使用方法 全部  单独请导入 debounce
import {initDirective} from "./utils/instructions";
//全部初始化 传入 Vue 或者this
initDirective(Vue / this) debounce(Vue / this)
//使用
<div class="item">
    <el-button type="primary" v-dzs-debounce="1000" @click="showText2.push('自定义时间1s')">防抖 自定义事件</el-button>
    <div>{{showText2}}</div>
</div>
`

export const code3 = `
//防抖 input 节流
//使用方法 全部  单独请导入 inputThrottle
import {initDirective} from "./utils/instructions";
//全部初始化 传入 Vue 或者this
initDirective(Vue / this) inputThrottle(Vue / this)
//使用
<div class="item">
    <el-input v-model="Text1" placeholder="请输入节流文字" v-dzs-input-throttle="setShowText3"></el-input>
    <div>{{showText3}}</div>
</div>
//methods
setShowText3(){
    this.showText3.push("我是input节流 ")
}
`

export const code4 = `
//防抖 button 节流 默认时间
//使用方法 全部  单独请导入 btnThrottle
import {initDirective} from "./utils/instructions";
//全部初始化 传入 Vue 或者this
initDirective(Vue / this) btnThrottle(Vue / this)
//使用
<div class="item">
    <el-button type="primary"  @click="showText4.push('默认时间0.5s')" v-dzs-btn-throttle>节流 默认时间</el-button>
    <div>{{showText4}}</div>
</div>
`

export const code5 = `
//防抖 button 节流 自定义时间
//使用方法 全部  单独请导入 btnThrottle
import {initDirective} from "./utils/instructions";
//全部初始化 传入 Vue 或者this
initDirective(Vue / this) btnThrottle(Vue / this)
//使用
<div class="item">
    <el-button type="primary" @click="showText5.push('自定义时间1s')" v-dzs-btn-throttle="1000">节流 默认时间</el-button>
    <div>{{showText5}}</div>
</div>
`