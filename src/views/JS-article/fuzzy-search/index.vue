<template>
    <section>
        <public-item title="基础用法" :code="code1" >
            <el-input v-model="searchValue" placeholder="请输入搜索内容" @input="onSearch"></el-input>
            {{searchResult}}
        </public-item>
        <public-item title="数组对象关键字模糊搜索" :code="code2">
            <el-input v-model="searchValueByObject" placeholder="请输入搜索内容" @input="onSearchByObject">
                <template slot="prepend">
                    <el-select class="my-select" @change="onSearchByObject" v-model="selectValueByObject" placeholder="请选择搜索字段">
                        <el-option
                            v-for="item in seachType"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                </template>
            </el-input>
            {{searchResultByObject}}
        </public-item>
        <public-item title="多层级数组对象关键字模糊搜索" :code="code3">
            <el-input v-model="searchValueByChild" placeholder="请输入搜索内容" @input="onSearchByChild">
                <template slot="prepend">
                    <el-select class="my-select" @change="onSearchByChild" v-model="selectValueByChild" placeholder="请选择搜索字段">
                        <el-option
                            v-for="item in seachType"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                </template>
            </el-input>
            {{searchResultByChild}}
        </public-item>
        <public-item title="参数说明" :list="tableData"></public-item>
        <public-item title="返回参数说明" :list="returnTableData"></public-item>
        <public-item title="源代码查看" :links="links"></public-item>
        <dzs-backtop  target=".el-main"></dzs-backtop>
    </section>
</template>
<script>
import Search from "@/tool/fuzzySearch";
import {code1 , code2 , code3} from "./config";
import {tableData , returnTableData} from "./desc.js";
export default {
    data() {
        return {
            list : ["重庆","北京","天津","上海","上岸"],
            searchValue : "",
            searchResult : [],
            listByObject : [
                {
                    name : "重庆",
                    pinyin : "chongqing"
                },
                {
                    name : "北京",
                    pinyin : "beijing"
                },
                {
                    name : "天津",
                    pinyin : "tianjin"
                },
                {
                    name : "上海",
                    pinyin : "shanghai"
                },
            ],
            searchResultByObject : [],
            searchValueByObject : "",
            selectValueByObject : "name",
            seachType : [
                {
                    label : "name",
                    value : "name"
                },
                {
                    label : "pinyin",
                    value : "pinyin"
                }
            ],
            searchListByChild : [
                {
                    name : "重庆",
                    pinyin : "chongqing",
                    children : [
                        {
                            name : "渝中",
                            pinyin : "yuzhong",
                            children : [
                                {
                                    name : "桂花园街道",
                                    pinyin : "guihuayuan"
                                },
                            ]
                        },
                        {
                            name : "渝北",
                            pinyin : "yubei"
                        },
                    ],
                },
                {
                    name : "北京",
                    pinyin : "beijing",
                    children : [
                        {
                            name : "朝阳",
                            pinyin : "chaoyang"
                        },
                        {
                            name : "海淀",
                            pinyin : "haidian"
                        },
                    ],
                },
            ],
            selectValueByChild : "name",
            searchValueByChild : "",
            searchResultByChild : [],
            code1 : {
                title : "代码示例",
                code : code1,
                lang : "js"
            },
            code2 : {
                title : "代码示例",
                code : code2,
                lang : "js"
            },
            code3 : {
                title : "代码示例",
                code : code3,
                lang : "js"
            },
            returnTableData : returnTableData,
            tableData : tableData,
            links : {
                href : "https://github.com/zsduan/zsduan-summary/blob/master/src/tool/fuzzySearch.js",
                title : "源码"
            }
        };
    },
    mounted() {
        this.onSearch();
        this.onSearchByObject();
        this.onSearchByChild();
    },
    methods: {
        onSearch(){
            Search({
                data : this.list,
                value : this.searchValue,
                success : (res) => {
                    this.searchResult = res;
                }
            })
        },
        onSearchByObject(){
            Search({
                data : this.listByObject,
                value : this.searchValueByObject,
                key : this.selectValueByObject,
                success : (res) => {
                    this.searchResultByObject = res;
                }
            })
        },
        onSearchByChild(){
            Search({
                data : this.searchListByChild,
                value : this.searchValueByChild,
                key : this.selectValueByChild,
                children : "children",
                success : (res) => {
                    this.searchResultByChild = res;
                }
            })
        }
    }
};
</script>
<style lang="scss" scoped>
.my-select{
    width : 100px;
}
</style>