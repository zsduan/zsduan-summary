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
    'default-expand-all': true,
    border: true,
    'tree-props': {
        children: 'children',
        hasChildren: 'hasChildren'
    }
}

export const descData = [
    {
        key: "option",
        type: "props",
        parameterType: "Object",
        desc: "配置项",
        remark: "",
        children : [
            {
                key: "value",
                type: "props",
                parameterType: "String",
                desc: "二维码内容",
                remark: "",
            },
            {
                key: "size",
                type: "props",
                parameterType: "Number",
                desc: "二维码大小",
                remark: "",
            },
            {
                key: "level",
                type: "props",
                parameterType: "String",
                desc: "二维码等级",
                remark: "",
            },
            {
                key: "bgColor",
                type: "props",
                parameterType: "String",
                desc: "二维码背景颜色",
                remark: "",
            },
            {
                key: "fgColor",
                type: "props",
                parameterType: "String",
                desc: "二维码前景颜色",
                remark: "",
            },
            {
                key: "margin",
                type: "props",
                parameterType: "String",
                desc: "二维码边距",
                remark: "",
            },
            {
                key: "scale",
                type: "props",
                parameterType: "String",
                desc: "缩放",
                remark: "",
            },
            {
                key: "version",
                type: "props",
                parameterType: "String",
                desc: "版本号",
                remark: "",
            },
            {
                key: "errorCorrectionLevel",
                type: "props",
                parameterType: "String",
                desc: "二维码容错率",
                remark: "",
            },
            {
                key: "logo",
                type: "props",
                parameterType: "String",
                desc: "二维码logo",
                remark: "",
            },
            {
                key: "logoWidth",
                type: "props",
                parameterType: "Number",
                desc: "logo宽度",
                remark: "",
            },
            {
                key: "logoHeight",
                type: "props",
                parameterType: "String",
                desc: "logo高度",
                remark: "",
            },
            {
                key: "text",
                type: "props",
                parameterType: "String",
                desc: "二维码下方文字",
                remark: "",
            },
            {
                key: "font",
                type: "props",
                parameterType: "String",
                desc: "文字字体",
                remark: "",
            },
            {
                key: "fontColor",
                type: "props",
                parameterType: "String",
                desc: "底部文字颜色",
                remark: "",
            },
            {
                key: "lineWidth",
                type: "props",
                parameterType: "Number",
                desc: "二维码底部文字线条宽度",
                remark: "",
            },
            {
                key: "lineColor",
                type: "props",
                parameterType: "String",
                desc: "二维码底部文字线条颜色",
                remark: "",
            },
            {
                key: "showBoder",
                type: "props",
                parameterType: "Boolean",
                desc: "是否显示边框",
                remark: "",
            }
        ]
    },
    
]