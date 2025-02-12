<template>
    <section>
        <public-item title="防抖" :code="code1">
            <el-button @click="isOpen = !isOpen">展开与收起</el-button>
            <div class="line"></div>
            <ul class="open-list" v-dzs-autoExpand="isOpen">
                <li class="open-lsit-item" v-for="(item, index) in list" :key="index">{{ item.Text }}</li>
            </ul>
        </public-item>
        <public-item title="参数说明" :list="tableData"></public-item>
        <public-item title="源代码查看" :links="links"></public-item>
        <dzs-backtop  target=".el-main"></dzs-backtop>
        <dzs-navigation-title></dzs-navigation-title>
    </section>
</template>
<script>
import { code1 } from "./config";
import {tableData} from "./desc";
export default {
    data() {
        return {
            code1: {
                title: "代码示例",
                code: code1,
                lang: "vue"
            },
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
            tableData : tableData,
            links: {
                href: "https://github.com/zsduan/zsduan-summary/blob/master/directive/index.js",
                title: "源码"
            }
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