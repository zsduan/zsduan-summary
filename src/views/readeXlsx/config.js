/*
 * @Author: zs.duan
 * @Date: 2022-11-25 14:05:26
 * @LastEditors: zs.duan
 * @LastEditTime: 2022-11-25 14:07:45
 * @FilePath: \vue2+elui+template\src\views\readeXlsx\config.js
 */

export const code1 = `
/*
 * @name 读取 xlsx 和 excel
 * @parame fileId 读取文件的 id 可选 fileId/file/refs 任选其一
 * @parame file 文件本身 可选 fileId/file/refs 任选其一
 * @parame refs vue的ref 可选 fileId/file/refs 任选其一
 * @parame _this 全局的this指向 refs不为空可选
 * @method fail 错误返回
 * @method success 成功返回 返回数据为下面的数据
 * @desc 中文文档地址 https://github.com/rockboom/SheetJS-docs-zh-CN
 * @desc 更加强大 可以做在线编辑的 https://github.com/exceljs/exceljs/blob/master/README_zh.md
 * @return xlsxList = {
            data : {}, //json数据
            html : {}, //展示的html
            cvs : {}, // cvs
            formulae : {}, //生成公式列表(带有值回退)。
            TextUtf16 : {}, // 文字 utf16
            xlsxname : files.name,
            sheet_name : [],
        };
*/ 
import {readeXlsx} from "@/utils/readeXlsx"
// 使用方法
readeXlsx({
    refs : "myfile",
    _this : this,
    success:(res) =>{
        this.xlsxInfo = res;
    },
    fail : (e)=>{
        console.log(e);
    }
})
`