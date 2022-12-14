<!--
 * @Author: zs.duan
 * @Date: 2022-11-25 17:20:17
 * @LastEditors: zs.duan
 * @LastEditTime: 2022-11-25 19:28:48
 * @FilePath: \vue2+elui+template\src\views\file-slice-and-merge\file-slice-and-merge.vue
-->
<template>
    <div>
        <dzs-header title="vue动态路由"></dzs-header>
        <div class="page">
            <div class="tips-box">大文件的切片和分割</div>
            <h2>切片</h2>
            <div class="item">
                <input type="file" ref="myfile" @change="changeFile1"/>
                <dzs-code title="源代码" :value="code1"></dzs-code>
            </div>
            <h2>合并</h2>
            <div class="item">
                <input type="file" ref="myfile1" multiple @change="changeFile2"/>
                <dzs-code title="源代码" :value="code2"></dzs-code>
            </div>
            <h2>源代码下载/查看</h2>
            <div class="item">
                <a target="_blank" href="https://github.com/zsduan/zsduan-summary/blob/master/src/utils/file-slice-and-merge.js">下载/查看地址</a>
               
            </div>
        </div>
        <el-backtop :visibility-height="20">
        </el-backtop>
    </div>
</template>
<script>
import {code1 , code2} from "./config";
import {fileSliceAndMerge} from "@/utils/file-slice-and-merge"
export default {
    data(){
        return {
            code1 : code1,
            code2 : code2
        }
    },
    mounted(){
        
    },
    methods:{
        // 切片
        changeFile1(){
            fileSliceAndMerge({
                refs : "myfile",
                _this : this,
                fileSize :1024 * 1024 * 5,
                success : (res)=>{
                    res.fileList.forEach((v ,index) =>{
                        this.downFile(v.file , res.file_name + "-" + v.sort);
                    })
                }
            })
        },
        // 合并
        changeFile2(){
            fileSliceAndMerge({
                refs : "myfile1",
                _this : this,
                type : "merge",
                success : (res)=>{
                    this.downFile(res.file , res.file_name);
                }
            })
        },
        // 下载文件
        downFile(v , name){
            const a = document.createElement("a");
            a.setAttribute("download",name);
            a.href = URL.createObjectURL(v);
            a.click();
        }
    }
}
</script>
<style lang="less" scoped>
.item{
    a{
        margin-left: 10px;
        &:first-child{
            margin-left: 0;
        }
    }
}
</style>