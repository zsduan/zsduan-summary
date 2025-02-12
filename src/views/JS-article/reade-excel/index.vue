<template>
    <section>
        <public-item tips="基于xlsx包开发"></public-item>
        <public-item title="通过ref读取文件" :code="code1">
            <input type="file" ref="myfile" accept=".xls,.xlsx" @change="changeFile" />
            <div>
                <div v-for="(item, index) in xlsxInfo.html" :key="index">
                    <div class="table_name">预览名称 {{ xlsxInfo.xlsxname }} - {{ index }}</div>
                    <div class="views-box" v-html="item"></div>
                </div>
            </div>
        </public-item>
        <public-item title="通过id读取文件" :code="code2">
            <input type="file" id="myfile" accept=".xls,.xlsx" @change="changeFileByID" />
            <div>
                <div v-for="(item, index) in xlsxInfoByID.html" :key="index">
                    <div class="table_name">预览名称 {{ xlsxInfoByID.xlsxname }} - {{ index }}</div>
                    <div class="views-box" v-html="item"></div>
                </div>
            </div>
        </public-item>
        <public-item title="通过文件流读取文件" :code="code3">
            <input type="file" accept=".xls,.xlsx" @change="changeFileByBlod" />
            <div>
                <div v-for="(item, index) in xlsxInfoByBlod.html" :key="index">
                    <div class="table_name">预览名称 {{ xlsxInfoByBlod.xlsxname }} - {{ index }}</div>
                    <div class="views-box" v-html="item"></div>
                </div>
            </div>
        </public-item>
        <public-item title="通过网络地址读取文件" :code="code4">
            <div class="ipt-box">
                <el-input v-model="httpUrl" placeholder="请输入网络地址"></el-input>
                <el-button @click="changeFileByHttp">读取</el-button>
            </div>
            <div>
                <div v-for="(item, index) in xlsxInfoByHttp.html" :key="index">
                    <div class="table_name">预览名称 {{ xlsxInfoByHttp.xlsxname }} - {{ index }}</div>
                    <div class="views-box" v-html="item"></div>
                </div>
            </div>
        </public-item>
        <public-item title="支持导出与格式转换" :code="code5">
            <input type="file" accept=".xls,.xlsx" @change="changeFileByExport" />
            <div class="button-box">
                <el-button @click="outCvs">导出为 cvs</el-button>
                <el-button @click="outXls">导出为 xls</el-button>
                <el-button @click="outXlsx">导出为 xlsx</el-button>
            </div>
        </public-item>
        <public-item title="支持Promise" :code="code6">
            <input type="file" accept=".xls,.xlsx" @change="changeFileByPromise" />
            <div>
                <div v-for="(item, index) in xlsxInfoByPromise.html" :key="index">
                    <div class="table_name">预览名称 {{ xlsxInfoByPromise.xlsxname }} - {{ index }}</div>
                    <div class="views-box" v-html="item"></div>
                </div>
            </div>
        </public-item>
        <public-item title="参数说明" :list="tableData"></public-item>
        <public-item title="返回参数说明" :list="returnTableData"></public-item>
        <public-item title="源代码查看" :links="links"></public-item>
        <dzs-backtop  target=".el-main"></dzs-backtop>
        <dzs-navigation-title></dzs-navigation-title>
    </section>
</template>
<script>
import readeExcel, { asyncReadeExcel } from "@/tool/readeExcel";
import {code1 , code2 , code3 , code4 , code5 , code6} from "./config.js";
import {tableData , returnTableData} from "./desc.js";
export default {
    data() {
        return {
            xlsxInfo: {},
            xlsxInfoByID: {},
            xlsxInfoByBlod: {},
            xlsxInfoByHttp: {},
            httpUrl: "https://anran233.com/QMX/项目人员入场申请单（修订 ）段钟山 20230410.xlsx",
            xlsxInfoByExport: {},
            xlsxInfoByPromise: {},
            code1 : {
                title : "代码示例",
                code : code1,
                lang : "js"
            },
            code2 : {
                title : "代码示例",
                code : code2,
                lang : "js"
            },
            code3 : {
                title : "代码示例",
                code : code3,
                lang : "js"
            },
            code4 : {
                title : "代码示例",
                code : code4,
                lang : "js"
            },
            code5 : {
                title : "代码示例",
                code : code5,
                lang : "js"
            },
            code6 : {
                title : "代码示例",
                code : code6,
                lang : "js"
            },
            tableData ,
            returnTableData,
            links: {
                href: "https://github.com/zsduan/zsduan-summary/blob/master/src/tool/calender.js",
                title: "源码"
            },
        };
    },
    methods: {
        changeFile(e) {
            readeExcel({
                file: "myfile",
                Vue: this,
                success: (res) => {
                    console.log("res ==>" ,res);
                    this.xlsxInfo = res;
                },
            })
        },
        changeFileByID() {
            readeExcel({
                file: "myfile",
                success: (res) => {
                    this.xlsxInfoByID = res;
                },
            })
        },
        changeFileByBlod(e) {
            let file = e.target.files[0];
            readeExcel({
                file: file,
                success: (res) => {
                    this.xlsxInfoByBlod = res;
                },
            })
        },
        changeFileByHttp() {
            readeExcel({
                url: this.httpUrl,
                success: (res) => {
                    this.xlsxInfoByHttp = res;
                },
            })
        },
        changeFileByExport(e) {
            let file = e.target.files[0];
            readeExcel({
                file: file,
                success: (res) => {
                    this.xlsxInfoByExport = res;
                },
            })
        },
        /**导出为 cvs*/
        outCvs() {
            if (!this.xlsxInfoByExport.xlsxname) {
                this.$message.error("请先选择文件");
                return;
            }
            this.xlsxInfoByExport.outCvs();
        },
        /**导出为 xls*/
        outXls() {
            if (!this.xlsxInfoByExport.xlsxname) {
                this.$message.error("请先选择文件");
                return;
            }
            this.xlsxInfoByExport.outXls();
        },
        /**导出为 xlsx*/
        outXlsx() {
            if (!this.xlsxInfoByExport.xlsxname) {
                this.$message.error("请先选择文件");
                return;
            }
            this.xlsxInfoByExport.outXlsx();
        },
        changeFileByPromise(e) {
            asyncReadeExcel({
                file: e.target.files[0],
            }).then((res) => {
                this.xlsxInfoByPromise = res;
            })
        },
    }
};
</script>
<style lang="scss" scoped>
.ipt-box {
    display: flex;

    .el-button {
        margin-left: 10px;
    }
}

.button-box {
    margin-top: 10px;
}
</style>