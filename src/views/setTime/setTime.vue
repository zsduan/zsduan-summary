<template>
    <div>
        <dzs-header title="处理时间" v-if="!newIndex"></dzs-header>
        <div class="page">
            <h2>格式化时间</h2>
            <div class="item">
                <div class="tips-box">正常使用</div>
                <dzs-form :options="formOptions" @onSubmit="onSubmit"></dzs-form>
                <div class="guid">{{time}}</div>
                <dzs-code title="使用方法" :value="code1"></dzs-code>
            </div>
            <h2>格式化支持Promise</h2>
            <div class="item">
                <div class="guid">{{time3}}</div>
                <dzs-code title="使用方法" :value="code2"></dzs-code>
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
import {code1 , code2} from "./config";
import {formatTime , asyncFormatTime} from "../../utils/format-time";
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
            time : formatTime(),
            code1 : code1,
            code2 : code2,
            time1 : formatTime({format : "yyyy-MM-dd"}),
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
            formatTime({
                date : e.Time,
                success : (res)=>{
                    this.time = res
                }
            })
        },

        onSubmit1(e){
            formatTime({
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
                    console.error(err)
                },
            })
        },

        setTime3(){
            asyncFormatTime({
                date : new Date(),
                format : "yyyy-MM-dd HH:mm:ss",
            }).then((res)=>{
                this.time3 = res
            }).catch((err)=>{
                console.error(err)
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