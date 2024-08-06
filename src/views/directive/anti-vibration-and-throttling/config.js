export const code1 = `
<template>
    <el-button v-dzs-debounce="1000" @click="debounceClick">防抖</el-button>
</template>
<script>
import { debounce } from "@/directive"; //二选一

import Vue from "vue";
import directive from "@/directive"; //二选一
export default {
    created() {
        Vue.use(directive); //三选一

        debounce(Vue); //三选一

        debounce(this); //三选一
    },
    methods: {
        debounceClick() {
            // do something
        },
    }
};
</script>
`

export const code2 = `
<template>
    <el-input v-model="throttleText" v-dzs-throttle="throttleInput" placeholder="节流">
</el-input>
</template>
<script>
import { throttle } from "@/directive"; //二选一

import Vue from "vue";
import directive from "@/directive"; //二选一
export default {
    data() {
        return {
            throttleText: '',
        };
    },
    created() {
        Vue.use(directive); //三选一

        throttle(Vue); //三选一

        throttle(this); //三选一
    },
    methods: {
        throttleInput() {
            // do something
        }
    }
};
</script>
`