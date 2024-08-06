export const code1 = `
<template>
    <dzs-form :options="formOptions">
        <template #mySlot>
            <el-button>我是自定义组件的button</el-button>
        </template>
        <template #lableSlot>
            <el-button>自定义组件的button</el-button>
        </template>
    </dzs-form>
</template>
<script>
import dzsForm from "@/components/dzs-form";
export default {
    components: {
        dzsForm
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
    methods: {
        onSubmit(){
            // do something
        },
        onCancel(){
            // do something
        }
    }
}
</script>
`

export const code2 = `
<template>
    <dzs-dialog :isShow.sync="dialogVisible" title="dzs-form在弹窗中使用">
        <dzs-form :options="formOptions" height="500px" @onCancel="onCancel" @onSubmit="onSubmit" >
            <template #mySlot>
                <el-button>我是自定义组件的button</el-button>
            </template>
            <template #lableSlot>
                <el-button>自定义组件的button</el-button>
            </template>
        </dzs-form>
    </dzs-dialog>
</template>
<script>
import dzsForm from "@/components/dzs-form";
import dzsDialog from "@/components/dzs-dialog/index.vue"
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
                    //...和上一个相同
                ]
            }
        }
    },
    data() {
        return {
            dialogVisible: false
        }
    },
    methods: {
        onSubmit(){
            // do something
        },
        onCancel(){
            this.dialogVisible = false;
            // do something
        }
    }
}
</script>
`