<template>
    <div class="qr-code">
        <div class="page">
            <h2>表单配置</h2>
            <div class="item">
                <dzs-form :options="formOptions"  v-model="options" :showBtn="false"></dzs-form>
                <dzs-qr-code :option="options"></dzs-qr-code>
            </div>
            <h2>基础用法</h2>
            <div class="item">
                <dzs-code :value="code1"></dzs-code>
                <dzs-qr-code title="源代码" :option="options1"></dzs-qr-code>
            </div>
            <h2>设置大小</h2>
            <div class="item">
                <dzs-code :value="code2"></dzs-code>
                <dzs-qr-code title="源代码" :option="options2"></dzs-qr-code>
            </div>
            <h2>设置logo</h2>
            <div class="item">
                <dzs-code :value="code3"></dzs-code>
                <dzs-qr-code title="源代码" :option="options3"></dzs-qr-code>
            </div>
            <h2>参数说明</h2>
            <div class="item">
                <dzs-table :tableHeader="descHeader" :list="descData" :showOperation="false" :tableOptions="descTableOptions">
                </dzs-table>
            </div>
            <h2>组件源代码下载</h2>
            <div class="item">
                <a target="_blank" href="https://github.com/zsduan/zsduan-summary/blob/master/src/components/dzs-qr-code/index.vue">二维码组件下载地址</a>
            </div>
        </div>
        <el-backtop :visibility-height="20"></el-backtop>
    </div>
</template>
<script>
import dzsQrCode from "@/components/dzs-qr-code/index.vue";
import dzsForm from "@/components/dzs-form/index.vue";
import { code1 , code2 , code3 } from "./config";
import {descHeader , descData , descTableOptions} from "./desc";
export default {
    components:{
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
                        props:{
                            placeholder : "请输入二维码内容",
                        },
                        span : 24
                    },
                    {
                        label: "二维码大小", 
                        key: "size", 
                        type : "input",
                        rules:[
                            { required: true, message: '请输入二维码大小', trigger: 'blur' },
                        ],
                        props:{
                            placeholder : "请输入二维码大小",
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
                            placeholder : "请输入二维码间距",
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
                            placeholder : "请输入logo地址",
                            tips : "仅支持网络图片"
                        },
                        span : 24
                    },
                    {
                        label: "logo宽度", 
                        key: "logoWidth", 
                        type : "input",
                        props:{
                            placeholder : "请输入logo宽度",
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
                            placeholder : "请输入logo高度",
                            type : "number",
                        },
                        defaultValue : 50,
                        span : 12
                    },
                    {
                        label: "底部文字", 
                        key: "text", 
                        type : "input",
                        props:{
                            placeholder : "请输入底部文字",
                        },
                        span : 24
                    },
                    {
                        label: "底部字体配置", 
                        key: "font", 
                        type : "input",
                        props:{
                            placeholder : "请输入底部文字",
                        },
                        span : 12
                    },
                    {
                        label: "字体颜色", 
                        key: "fontColor", 
                        type : "color",
                        props:{
                            placeholder : "请输入字体颜色",
                        },
                        span : 12
                    },
                    {
                        label: "是否绘制边框", 
                        key: "showBoder", 
                        type : "switch",
                        span : 24
                    },
                    {
                        label: "边框大小", 
                        key: "lineWidth", 
                        type : "input",
                        props:{
                            placeholder : "请输入边框大小",
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
    data(){
        return {
            code1 : code1,
            code2 : code2,
            code3 : code3,
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
            options1 : {
                value : "https://anran233.com",
            },
            options2 : {
                value : "https://anran233.com",
                size : 100,
            },
            options3 : {
                value : "https://anran233.com",
                logo : "https://anran233.com/img/Applet.jpg",
            },
            descHeader : descHeader,
            descData : descData,
            descTableOptions : descTableOptions
        }
    },
    methods:{
        onSubmit(data){
            // this.options.size = data.size;
            // this.options.value = data.value;
            // this.options.margin = data.margin;
            // this.options.fgColor = data.fgColor;
            // this.options.bgColor = data.bgColor;
            // this.options.logo = data.logo;
            // this.options.logoWidth = data.logoWidth;
            // this.options.logoHeight = data.logoHeight;
            // this.options.text = data.text;
            // this.options.font = data.font;
            // this.options.fontColor = data.fontColor;
            // this.options.showBoder = data.showBoder;
            // this.options.lineWidth = data.lineWidth;
            // this.options.lineColor = data.lineColor;
            // this.options = data;
        }
    }
}
</script>
<style lang="less" scoped>
</style>