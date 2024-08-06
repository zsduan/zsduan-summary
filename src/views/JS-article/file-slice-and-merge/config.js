/*
 * @Author: zs.duan
 * @Date: 2022-11-25 18:27:44
 * @LastEditors: zs.duan
 * @LastEditTime: 2022-11-25 19:29:14
 * @FilePath: \vue2+elui+template\src\views\file-slice-and-merge\config.js
 */
export const code1 = `
/**
 * 文件切片与合并 支持Promise
 * @param {Object } options 配置对象
 * @param {File | string | object | Array} options.file 文件(文件列表) 可选 fileId/file/refs/fileList 任选其一
 * @param {any} options.Vue vue本身也就是this
 * @param {'slice' | 'merge'} options.type 切片还是合并 默认切片 
 * @param {boolean} options.md5 是否需要md5值 默认不需要 true 需要 false 不需要 md5会影响分片速度
 * @param {number} options.chunkSize 切片大小 默认 5M
 * @param {string} options.fileName 合并的文件名称
 * @param {boolean} options.sort 合并进行排序 默认true 合并文件较多建议开启
 * @param {Function} options.success 成功返回 
 * @param {Function} options.fail 错误返回
 * @returns Promise
 * @description 分片返回数据
 * @returns 
 * { 
 *    code : 200,
 *    list : [
 *      {
            sort : number, //排序
            file : file, //分片文件bold
            filename : string ,//文件名称 name-1 name-2
            md5 : string //分片文件的md5值
        }
 *    ], //文件分片的list数据
 *    filename : string, //文件原始名称
 *    file : file, //原始文件 blod数据
 *    md5 : string //原始文件的md5值
 * }
 * @description 合并返回数据
 * @returns
 * {
 *     code : 200,
 *     file : file, //文件 blod数据
 *     filename : string //文件名称
 * }
 * 
 * */
//使用
import {fileSliceMerge} from "@/utils/file-slice-and-merge"
// 切片
fileSliceMerge({
    file : "myfile",
    Vue : this,
    chunkSize :1024 * 1024 * 5,
    md5 : true,
    success : (res)=>{
        // 分片文件返回
    }
})
`

export const code2 = `
// 合并
fileSliceMerge({
    file : "myfile1",
    Vue : this,
    type : "merge",
    success : (res)=>{
        // 合并文件返回
    }
})
`