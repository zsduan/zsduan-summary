
export const tableData = [
    {
        key : "option",
        type : "param",
        parameterType : "Object | String ",
        desc : "配置对象 | 需要复制的文本",
        remark : "",
        children : [
            {
                key : "text",
                type : "param",
                parameterType : "String",
                desc : "复制的信息 ",
                remark : "文本|图片url"
            },
            {
                key : "type",
                type : "param",
                parameterType : "String",
                desc : "类型",
                remark : "text | html | image"
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
