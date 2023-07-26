<!--
 * @Author: zs.duan
 * @Date: 2022-09-20 16:23:08
 * @LastEditors: zs.duan
 * @LastEditTime: 2022-09-21 10:13:03
 * @FilePath: \vue2+js+eui+template\src\components\dzs-popup\index.vue
-->
<template>
    <el-dialog v-dialogDrag v-bind="{ ...options }" :visible="isShow" :width="width" :fullscreen="is_fullscreen"
        @opened="opened" @closed="opened" @close="close" @open="open">
        <template #title>
            <div class="title-box">
                <slot name="title"></slot>
                <span class="title" v-if="!$slots.title">{{ title }}</span>
                <div v-if="showFullscreen">
                    <i class="icon el-icon-full-screen" v-if="!is_fullscreen" @click="openFullscreen"></i>
                    <div class="close-fullscreen" v-else @click="closeFullscreen">
                        <svg t="1687859073485" class="icon" viewBox="0 0 1024 1024" version="1.1"
                            xmlns="http://www.w3.org/2000/svg" p-id="2283" width="200" height="200">
                            <path
                                d="M301.61271492 7.07051506c-25.24647427 0-42.07745737 16.83098314-42.07745737 42.07745742v189.34855691c0 12.62323709-8.41549115 21.03872822-21.03872816 21.03872816H49.14797248c-25.24647427 0-42.07745737 16.83098314-42.07745742 42.07745737s16.83098314 42.07745737 42.07745742 42.07745647h189.34855691C297.40496887 343.69017139 343.69017139 297.40496887 343.69017139 238.49652939V49.14797248c0-25.24647427-16.83098314-42.07745737-42.07745647-42.07745742zM785.50347061 343.69017139H974.85202752c25.24647427 0 42.07745737-16.83098314 42.07745742-42.07745647s-16.83098314-42.07745737-42.07745742-42.07745737h-189.34855691c-12.62323709 0-21.03872822-8.41549115-21.03872816-21.03872816V49.14797248c0-25.24647427-16.83098314-42.07745737-42.07745737-42.07745742s-42.07745737 16.83098314-42.07745647 42.07745742v189.34855691C680.30982861 297.40496887 726.59503113 343.69017139 785.50347061 343.69017139zM238.49652939 680.30982861H49.14797248c-25.24647427 0-42.07745737 16.83098314-42.07745742 42.07745647s16.83098314 42.07745737 42.07745742 42.07745737h189.34855691c12.62323709 0 21.03872822 8.41549115 21.03872816 21.03872816V974.85202752c0 25.24647427 16.83098314 42.07745737 42.07745737 42.07745742s42.07745737-16.83098314 42.07745647-42.07745742v-189.34855691C343.69017139 726.59503113 297.40496887 680.30982861 238.49652939 680.30982861zM974.85202752 680.30982861h-189.34855691c-58.90843962 0-105.193643 46.28520248-105.193642 105.193642V974.85202752c0 25.24647427 16.83098314 42.07745737 42.07745647 42.07745742s42.07745737-16.83098314 42.07745737-42.07745742v-189.34855691c0-12.62323709 8.41549115-21.03872822 21.03872816-21.03872816H974.85202752c25.24647427 0 42.07745737-16.83098314 42.07745742-42.07745737s-16.83098314-42.07745737-42.07745742-42.07745647z"
                                p-id="2284" fill="#333"></path>
                        </svg>
                    </div>
                </div>
            </div>
        </template>
        <slot></slot>

        <div slot="footer" v-if="!$slots.footer">
            <slot name="footer"></slot>
        </div>
    </el-dialog>
</template>

<script>
/**
 * 自定义组件弹窗 可以拖动 可以控制大小
 * @props : title 弹窗标题
 * @props : isShow  是否显示
 * @props : width 宽度
 * @props : fullscreen 是否全屏
 * @props : showFullscreen 是否显示全屏按钮
 * @props : options 饿了吗ui原生属性
 *
 * @method close 关闭弹窗
 * @method open 打开弹窗
 * @method opened 打开弹窗后
 * @method closed 关闭弹窗后
 *
 */
import './drag.js' // 弹窗 拖动、放大、缩小
export default {
    name: "dzs-popup",
    props: {
        title: {
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
        options: {
            type: Object,
            default: () => {
                return {};
            },
        },
        fullscreen: {
            type: Boolean,
            default: () => {
                return false
            }
        },
        showFullscreen: {
            type: Boolean,
            default: () => {
                return true
            }
        }
    },
    data() {
        return {
            is_fullscreen: false
        };
    },
    watch: {
        fullscreen: {
            handler(val) {
                this.is_fullscreen = val;
            },
            immediate: true,
        }
    },
    methods: {
        close() {
            this.$emit("update:isShow", false);
            this.$emit("close");
        },
        open() {
            this.$emit("open");
        },
        openFullscreen() {
            this.is_fullscreen = true;
        },
        closeFullscreen() {
            this.is_fullscreen = false;
        },
        opened() {
            this.$emit("opened")
        },
        closed() {
            this.$emit("closed")
        }
    },
};
</script>

<style lang="less" scoped>
.title-box {
    display: flex;
    justify-content: space-between;
    width: calc(100% - 40px);

    .icon {
        font-size: 20px;
        cursor: pointer;
    }

    .title {
        font-size: 18px;
    }

    .close-fullscreen {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 20px;
        height: 20px;
        cursor: pointer;

        svg {
            width: 18px;
            height: 18px;
        }
    }
}</style>
