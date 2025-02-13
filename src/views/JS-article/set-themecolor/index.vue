<template>
    <section>
        <public-item title="基础用法" :code="code1">
            <el-color-picker v-model="color" @change="setThemeColor"></el-color-picker>
            <div class="back-box">
                跟随主题色变化
            </div>
        </public-item>
        <public-item title="参数说明" :list="tableData"></public-item>
        <public-item title="源代码查看" :links="links"></public-item>
        <dzs-backtop  target=".el-main"></dzs-backtop>
    </section>
</template>
<script>
import setThemecolor from "@/tool/setThemecolor";
import {code1} from "./config";
import {tableData} from "./desc";
export default {
    data() {
        return {
            color : "#66b1ff",
            code1 : {
                title : "代码示例",
                code : code1,
                lang : "js"
            },
            tableData,
            links : {
                href : "https://github.com/zsduan/zsduan-summary/blob/master/src/tool/setThemecolor.js",
                title : "源码"
            }
        };
    },
    methods : {
        setThemeColor(){
            setThemecolor({
                color : this.color,
                generate : false,
                success : ()=>{
                    this.$message({
                        message : "主题色已修改",
                        type : "success"
                    })
                }
            });
        },
        
    }
};
</script>
<style lang="scss" scoped>
.back-box{
    width: 150px;
    height: 150px;
    background-color: var(--themecolor);
    line-height: 150px;
    text-align: center;
}
</style>