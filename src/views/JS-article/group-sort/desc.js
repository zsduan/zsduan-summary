export const tableData = [
    {
        key : "option",
        type : "param",
        parameterType : "Object ",
        desc : "配置对象",
        remark : "",
        children : [
            {
                key : "list",
                type : "param",
                parameterType : "Array",
                desc : "原始数组",
                remark : ""
            },
            {
                key : "key",
                type : "param",
                parameterType : "String",
                desc : "分组/排序的key",
                remark : ""
            },
            {
                key : "func",
                type : "param",
                parameterType : "Function",
                desc : "处理函数",
                remark : "优先级高于key"
            },
            {
                key : "type",
                type : "param",
                parameterType : "String",
                desc : "处理类型",
                remark : "group/sort"
            },
            {
                key : "order",
                type : "param",
                parameterType : "String",
                desc : "排序方式",
                remark : "asc/desc"
            },
            {
                key : "success",
                type : "param",
                parameterType : "Function",
                desc : "成功回调",
                remark : ""
            },
            {
                key : "fail",
                type : "param",
                parameterType : "Function",
                desc : "失败回调",
                remark : ""
            },
        ]
    },
]
