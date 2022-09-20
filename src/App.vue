<!--
 * @Author: zs.duan
 * @Date: 2022-09-20 13:49:02
 * @LastEditors: zs.duan
 * @LastEditTime: 2022-09-20 16:58:17
 * @FilePath: \vue2+js+eui+template\src\App.vue
-->
<template>
    <div id="app">
        <router-view />
    </div>
</template>

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
    
}
</style>
