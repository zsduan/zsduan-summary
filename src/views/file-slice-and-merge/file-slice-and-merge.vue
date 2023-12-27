<!--
 * @Author: zs.duan
 * @Date: 2022-11-25 17:20:17
 * @LastEditors: zs.duan
 * @LastEditTime: 2023-01-31 11:53:26
 * @FilePath: \vue2+elui+template\src\views\file-slice-and-merge\file-slice-and-merge.vue
-->
<template>
    <div>
        <dzs-header title="vue动态路由" v-if="!newIndex"></dzs-header>
        <div class="page">
            <div class="tips-box">大文件的切片和分割</div>
            <h2>切片</h2>
            <div class="item">
                <input type="file" ref="myfile" @change="changeFile1" />
                <button v-if="fileInfo.list" @click="downChunkFile">下载分片</button>
                <div>
                    <div>文件信息请f12查看</div>
                    <div>{{ fileInfo }}</div>
                </div>
                <dzs-code title="源代码" :value="code1"></dzs-code>
            </div>
            <h2>合并</h2>
            <div class="item">
                <input type="file" ref="myfile1" multiple @change="changeFile2" />
                <button v-if="mergeFileInfo.filename" @click="downMergeFile">下载合并</button>
                <div>
                    <div>文件信息请f12查看</div>
                    <div>{{ mergeFileInfo }}</div>
                </div>
                <dzs-code title="源代码" :value="code2"></dzs-code>
            </div>
            <h2>源代码下载/查看</h2>
            <div class="item">
                <a target="_blank"
                    href="https://github.com/zsduan/zsduan-summary/blob/master/src/utils/file-slice-and-merge.js">下载/查看地址</a>

            </div>
        </div>
        <el-backtop :visibility-height="20" v-if="!newIndex"></el-backtop>
    </div>
</template>
<script>
import { code1, code2 } from "./config";
import fileSliceMerge from "../../utils/file-slice-and-merge"
export default {
    props: {
        newIndex: {
            type: Boolean,
            default: () => {
                return false
            }
        }
    },
    data() {
        return {
            code1: code1,
            code2: code2,
            fileInfo: {},
            mergeFileInfo: {}
        }
    },
    mounted() {

    },
    methods: {
        // 切片
        changeFile1() {
            fileSliceMerge({
                file: "myfile",
                Vue: this,
                chunkSize: 1024 * 1024 * 5,
                md5: true,
                success: (res) => {
                    console.log("分片文件返回 ==>", res);
                    this.fileInfo = res;
                }
            })
        },
        /**下载分片*/
        downChunkFile() {
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
        // 合并
        changeFile2() {
            fileSliceMerge({
                file: "myfile1",
                Vue: this,
                type: "merge",
                success: (res) => {
                    console.log("合并文件返回 ==>", res);
                    this.mergeFileInfo = res;
                    // 
                }
            })
        },
        /**下载合并*/
        downMergeFile(){
            this.downFile(this.mergeFileInfo.file , this.mergeFileInfo.filename);
        },
        // 下载文件
        downFile(v, name) {
            const a = document.createElement("a");
            a.setAttribute("download", name);
            a.href = URL.createObjectURL(v);
            a.click();
        }
    }
}
</script>
<style lang="less" scoped>
.item {
    a {
        margin-left: 10px;

        &:first-child {
            margin-left: 0;
        }
    }
}
</style>