<template>
    <div class="header-box flex">
        <a href="/">
            <img src="../../assets/logo.png" />
        </a>
        <div class="menu-box flex">
            <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
                <template v-for="(item, index) in headerMenu">
                    <template v-if="!item.children.length">
                        <el-menu-item :index="index.toString()">
                            <a v-if="hasHttp(item.path)" :href="item.path" target="_blank">{{ item.title }}</a>
                            <a v-else :href="item.path">{{ item.title }}</a>
                        </el-menu-item>
                    </template>
                    <template v-if="item.children.length">
                        <el-submenu :index="index.toString()" :popper-append-to-body="false">
                            <template slot="title">{{ item.title }}</template>
                            <template v-for="(child, idx) in item.children">
                                <el-menu-item :index="index + '-' + idx" class="el-menu-item-item">
                                    <a v-if="hasHttp(child.path)" :href="child.path" target="_blank">
                                        {{ child.title }}
                                    </a>
                                    <a v-else :href="child.path">{{ child.title }}</a>
                                </el-menu-item>
                            </template>
                        </el-submenu>
                    </template>
                </template>
            </el-menu>
            <div class="search_box flex" @click="openShow">
                <i class="el-icon-search"></i>
                <span>Search Ctrl+K </span>
            </div>
        </div>
        <dzs-dialog :isShow.sync="isShow" title="搜索" width="30%" :showFullscreen="false" @close="closeSearch">
            <div class="input-box">
                <el-input :autofocus="autofocus" v-model="searchValue" @input="onSearch" placeholder="请输入内容"></el-input>
            </div>
            <el-empty v-if="!searchList.length" description="还没有搜索结果"></el-empty>
            <ul class="search-list  hidden-scrollbar">
                <li v-for="(item, index) in searchList" :key="index" @click="closeSearch">
                    <router-link :to="item.path">
                        <div class="title">{{ item.metaTitle }}</div>
                    </router-link>
                </li>
            </ul>
        </dzs-dialog>
    </div>
</template>
<script>
import headerMenu from '../../assets/data/headerMenu';
import dzsDialog from '@/components/dzs-dialog';
import { routes } from '@/router';
import Search from "@/tool/fuzzySearch";
export default {
    components: {
        dzsDialog
    },
    data() {
        return {
            activeIndex: "0",
            headerMenu: headerMenu,
            searchValue: "",
            isShow: false,
            searchList: [],
            routes: [],
            autofocus : false,
        }
    },
    mounted() {
        this.initSearchList();
        this.$nextTick(() => {
            window.addEventListener('keydown', this.handleKeyDown);
        });
    },
    beforeDestroy() {
        window.removeEventListener('keydown', this.handleKeyDown);
    },
    methods: {
        /**初始化搜索列表 */
        initSearchList() {
            let list = [];
            const setList = (data) => {
                data.forEach(item => {
                    if (item.children && item.children.length) {
                        setList(item.children);
                    } else {
                        item.metaTitle = item.meta ? item.meta.title || "" : '个人总结'
                        list.push(item);
                    }
                });
            };
           setList(routes);
           this.routes = list;
        },
        hasHttp(path) {
            return path.includes('http');
        },
        openShow() {
            this.searchValue = "";
            this.searchList = [];
            this.isShow = true;
            this.autofocus = true;
        },
        handleKeyDown(event) {
            if (event.ctrlKey && event.key === 'k') {
                event.preventDefault(); // Prevent the default action
                this.openShow();
            }
        },
        onSearch() {

            this.searchList = [];
            if (!this.searchValue) return;
            Search({
                data: this.routes,
                value: this.searchValue,
                key: "metaTitle",
                success: (res) => {
                    this.searchList = res;
                }
            })
        },
        closeSearch(){
            this.isShow = false;
        }
    }
}
</script>
<style lang="scss" scoped>
.header-box {
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;

    img {
        width: 170px;
        height: 60px;
    }

    .search_box {
        border: 1px solid #d1d0d06b;
        border-radius: 20px;
        width: 130px;
        height: 40px;
        padding: 0 5px;
        padding-right: 10px;
        transition: all 0.3s;
        color: #ccc;
        cursor: pointer;
    }
}

.menu-box {
    .el-menu--horizontal .el-menu .el-menu-item {
        &:hover {
            background-color: #b1a8a86b;
        }
    }
}

.search-list {
    margin-top: 10px;
    max-height: 400px;
    overflow-y: auto;
    li {
        .title {
            display: block;
            padding: 10px;

            &:hover {
                color: var(--themecolor);
                background-color: #b1a8a86b;
            }
        }
    }
}


.flex {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
</style>