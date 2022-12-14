/*
 * @Author: zs.duan
 * @Date: 2022-11-25 18:27:44
 * @LastEditors: zs.duan
 * @LastEditTime: 2022-11-25 19:29:14
 * @FilePath: \vue2+elui+template\src\views\file-slice-and-merge\config.js
 */
export const code1 = `
/*
 * @name 文件切片与还原 合并文件要和切片的文件相同
 * @parame fileId 读取文件的 id 可选 fileId/file/refs 任选其一
 * @parame file 文件本身 可选 fileId/file/refs 任选其一
 * @parame refs vue的ref 可选 fileId/file/refs 任选其一
 * @parame _this 全局的this指向 refs不为空可选
 * @parame type Slice 分片 Merge 合并 
 * @parame fileSize 切片大小 默认 5M
 * @parame fileName 合并的文件名称
 * @parame isSort 合并进行排序
 * @method fail 错误返回
 * @method success 成功返回 返回数据为下面的数据
 * @return { 分片返回
     code : 200,
     fileList : [
        {
            sort : number, //排序
            file : file, //文件bold
            file_name : string ,//文件名称
        }
     ], //文件分片的list数据
     file_name : files.name //文件名称
 * }
 * @return { 合并返回
     code : 200,
     file : file, //文件 blod数据
     file_name : string //文件名称
 * }
*/ 
//使用
import {fileSliceAndMerge} from "@/utils/file-slice-and-merge"
// 切片
changeFile1(){
    fileSliceAndMerge({
        refs : "myfile",
        _this : this,
        fileSize :1024 * 1024 * 5,
        success : (res)=>{
            res.fileList.forEach((v ,index) =>{
                
            })
        }
    })
},
`

export const code2 = `
// 合并
changeFile2(){
    fileSliceAndMerge({
        refs : "myfile1",
        _this : this,
        type : "merge",
        success : (res)=>{
            
        }
    })
},
`