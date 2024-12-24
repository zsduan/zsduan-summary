
export const tableData = [
    {
        key: "upFile",
        type: "props",
        parameterType: "String",
        desc: "上传地址",
        remark: "",
    },
    {
        key: "limit",
        type: "props",
        parameterType: "Number",
        desc: "上传数量",
        remark: "默认1",
    },
    {
        key: "value/v-model",
        type: "props",
        parameterType: "Array",
        desc: "值",
        remark: "",
    },
    {
        key: "imgStyle",
        type: "props",
        parameterType: "String",
        desc: "图片样式",
        remark: "默认'width: 80px;height: 80px;'",
    },
    {
        key: "maxSize",
        type: "props",
        parameterType: "Number",
        desc: "最大上传大小",
        remark: "默认3M",
    },
    {
        key: "imgType",
        type: "props",
        parameterType: "String",
        desc: "图片类型",
        remark: "以逗号分隔",
    },
    {
        key: "uploadFun",
        type: "props",
        parameterType: "Function",
        desc: "自定义上传函数",
        remark: "默认null , (file, handleSuccess)=>{ handleSuccess(res , file) } , res 必须拥有 以下属性 url , name , path",
    },
    {
        key: "@change",
        type: "methods",
        parameterType: "Function",
        desc: "改变",
        remark: "返回所以图片list array",
    },
    {
        key: "@upload-success",
        type: "methods",
        parameterType: "Function",
        desc: "上传成功",
        remark: "返回当前图片信息 object",
    },
    {
        key: "@upload-remove",
        type: "methods",
        parameterType: "Function",
        desc: "删除",
        remark: "返回所以图片list array",
    }
]