<template>
    <section>
        <public-item title="格式化时间" :code="code1">{{ time1 }}</public-item>
        <public-item title="参数说明" :list="formatTimeTableData"></public-item>
        <public-item title="对比时间差" :code="code2">{{ time2 }}</public-item>
        <public-item title="参数说明" :list="diffTableData"></public-item>
        <public-item title="前n天(小时/周)后n天(小时/周) 前用负数 后用正数" :code="code3">
            后2天 {{ time3 }}
        </public-item>
        <public-item title="参数说明" :list="lastTableData"></public-item>
        <public-item title="获取当前日期是星期几" :code="code4">{{ time4 }}</public-item>
        <public-item title="参数说明" :list="weekTableData"></public-item>
        <public-item title="指定日期是当前(年、月、周)的多少天" :code="code5">
            当前日期在本年的 {{ time5 }} 天
        </public-item>
        <public-item title="参数说明" :list="dayTableData"></public-item>
        <public-item title="是否为闰年" :code="code6">
            本年是否为闰年 {{ time6 }}
        </public-item>
        <public-item title="参数说明" :list="leapYearTableData"></public-item>
        <public-item title="源代码查看" :links="links"></public-item>
        <dzs-backtop  target=".el-main"></dzs-backtop>
    </section>
</template>
<script>
import { code1, code2, code3, code4, code5, code6 } from "./config";
import { formatTimeTableData, weekTableData, leapYearTableData } from "./desc";
import { diffTableData, lastTableData, dayTableData } from "./desc";
import { formatTime, setTime } from "@/tool/format-time";
export default {
    data() {
        return {
            code1: {
                title: "代码示例",
                code: code1,
                lang: "js"
            },
            formatTimeTableData,
            time1: formatTime(),
            code2: {
                title: "代码示例",
                code: code2,
                lang: "js"
            },
            diffTableData,
            time2: setTime.diff({
                startDate: "2024-01-01 12:00:00",
                endDate: new Date(),
            }),
            code3: {
                title: "代码示例",
                code: code3,
                lang: "js"
            },
            lastTableData,
            time3: setTime.last({
                date: new Date(),
                num: 2,
                type: "day"
            }),
            code4: {
                title: "代码示例",
                code: code4,
                lang: "js"
            },
            weekTableData,
            time4: setTime.week(),
            code5: {
                title: "代码示例",
                code: code5,
                lang: "js"
            },
            dayTableData,
            time5: setTime.day({
                date: new Date(),
                type: "year"
            }),
            code6: {
                title: "代码示例",
                code: code6,
                lang: "js"
            },
            leapYearTableData,
            time6: setTime.leapYear(),
            links: {
                href: "https://github.com/zsduan/zsduan-summary/blob/master/src/tool/format-time.js",
                title: "源码"
            },
        }
    },
}
</script>
<style lang="scss" scoped></style>