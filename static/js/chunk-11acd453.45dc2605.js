(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-11acd453","chunk-2d0cefbf","chunk-2d0d2bae"],{"5a6b":function(e,t,n){"use strict";n.r(t),n.d(t,"tableData",(function(){return r}));const r=[{key:"option",type:"param",parameterType:"Object ",desc:"配置对象",remark:"",children:[{key:"list",type:"param",parameterType:"Array",desc:"原始数组",remark:""},{key:"key",type:"param",parameterType:"String",desc:"分组/排序的key",remark:""},{key:"func",type:"param",parameterType:"Function",desc:"处理函数",remark:"优先级高于key"},{key:"type",type:"param",parameterType:"String",desc:"处理类型",remark:"group/sort"},{key:"order",type:"param",parameterType:"String",desc:"排序方式",remark:"asc/desc"},{key:"success",type:"param",parameterType:"Function",desc:"成功回调",remark:""},{key:"fail",type:"param",parameterType:"Function",desc:"失败回调",remark:""}]}]},"627d":function(e,t,n){"use strict";n.r(t),n.d(t,"code1",(function(){return r})),n.d(t,"code2",(function(){return a}));const r='\nimport groupOrSort from "@/tool/groupOrSort.js";\nconst list = [\n    {\n        age: 18,\n        name: "张三"\n    },\n    {\n        age: 16,\n        name: "李四"\n    },\n    {\n        age: 17,\n        name: "王五"\n    },\n    {\n        age: 17,\n        name: "赵六"\n    },\n],\n\n// 方式一\nconst sortList = groupOrSort({\n    list: list,\n    order: \'desc\',\n    key: "age"\n});\n\n// 方式二\ngroupOrSort({\n    list: list,\n    order: \'desc\',\n    key: "age",\n    success: (res) => {\n        // do something\n    }\n});\n',a='\nimport groupOrSort from "@/tool/groupOrSort.js";\nconst list = [\n    {\n        age: 18,\n        name: "张三"\n    },\n    {\n        age: 16,\n        name: "李四"\n    },\n    {\n        age: 17,\n        name: "王五"\n    },\n    {\n        age: 17,\n        name: "赵六"\n    },\n],\n\n// 方式一\nconst groupList = groupOrSort({\n    list: list,\n    type: \'group\',\n    key: "age"\n});\n\n// 方式二\ngroupOrSort({\n    list: list,\n    type: \'group\',\n    key: "age",\n    success: (res) => {\n        // do something\n    }\n});\n'},a380:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e._self._c;return t("section",[t("public-item",{attrs:{title:"排序",code:e.code1}},[t("el-select",{attrs:{placeholder:"请选择排序方式"},on:{change:e.changeSort},model:{value:e.listSort,callback:function(t){e.listSort=t},expression:"listSort"}},e._l(e.changeList,(function(e){return t("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1),t("p",[e._v(" "+e._s(e.sortList))])],1),t("public-item",{attrs:{title:"排序",code:e.code2}},[t("el-select",{attrs:{placeholder:"请选择分组方式"},on:{change:e.changeGroup},model:{value:e.groupValue,callback:function(t){e.groupValue=t},expression:"groupValue"}},e._l(e.changeGroupList,(function(e){return t("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1),t("p",[e._v(" "+e._s(e.groupList))])],1),t("public-item",{attrs:{title:"参数说明",list:e.tableData}}),t("public-item",{attrs:{title:"源代码查看",links:e.links}}),t("dzs-backtop",{attrs:{target:".el-main"}})],1)},a=[];n("fdf1"),n("9805");function s(e){let t={list:[],key:"",func:null,type:"sort",order:"asc",success:function(e){},fail:function(e){}};if("object"!==typeof e)throw t.fail("option is not a object"),new Error("option is not a object");if(Object.assign(t,e),!Array.isArray(t.list))throw t.fail("list is not a array"),new Error("list is not a array");let n=[];return"group"===t.type?n=o(t.list,t.key):"sort"===t.type&&(n=i(t.list,t.key,t.func),"desc"===t.order&&n.reverse()),t.success(n),n}const o=(e,t)=>{let n={};return e.forEach(e=>{let r=e[t];n[r]||(n[r]=[]),n[r].push(e)}),n},i=(e,t,n,r)=>{if(n)e.sort(n);else if("desc"===r){if(e[0]&&"object"!==typeof e[0])return e.sort((e,t)=>t-e),e;e.sort((e,n)=>n[t]-e[t])}else e[0]&&"object"!==typeof e[0]&&e.sort((e,t)=>e-t),e.sort((e,n)=>e[t]-n[t]);return e};var l=s,c=n("627d"),u=n("5a6b"),p={data(){return{list:[{age:18,name:"张三"},{age:16,name:"李四"},{age:17,name:"王五"},{age:17,name:"赵六"}],listSort:"desc",changeList:[{label:"倒序",value:"desc"},{label:"升序",value:"asc"}],groupValue:"age",changeGroupList:[{label:"名称",value:"name"},{label:"年龄",value:"age"}],sortList:[],groupList:[],code1:{title:"代码示例",code:c["code1"],lang:"js"},code2:{title:"代码示例",code:c["code2"],lang:"js"},tableData:u["tableData"],links:{href:"https://github.com/zsduan/zsduan-summary/blob/master/src/tool/groupOrSort.js",title:"源码"}}},mounted(){this.changeSort(),this.changeGroup()},methods:{changeSort(){this.sortList=l({list:this.list,order:this.listSort,key:"age"})},changeGroup(){this.groupList=l({list:this.list,type:"group",key:this.groupValue})}}},g=p,d=(n("d101"),n("1805")),m=Object(d["a"])(g,r,a,!1,null,"04a7727a",null);t["default"]=m.exports},c0ae:function(e,t,n){},d101:function(e,t,n){"use strict";n("c0ae")}}]);
//# sourceMappingURL=chunk-11acd453.45dc2605.js.map