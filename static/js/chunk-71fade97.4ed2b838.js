(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-71fade97"],{"16c3":function(t,e,o){"use strict";o("9065")},2043:function(t,e,o){"use strict";o.r(e);var s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[t.newIndex?t._e():o("dzs-header",{attrs:{title:"弹窗组件"}}),o("div",{staticClass:"page"},[o("h2",[t._v("基础用法")]),o("div",{staticClass:"item"},[o("div",{staticClass:"tips-box"},[t._v("点按钮直接打开")]),o("el-button",{attrs:{type:"primary"},on:{click:t.opendefault}},[t._v("打开弹窗")]),o("dzs-code",{attrs:{title:"源代码",value:t.defaultValue}})],1),o("h2",[t._v("底部添加按钮")]),o("div",{staticClass:"item"},[o("div",{staticClass:"tips-box"},[t._v("点按钮直接打开")]),o("el-button",{attrs:{type:"primary"},on:{click:t.opendefaultBottom}},[t._v("打开有底部弹窗")]),o("dzs-code",{attrs:{title:"源代码",value:t.defaultBottomValue}})],1),o("h2",[t._v("更多功能")]),t._m(0),o("h2",[t._v("组件源代码下载")]),t._m(1)]),o("dzs-popup",{attrs:{isShow:t.defaultIsShow},on:{"update:isShow":function(e){t.defaultIsShow=e},"update:is-show":function(e){t.defaultIsShow=e}}},[o("div",[t._v("我是一个默认的弹窗")])]),o("dzs-popup",{attrs:{isShow:t.defaultBottomIsShow},on:{"update:isShow":function(e){t.defaultBottomIsShow=e},"update:is-show":function(e){t.defaultBottomIsShow=e}}},[o("div",[t._v("我是一个有底部的弹窗")]),o("template",{slot:"footer"},[o("el-button",[t._v("提交")])],1)],2),t.newIndex?t._e():o("el-backtop",{attrs:{"visibility-height":20}})],1)},a=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"item"},[o("div",{staticClass:"tips-box"},[t._v("自己在源代码去看")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"item"},[o("a",{attrs:{target:"_blank",href:"https://github.com/zsduan/zsduan-summary/blob/master/src/components/dzs-popup/index.vue"}},[t._v("弹窗组件下载地址")])])}],i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("el-dialog",t._b({attrs:{title:t.title,visible:t.isShow,width:t.width},on:{close:t.close,open:t.open}},"el-dialog",Object.assign({},t.dialogProps),!1),[t._t("default"),o("div",{attrs:{slot:"footer"},slot:"footer"},[t._t("footer")],2)],2)},l=[],n={name:"dzs-popup",props:{title:{type:String,default:()=>"提示"},isShow:{type:Boolean,default:()=>!1},width:{type:String,default:()=>"50%"},dialogProps:{type:Object,default:()=>({})}},data(){return{}},methods:{close(){console.log("欧文没"),this.$emit("update:isShow",!1),this.$emit("close")},open(){this.$emit("open")}}},d=n,u=o("e607"),p=Object(u["a"])(d,i,l,!1,null,"074a6030",null),r=p.exports,c={components:{dzsPopup:r},props:{newIndex:{type:Boolean,default:()=>!1}},data(){return{defaultIsShow:!1,defaultValue:'\n<dzs-popup :isShow.sync="defaultIsShow">\n    <div>我是一个默认的弹窗</div>\n</dzs-popup>',defaultBottomIsShow:!1,defaultBottomValue:'\n<dzs-popup :isShow.sync="defaultBottomIsShow">\n    <div>我是一个有底部的弹窗</div>\n    <template slot="footer">\n        <el-button>提交</el-button>\n    </template>\n</dzs-popup>'}},methods:{opendefault(){this.defaultIsShow=!0},opendefaultBottom(){this.defaultBottomIsShow=!0}}},f=c,h=(o("16c3"),Object(u["a"])(f,s,a,!1,null,"6f72acd6",null));e["default"]=h.exports},9065:function(t,e,o){}}]);
//# sourceMappingURL=chunk-71fade97.4ed2b838.js.map