!function(){var t=document.createElement("style");t.innerHTML=".page .item[data-v-5a80f6be]{padding:10px 0}.page .item a[data-v-5a80f6be]{display:inline-block;padding:10px 20px;text-align:center;border:1px solid #ccc;border-radius:10px}\n",document.head.appendChild(t),System.register(["../static/js/index-legacy-842fec71.js","./_vue@2.6.11@vue-legacy.63dd66dc.js","./_async-validator@1.8.5@async-validator-legacy.075698ce.js","./_babel-runtime@6.26.0@babel-runtime-legacy.1a12242f.js","./_core-js@2.6.12@core-js-legacy.6aa07fbe.js","./_vue-router@3.6.5@vue-router-legacy.19356d24.js","./_vuex@3.6.2@vuex-legacy.94bc131c.js","./_element-ui@2.15.12@element-ui-legacy.8f3b5fb4.js","./_deepmerge@1.5.2@deepmerge-legacy.c1b16c21.js","./_resize-observer-polyfill@1.5.1@resize-observer-polyfill-legacy.1f4c05a3.js","./_throttle-debounce@1.1.0@throttle-debounce-legacy.66589680.js","./_lodash@4.17.21@lodash-legacy.4530bffc.js","./_babel-helper-vue-jsx-merge-props@2.0.3@babel-helper-vue-jsx-merge-props-legacy.4282b64f.js","./_normalize-wheel@1.0.1@normalize-wheel-legacy.72fffe93.js","./_mavon-editor@2.10.4@mavon-editor-legacy.b45d5020.js","./_vue-prism-editor@1.3.0@vue-prism-editor-legacy.be0e5f62.js","./_prismjs@1.29.0@prismjs-legacy.a6de8169.js"],(function(t){"use strict";var e;return{setters:[function(t){e=t.n},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){}],execute:function(){var o=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("el-dialog",t._b({attrs:{title:t.title,visible:t.isShow,width:t.width},on:{close:t.close,open:t.open}},"el-dialog",Object.assign({},t.dialogProps),!1),[t._t("default"),o("div",{attrs:{slot:"footer"},slot:"footer"},[t._t("footer")],2)],2)},n={name:"dzs-popup",props:{title:{type:String,default:function(){return"提示"}},isShow:{type:Boolean,default:function(){return!1}},width:{type:String,default:function(){return"50%"}},dialogProps:{type:Object,default:function(){return{}}}},data:function(){return{}},methods:{close:function(){console.log("欧文没"),this.$emit("update:isShow",!1),this.$emit("close")},open:function(){this.$emit("open")}}},s={},i=e(n,o,[],!1,a,null,null,null);function a(t){for(var e in s)this[e]=s[e]}var l={components:{dzsPopup:function(){return i.exports}()},props:{newIndex:{type:Boolean,default:function(){return!1}}},data:function(){return{defaultIsShow:!1,defaultValue:'\n<dzs-popup :isShow.sync="defaultIsShow">\n    <div>我是一个默认的弹窗</div>\n</dzs-popup>',defaultBottomIsShow:!1,defaultBottomValue:'\n<dzs-popup :isShow.sync="defaultBottomIsShow">\n    <div>我是一个有底部的弹窗</div>\n    <template slot="footer">\n        <el-button>提交</el-button>\n    </template>\n</dzs-popup>'}},methods:{opendefault:function(){this.defaultIsShow=!0},opendefaultBottom:function(){this.defaultBottomIsShow=!0}}},u={},r=e(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[t.newIndex?t._e():o("dzs-header",{attrs:{title:"弹窗组件"}}),o("div",{staticClass:"page"},[o("h2",[t._v("基础用法")]),o("div",{staticClass:"item"},[o("div",{staticClass:"tips-box"},[t._v("点按钮直接打开")]),o("el-button",{attrs:{type:"primary"},on:{click:t.opendefault}},[t._v("打开弹窗")]),o("dzs-code",{attrs:{title:"源代码",value:t.defaultValue}})],1),o("h2",[t._v("底部添加按钮")]),o("div",{staticClass:"item"},[o("div",{staticClass:"tips-box"},[t._v("点按钮直接打开")]),o("el-button",{attrs:{type:"primary"},on:{click:t.opendefaultBottom}},[t._v("打开有底部弹窗")]),o("dzs-code",{attrs:{title:"源代码",value:t.defaultBottomValue}})],1),o("h2",[t._v("更多功能")]),t._m(0),o("h2",[t._v("组件源代码下载")]),t._m(1)]),o("dzs-popup",{attrs:{isShow:t.defaultIsShow},on:{"update:isShow":function(e){t.defaultIsShow=e},"update:is-show":function(e){t.defaultIsShow=e}}},[o("div",[t._v("我是一个默认的弹窗")])]),o("dzs-popup",{attrs:{isShow:t.defaultBottomIsShow},on:{"update:isShow":function(e){t.defaultBottomIsShow=e},"update:is-show":function(e){t.defaultBottomIsShow=e}}},[o("div",[t._v("我是一个有底部的弹窗")]),o("template",{slot:"footer"},[o("el-button",[t._v("提交")])],1)],2),t.newIndex?t._e():o("el-backtop",{attrs:{"visibility-height":20}})],1)}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"item"},[o("div",{staticClass:"tips-box"},[t._v("自己在源代码去看")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"item"},[o("a",{attrs:{target:"_blank",href:"https://github.com/zsduan/zsduan-summary/blob/master/src/components/dzs-popup/index.vue"}},[t._v("弹窗组件下载地址")])])}],!1,c,"5a80f6be",null,null);function c(t){for(var e in u)this[e]=u[e]}t("default",function(){return r.exports}())}}}))}();