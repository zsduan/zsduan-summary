<template>
    <section>
        <public-item title="原始尺寸" >
            <div v-html="oldHtml"></div>
        </public-item>
        <public-item title="处理后的尺寸" :code="code1">
            <div v-html="newHtml"></div>
        </public-item>
        <public-item title="参数说明" :list="tableData"></public-item>
        <public-item title="返回参数说明" :list="returnTableData"></public-item>
        <public-item title="源代码查看" :links="links"></public-item>
        <dzs-backtop  target=".el-main"></dzs-backtop>
        <dzs-navigation-title></dzs-navigation-title>
    </section>
</template>
<script>
import imgUrl from "./image/1.jpg";
import { code1 } from "./config";
import setHtml from "@/utils/sethtml";
import {tableData , returnTableData} from "./desc.js"
export default {
    data() {
        return {
            oldHtml : `<img src='${imgUrl}' />`,
            code1 : {
                title : "代码示例",
                code : code1,
                lang : "js"
            },
            newHtml : "",
            tableData : tableData,
            returnTableData : returnTableData,
            links : {
                href : "https://github.com/zsduan/zsduan-summary/blob/master/src/utils/setHtml.js",
                title : "源码"
            }
        }
    },
    mounted(){
        this.setHtml();
    },
    methods:{
        setHtml(){
            setHtml({
                html : this.oldHtml,
                success : (res)=>{
                    this.newHtml = res;
                },
            })
        }
    }
}
</script>
<style lang="scss" scoped></style>