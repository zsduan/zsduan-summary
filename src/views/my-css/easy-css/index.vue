<template>
    <section>
        <public-item v-for="(item, index) in list" :key="index" :title="item.title" :code="item.code">
        </public-item>
        <dzs-backtop  target=".el-main"></dzs-backtop>
    </section>
</template>
<script>
import { code1, code2, code3 } from './config';
export default {
    data() {
        return {
            list: [
                {
                    title: "设置滚动条宽度",
                    code: {
                        title: "代码示例",
                        code: code1,
                        lang: "css"
                    },
                    lang: "css"
                },
                {
                    title: "是否显示滚动条",
                    code: {
                        title: "代码示例",
                        code: code2,
                        lang: "css"
                    },
                    lang: "css"
                },
                {
                    title: "设置文字超出隐藏",
                    code: {
                        title: "代码示例",
                        code: code3,
                        lang: "css"
                    },
                },
            ]
        }
    }
}
</script>
<style lang="scss" scoped></style>