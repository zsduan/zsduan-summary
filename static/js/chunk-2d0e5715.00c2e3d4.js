(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e5715"],{9503:function(e,t,n){"use strict";n.r(t),n.d(t,"TABALE_HEADER",(function(){return a})),n.d(t,"operation",(function(){return s})),n.d(t,"code1",(function(){return o})),n.d(t,"code2",(function(){return i}));const a=[{lable:"能力(120px)",key:"ability",width:"120px"},{lable:"排序",key:"sorts",props:{sortable:!0}},{lable:"是否显示",key:"is_show",isSlot:!0},{lable:"添加时间",key:"addtime"}],s=["edit","detail","detele"],o='\n/**\n * @name 表格组件\n * @props tableList 列表数据 isSlot:自定义slot\n * @props operation 操作数据 add 新增 edit 编辑 details 详情 del 删除\n * @props tableHeader 表头数据及表单key  lable 表头名称  key 显示关键字 width 宽度 isSlot:自定义slot props:el-table-column的配置项\n * @props showCheckbox 是否显示多选 默认 false 不显示  true 显示\n * @props maxSize 每页显示条数 默认10\n * @props showPagination 是否显示分页 默认true 显示\n * @props operationOption 操作列配置项\n * @props tableData 表格数据\n * @props total 总条数\n * @props tableOptions 饿了吗ui的配置\n * @props loading 是否开启加载中 可以在 tableOptions配置自己想要的加载 element-loading-text="拼命加载中" element-loading-spinner="el-icon-loading"\n *\n * @methods SelectionChange 选中数据改变 返回当前选中的数据\n * @methods change 页码/条数改变 返回当前页码/条数  status:page 改变页码  status:size 改变条数\n * @methods change 列表数据改变 返回当前改变的数据  status:update 更新数据  status:delete 删除数据  status:edit 编辑数据 status:details 详情数据\n * @methods onEdit 编辑\n * @methods onDetails 详情\n * @methods onDel 删除\n * @methods setSelection 设置选中的数据\n *\n */\n\n\nhtml\n<dzs-table :tableHeader="TABALE_HEADER" :tableData="tableData" :operation="operation">\n    <template #is_show="rowData">\n        <el-switch :value="rowData.row.is_show" :disabled="true"></el-switch>\n    </template>\n</dzs-table>\n\ndata\nTABALE_HEADER = [\n    {\n        lable: "能力",\n        key: "ability",\n        width : \'120px\'\n    },\n    {\n        lable: "排序",\n        key: "sorts",\n    },\n    {\n        lable: "是否显示",\n        key: "is_show",\n        isSlot : true,\n    },\n    {\n        lable: "添加时间",\n        key: "addtime",\n    }\n]\ntableData = [\n    {\n        ability : "vue",\n        sorts : "1",\n        is_show : false,\n        addtime : "2022-09-21 14:01:51"\n    },\n    {\n        ability : "react",\n        sorts : "2",\n        is_show : true,\n        addtime : "2022-09-21 14:01:51"\n    },\n    {\n        ability : "JavaScript",\n        sorts : "3",\n        is_show : true,\n        addtime : "2022-09-21 14:01:51"\n    },\n    {\n        ability : "nodejs",\n        sorts : "5",\n        is_show : false,\n        addtime : "2022-09-21 14:01:51"\n    }\n]\noperation = ["edit" , \'detail\' , \'detele\']\n',i='\nhtml \n<dzs-table :tableHeader="TABALE_HEADER" :tableData="tableData" :operation="operation" :maxSize="2" :total="4" :showCheckbox="true">\n    <template #is_show="rowData">\n        el-switch :value="rowData.row.is_show" :disabled="true"></el-switch>\n    </template>\n</dzs-table>\n\ndata \n同上\n\nmethods\nchangePage 返回 \n{\n    status: "page" | "size",  //size 条数改变 page 页面改变\n    data: num, // 条数/页码\n}\n'}}]);
//# sourceMappingURL=chunk-2d0e5715.00c2e3d4.js.map