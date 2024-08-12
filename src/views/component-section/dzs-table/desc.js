export const descData = [
    {
        key : "list",
        type : "props",
        parameterType : "Array",
        desc : "表格数据",
        remark : ""
    },
    {
        key : "tableHeader",
        type : "props",
        parameterType : "Array",
        desc : "表格顶部配置 及你需要展示的tr以及key 详见下方",
        remark : "",
        children : [
            {
                key : "label",
                type : "props",
                parameterType : "string",
                desc : "表头名称",
                remark : ""
            },
            {
                key : "key",
                type : "props",
                parameterType : "string",
                desc : "表头对应的key 及你在list中的key",
                remark : "在isSlot 为true时 该值为具名插槽的名称"
            },
            {
                key : "width",
                type : "props",
                parameterType : "string",
                desc : "宽度",
                remark : ""
            },
            {
                key : "isSlot",
                type : "props",
                parameterType : "Boolean",
                desc : "是否开启插槽",
                remark : ""
            },
            {
                key : "props",
                type : "props",
                parameterType : "Object",
                desc : "el-table-column属性",
                remark : ""
            } 
        ]
    },
    {
        key : "tableOptions",
        type : "props",
        parameterType : "Object",
        desc : "el-table属性",
        remark : ""
    },
    {
        key : "operation",
        type : "props",
        parameterType : "Array",
        desc : "操作栏参数",
        remark : "可选值 ['edit' , 'details' , 'delete'] 为空数组时不显示操作栏"
    },
    {
        key : "operationOption",
        type : "props",
        parameterType : "Object",
        desc : "el-table-column属性",
        remark : ""
    },
    {
        key : "showOperation",
        type : "props",
        parameterType : "Boolean",
        desc : "是否显示操作列",
        remark : "默认 true 显示 operation为空数组时不显示"
    },
    {
        key : "loading",
        type : "props",
        parameterType : "Boolean",
        desc : "是否显示加载中",
        remark : ""
    },
    {
        key : "height",
        type : "props",
        parameterType : "Number | String",
        desc : "表格高度",
        remark : ""
    },
    {
        key : "total",
        type : "props",
        parameterType : "Number",
        desc : "总数条数",
        remark : ""
    },
    {
        key : "maxSize",
        type : "props",
        parameterType : "Number",
        desc : "每页显示条数",
        remark : ""
    },
    {
        key : "showPage",
        type : "props",
        parameterType : "Boolean",
        desc : "是否显示分页",
        remark : ""
    },
    {
        key : "showCheckbox",
        type : "props",
        parameterType : "Boolean",
        desc : "是否显示多选",
        remark : "默认 true 显示"
    },
    {
        key : "showSider",
        type : "props",
        parameterType : "Boolean",
        desc : "是都显示侧边栏",
        remark : "默认 true 显示"
    },
    {
        key : "forceSearch",
        type : "props",
        parameterType : "Boolean",
        desc : "侧边栏是否强制搜索",
        remark : "默认false 不强制搜索 true 强制搜索 侧边栏最大搜索条数为200"
    },
    {
        key : "showSiders",
        type : "props",
        parameterType : "Array",
        desc : "侧边栏配置",
        remark : "height 高度设置  column 列配置 search 搜索配置 ['search','column','height']"
    },
    {
        key : "@selectionChange",
        type : "methods",
        parameterType : "",
        desc : "选中数据改变 返回当前选中的数据",
        remark : ""
    },
    {
        key : "@change",
        type : "methods",
        parameterType : "",
        desc : "数据改变",
        remark : "",
        children : [
            {
                key : "status",
                type : "retrun",
                parameterType : "String",
                desc : "状态",
                remark : "page 改变页码 size 改变条数 delete 删除 edit 编辑 details 详情"
            },
            {
                key : "data",
                type : "retrun",
                parameterType : "Object | Array | Number | String",
                desc : "当前数据",
                remark : ""
            },
            {
                key : "title",
                type : "retrun",
                parameterType : "String",
                desc : "中文名称",
                remark : ""
            },
        ]
    },
    {
        key : "@onEdit",
        type : "methods",
        parameterType : "",
        desc : "编辑",
        remark : ""
    },
    {
        key : "@onDetails",
        type : "methods",
        parameterType : "",
        desc : "详情",
        remark : ""
    },
    {
        key : "@onDelete",
        type : "methods",
        parameterType : "",
        desc : "删除",
        remark : ""
    },
    {
        key : "@sizeChange",
        type : "methods",
        parameterType : "",
        desc : "选择条数改变",
        remark : ""
    },
    {
        key : "@currentChange",
        type : "methods",
        parameterType : "",
        desc : "选择页码改变",
        remark : ""
    },
    {
        key : "refs.setSelection",
        type : "ref methods",
        parameterType : "",
        desc : "设置选中行 接收参数 你需要选中行的数据 Object",
        remark : "不传代表清空"
    },
    {
        key : "refs.getTableMethods",
        type : "ref methods",
        parameterType : "",
        desc : "获取table原本的方法",
        remark : ""
    },
    {
        key : "button",
        type : "slot",
        parameterType : "",
        desc : "操作栏的插槽",
        remark : ""
    }
]