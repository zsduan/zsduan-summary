<template>
    <div class="code-box">
        <div class="header-box">
            <div class="title">{{ title }}</div>
            <div class="copy" @click="copyToClipboard" v-if="isShowCopy && value">复制</div>
        </div>
        <div v-dzs-list-open="is_open">
            <prism-editor v-if="value" class="my-editor" :readonly="true" v-model="value" :highlight="highlighter"
                line-numbers></prism-editor>
        </div>
        <div>
            <el-divider>
                <i class="el-icon el-icon-caret-bottom" v-if="!is_open"></i>
                <i class="el-icon el-icon-caret-top" v-if="is_open"></i>
                <el-button type="text" @click="is_open = !is_open">{{ is_open ? "隐藏代码" : "展开代码" }}</el-button>
            </el-divider>

        </div>
        <slot></slot>
    </div>
</template>
<script>
import { PrismEditor } from 'vue-prism-editor';
import 'vue-prism-editor/dist/prismeditor.min.css'; // import the styles somewhere

// import highlighting library  (you can use any library you want just return html string)
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-typescript';
import 'prismjs/themes/prism-tomorrow.css'; // import syntax highlighting styles

import { myCopy } from "@/utils/myCopy";

export default {
    name: "dzs-code",
    components: {
        PrismEditor
    },
    props: {
        title: {
            type: String,
            default: () => {
                return "";
            },
        },
        value: {
            type: String,
            default: () => {
                return ""
            }
        },
        isShowCopy: {
            type: Boolean,
            default: () => {
                return true
            }
        },
        open : {
            type : Boolean,
            default : false
        }
    },
    data() {
        return {
            is_open: false
        }
    },
    watch:{
        open:{
            handler(val){
                this.is_open = val
            },
            immediate:true
        }
    },
    methods: {
        copyToClipboard() {
            if (!this.value) {
                this.$notify({
                    message: '没有复制内容',
                    type: 'warning'
                });
                return;
            }
            myCopy({
                content: this.value,
                type: "Text",
                success: () => {
                    this.$notify({
                        message: '已经复制到剪贴板',
                        type: 'success'
                    });
                }
            })
        },
        highlighter(code) {
            return highlight(code, languages.js); // languages.<insert language> to return html with markup
        },
    }
};
</script>
<style lang="less" scoped>
.code-box {
    box-shadow: 0 4px 8px 6px rgba(7, 17, 21, 0.06);
    border: 10px;
    padding: 10px;
    margin: 10px 0;
    border-radius: 5px;

    .title {
        font-size: 16px;
        font-weight: 500;
    }

    .header-box {
        display: flex;
        justify-content: space-between;
        padding-bottom: 10px;

        .copy {
            cursor: pointer;

            &:hover {
                color: var(--ThemeColor)
            }
        }
    }

    .pre {
        font-weight: 500;
        font-size: 16px;
        line-height: 26px;
        width: 100%;
        overflow-x: auto;

        &::-webkit-scrollbar-thumb {
            /*滚动条里面小方块*/
            border-radius: 10px;
            box-shadow: inset 0 0 5px rgba(97, 184, 179, 0.1);
            background: #78b4b4;
        }

        &::-webkit-scrollbar-track {
            /*滚动条里面轨道*/
            box-shadow: inset 0 0 5px rgba(87, 175, 187, 0.1);
            border-radius: 10px;
            background: #ededed;
        }
    }
}

/* required class */
.my-editor {
    /* we dont use `language-` classes anymore so thats why we need to add background and text color manually */
    background: #2d2d2d;
    color: #ccc;

    /* you must provide font-family font-size line-height. Example: */
    font-family: Fira code, Fira Mono, Consolas, Menlo, Courier, monospace;
    font-size: 14px;
    line-height: 1.5;
    padding: 5px;
}

/* optional class for removing the outline */
.prism-editor__textarea:focus {
    outline: none;
}

.el-icon {
    font-size: 18px;
    cursor: pointer;
    color: var(--ThemeColor);
}

:deep(.el-button--text) {
    color: var(--ThemeColor);
}
</style>