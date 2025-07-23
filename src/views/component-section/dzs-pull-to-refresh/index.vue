<template>
    <section>
        <public-item title="基础用法" :code="code1">
            <div class="phone-public">
                <div class="phone-box">
                    <dzs-pull-to-refresh ref="refresh" :enableReachBottom="true" :onReachBottom="onReachBottom" :onPullDownRefresh="onPullDownRefresh">
                        <template #header>
                            <dzs-notice-bar text="下拉刷新仅手机端有效" ></dzs-notice-bar>
                        </template>
                        <div v-for="(item, index) in items" :key="index" class="item">
                            {{ item }}
                        </div>
                    </dzs-pull-to-refresh>
                </div>
            </div>
        </public-item>
        <public-item title="参数说明" :list="tableData"></public-item>
        <public-item title="组件源代码查看" :links="links"></public-item>
        <dzs-backtop target=".el-main"></dzs-backtop>
    </section>
</template>
<script>
import dzsPullToRefresh from "@/components/dzs-pull-to-refresh/index.vue";
import dzsNoticeBar from "@/components/dzs-notice-bar/index.vue";
import { tableData } from "./desc.js";
import { code1 } from "./config.js";
export default {
    components: {
        dzsPullToRefresh,
        dzsNoticeBar
    },
    data() {
        return {
            items: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5' , 'Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5' , 'Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'],
            links: {
                href: "https://github.com/zsduan/zsduan-summary/blob/master/src/components/dzs-pull-to-refresh/index.vue",
                title: "组件源码"
            },
            tableData,
            code1: {
                title: "代码示例",
                code: code1,
                lang: "vue"
            },
        }
    },
    methods: {
        onPullDownRefresh(){
            console.log("正在执行下拉刷新");
            setTimeout(() => {
                this.$refs.refresh.stopPullDownRefresh()
            }, 3000)
        },
        onReachBottom(){
            console.log("正在执行上拉加载");
            setTimeout(() => {
                this.$refs.refresh.stopLoadMore()
            }, 3000)

        }
    }
}
</script>
<style lang="scss" scoped>
.item {
    padding: 15px;
    border-bottom: 1px solid #eee;
}

</style>