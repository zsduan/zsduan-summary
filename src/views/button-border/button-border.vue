<template>
    <div>
        <div class="page">
            <h2>基础动画样式样式</h2>
            <div class="item">
                <dzs-code title="基础样式" :value="code1"></dzs-code>
            </div>
            <h2>矩形效果</h2>
            <div class="item">
                <div class="btn">我是边框旋转的按钮</div>
                <dzs-code title="less" :value="code2"></dzs-code>
            </div>
            <h2>加载中</h2>
            <div class="item">
                <div class="circular">加载中</div>
                <dzs-code title="less" :value="code3"></dzs-code>
            </div>
            <h2>太极图</h2>
            <div class="item">
                <div class="taiji">
                    <div class="top"></div>
                    <div class="bottom"></div>
                </div>
                <dzs-code title="代码" :value="code4"></dzs-code>
            </div>
            <h2>源代码下载/查看</h2>
            <div class="item">
                <a target="_blank"
                    href="https://github.com/zsduan/zsduan-summary/blob/master/src/views/button-border.vue">下载/查看地址</a>
            </div>
        </div>
        <el-backtop :visibility-height="20"></el-backtop>
    </div>
</template>
<script>
import { code1, code2, code3, code4 } from "./config"
export default {
    data() {
        return {
            code1: code1,
            code2: code2,
            code3: code3,
            code4: code4,
        }
    }
}
</script>
<style lang="less" scoped>
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
        background: var(--ThemeColor);
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
        background: var(--ThemeColor);
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