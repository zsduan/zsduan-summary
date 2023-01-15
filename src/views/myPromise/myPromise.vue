<!--
 * @Author: zs.duan
 * @Date: 2023-01-15 09:42:47
 * @LastEditors: zs.duan
 * @LastEditTime: 2023-01-15 10:11:46
 * @FilePath: \vue2+js+eui+template\src\views\myPromise\myPromise.vue
-->

<template>
    <div>
        <dzs-header title="二叉树" v-if="!newIndex"></dzs-header>
        <div class="page">
            <h2>基础用法</h2>
            <div class="item">
                <!-- <dzs-code title="使用方法" :value="code1"></dzs-code> -->
            </div>
            <h2>源代码下载/查看</h2>
            <div class="item">
                <a target="_blank" href="https://github.com/zsduan/zsduan-summary/blob/master/src/utils/binary-tree.js">下载/查看地址</a>
            </div>
        </div>
        <el-backtop :visibility-height="20" v-if="!newIndex"></el-backtop>
    </div>
</template>
<script>
import myPromise from "../../utils/myPromise"
// import {code1 , code2} from "./config";
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
            // code1 : code1,
            // code2 : code2
        }
    },
    mounted(){
        let my = new myPromise((resolve , reject)=>{
            console.log("我执行了吗")
            setTimeout(()=>{
                resolve(4)
            }, 5)
        }).then(res =>{
            console.log(res)
        })

        new Promise((resolve , reject)=>{
            console.log("我执行了吗")
            setTimeout(()=>{
                resolve(4)
            }, 5)
        }).then(res =>{
            console.log("2 ==>" , res)
        })
        // console.log(my)
    }
}
</script>
<style lang="less" scoped>
    
</style>