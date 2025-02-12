<template>
    <section>
        <public-item title="基本用法" :code="code1">
            <el-button type="primary" @click="isShow = true">打开弹窗</el-button>
            <dzs-dialog title="标题" :isShow.sync="isShow" >内容</dzs-dialog>
        </public-item>
        <public-item title="底部可以自行配置" :code="code2">
            <el-button type="primary" @click="isShowFooter = true">打开弹窗</el-button>
            <dzs-dialog title="标题" :isShow.sync="isShowFooter" >
                <div>有底部</div>
                <div slot="footer">
                    <el-button type="primary" @click="isShowFooter = false">确定</el-button>
                </div>
            </dzs-dialog>
        </public-item>
        <public-item title="参数说明" :list="tableData"></public-item>
        <public-item title="组件源代码查看" :links="links"></public-item>
        <dzs-backtop  target=".el-main"></dzs-backtop>
        <dzs-navigation-title></dzs-navigation-title>
    </section>
</template>
<script>
import { descData } from "./desc";
import { code1, code2 } from "./config";
import dzsDialog from "@/components/dzs-dialog/index.vue"
export default {
    components: {
        dzsDialog
    },
    data() {
        return {
            links: {
                href: "https://github.com/zsduan/zsduan-summary/blob/master/src/components/dzs-dialog/index.vue",
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
            isShow : false,
            isShowFooter : false
        }
    }
}
</script>
<style lang="scss" scoped></style>