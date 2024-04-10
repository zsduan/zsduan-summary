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
        key: "icon",
        type: "props",
        parameterType: "String",
        desc: "el-ui icon图标",
        remark: "",
    },
    {
        key: "imgSrc",
        type: "props",
        parameterType: "String",
        desc: "图片 icon 优先级高于icon",
        remark: "",
    },
    {
        key: "showIcon",
        type: "props",
        parameterType: "Boolean",
        desc: "是否显示icon",
        remark: "",
    },
    {
        key: "closeIcon",
        type: "props",
        parameterType: "String",
        desc: "el-ui icon图标",
        remark: "",
    },
    {
        key: "closeImgSrc",
        type: "props",
        parameterType: "String",
        desc: "关闭按钮图片 icon 优先级高于closeIcon",
        remark: "",
    },
    {
        key: "showCloseIcon",
        type: "props",
        parameterType: "Boolean",
        desc: "是否显示关闭按钮",
        remark: "",
    },
    {
        key: "text",
        type: "props",
        parameterType: "String",
        desc: "提示文字",
        remark: "",
    },
    {
        key: "speed",
        type: "props",
        parameterType: "Number",
        desc: "滚动速度",
        remark: "",
    },
    {
        key: "isMove",
        type: "props",
        parameterType: "Boolean",
        desc: "是否滚动",
        remark: "",
    },
    {
        key: "isEline",
        type: "props",
        parameterType: "Boolean",
        desc: "是否多行显示",
        remark: "",
    },
    {
        key: "color",
        type: "props",
        parameterType: "String",
        desc: "文字颜色",
        remark: "和css一样",
    },
    {
        key: "backgroundColor",
        type: "props",
        parameterType: "String",
        desc: "背景颜色",
        remark: "",
    },
    {
        key: "@close",
        type: "methods",
        parameterType: "",
        desc: "关闭事件",
        remark: "",
    },
    {
        key: "@contentClick",
        type: "methods",
        parameterType: "",
        desc: "内容点击事件",
        remark: "",
    },
    {
        key: "@closeClick",
        type: "methods",
        parameterType: "",
        desc: "关闭按钮点击事件",
        remark: "",
    },
    {
        key: "closeNoticeBar",
        type: "ref methods",
        parameterType: "",
        desc: "通过ref调用关闭事件",
        remark: "",
    },
    {
        key: "left-icon",
        type: "slots",
        parameterType: "",
        desc: "左侧插槽",
        remark: "",
    },
    {
        key: "right-icon",
        type: "slots",
        parameterType: "",
        desc: "右侧插槽",
        remark: "",
    },
    {
        key: "",
        type: "slots",
        parameterType: "",
        desc: "默认插槽",
        remark: "",
    },
]