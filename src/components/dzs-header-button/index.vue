<template>
    <div class="dzs-header-btn-box" :class="labelPosition" v-if="myRules.length">
        <el-button v-if="getRules('add')" type="primary" icon="el-icon-plus" @click="exportMethod('add')">添加</el-button>
        <el-popover v-if="getRules('import')" placement="bottom" width="400" trigger="click">
            <dzs-upload-file :action="action" @change="changeFile" :fileType="['xls', 'xlsx']"></dzs-upload-file>
            <el-button slot="reference" type="primary" icon="el-icon-upload2">导入</el-button>
        </el-popover>
        <el-button v-if="getRules('delete')" type="danger" icon="el-icon-delete" :disabled="isBatchDelete"
            @click="batchDelete">删除全部</el-button>
        <el-button v-if="getRules('export')" type="primary" icon="el-icon-download" @click="exportMethod('export')">
            导出
        </el-button>
        <el-dropdown v-if="getRules(['export-all', 'export-current', 'export-select'])">
            <el-button type="primary" icon="el-icon-download">
                <span>导出</span>
                <i class="el-icon-arrow-down el-icon--right"></i>
            </el-button>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>
                    <div @click="exportMethod('exportAll')">导出全部</div>
                </el-dropdown-item>
                <el-dropdown-item>
                    <div @click="exportMethod('exportCurrent')">导出当前页面</div>
                </el-dropdown-item>
                <el-dropdown-item>
                    <div @click="exportMethod('exportSelect')">导出选中</div>
                </el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
        <slot></slot>
    </div>
</template>
<script>
/**
 * 后台通用操作按钮
 * @author zs.duan
 * @date 2024-07-30
 * @param {String} label-position 按钮位置 left|right|center
 * @param {Array} rules 按钮权限 add|import|export|export-all|export-current|export-select|delete
 * @param {Boolean} isBatchDelete 是否禁用批量删除
 * @param {String} action 上传地址
 * 
 * @event {Function} @changeFile 文件上传
 * @event {Function} @btnClick 按钮点击事件
 * @event {Function} @add 新增事件
 * @event {Function} @export 导出事件
 * @event {Function} @exportAll 导出全部事件
 * @event {Function} @exportCurrent 导出当前页面事件
 * @event {Function} @exportSelect 导出选中事件
 * @event {Function} @batchDelete 批量删除事件
 * 
 * @solt {slot} 默认插槽
 * */ 
import dzsUploadFile from "../dzs-upload-file";
export default {
    name: "dzsHeaderButton",
    props: {
        'label-position': {
            type: String,
            default: 'right'
        },
        /**上传地址*/
        action: {
            type: String,
            default: () => {
                return "#"
            }
        },
        /**是否禁用批量删除*/
        isBatchDelete: {
            type: Boolean,
            default: false
        },
        /**
         * 规则
         * @param {Array} rules add|import|export|export-all|export-current|export-select|delete
         * */
        rules: {
            type: Array,
            default: () => {
                return ['add', 'import', 'export', 'export-all', 'export-current', 'export-select', 'delete']
            }
        }
    },
    components: {
        dzsUploadFile
    },
    computed: {
        myRules() {
            return this.rules
        }
    },
    methods: {
        /**文件上传*/
        changeFile(fileList) {
            this.$emit('change-file', fileList);
            this.$emit('changeFile', fileList)
        },
        /**批量删除*/
        batchDelete() {
            this.$confirm("是否要删除这些内容", "确认删除", {
                confirmButtonText: "删除",
                cancelButtonText: "取消",
                type: 'warning'
            }).then(() => {
                this.exportMethod('batchDelete')
                this.exportMethod('batch-delete')
            })
        },
        /**
         * 导出方法
         * @param {String} MethodName 导出方法名
         * */
        exportMethod(MethodName) {
            this.$emit(MethodName);
            this.$emit("btnClick", MethodName)
        },
        /**获取权限*/
        getRules(name) {
            if (Array.isArray(name)) {
                return name.some((item) => {
                    return this.myRules.includes(item)
                })
            }
            return this.myRules.includes(name)
        }
    }
}
</script>
<style lang="scss" scoped>
.dzs-header-btn-box {
    display: flex;
    margin-left: 0;
    flex-wrap: wrap;
    margin-bottom: 10px;

    .el-button {
        margin-top: 10px;
    }

    &.left {
        justify-content: flex-start;
    }

    &.center {
        justify-content: center;
    }

    &.right {
        justify-content: flex-end;
    }

    .el-dropdown {
        margin-left: 10px;
    }

    /deep/.el-popover__reference-wrapper {
        margin: 0 10px;
    }
}

@media screen and (max-width: 768px) {
    .dzs-header-btn-box {
        .el-button {
            margin-top: 10px;
        }
    }
}
</style>