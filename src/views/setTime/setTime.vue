<!--
 * @Author: zs.duan
 * @Date: 2022-09-30 17:10:05
 * @LastEditors: zs.duan
 * @LastEditTime: 2023-01-11 15:34:18
 * @FilePath: \vue2+js+eui+template\src\views\setTime\setTime.vue
-->

<template>
    <div>
        <dzs-header title="处理时间" v-if="!newIndex"></dzs-header>
        <div class="page">
            <h2>基础用法</h2>
            <div class="item">
                <div class="tips-box">获取当前时间 并按照固定格式处理</div>
                <dzs-form :options="formOptions" @onSubmit="onSubmit"></dzs-form>
                <div class="guid">{{time}}</div>
                <dzs-code title="使用方法" :value="code1"></dzs-code>
            </div>
            <div class="item">
                <div class="tips-box">自定义格式</div>
                <dzs-form :options="formOptions" @onSubmit="onSubmit1"></dzs-form>
                <div class="guid">{{time1}}</div>
                <dzs-code title="使用方法" :value="code2"></dzs-code>
            </div>
            <h2>新版格式化</h2>
            <div class="item">
                <div class="guid">{{time2}}</div>
                <dzs-code title="使用方法" :value="code3"></dzs-code>
            </div>
            <h2>新版格式化支持Promise</h2>
            <div class="item">
                <div class="guid">{{time3}}</div>
                <dzs-code title="使用方法" :value="code4"></dzs-code>
            </div>
            <h2>源代码下载/查看</h2>
            <div class="item">
                <a target="_blank" href="https://github.com/zsduan/zsduan-summary/blob/master/src/utils/setTime.js">下载/查看地址</a>
            </div>
        </div>
        <el-backtop :visibility-height="20" v-if="!newIndex"></el-backtop>
    </div>
</template>
<script>
import dzsForm from "@/components/dzs-form/index.vue";
import setTime from "@/utils/setTime";
import {code1 , code2 , code3 , code4} from "./config";
import formatTime from "../../utils/format-time";
export default {
    props:{
        newIndex : {
            type : Boolean,
            default:()=>{
                return false
            }
        }
    },
    components:{
        dzsForm
    },
    computed:{
        formOptions(){
            return {
                formProps : {
                    "label-width" : "60px",
                },
                formItem : [
                    {
                        label : "时间",
                        key : "Time",
                        type : "date",
                        span : 24,
                        rules :[],
                        props : {
                            type : "datetime",
                            "value-format" : "yyyy-MM-dd HH:mm:ss",
                            placeholder : "请选择时间"
                        }
                    },
                ]
            }
        }
    },
    data(){
        return {
            time : setTime(),
            code1 : code1,
            code2 : code2,
            code3 : code3,
            code4 : code4,
            time1 : setTime({format : "yyyy-MM-dd"}),
            time2 : "",
            time3 : "",
            
        }
    },
    mounted(){
        this.setTime2();
        this.setTime3();
    },
    methods:{
        onSubmit(e){
            setTime({
                date : e.Time,
                success : (res)=>{
                    this.time = res
                }
            })
        },

        onSubmit1(e){
            setTime({
                date : e.Time,
                format : "yyyy-MM-dd",
                success : (res)=>{
                    this.time1 = res
                }
            })
        },

        setTime2(){
            formatTime({
                date : new Date(),
                format : "yyyy-MM-dd HH:mm:ss",
                success : (res)=>{
                    this.time2 = res
                },
                fail : (err)=>{
                    console.log(err)
                },
                complete : (reslut)=>{
                    console.log("成功" , {code : 200 , msg : "成功" , date : "xxx"})
                    console.log("失败" , {code : -1 , msg : "xxx"})
                }
            })
        },

        setTime3(){
            formatTime({
                date : new Date(),
                format : "yyyy-MM-dd HH:mm:ss",
            }).then((res)=>{
                this.time3 = res
            }).catch((err)=>{
                console.log(err)
            })
        }
    }
}
</script>
<style lang="less" scoped>
.guid{
    padding-top: 10px;
}
</style>