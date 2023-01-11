<!--
 * @Author: zs.duan
 * @Date: 2022-11-22 20:33:52
 * @LastEditors: zs.duan
 * @LastEditTime: 2023-01-11 15:30:38
 * @FilePath: \vue2+js+eui+template\src\views\blurSearch\blurSearch.vue
-->
<template>
    <div>
        <dzs-header title="模糊搜索" v-if="!newIndex"></dzs-header>
        <div class="page">
            <h2>基础用法</h2>
            <div class="item">
                <div class="tips-box">这里没有使用饿了吗ui自带的模糊查询 当然你可以直接用饿了吗ui的模糊查询</div>
                <div class="my-box">
                    <el-input class="ipt" v-model="Text"  placeholder="请输入搜索的文字" @input="search"></el-input>
                </div>
                <div class="tips-box">{{bulrList}}</div>
                <dzs-code title="使用方法" :value="code1"></dzs-code>
            </div>
            <h2>源代码下载/查看</h2>
            <div class="item">
                <a target="_blank" href="https://github.com/zsduan/zsduan-summary/blob/master/src/utils/blurSearch.js">下载/查看地址</a>
            </div>
        </div>
        <el-backtop :visibility-height="20" v-if="!newIndex"></el-backtop>
    </div>
</template>
<script>
import {blurSearch} from "@/utils/blurSearch.js";
import {code1} from "./config"
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
            searchList : [
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
            bulrList : [],
            Text : "",
            code1 : code1
        }
    },
    
    mounted(){
        this.bulrList = this.searchList;
    },
    methods:{
        search(){
            blurSearch({
                list : this.searchList,
                searValue : this.Text,
                key : "Text",
                success : (res)=>{
                    this.bulrList = res;
                }
            });
        },
    }
}
</script>
<style lang="less" scoped>
.my-box{
    display: flex;
    .ipt{
        width: 40%;
    }
    @media screen and (max-width: 768px) {
        .ipt{
            width: 70%;
        }
    }
}
</style>