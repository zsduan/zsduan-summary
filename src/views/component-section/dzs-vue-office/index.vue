<template>
    <section>
        <public-item title="word预览" tips="基于 @vue-office/docx@1.6.0  vue-demi 仅支持docx" :code="code1">
            <el-input v-model="wordUrl" placeholder="word预览地址">
                <template slot="prepend">网络地址模式</template>
            </el-input>
            <div class="upload-flex">
                <el-input v-model="wordUrl" disabled placeholder="word预览地址">
                    <template slot="prepend">本地文件模式</template>
                </el-input>
                <el-upload class="upload-demo" action="#" :on-change="changeFileByWord" accept=".docx"
                    :auto-upload="false" multiple :limit="1" :show-file-list="false">
                    <el-button size="small" type="primary">点击上传</el-button>
                </el-upload>
            </div>
            <dzs-vue-office :url="wordUrl" type="word"></dzs-vue-office>
        </public-item>

        <public-item title="excel预览" tips="基于 @vue-office/excel@1.6.0 vue-demi 仅支持xlsx" :code="code2">
            <el-input v-model="excelUrl" placeholder="excel预览地址">
                <template slot="prepend">网络地址模式</template>
            </el-input>
            <div class="upload-flex">
                <el-input v-model="excelUrl" disabled placeholder="excel预览地址">
                    <template slot="prepend">本地文件模式</template>
                </el-input>
                <el-upload class="upload-demo" action="#" :on-change="changeFileByExcel" accept=".xlsx"
                    :auto-upload="false" multiple :limit="1" :show-file-list="false">
                    <el-button size="small" type="primary">点击上传</el-button>
                    <div slot="tip" class="el-upload__tip">只能上传xlsx文件</div>
                </el-upload>
            </div>
            <dzs-vue-office :url="excelUrl" type="excel"></dzs-vue-office>
        </public-item>

        <public-item title="pdf预览" tips="基于 @vue-office/pdf@1.6.0 vue-demi" :code="code3">
            <el-input v-model="pdfUrl" placeholder="pdf预览地址">
                <template slot="prepend">网络地址模式</template>
            </el-input>
            <div class="upload-flex">
                <el-input v-model="pdfUrl" disabled placeholder="pdf预览地址">
                    <template slot="prepend">本地文件模式</template>
                </el-input>
                <el-upload class="upload-demo" action="#" :on-change="changeFileByPdf" accept=".PDF"
                    :auto-upload="false" multiple :limit="1" :show-file-list="false">
                    <el-button size="small" type="primary">点击上传</el-button>
                    <div slot="tip" class="el-upload__tip">只能上传PDF文件</div>
                </el-upload>
            </div>
            <dzs-vue-office :url="pdfUrl" type="pdf"></dzs-vue-office>
        </public-item>

        <public-item title="ppt预览" tips="基于pptjs jq 请在头部引入pptjs jq" :code="code4">
            <el-input v-model="pptUrl" placeholder="ppt预览地址">
                <template slot="prepend">网络地址模式</template>
            </el-input>
            <div class="upload-flex">
                <el-input v-model="pptUrl" disabled placeholder="ppt预览地址">
                    <template slot="prepend">本地文件模式</template>
                </el-input>
                <el-upload class="upload-demo" action="#" :on-change="changeFileByPPT" accept=".pptx"
                    :auto-upload="false" multiple :limit="1" :show-file-list="false">
                    <el-button size="small" type="primary">点击上传</el-button>
                    <div slot="tip" class="el-upload__tip">只能上传pptx文件</div>
                </el-upload>
            </div>
            <dzs-vue-office :url="pptUrl" type="ppt"></dzs-vue-office>
        </public-item>

        <public-item title="txt预览" :code="code5">
            <el-input v-model="textUrl" placeholder="txt预览地址">
                <template slot="prepend">网络地址模式</template>
            </el-input>
            <div class="upload-flex">
                <el-input v-model="textUrl" disabled placeholder="txt预览地址">
                    <template slot="prepend">本地文件模式</template>
                </el-input>
                <el-upload class="upload-demo" action="#" :on-change="changeFileByTxt" accept=".txt"
                    :auto-upload="false" multiple :limit="1" :show-file-list="false">
                    <el-button size="small" type="primary">点击上传</el-button>
                    <div slot="tip" class="el-upload__tip">只能上传txt文件</div>
                </el-upload>
            </div>
            <dzs-vue-office :url="textUrl" type="txt"></dzs-vue-office>
        </public-item>

        <public-item title="参数说明" :list="tableData"></public-item>
        <public-item title="组件源代码查看" :links="links"></public-item>
        <dzs-backtop  target=".el-main"></dzs-backtop>
        <dzs-navigation-title></dzs-navigation-title>
    </section>
</template>
<script>
import dzsVueOffice from "@/components/dzs-vue-office";
import {code1 , code2 , code3 , code4 , code5 } from "./config.js";
import {tableData} from "./desc.js";
export default {
    components: {
        dzsVueOffice
    },
    data() {
        return {
            wordUrl: "",
            excelUrl: "",
            pdfUrl: "",
            textUrl: "",
            pptUrl: "",
            code1: {
                title: "代码示例",
                code: code1,
                lang: "vue"
            },
            code2: {
                title: "代码示例",
                code: code2,
                lang: "vue"
            },
            code3: {
                title: "代码示例",
                code: code3,
                lang: "vue"
            },
            code4: {
                title: "代码示例",
                code: code4,
                lang: "vue"
            },
            code5: {
                title: "代码示例",
                code: code5,
                lang: "vue"
            },
            links: {
                href: "https://github.com/zsduan/zsduan-summary/blob/master/src/components/dzs-vue-office/index.vue",
                title: "组件源码"
            },
            tableData,
        }
    },
    methods: {
        changeFileByWord(file) {
            this.wordUrl = URL.createObjectURL(file.raw);
        },
        changeFileByExcel(file) {
            this.excelUrl = URL.createObjectURL(file.raw);
        },
        changeFileByPdf(file) {
            this.pdfUrl = URL.createObjectURL(file.raw);
        },
        changeFileByPPT(file) {
            this.pptUrl = URL.createObjectURL(file.raw);
        },
        changeFileByTxt(file) {
            this.textUrl = URL.createObjectURL(file.raw);
        },
    },
}
</script>
<style lang="scss" scoped>
.upload-flex {
    display: flex;
    align-items: center;
    padding: 10px 0;

    .el-button {
        margin-left: 10px;
    }
}
</style>