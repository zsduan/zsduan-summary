(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-faa784e0","chunk-74d39356","chunk-2d0dd670"],{"06e7":function(t,e,i){"use strict";i("11e4")},"11e4":function(t,e,i){},"2e41":function(t,e,i){"use strict";i.r(e);var l=function(){var t=this,e=t._self._c;return e("section",[e("public-item",{attrs:{title:"基础用法",code:t.code1}},[e("div",{staticClass:"multiplicationTable"},t._l(t.multiplicationTable,(function(i,l){return e("ul",{key:l,staticClass:"multiplicationTable-item"},t._l(i,(function(i,l){return e("li",{key:l,class:[i.is_invalid?"active":"",1==i.left?"left-border":"",9==i.right?"bottom-border":""]},[t._v(t._s(i.equation))])})),0)})),0)]),e("public-item",{attrs:{title:"倒序",code:t.code2}},[e("div",{staticClass:"multiplicationTable"},t._l(t.multiplicationTable2,(function(i,l){return e("ul",{key:l,staticClass:"multiplicationTable-item"},t._l(i,(function(i,l){return e("li",{key:l,class:[i.is_invalid?"active":"",1==i.left?"left-border":"",9==i.right?"bottom-border":""]},[t._v(t._s(i.equation))])})),0)})),0)]),e("public-item",{attrs:{title:"参数说明",list:t.tableData}}),e("public-item",{attrs:{title:"源代码查看",links:t.links}}),e("dzs-backtop",{attrs:{target:".el-main"}})],1)},a=[];i("14d9");function n(t){let e={is_empty:!0,success:t=>{}};e={...e,...t};let i=[],l=0;for(let a=1;a<10;a++){let t=[];l=a;for(let i=e.is_empty?1:l;i<10;i++)i<l?t.push({equation:"",reslut:0,left:0,right:0,is_invalid:!1}):t.push({equation:`${a} x ${i} = ${a*i}`,reslut:a*i,left:a,right:i,is_invalid:!0});i.push(t)}return e.success(i),i}var s=i("9fbb9"),c=i("80df"),u={data(){return{code1:{title:"代码示例",code:s["code1"],lang:"js"},code2:{title:"代码示例",code:s["code2"],lang:"js"},multiplicationTable:[],multiplicationTable2:[],links:{href:"https://github.com/zsduan/zsduan-summary/blob/master/src/utils/99-multiplication-table.js",title:"源码"},tableData:c["tableData"]}},mounted(){n({success:t=>{this.multiplicationTable=t}}),n({is_empty:!1,success:t=>{this.multiplicationTable2=t}})}},o=u,r=(i("06e7"),i("2877")),p=Object(r["a"])(o,l,a,!1,null,null,null);e["default"]=p.exports},"80df":function(t,e,i){"use strict";i.r(e),i.d(e,"tableData",(function(){return l}));const l=[{key:"option",type:"param",parameterType:"Object ",desc:"配置对象",remark:"",children:[{key:"success",type:"param",parameterType:"Function",desc:"成功返回",remark:""},{key:"fail",type:"param",parameterType:"Function",desc:"失败返回",remark:""}]}]},"9fbb9":function(t,e,i){"use strict";i.r(e),i.d(e,"code1",(function(){return l})),i.d(e,"code2",(function(){return a}));const l='\nimport multiplicationTable99 from "@/utils/99-multiplication-table"\nmultiplicationTable99({\n    success : (res =>{\n        // do something\n    })\n});\n',a='\nimport multiplicationTable99 from "@./utils/99-multiplication-table"\nmultiplicationTable99({\n    is_empty : false,\n    success : (res =>{\n        // do something\n    })\n});\n'}}]);
//# sourceMappingURL=chunk-faa784e0.7a722f32.js.map