export const code1 = `
<template>
    <dzs-search-form :options="formOptions" @search="onSearch" @reset="onReset">
        <template #mySlot>
            <el-form-item label="自定义组件" prop="mySlot">
                <el-button>button</el-button>
            </el-form-item>
        </template>
    </dzs-search-form>
</template>
<script>
import dzsSearchForm from "@/components/dzs-search-form";
export default {
    components: {
        dzsSearchForm
    },
    computed: {
        formOptions() {
            return {
                formProps: {
                    "label-width": "100px",
                },
                formItem: [
                    {
                        label: "输入框",
                        key: "input",
                        type: "input",
                        rules: [
                            { required: true, message: '请输入输入框名称', trigger: 'blur' },
                        ],
                        props: {
                            placeholder: "请输入输入框",
                            tips: "这个是一个输入框"
                        },
                        defaultValue: "我是一个默认值",
                        span: 6
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
                        span: 6
                    },
                    {
                        label: "日期",
                        key: "date",
                        type: "date",
                        span: 6
                    },
                    {
                        label: "开关",
                        key: "switch",
                        type: "switch",
                        span: 6
                    },
                    {
                        label: "多选框",
                        key: "checkbox",
                        type: "checkbox",
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
                    },
                    {
                        label: "自定义组件",
                        key: "mySlot",
                        type: "input",
                        isSlot: true,
                        span: 6
                    },
                ]
            }
        }
    },
    methods: {
        onSearch(){
            // do something
        },
        onReset(){
            // do something
        }
    }
}
</script>
`