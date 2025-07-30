<template>
    <div class="markdown-box" :style="{ height: height }">
        <mavon-editor :codeStyle="codeStyle" :placeholder="placeholder" v-if="!isPreview" :toolbars="mdOption"
            v-model="content" @change="changeVaule" @sava="sava" @imgAdd="$imgAdd" :ishljs="ishljs" :fontSize="fontSize"
            v-bind="options" :previewBackground="previewBackground"></mavon-editor>
        <mavon-editor :class="{aiStream : aiStream}" :codeStyle="codeStyle" v-else class="content" :value="content" :navigation="false"
            :toolbarsFlag="false" :subfield="false" defaultOpen="preview"
            :previewBackground="previewBackground"></mavon-editor>
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
import mavonEditor from 'mavon-editor';
import Vue from 'vue';
Vue.use(mavonEditor)
export default {
    name: "dzsMarkdown",
    model: {
        prop: "value",
        event: "update:value",
    },
    props: {
        // 输入框的提示词
        placeholder: {
            type: String,
            default: "请输入..."
        },
        /**样式*/
        codeStyle: {
            type: String,
            default: "dark"
        },
        options: {
            type: Object,
            default: () => {
                return {}
            }
        },
        value: {
            type: String,
            default: () => {
                return "";
            },
        },
        height: {
            type: String,
            default: () => {
                return "auto";
            },
        },
        width: {
            type: String,
            default: () => {
                return "100%";
            },
        },
        ishljs: {
            type: Boolean,
            default: () => {
                return true;
            },
        },
        fontSize: {
            type: String,
            default: () => {
                return '14px'
            }
        },
        /**是否只需要预览*/
        isPreview: {
            type: Boolean,
            default: () => {
                return false;
            },
        },
        /**预览背景*/
        previewBackground: {
            type: String,
            default: () => {
                return '#ffffff'
            }
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

        /**大模型 流数据*/
        streamList: {
            type: Array,
            default: function () {
                return []
            }
        },
        /**是否开启 AI 流模式*/
        aiStream: {
            type: Boolean,
            default: ()=>{
                return false
            }
        },
    },
    watch: {
        value: {
            handler(newValue, oldValue) {
                this.content = newValue;
            },
            deep: true,
            immediate: true
        },
        markdownOption: {
            handler(newValue) {
                this.mdOption = newValue;
            },
            deep: true,
            immediate: true
        },
        aiStream : {
            handler(newValue) {
                newValue && this.startTypingEffect()
            },
            deep: true,
            immediate: true
        },
        
    },
    data() {
        return {
            content: "",
            mdOption: this.markdownOption,
            resultText: "",
            printTimer : null,
        };
    },
    mounted() { },
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
        /**打印机效果*/
        startTypingEffect(printIndex = 0) {
            let data = {};
            this.printTimer = setInterval(() => {
                if (this.streamList[printIndex]) {
                    data = this.streamList[printIndex];
                    clearInterval(this.printTimer);
                    this.printTimer = null;
                    if (data.isEnd) {
                        this.printEnd()
                        return;
                    }
                    requestAnimationFrame(printNextChar);
                }
            }, 50);
            const printNextChar = () => {
                if (!data.message) {
                    this.startTypingEffect(printIndex + 1);
                    return;
                }
                if (data.message.length === 0) {
                    data.end && this.printEnd();
                    this.startTypingEffect(printIndex + 1)
                    return;
                }
                let char = data.message[0];
                data.message = data.message.slice(1);
                this.resultText += char;
                this.content = this.resultText;
                requestAnimationFrame(printNextChar);
                data.end && this.printEnd();
            };

        },

        /**打印结束*/
        printEnd() {
            setTimeout(() => {
                this.content = this.resultText
            }, 500);
        },
    },
};
</script>
<style lang="scss" scoped>
.markdown-box {
    :deep(.v-note-wrapper) {
        height: 100%;
        z-index: 10;
    }

    :deep(.markdown-body .hljs) {
        padding: 10px;
        border-radius: 10px;
    }
    .aiStream{
        min-width: none;
        min-height: auto;
    }
}
</style>