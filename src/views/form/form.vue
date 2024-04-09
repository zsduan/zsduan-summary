<template>
    <div>
        <dzs-header title="表单组件" v-if="!newIndex"></dzs-header>
        <div class="page">
            <h2>电脑端</h2>
            <div class="item">
                <dzs-form :isFormData="true" :options="formOptions">
                    <template #mySlot>
                        <el-button>我是自定义组件的button</el-button>
                    </template>
                    <template #lableSlot>
                        <el-button>自定义组件的button</el-button>
                    </template>
                </dzs-form>
            </div>
            <h2>手机端</h2>
            <div class="item">
                <div class="is-phone-public">
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
            </div>
            <h2>代码示例</h2>
            <div class="item">
                <dzs-code title="代码示例" :value="code1"></dzs-code>
            </div>
            <h2>参数说明</h2>
            <div class="item">
                <dzs-table :tableHeader="descHeader" :list="descData" :showOperation="false" :tableOptions="descTableOptions">
                </dzs-table>
            </div>
            <h2>更多功能</h2>
            <div class="item">
                <div class="tips-box">自己在源代码去看</div>
            </div>
            <h2>组件源代码下载</h2>
            <div class="item">
                <a target="_blank"
                    href="https://github.com/zsduan/zsduan-summary/blob/master/src/components/dzs-form/index.vue">表单组件下载地址</a>
            </div>
        </div>
        <el-backtop :visibility-height="20" v-if="!newIndex"></el-backtop>
    </div>
</template>
<script>
import dzsForm from "@/components/dzs-form/index.vue";
import { code1 } from "./config";
import {descHeader , descData , descTableOptions} from "./desc";
export default {
    components: {
        dzsForm
    },
    props: {
        newIndex: {
            type: Boolean,
            default: () => {
                return false
            }
        }
    },
    computed: {
        formOptions() {
            return {
                formProps: {
                    "label-width": "110px",
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
                        label: "带有lable自定义组件",
                        key: "lableSlot",
                        type: "input",
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
                            placeholder: "请输入输入框",
                            tips: "这个是一个输入框"
                        },
                        span: 24
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
                        label: "",
                        key: "divider",
                        type: "divider",
                        span: 24,
                        props: {
                            tips: "我是分割线"
                        }
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
                        defaultValue: 1
                    },
                    {
                        label: "图片",
                        key: "uploadImg",
                        type: "uploadImg",
                        rules: [],
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
                        type: "edit",
                        rules: [],
                        props: {},
                    },
                ]
            }
        }
    },
    data() {
        return {
            code1: code1,
            descHeader : descHeader,
            descData : descData,
            descTableOptions : descTableOptions
        }
    }
}
</script>
<style lang="less" scoped>
.page {
    .item {
        padding: 10px 0;

        a {
            display: inline-block;
            padding: 10px 20px;
            text-align: center;
            border: 1px solid #ccc;
            border-radius: 10px;
        }
    }

}
</style>