<template>
    <section>
        <public-item title="基本用法" :code="code1">
            <template v-for="(item, index) in list">
                <dzs-article-item :item="item"></dzs-article-item>
            </template>
        </public-item>
        <public-item title="设置方向" :code="code2">
            <template v-for="(item, index) in list">
                <dzs-article-item :item="item" placement="left"></dzs-article-item>
            </template>
        </public-item>
        <public-item title="支持设置video背景" :code="code3">
            <template v-for="(item, index) in videoList">
                <dzs-article-item :item="item"></dzs-article-item>
            </template>
        </public-item>
        <public-item title="横向滚动" :code="code4">
            <template v-for="(item, index) in list">
                <dzs-article-item :item="item" :scroll="true"></dzs-article-item>
            </template>
        </public-item>
        <public-item title="底部不显示" :code="code5">
            <template v-for="(item, index) in list">
                <dzs-article-item :item="item" :show-footer="false"></dzs-article-item>
            </template>
        </public-item>
        <public-item title="自定义插槽" :code="code6">
            <template v-for="(item, index) in list">
                <dzs-article-item :item="item" :show-footer="false">
                    <template v-slot:header>
                        <div class="header-box">
                            <div class="header-item" style="color : red ;">自定义顶部 {{item.title}}</div>
                        </div>
                    </template>
                    <template v-slot:footer>
                        <div class="footer-box">
                            <div class="footer-item" style="color : red ;">自定义底部 {{item.time}}</div>
                        </div>
                    </template>
                </dzs-article-item>
            </template>
        </public-item>
        <public-item title="手机端" :code="code1">
            <div class="phone-public">
                <div class="phone-box">
                    <template v-for="(item, index) in list">
                        <dzs-article-item :item="item"></dzs-article-item>
                    </template>
                    <template v-for="(item, index) in list">
                        <dzs-article-item :item="item" :scroll="true"></dzs-article-item>
                    </template>
                </div>
            </div>
        </public-item>
        <public-item title="参数说明" :list="tableData"></public-item>
        <public-item title="组件源代码查看" :links="links"></public-item>
        <dzs-backtop target=".el-main"></dzs-backtop>
    </section>
</template>
<script>
import { descData } from "./desc";
import { code1, code2 , code3 , code4 , code5 , code6 } from "./config";
import dzsArticleItem from "@/components/dzs-article-item";
export default {
    components: { dzsArticleItem },
    data() {
        return {
            links: {
                href: "https://github.com/zsduan/zsduan-summary/blob/master/src/components/dzs-article-item/index.vue",
                title: "组件源码"
            },
            tableData: descData,
            code1: {
                title: "代码示例",
                code: code1,
                lang: "vue"
            },
            code2: {
                title: "代码示例",
                code: code2,
                lang: "vue"
            },
            code3: {
                title: "代码示例",
                code: code3,
                lang: "vue"
            },
            code4: {
                title: "代码示例",
                code: code4,
                lang: "vue"
            },
            code5: {
                title: "代码示例",
                code: code5,
                lang: "vue"
            },
            code6: {
                title: "代码示例",
                code: code6,
                lang: "vue"
            },
            list: [
                {
                    title: '几种常见的前端攻击',
                    desc: '大家都知道，保证网站的安全是十分重要的，一旦网站被攻陷，就有可能造成用户的经济损失，隐私泄露',
                    img: [
                        'https://anran233.com/img/file-1725068462037.png',
                        'https://anran233.com/img/file-1709257810697.jpg',
                        'https://anran233.com/img/file-1725068462037.png',
                        'https://anran233.com/img/file-1709257810697.jpg',
                        'https://anran233.com/img/file-1725068462037.png',
                        'https://anran233.com/img/file-1709257810697.jpg',
                        'https://anran233.com/img/file-1725068462037.png',
                        'https://anran233.com/img/file-1709257810697.jpg'],
                    time: '2025-03-26 12:00:00',
                    author: 'zsduan',
                    href: 'https://anran233.com/details/0a826986-f134-da6a-9f35-373bd1c8fc46',
                    tag: ['javaScript', 'html'],
                    star: '22'
                },
            ],
            videoList: [
                {
                    title: '几种常见的前端攻击',
                    desc: '大家都知道，保证网站的安全是十分重要的，一旦网站被攻陷，就有可能造成用户的经济损失，隐私泄露',
                    img: [
                        'https://anran233.com/img/file-1725068462037.png',],
                    time: '2025-03-26 12:00:00',
                    author: 'zsduan',
                    href: 'https://anran233.com/details/0a826986-f134-da6a-9f35-373bd1c8fc46',
                    tag: ['javaScript', 'html'],
                    star: '22',
                    isVideo: true
                }
            ]
        }
    },
    methods: {

    }
}
</script>
