
export const tableData = [
    {
        key: "options",
        type: "param",
        parameterType: "Object",
        desc: "配置信息",
        remark: "",
        children: [
            {
                key: "start",
                type: "param",
                parameterType: "Number",
                desc: "开始数值",
                remark: "",
            },
            {
                key: "end",
                type: "param",
                parameterType: "Number",
                desc: "结束数值",
                remark: "",
            },
            {
                key: "duration",
                type: "param",
                parameterType: "Number",
                desc: "持续时间",
                remark: "",
            },
            {
                key: "el",
                type: "param",
                parameterType: "String",
                desc: "dom的id选择器",
                remark: "",
            },
            {
                key: "dom",
                type: "param",
                parameterType: "HTMLElement",
                desc: "dom元素",
                remark: "",
            },
            {
                key: "vue",
                type: "param",
                parameterType: "HTMLElement",
                desc: "vue的ref选择器",
                remark: "",
            },
            {
                key: "success",
                type: "param",
                parameterType: "Function",
                desc: "成功回调函数",
                remark: "",
            },
            {
                key: "fail",
                type: "param",
                parameterType: "Function",
                desc: "失败回调函数",
                remark: "",
            }
        ]
    },
    {
        key: "更多说明",
        type: "param",
        parameterType: "",
        desc: "",
        remark: "所有参数都是可选参数 当没有参数 默认读取 data-number 属性 end 是data-number属性值 start是 dom 的 innerText",
    }

]
