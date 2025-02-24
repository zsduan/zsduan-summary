<template>
    <div :id="tableId" class="table-wrop">
        <div class="list-wrop">
            <el-table border v-if="headerData.length" :data="tableData" class="table" ref="dzsTable" v-loading="loading"
                @selection-change="handleSelectionChange" :stripe="true" v-bind="{ ...tableOptions }"
                :height="tableHeight ? tableHeight : '100%'">
                <el-table-column type="selection" width="55" v-if="showCheckbox"></el-table-column>
                <template v-for="(option, index) in headerData">
                    <template v-if="!option.isSlot">
                        <el-table-column :label="option.label" :width="option.width" :prop="option.key"
                            :class-name="'table-column_' + columnClassName" v-bind="{ ...option.props }"
                            :key="index"></el-table-column>
                    </template>
                    <template v-else>
                        <el-table-column :class-name="'table-column_' + columnClassName" :key="index"
                            :label="option.label" :width="option.width" v-bind="{ ...option.props }">
                            <template slot-scope="scope">
                                <div>
                                    <slot :name="option.key" :row="{ ...scope.row }"></slot>
                                </div>
                            </template>
                        </el-table-column>
                    </template>
                </template>
                <el-table-column v-if="showOperation" :class-name="'table-column_' + columnClassName"
                    v-bind="operationOption" label="操作" :width="operationWidth">
                    <template slot-scope="scope">
                        <el-button type="text" class="btn" size="small" v-for="(item, index) in operation" :key="index">
                            <span @click="onEdit(scope.row)" v-if="item == 'edit'">编辑</span>
                            <span @click="onDetails(scope.row)" v-if="item == 'detail'">详情</span>
                            <span @click="onDel(scope.row)" v-if="item == 'delete'">删除</span>
                        </el-button>
                        <slot name="button" :row="{ ...scope.row }"></slot>
                    </template>
                </el-table-column>
            </el-table>
            <div class="table-empty" v-if="!headerData.length">
                你还没设置数据显示
            </div>
            <div class="sider-box">
                <dzs-tabel-sider :treeProps="tableOptions['tree-props']" v-if="showSider" :column="tableHeader" :list="tableData" @change="onSiderChange"
                    @changeHeight="changeHeight" @search="siderSearch" :forceSearch="forceSearch"
                    :show-siders="showSiders"></dzs-tabel-sider>
            </div>
        </div>
        <div class="table-footer" v-if="(total > maxSize) && showPage">
            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                :page-sizes="[maxSize, maxSize * 2, maxSize * 4]" v-bind="{ ...paginationSet }"
                :total="total"></el-pagination>
        </div>
    </div>
</template>

<script>
/**
 * @name 表格组件
 * @props operation 操作数据 edit 编辑 details 详情 del 删除
 * @props tableHeader 表头数据及表单key  label 表头名称  key 关键字/slot的name width 宽度 isSlot:自定义slot props:el-table-column的配置项
 * @props showCheckbox 是否显示多选 默认 false 不显示  true 显示
 * @props maxSize 每页显示条数 默认10
 * @props showPage 是否显示分页 默认true 显示
 * @props operationOption 操作列配置项
 * @props list 表格数据
 * @props total 总条数
 * @props tableOptions 饿了吗ui的配置
 * @props loading 是否开启加载中 可以在 tableOptions配置自己想要的加载 element-loading-text="拼命加载中" element-loading-spinner="el-icon-loading"
 * @props height 高度
 * @props showSider 是否显示侧边栏 默认true 显示
 * @props showOperation 是否显示操作列 默认true 显示
 * @props forceSearch 是否强制搜索 默认false 不强制搜索 true 强制搜索
 * @props operationWidth 操作栏宽度
 *
 * @methods selectionChange 选中数据改变 返回当前选中的数据
 * @methods change 页码/条数改变 返回当前页码/条数  status:page 改变页码  status:size 改变条数
 * @methods change 列表数据改变 返回当前改变的数据  status:delete 删除数据  status:edit 编辑数据 status:details 详情数据
 * @methods onEdit 编辑
 * @methods onDetails 详情
 * @methods onDelete 删除
 * @methods setSelection 设置选中的数据
 * @methods getTableMethods 获取到原生方法
 * @methods sizeChange 选择条数改变
 * @methods currentChange 页码改变
 * 
 * @slot button 操作列按钮
 *
 */
