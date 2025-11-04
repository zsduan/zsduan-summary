<template>
    <section>
        <public-item title="基本用法">
            <dzs-ip-input v-model="value"></dzs-ip-input>
            <div>当前ip地址 {{ value }}</div>
        </public-item>

        <public-item title="参数说明" :list="tableData"></public-item>
        <public-item title="组件源代码查看" :links="links"></public-item>
        <dzs-backtop target=".el-main"></dzs-backtop>
    </section>
</template>
<script>
import dzsIpInput from "@/components/dzs-ip-input";

import { code1 } from "./config";
import { descData } from "./desc";
export default {
    components: {
        dzsIpInput
    },
    data() {
        return {
            value: '',
            code1: {
                title: "代码示例",
                code: code1,
                lang: "vue"
            },
            links: {
                href: "https://github.com/zsduan/zsduan-summary/blob/master/src/components/dzs-ip-input/index.vue",
                title: "组件源码"
            },
            tableData: descData,
        }
    }
}
</script>
<style lang="scss" scoped>
.flex-box {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    margin-top: 10px;
    align-items: center;
}

.my-button {
    background: red;
    border: 1px solid red;
    color: #fff;

    &:hover {
        background: red;
        opacity: 0.8;
        color: #fff;

        span {
            color: #fff;
        }
    }

    &:active {
        background-color: red;
        color: #fff;
        border: 1px solid red;

        span {
            color: #fff;
        }
    }
}
</style>