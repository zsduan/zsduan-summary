<template>
    <div>
        <el-header class="my_header">
            <div class="header_box">
                <a v-if="NODE_ENV == 'development'" href="./" class="title">zs.duan的个人总结</a>
                <a v-else href="/zhongjie" class="title">zs.duan的个人总结</a>
                <div class="nav_box">
                    <div class="nav">
                        <el-menu
                            active-text-color="var(--ThemeColor)"
                            :default-active="activeIndex"
                            text-color="#333"
                            background-color="#f9f9f9"
                            mode="horizontal"
                            @select="handleSelect"
                        >
                            <template v-for="(item , index) in menuList">
                                <template v-if="!item.list.length">
                                    <el-menu-item :index="(index + 1).toString()" :key="index">
                                        <template v-if="!item.herf">{{item.menu}}</template>
                                        <template v-else>
                                            <a target="_blank" :href="item.herf">{{item.menu}}</a>
                                        </template>
                                    </el-menu-item>
                                </template>
                                <template v-else>
                                    <el-submenu :index="(index + 1).toString()" :key="index">
                                        <template slot="title">{{item.menu}}</template>
                                        <template v-if="item.list.length">
                                            <el-menu-item :index="(index + 1) + '-' + (idx + 1)" v-for="(itm,idx) in item.list" :key="idx">
                                                <template v-if="!itm.herf">{{itm.menu}}</template>
                                                <template v-else>
                                                    <a target="_blank" :href="itm.herf">{{itm.menu}}</a>
                                                </template>
                                            </el-menu-item>
                                        </template>
                                    </el-submenu>
                                </template>
                            </template>
                        </el-menu>
                    </div>
                    <div class="search_box" :class="is_focus ? 'search_focus':''">
                        <div class="input_box">
                            <el-input
                                v-model="searchValue"
                                @input="inputValue"
                                class="input"
                                placeholder="Search"
                                @focus="is_focus = true"
                                @blur="inputBlur"
                            ></el-input>
                        </div>
                        <i class="el-icon-search"></i>
                    </div>
                </div>
            </div>
        </el-header>
        <el-header></el-header>
        <el-container class="my_page">
            <el-aside class="my-aside" width="240px">
                <ul class="aside_list" >
                    <li class="item" v-for="(item,index) in asideList" :key="index">
                        <div class="title" v-if="aside[item.key]">{{item.name}}</div>
                        <div
                            class="path_name"
                            :id="itm.path"
                            :data-path="itm.path"
                            :class="itm.active ? 'active':''"
                            @click="goPath(idx , item.key)"
                            v-for="(itm,idx) in aside[item.key]"
                            :key="idx"
                        >
                        {{itm.title}}</div>
                    </li>
                </ul>
            </el-aside>
            <el-aside class="aside-empty" width="240px"></el-aside>
            <el-container>
                <el-main>
                    <dzs-update-log v-if="activeAside== -1 && !is_empty && !is_search"></dzs-update-log>
                    <!-- <dzs-new-year v-if="activeAside== -1 && !is_empty && !is_search"></dzs-new-year> -->
                    <!-- <p class="welcome" v-if="activeAside== -1 && !is_empty && !is_search">welcome</p> -->
                    <div class="empty-tips" v-if="is_empty">
                        <el-empty description="该页面维护中~"></el-empty>
                    </div>
                    <dzs-components-list :type="activeComponent" v-if="!is_search"></dzs-components-list>
                    <div class="piblic-box" v-if="is_search && searchValue">
                        <h2 class="title">搜索结果</h2>
                        <ul>
                            <li
                                class="elli1"
                                v-for="(item,index) in searchList"
                                :key="index"
                                @click="searchClick(item)"
                                :class="item.title.length > 8 ? 'small-size' :''"
                            >
                                {{item.title}}
                            </li>
                        </ul>
                        <el-empty v-if="!searchList.length" description="暂无数据,换个关键词试试"></el-empty>
                    </div>
                </el-main>
                <el-footer>©2022-{{year}} zs.duan个人总结</el-footer>
            </el-container>
        </el-container>
        <el-backtop :visibility-height="20"></el-backtop>
    </div>
</template>
<script>
import { data } from "./data/data";
import pathList from "../../assets/data/homeData";
import dzsComponentsList from "../../components/dzs-components-list/dzs-components-list.vue";
import dzsNewYear from "../../components/dzs-new-year/dzs-new-year.vue";
import dzsUpdateLog from "../../components/dzs-update-log/dzs-update-log.vue";
import { blurSearch } from "@/utils/blurSearch.js";
export default {
    components: {
        dzsComponentsList,
        dzsNewYear,
        dzsUpdateLog
    },
    data() {
        return {
            activeIndex: "1",
            menuList: data.MenuList,
            is_focus: false,
            searchValue: "",
            allList: [],
            asideList: data.asideList,
            aside: {}, //侧边栏全部数据
            year: new Date().getFullYear(),
            is_empty: false, //是否为空
            activeAside: -1, //选中的侧边栏
            activeComponent: "", //选中的组件
            searchList: [],
            is_search : false, //是否在搜索中
            NODE_ENV : process.env.NODE_ENV
        };
    },
    created() {
        this.initAside();
    },
    mounted() {
    },
    methods: {
        handleSelect(key, keyPath) {},
        // 初始化侧边栏数据
        initAside() {
            // 闭包处理是否显示
            const isShow = (data) => {
                let list = data.filter((item , index) => {
                    item.active = false;
                    return item.is_show;
                });
                return list;
            };
            this.asideList.forEach((v) => {
                this.aside[v.key] = isShow(pathList[v.key]);
                this.allList.push(...isShow(pathList[v.key]));
            });
            // 获取 query
            let query = this.$route.query;
            if(query.type){
                this.asideList.forEach((v) => {
                    this.aside[v.key].forEach((item , index) =>{
                        if(item.path == query.type){
                            item.active = true;
                            this.goPath(index , v.key)
                        }
                    })
                })
                // 滚动到指定位置
                setTimeout(() => {
                    let dom = document.getElementById(query.type);
                    if(dom){
                        dom.scrollIntoView();
                    }
                }, 100);
            }
            
            
        },
        // 去相关页面
        goPath(index, key) {
            let query = this.$route.query;
            if(query.type != this.aside[key][index].path){
                this.$router.push({name : "Index" , query:{type : this.aside[key][index].path}})
            }
            this.is_search = false;
            this.is_empty = false;
            if (!this.aside[key][index].path) {
                this.is_empty = true;
            }
            this.asideList.forEach((v) => {
                this.aside[v.key].forEach((item) => {
                    item.active = false;
                });
            });
            this.aside[key][index].active = true;
            this.activeAside = index;
            document.title = this.aside[key][index].title;
            this.activeComponent = this.aside[key][index].path;
        },
        inputValue() {
            this.is_search = true;
            blurSearch({
                list: this.allList,
                searValue: this.searchValue,
                key: "title",
                success: (res) => {
                    this.searchList = res;
                },
            });
        },
        // 搜索点击
        searchClick(item){
            this.is_search = false;
            // 遍历查找
            this.asideList.forEach((v) => {
                this.aside[v.key].forEach((itm , index) => {
                    if(itm.path == item.path){
                        this.goPath(index , v.key);
                    }
                });
            });
        },
        // 失去焦点
        inputBlur(){
            this.is_focus = false;
            if(!this.searchValue){
                this.is_search = false;
            }
        }
    },
};
</script>
<style lang="less" scoped>
@import url("./less/style.less");
</style>