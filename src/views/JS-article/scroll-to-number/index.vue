<template>
    <section>
        <public-item title="基础用法-传入id" :code="code1">
            <div id="number">0</div>
        </public-item>
        <public-item title="直接传入dom元素" :code="code2">
            <div class="show-number number-box" >0</div>
        </public-item>
        <public-item title="直接传入 ref" :code="code3">
            <div class="number-box" ref="showNumber">0</div>
        </public-item>
        <public-item title="支持 data-number" tips="读取 data-number 结束 end 是data-number属性值 开始start是 dom 的 innerText 也可以不写 默认0 延迟时间默认1s不可调" :code="code4">
            <div class="number-box" :data-number="new Date().getFullYear() + 3">0</div>
        </public-item>
        <public-item title="参数说明" :list="tableData"></public-item>
        <public-item title="源代码查看" :links="links"></public-item>
        <dzs-backtop  target=".el-main"></dzs-backtop>
    </section>
</template>
<script>
import { code1 , code2 , code3 , code4 } from './config';
import scrollToNumber from "@/tool/scrollToNumber.js";
import {tableData} from "./desc";
export default {
    data() {
        return {
            code1 : {
                title : "代码示例",
                code : code1,
                lang : "js"
            },
            code2 : {
                title : "代码示例",
                code : code2,
                lang : "js"
            },
            code3 : {
                title : "代码示例",
                code : code3,
                lang : "js"
            },
            code4 : {
                title : "代码示例",
                code : code4,
                lang : "js"
            },
            tableData : tableData,
            links : {
                href : "https://github.com/zsduan/zsduan-summary/blob/master/src/tool/scrollToNumber.js",
                title : "源码"
            }
        }
    },
    mounted() {
        this.scrollToNumber();
    },
    methods: {
        scrollToNumber(){
            scrollToNumber({
                start : 0,
                end :new Date().getFullYear(),
                duration : 2000,
                el : 'number',
            })

            scrollToNumber({
                start : 0,
                end :new Date().getFullYear() + 1,
                duration : 2000,
                dom : document.querySelector('.show-number'),
            })

            scrollToNumber({
                start : 0,
                end :new Date().getFullYear() + 2,
                duration : 2000,
                ref : this.$refs.showNumber,
            })
        }
    }
}
</script>
<style lang="scss" scoped>
#number,.number-box{
    font-size: 50px;
    color: red;
    text-align: center;
}
</style>