<template>
    <el-container>
        <el-header>
            <nav-bar></nav-bar>
        </el-header>
        <el-container class="app-main-box">
            <el-aside width="210px" class="hidden-scrollbar">
                <side-bar></side-bar>
                <my-footer></my-footer>
            </el-aside>
            <el-container class="hidden-scrollbar">
                <el-main>
                    <app-main />
                </el-main>
            </el-container>
        </el-container>
    </el-container>
</template>
<script>
import AppMain from './components/AppMain';
import navBar from "./components/Navbar";
import sideBar from "./components/Sidebar.vue";
import myFooter from "./components/myFooter";
export default {
    components: {
        AppMain,
        navBar,
        sideBar,
        myFooter
    },
}
</script>
<style lang="scss">
.app-main-box {
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
    height: calc(100vh - 60px);
    .el-aside {
        height: calc(100vh - 60px);
    }
    .el-main{
        padding-bottom: 80px;
    }
}

.el-header {
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12),
        0 -1px #fff;
    background-color: #fff;
}

.phone-public {
    background: url('../assets/image/iPhoneX_model.png') no-repeat;
    width: 350px;
    height: 708px;
    background-size: 100% 100%;
    padding: 48px 16px 38px 16px;
    margin: 20px;

    .phone-box {
        background: #fff;
        height: 100%;
        overflow-y: auto;
        box-sizing: border-box;

        // 滚动条宽度
        &::-webkit-scrollbar {
            width: 6px;
            background-color: #fff;
        }

        // 滚动条轨道
        &::-webkit-scrollbar-track {
            background-color: transparent;
            -webkit-border-radius: 2em;
            -moz-border-radius: 2em;
            border-radius: 2em;
        }

        // 滚动条背景
        &::-webkit-scrollbar-track-piece {
            background-color: transparent;
            -webkit-border-radius: 2em;
            -moz-border-radius: 2em;
            border-radius: 2em;
        }

        // 滚动条滑块
        &::-webkit-scrollbar-thumb {
            background-color: #e9e7e7;
            -webkit-border-radius: 2em;
            -moz-border-radius: 2em;
            border-radius: 2em;
        }

    }
}
</style>