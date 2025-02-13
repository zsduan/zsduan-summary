<template>
    <div class="header-box flex">
        <a href="/">
            <img src="../../assets/logo.png" />
        </a>

        <div class="phone-hamburger-box">
            <div class="search-box-phone" @click="openShow">
                <i class="el-icon-search"></i>
            </div>
            <div class="phone-hamburger" v-if="!isShowMenu" aria-label="移动版导航" @click="isShowMenu = true">
                <span class="vt-hamburger-top"></span>
                <span class="vt-hamburger-middle"></span>
                <span class="vt-hamburger-bottom"></span>
            </div>
            <div class="phone-hamburger-colse" v-if="isShowMenu" @click="isShowMenu = false"></div>
        </div>
        <div class="menu-box flex" v-if="!$store.state.isPhone.isPhone || isShowMenu">
            <el-menu :default-active="activeIndex" class="el-menu-demo"
                :mode="$store.state.isPhone.isPhone ? 'vertical' : 'horizontal'">
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
        <dzs-dialog :isShow.sync="isShow" :fullscreen="$store.state.isPhone.isPhone" title="搜索" :width="!$store.state.isPhone.isPhone ? '30%' : '100%'" :showFullscreen="false" @close="closeSearch">
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
            autofocus: false,
            isShowMenu: false
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
        closeSearch() {
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

    .phone-hamburger-box {
        display: none;
    }

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

@media screen and (max-width: 1200px) {
    .header-box {
        position: relative;

        .menu-box {
            display: block;
            position: absolute;
            width: 100%;
            height: calc(100vh - 60px);
            z-index: 999;
            left: 0;
            top: 60px;
            background-color: rgba(255, 255, 255, 1);
            overflow-y: auto;

            .el-menu {
                width: 100%;
            }

            .search_box {
                display: none;
            }
        }

        .phone-hamburger-box {
            display: flex;
            align-items: center;
            width: 70px;
            justify-content: space-between;
            .el-icon-search{
                font-size: 18px;
            }
        }

        .phone-hamburger {
            display: flex;
            width: 20px;
            flex-wrap: wrap;
            justify-content: flex-end;
            margin-right: 10px;

            .vt-hamburger-top,
            .vt-hamburger-bottom,
            .vt-hamburger-middle {
                display: block;
                width: 20px;
                height: 2px;
                background-color: var(--fontcolor);
                margin-bottom: 5px;
            }

            .vt-hamburger-middle {
                width: 16px;
            }
        }

        .phone-hamburger-colse {
            width: 25px;
            height: 25px;
            display: block;
            margin-right: 10px;
            position: relative;

            &::before,
            &::after {
                content: '';
                position: absolute;
                width: 25px;
                height: 2px;
                background-color: var(--fontcolor);
                top: 50%;
                left: 0;
                transform: translateY(-50%);
                transition: all 0.3s;
                transform-origin: center;
                // 旋转90度
                transform: rotate(45deg);
            }

            &::after {
                transform: rotate(-45deg);
            }
        }
    }
}
</style>