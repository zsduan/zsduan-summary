<template>
    <div>
        <div class="page">
            <h2>生成乘法表 填写空数组</h2>
            <div class="item">
                <div class="multiplicationTable">
                    <ul class="multiplicationTable-item" v-for="(item, index) in multiplicationTable" :key="index">
                        <li :class="[itm.is_invalid ? 'active' : '', itm.left == 1 ? 'left-border' : '', itm.right == 9 ? 'bottom-border' : '']"
                            v-for="(itm, idx) in item" :key="idx">{{ itm.equation }}</li>
                    </ul>
                </div>
                <dzs-code title="使用方法" :value="code1"></dzs-code>
            </div>
            <h2>生成乘法表 不填写空数组</h2>
            <div class="item">
                <div class="multiplicationTable">
                    <ul class="multiplicationTable-item" v-for="(item, index) in multiplicationTable2" :key="index">
                        <li :class="[itm.is_invalid ? 'active' : '', itm.left == 1 ? 'left-border' : '', itm.right == 9 ? 'bottom-border' : '']"
                            v-for="(itm, idx) in item" :key="idx">{{ itm.equation }}</li>
                    </ul>
                </div>
                <dzs-code title="使用方法" :value="code2"></dzs-code>
            </div>
            <h2>源代码下载/查看</h2>
            <div class="item">
                <a target="_blank"
                    href="https://github.com/zsduan/zsduan-summary/blob/master/src/utils/99-multiplication-table.js">下载/查看地址</a>
            </div>
        </div>
        <el-backtop :visibility-height="20"></el-backtop>
    </div>
</template>
<script>
import { multiplicationTable99 } from "../../utils/99-multiplication-table";
import { code1, code2 } from "./config";
export default {
    data() {
        return {
            code1: code1,
            code2: code2,
            multiplicationTable: [],
            multiplicationTable2: [],
        };
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
    methods: {},
};
</script>
<style lang="less" scoped>
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