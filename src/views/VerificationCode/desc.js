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
        key: "value / v-model",
        type: "props",
        parameterType: "String",
        desc: "生成的验证码",
        remark: "",
    },
    {
        key: "codeArr",
        type: "props",
        parameterType: "Array",
        desc: "传入一个数组来自定义验证码",
        remark: "默认26个字母和0-9数字",
    },
    {
        key: "uppercase",
        type: "props",
        parameterType: "Boolean",
        desc: "是否转大写",
        remark: "",
    }
]