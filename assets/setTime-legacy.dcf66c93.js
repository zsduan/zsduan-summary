!function(){var e=document.createElement("style");e.innerHTML=".guid[data-v-1a0b74b0]{padding-top:10px}\n",document.head.appendChild(e),System.register(["./index-legacy.1a0f0a80.js","../static/js/index-legacy-842fec71.js","./index-legacy.d9fe1b56.js","./_tinymce@5.10.7@tinymce-legacy.42e09624.js","./_async-validator@1.8.5@async-validator-legacy.075698ce.js","./_babel-runtime@6.26.0@babel-runtime-legacy.1a12242f.js","./_core-js@2.6.12@core-js-legacy.6aa07fbe.js","./_@tinymce_tinymce-vue@3.2.8@@tinymce-legacy.07401023.js","./_vue@2.6.11@vue-legacy.63dd66dc.js","./_vue-router@3.6.5@vue-router-legacy.19356d24.js","./_vuex@3.6.2@vuex-legacy.94bc131c.js","./_element-ui@2.15.12@element-ui-legacy.8f3b5fb4.js","./_deepmerge@1.5.2@deepmerge-legacy.c1b16c21.js","./_resize-observer-polyfill@1.5.1@resize-observer-polyfill-legacy.1f4c05a3.js","./_throttle-debounce@1.1.0@throttle-debounce-legacy.66589680.js","./_lodash@4.17.21@lodash-legacy.4530bffc.js","./_babel-helper-vue-jsx-merge-props@2.0.3@babel-helper-vue-jsx-merge-props-legacy.4282b64f.js","./_normalize-wheel@1.0.1@normalize-wheel-legacy.72fffe93.js","./_mavon-editor@2.10.4@mavon-editor-legacy.b45d5020.js","./_vue-prism-editor@1.3.0@vue-prism-editor-legacy.be0e5f62.js","./_prismjs@1.29.0@prismjs-legacy.a6de8169.js"],(function(e){"use strict";var t,n;return{setters:[function(e){t=e.d},function(e){n=e.n},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){}],execute:function(){var i=function(e){"string"==typeof e&&(e=new Date(e));var t=(e=e||new Date).getFullYear(),n=e.getMonth()+1,i=e.getDate(),a=e.getHours(),o=e.getMinutes(),c=e.getSeconds();return{android:"".concat([t,n,i].map(s).join("-")," ").concat([a,o,c].map(s).join(":")),ios:"".concat([t,n,i].map(s).join("/")," ").concat([a,o,c].map(s).join(":"))}},s=function(e){return(e=e.toString())[1]?e:"0".concat(e)},a={props:{newIndex:{type:Boolean,default:function(){return!1}}},components:{dzsForm:t},computed:{formOptions:function(){return{formProps:{"label-width":"60px"},formItem:[{label:"时间",key:"Time",type:"date",span:24,rules:[],props:{type:"datetime","value-format":"yyyy-MM-dd HH:mm:ss",placeholder:"请选择时间"}}]}}},data:function(){return{time:i(),code1:'\n// 传入\n\ntime string 2022-09-30 12:00:00 或者 new Date()\n\n// 使用\nimport setTime from "@/utils/setTime";\nsetTime(time ? )\n\n// 返回\nreturn {\n    android : string,\n    ios : string\n}\n'}},methods:{onSubmit:function(e){this.time=i(e.Time)}}},o={},c=n(a,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.newIndex?e._e():n("dzs-header",{attrs:{title:"返回安卓/苹果时间"}}),n("div",{staticClass:"page"},[n("h2",[e._v("基础用法")]),n("div",{staticClass:"item"},[n("div",{staticClass:"tips-box"},[e._v("返回安卓/苹果时间")]),n("dzs-form",{attrs:{options:e.formOptions},on:{onSubmit:e.onSubmit}}),n("div",{staticClass:"guid"},[e._v(e._s(e.time))]),n("dzs-code",{attrs:{title:"使用方法",value:e.code1}})],1),n("h2",[e._v("源代码下载/查看")]),e._m(0)]),e.newIndex?e._e():n("el-backtop",{attrs:{"visibility-height":20}})],1)}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"item"},[n("a",{attrs:{target:"_blank",href:"https://github.com/zsduan/zsduan-summary/blob/master/src/utils/setTime.js"}},[e._v("下载/查看地址")])])}],!1,r,"1a0b74b0",null,null);function r(e){for(var t in o)this[t]=o[t]}e("default",function(){return c.exports}())}}}))}();