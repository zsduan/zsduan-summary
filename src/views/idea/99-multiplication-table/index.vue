<template>
    <section>
        <public-item title="基础用法" :code="code1">
            <div class="multiplicationTable">
                <ul class="multiplicationTable-item" v-for="(item, index) in multiplicationTable" :key="index">
                    <li :class="[itm.is_invalid ? 'active' : '', itm.left == 1 ? 'left-border' : '', itm.right == 9 ? 'bottom-border' : '']"
                        v-for="(itm, idx) in item" :key="idx">{{ itm.equation }}</li>
                </ul>
            </div>
        </public-item>
        <public-item title="倒序" :code="code2">
            <div class="multiplicationTable">
                <ul class="multiplicationTable-item" v-for="(item, index) in multiplicationTable2" :key="index">
                    <li :class="[itm.is_invalid ? 'active' : '', itm.left == 1 ? 'left-border' : '', itm.right == 9 ? 'bottom-border' : '']"
                        v-for="(itm, idx) in item" :key="idx">{{ itm.equation }}</li>
                </ul>
            </div>
        </public-item>
        <public-item title="参数说明" :list="tableData"></public-item>
        <public-item title="源代码查看" :links="links"></public-item>
        <dzs-backtop  target=".el-main"></dzs-backtop>
        <dzs-navigation-title></dzs-navigation-title>
    </section>
</template>
<script>
import multiplicationTable99 from '@/utils/99-multiplication-table';
import { code1, code2 } from "./config";
import {tableData} from "./desc.js"
export default {
    data() {
        return {
            code1: {
                title: "代码示例",
                code: code1,
                lang: "js"
            },
            code2: {
                title: "代码示例",
                code: code2,
                lang: "js"
            },
            multiplicationTable: [],
            multiplicationTable2: [],
            links : {
                href : "https://github.com/zsduan/zsduan-summary/blob/master/src/utils/99-multiplication-table.js",
                title : "源码"
            },
            tableData
        }
    },
    mounted() {
        multiplicationTable99({
            success: (res) => {
                this.multiplicationTable = res;
            },
        });
        multiplicationTable99({
            is_empty: false,
            success: (res) => {
                this.multiplicationTable2 = res;
            },
        });
    },
}
</script>
<style lang="scss">
.multiplicationTable {
    display: flex;

    ul {
        li {
            width: 90px;
            height: 30px;
            line-height: 30px;
            padding-left: 5px;
        }

        .active {
            border-top: 1px solid #666;
            border-right: 1px solid #666;
        }

        .left-border {
            border-left: 1px solid #666;
        }

        .bottom-border {
            border-bottom: 1px solid #666;
        }
    }
}
</style>