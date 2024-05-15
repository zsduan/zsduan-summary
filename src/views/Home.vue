<!--
 * @Author: zs.duan
 * @Date: 2022-09-20 13:49:02
 * @LastEditors: zs.duan
 * @LastEditTime: 2023-01-11 17:09:34
 * @FilePath: \vue2+js+eui+template\src\views\Home.vue
-->
<template>
    <div class="home">
        <div class="home-title-box">
            <h1 class="home-title">zs.duan的自我总结</h1>
            <div class="change" @click="changeNew">切换新版</div>
        </div>
        <div class="search-box">
            <div class="left"></div>
            <div class="right">
                <el-input v-model="searchValue" class="ipt" placeholder="请输入你需要搜索的名称" clearable @input="inputValue"></el-input>
                <el-button class="btn" type="primary" icon="el-icon-search">搜索</el-button>
            </div>
        </div>
        <div v-if="!searchValue">
            <div class="components-box piblic-box">
                <h2 class="title">组件篇(基于饿了吗ui)</h2>
                <ul>
                    <li
                        class="elli1"
                        v-for="(item,index) in componentsList"
                        :key="index"
                        @click="goNav(item.path)"
                        :class="item.title.length > 8 ? 'small-size' :''"
                    >{{item.title}}</li>
                </ul>
            </div>
            <div class="components-box piblic-box">
                <h2 class="title">js篇</h2>
                <ul>
                    <li
                        class="elli1"
                        v-for="(item,index) in jsList"
                        :key="index"
                        @click="goNav(item.path)"
                        :class="item.title.length > 8 ? 'small-size' :''"
                    >{{item.title}}</li>
                </ul>
            </div>
            <div class="components-box piblic-box">
                <h2 class="title">动效/页面效果</h2>
                <ul>
                    <li
                        class="elli1"
                        v-for="(item,index) in effectList"
                        :key="index"
                        @click="goNav(item.path)"
                        :class="item.title.length > 8 ? 'small-size' :''"
                    >{{item.title}}</li>
                </ul>
            </div>
            <div class="components-box piblic-box">
                <h2 class="title">好用的js片段</h2>
                <ul>
                    <li
                        class="elli1"
                        v-for="(item,index) in fragmentList"
                        :key="index"
                        @click="goNav(item.path)"
                        :class="item.title.length > 8 ? 'small-size' :''"
                    >{{item.title}}</li>
                </ul>
            </div>
            <div class="components-box piblic-box">
                <h2 class="title">一些奇妙的想法</h2>
                <ul>
                    <li
                        class="elli1"
                        v-for="(item,index) in imagineList"
                        :key="index"
                        @click="goNav(item.path)"
                        :class="item.title.length > 8 ? 'small-size' :''"
                    >{{item.title}}</li>
                </ul>
            </div>
        </div>
        <div v-else>
            <div class="components-box piblic-box">
                <h2 class="title">搜索结果</h2>
                <ul>
                    <li
                        class="elli1"
                        v-for="(item,index) in searchList"
                        :key="index"
                        @click="goNav(item.path)"
                        :class="item.title.length > 8 ? 'small-size' :''"
                    >{{item.title}}</li>
                </ul>
                <el-empty v-if="!searchList.length" description="暂无数据,换个关键词试试"></el-empty>
            </div>
        </div>
        <el-backtop :visibility-height="20"></el-backtop>
        <div class="canvas-back"></div>
        <canvas id="back">您的浏览器不支持canvas</canvas>
    </div>
</template>