import dzsTabelSider from "./sider/dzs-tabel-sider.vue";
import defaultProps from "./props";
import deepCopy from "./deepCopy";
export default {
    name: "dzsTable",
    components: {
        dzsTabelSider,
    },
    props: defaultProps,
    data() {
        return {
            paginationSet: {
                background: false,
                layout: "total, sizes, prev, pager, next, jumper",
            },
            headerData: [],
            columnClassName: "",
            tableData: [],
            tableId: `dzsTable${new Date().getTime()}`,
            isPhone: false
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
        list: {
            handler(val) {
                this.tableData = deepCopy(val);
            },
            deep: true,
            immediate: true
        }
    },
    computed: {
        /**计算高度*/
        tableHeight() {
            let height = "";
            if (this.height) {
                if (Number(this.height) != NaN && Number(this.height) > 0) {
                    height = Number(this.height) + "px";
                } else {
                    height = this.height;
                }
            }
            return height;
        },

    },
    mounted() {
        this.listenFormBoxWidth();
    },
    methods: {
        /**选择条数改变*/
        handleSizeChange(num) {
            this.onChange("size", '选择条数改变', num);
            this.$emit("sizeChange", num);
        },
        /**页码改变*/
        handleCurrentChange(num) {
            this.onChange("page", '页码改变', num);
            this.$emit("currentChange", num);
        },
        /**编辑*/
        onEdit(item) {
            this.onChange("edit", "编辑", item);
            this.$emit("onEdit", item);
        },
        /**详情*/
        onDetails(item) {
            this.onChange("details", "详情", item);
            this.$emit("onDetails", item);
        },
        /**删除*/
        onDel(item) {
            this.onChange("delete", "删除", item);
            this.$emit("onDelete", item);
        },
        /**改变事件*/
        onChange(status, title, data) {
            let obj = { status: status, title: title, data: data, };
            this.$emit("change", obj);
            this.$emit("onChange", obj);
        },
        /**选中事件*/
        handleSelectionChange(val) {
            this.$emit("selectionChange", val);
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
            this.headerData = val;
        },
        /**改变高度*/
        changeHeight(e) {
            this.columnClassName = e;
        },
        /**获取到原生方法*/
        getTableMethods() {
            return this.$refs.dzsTable;
        },
        /**设置选中状态*/
        selectable(row, index) {
            if (this.showCheckbox) {
                return row.selectable === false ? row.selectable : true;
            }
            return true;
        },
        /**侧边栏搜索*/
        siderSearch(list) {
            this.tableData = list;
        },
        /**监听form-box宽度变化*/
        listenFormBoxWidth() {
            let paginationSet = {
                background: false,
                layout: "total, sizes, prev, pager, next, jumper",
            }
            let paginationSetPhone = {
                background: false,
                layout: "sizes , total,  prev, next",
            }
            const resizeObserver = new ResizeObserver(entries => {
                for (let entry of entries) {
                    const { width } = entry.contentRect;
                    this.paginationSet = width <= 768 ? paginationSetPhone : paginationSet;
                }
            })
            resizeObserver.observe(document.querySelector(`#${this.tableId}`));
        }
    },
};
</script>

<style lang="scss" scoped>
.table-wrop {
    height: 100%;
    position: relative;

    .list-wrop {
        display: flex;
        overflow-y: scroll;
        -ms-overflow-style: none;
        /* IE 10+ */
        scrollbar-width: none;
        /* Firefox */
        &::-webkit-scrollbar {
            /* Chrome Safari */
            display: none;
        }
        :deep(.el-table__body-wrapper) {

            // 滚动条宽度
            &::-webkit-scrollbar {
                width: 4px;
                background-color: #fff;
                display: block;
            }

            // 滚动条轨道
            &::-webkit-scrollbar-track {
                background-color: transparent;
                -webkit-border-radius: 2em;
                -moz-border-radius: 2em;
                border-radius: 2em;
            }

            // 滚动条背景
            &::-webkit-scrollbar-track-piece {
                background-color: transparent;
                -webkit-border-radius: 2em;
                -moz-border-radius: 2em;
                border-radius: 2em;
            }

            // 滚动条滑块
            &::-webkit-scrollbar-thumb {
                background-color: #e9e7e7;
                -webkit-border-radius: 1em;
                -moz-border-radius: 1em;
                border-radius: 1em;
            }
        }

        :deep(.el-table) {
            tr {
                .table-column_mini {
                    height: 30px;
                    padding: 0;
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

    .table-empty {
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid #ebeef5;
        width: 100%;
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

    .empty {
        text-align: center;
        padding-top: 10px;
    }


    .btn {
        margin-left: 10px;
    }
}
</style>
