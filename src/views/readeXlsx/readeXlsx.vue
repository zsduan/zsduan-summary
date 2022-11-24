<!--
 * @Author: zs.duan
 * @Date: 2022-11-24 13:09:29
 * @LastEditors: zs.duan
 * @LastEditTime: 2022-11-24 15:51:00
 * @FilePath: \vue2+elui+template\src\views\readeXlsx\readeXlsx.vue
-->
<template>
    <div>
        <dzs-header title="xlsx/excel读取"></dzs-header>
        <div class="page">
            <div class="tips-box">目前只支持纯文本模式 其他模式暂时不支持</div>
            <h2>基础用法</h2>
            <div class="item">
                <input type="file" ref="myfile" accept=".xls,.xlsx" @change="changeFile"/>
                <div >
                    <div class="title">预览</div>
                    <div  v-for="(item,index) in xlsxInfo.html" :key="index">
                        <div class="table_name">预览名称 {{xlsxInfo.xlsxname}} - {{index}}</div>
                        <div class="views-box" v-html="item"></div>
                    </div>
                </div>
                <div class="show-info-box">
                    <div>{{xlsxInfo}}</div>
                </div>
            </div>
            <h2>源代码下载/查看</h2>
            <div class="item">
                <a target="_blank" href="https://github.com/zsduan/zsduan-summary/blob/master/src/utils/readeXlsx.js">下载/查看地址</a>
            </div>
        </div>
        <el-backtop :visibility-height="20">
        </el-backtop>
    </div>
</template>
<script>
import {readeXlsx} from "@/utils/readeXlsx"
export default {
    data(){
        return {
            xlsxInfo : {}
        }
    },
    methods:{
        changeFile(){
            readeXlsx({
                refs : "myfile",
                _this : this,
                success:(res) =>{
                    this.xlsxInfo = res;
                    console.log(res)
                },
                fail : (e)=>{
                    console.log(e);
                }
            })
        }
    }
}
</script>
<style lang="less" scoped>
.show-info-box{
    max-height: 400px;
    overflow-y: scroll;
    margin-top: 20px;
}
.views-box{
    margin: 10px 0;
    border: 1px solid #ccc;
    padding: 10px;
}
</style>