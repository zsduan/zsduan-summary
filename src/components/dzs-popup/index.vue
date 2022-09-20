<!--
 * @Author: zs.duan
 * @Date: 2022-09-20 16:23:08
 * @LastEditors: zs.duan
 * @LastEditTime: 2022-09-20 17:14:33
 * @FilePath: \vue2+js+eui+template\src\components\dzs-popup\index.vue
-->
<template>
    <el-dialog v-bind="{...dialogProps}" :title="title" :visible="isShow" :width="width" @close="close" @open="open">
        <slot></slot>

        <div slot="footer">
            <slot name="footer"></slot>
        </div>
    </el-dialog>
</template>

<script>
/*
 *@props : title 弹窗标题
 *@props : isShow  是否显示
 *
 *@methods :close 关闭弹窗
 *
 */
export default {
    name: "dzs-popup",
    props: {
        title: {
            //提示框标题
            type: String,
            default: () => {
                return "提示";
            },
        },
        isShow: {
            type: Boolean,
            default: () => {
                return false;
            },
        },
        width: {
            type: String,
            default: () => {
                return "50%";
            },
        },
        dialogProps: {
            type: Object,
            default: () => {
                return {};
            },
        },
    },
    data() {
        return {};
    },
    methods: {
        close() {
            console.log("欧文没");
            this.$emit("update:isShow", false);
            this.$emit("close");
        },
        open() {
            this.$emit("open");
        },
    },
};
</script>

<style lang="less" scoped>
@import "../../assets/css/reset.less";

.pup-wrop {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 10;
    animation-name: showWrop;
    animation-duration: 0.7s;

    .content {
        background-color: #fff;
        min-width: 520px;
        min-height: 200px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        border-radius: 5px;
        padding: 70px 40px 60px;
        padding-bottom: 60px;
        box-sizing: border-box;
        box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.4);
        border-radius: 5px;
        overflow: hidden;

        .center {
            max-height: 70vh;
            overflow-y: auto;
            -ms-overflow-style: none;
            /* IE 10+ */
            scrollbar-width: none;
            /* Firefox */
            &::-webkit-scrollbar {
                /* Chrome Safari */
                display: none;
            }
        }

        .title {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            font-size: 24px;
            line-height: 50px;
            background-color: #f0f3fa;
            text-align: center;
            .not-select();
        }

        .close {
            position: absolute;
            right: 20px;
            top: 15px;
            cursor: pointer;
            width: 20px;
            height: 20px;

            img {
                display: block;
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
    }
}

@keyframes showWrop {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

@media screen and (max-width: 768px) {
    .pup-wrop {
        min-width: 100%;
        min-height: 100%;
        .content {
            min-width: 100%;
            min-height: 100%;
            padding: 70px 10px 60px;
        }
    }
}
</style>
