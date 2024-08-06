/**
 * @name 防抖 表格
 * */
export const antiShakeData = [
    {
        key : "time",
        type : "param",
        parameterType : "Number",
        desc : "延迟时间",
        remark : "time | callback | options 三选一"
    },
    {
        key : "callback",
        type : "param",
        parameterType : "Function",
        desc : "回调函数",
        remark : "time | callback | options 三选一"
    },
    {
        key : "options",
        type : "param",
        parameterType : "object ",
        desc : "配置对象",
        remark : "time | callback | options 三选一",
        children : [
            {
                key : "time",
                type : "param",
                parameterType : "Number",
                desc : "延迟时间",
                remark : ""
            },
            {
                key : "callback",
                type : "param",
                parameterType : "Function",
                desc : "回调函数",
                remark : ""
            },
            {
                key : "type",
                type : "param",
                parameterType : "String",
                desc : "防抖类型",
                remark : "默认 button 支持 input"
            },
        ]
    }
]

/**
 * @name 节流 表格
 * */
export const throttleData = [
    {
        key : "time",
        type : "param",
        parameterType : "Number",
        desc : "延迟时间",
        remark : "time | callback | options 三选一"
    },
    {
        key : "callback",
        type : "param",
        parameterType : "Function",
        desc : "回调函数",
        remark : "time | callback | options 三选一"
    },
    {
        key : "options",
        type : "param",
        parameterType : "object ",
        desc : "配置对象",
        remark : "time | callback | options 三选一",
        children : [
            {
                key : "time",
                type : "param",
                parameterType : "Number",
                desc : "延迟时间",
                remark : ""
            },
            {
                key : "callback",
                type : "param",
                parameterType : "Function",
                desc : "回调函数",
                remark : ""
            },
            {
                key : "type",
                type : "param",
                parameterType : "String",
                desc : "节流类型",
                remark : "默认 input 支持 button"
            },
        ]
    }
]