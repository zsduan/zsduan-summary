!function(){var e=document.createElement("style");e.innerHTML=".my-box[data-v-6c430a9e]{display:flex}.my-box .ipt[data-v-6c430a9e]{width:30%;margin-left:10px}.my-box .ipt[data-v-6c430a9e]:first-child{margin-left:0}@media screen and (max-width: 768px){.my-box .ipt[data-v-6c430a9e]{width:70%}}.my-box .btn[data-v-6c430a9e]{display:inline-block;margin-left:10px}.editer[data-v-6c430a9e]{width:100%;height:100px;border:1px solid #ccc}\n",document.head.appendChild(e),System.register(["../static/js/index-legacy-842fec71.js","./_vue@2.6.11@vue-legacy.63dd66dc.js","./_async-validator@1.8.5@async-validator-legacy.075698ce.js","./_babel-runtime@6.26.0@babel-runtime-legacy.1a12242f.js","./_core-js@2.6.12@core-js-legacy.6aa07fbe.js","./_vue-router@3.6.5@vue-router-legacy.19356d24.js","./_vuex@3.6.2@vuex-legacy.94bc131c.js","./_element-ui@2.15.12@element-ui-legacy.8f3b5fb4.js","./_deepmerge@1.5.2@deepmerge-legacy.c1b16c21.js","./_resize-observer-polyfill@1.5.1@resize-observer-polyfill-legacy.1f4c05a3.js","./_throttle-debounce@1.1.0@throttle-debounce-legacy.66589680.js","./_lodash@4.17.21@lodash-legacy.4530bffc.js","./_babel-helper-vue-jsx-merge-props@2.0.3@babel-helper-vue-jsx-merge-props-legacy.4282b64f.js","./_normalize-wheel@1.0.1@normalize-wheel-legacy.72fffe93.js","./_mavon-editor@2.10.4@mavon-editor-legacy.b45d5020.js","./_vue-prism-editor@1.3.0@vue-prism-editor-legacy.be0e5f62.js","./_prismjs@1.29.0@prismjs-legacy.a6de8169.js"],(function(e){"use strict";var t,n;return{setters:[function(e){t=e.n,n=e.m},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){}],execute:function(){var s={props:{newIndex:{type:Boolean,default:function(){return!1}}},data:function(){return{Text:"我是复制的文本",code1:'\n// 导入\nimport {myCopy} from "@/utils/myCopy";\n// 使用\n/*\n * @name 复制\n * @parame copyContent 复制的内容\n * @parame is_input 是否为 原始的input复制 仅支持文字 默认 false\n * @parame is_input 为false 支持 Html Html 仅支持 windows  Text 全系统支持支持\n * @return\n    success : (reslut) =>{}, //成功\n    fail : (error) =>{} //失败\n*/\nmyCopy({\n    copyContent : copyContent,\n    type : "Text" , //Html Image 仅支持 windows  Text 全系统支持支持\n    is_input : false , //是否为 原始的input复制 仅支持文字 默认 false\n    success : (reslut) =>{}, //成功\n    fail : (error) =>{} //失败\n})\n',Text1:"<h2>复制image</h2>",code2:'\n// 导入\nimport {myCopy} from "@/utils/myCopy";\n// 使用\n/*\n * @name 复制\n * @parame copyContent 复制的内容\n * @parame is_input 是否为 原始的input复制 仅支持文字 默认 false\n * @parame is_input 为false 支持 Html Html 仅支持 windows  Text 全系统支持支持\n * @return\n    success : (reslut) =>{}, //成功\n    fail : (error) =>{} //失败\n*/\nmyCopy({\n    copyContent : copyContent,\n    type : "html" , //Html Image 仅支持 windows  Text 全系统支持支持\n    is_input : false , //是否为 原始的input复制 仅支持文字 默认 false\n    success : (reslut) =>{}, //成功\n    fail : (error) =>{} //失败\n})\n'}},mounted:function(){},methods:{copys:function(){var e=this;this.Text||this.$message({message:"必填",type:"error"}),n({copyContent:this.Text,success:function(){e.$message({message:"复制成功",type:"success"})}})},copy2:function(){var e=this;this.Text1||this.$message({message:"必填",type:"error"}),n({copyContent:this.Text1,type:"Html",success:function(){e.$message({message:"复制成功",type:"success"})}})}}},a={},i=t(s,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.newIndex?e._e():n("dzs-header",{attrs:{title:"js复制"}}),n("div",{staticClass:"page"},[n("h2",[e._v("基础用法 复制文本")]),n("div",{staticClass:"item"},[n("div",{staticClass:"my-box"},[n("el-input",{staticClass:"ipt",attrs:{placeholder:"请输入需要复制的文字"},model:{value:e.Text,callback:function(t){e.Text=t},expression:"Text"}}),n("el-button",{staticClass:"btn",attrs:{type:"primary"},on:{click:e.copys}},[e._v("复制")])],1),n("dzs-code",{attrs:{title:"使用方法",value:e.code1}})],1),n("h2",[e._v("复制HTML")]),n("div",{staticClass:"item"},[n("div",{staticClass:"my-box"},[n("el-input",{staticClass:"ipt",attrs:{placeholder:"请输入需要复制的html"},model:{value:e.Text1,callback:function(t){e.Text1=t},expression:"Text1"}}),n("el-button",{staticClass:"btn",attrs:{type:"primary"},on:{click:e.copy2}},[e._v("复制")])],1),n("dzs-code",{attrs:{title:"使用方法",value:e.code2}}),n("dzs-code",{attrs:{title:"测试 直接粘贴到这里"}},[n("div",{staticClass:"editer",attrs:{contenteditable:"true"}})])],1),n("h2",[e._v("源代码下载/查看")]),e._m(0)]),e.newIndex?e._e():n("el-backtop",{attrs:{"visibility-height":20}})],1)}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"item"},[n("a",{attrs:{target:"_blank",href:"https://github.com/zsduan/zsduan-summary/blob/master/src/utils/myCopy.js"}},[e._v("下载/查看地址")])])}],!1,c,"6c430a9e",null,null);function c(e){for(var t in a)this[t]=a[t]}e("default",function(){return i.exports}())}}}))}();