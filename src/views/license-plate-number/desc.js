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
        key: "showKeyboard",
        type: "props",
        parameterType: "Boolean",
        desc: "是否显示键盘",
        remark: "",
    },
    {
        key: "bottom",
        type: "props",
        parameterType: "String",
        desc: "距离底部安全区的距离",
        remark: "",
    },
    {
        key: "@complete",
        type: "methods",
        parameterType: "",
        desc: "点击完成事件",
        remark: "",
    },
    {
        key: "@change",
        type: "methods",
        parameterType: "",
        desc: "键盘点击后的改变事件",
        remark: "",
    },
    {
        key: "validatePlateNumber(plateNumber)",
        type: "ref methods",
        parameterType: "",
        desc: "校验车牌号的函数 传入车牌号",
        remark: "只是一个基础的函数不对真实校验负责",
    }
]