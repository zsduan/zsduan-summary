<template>
    <div>
        <dzs-header title="xlsx/excel读取" v-if="!newIndex"></dzs-header>
        <div class="page">
            <div class="item">
                <h2>word预览</h2>
                <input type="file" ref="myfile" accept=".docx" @change="changeWordFile"/>
                <div>
                    <div class="views-box">
                        <vue-office-docx :src="wordSrc"></vue-office-docx>
                    </div>
                </div>
            </div>
            <div class="item">
                <h2>excel预览</h2>
                <input type="file" ref="myfile" accept=".xlsx" @change="changeExcelFile"/>
                <div>
                    <div class="views-box" v-if="excelSrc">
                        <vue-office-excel :src="excelSrc"></vue-office-excel>
                    </div>
                </div>
            </div>
            <div class="item">
                <h2>pdf预览</h2>
                <input type="file" ref="myfile" accept=".pdf" @change="changePdfFile"/>
                <div>
                    <div class="views-box" v-if="pdfSrc">
                        <vue-office-pdf :src="pdfSrc"></vue-office-pdf>
                    </div>
                </div>
            </div>
        </div>
        <el-backtop :visibility-height="20" v-if="!newIndex">
        </el-backtop>
    </div>
</template>
<script>
import VueOfficeDocx from '@vue-office/docx';
//引入VueOfficeExcel组件
import VueOfficeExcel from '@vue-office/excel'
//引入相关样式
import '@vue-office/excel/lib/index.css';
import VueOfficePdf from '@vue-office/pdf';
const ExcelJS = require('exceljs');
export default {
    name : "vue-office",
    props:{
        newIndex : {
            type : Boolean,
            default:()=>{
                return false
            }
        }
    },
    components:{
        VueOfficeDocx,
        VueOfficeExcel,
        VueOfficePdf,
    },
    data(){
        return {
            wordSrc : "",
            excelSrc : "",
            pdfSrc : "",
        }
    },
    async mounted(){       
    },
    methods:{
        changeWordFile(e){
            let file = e.target.files[0]; 
            // 转成 blod地址
            let url = URL.createObjectURL(file);
            this.wordSrc = url;
        },
        changeExcelFile(e){
            let file = e.target.files[0];
            // 转成 blod地址
            let url = URL.createObjectURL(file);
            this.excelSrc = url;
        },
        changePdfFile(e){
            let file = e.target.files[0];
            // 转成 blod地址
            let url = URL.createObjectURL(file);
            this.pdfSrc = url;
        },
        changePptFile(e){
            let file = e.target.files[0];
            // 转成 blod地址
            let url = URL.createObjectURL(file);
            this.pptSrc = url;
        }
    }
}
</script>
<style lang="less" scoped>
/deep/.x-spreadsheet-sheet{
    height: 500px;
}
</style>