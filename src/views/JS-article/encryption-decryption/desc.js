export const encryptTableData = [
    {
        key : "option",
        type : "param",
        parameterType : "Object | String",
        desc : "配置对象 | 需要加密的字符串",
        remark : "必填",
        children : [
            {
                key : "word",
                type : "param",
                parameterType : "Array | String | Object",
                desc : "需要加密的值",
                remark : ""
            },
            {
                key : "key",
                type : "param",
                parameterType : "String",
                desc : "秘钥",
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

export const decryptTableData = [
    {
        key : "option",
        type : "param",
        parameterType : "Object | String",
        desc : "配置对象 | 需要解密的字符串",
        remark : "必填",
        children : [
            {
                key : "word",
                type : "param",
                parameterType : "Array | String | Object",
                desc : "需要解密的值",
                remark : ""
            },
            {
                key : "key",
                type : "param",
                parameterType : "String",
                desc : "秘钥",
                remark : ""
            },
            {
                key : "type",
                type : "param",
                parameterType : "String",
                desc : "类型",
                remark : "string | object 默认 string"
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

export const md5TableData = [
    {
        key : "option",
        type : "param",
        parameterType : "Object | String",
        desc : "配置对象 | 需要解密的字符串",
        remark : "必填",
        children : [
            {
                key : "word",
                type : "param",
                parameterType : "Array | String | Object",
                desc : "需要解密的值",
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

export const returDecryptTableData = [
    {
        key : "string",
        type : "return",
        parameterType : "Array",
        desc : "加密后的结果",
        remark : ""
    }
]

export const returnEcryptTableData = [
    {
        key : "string",
        type : "return",
        parameterType : "Array",
        desc : "解密后的结果",
        remark : ""
    }
]