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
        width: '120px'
    },
    {
        label: "排序",
        key: "sorts",
        props: {
            sortable: true
        }
    },
    {
        label: "是否显示",
        key: "is_show",
        isSlot: true,
    },
    {
        label: "添加时间",
        key: "addtime",
    }
];

export const operation = ["edit", 'detail', 'detele'];

export const TABALE_DATA = [
    {
        ability: "vue",
        sorts: "1",
        is_show: false,
        addtime: "2022-09-21 14:01:51"
    },
    {
        ability: "react",
        sorts: "2",
        is_show: true,
        addtime: "2022-09-21 14:01:51"
    },
    {
        ability: "JavaScript",
        sorts: "3",
        is_show: true,
        addtime: "2022-09-21 14:01:51"
    }
]

export const code1 =`
<template>
    <dzs-table :tableHeader="tableHeader" :list="tableData" :operation="operation" :maxSize="maxSize" :total="total" :tableOptions="tableOptions" :operationOption="operationOption" :showCheckbox="showCheckbox" @change="changeTabel">
        <template #is_show="rowData">
             <el-switch :value="rowData.row.is_show" :disabled="true"></el-switch>
        </template>
    </dzs-table>
</template>
<script>
export default {
    components: {
        dzsTable
    },
    data() {
        return {
            tableHeader: [
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
            ],
            tableData: [
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
            ],
            operation: ["edit" , 'detail' , 'detele'],
            total: 100,
            maxSize: 10,
            showCheckbox: true,
            tableOptions: {
                'row-key': "key",
                'default-expand-all': true,
                border: true,
                'tree-props': {
                    children: 'children',
                    hasChildren: 'hasChildren'
                }
            },
            operationOption : {
                fixed : 'right'
            },
            descData,
            code1: {
                title: "代码示例",
                code: code1,
                lang: "js"
            },
        }
    },
    methods: {
        changeTabel() {
            // do something
        }
    },
}
</script>
`