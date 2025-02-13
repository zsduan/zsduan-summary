<template>
    <section>
        <public-item title="PC端" >
            <dzs-search-form :options="formOptions">
                <template #mySlot>
                    <el-form-item label="自定义组件" prop="mySlot">
                        <el-button>button</el-button>
                    </el-form-item>
                </template>
            </dzs-search-form>
        </public-item>
        <public-item title="手机端" :code="code1">
            <div class="phone-public">
                <div class="phone-box">
                    <dzs-search-form :options="formOptions">
                        <template #mySlot>
                            <el-form-item label="自定义组件" prop="mySlot">
                                <el-button>button</el-button>
                            </el-form-item>
                        </template>
                    </dzs-search-form>
                </div>
            </div>
        </public-item>
        <public-item title="参数说明" :list="tableData"></public-item>
        <public-item title="组件源代码查看" :links="links"></public-item>
        <dzs-backtop  target=".el-main"></dzs-backtop>
    </section>
</template>
<script>
import dzsSearchForm from "@/components/dzs-search-form";
import { code1 } from "./config.js";
import { tableData } from "./desc";
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
    data() {
        return {
            links: {
                href: "https://github.com/zsduan/zsduan-summary/blob/master/src/components/dzs-search-form/index.vue",
                title: "组件源码"
            },
            tableData: tableData,
            code1: {
                title: "代码示例",
                code: code1,
                lang: "vue"
            },
        };
    },
    methods: {

    }
}
</script>
<style lang="scss" scoped></style>