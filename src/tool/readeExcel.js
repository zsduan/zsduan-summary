/**
 * @name 新版xlsx读取
 * @author zs.duan
 * @date 2024-01-22 16:00:00
 * */

import * as xlsx from 'xlsx/xlsx.mjs'; 

/**
 * 表格样式设置
 * */
const _setTableStyle = (option) => {
    let tableConfig = {
        boder: "1px solid #ccc",
        padding: "5px",
        fontSize: "14px",
        borderColor: "#ccc",
        backgroundColor: "#fff",
        color: "#000"
    }
    Object.assign(tableConfig, option);
    let style = `
        <style>
            table{
                border-collapse: collapse;
            }
            table td{
                border: ${tableConfig.boder};
                padding: ${tableConfig.padding};
                font-size: ${tableConfig.fontSize};
                border-color: ${tableConfig.borderColor};
                background-color: ${tableConfig.backgroundColor};
                color: ${tableConfig.color};
            }
        </style>
    `
    return style;
}

/**提取table中的值*/
const _getTableValue = (table) => {
    let data = [];
    if (!table) return data;
    let htmlDom = document.createElement("div");
    htmlDom.innerHTML = table;
    let tableDom = htmlDom.querySelector("table");

    // 将table的数据转换为json 跨行和跨列的数据单独提出来
    let tableTr = tableDom.querySelectorAll("tr");
    for (let i = 0; i < tableTr.length; i++) {
        let tableTd = tableTr[i].querySelectorAll("td");
        let tableTrJson = [];
        for (let j = 0; j < tableTd.length; j++) {
            let tableTdJson = {
                value: tableTd[j].innerText,
                colspan: tableTd[j].getAttribute("colspan"),
                rowspan: tableTd[j].getAttribute("rowspan"),
            }
            tableTrJson.push(tableTdJson);
        }
        data.push(tableTrJson);
    }
    return data;
}

/**处理url的文件*/
const _handleUrlFile = (option) => {
    return new Promise((resolve, reject) => {
        fetch(option.url).then(res => {
            if (res.ok) {
                resolve(res.blob());
            } else {
                reject({
                    code: -1,
                    msg: "读取文件失败"
                })
            }
        })
    })
} 


/**
 * 新版xlsx读取 支持xlsx和xls
 * @param {Object | File} option 配置信息 | 文件blod 
 * @param {File | String} option.file 文件blod | 文件id | 文件ref
 * @param {any} [option.Vue] vue的this指向 当file为ref时必填
 * @param {Object} option.tableConfig 表格配置 可选
 * @param {String} option.tableConfig.boder 表格边框 是否有边框 默认1px solid #ccc
 * @param {String} option.tableConfig.padding 表格内边距 默认5px
 * @param {String} option.tableConfig.fontSize 表格字体大小 默认14px
 * @param {String} option.tableConfig.borderColor 表格边框颜色 默认#ccc
 * @param {String} option.tableConfig.backgroundColor 表格背景颜色 默认#fff
 * @param {String} option.tableConfig.color 表格字体颜色 默认#000
 * @param {Function} option.success 成功回调
 * @param {Function} option.fail 失败回调
 * @returns {
 *    code : 200,
 *    data : Object, //json数据
 *    value : Object, //value rowspan colspan 数据
 *    html : Object, //展示的html
 *    cvs : Object, // cvs
 *    formulae : Object, //生成公式列表(带有值回退)
 *    TextUtf16 : Object, // 文字
 *    xlsxname : String, //文件名称
 *    sheetname : Object, //sheet名称
 *    outCvs : Function, //导出cvs
 *    outXlsx : Function, //导出xlsx
 *    outXls : Function, //导出xls
 * }
 * */
