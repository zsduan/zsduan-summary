/*
 * @Author: zs.duan
 * @Date: 2022-11-23 16:15:21
 * @LastEditors: zs.duan
 * @LastEditTime: 2022-11-23 17:12:32
 * @FilePath: \vue2+elui+template\src\views\listOpen\config.js
 */

export const code1 = `
//数据
list : [
    {
        Text : "重庆",
        Value : "chongqing"
    },
    {
        Text : "上海",
        Value : "shanghai"
    },
    {
        Text : "北京",
        Value : "beijing"
    },
    {
        Text : "天津",
        Value : "tianjin"
    },
    {
        Text : "深圳",
        Value : "shenzhen"
    },
    {
        Text : "山西",
        Value : "shanxi"
    },
    {
        Text : "陕西",
        Value : "shanxi"
    }
],

//使用方法 全部  单独请导入 listOpen
import {initDirective} from "./utils/instructions";
//全部初始化 传入 Vue 或者this
initDirective(Vue / this) / listOpen(Vue / this)
// 使用
<el-button type="primary" @click="is_open = !is_open" v-dzs-debounce="1000">点我切换</el-button>
<div class="open-list" v-dzs-list-open="is_open">
    <div class="open-lsit-item" v-for="(item , index) in list" :key="index">{{item.Text}}</div>
</div>
// data
is_open = false,
`