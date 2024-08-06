
export const tableData = [
    {
        key : "option",
        type : "param",
        parameterType : "Object ",
        desc : "配置对象",
        remark : "",
        children : [
            {
                key : "html",
                type : "param",
                parameterType : "String",
                desc : "html源码",
                remark : ""
            },
            {
                key : "imgUrl",
                type : "param",
                parameterType : "String",
                desc : "是否需要拼接图片的url 选填",
                remark : ""
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
        key : "html",
        type : "return",
        parameterType : "String",
        desc : "处理后的html",
        remark : ""
    },
]