<template>
    <div class="dzs-postman">
        <public-item title="基本用法" :code="code1">
            <dzs-postman :request="request"></dzs-postman>
        </public-item>
        <public-item title="组件源代码查看" :links="links"></public-item>
        <dzs-backtop  target=".el-main"></dzs-backtop>
    </div>
</template>
<script>
import dzsPostman from '@/components/dzs-postman/index.vue';
import {code1} from "./config";
import request from "../../../tool/request/index";
export default {
    components: {
        dzsPostman
    },
    data() {
        return {
            code1: {
                title: "代码示例",
                code: code1,
                lang: "vue"
            },
            request : request,
            links : {
                href: "https://github.com/zsduan/zsduan-summary/blob/master/src/components/dzs-postman/index.vue",
                title: "组件源码"
            }
        }
    },
}
</script>