export const readeExcel = async (option) => {
    let options = {
        url : "",
        file: null,
        Vue: null,
        tableConfig: {},
        success: (res) => { },
        fail: (error) => { }
    }
    if (!option) {
        options.fail({ code: -1, msg: "option 必填" });
        return;
    }
    if (!(option instanceof File) && !option.file && !option.url) {
        options.fail({ code: -1, msg: "url/file 必填" });
        console.error("url/file 必填")
        return
    }
    if (option instanceof File) {
        options.file = option;
    } else {
        Object.assign(options, option);
    }
    let file = null;
    if (option.url) {
        file = await _handleUrlFile(options);
        if (file.code == -1) {
            options.fail(file);
            return;
        }
        // 将blod转换为file
        file = new File([await file], option.url, { type: file.type });
    }
    if(options.Vue && options.file && typeof options.file == "string"){
        file = options.Vue.$refs[options.file].files[0]
    }
    if(!option.Vue && options.file && typeof options.file == "string"){
        file = document.querySelector(`#${options.file}`).files[0] || null;
    } 
    file = file || options.file;
    if (!(file instanceof File)) {
        options.fail({ code: -1, msg: "获取文件失败" });
        console.error("获取文件失败")
        return;
    }
    let suffix = file.name.substr(file.name.lastIndexOf("."));
    if (suffix != '.xls' && suffix != '.xlsx' && !option.url) {
        options.fail({ code: -1, msg: "请选择excel文件" });
        console.error("请选择excel文件")
        return;
    }
    let reader = new FileReader();
    reader.readAsBinaryString(file);
    reader.onload = () => {
        let fileData = reader.result;
        let workbook = xlsx.read(fileData, { type: 'binary' });
        let sendData = {
            xlsxname: file.name,
            data: {},
            value: {},
            html: {},
            cvs: {},
            formulae: {},
            TextUtf16: {},
            sheetname: [],
            outCvs: function () { },
            outXlsx: function () { },
            outXls : function () { },
        };
        for (let i = 0; i < workbook.SheetNames.length; i++) {
            let is_read = false;
            for (const key in workbook.Sheets[workbook.SheetNames[i]]) {
                if (Object.hasOwnProperty.call(workbook.Sheets[workbook.SheetNames[i]], key)) {
                    if (key == '!ref') {
                        is_read = true;
                    }
                }
            }
            if (!is_read) continue;
            sendData.data[workbook.SheetNames[i]] = xlsx.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[i]]);
            sendData.cvs[workbook.SheetNames[i]] = xlsx.utils.sheet_to_csv(workbook.Sheets[workbook.SheetNames[i]]);
            sendData.html[workbook.SheetNames[i]] = xlsx.utils.sheet_to_html(workbook.Sheets[workbook.SheetNames[i]]);
            sendData.html[workbook.SheetNames[i]] += _setTableStyle(options.tableConfig);
            sendData.formulae[workbook.SheetNames[i]] = xlsx.utils.sheet_to_formulae(workbook.Sheets[workbook.SheetNames[i]]);
            sendData.TextUtf16[workbook.SheetNames[i]] = xlsx.utils.sheet_to_txt(workbook.Sheets[workbook.SheetNames[i]]);
            sendData.sheetname.push(workbook.SheetNames[i]);
            sendData.value = _getTableValue(sendData.html[workbook.SheetNames[i]]);
        }
        const newCvs = "\ufeff" + xlsx.write(workbook, { bookType: 'csv', type: 'string' });
        sendData.outCvs = function () {
            let blod = new Blob([newCvs], { type: "text/csv;charset=utf-8;" });
            let objectUrl = URL.createObjectURL(blod);
            let a = document.createElement("a");
            a.download = file.name.substr(0, file.name.lastIndexOf(".")) + ".csv";
            a.href = objectUrl;
            a.click();
        };
        function _s2ab(s) {
            var buf = new ArrayBuffer(s.length);
            var view = new Uint8Array(buf);
            for (var i = 0; i < s.length; i++) view[i] = s.charCodeAt(i) & 0xFF;
            return buf;
        }
        const newxlsx = xlsx.write(workbook, { bookType: 'xlsx', type: 'binary' });
        sendData.outXlsx = function () {
            let blod = new Blob([_s2ab(newxlsx)], { type: "application/octet-stream" });
            let xlsxUrl = URL.createObjectURL(blod);
            let a = document.createElement("a");
            a.download = file.name.substr(0, file.name.lastIndexOf(".")) + ".xlsx";
            a.href = xlsxUrl;
            a.click();
        };

        const newxls = xlsx.write(workbook, { bookType: 'xls', type: 'binary' });
        sendData.outXls = function () {
            let blod = new Blob([_s2ab(newxls)], { type: "application/octet-stream" });
            let xlsUrl = URL.createObjectURL(blod);
            let a = document.createElement("a");
            a.download = file.name.substr(0, file.name.lastIndexOf(".")) + ".xls";
            a.href = xlsUrl;
            a.click();
        }

        options.success(sendData);
    }

}


