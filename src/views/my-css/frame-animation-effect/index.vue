<template>
    <section>
        <public-item title="矩形效果" :code="code1">
            <div class="btn">我是边框旋转的按钮</div>
        </public-item>
        <public-item title="加载中" :code="code2">
            <div class="circular">加载中</div>
        </public-item>
        <public-item title="太极图" :code="code3">
            <div class="taiji">
                <div class="top"></div>
                <div class="bottom"></div>
            </div>
        </public-item>
        <dzs-backtop  target=".el-main"></dzs-backtop>
    </section>
</template>
<script>
import { code1, code2, code3 } from './config';
export default {
    data() {
        return {
            code1: {
                title: "代码示例",
                code: code1,
                lang: "css"
            },
            code2: {
                title: "代码示例",
                code: code2,
                lang: "css"
            },
            code3: {
                title: "代码示例",
                code: code3,
                lang: "css"
            },
        }
    }
}
</script>
<style lang="scss" scoped>
.btn {
    width: 150px;
    height: 50px;
    text-align: center;
    line-height: 50px;
    border-radius: 5px;
    position: relative;
    z-index: 3;
    overflow: hidden;
    background: #fff;

    &::before {
        content: " ";
        position: absolute;
        background: var(--themecolor);
        width: 200%;
        height: 200%;
        z-index: -2;
        left: 50%;
        top: 50%;
        transform-origin: 0 0;
        animation: rotate 3s infinite linear;
    }

    &::after {
        content: "";
        width: calc(150px - 5px);
        height: calc(50px - 5px);
        position: absolute;
        left: 2.5px;
        top: 2.5px;
        z-index: -1;
        background: #fff;
        border-radius: 5px;
    }
}

.circular {
    width: 150px;
    height: 150px;
    text-align: center;
    line-height: 150px;
    border-radius: 50%;
    position: relative;
    z-index: 3;
    overflow: hidden;
    background: #fff;

    &::before {
        content: " ";
        position: absolute;
        background: var(--themecolor);
        width: 200%;
        height: 200%;
        z-index: -2;
        left: 50%;
        top: 50%;
        transform-origin: 0 0;
        animation: rotate 2s infinite linear;
    }

    &::after {
        content: "";
        width: calc(150px - 5px);
        height: calc(150px - 5px);
        position: absolute;
        left: 2.5px;
        top: 2.5px;
        z-index: -1;
        background: #fff;
        border-radius: 50%;
    }
}

@keyframes rotate {
    to {
        transform: rotate(1turn);
    }
}

.taiji {
    width: 200px;
    height: 200px;
    outline: 3px solid #000;
    border-radius: 50%;
    background: linear-gradient(to right, #fff 50%, #000 50%);
    position: relative;
    z-index: 2;
    animation: rotate 2s infinite linear;

    .top {
        width: calc(200px / 2);
        height: calc(200px / 2);
        background: #fff;
        border-radius: 50%;
        position: absolute;
        left: 25%;
        top: 0;
        z-index: -1;

        &::after {
            content: "";
            display: block;
            width: calc(200px / 6);
            height: calc(200px / 6);
            background: #000;
            border-radius: 50%;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
    }

    .bottom {
        width: calc(200px / 2);
        height: calc(200px / 2);
        background: #000;
        border-radius: 50%;
        position: absolute;
        left: 25%;
        bottom: 0;
        z-index: -1;

        &::after {
            content: "";
            display: block;
            width: calc(200px / 6);
            height: calc(200px / 6);
            background: #fff;
            border-radius: 50%;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
    }
}
</style>