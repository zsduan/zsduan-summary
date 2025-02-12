<template>
    <section>
        <public-item title="PC端 表格组件展示">
            <dzs-table :tableHeader="tableHeader" :list="tableData" :operation="operation" :maxSize="maxSize"
                :total="total" :tableOptions="tableOptions" :showCheckbox="showCheckbox" @change="changeTabel">
                <template #is_show="rowData">
                    <el-switch :value="rowData.row.is_show" :disabled="true"></el-switch>
                </template>
            </dzs-table>
        </public-item>
        <public-item title="手机端" :code="code1">
            <div class="phone-public">
                <dzs-table :tableHeader="tableHeader" :list="tableData" :operation="operation" :maxSize="maxSize"
                    :total="total" :tableOptions="tableOptions" :operationOption="operationOption" :showCheckbox="showCheckbox" @change="changeTabel">
                    <template #is_show="rowData">
                        <el-switch :value="rowData.row.is_show" :disabled="true"></el-switch>
                    </template>
                </dzs-table>
            </div>
        </public-item>
        <public-item title="参数说明" :list="descData"></public-item>
        <public-item title="组件源代码查看" :links="links"></public-item>
        <dzs-backtop  target=".el-main"></dzs-backtop>
        <dzs-navigation-title></dzs-navigation-title>
    </section>
</template>
<script>
import dzsTable from "@/components/dzs-table/index.vue";
import { TABALE_HEADER, TABALE_DATA, operation , code1} from "./config.js";
import {descData} from "./desc.js"
export default {
    components: {
        dzsTable
    },
    data() {
        return {
            links: {
                href: "https://github.com/zsduan/zsduan-summary/blob/master/src/components/dzs-table/index.vue",
                title: "组件源码"
            },
            tableHeader: TABALE_HEADER,
            tableData: TABALE_DATA,
            operation: operation,
            total: 100,
            maxSize: 10,
            showCheckbox: true,
            tableOptions: {
                'row-key': "key",
                'default-expand-all': true,
                border: true,
                'tree-props': {
                    children: 'children',
                    hasChildren: 'hasChildren'
                }
            },
            operationOption : {
                fixed : 'right'
            },
            descData,
            code1: {
                title: "代码示例",
                code: code1,
                lang: "js"
            },
        }
    },
    mounted() {

    },
    methods: {
        changeTabel(e) {
            this.$message.success("Click : " + JSON.stringify(e))
        }
    },
};
</script>
<style lang="scss" scoped></style>