/**
 * 新版xlsx读取支持Proimse 支持xlsx和xls
 * @param {Object | File} option 配置信息 | 文件blod 
 * @param {File | String} option.file 文件blod | 文件id | 文件ref
 * @param {any} [option.Vue] vue的this指向 当file为ref时必填
 * @param {Object} option.tableConfig 表格配置 可选
 * @param {String} option.tableConfig.boder 表格边框 是否有边框 默认1px solid #ccc
 * @param {String} option.tableConfig.padding 表格内边距 默认5px
 * @param {String} option.tableConfig.fontSize 表格字体大小 默认14px
 * @param {String} option.tableConfig.borderColor 表格边框颜色 默认#ccc
 * @param {String} option.tableConfig.backgroundColor 表格背景颜色 默认#fff
 * @param {String} option.tableConfig.color 表格字体颜色 默认#333
 * @param {Function} option.success 成功回调
 * @param {Function} option.fail 失败回调
 * @returns {
 *    code : 200,
 *    data : Object, //json数据
 *    value : Object, //value rowspan colspan 数据
 *    html : Object, //展示的html
 *    cvs : Object, // cvs
 *    formulae : Object, //生成公式列表(带有值回退)
 *    TextUtf16 : Object, // 文字
 *    xlsxname : String, //文件名称
 *    sheetname : Object, //sheet名称
 *    outCvs : Function, //导出cvs
 *    outXlsx : Function, //导出xlsx
 *    outXls : Function, //导出xls
 * }
 * */
export const asyncReadeExcel = (option) => {
    let options = {
        success: (res) => { },
        fail: (error) => { },
        ...option,
    }
    return new Promise((resolve, reject) => {
        if (!options.file || !options) {
            return reject({
                code: -1,
                msg: "option | option.file 必填"
            })
        }
        readeExcel({
            ...options,
            success: (result) => {
                options.success(result);
                resolve(result);
            },
            fail: (error) => {
                options.fail(error);
                reject(error);
            }
        })
    })
}



