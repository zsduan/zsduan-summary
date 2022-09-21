<!--
 * @Author: zs.duan
 * @Date: 2022-09-20 15:03:10
 * @LastEditors: zs.duan
 * @LastEditTime: 2022-09-21 11:42:15
 * @FilePath: \vue2+js+eui+template\src\views\Popup\Popup.vue
-->
<template >
    <div>
        <dzs-header title="弹窗组件"></dzs-header>
        <div class="page">
            <h2>基础用法</h2>
            <div class="item">
                <div class="tips-box">点按钮直接打开</div>
                <el-button type="primary" @click="opendefault">打开弹窗</el-button>
                <dzs-code title="源代码" :value="defaultValue"></dzs-code>
            </div>
            <h2>底部添加按钮</h2>
            <div class="item">
                <div class="tips-box">点按钮直接打开</div>
                <el-button type="primary" @click="opendefaultBottom">打开有底部弹窗</el-button>
                <dzs-code title="源代码" :value="defaultBottomValue"></dzs-code>
            </div>
            <h2>更多功能</h2>
            <div class="item">
                <div class="tips-box">自己在源代码去看</div>
            </div>
            <h2>组件源代码下载</h2>
            <div class="item">
                <a href="https://github.com/zsduan/zsduan-summary/blob/master/src/components/dzs-popup/index.vue">弹窗组件下载地址</a>
            </div>
        </div>
        <dzs-popup :isShow.sync="defaultIsShow">
            <div>我是一个默认的弹窗</div>
        </dzs-popup>
        <dzs-popup :isShow.sync="defaultBottomIsShow">
            <div>我是一个有底部的弹窗</div>
            <template slot="footer">
                <el-button>提交</el-button>
            </template>
        </dzs-popup>
    </div>
</template>
<script>
import dzsPopup from "@/components/dzs-popup/index.vue";
export default {
    components: {
        dzsPopup,
    },
    data() {
        return {
            defaultIsShow: false,
            defaultValue: `
<dzs-popup :isShow.sync="defaultIsShow">
    <div>我是一个默认的弹窗</div>
</dzs-popup>`,
            defaultBottomIsShow: false,
            defaultBottomValue: `
<dzs-popup :isShow.sync="defaultBottomIsShow">
    <div>我是一个有底部的弹窗</div>
    <template slot="footer">
        <el-button>提交</el-button>
    </template>
</dzs-popup>`,
        };
    },
    methods: {
        opendefault() {
            this.defaultIsShow = true;
        },
        opendefaultBottom() {
            this.defaultBottomIsShow = true;
        },
    },
};
</script>
<style lang="less" scoped>
.page {
    .item {
        padding: 10px 0;
        a{
            display: inline-block;
            padding: 10px 20px;
            text-align: center;
            border: 1px solid #ccc;
            border-radius: 10px;
        }
    }
}
</style>