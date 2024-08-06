export const tableData = [
    {
        key : "option",
        type : "param",
        parameterType : "Object",
        desc : "配置对象",
        remark : "",
        children : [
            {
                key : "url",
                type : "param",
                parameterType : "String",
                desc : "请求地址",
                remark : "必填"
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
            {
                key : "stop",
                type : "param",
                parameterType : "Function",
                desc : "停止返回",
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
        desc : "返回参数",
        remark : "",
        children : [
            {
                key : "SR",
                type : "return",
                parameterType : "Object",
                desc : "连接成功后的返回",
                remark : ""
            },
            {
                key : "stop",
                type : "return",
                parameterType : "Function",
                desc : "停止返回",
                remark : ""
            },
        ]
    },

]