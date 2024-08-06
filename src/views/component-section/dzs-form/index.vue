<template>
    <section>
        <public-item title="PC端" tips="该组件需要导入 dzs-editor dzs-upload-img dzs-upload-file 三个组件使用">
            <dzs-form :options="formOptions" @onSubmit="onSubmit" @onCancel="onCancel">
                <template #mySlot>
                    <el-button>我是自定义组件的button</el-button>
                </template>
                <template #lableSlot>
                    <el-button>自定义组件的button</el-button>
                </template>
            </dzs-form>
        </public-item>
        <public-item title="手机端" :code="code1">
            <div class="phone-public">
                <div class="phone-box">
                    <dzs-form :options="formOptions">
                        <template #mySlot>
                            <el-button>我是自定义组件的button</el-button>
                        </template>
                        <template #lableSlot>
                            <el-button>自定义组件的button</el-button>
                        </template>
                    </dzs-form>
                </div>
            </div>
        </public-item>
        <public-item title="在dialog弹窗中使用" :code="code2" tips="该组件需要导入 dzs-dialog 组件使用">
            <el-button @click="dialogVisible = true">点击打开弹窗</el-button>
            <dzs-dialog :isShow.sync="dialogVisible" title="dzs-form在弹窗中使用">
                <dzs-form :options="formOptions" height="500px" @onCancel="onCancel">
                    <template #mySlot>
                        <el-button>我是自定义组件的button</el-button>
                    </template>
                    <template #lableSlot>
                        <el-button>自定义组件的button</el-button>
                    </template>
                </dzs-form>
            </dzs-dialog>
        </public-item>
        <public-item title="参数说明" :list="tableData"></public-item>
        <public-item title="组件源代码查看" :links="links"></public-item>
        <dzs-backtop  target=".el-main"></dzs-backtop>
    </section>
</template>
<script>
import dzsForm from "@/components/dzs-form";
import dzsDialog from "@/components/dzs-dialog/index.vue"
import { code1, code2 } from "./config.js";
import {tableData} from "./desc";
export default {
    components: {
        dzsForm,
        dzsDialog
    },
    computed: {
        formOptions() {
            return {
                formProps: {
                    "label-width": "120px",
                },
                formItem: [
                    {
                        label: "整个自定义组件",
                        key: "mySlot",
                        type: "input",
                        isSlot: true,
                        span: 24
                    },
                    {
                        label: "lable自定义组件",
                        key: "lableSlot",
                        span: 24,
                        props: {
                            isSlot: true
                        }
                    },
                    {
                        label: "输入框",
                        key: "input",
                        type: "input",
                        rules: [
                            { required: true, message: '请输入输入框名称', trigger: 'blur' },
                        ],
                        props: {
                            tips: "这个是一个输入框"
                        },
                        span: 24
                    },
                    {
                        label: "支持xx.xx的参数",
                        key: "title.type",
                        type: "input",
                        props: {
                            tips: "支持xx.xx的参数理论可以支持无限 该输入框为 title.type"
                        },
                    },
                    {
                        label: "xx.xx.xx的参数",
                        key: "titles.type.name",
                        type: "input",
                        props: {
                            tips: "xx.xx.xx的参数 titles.type.name"
                        },
                    },
                    {
                        label: "下拉框",
                        key: "select",
                        type: "select",
                        rules: [
                            { required: true, message: '请选择下拉框', trigger: 'change' },
                        ],
                        props: {
                            placeholder: "请选择下拉框",
                            clearable: true
                        },
                        children: [
                            {
                                label: "参数1",
                                value: 1
                            },
                            {
                                label: "参数2",
                                value: 2
                            },
                        ],
                        span: 12
                    },
                    {
                        label: "数字输入框",
                        key: "number",
                        type: "number",
                        span: 12
                    },
                    {
                        label: "日期",
                        key: "date",
                        type: "date",
                        span: 12
                    },
                    {
                        label: "时间",
                        key: "time",
                        type: "time",
                        span: 12
                    },
                    {
                        label: "开关",
                        key: "switch",
                        type: "switch",
                        span: 12
                    },
                    {
                        label: "多选框",
                        key: "checkbox",
                        type: "checkbox",
                        rules: [],
                        props: {},
                        span: 12,
                        children: [
                            {
                                label: "选项1",
                                value: 1
                            },
                            {
                                label: "选项2",
                                value: 2
                            },
                        ],
                    },
                    {
                        label: "单选框 默认值",
                        key: "radio",
                        type: "radio",
                        rules: [],
                        props: {},
                        children: [
                            {
                                label: "选项1",
                                value: 1
                            },
                            {
                                label: "选项2",
                                value: 2
                            },
                        ],
                        defaultValue: 1,
                        span: 12
                    },
                    {
                        label : "颜色选择",
                        key: "color",
                        type: "color",
                        span: 12
                    },
                    {
                        label: "",
                        key: "divider",
                        type: "divider",
                        span: 24,
                        props: {
                            tips: "我是分割线"
                        }
                    },
                    {
                        label: "图片",
                        key: "uploadImg",
                        type: "uploadImg",
                        props: {
                            autoUpload: false
                        },
                    },
                    {
                        label: "文件",
                        key: "uploadFile",
                        type: "uploadFile",
                        rules: [],
                        props: {
                            autoUpload: false
                        },
                    },
                    {
                        label: "富文本",
                        key: "edit",
                        type: "editor",
                        rules: [],
                        props: {},
                    },
                ]
            }
        }
    },
    data() {
        return {
            code1: {
                title: "代码示例",
                code: code1,
                lang: "vue"
            },
            code2: {
                title: "代码示例",
                code: code2,
                lang: "vue"
            },
            dialogVisible: false,
            links: {
                href: "https://github.com/zsduan/zsduan-summary/blob/master/src/components/dzs-form/index.vue",
                title: "组件源码"
            },
            tableData: tableData,
        }
    },
    methods: {
        onSubmit() {
            // do something
        },
        onCancel() {
            // do something
            this.dialogVisible = false;
        }
    }
}
</script>
<style lang="scss" scoped></style>