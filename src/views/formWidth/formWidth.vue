<template>
    <div>
        <div class="page">
            <h2>基础用法</h2>
            <div class="item">
                <dzs-form-header :options="formOptions">
                    <template #mySlot>
                        <el-form-item label="自定义组件" prop="mySlot">
                            <el-button>button</el-button>
                        </el-form-item>
                    </template>
                </dzs-form-header>
            </div>
            <h2>手机端</h2>
            <div class="item">
                <div class="is-phone-public">
                    <div class="phone-box">
                        <dzs-form-header :options="formOptions">
                            <template #mySlot>
                                <el-form-item label="自定义组件" prop="mySlot">
                                    <el-button>button</el-button>
                                </el-form-item>
                            </template>
                        </dzs-form-header>
                    </div>
                </div>
            </div>
            <h2>代码示例</h2>
            <div class="item">
                <dzs-code title="代码示例" :value="code1"></dzs-code>
            </div>
            <h2>参数说明</h2>
            <div class="item">
                <dzs-table :tableHeader="descHeader" :list="descData" :showOperation="false"
                    :tableOptions="descTableOptions">
                </dzs-table>
            </div>
            <h2>组件源代码下载</h2>
            <div class="item">
                <a target="_blank"
                    href="https://github.com/zsduan/zsduan-summary/blob/master/src/components/dzs-form-header/index.vue">横向表单组件下载地址</a>
            </div>
        </div>
        <el-backtop :visibility-height="20" ></el-backtop>
    </div>
</template>
<script>
import dzsFormHeader from "../../components/dzs-form-header/index.vue";
import { code1 } from "./config"
import { descHeader, descData, descTableOptions } from "./desc";
export default {
    components: {
        dzsFormHeader
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
            code1: code1,
            descHeader: descHeader,
            descData: descData,
            descTableOptions: descTableOptions
        }
    }
}
</script>
<style lang="less" scoped>

</style>