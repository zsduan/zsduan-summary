<template>
    <div v-if="url">
        <div class="views-box" v-if="type == 'word'">
            <vue-office-docx :src="url"></vue-office-docx>
        </div>
        <div class="views-box" :style="{height : myExcelHeight}" v-if="type == 'excel'">
            <vue-office-excel :src="url"></vue-office-excel>
        </div>
        <div class="views-box" v-if="type == 'pdf'">
            <vue-office-pdf :src="url"></vue-office-pdf>
        </div>
        <div class="views-box" v-if="type == 'ppt'">
            <dzs-office-ppt :src="url"></dzs-office-ppt>
        </div>
        <div class="views-box" v-if="type == 'txt'">
            <pre v-html="text"></pre>
        </div>
    </div>
</template>
<script>
import VueOfficeDocx from '@vue-office/docx';
//引入VueOfficeExcel组件
import VueOfficeExcel from '@vue-office/excel'
//引入相关样式
import '@vue-office/excel/lib/index.css';
import VueOfficePdf from '@vue-office/pdf';
import dzsOfficePpt from "./components/dzs-office-ppt.vue";
export default {
    name: "dzsVueOffice",
    components: {
        VueOfficeDocx,
        VueOfficeExcel,
        VueOfficePdf,
        dzsOfficePpt
    },
    props: {
        url: {
            type: String,
            default: () => {
                return "";
            }
        },
        type: {
            type: String,
            default: () => {
                return "pdf";
            }
        },
        excelHeight: {
            type: [Number, String],
            default: () => {
                return 500;
            }
        },
    },
    computed: {
        myExcelHeight() {
            if (typeof this.excelHeight == 'number') {
                return this.excelHeight + 'px';
            }
            return this.excelHeight
        }
    },
    watch : {
        url : {
            handler(val) {
                if (this.type == 'txt') {
                    this.getText();
                }

            },
            immediate : true
        }
    },
    data() {
        return {
            text : ''
        }
    },
    methods: {
        getText(){
            this.text = ''
            if(!this.url) return ;
            fetch(this.url)
            .then(res => res.text())
            .then(text => {
                this.text = text;
            })
        }
    }
}
</script>
<style lang="scss" scoped>
.views-box{
    pre {
        white-space: pre-wrap;
        border: 1px solid #ccc;
        padding: 10px;
    }
}
</style>