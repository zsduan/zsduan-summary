(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4f37ef20","chunk-2d0c9186"],{"08e2":function(t,s,i){"use strict";i("78b0")},"13b0":function(t,s,i){"use strict";i.r(s);var a=function(){var t=this,s=t._self._c;return s("div",[t.newIndex?t._e():s("dzs-header",{attrs:{title:"微信/支付宝/其他浏览器"}}),s("div",{staticClass:"page"},[s("h2",[t._v("基础用法")]),s("div",{staticClass:"item"},[s("div",{staticClass:"tips-box"},[t._v("点按钮直接打开")]),s("el-button",{attrs:{type:"primary"},on:{click:t.is_wx_Alipays}},[t._v("点我获取")]),s("div",{staticClass:"guid"},[t._v(t._s(t.is_wx_Alipay))]),s("dzs-code",{attrs:{title:"使用方法",value:t.code1}})],1),s("h2",[t._v("源代码下载/查看")]),t._m(0)]),t.newIndex?t._e():s("el-backtop",{attrs:{"visibility-height":20}})],1)},e=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"item"},[s("a",{attrs:{target:"_blank",href:"https://github.com/zsduan/zsduan-summary/blob/master/src/utils/guid.js"}},[t._v("下载/查看地址")])])}];class n{is_wx_Alipay(){var t=navigator.userAgent.toLowerCase();return"micromessenger"==t.match(/MicroMessenger/i)?"wx":"alipay"==t.match(/Alipay/i)?"Alipay":"other"}}const r=(new n).is_wx_Alipay();var c=i("584a"),l={props:{newIndex:{type:Boolean,default:()=>!1}},data(){return{is_wx_Alipay:r,code1:c["code1"]}},methods:{is_wx_Alipays(){this.is_wx_Alipays=r}}},o=l,u=(i("08e2"),i("2877")),_=Object(u["a"])(o,a,e,!1,null,"151b6a48",null);s["default"]=_.exports},"584a":function(t,s,i){"use strict";i.r(s),i.d(s,"code1",(function(){return a}));const a='\n// 使用\nimport {is_wx_Alipays} from "@/utils/is_wx_Alipay";\n\n// 返回  other Alipay wx\n'},"78b0":function(t,s,i){}}]);
//# sourceMappingURL=chunk-4f37ef20.897f467d.js.map