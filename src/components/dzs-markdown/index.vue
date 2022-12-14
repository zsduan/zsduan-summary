<!--
 * @Author: zs.duan
 * @Date: 2022-12-05 17:28:11
 * @LastEditors: zs.duan
 * @LastEditTime: 2022-12-05 18:24:37
 * @FilePath: \vue2+elui+template\src\components\dzs-markdown\index.vue
-->
<template>
    <div class="markdown-box" :style="{height:height,}">
        <mavon-editor :toolbars="markdownOption" v-model="content" @change="changeVaule" @sava="sava" @imgAdd="$imgAdd"></mavon-editor>
    </div>
</template>
<script>
/*
 * @name markdown 组件
 * @prop value string 默认值 改变值 可以使用 v-model / update:value
 * @prop height String default 500px 富文本高度
 * @prop width string default 100% 富文本宽度
 * @prop markdownOption的配置 详情见 https://github.com/hinesboy/mavonEditor
 */
import "mavon-editor/dist/css/index.css";
export default {
    name: "dzs-markdown",
    model: {
        prop: "value",
        event: "update:value",
    },
    props: {
        value: {
            type: String,
            default: () => {
                return "";
            },
        },
        height: {
            type: String,
            default: () => {
                return "500px";
            },
        },
        width: {
            type: String,
            default: () => {
                return "100%";
            },
        },
        markdownOption: {
            type: Object,
            default: () => {
                return {
                    bold: true, // 粗体
                    italic: true, // 斜体
                    header: true, // 标题
                    underline: true, // 下划线
                    strikethrough: true, // 中划线
                    mark: true, // 标记
                    superscript: true, // 上角标
                    subscript: true, // 下角标
                    quote: true, // 引用
                    ol: true, // 有序列表
                    ul: true, // 无序列表
                    link: true, // 链接
                    imagelink: true, // 图片链接
                    code: true, // code
                    table: true, // 表格
                    fullscreen: true, // 全屏编辑
                    readmodel: true, // 沉浸式阅读
                    htmlcode: true, // 展示html源码
                    help: true, // 帮助
                    /* 1.3.5 */
                    undo: true, // 上一步
                    redo: true, // 下一步
                    trash: true, // 清空
                    save: true, // 保存（触发events中的save事件）
                    /* 1.4.2 */
                    navigation: true, // 导航目录
                    /* 2.1.8 */
                    alignleft: true, // 左对齐
                    aligncenter: true, // 居中
                    alignright: true, // 右对齐
                    /* 2.2.1 */
                    subfield: true, // 单双栏模式
                    preview: true, // 预览
                };
            },
        },
    },
    watch: {
        value: {
            handler(newValue, oldValue) {
                this.content = newValue;
            },
            deep:true,
            immediate:true
        },
    },
    data() {
        return {
            content: "",
        };
    },
    mounted() {},
    methods: {
        changeVaule(e) {
            this.$emit("update:value", this.content);
            this.$emit("change", e);
        },
        sava() {
            this.$emit("update:value", this.content);
            this.$emit("sava", e);
        },
        $imgAdd(pos, $file) {
            let formdata = new FormData();
            formdata.append("image", $file);
        },
    },
};
</script>
<style lang="less" scoped>
.markdown-box {
    :deep(.v-note-wrapper) {
        height: 100%;
        z-index: 10;
    }
}
</style>