<script>
import {
    componentsList,
    jsList,
    effectList,
    fragmentList,
    imagineList
} from "../assets/data/homeData";
import { drawCanvasBack } from "../utils/canvas-back";
import { blurSearch } from "@/utils/blurSearch.js";
export default {
    name: "Home",
    components: {},
    data() {
        return {
            componentsList: componentsList.filter((item) => {
                return item.is_show == true;
            }),
            jsList: jsList.filter((item) => {
                return item.is_show == true;
            }),
            effectList: effectList.filter((item) => {
                return item.is_show == true;
            }),
            fragmentList: fragmentList.filter((item) => {
                return item.is_show == true;
            }),
            imagineList : imagineList.filter((item) => {
                return item.is_show == true;
            }),
            allList: [
                ...componentsList,
                ...jsList,
                ...effectList,
                ...fragmentList,
                ...imagineList
            ].filter((item) => {
                return item.is_show;
            }),
            searchList: [],
            searchValue: "",
        };
    },
    mounted() {
        drawCanvasBack({
            canvasId: "back",
            showWord: "zsduan的自我总结",
            columnWidth: 21,
        });
    },
    methods: {
        goNav(path) {
            if (!path) {
                this.$message({
                    message: "功能暂未开放",
                    type: "info",
                });
                return;
            }
            this.$router.push({ path: path });
        },
        inputValue() {
            blurSearch({
                list: this.allList,
                searValue: this.searchValue,
                key: "title",
                success : (res)=>{
                    this.searchList = res;
                }
            });
        },
        changeNew(){
            this.$router.push({path : "/"})
        }
    },
};
</script>
<style lang="less" scoped>
.not-select {
    -moz-user-select: none;
    /*火狐*/
    -webkit-user-select: none;

    /*webkit浏览器*/
    -ms-user-select: none;
    -ms-overflow-style: none;
    /*IE10*/
    -khtml-user-select: none;
    /*早期浏览器*/
    user-select: none;
}
.home {
    padding-bottom: 20px;
}
.home-title {
    font-size: 36px;
    text-align: center;
}
.piblic-box {
    max-width: 1200px;
    margin: 0 auto;
    .title {
        font-size: 20px;
        padding-top: 30px;
    }
    ul {
        display: grid;
        /* 宽度平均分成4份 */
        grid-template-columns: repeat(4, 1fr);
        column-gap: 20px; //左右间距
        row-gap: 40px; //上下间距
        margin-top: 40px;
        .not-select();
        li {
            height: 100px;
            line-height: 100px;
            box-shadow: 0 4px 8px 6px rgba(7, 17, 21, 0.06);
            text-align: center;
            font-size: 26px;
            border: 10px;
            cursor: pointer;
            transition: all 0.3s;
            color: var(--fontColor);
            background: #fff;
            &:hover {
                box-shadow: 0 4px 8px 10px rgba(7, 17, 21, 0.1);
            }
        }
    }
    .small-size {
        font-size: 18px;
    }
}

#back {
    position: fixed;
    top: 0;
    z-index: -2;
}
.canvas-back {
    position: fixed;
    top: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(255, 255, 255, 0.7);
    z-index: -1;
}

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

@media screen and (max-width: 1200px) {
    .piblic-box {
        padding: 0 20px;
        ul {
            grid-template-columns: repeat(3, 1fr);
            column-gap: 10px; //左右间距
            row-gap: 20px; //上下间距
            margin-top: 20px;
        }
    }
    .search-box {
        padding: 0 20px;
        .right {
            display: flex;
            width: 80%;
            .btn {
                display: inline-block;
                margin-left: 5px;
            }
            .ipt {
                width: 80%;
            }
        }
    }
}

@media screen and (max-width: 768px) {
    .piblic-box {
        padding: 0 10px;
        ul {
            grid-template-columns: repeat(2, 1fr);
            li{
                font-size: 20px;
            }
        }
        .small-size {
            font-size: 14px;
        }
    }
    .search-box {
        padding: 0 10px;
    }
    .home-title-box{
        .change{
            display: none;
        }
    }
}

@media screen and (max-width: 400px) {
    .piblic-box {
        ul {
            grid-template-columns: repeat(1, 1fr);
        }
    }
}

.home-title-box{
    position: relative;
    .change{
        position: absolute;
        right: 10%;
        top: 25px;
        cursor: pointer;
    }
}
</style>
