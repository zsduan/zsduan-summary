<template>
    <div>
        <dzs-header title="获取农历" v-if="!newIndex"></dzs-header>
        <div class="page">
            <h2>基础用法</h2>
            <div class="item">
                <dzs-form :options="formOptions" @onSubmit="onSubmit"></dzs-form>
                <div class="guid">{{time}}</div>
                <div class="guid" v-if="JSON.stringify(time) != '{}'">
                    <span>{{time.zodiacYear}}年 {{time.lunarYearCn}}  {{time.lunarMonthCn}}{{time.lunarDayCn}} {{time.weekday}}</span>
                    <span> {{time.solarTerm}} {{time.gregorianFestival}} {{time.lunarFestival}} {{time.constellation}}</span>
                </div>
                <dzs-code title="使用方法" :value="code1"></dzs-code>
            </div>
            <h2>源代码下载/查看</h2>
            <div class="item">
                <a target="_blank" href="https://github.com/zsduan/zsduan-summary/blob/master/src/utils/calender.js">下载/查看地址</a>
            </div>
        </div>
        <el-backtop :visibility-height="20" v-if="!newIndex"></el-backtop>
    </div>
</template>
<script>
import calender from "@/utils/calender";
import dzsForm from "@/components/dzs-form/index.vue";
import {code1} from "./config";
export default {
    components:{
        dzsForm
    },
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
            time : {},
            code1 : code1
        }
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
    mounted(){
        this.time = calender()
    },
    methods:{
        onSubmit(e){
            calender({
                time : e.Time,
                success : (res) =>{
                    console.log(res);
                    this.time = res;
                }
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