/**
 * 读取 xlsx 和 excel
 * @param {object} option 配置
 * @param {any} [option._this] vue的this指向 refs不为空 可选
 * @param {string} [option.fileId] 读取文件的 id 可选 fileId/file/refs 任选其一
 * @param {any} [option.file] 文件本身 可选 fileId/file/refs 任选其一
 * @param {any} [option.refs] vue的ref 可选 fileId/file/refs 任选其一
 * @param {Function} [option.success] 成功返回 返回数据为下面的数据
 * @param {Function} [option.fail] 错误返回
 * @desc 中文文档地址 https://github.com/rockboom/SheetJS-docs-zh-CN
 * @desc 更加强大 可以做在线编辑的 https://github.com/exceljs/exceljs/blob/master/README_zh.md
 * @return {object} xlsxList = {
 *          data : {}, //json数据
 *          html : {}, //展示的html
 *          cvs : {}, // cvs
 *          formulae : {}, //生成公式列表(带有值回退)。
 *          TextUtf16 : {}, // 文字
 *}

*/
export const readeXlsx = (option) => {
    let options = {
        _this: null, //vue的this指向
        fileId: "",  //读取文件的id
        file: "", //文件
        refs: "",
        success: (result) => { }, //读取成功返回
        fail: (error) => { }, //读取失败返回
    };
    Object.assign(options, option);
    const { _this } = options;
    if (!options.fileId && !options.file && !options.refs) {
        options.fail({
            code: -1,
            msg: "fileId or file or refs must be not null"
        })
        return;
    }
    if (options.refs && !_this) {
        options.fail({
            code: -1,
            msg: "_this must be not null"
        })
        return;
    }
    let files = null;
    if (options.refs) {
        files = _this.$refs[options.refs].files[0]
    }
    if (options.fileId) {
        files = document.querySelector(`#${options.fileId}`).files[0];
    }
    if (options.file) {
        files = options.file;
    }
    // 判断文件类型
    let suffix = files.name.substr(files.name.lastIndexOf("."))
    if (suffix != '.xls' && suffix != '.xlsx') {
        options.fail({
            code: -1,
            msg: "Please upload xls and xlsx files"
        })
        return;
    }
    // 创建读取文件
    const reader = new FileReader();
    reader.readAsBinaryString(files);
    reader.onload = () => {
        let fileData = reader.result;
        let workbook = xlsx.read(fileData, { type: 'binary' });
        let xlsxList = {
            jsonData: {},
            data: {},
            html: {},
            cvs: {},
            formulae: {},
            TextUtf16: {},
            xlsxname: files.name,
            sheet_name: [],
            code: 200,
            msg: "success"
        };
        // 遍历每张表读取
        for (let i = 0; i < workbook.SheetNames.length; i++) {
            let is_paly = false;
            for (const key in workbook.Sheets[workbook.SheetNames[i]]) {
                if (Object.hasOwnProperty.call(workbook.Sheets[workbook.SheetNames[i]], key)) {
                    if (key == '!ref') {
                        is_paly = true;
                    }
                }
            }
            if (is_paly) {
                xlsxList.data[workbook.SheetNames[i]] = xlsx.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[i]]);
                xlsxList.cvs[workbook.SheetNames[i]] = xlsx.utils.sheet_to_csv(workbook.Sheets[workbook.SheetNames[i]]);
                xlsxList.html[workbook.SheetNames[i]] = xlsx.utils.sheet_to_html(workbook.Sheets[workbook.SheetNames[i]]);
                xlsxList.formulae[workbook.SheetNames[i]] = xlsx.utils.sheet_to_formulae(workbook.Sheets[workbook.SheetNames[i]]);
                xlsxList.TextUtf16[workbook.SheetNames[i]] = xlsx.utils.sheet_to_txt(workbook.Sheets[workbook.SheetNames[i]]);
                xlsxList.sheet_name.push(workbook.SheetNames[i])
                xlsxList.html[workbook.SheetNames[i]] += `<style>
                    table{
                        border-collapse: collapse;
                    }
                    table td{
                        border: 1px solid #ccc;
                        padding: 5px;
                    }
                </style>
                `
                let myHTML = xlsxList.html[workbook.SheetNames[i]];
                let htmlDom = document.createElement("div");
                htmlDom.innerHTML = myHTML;
                let tableDom = htmlDom.querySelector("table");

                // 将table的数据转换为json 跨行和跨列的数据单独提出来
                let tableJson = [];
                let tableTr = tableDom.querySelectorAll("tr");
                for (let i = 0; i < tableTr.length; i++) {
                    let tableTd = tableTr[i].querySelectorAll("td");
                    let tableTrJson = [];
                    for (let j = 0; j < tableTd.length; j++) {
                        let tableTdJson = {
                            value: tableTd[j].innerText,
                            colspan: tableTd[j].getAttribute("colspan"),
                            rowspan: tableTd[j].getAttribute("rowspan"),
                        }
                        tableTrJson.push(tableTdJson);
                    }
                    tableJson.push(tableTrJson);
                }
                xlsxList.jsonData[workbook.SheetNames[i]] = tableJson;
            }

        }
        options.success(xlsxList);
    }
}

export default readeExcel;