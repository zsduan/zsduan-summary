<template>
    <div>
        <div class="page">
            <h2>基础用法</h2>
            <div class="item">
                <div class="tips-box">自定义组件与指定宽度</div>
                <dzs-table :tableHeader="TABALE_HEADER" :list="tableData" :operation="operation" @change="changeTabel">
                    <template #is_show="rowData">
                        <el-switch :value="rowData.row.is_show" :disabled="true"></el-switch>
                    </template>
                </dzs-table>
                <dzs-code title="源代码" :value="code1"></dzs-code>
            </div>
            <h2>分页与复选框</h2>
            <div class="item">
                <div class="tips-box">分页与左边有复选框</div>
                <dzs-table :tableHeader="TABALE_HEADER" :list="tableData" :operation="operation" :maxSize="2" :total="4"
                    :showCheckbox="true">
                    <template #is_show="rowData">
                        <el-switch :value="rowData.row.is_show" :disabled="true"></el-switch>
                    </template>
                </dzs-table>
                <dzs-code title="源代码" :value="code2"></dzs-code>
            </div>
            <h2>手机端</h2>
            <div class="item">
                <div class="is-phone-public">
                    <div class="phone-box">
                        <dzs-table :tableHeader="TABALE_HEADER" :list="tableData" :operation="operation" :maxSize="2"
                            :total="100" :showCheckbox="true">
                            <template #is_show="rowData">
                                <el-switch :value="rowData.row.is_show" :disabled="true"></el-switch>
                            </template>
                        </dzs-table>
                    </div>
                </div>
            </div>
            <h2>参数说明</h2>
            <div class="item">
                <dzs-table :tableHeader="descHeader" :list="descData" :showOperation="false"
                    :tableOptions="descTableOptions">
                </dzs-table>
            </div>
            <h2>更多功能</h2>
            <div class="item">
                <div class="tips-box">自己在源代码去看</div>
            </div>
            <h2>组件源代码下载</h2>
            <div class="item">
                <a target="_blank"
                    href="https://github.com/zsduan/zsduan-summary/blob/master/src/components/dzs-table/index.vue">表格组件下载地址</a>
            </div>
        </div>
        <el-backtop :visibility-height="20" ></el-backtop>
    </div>
</template>
<script>
import dzsTable from "@/components/dzs-table/index.vue";
import { TABALE_HEADER, operation, code1, code2 } from "./config";
import { descHeader, descData, descTableOptions } from "./desc";
export default {
    components: {
        dzsTable
    },
    data() {
        return {
            TABALE_HEADER: TABALE_HEADER,
            tableData: [
                {
                    ability: "vue",
                    sorts: "1",
                    is_show: false,
                    addtime: "2022-09-21 14:01:51"
                },
                {
                    ability: "react",
                    sorts: "2",
                    is_show: true,
                    addtime: "2022-09-21 14:01:51"
                },
                {
                    ability: "JavaScript",
                    sorts: "3",
                    is_show: true,
                    addtime: "2022-09-21 14:01:51"
                },
                {
                    ability: "nodejs",
                    sorts: "5",
                    is_show: false,
                    addtime: "2022-09-21 14:01:51"
                }
            ],
            operation: operation,
            code1: code1,
            code2: code2,
            descHeader: descHeader,
            descData: descData,
            descTableOptions: descTableOptions
        }
    },
    methods: {
        changeTabel(val) {
            this.$message({
                message: "点击了" + val.title,
                type: 'info'
            });
        }
    }
}
</script>
<style lang="less" scoped>
.page {
    .item {
        padding: 10px 0;

        a {
            display: inline-block;
            padding: 10px 20px;
            text-align: center;
            border: 1px solid #ccc;
            border-radius: 10px;
        }
    }
}
</style>