<template>
    <div>
        <div class="page">
            <h2>格式化时间</h2>
            <div class="item">
                <div class="guid">{{time}}</div>
                <dzs-code title="使用方法" :value="code1"></dzs-code>
            </div>
            <h2>对比时间差</h2>
            <div class="item">
                <div class="guid">{{diffTime}}</div>
                <dzs-code title="使用方法" :value="code2"></dzs-code>
            </div>
            <h2>前n天(小时/周)后n天(小时/周) 前用负数 后用正数</h2>
            <div class="item">
                <div class="guid">{{lastTime}}</div>
                <dzs-code title="使用方法" :value="code3"></dzs-code>
            </div>
            <h2>获取当前日期是星期几</h2>
            <div class="item">
                <div class="guid">{{week}}</div>
                <dzs-code title="使用方法" :value="code4"></dzs-code>
            </div>
            <h2>指定日期是当前(年、月、周)的多少天</h2>
            <div class="item">
                <div class="guid">{{day}}</div>
                <dzs-code title="使用方法" :value="code5"></dzs-code>
            </div>
            <h2>是否为闰年</h2>
            <div class="item">
                <div class="guid">{{leapYear}}</div>
                <dzs-code title="使用方法" :value="code6"></dzs-code>
            </div>
            <h2>源代码下载/查看</h2>
            <div class="item">
                <a target="_blank" href="https://github.com/zsduan/zsduan-summary/blob/master/src/utils/format-time.js">下载/查看地址</a>
            </div>
        </div>
        <el-backtop :visibility-height="20" ></el-backtop>
    </div>
</template>
<script>
import dzsForm from "@/components/dzs-form/index.vue";
import {code1 , code2 , code3 , code4 , code5 , code6} from "./config";
import {formatTime , asyncFormatTime , chainFormatTime} from "../../utils/format-time";
import {setTime} from "../../utils/format-time";
export default {
    components:{
        dzsForm
    },
    data(){
        return {
            time : formatTime(),
            code1 : code1,
            code2 : code2,
            code3 : code3,
            code4 : code4,
            code5 : code5,
            code6 : code6,
            time1 : formatTime({format : "yyyy-MM-dd"}),
            diffTime : {},
            lastTime : {} ,
            week : "",
            day : "" ,
            leapYear : false
        }
    },
    mounted(){
        this.getDiffTime();
        this.setLastTime();
        this.setWeek();
        this.setDay();
        this.setLeapYear();
    },
    methods:{
        getDiffTime(){
            this.diffTime = setTime.diff({
                startDate : "2024-01-01 12:00:00",
                endDate : "2023-01-01 18:00:00",
            })
        },
        setLastTime(){
            this.lastTime = setTime.last({
                date : new Date(),
                num : 2 ,
                type : "day"
            })
        },
        setWeek(){
            this.week = setTime.week()
        },
        setDay(){
            this.day= setTime.day({
                date : new Date(),
                type : "year"
            })
        },
        setLeapYear(){
            this.leapYear =setTime.leapYear(new Date())
        }
    }
}
</script>
<style lang="less" scoped>
.guid{
    padding-top: 10px;
}
</style>