/*
 * @Author: zs.duan
 * @Date: 2022-11-24 12:39:33
 * @LastEditors: zs.duan
 * @LastEditTime: 2022-11-24 15:30:09
 * @FilePath: \vue2+elui+template\src\utils\readeXlsx.js
 */
/*
 * @name 读取 xlsx 和 excel
 * @parame fileId 读取文件的 id 可选 fileId/file/refs 任选其一
 * @parame file 文件本身 可选 fileId/file/refs 任选其一
 * @parame refs vue的ref 可选 fileId/file/refs 任选其一
 * @parame _this 全局的this指向 refs不为空可选
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
export const readeXlsx = (...arg) =>{
    let data = {
        fileId : "",  //读取文件的id
        file : "" , //文件
        refs : "" , 
        _this : null  , //全局this 指向 指向 Vue
        success : (result)=>{} , //读取成功返回
        fail : (error) => {} , //读取失败返回
    };
    for (const key in data) {
        if (Object.hasOwnProperty.call(data, key)) {
            data[key] = arg[0][key];
        }
    }
    if(!data.fileId && !data.file && !data.refs){
        data.fail({
            code : -1,
            msg : "fileId or file or refs must be not null"
        })
        return ;
    }
    if(data.refs && !data._this){
        data.fail({
            code : -1,
            msg : "_this must be not null"
        })
        return ;
    }
    let files = null;
    if(data.refs){
        files = data._this.$refs[data.refs].files[0]
    }
    if(data.fileId){
        files = document.querySelector(`#${data.fileId}`).files[0];
    }
    if(data.file){
        files = data.file;
    }
    // 判断文件类型
    let suffix = files.name.substr(files.name.lastIndexOf("."))
    if(suffix != '.xls' && suffix != '.xlsx'){
        data.fail({
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
        console.log(workbook)
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
        data.success(xlsxList);
    }
}