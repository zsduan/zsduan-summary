export const tableData = [
    {
        key : "option",
        type : "param",
        parameterType : "Object ",
        desc : "配置对象",
        remark : "",
        children : [
            {
                key : "Vue",
                type : "param",
                parameterType : "Object",
                desc : "Vue对象",
                remark : ""
            },
            {
                key : "title",
                type : "param",
                parameterType : "String",
                desc : "标题",
                remark : "必填"
            },
            {
                key : "msg",
                type : "param",
                parameterType : "String",
                desc : "详情信息",
                remark : ""
            },
            {
                key : "position",
                type : "param",
                parameterType : "String",
                desc : "信息位置",
                remark : "top-right/top-left/bottom-right/bottom-left"
            },
            {
                key : "audioUrl",
                type : "param",
                parameterType : "String",
                desc : "音频地址",
                remark : ""
            },
            {
                key : "duration",
                type : "param",
                parameterType : "Number",
                desc : "延时时间",
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