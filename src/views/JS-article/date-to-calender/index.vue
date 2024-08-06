<template>
    <section>
        <public-item title="基础用法" :code="code1">
            <el-date-picker v-model="date" type="date" value-format="yyyy-MM-dd" placeholder="选择日期" @change="getCalender">
            </el-date-picker>
            <div>{{calender}}</div>
        </public-item>
        <public-item title="参数说明" :list="tableData"></public-item>
        <public-item title="返回参数说明" :list="returnTableData"></public-item>
        <public-item title="源代码查看" :links="links"></public-item>
        <dzs-backtop  target=".el-main"></dzs-backtop>
    </section>
</template>
<script>
import getCalendar from "@/tool/calender";
import { code1 } from "./config.js";
import { formatTime } from "@/tool/format-time.js";
import {tableData , returnTableData} from "./desc.js";
export default {
    data() {
        return {
            code1: {
                title: "代码示例",
                code: code1,
                lang: "js"
            },
            date: formatTime(),
            links: {
                href: "https://github.com/zsduan/zsduan-summary/blob/master/src/tool/calender.js",
                title: "源码"
            },
            calender : getCalendar(new Date()),
            tableData,
            returnTableData
        };
    },
    methods: {
        getCalender(date) {
            this.calender = getCalendar({
                time : date,
                success : (data) => {
                    this.calender = data;
                }
            });
        }
    }
};
</script>
<style lang="scss" scoped></style>