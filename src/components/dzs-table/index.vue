<!--
 * @Author: zs.duan
 * @Date: 2022-09-21 10:21:11
 * @LastEditors: zs.duan
 * @LastEditTime: 2023-03-28 19:54:00
 * @FilePath: \vue2+elui+template\src\components\dzs-table\index.vue
-->
<template>
    <div class="table-wrop" :style="{height : tableHeight ? tableHeight : ''}">
        <div class="list-wrop">
            <el-table v-if="!isRedraw" :data="tableData" class="table" ref="dzsTable" v-loading="loading"
                @selection-change="handleSelectionChange" :stripe="true" v-bind="{ ...tableOptions }">
                <el-table-column type="selection" width="55" v-if="showCheckbox"></el-table-column>
                <template v-for="(option, index) in headerData">
                    <template v-if="!option.isSlot">
                        <el-table-column :label="option.lable" :width="option.width" :show-overflow-tooltip="true"
                            :prop="option.key" :class-name="'table-column_' + columnClassName" v-bind="{ ...option.props }"
                            :key="index"></el-table-column>
                    </template>
                    <template v-else>
                        <el-table-column :class-name="'table-column_' + columnClassName" :key="index" :label="option.lable"
                            :width="option.width" :show-overflow-tooltip="true" v-bind="{ ...option.props }">
                            <template slot-scope="scope">
                                <div>
                                    <slot :name="option.key" :row="{ ...scope.row }" />
                                </div>
                            </template>
                        </el-table-column>
                    </template>
                </template>
                <el-table-column v-bind="operationOption" label="操作">
                    <template slot-scope="scope">
                        <el-button type="text" class="btn" size="small" v-for="(item, index) in operation" :key="index">
                            <span @click="onEdit(scope.row)" v-if="item == 'edit'">编辑</span>
                            <span @click="onDetails(scope.row)" v-if="item == 'detail'">详情</span>
                            <el-popconfirm title="是否要删除？" @confirm="onDel(scope.row)">
                                <template #reference>
                                    <span v-if="item == 'detele'">删除</span>
                                </template>
                            </el-popconfirm>
                        </el-button>
                        <slot name="tableBtn" :row="{ ...scope.row }"></slot>
                    </template>
                </el-table-column>
            </el-table>
            <div class="sider-box">
                <dzs-tabel-sider v-if="showTabelSider" :list="tableHeader" @change="onSiderChange" @changeHeight="changeHeight"></dzs-tabel-sider>
            </div>
        </div>
        <div class="table-footer" v-if="(total > maxSize) && showPagination">
            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                :page-sizes="[maxSize, maxSize * 2, maxSize * 4]" :background="paginationSet.background"
                :layout="paginationSet.layout" :total="total"></el-pagination>
        </div>
    </div>
</template>

<script>
/**
 * @name 表格组件
 * @props tableList 列表数据 isSlot:自定义slot
 * @props operation 操作数据 add 新增 edit 编辑 details 详情 del 删除
 * @props tableHeader 表头数据及表单key  lable 表头名称  key 显示关键字 width 宽度 isSlot:自定义slot props:el-table-column的配置项
 * @props showCheckbox 是否显示多选 默认 false 不显示  true 显示
 * @props maxSize 每页显示条数 默认10
 * @props showPagination 是否显示分页 默认true 显示
 * @props operationOption 操作列配置项
 * @props tableData 表格数据
 * @props total 总条数
 * @props tableOptions 饿了吗ui的配置
 * @props loading 是否开启加载中 可以在 tableOptions配置自己想要的加载 element-loading-text="拼命加载中" element-loading-spinner="el-icon-loading"
 * @props height 高度
 * @props showTabelSider 是否显示侧边栏 默认true 显示
 *
 * @methods SelectionChange 选中数据改变 返回当前选中的数据
 * @methods change 页码/条数改变 返回当前页码/条数  status:page 改变页码  status:size 改变条数
 * @methods change 列表数据改变 返回当前改变的数据  status:update 更新数据  status:delete 删除数据  status:edit 编辑数据 status:details 详情数据
 * @methods onEdit 编辑
 * @methods onDetails 详情
 * @methods onDel 删除
 * @methods setSelection 设置选中的数据
 * @methods getTableMethods 获取到原生方法
 *
 */
