<!--
 * @Author: zs.duan
 * @Date: 2022-09-30 17:10:05
 * @LastEditors: zs.duan
 * @LastEditTime: 2023-01-11 15:34:18
 * @FilePath: \vue2+js+eui+template\src\views\setTime\setTime.vue
-->

<template>
    <div>
        <dzs-header title="返回安卓/苹果时间" v-if="!newIndex"></dzs-header>
        <div class="page">
            <h2>基础用法</h2>
            <div class="item">
                <div class="tips-box">返回安卓/苹果时间</div>
                <dzs-form :options="formOptions" @onSubmit="onSubmit"></dzs-form>
                <div class="guid">{{time}}</div>
                <dzs-code title="使用方法" :value="code1"></dzs-code>
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
import {code1} from "./config";
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
            code1 : code1
        }
    },
    methods:{
        onSubmit(e){
            this.time = setTime(e.Time)
        }
    }
}
</script>
<style lang="less" scoped>
.guid{
    padding-top: 10px;
}
</style>