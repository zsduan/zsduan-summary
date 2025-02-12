<template>
    <section>
        <public-item title="全部配置(*号参数必填)" tips="基于 qrcode@1.5.1 开发" :code="code1">
            <dzs-form :options="formOptions"  v-model="options" :showFooter="false"></dzs-form>
            <div class="qr-code-box">
                <dzs-qr-code :option="options"></dzs-qr-code>
            </div>
        </public-item>
        <public-item title="参数说明" :list="tableData"></public-item>
        <public-item title="组件源代码查看" :links="links"></public-item>
        <dzs-backtop  target=".el-main"></dzs-backtop>
        <dzs-navigation-title></dzs-navigation-title>
    </section>
</template>
<script>
import dzsQrCode from "@/components/dzs-qr-code";
import dzsForm from "@/components/dzs-form";
import {code1 } from "./config.js";
import {tableData} from "./desc";
export default {
    components: {
        dzsQrCode,
        dzsForm
    },
    computed:{
        formOptions(){
            return {
                formProps : {
                    "label-width" : "120px",
                },
                formItem : [
                    {
                        label: "二维码内容", 
                        key: "value", 
                        type : "input",
                        rules:[
                            { required: true, message: '请输入二维码内容', trigger: 'blur' },
                        ],
                    },
                    {
                        label: "二维码大小", 
                        key: "size", 
                        type : "input",
                        rules:[
                            { required: true, message: '请输入二维码大小', trigger: 'blur' },
                        ],
                        props:{
                            type : "number",
                        },
                        span : 12
                    },
                    {
                        label: "二维码间距", 
                        key: "margin", 
                        type : "input",
                        rules:[
                            { required: true, message: '请输入二维码间距', trigger: 'blur' },
                        ],
                        props:{
                            type : "number",
                        },
                        span : 12
                    },
                    {
                        label: "二维码颜色", 
                        key: "fgColor", 
                        type : "color",
                        rules:[
                            { required: true, message: '请选择二维码颜色', trigger: 'blur' },
                        ],
                        span : 12
                    },
                    {
                        label: "背景颜色", 
                        key: "bgColor", 
                        type : "color",
                        rules:[
                            { required: true, message: '请选择二维码背景颜色', trigger: 'blur' },
                        ],
                        span : 12
                    },
                    {
                        label: "logo地址 ", 
                        key: "logo", 
                        type : "input",
                        props:{
                            tips : "仅支持网络图片"
                        },
                    },
                    {
                        label: "logo宽度", 
                        key: "logoWidth", 
                        type : "input",
                        props:{
                            type : "number",
                        },
                        defaultValue : 50,
                        span : 12
                    },
                    {
                        label: "logo高度", 
                        key: "logoHeight", 
                        type : "input",
                        props:{
                            type : "number",
                        },
                        defaultValue : 50,
                        span : 12
                    },
                    {
                        label: "底部文字", 
                        key: "text", 
                        type : "input",
                    },
                    {
                        label: "底部字体配置", 
                        key: "font", 
                        type : "input",
                        span : 12
                    },
                    {
                        label: "字体颜色", 
                        key: "fontColor", 
                        type : "color",
                        span : 12
                    },
                    {
                        label: "是否绘制边框", 
                        key: "showBoder", 
                        type : "switch",
                    },
                    {
                        label: "边框大小", 
                        key: "lineWidth", 
                        type : "input",
                        props:{
                            type : "number",
                        },
                        span : 12
                    },
                    {
                        label: "边框颜色", 
                        key: "lineColor", 
                        type : "color",
                        span : 12
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
            options : {
                value : "https://anran233.com",
                size : 200,
                margin : 4,
                fgColor : "#000000",
                bgColor : "#ffffff",
                correctLevel : "H",
                logo : "https://anran233.com/img/Applet.jpg",
                logoWidth : 50,
                logoHeight : 50,
                text : "zs.duan的总结",
                font: "bold 16px Arial",
                fontColor: "#000000",
                lineWidth: 2,
                lineColor: "#000000",
                showBoder: true,
            },
            links: {
                href: "https://github.com/zsduan/zsduan-summary/blob/master/src/components/dzs-form/index.vue",
                title: "组件源码"
            },
            tableData: tableData,
        }
    },
    methods: {
        
    }
}
</script>
<style lang="scss" scoped></style>