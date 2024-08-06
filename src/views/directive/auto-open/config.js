export const code1 = `
<template>
    <section>
        <el-button @click="isOpen = !isOpen">展开与收起</el-button>
        <div class="line"></div>
        <ul class="open-list" v-dzs-autoExpand="isOpen">
            <li class="open-lsit-item" v-for="(item, index) in list" :key="index">{{ item.Text }}</li>
        </ul>
    </section>
</template>
<script>
import { autoExpand } from "@/directive"; //二选一

import Vue from "vue";
import directive from "@/directive"; //二选一
export default {
    created() {
        Vue.use(directive); //三选一

        autoExpand(Vue); //三选一

        autoExpand(this); //三选一
    },
    data() {
        return {
            isOpen: true,
            list: [
                {
                    Text: "重庆",
                    Value: "chongqing"
                },
                {
                    Text: "上海",
                    Value: "shanghai"
                },
                {
                    Text: "北京",
                    Value: "beijing"
                }
            ],
        };
    }
};
</script>
<style lang="scss" scoped>
.line{
    height: 10px;
    width: 100%;
}
.open-list{
    width: 100px;
    .open-lsit-item{
        width: 100%;
        border: 1px solid #ccc;
        padding: 10px;
        text-align: center;
    }
}
</style>
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