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
        desc: "编辑器内容",
        remark: "",
    },
    {
        key: "height",
        type: "props",
        parameterType: "Number | String",
        desc: "编辑器高度",
        remark: "默认500",
    },
    {
        key: "width",
        type: "props",
        parameterType: "String",
        desc: "宽度",
        remark: "默认 100%",
    },
    {
        key: "show_save",
        type: "props",
        parameterType: "Boolean",
        desc: "开启实时保存",
        remark: "默认true",
    },
    {
        key: "placeholder",
        type: "props",
        parameterType: "String",
        desc: "占位符 提示文字",
        remark: "",
    },
    {
        key: "production_url",
        type: "props",
        parameterType: "String",
        desc: "hash模式下保存路径",
        remark: "",
    },
    {
        key: "plugins",
        type: "props",
        parameterType: "String",
        desc: "菜单栏插件配置",
        remark: "copy cut paste print link code table lists wordcount image media save searchreplace insertdatetime hr preview importword autosave fullscreen print help",
    },
    {
        key: "toolbar",
        type: "props",
        parameterType: "String",
        desc: "快捷工具栏配置",
        remark: "undo redo save| formatselect | fontsizeselect | fontselect | bold italic forecolor backcolor | alignleft aligncenter alignright alignjustify | lists image searchreplace | bullist numlist outdent indent |  media table insertdatetime | removeformat hr | importword autosave fullscreen print help",
    },
    {
        key: "@save",
        type: "methods",
        parameterType: "",
        desc: "保存事件",
        remark: "",
    }
    
]