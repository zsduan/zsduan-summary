<!--
 * @Author: zs.duan
 * @Date: 2022-09-20 13:49:02
 * @LastEditors: zs.duan
 * @LastEditTime: 2023-01-15 09:31:40
 * @FilePath: \vue2+js+eui+template\src\App.vue
-->
<template>
    <div id="app">
        <router-view />
    </div>
</template>

<script>
import watermark from "./utils/watermark.js";
import ua from "@/utils/ua";
import setTime from "@/utils/setTime";
export default {
    created() {
        watermark({
            watermark_txt : `<p>zsduan的个人总结</p><p>${ua().browserName} ${ua().browserVersion}</p><p>${setTime()}</p>`,
            isHtml : true,
            watermark_color : "rgba(0,0,0,0.1)",
        })
    },
    mounted(){
        setTimeout(() => {
            let ThemeColor = window.localStorage.getItem("ThemeColor");
            if (!ThemeColor) {
                window.localStorage.setItem("ThemeColor", "#0065ff");
                ThemeColor = "#0065ff";
            }
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
            
        }, 200);
    }
}
</script>

<style lang="less">
@import url("./assets/css/reset.css");
:root {
    --ThemeColor: var(--ThemeColor , #0065ff);
    --fontColor: #333;
}
::selection {
    background: var(--ThemeColor);
    color: #fff;
}
.page {
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    h2 {
        font-size: 20px;
        padding-top: 30px;
    }
    .tips-box {
        font-size: 16px;
        color: var(--fontColor);
        line-height: 20px;
        padding: 10px 0;
    }
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

@media screen and (max-width : 1200px) {
    .page{
        padding: 0 20px;
    }
}

@media screen and (max-width : 768px) {
    .page{
        padding: 0 10px;
        .item {
            a{
                display: block;
                margin-top: 10px;
            }
        }
    }
}

</style>
