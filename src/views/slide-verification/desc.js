export const descHeader = [
    {
        key: 'key',
        label: '名称',
    },
    {
        key: 'type',
        label: '类型',
        width: '120px'
    },
    {
        key: 'parameterType',
        label: '参数类型',
        width: '120px'
    },
    {
        label: "说明",
        key: "desc",
    },
    {
        label: "备注",
        key: "remark",
    }
]

export const descTableOptions = {
    'row-key': "key",
    'default-expand-all': false,
    border: true,
    'tree-props': {
        children: 'children',
        hasChildren: 'hasChildren'
    }
}

export const descData = [
    {
        key: "ErrorRange",
        type: "props",
        parameterType: "Number",
        desc: "允许的误差值",
        remark: "默认10",
    },
    {
        key: "isShow",
        type: "props",
        parameterType: "Boolean",
        desc: "是否显示",
        remark: "",
    },
    {
        key: "@success",
        type: "methods",
        parameterType: "",
        desc: "成功返回",
        remark: "",
    },
    {
        key: "@fail",
        type: "methods",
        parameterType: "",
        desc: "失败返回",
        remark: "",
    }
]