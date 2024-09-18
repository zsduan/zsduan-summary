export const tableHeader = [
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
        isSlot: true,
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

export const tableOptions = {
    'row-key' : "key",
    'default-expand-all' : true,
    border : true,
    'tree-props' : {
        children: 'children', 
        hasChildren: 'hasChildren'
    }
}