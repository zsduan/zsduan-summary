<!--
 * @Author: zs.duan
 * @Date: 2022-09-21 10:21:11
 * @LastEditors: zs.duan
 * @LastEditTime: 2022-11-29 20:34:22
 * @FilePath: \vue2+elui+template\src\components\dzs-table\index.vue
-->
<template>
    <div class="table-wrop">
        <div class="list-wrop">
            <el-table
                :data="tableData"
                class="table"
                v-loading="loading"
                @selection-change="handleSelectionChange"
                :stripe="true"
                v-bind="{...tableOptions}"
            >
                <el-table-column type="selection" width="55" v-if="showCheckbox"></el-table-column>
                <el-table-column
                    :label="option.lable"
                    v-for="(option,index) in tableHeader"
                    :key="index"
                    :width="option.width"
                >
                {{option}}
                    <template slot-scope="scope">
                        <div v-if="option.isSlot">
                            <slot :name="option.key" :row="{ ...scope.row }" />
                        </div>
                        <span class="scope-span" v-else>{{ scope.row[`${option.key}`] }}</span>
                    </template>
                </el-table-column>
                <el-table-column fixed="right" :width="operationWidth" label="操作">
                    <template slot-scope="scope" >
                        <el-button type="text" class="btn" size="small" v-for="(item,index) in operation" :key="index">
                            <span @click="onEdit(scope.row)" v-if="item == 'edit'">编辑</span>
                            <span @click="onDetails(scope.row)" v-if="item == 'detail'">详情</span>
                            <el-popconfirm title="是否要删除？"  @confirm="onDel(scope.row)">
                                <template #reference>
                                    <span v-if="item == 'detele'">删除</span>
                                </template>
                            </el-popconfirm>
                        </el-button>
                        <slot name="tableBtn" :row="{...scope.row }"></slot>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <div class="table-footer" v-if="(total > maxSize) && showPagination">
            <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :page-sizes="[maxSize, maxSize * 2, maxSize * 4]"
                :background="paginationSet.background"
                :layout="paginationSet.layout"
                :total="total"
            ></el-pagination>
        </div>
    </div>
</template>

<script>
/*
 *@props tableList 列表数据 isSlot:自定义slot
 *@props operation 操作数据 add 新增 edit 编辑 details 详情 del 删除
 *@props tableHeader 表头数据及表单key  lable 表头名称  key 显示关键字 width 宽度 isSlot:自定义slot
 *@props showCheckbox 是否显示多选 默认 false 不显示  true 显示
 *@props maxSize 每页显示条数 默认10
 *@props showPagination 是否显示分页 默认true 显示
 *@props operationWidth 操作列宽度 
 *@props tableData 表格数据 
 *@props total 总条数
 *@props tableOptions 饿了吗ui的配置
 *@props loading 是否开启加载中 可以在 tableOptions配置自己想要的加载 element-loading-text="拼命加载中" element-loading-spinner="el-icon-loading"
 *
 *@methods boxChange 是否选中  返回选中的列表数据
 *@methods changePage 页码/条数改变 返回当前页码/条数  status:page 改变页码  status:size 改变条数
 *@methods change 列表数据改变 返回当前改变的数据  status:update 更新数据  status:delete 删除数据  status:edit 编辑数据 status:details 详情数据
 *
 */
export default {
    name: "dzs-table",
    props: {
        operation: {
            type: Array,
            default: () => {
                return [];
            },
        },
        tableHeader: {
            type: Array,
            default: () => {
                return [];
            },
        },
        showCheckbox: {
            type: Boolean,
            default: () => {
                return false;
            },
        },
        maxSize: {
            type: Number,
            default: () => {
                return 10;
            },
        },
        total:{
            type: Number,
            default: () => {
                return 0;
            },
        },
        showPagination : {
            type: Boolean,
            default: () => {
                return true;
            },
        },
        operationWidth : {
            type: String,
            default: () => {
                return "";
            }
        },
        // 表单自定义 同 el-table一样
        tableOptions: {
            type: Object,
            default: () => {
                return {};
            },
        },
        tableData : {
            type: Array,
            default: () => {
                return [];
            },
        },
        loading : {
            type: Boolean,
            default: () => {
                return false;
            },
        },
    },
    data() {
        return {
            paginationSet: {
                background: false,
                layout: "total, sizes, prev, pager, next, jumper",
            },
        };
    },
    watch: {
        tableList: {
            handler(val) {
                this.tableDatas = val;
            },
            deep: true,
        },
    },
    mounted() {
        
    },
    methods: {
        // 选择条数改变
        handleSizeChange(num) {
            this.$emit("changePage", {
                status: "size",
                data: num,
            });
        },
        // 页码改变
        handleCurrentChange(num) {
            this.$emit("changePage", {
                status: "page",
                data: num,
            });
        },
        // 编辑
        onEdit(item) {
            this.$emit("change", {
                status: "edit",
                title: this.$t("table.edit"),
                data: item,
            });
        },
        // 详情
        onDetails(item) {
            this.$emit("change", {
                status: "details",
                title: this.$t("table.details"),
                data: item,
            });
        },
        // 删除
        onDel(item) {
            this.loading = true;
            this.onDelete(item);
            this.$emit("change", {
                status: "delete",
                title: this.$t("table.del"),
                data: item,
            });
        },
        // 选中事件
        handleSelectionChange(val) {
            this.$emit("boxChange", val);
        },
    },
};
</script>

<style lang="less" scoped>
.table-wrop {
    height: 100%;
    position: relative;

    .list-wrop {
        padding: 0 10px;
        overflow-y: scroll;

        -ms-overflow-style: none;
        /* IE 10+ */
        scrollbar-width: none;

        /* Firefox */
        &::-webkit-scrollbar {
            /* Chrome Safari */
            display: none;
        }
        :deep(.el-table th,
        .el-table tr) {
            background-color: var(--ThemeColor01);
            color: #282c33;
            .cell {
                font-weight: normal;
            }
        }

        :deep(.el-table__fixed-right-patch ){
            background-color: #f3f8ff;
        }
    }
    .table {
        border: 1px solid #ebeef5;
    }
    @media screen and (max-width: 768px) {
        .table {
            height: auto;
        }
    }

    .table-footer {
        text-align: right;
        padding-top: 10px;
    }

    @media screen and (max-width: 768px) {
        .table-footer {
            position: relative;
            bottom: 0;
            right: 0;
            z-index: 1;
            margin-top: 20px;
            padding: 20px;
            text-align: right;
            width: 100%;
            overflow-x: auto;
        }
    }

    .operation {
        cursor: pointer;

        > span {
            padding-right: 10px;
            color: var(--ThemeColor);

            span {
                font-size: 14px;
            }

            &:last-child {
                padding-right: 0;
            }
        }
    }

    .empty {
        text-align: center;
        padding-top: 10px;
    }

    .scope-span {
        color: var(--fontColor);
    }

    :deep(.el-tag--dark) {
        border-color: transparent;
        display: inline-block !important;
        padding: 0 10px;
        margin: 0 auto;
    }
}
.btn {
    span {
        color: var(--ThemeColor);
    }
    :deep(span) {
        color: var(--ThemeColor);
    }
}

@media screen and (max-width: 768px) {
    .table-wrop {
        .btn {
            width: 100%;
            margin-left: 0;
        }
    }
}
</style>
