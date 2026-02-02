export const tableData = [
    {
        key: "currentVersion",
        type: "param",
        parameterType: "string",
        desc: "当前版本号",
        remark: "列如 1.0.0",
    },
    {
        key: "suffixRules",
        type: "param",
        parameterType: "Array",
        desc: "版本号后缀规则",
        remark: "",
        children: [
            {
                key: "name",
                type: "param",
                parameterType: "string",
                desc: "后缀名称",
                remark: "必填",
            },
            {
                key: "desc",
                type: "param",
                parameterType: "string",
                desc: "描述",
                remark: "",
            },
            {
                key: "isHide",
                type: "param",
                parameterType: "boolean",
                desc: "是否隐藏该版本",
                remark: "设置为 true 将不会显示该后缀的所有版本号 ",
            }
        ],
    },
    {
        key: "debug",
        type: "param",
        parameterType: "boolean",
        desc: "是否开启调试模式",
        remark: "调试模式下，会在console中打印所有应该设置版本号的元素",
    }
]
