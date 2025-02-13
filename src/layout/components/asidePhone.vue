<template>
    <div class="aside-phone-box">
        <div class="aside-phone-menu-box">
            <span class="vt-hamburge-box">
                <span class="vt-hamburger-top"></span>
                <span class="vt-hamburger-middle"></span>
                <span class="vt-hamburger-bottom"></span>
            </span>
            <span class="title" @click="openDrawer">菜单</span>
        </div>
        <div class="aside-phone-menu-box" @click="openMenu">
            <span class="title">本页目录</span>
            <span class="vt-arrow-box"></span>
        </div>
        <el-drawer title="目录" size="60%" :visible.sync="isOpenDrawer" direction="ltr" :append-to-body="true">
            <div class="aside-phone-menu-box-content" @click="clickMenu">
                <slot></slot>
            </div>
        </el-drawer>
        <dzs-navigation-title v-if="isShowNavigation"></dzs-navigation-title>
    </div>
</template>
<script>
export default {
    data() {
        return {
            isOpenDrawer: false,
            isShowNavigation: false,
        }
    },
    mounted() {
    },
    methods: {
        openDrawer() {
            this.isOpenDrawer = true;
        },
        /**监听 aside-phone-menu-box-content 被点击*/
        clickMenu() {
            this.isOpenDrawer = false;
        },
        openMenu(){
            this.isShowNavigation = !this.isShowNavigation;
        }
    }
}
</script>
<style lang="scss" scoped>
.aside-phone-box {
    display: none;
    width: 100%;
    height: 40px;
    border-bottom: 1px solid rgba(60, 60, 60, .12);
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;

    .title {
        font-size: 12px;
        color: rgba(60, 60, 60, .8);
    }

    .aside-phone-menu-box {
        display: flex;
        align-items: center;
    }

    .vt-hamburge-box {
        display: flex;
        width: 12px;
        flex-wrap: wrap;
        margin-right: 5px;

        .vt-hamburger-top,
        .vt-hamburger-bottom,
        .vt-hamburger-middle {
            display: block;
            width: 12px;
            height: 2px;
            background-color: rgba(60, 60, 60, .8);
            margin-bottom: 3px;
        }

        .vt-hamburger-bottom {
            margin-bottom: 0;
        }

        .vt-hamburger-middle {
            width: 10px;
        }
    }

    // 画一个箭头
    .vt-arrow-box {
        position: relative;
        width: 12px;
        height: 10px;
        margin-left: 5px;

        &::before,
        &::after {
            position: absolute;
            content: '';
            width: 6px;
            height: 2px;
            background-color: rgba(60, 60, 60, .8);
            top: 50%;
            transition: all .3s;
            transform-origin: center;
            transform: rotate(45deg);
        }

        &::after {
            transform: rotate(-45deg);
            right: 3px;
        }
    }

}

.aside-phone-menu-box-content {
    padding: 0 10px;
    padding-bottom: 10px;
}

/deep/.el-drawer__header {
    margin-bottom: 0;
}

@media screen and (max-width: 1200px) {
    .aside-phone-box {
        display: flex;
    }
}
</style>