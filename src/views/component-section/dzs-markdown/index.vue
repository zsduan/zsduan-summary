<template>
    <section>
        <public-item title="基础用法" :code="code1" tips="基于 mavon-editor 2.10.4">
            <dzs-markdown v-model="value" height="500px"></dzs-markdown>
        </public-item>
        <public-item title="预览使用" :code="code1">
            <dzs-markdown v-model="value" :isPreview="true" height="500px"></dzs-markdown>
        </public-item>
        <public-item title="切换主题" :code="code1">
            <dzs-markdown v-model="value" :isPreview="true" codeStyle="github" height="500px"></dzs-markdown>
        </public-item>
        <public-item title="支持大模型流式读取" :code="code1">
            <dzs-markdown :aiStream="true" :streamList="resultTextList" :isPreview="true"></dzs-markdown>
        </public-item>
        <public-item title="参数说明" :list="tableData"></public-item>
        <public-item title="组件源代码查看" :links="links"></public-item>
        <dzs-backtop target=".el-main"></dzs-backtop>
    </section>
</template>
<script>
import dzsMarkdown from "@/components/dzs-markdown/index.vue";
import { code1 } from "./config.js";
import { tableData } from "./desc.js";
export default {
    components: {
        dzsMarkdown
    },
    data() {
        return {
            value: `# Vue2 + Vue CLI 打包成 NPM 包（支持组件 + 工具类）

### 本指南将带你从零开始，使用 Vue CLI 打包一个 支持组件 + 工具类 的 npm 包，并提供完整的打包脚本、配置文件、版本限制提示等。

### 这里是用 zsduan-ui 做的一个示例 你可以把 zsduan-ui 替换成自己npm包的名称

## 前期工作

### 用vue cli 创建项目 请选用vue2 ts 版本
### Q:为什么用ts？A:因为你不确定创建的npm包是否会用到ts 所以选择ts

\`\`\`bash
vue create vue-npm-demo 
cd vue-npm-demo
npm i
npm run serve
\`\`\`
|column1|column2|column3|
|-|-|-|
|content1|content2|content3|
`,
            agentValue: "",
            code1: {
                title: "代码示例",
                code: code1,
                lang: "vue"
            },
            tableData,
            links: {
                href: "https://github.com/zsduan/zsduan-summary/blob/master/src/components/dzs-markdown/index.vue",
                title: "组件源码"
            },
            isEnd: false,
            resultText: "",
            printTimer: null,
            resultTextList: []
        }
    },
    mounted() {
        this.changeVaule();
        setTimeout(() => {
            this.startTypingEffect();
        }, 500)
    },
    methods: {
        /**模拟大模型输入*/
        changeVaule() {
            let i = 0;
            let timer = setInterval(() => {
                this.resultTextList.push({
                    end: false,
                    message: this.value.slice(i, i + 10)
                })
                i += 10;
                if (i >= this.value.length) {
                    clearInterval(timer);
                    timer = null;
                    this.resultTextList.push({
                        end: true,
                        message: ""
                    })
                }
            }, 300)
        },
    }
}
</script>
<style lang="scss" scoped></style>