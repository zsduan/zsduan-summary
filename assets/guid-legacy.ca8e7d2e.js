!function(){var e=document.createElement("style");e.innerHTML=".guid[data-v-9bceacfa]{padding-top:10px}\n",document.head.appendChild(e),System.register(["../static/js/index-legacy-842fec71.js","./_vue@2.6.11@vue-legacy.63dd66dc.js","./_async-validator@1.8.5@async-validator-legacy.075698ce.js","./_babel-runtime@6.26.0@babel-runtime-legacy.1a12242f.js","./_core-js@2.6.12@core-js-legacy.6aa07fbe.js","./_vue-router@3.6.5@vue-router-legacy.19356d24.js","./_vuex@3.6.2@vuex-legacy.94bc131c.js","./_element-ui@2.15.12@element-ui-legacy.8f3b5fb4.js","./_deepmerge@1.5.2@deepmerge-legacy.c1b16c21.js","./_resize-observer-polyfill@1.5.1@resize-observer-polyfill-legacy.1f4c05a3.js","./_throttle-debounce@1.1.0@throttle-debounce-legacy.66589680.js","./_lodash@4.17.21@lodash-legacy.4530bffc.js","./_babel-helper-vue-jsx-merge-props@2.0.3@babel-helper-vue-jsx-merge-props-legacy.4282b64f.js","./_normalize-wheel@1.0.1@normalize-wheel-legacy.72fffe93.js","./_mavon-editor@2.10.4@mavon-editor-legacy.b45d5020.js","./_vue-prism-editor@1.3.0@vue-prism-editor-legacy.be0e5f62.js","./_prismjs@1.29.0@prismjs-legacy.a6de8169.js"],(function(e){"use strict";var t;return{setters:[function(e){t=e.n},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){}],execute:function(){function n(){this.date=new Date,"function"!=typeof this.newGUID&&(n.prototype.newGUID=function(){this.date=new Date;for(var e="",t=this.hexadecimal(this.getGUIDDate(),16),n=this.hexadecimal(this.getGUIDTime(),16),i=0;i<9;i++)e+=Math.floor(16*Math.random()).toString(16);for(e+=t,e+=n;e.length<32;)e+=Math.floor(16*Math.random()).toString(16);return this.formatGUID(e)},n.prototype.getGUIDDate=function(){return this.date.getFullYear()+this.addZero(this.date.getMonth()+1)+this.addZero(this.date.getDay())},n.prototype.getGUIDTime=function(){return this.addZero(this.date.getHours())+this.addZero(this.date.getMinutes())+this.addZero(this.date.getSeconds())+this.addZero(parseInt(this.date.getMilliseconds()/10))},n.prototype.addZero=function(e){return"NaN"!=Number(e).toString()&&e>=0&&e<10?"0"+Math.floor(e):e.toString()},n.prototype.hexadecimal=function(e,t,n){return null!=n?parseInt(e.toString(),n).toString(t):parseInt(e.toString()).toString(t)},n.prototype.formatGUID=function(e){return e.slice(0,8)+"-"+(e.slice(8,12)+"-")+(e.slice(12,16)+"-")+(e.slice(16,20)+"-")+e.slice(20)})}var i={props:{newIndex:{type:Boolean,default:function(){return!1}}},data:function(){return{guid:"",code1:'\n// 使用\nimport guid from "@/utils/guid";\nguid()\n\n// 返回  guid\n'}},methods:{setGuid:function(){this.guid=(new n).newGUID()}}},a={},r=t(i,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.newIndex?e._e():n("dzs-header",{attrs:{title:"生成guid"}}),n("div",{staticClass:"page"},[n("h2",[e._v("基础用法")]),n("div",{staticClass:"item"},[n("div",{staticClass:"tips-box"},[e._v("点按钮直接打开")]),n("el-button",{attrs:{type:"primary"},on:{click:e.setGuid}},[e._v("点击生成guid")]),n("div",{staticClass:"guid"},[e._v(e._s(e.guid))]),n("dzs-code",{attrs:{title:"使用方法",value:e.code1}})],1),n("h2",[e._v("源代码下载/查看")]),e._m(0)]),e.newIndex?e._e():n("el-backtop",{attrs:{"visibility-height":20}})],1)}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"item"},[n("a",{attrs:{target:"_blank",href:"https://github.com/zsduan/zsduan-summary/blob/master/src/utils/guid.js"}},[e._v("下载/查看地址")])])}],!1,o,"9bceacfa",null,null);function o(e){for(var t in a)this[t]=a[t]}e("default",function(){return r.exports}())}}}))}();