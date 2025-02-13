
export const tableData = [
    {
        key : "option",
        type : "param",
        parameterType : "Object | File",
        desc : "配置对象 | 文件对象",
        remark : "",
        children : [
            {
                key : "file",
                type : "param",
                parameterType : "File | String",
                desc : "文件对象 | 文件id | 文件ref",
                remark : "file|url二选一 必填"
            },
            {
                key : "url",
                type : "param",
                parameterType : "String",
                desc : "文件地址",
                remark : "file|url二选一 必填"
            },
            {
                key : "Vue",
                type : "param",
                parameterType : "Vue",
                desc : "vue实例",
                remark : "file为ref时必填"
            },
            {
                key : "tableConfig",
                type : "param",
                parameterType : "Object",
                desc : "表格样式配置",
                remark : "",
                children : [
                    {
                        key : "boder",
                        type : "param",
                        parameterType : "String",
                        desc : "表格边框 是否有边框 默认1px solid #ccc",
                        remark : ""
                    },
                    {
                        key : "padding",
                        type : "param",
                        parameterType : "String",
                        desc : "表格内边距 默认5px",
                    },
                    {
                        key : "fontSize",
                        type : "param",
                        parameterType : "String",
                        desc : "表格字体大小 默认14px",
                    },
                    {
                        key : "borderColor",
                        type : "param",
                        parameterType : "String",
                        desc : "表格边框颜色 默认#ccc",
                    },
                    {
                        key : "backgroundColor",
                        type : "param",
                        parameterType : "String",
                        desc : "表格背景颜色 默认#fff",
                    },
                    {
                        key : "color",
                        type : "param",
                        parameterType : "String",
                        desc : "表格字体颜色 默认#000",
                    },
                ]
            },
            {
                key : "success",
                type : "param",
                parameterType : "Function",
                desc : "成功返回",
                remark : ""
            },
            {
                key : "fail",
                type : "param",
                parameterType : "Function",
                desc : "失败返回",
                remark : ""
            },
        ]
    },
]

export const returnTableData = [
    {
        key : "code",
        type : "return",
        parameterType : "number",
        desc : "状态码",
        remark : ""
    },
    {
        key : "data",
        type : "return",
        parameterType : "Object",
        desc : "json数据",
        remark : ""
    },
    {
        key : "value",
        type : "return",
        parameterType : "Object",
        desc : "value rowspan colspan 数据",
        remark : ""
    },
    {
        key : "html",
        type : "return",
        parameterType : "Object",
        desc : "展示的html",
        remark : ""
    },
    {
        key : "cvs",
        type : "return",
        parameterType : "Object",
        desc : "cvs",
        remark : ""
    },
    {
        key : "formulae",
        type : "return",
        parameterType : "Object",
        desc : "生成公式列表(带有值回退)",
        remark : ""
    },
    {
        key : "TextUtf16",
        type : "return",
        parameterType : "Object",
        desc : "文字",
        remark : ""
    },
    {
        key : "xlsxname",
        type : "return",
        parameterType : "String",
        desc : "文件名称",
        remark : ""
    },
    {
        key : "sheetname",
        type : "return",
        parameterType : "Object",
        desc : "sheet名称",
        remark : ""
    },
    {
        key : "outCvs",
        type : "return",
        parameterType : "Function",
        desc : "导出cvs",
        remark : ""
    },
    {
        key : "outXlsx",
        type : "return",
        parameterType : "Function",
        desc : "导出xlsx",
        remark : ""
    },
    {
        key : "outXls",
        type : "return",
        parameterType : "Function",
        desc : "导出xls",
        remark : ""
    }
]