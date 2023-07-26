/*
 * @Author: zs.duan
 * @Date: 2022-09-21 11:45:29
 * @LastEditors: zs.duan
 * @LastEditTime: 2022-09-21 14:26:18
 * @FilePath: \vue2+js+eui+template\src\views\table\config.js
 */
export const TABALE_HEADER = [
    {
        lable: "能力(120px)",
        key: "ability",
        width : '120px'
    },
    {
        lable: "排序",
        key: "sorts",
        props : {
            sortable : true
        }
    },
    {
        lable: "是否显示",
        key: "is_show",
        isSlot : true,
    },
    {
        lable: "添加时间",
        key: "addtime",
    }
];

export const operation = ["edit" , 'detail' , 'detele'];

export const code1 = 
`
/**
 * @name 表格组件
 * @props tableList 列表数据 isSlot:自定义slot
 * @props operation 操作数据 add 新增 edit 编辑 details 详情 del 删除
 * @props tableHeader 表头数据及表单key  lable 表头名称  key 显示关键字 width 宽度 isSlot:自定义slot props:el-table-column的配置项
 * @props showCheckbox 是否显示多选 默认 false 不显示  true 显示
 * @props maxSize 每页显示条数 默认10
 * @props showPagination 是否显示分页 默认true 显示
 * @props operationOption 操作列配置项
 * @props tableData 表格数据
 * @props total 总条数
 * @props tableOptions 饿了吗ui的配置
 * @props loading 是否开启加载中 可以在 tableOptions配置自己想要的加载 样式
 * @props height 高度
 * @props showTabelSider 是否显示侧边栏 默认true 显示
 *
 * @methods SelectionChange 选中数据改变 返回当前选中的数据
 * @methods change 页码/条数改变 返回当前页码/条数  status:page 改变页码  status:size 改变条数
 * @methods change 列表数据改变 返回当前改变的数据  status:update 更新数据  status:delete 删除数据  status:edit 编辑数据 status:details 详情数据
 * @methods onEdit 编辑
 * @methods onDetails 详情
 * @methods onDel 删除
 * @methods setSelection 设置选中的数据
 * @methods getTableMethods 获取到原生方法
 *
 */


html
<dzs-table :tableHeader="TABALE_HEADER" :tableData="tableData" :operation="operation">
    <template #is_show="rowData">
        <el-switch :value="rowData.row.is_show" :disabled="true"></el-switch>
    </template>
</dzs-table>

data
TABALE_HEADER = [
    {
        lable: "能力",
        key: "ability",
        width : '120px'
    },
    {
        lable: "排序",
        key: "sorts",
    },
    {
        lable: "是否显示",
        key: "is_show",
        isSlot : true,
    },
    {
        lable: "添加时间",
        key: "addtime",
    }
]
tableData = [
    {
        ability : "vue",
        sorts : "1",
        is_show : false,
        addtime : "2022-09-21 14:01:51"
    },
    {
        ability : "react",
        sorts : "2",
        is_show : true,
        addtime : "2022-09-21 14:01:51"
    },
    {
        ability : "JavaScript",
        sorts : "3",
        is_show : true,
        addtime : "2022-09-21 14:01:51"
    },
    {
        ability : "nodejs",
        sorts : "5",
        is_show : false,
        addtime : "2022-09-21 14:01:51"
    }
]
operation = ["edit" , 'detail' , 'detele']
`;

export const code2 = 
`
html 
<dzs-table :tableHeader="TABALE_HEADER" :tableData="tableData" :operation="operation" :maxSize="2" :total="4" :showCheckbox="true">
    <template #is_show="rowData">
        el-switch :value="rowData.row.is_show" :disabled="true"></el-switch>
    </template>
</dzs-table>

data 
同上

methods
changePage 返回 
{
    status: "page" | "size",  //size 条数改变 page 页面改变
    data: num, // 条数/页码
}
`