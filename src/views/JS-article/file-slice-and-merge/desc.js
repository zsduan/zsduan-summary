export const tableData = [
    {
        key : "option",
        type : "param",
        parameterType : "Object ",
        desc : "配置对象",
        remark : "",
        children : [
            {
                key : "file",
                type : "param",
                parameterType : "File | string | object | Array",
                desc : "文件|文件列表",
                remark : "fileId|file|refs|fileList 任选其一 必填"
            },
            {
                key : "Vue",
                type : "param",
                parameterType : "Object",
                desc : "vue对象",
                remark : "如果传入fileId或者refs需要传入"
            },
            {
                key : "type",
                type : "param",
                parameterType : "String",
                desc : "切片还是合并",
                remark : "slice|merge"
            },
            {
                key : "md5",
                type : "param",
                parameterType : "Boolean",
                desc : "是否需要md5值",
                remark : "默认不需要 开启后分片会变慢"
            },
            {
                key : "chunkSize",
                type : "param",
                parameterType : "Number",
                desc : "切片大小",
                remark : "默认1024 * 1024 * 5"
            },
            {
                key : "fileName",
                type : "param",
                parameterType : "String",
                desc : "合并的文件名称",
                remark : ""
            },
            {
                key : "sort",
                type : "param",
                parameterType : "Boolean",
                desc : "是否进行排序",
                remark : "默认true 合并文件较多建议开启"
            },
            {
                key : "success",
                type : "param",
                parameterType : "Function",
                desc : "成功回调",
                remark : ""
            },
            {
                key : "fail",
                type : "param",
                parameterType : "Function",
                desc : "失败回调",
                remark : ""
            },
        ]
    },
]

export const sliceTable = [
    {
        key : "code",
        type : "param",
        parameterType : "Number",
        desc : "状态码",
        remark : "200 成功"
    },
    {
        key : "list",
        type : "param",
        parameterType : "Array<Object>",
        desc : "文件分片的list数据",
        remark : "",
        children : [
            {
                key : "sort",
                type : "param",
                parameterType : "Number",
                desc : "排序",
                remark : ""
            },
            {
                key : "file(防止更新失败)",
                type : "param",
                parameterType : "File",
                desc : "分片文件bold",
                remark : ""
            },
            {
                key : "filename(防止更新失败)",
                type : "param",
                parameterType : "String",
                desc : "文件名称 name-1 name-2",
                remark : ""
            },
        ]
    },
    {
        key : "filename",
        type : "param",
        parameterType : "String",
        desc : "文件原始名称",
        remark : ""
    },
    {
        key : "file",
        type : "param",
        parameterType : "File",
        desc : "原始文件 blod数据",
        remark : ""
    },
    {
        key : "md5",
        type : "param",
        parameterType : "String",
        desc : "原始文件的md5值",
        remark : ""
    },
]


export const mergeTable = [
    {
        key : "code",
        type : "param",
        parameterType : "Number",
        desc : "状态码",
        remark : "200 成功"
    },
    {
        key : "file",
        type : "param",
        parameterType : "File",
        desc : "文件 blod数据",
        remark : ""
    },
    {
        key : "filename",
        type : "param",
        parameterType : "String",
        desc : "文件名称",
        remark : ""
    },
]