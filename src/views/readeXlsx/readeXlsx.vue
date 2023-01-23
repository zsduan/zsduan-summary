<!--
 * @Author: zs.duan
 * @Date: 2022-11-24 13:09:29
 * @LastEditors: zs.duan
 * @LastEditTime: 2023-01-23 18:03:11
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
                <dzs-code title="源代码" :value="code1"></dzs-code>
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
import {readeXlsx} from "@/utils/readeXlsx";
import {code1} from "./config"
export default {
    data(){
        return {
            xlsxInfo : {},
            code1 : code1
        }
    },
    methods:{
        changeFile(){
            readeXlsx({
                refs : "myfile",
                _this : this,
                success:(res) =>{
                    this.xlsxInfo = res;
                    // console.log(this.xlsxInfo.data.Sheet1);
                    // let arr = [];
                    // this.xlsxInfo.data.Sheet1.forEach(element => {
                    //     let json = {
                    //         name : element['姓名'],
                    //         price : element['金额'],
                    //         is_weixin : element['备注'] == '微信' ? true : false,
                    //         is_special : element['金额'] == 0 ? true : false,
                    //         remark : element['备注'] ? element['备注'] : ''
                    //     }
                    //     arr.push(json)
                    // });

                    // this.xlsxInfo.data.Sheet1.forEach(element => {
                    //     let json = {
                    //         name : element['人名/物品'],
                    //         price : element['金额'],
                    //         num : element['数量（默认1）'] ? element['数量（默认1）'] : '1份/1次',
                    //         remark : element['备注'] ? element['备注'] : ''
                    //     }
                    //     arr.push(json)
                    // });
                    console.log(JSON.stringify(arr));
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