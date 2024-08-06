export const tableData = [
    {
        key : "option",
        type : "param",
        parameterType : "String | Object",
        desc : "配置信息 | 修改颜色 ",
        remark : "",
        children : [
            {
                key : "color",
                type : "param",
                parameterType : "String",
                desc : "修改颜色",
                remark : "支持16进制颜色 rgb颜色 不支持rgba和hsl"
            },
            {
                key : "generate",
                type : "param",
                parameterType : "Boolean",
                desc : "是否生成0.1-0.9透明度颜色",
                remark : ""
            },
            {
                key : "name",
                type : "param",
                parameterType : "String",
                desc : "主题名称 默认为 --themecolor",
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
            }
        ]
    },
]