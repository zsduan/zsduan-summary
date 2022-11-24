<!--
 * @Author: zs.duan
 * @Date: 2022-09-20 13:49:02
 * @LastEditors: zs.duan
 * @LastEditTime: 2022-11-24 15:36:59
 * @FilePath: \vue2+elui+template\src\App.vue
-->
<template>
    <div id="app">
        <router-view />
    </div>
</template>

<script>
export default {
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
    --ThemeColor: #0065ff;
    --fontColor: #333;
}
::selection {
    background: var(--ThemeColor);
    color: #fff;
}
.page {
    width: 1200px;
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


</style>
