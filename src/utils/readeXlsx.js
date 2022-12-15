/*
 * @Author: zs.duan
 * @Date: 2022-11-24 12:39:33
 * @LastEditors: zs.duan
 * @LastEditTime: 2022-12-15 13:46:43
 * @FilePath: \vue2+js+eui+template\src\utils\readeXlsx.js
 */
/*
 * @name 读取 xlsx 和 excel
 * @parame fileId 读取文件的 id 可选 fileId/file/refs 任选其一
 * @parame file 文件本身 可选 fileId/file/refs 任选其一
 * @parame refs vue的ref 可选 fileId/file/refs 任选其一
 * @parame _this 全局的this指向 refs不为空 可选
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
import xlsx from "./xlsx.full.min";
export const readeXlsx = (_this , ...arg) =>{
    let options = {
        fileId : "",  //读取文件的id
        file : "" , //文件
        refs : "" ,
        success : (result)=>{} , //读取成功返回
        fail : (error) => {} , //读取失败返回
    };
    options = {
        ...options,
        ...arg[0]
    }
    if(!options.fileId && !options.file && !options.refs){
        options.fail({
            code : -1,
            msg : "fileId or file or refs must be not null"
        })
        return ;
    }
    if(options.refs && !_this){
        options.fail({
            code : -1,
            msg : "_this must be not null"
        })
        return ;
    }
    let files = null;
    if(options.refs){
        files = _this.$refs[options.refs].files[0]
    }
    if(options.fileId){
        files = document.querySelector(`#${options.fileId}`).files[0];
    }
    if(options.file){
        files = data.file;
    }
    // 判断文件类型
    let suffix = files.name.substr(files.name.lastIndexOf("."))
    if(suffix != '.xls' && suffix != '.xlsx'){
        options.fail({
            code : -1,
            msg : "Please upload xls and xlsx files"
        })
        return ;
    }
    // 创建读取文件
    const reader = new FileReader();
    reader.readAsBinaryString(files);
    reader.onload = () =>{
        let fileData = reader.result;
        let workbook = xlsx.read(fileData, { type: 'binary' });
        let xlsxList = {
            data : {},
            html : {},
            cvs : {},
            formulae : {},
            TextUtf16 : {},
            xlsxname : files.name,
            sheet_name : [],
            code : 200,
            msg : "success"
        };
        // 遍历每张表读取
        for(let i = 0 ; i < workbook.SheetNames.length ; i ++){
            let is_paly = false;
            for (const key in workbook.Sheets[workbook.SheetNames[i]]) {
                if (Object.hasOwnProperty.call(workbook.Sheets[workbook.SheetNames[i]], key)) {
                    if(key == '!ref'){
                        is_paly = true;
                    }
                }
            }
            if(is_paly){
                xlsxList.data[workbook.SheetNames[i]] =  xlsx.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[i]]);
                xlsxList.cvs[workbook.SheetNames[i]] =  xlsx.utils.sheet_to_csv(workbook.Sheets[workbook.SheetNames[i]]);
                xlsxList.html[workbook.SheetNames[i]] =  xlsx.utils.sheet_to_html(workbook.Sheets[workbook.SheetNames[i]]);
                xlsxList.formulae[workbook.SheetNames[i]] =  xlsx.utils.sheet_to_formulae(workbook.Sheets[workbook.SheetNames[i]]);
                xlsxList.TextUtf16[workbook.SheetNames[i]] =  xlsx.utils.sheet_to_txt(workbook.Sheets[workbook.SheetNames[i]]);
                xlsxList.sheet_name.push(workbook.SheetNames[i])
            }
            
        }
        options.success(xlsxList);
    }
}