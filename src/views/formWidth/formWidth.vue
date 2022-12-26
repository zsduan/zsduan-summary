<!--
 * @Author: zs.duan
 * @Date: 2022-12-26 16:21:46
 * @LastEditors: zs.duan
 * @LastEditTime: 2022-12-26 17:34:41
 * @FilePath: \vue2+js+eui+template\src\views\formWidth\formWidth.vue
-->
<template>
    <div>
        <dzs-header title="横向表单组件"></dzs-header>
        <div class="page">
            <h2>基础用法</h2>
            <div class="item">
                <dzs-form-header :options="formOptions">
                    <template #mySlot>
                        <el-button>我是自定义组件的button</el-button>
                    </template>
                </dzs-form-header>
                <dzs-code title="源代码" :value="code1"></dzs-code>
                <dzs-code title="全部配置" :value="code2"></dzs-code>
            </div>
            <h2>组件源代码下载</h2>
            <div class="item">
                <a target="_blank" href="https://github.com/zsduan/zsduan-summary/blob/master/src/components/dzs-form-header/index.vue">横向表单组件下载地址</a>
            </div>
        </div>
        <el-backtop :visibility-height="20"></el-backtop>
    </div>
</template>
<script>
import dzsFormHeader from "../../components/dzs-form-header/index.vue";
import {code1 , code2} from "./config"
export default {
    components:{
        dzsFormHeader
    },
    computed:{
        formOptions(){
            return {
                formProps : {
                    "label-width" : "100px",
                },
                formItem : [
                    {
                        label: "输入框", 
                        key: "input", 
                        type : "input",
                        rules:[
                            { required: true, message: '请输入输入框名称', trigger: 'blur' },
                        ],
                        props:{
                            placeholder : "请输入输入框",
                            tips : "这个是一个输入框"
                        },
                        defaultValue : "我是一个默认值",
                        span : 6
                    },
                    {
                        label: "下拉框", 
                        key: "select", 
                        type : "select",
                        rules:[
                            { required: true, message: '请选择下拉框', trigger: 'change' },
                        ],
                        props:{
                            placeholder : "请选择下拉框",
                            clearable  : true
                        },
                        children:[
                            {
                                label : "参数1",
                                value : 1
                            },
                            {
                                label : "参数2",
                                value : 2
                            },
                        ],
                        span : 6
                    },
                    {
                        label : "日期",
                        key : "date",
                        type : "date",
                        span : 8
                    },
                    {
                        label : "开关",
                        key : "switch",
                        type : "switch",
                        span : 6
                    },
                    {
                        label: "多选框", 
                        key: "checkbox", 
                        type : "checkbox",
                        rules:[],
                        props:{},
                        children:[
                            {
                                label : "选项1",
                                value : 1
                            },
                            {
                                label : "选项2",
                                value : 2
                            },
                        ],
                    },
                    {
                        label: "单选框", 
                        key: "radio", 
                        type : "radio",
                        rules:[],
                        props:{},
                        children:[
                            {
                                label : "选项1",
                                value : 1
                            },
                            {
                                label : "选项2",
                                value : 2
                            },
                        ],
                        defaultValue : 1
                    },
                    {
                        label: "自定义组件", 
                        key: "mySlot", 
                        type : "input",
                        isSlot : true , 
                        span : 6
                    },
                ]
            }
        }
    },
    data(){
        return {
            code1 : code1,
            code2 : code2
        }
    }
}
</script>
<style lang="less" scoped>

</style>