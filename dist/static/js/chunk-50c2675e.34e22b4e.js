(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-50c2675e"],{2043:function(t,o,e){"use strict";e.r(o);var s=function(){var t=this,o=t._self._c;return o("div",[o("dzs-header",{attrs:{title:"弹窗组件"}}),o("div",{staticClass:"page"},[o("h2",[t._v("基础用法")]),o("div",{staticClass:"item"},[o("div",{staticClass:"tips-box"},[t._v("点按钮直接打开")]),o("el-button",{attrs:{type:"primary"},on:{click:t.opendefault}},[t._v("打开弹窗")]),o("dzs-code",{attrs:{title:"源代码",value:t.defaultValue}})],1),o("h2",[t._v("底部添加按钮")]),o("div",{staticClass:"item"},[o("div",{staticClass:"tips-box"},[t._v("点按钮直接打开")]),o("el-button",{attrs:{type:"primary"},on:{click:t.opendefaultBottom}},[t._v("打开有底部弹窗")]),o("dzs-code",{attrs:{title:"源代码",value:t.defaultBottomValue}})],1),o("h2",[t._v("更多功能")]),t._m(0),o("h2",[t._v("组件源代码下载")]),t._m(1)]),o("dzs-popup",{attrs:{isShow:t.defaultIsShow},on:{"update:isShow":function(o){t.defaultIsShow=o},"update:is-show":function(o){t.defaultIsShow=o}}},[o("div",[t._v("我是一个默认的弹窗")])]),o("dzs-popup",{attrs:{isShow:t.defaultBottomIsShow},on:{"update:isShow":function(o){t.defaultBottomIsShow=o},"update:is-show":function(o){t.defaultBottomIsShow=o}}},[o("div",[t._v("我是一个有底部的弹窗")]),o("template",{slot:"footer"},[o("el-button",[t._v("提交")])],1)],2)],1)},a=[function(){var t=this,o=t._self._c;return o("div",{staticClass:"item"},[o("div",{staticClass:"tips-box"},[t._v("自己在源代码去看")])])},function(){var t=this,o=t._self._c;return o("div",{staticClass:"item"},[o("a",{attrs:{target:"_blank",href:"https://github.com/zsduan/zsduan-summary/blob/master/src/components/dzs-popup/index.vue"}},[t._v("弹窗组件下载地址")])])}],i=function(){var t=this,o=t._self._c;return o("el-dialog",t._b({attrs:{title:t.title,visible:t.isShow,width:t.width},on:{close:t.close,open:t.open}},"el-dialog",{...t.dialogProps},!1),[t._t("default"),o("div",{attrs:{slot:"footer"},slot:"footer"},[t._t("footer")],2)],2)},l=[],u={name:"dzs-popup",props:{title:{type:String,default:()=>"提示"},isShow:{type:Boolean,default:()=>!1},width:{type:String,default:()=>"50%"},dialogProps:{type:Object,default:()=>({})}},data(){return{}},methods:{close(){console.log("欧文没"),this.$emit("update:isShow",!1),this.$emit("close")},open(){this.$emit("open")}}},n=u,d=e("2877"),p=Object(d["a"])(n,i,l,!1,null,"074a6030",null),r=p.exports,c={components:{dzsPopup:r},data(){return{defaultIsShow:!1,defaultValue:'\n<dzs-popup :isShow.sync="defaultIsShow">\n    <div>我是一个默认的弹窗</div>\n</dzs-popup>',defaultBottomIsShow:!1,defaultBottomValue:'\n<dzs-popup :isShow.sync="defaultBottomIsShow">\n    <div>我是一个有底部的弹窗</div>\n    <template slot="footer">\n        <el-button>提交</el-button>\n    </template>\n</dzs-popup>'}},methods:{opendefault(){this.defaultIsShow=!0},opendefaultBottom(){this.defaultBottomIsShow=!0}}},f=c,h=(e("f73a"),Object(d["a"])(f,s,a,!1,null,"c5b19ab2",null));o["default"]=h.exports},8590:function(t,o,e){},f73a:function(t,o,e){"use strict";e("8590")}}]);
//# sourceMappingURL=chunk-50c2675e.34e22b4e.js.map