<!--
 * @Author: zs.duan
 * @Date: 2022-09-30 10:51:51
 * @LastEditors: zs.duan
 * @LastEditTime: 2022-09-30 17:10:26
 * @FilePath: \vue2+js+eui+template\src\views\ThemeColor\ThemeColor.vue
-->
<template>
    <div>
        <dzs-header title="设置主题色"></dzs-header>
        <div class="page">
            <h2>基础用法</h2>
            <div class="item">
                <div class="tips-box">点击下面设置主题色</div>
                <el-color-picker v-model="defaultColor" @change="setThemeColor"></el-color-picker>
                <div class="back">注意看我的背景</div>
                <el-button type="primary">我的背景也在变</el-button>
                <dzs-code title="使用方法" :value="code1"></dzs-code>
            </div>
        </div>
    </div>
</template>
<script>
import { code1 } from "./config";
export default {
    data() {
        return {
            defaultColor: window.localStorage.getItem("ThemeColor"),
            code1: code1,
        };
    },
    methods: {
        setThemeColor(ThemeColor) {
            window.localStorage.setItem("ThemeColor", ThemeColor);
            document.body.style.setProperty("--ThemeColor", ThemeColor);
            var reg = /^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/;
            if (!reg.test(ThemeColor)) {
                return;
            }
            let newStr = ThemeColor.toLowerCase().replace(/\#/g, "");
            let len = newStr.length;
            if (len == 3) {
                let t = "";
                for (var i = 0; i < len; i++) {
                    t += newStr.slice(i, i + 1).concat(newStr.slice(i, i + 1));
                }
                newStr = t;
            }
            let arr = []; //将字符串分隔，两个两个的分隔
            for (var i = 0; i < 6; i = i + 2) {
                let s = newStr.slice(i, i + 2);
                arr.push(parseInt("0x" + s));
            }
            for (let i = 1; i < 10; i++) {
                let rgba = `rgba(${arr.join(",")},0.${i})`;
                document.body.style.setProperty(`--ThemeColor0${i}`, rgba);
            }
        },
    },
};
</script>
<style lang="less" scoped>
.guid {
    padding-top: 10px;
}
.back{
    width: 300px;
    height: 300px;
    background: var(--ThemeColor);
    margin: 20px 0;
    font-size: 20px;
    color: #fff;
    line-height: 300px;
    text-align: center;
}
</style>