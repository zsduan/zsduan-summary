<template>
    <section>
        <dzs-search-form :options="searchOption" @onSearch="onSearch" @onReset="onReset"></dzs-search-form>
        <dzs-header-button :rules="rules" @btnClick="btnClick"></dzs-header-button>
        <dzs-table :tableHeader="tableHeaderOption" :list="tableData" :total="pageInfo.total"
            :operation="tableActionOption" @change="changeTable"></dzs-table>
        <dialog-form :isShow="isShow" :dialogData="dialogData" @onHoldSearch="onSearch" @close="closeDialog"></dialog-form>
    </section>
</template>
<script>
/**
 * 以下这3个组件 建议全局引用 因为后台都会用到
 * */
import dzsSearchForm from "@/components/dzs-search-form";
import dzsHeaderButton from "@/components/dzs-header-button";
import dzsTable from "@/components/dzs-table";

import dialogForm from "./components/dialog-form"
import { tableHeaderOption, tableActionOption } from "./config"
export default {
    components: {
        dzsSearchForm,
        dzsHeaderButton,
        dzsTable,
        dialogForm
    },
    computed: {
        searchOption() {
            return {
                formProps: {
                    labelPosition: 'left',
                    labelWidth: '100px',
                },
                formItem: [
                    {
                        label: '姓名',
                        key: 'name',
                        type: 'input',
                    },
                    {
                        label: '年龄',
                        key: 'age',
                        type: 'input',
                    },
                    {
                        label: '性别',
                        key: 'sex',
                        type: 'select',
                        children: [
                            {
                                label: '男',
                                value: '男'
                            },
                            {
                                label: '女',
                                value: '女'
                            }
                        ]
                    }
                ]
            }
        }
    },
    data() {
        return {
            rules: ['add', 'import', 'export-all', 'export-current', 'export-select', 'delete'],
            tableData: [
                {
                    id: 1,
                    name: '王小虎',
                    age: 18,
                    sex: '男',
                    address: '上海市普陀区金沙江路 1518 弄'
                },
                {
                    id: 2,
                    name: '王小妞',
                    age: 19,
                    sex: '女',
                    address: '上海市普陀区金沙江路1519 弄'
                }
            ],
            pageInfo: {
                total: 0,
                page: 1,
                pageSize: 10
            },
            tableHeaderOption: tableHeaderOption,
            tableActionOption: tableActionOption,
            dialogData : {},
            isShow : false,
        }
    },
    methods: {
        /**搜索*/
        onSearch(e) {
            if(!e) e = {};
            this.$message({
                message: '搜索成功:' + JSON.stringify(e),
                type: 'success'
            })
        },
        /**重置*/
        onReset() {
            this.$message({
                message: '重置成功',
                type: 'success'
            })
        },
        /**操作按钮点击*/
        btnClick(e) {
            if(e == 'add'){
                this.dialogData = {};
                this.isShow = true;
                return;
            }
            this.$message({
                message: '点击了按钮:' + e,
                type: 'success'
            })

        },
        /**表格改变事件*/
        changeTable(e){
            if(e.status == 'edit'){
                this.dialogData = e.data;
                this.isShow = true;
                return ;
            }
            if(e.status == 'delete'){
                this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$message({
                        type: 'success',
                        message: '删除成功!'
                    });
                })
                return ;
            }
            this.$message({
                message: '表格点击了:' + e.status,
                type: 'success'
            })
        },
        /**关闭弹窗*/
        closeDialog() {
            this.isShow = false;
        }, 
    }
}
</script>
<style lang="scss" scoped></style>