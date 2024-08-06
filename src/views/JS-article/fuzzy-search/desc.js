export const tableData = [
    {
        key : "option",
        type : "param",
        parameterType : "Object",
        desc : "配置对象",
        remark : "",
        children : [
            {
                key : "data",
                type : "param",
                parameterType : "Array",
                desc : "原始数组",
                remark : "必填"
            },
            {
                key : "key",
                type : "param",
                parameterType : "String",
                desc : "搜索的key",
                remark : ""
            },
            {
                key : "children",
                type : "param",
                parameterType : "String",
                desc : "子级的key",
                remark : ""
            },
            {
                key : "value",
                type : "param",
                parameterType : "String",
                desc : "搜索的关键词",
                remark : ""
            },
            {
                key : "isCompletely",
                type : "param",
                parameterType : "Function",
                desc : "是否完全匹配",
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
        key : "list",
        type : "return",
        parameterType : "Array",
        desc : "搜索后的结果",
        remark : "tree类型会直接拉平"
    }
]