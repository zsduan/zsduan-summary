<template>
    <div>
        <dzs-header title="好用的css" v-if="!newIndex"></dzs-header>
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
        <el-backtop :visibility-height="20" v-if="!newIndex"></el-backtop>
    </div>
</template>
<script>
import { blurSearch } from "@/utils/blurSearch.js";
import { code1 , code2 } from "./config";
export default{
    props: {
        newIndex: {
            type: Boolean,
            default: () => {
                return false
            }
        }
    },
    data(){
        return {
            list : [
                {
                    name : "设置滚动条",
                    code : code1
                },
                {
                    name : "隐藏滚动条",
                    code : code2
                }
            ],
            searchList : [],
            searchValue : ""
        }
    },
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
}
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