import dzsTabelSider from "./sider/dzs-tabel-sider.vue";
export default {
    name: "dzs-table",
    components: {
        dzsTabelSider,
    },
    props: {
        /**操作栏 配置*/
        operation: {
            type: Array,
            default: () => {
                return [];
            },
        },
        /**表格 显示配置*/
        tableHeader: {
            type: Array,
            default: () => {
                return [];
            },
        },
        /**是否显示 复选框*/
        showCheckbox: {
            type: Boolean,
            default: () => {
                return false;
            },
        },
        /**每条 最大显示数量*/
        maxSize: {
            type: Number,
            default: () => {
                return 10;
            },
        },
        /**分页 总数*/
        total: {
            type: Number,
            default: () => {
                return 0;
            },
        },
        /**是都显示 分页*/
        showPagination: {
            type: Boolean,
            default: () => {
                return true;
            },
        },
        /**操作项配置信息*/
        operationOption: {
            type: Object,
            default: () => {
                return {};
            },
        },
        /**表单自定义 同 el-table一样*/
        tableOptions: {
            type: Object,
            default: () => {
                return {};
            },
        },
        /**表格数据*/
        tableData: {
            type: Array,
            default: () => {
                return [];
            },
        },
        /**加载中*/
        loading: {
            type: Boolean,
            default: () => {
                return false;
            },
        },
        /**高度*/
        height: {
            type: String | Number,
            default: () => {
                return "";
            },
        },
        /**是否显示侧边栏*/
        showTabelSider: {
            type: Boolean,
            default: () => {
                return true;
            },
        },
    },
    data() {
        return {
            paginationSet: {
                background: false,
                layout: "total, sizes, prev, pager, next, jumper",
            },
            isRedraw: false,
            headerData: [],
            columnClassName: ""
        };
    },
    watch: {
        tableHeader: {
            handler(val) {
                this.headerData = JSON.parse(JSON.stringify(val));
            },
            deep: true,
            immediate: true,
        },
    },
    computed: {
        /**计算高度*/
        tableHeight() {
            let height = "";
            if (this.height) {
                if(Number(this.height) != NaN && Number(this.height) > 0){
                    height = Number(this.height) + "px";
                }else{
                    height = this.height;
                }
            }
            return height;
        },
        
    },
    mounted() { },
    methods: {
        /**选择条数改变*/
        handleSizeChange(num) {
            this.$emit("change", {
                status: "size",
                data: num,
            });
            this.$emit("size-change", num);
        },
        /**页码改变*/
        handleCurrentChange(num) {
            this.$emit("change", {
                status: "page",
                data: num,
            });
            this.$emit("current-change", num);
        },
        /**编辑*/
        onEdit(item) {
            this.$emit("change", {
                status: "edit",
                title: "编辑",
                data: item,
            });
            this.$emit("on-edit", item);
        },
        /**详情*/
        onDetails(item) {
            this.$emit("change", {
                status: "details",
                title: "详情",
                data: item,
            });
            this.$emit("on-details", item);
        },
        /**删除*/
        onDel(item) {
            this.$emit("change", {
                status: "delete",
                title: "删除",
                data: item,
            });
            this.$emit("on-del", item);
        },
        /**选中事件*/
        handleSelectionChange(val) {
            this.$emit("SelectionChange", val);
        },
        /**设置选中行*/
        setSelection(rows) {
            if (rows) {
                rows.forEach((row) => {
                    this.$refs.dzsTable.toggleRowSelection(row);
                });
            } else {
                this.$refs.dzsTable.clearSelection();
            }
        },
        /**侧边栏改变*/
        onSiderChange(val) {
            this.isRedraw = true;
            this.headerData = val;
            setTimeout(() => {
                this.isRedraw = false;
            }, 100);
        },
        /**改变高度*/
        changeHeight(e) {
            this.isRedraw = true;
            this.columnClassName = e;
            setTimeout(() => {
                this.isRedraw = false;
            }, 100);
        },
        /**获取到原生方法*/
        getTableMethods() {
            return this.$refs.dzsTable;
        },
        /**设置选中状态*/ 
        selectable(row, index) {
            if(this.showCheckbox){
                return row.selectable === false ? row.selectable : true;
            }
            return true;
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

        display: flex;

        :deep(.el-table th, .el-table tr) {
            background-color: var(--ThemeColor01);
            color: #282c33;

            .cell {
                font-weight: normal;
            }
        }

        :deep(.el-table__fixed-right-patch) {
            background-color: #f3f8ff;
        }

        :deep(.el-table) {
            tr {
                .table-column_mini {
                    height: 30px;
                }

                .table-column_middle {
                    height: 50px;
                }

                .table-column_max {
                    height: 70px;
                }
            }
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

        >span {
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
