<!--
 * @Author: zs.duan
 * @Date: 2022-12-26 14:02:46
 * @LastEditors: zs.duan
 * @LastEditTime: 2022-12-26 14:43:12
 * @FilePath: \vue2+js+eui+template\src\views\EasyJS\EasyJS.vue
-->
<template>
    <div>
        <dzs-header title="好用的js片段"></dzs-header>
        <div class="search-box">
            <div class="left"></div>
            <div class="right">
                <el-input v-model="searchValue" class="ipt" placeholder="请输入你需要搜索的名称" clearable @input="inputValue"></el-input>
                <el-button class="btn" type="primary" icon="el-icon-search">搜索</el-button>
            </div>
        </div>
        <div class="page" v-if="!searchList.length">
            <div class="item" v-for="(item,index) in list" :key="index">
                <h2>{{item.name}}</h2>
                <dzs-code title="代码片段" :value="item.code"></dzs-code>
            </div>
        </div>
        <div class="page" v-else>
            <div class="item" v-for="(item,index) in searchList" :key="index">
                <h2>{{item.name}}</h2>
                <dzs-code title="代码片段" :value="item.code"></dzs-code>
            </div>
        </div>
        <el-backtop :visibility-height="20"></el-backtop>
    </div>
</template>
<script>
import { code1, code2 , code3 , code4 , code5 , code6 , code7} from "./config";
import { blurSearch } from "@/utils/blurSearch.js";
export default {
    data() {
        return {
            list: [
                {
                    name: "深拷贝",
                    code: code1,
                },
                {
                    name: "在执行下一个操作之前等待指定的持续时间（以毫秒为单位）",
                    code: code2,
                },
                {
                    name: "将多维数组拉平",
                    code: code3,
                },
                {
                    name: "升序",
                    code: code4,
                },
                {
                    name: "降序",
                    code: code5,
                },
                {
                    name: "反转字符串",
                    code: code6,
                },
                {
                    name: "是否为ie",
                    code: code7,
                },
            ],
            searchList : [],
            searchValue : ""
        };
    },
    mounted() {},
    methods:{
        inputValue(){
            blurSearch({
                list: this.list,
                searValue: this.searchValue,
                key: "name",
                success : (res)=>{
                    this.searchList = res;
                }
            });
        }
    }
};
</script>
<style lang="less" scoped>
.search-box {
    display: flex;
    justify-content: space-between;
    max-width: 1200px;
    margin: 0 auto;
    margin-top: 20px;

    .right {
        display: flex;
        .btn {
            display: inline-block;
            margin-left: 5px;
        }
        .ipt {
            width: 300px;
        }
    }
}
</style>