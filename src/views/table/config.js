/*
 * @Author: zs.duan
 * @Date: 2022-09-21 11:45:29
 * @LastEditors: zs.duan
 * @LastEditTime: 2022-09-21 14:26:18
 * @FilePath: \vue2+js+eui+template\src\views\table\config.js
 */
export const TABALE_HEADER = [
    {
        label: "能力(120px)",
        key: "ability",
        width : '120px'
    },
    {
        label: "排序",
        key: "sorts",
        props : {
            sortable : true
        }
    },
    {
        label: "是否显示",
        key: "is_show",
        isSlot : true,
    },
    {
        label: "添加时间",
        key: "addtime",
    }
];

export const operation = ["edit" , 'detail' , 'detele'];

export const code1 = 
`
<dzs-table :tableHeader="TABALE_HEADER" :tableData="tableData" :operation="operation">
    <template #is_show="rowData">
        <el-switch :value="rowData.row.is_show" :disabled="true"></el-switch>
    </template>
</dzs-table>

data
TABALE_HEADER = [
    {
        label: "能力",
        key: "ability",
        width : '120px'
    },
    {
        label: "排序",
        key: "sorts",
    },
    {
        label: "是否显示",
        key: "is_show",
        isSlot : true,
    },
    {
        label: "添加时间",
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

`