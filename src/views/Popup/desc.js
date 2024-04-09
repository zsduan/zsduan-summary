export const descHeader = [
    {
        key : 'key',
        label : '名称',
    },
    {
        key : 'type',
        label : '类型',
        width : '120px'
    },
    {
        key : 'parameterType',
        label : '参数类型',
        width : '120px'
    },
    {
        label : "说明",
        key : "desc",
    },
    {
        label : "备注",
        key : "remark",
    }
]

export const descTableOptions = {
    'row-key' : "key",
    'default-expand-all' : true,
    border : true,
    'tree-props' : {
        children: 'children', 
        hasChildren: 'hasChildren'
    }
}

export const descData = [
    {
        key : "title",
        type : "props",
        parameterType : "String",
        desc : "标题",
        remark : ""
    },
    {
        key : "isShow / v-model",
        type : "props",
        parameterType : "Boolean",
        desc : "是否显示",
        remark : ""
    },
    {
        key : "width",
        type : "props",
        parameterType : "String",
        desc : "宽度",
        remark : ""
    },
    {
        key : "options",
        type : "props",
        parameterType : "Object",
        desc : "el-dialog的配置项",
        remark : ""
    },
    {
        key : "fullscreen",
        type : "props",
        parameterType : "Boolean",
        desc : "是否全屏",
        remark : ""
    },
    {
        key : "showFullscreen",
        type : "props",
        parameterType : "Boolean",
        desc : "是否显示全屏按钮",
        remark : ""
    },
    {
        key : "open",
        type : "methods",
        parameterType : "",
        desc : "打开弹窗",
        remark : ""
    },
    {
        key : "close",
        type : "methods",
        parameterType : "",
        desc : "关闭弹窗",
        remark : ""
    },
    {
        key : "opened",
        type : "methods",
        parameterType : "",
        desc : "打开弹窗后的回调",
        remark : ""
    },
    {
        key : "closed",
        type : "methods",
        parameterType : "",
        desc : "关闭弹窗后的回调",
        remark : ""
    }
]
