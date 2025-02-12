<template>
    <section>
        <public-item title="切片" :code="code1">
            <div class="btn-box">
                <el-upload class="upload-demo" ref="upload" action="#" :limit="1" :show-file-list="false"
                    :auto-upload="false" :on-change="changeFileBySlice">
                    <el-button slot="trigger" type="primary">选取文件</el-button>
                </el-upload>
                <el-button type="primary" @click="downloadFileBySlice">下载切片文件</el-button>
            </div>
            <div class="tips">具体文件信息 请点击F12查看</div>
        </public-item>
        <public-item title="合并" :code="code2">
            <div class="btn-box">
                <input type="file" ref="myFile" multiple @change="changeFileByMerge">
                <el-button type="primary" @click="downloadFileByMerge">下载合并文件</el-button>
            </div>
            <div class="tips">具体文件信息 请点击F12查看</div>
        </public-item>
        <public-item title="参数说明" :list="tableData"></public-item>
        <public-item title="分片返回参数说明" :list="sliceTable"></public-item>
        <public-item title="合并返回参数说明" :list="mergeTable"></public-item>
        <public-item title="源代码查看" :links="links"></public-item>
        <dzs-backtop  target=".el-main"></dzs-backtop>
        <dzs-navigation-title></dzs-navigation-title>
    </section>
</template>
<script>
import fileSliceMerge from "@/tool/file-slice-and-merge.js";
import { code1, code2 } from "./config";
import {tableData , mergeTable , sliceTable} from "./desc";
export default {
    data() {
        return {
            code1: {
                title: "代码示例",
                code: code1,
                lang: "js"
            },
            code2: {
                title: "代码示例",
                code: code2,
                lang: "js"
            },
            fileInfo : {},
            mergeFileInfo : {},
            fileList : [],
            tableData: tableData,
            mergeTable : mergeTable,
            sliceTable : sliceTable,
            links : {
                href : "https://github.com/zsduan/zsduan-summary/blob/master/src/tool/file-slice-and-merge.js",
                title : "源码"
            }
        }
    },
    methods:{
        changeFileBySlice(file){
            this.fileList = [];
            fileSliceMerge({
                file : file.raw,
                type : 'slice',
                success : (data) => {
                    console.log("分片文件信息 ==>",data);
                    this.fileInfo = data;
                }
            })
        },
        changeFileByMerge(){
            fileSliceMerge({
                file : 'myFile',
                Vue : this,
                type : 'merge',
                success : (data) => {
                    console.log("合并文件信息 ==>",data);
                    this.mergeFileInfo = data;
                }
            })

        },
        /**下载分片*/
        downloadFileBySlice(){
            let count = 0;
            this.fileInfo.list.forEach((v, index) => {
                setTimeout(() => {
                    this.downFile(v.file, this.fileInfo.filename + "-" + v.sort);
                    count++;
                    if (count == this.fileInfo.list.length) {
                        this.$message.success("下载完毕");
                    }
                }, 1000 * index);
            })
        },

        /**下载合并文件*/
        downloadFileByMerge(){
            this.downFile(this.mergeFileInfo.file, this.mergeFileInfo.filename);
        },
        /**下载文件*/ 
        downFile(v, name) {
            const a = document.createElement("a");
            a.setAttribute("download", name);
            a.href = URL.createObjectURL(v);
            a.click();
        }
    }
}
</script>
<style lang="scss" scoped>
.btn-box{
    display: flex;
    .el-button{
        margin-right: 10px;
    }
}
.tips {
    margin-top: 10px;
    color: #666;
}
</style>