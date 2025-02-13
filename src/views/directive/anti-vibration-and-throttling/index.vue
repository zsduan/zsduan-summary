<template>
    <section>
        <public-item title="防抖" :code="code1">
            <el-button v-dzs-debounce="1000" @click="debounceClick">防抖</el-button>
            <div>{{ antiShake }}</div>
        </public-item>
        <public-item title="参数说明" :list="antiShakeData"></public-item>
        <public-item title="节流 " :code="code1">
            <el-input v-model="throttleText" v-dzs-throttle="throttleInput" placeholder="节流">
            </el-input>
            <div>{{ throttle }}</div>
        </public-item>
        <public-item title="参数说明" :list="throttleData"></public-item>
        <public-item title="源代码查看" :links="links"></public-item>
        <dzs-backtop  target=".el-main"></dzs-backtop>
    </section>
</template>
<script>
import { code1 , code2 } from "./config";
import {antiShakeData , throttleData } from "./desc";
export default {
    data() {
        return {
            code1: {
                title: "代码示例",
                code: code1,
                lang: "vue"
            },
            code2: {
                title: "代码示例",
                code: code2,
                lang: "vue"
            },
            throttleText: '',
            antiShake: [],
            throttle: [],
            antiShakeData,
            throttleData,
            links: {
                href: "https://github.com/zsduan/zsduan-summary/blob/master/directive/index.js",
                title: "源码"
            },
        };
    },
    methods: {
        debounceClick() {
            this.antiShake.push('正在防抖1s');
        },
        throttleInput() {
            this.throttle.push('正在节流1s');
        }
    }
};
</script>
<style lang="scss" scoped></style>