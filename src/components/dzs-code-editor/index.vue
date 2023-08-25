<template>
    <div>
        <div class="header-box">

        </div>
        <ace-editor ref="aceEditor" :value="editorContent" :theme="options.selectTheme" :lang="options.selectLang"
            :options="options.options" @init="editorInit" width="100%" height="400px"></ace-editor>
    </div>
</template>
<script>
import aceEditor from 'vue2-ace-editor';
import { language, theme, tabs, fontSizes, moreOptions , menuList } from "./config";
export default {
    props: {},
    components: {
        aceEditor
    },
    data() {
        return {
            editorContent: "",
            options: {
                langs: language,
                themes: theme,
                tabs: tabs,
                fontSizes: fontSizes,
                options: moreOptions,
                selectTheme: 'monokai',
                selectLang: 'html',
                selectTab: '4',
                readOnly: false,
            },
            menuList : menuList
        }
    },
    mounted() {
        this.init()
    },
    methods: {
        /**初始化*/
        init() {
            // 监听tab键 自动打出4个空格

        }, 
        /**初始化编辑器*/
        editorInit() {
            require('brace/ext/language_tools') // language extension prerequsite...
            require(`brace/mode/${this.options.selectLang}`) // 语言
            require(`brace/theme/${this.options.selectTheme}`) // 主题//snippet
        }
    }
}
</script>
<style lang="less" scoped></style>