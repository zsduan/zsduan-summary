<!--
 * @Author: zs.duan
 * @Date: 2022-09-27 10:39:53
 * @LastEditors: zs.duan
 * @LastEditTime: 2022-09-28 13:50:00
 * @FilePath: \vue2+js+eui+template\src\views\form\form.vue
-->
<template>
    <div>
        <dzs-header title="表单组件"></dzs-header>
        <div class="page">
            <h2>基础用法</h2>
            <div class="item">
                <dzs-form :options="formOptions"></dzs-form>
                <dzs-code title="源代码" :value="code1"></dzs-code>
                <dzs-code title="全部配置" :value="code2"></dzs-code>
            </div>
        </div>
    </div>
</template>
<script>
import dzsForm from "@/components/dzs-form/index.vue";
import {code1 , code2} from "./config"
export default {
    components:{
        dzsForm
    },
    computed:{
        formOptions(){
            return {
                formProps : {
                    "label-width" : "110px",
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
                            placeholder : "请输入输入框"
                        },
                        span : 24
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
                        span : 12
                    },
                    {
                        label : "日期",
                        key : "date",
                        type : "date",
                        span : 12
                    },
                    {
                        label : "开关",
                        key : "switch",
                        type : "switch",
                        span : 12
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
                        label: "单选框 默认值", 
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
                        label: "图片", 
                        key: "uploadImg", 
                        type : "uploadImg",
                        rules:[],
                        props:{
                            autoUpload : false
                        },
                    },
                    {
                        label: "富文本", 
                        key: "edit", 
                        type : "edit",
                        rules:[],
                        props:{},
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