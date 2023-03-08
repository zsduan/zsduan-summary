<template>
    <div class="qr-code">
        <dzs-header title="生成二维码" v-if="!newIndex"></dzs-header>
        <div class="page">
            <h2>基础用法</h2>
            <div class="item">
                <dzs-form :options="formOptions" @onSubmit="onSubmit"></dzs-form>
                <dzs-qr-code :option="options"></dzs-qr-code>
            </div>
        </div>
        <el-backtop :visibility-height="20" v-if="!newIndex">
        </el-backtop>
    </div>
</template>
<script>
import dzsQrCode from "@/components/dzs-qr-code/index.vue";
import dzsForm from "@/components/dzs-form/index.vue";
export default {
    props:{
        newIndex : {
            type : Boolean,
            default:()=>{
                return false
            }
        }
    },
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
                        defaultValue : "https://www.baidu.com",
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
                        defaultValue : 400,
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
                        defaultValue : 4,
                        span : 12
                    },
                    {
                        label: "二维码颜色", 
                        key: "fgColor", 
                        type : "color",
                        rules:[
                            { required: true, message: '请选择二维码颜色', trigger: 'blur' },
                        ],
                        defaultValue : "#000000",
                        span : 12
                    },
                    {
                        label: "背景颜色", 
                        key: "bgColor", 
                        type : "color",
                        rules:[
                            { required: true, message: '请选择二维码背景颜色', trigger: 'blur' },
                        ],
                        defaultValue : "#ffffff",
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
                        defaultValue : "https://yy.yunweicn.com/mp-wx-img/userIcon.png",
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
                        defaultValue : "zs.duan的总结",
                        span : 24
                    },
                    {
                        label: "底部字体配置", 
                        key: "font", 
                        type : "input",
                        props:{
                            placeholder : "请输入底部文字",
                        },
                        defaultValue : "bold 16px Arial",
                        span : 12
                    },
                    {
                        label: "字体颜色", 
                        key: "fontColor", 
                        type : "color",
                        props:{
                            placeholder : "请输入字体颜色",
                        },
                        defaultValue : "#000000",
                        span : 12
                    },
                    {
                        label: "是否绘制边框", 
                        key: "showBoder", 
                        type : "switch",
                        defaultValue : true,
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
                        defaultValue : 2,
                        span : 12
                    },
                    {
                        label: "边框颜色", 
                        key: "lineColor", 
                        type : "color",
                        defaultValue : "#000000",
                        span : 12
                    },
                ]
            }
        }
    },
    data(){
        return {
            options : {
                value : "https://www.baidu.com",
                size : 400,
                margin : 4,
                fgColor : "#000000",
                bgColor : "#ffffff",
                correctLevel : "H",
                logo : "https://yy.yunweicn.com/mp-wx-img/userIcon.png",
                logoWidth : 50,
                logoHeight : 50,
                text : "zs.duan的总结",
                font: "bold 16px Arial",
                fontColor: "#000000",
                lineWidth: 2,
                lineColor: "#000000",
                showBoder: true,
            }
        }
    },
    methods:{
        onSubmit(data){
            console.log(data);
            this.options.size = data.size;
            this.options.value = data.value;
            this.options.margin = data.margin;
            this.options.fgColor = data.fgColor;
            this.options.bgColor = data.bgColor;
            this.options.logo = data.logo;
            this.options.logoWidth = data.logoWidth;
            this.options.logoHeight = data.logoHeight;
            this.options.text = data.text;
            this.options.font = data.font;
            this.options.fontColor = data.fontColor;
            this.options.showBoder = data.showBoder;
            this.options.lineWidth = data.lineWidth;
            this.options.lineColor = data.lineColor;
            // this.options = data;
        }
    }
}
</script>
<style lang="less" scoped>
</style>