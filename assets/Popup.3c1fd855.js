import{n as t}from"../static/js/index-3480c9ab.js";import"./_vue@2.6.11@vue.018c1e04.js";import"./_async-validator@1.8.5@async-validator.e65fb9e0.js";import"./_babel-runtime@6.26.0@babel-runtime.fd39bdc3.js";import"./_core-js@2.6.12@core-js.a6b1d284.js";import"./_vue-router@3.6.5@vue-router.8819c4a8.js";import"./_vuex@3.6.2@vuex.6ec484f5.js";import"./_element-ui@2.15.12@element-ui.07608cd3.js";import"./_deepmerge@1.5.2@deepmerge.fba82243.js";import"./_resize-observer-polyfill@1.5.1@resize-observer-polyfill.5c8b5044.js";import"./_throttle-debounce@1.1.0@throttle-debounce.2739eac7.js";import"./_lodash@4.17.21@lodash.90986bd2.js";import"./_babel-helper-vue-jsx-merge-props@2.0.3@babel-helper-vue-jsx-merge-props.79de6b76.js";import"./_normalize-wheel@1.0.1@normalize-wheel.6188a64d.js";import"./_mavon-editor@2.10.4@mavon-editor.3db41916.js";import"./_vue-prism-editor@1.3.0@vue-prism-editor.705c8dca.js";import"./_prismjs@1.29.0@prismjs.9fa8e4a1.js";var e=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("el-dialog",t._b({attrs:{title:t.title,visible:t.isShow,width:t.width},on:{close:t.close,open:t.open}},"el-dialog",Object.assign({},t.dialogProps),!1),[t._t("default"),o("div",{attrs:{slot:"footer"},slot:"footer"},[t._t("footer")],2)],2)};const o={name:"dzs-popup",props:{title:{type:String,default:()=>"提示"},isShow:{type:Boolean,default:()=>!1},width:{type:String,default:()=>"50%"},dialogProps:{type:Object,default:()=>({})}},data:()=>({}),methods:{close(){console.log("欧文没"),this.$emit("update:isShow",!1),this.$emit("close")},open(){this.$emit("open")}}},s={};var i=t(o,e,[],!1,a,null,null,null);function a(t){for(let e in s)this[e]=s[e]}const l={components:{dzsPopup:function(){return i.exports}()},props:{newIndex:{type:Boolean,default:()=>!1}},data:()=>({defaultIsShow:!1,defaultValue:'\n<dzs-popup :isShow.sync="defaultIsShow">\n    <div>我是一个默认的弹窗</div>\n</dzs-popup>',defaultBottomIsShow:!1,defaultBottomValue:'\n<dzs-popup :isShow.sync="defaultBottomIsShow">\n    <div>我是一个有底部的弹窗</div>\n    <template slot="footer">\n        <el-button>提交</el-button>\n    </template>\n</dzs-popup>'}),methods:{opendefault(){this.defaultIsShow=!0},opendefaultBottom(){this.defaultBottomIsShow=!0}}},r={};var n=t(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[t.newIndex?t._e():o("dzs-header",{attrs:{title:"弹窗组件"}}),o("div",{staticClass:"page"},[o("h2",[t._v("基础用法")]),o("div",{staticClass:"item"},[o("div",{staticClass:"tips-box"},[t._v("点按钮直接打开")]),o("el-button",{attrs:{type:"primary"},on:{click:t.opendefault}},[t._v("打开弹窗")]),o("dzs-code",{attrs:{title:"源代码",value:t.defaultValue}})],1),o("h2",[t._v("底部添加按钮")]),o("div",{staticClass:"item"},[o("div",{staticClass:"tips-box"},[t._v("点按钮直接打开")]),o("el-button",{attrs:{type:"primary"},on:{click:t.opendefaultBottom}},[t._v("打开有底部弹窗")]),o("dzs-code",{attrs:{title:"源代码",value:t.defaultBottomValue}})],1),o("h2",[t._v("更多功能")]),t._m(0),o("h2",[t._v("组件源代码下载")]),t._m(1)]),o("dzs-popup",{attrs:{isShow:t.defaultIsShow},on:{"update:isShow":function(e){t.defaultIsShow=e},"update:is-show":function(e){t.defaultIsShow=e}}},[o("div",[t._v("我是一个默认的弹窗")])]),o("dzs-popup",{attrs:{isShow:t.defaultBottomIsShow},on:{"update:isShow":function(e){t.defaultBottomIsShow=e},"update:is-show":function(e){t.defaultBottomIsShow=e}}},[o("div",[t._v("我是一个有底部的弹窗")]),o("template",{slot:"footer"},[o("el-button",[t._v("提交")])],1)],2),t.newIndex?t._e():o("el-backtop",{attrs:{"visibility-height":20}})],1)}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"item"},[o("div",{staticClass:"tips-box"},[t._v("自己在源代码去看")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"item"},[o("a",{attrs:{target:"_blank",href:"https://github.com/zsduan/zsduan-summary/blob/master/src/components/dzs-popup/index.vue"}},[t._v("弹窗组件下载地址")])])}],!1,d,"5a80f6be",null,null);function d(t){for(let e in r)this[e]=r[e]}var p=function(){return n.exports}();export{p as default};