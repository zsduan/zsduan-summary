(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-66f3f74b","chunk-2d230c76","chunk-2d0c8ff6"],{"1d76":function(e,t,a){},"20f4":function(e,t,a){},5593:function(e,t,a){"use strict";a("1d76")},"56ed":function(e,t,a){"use strict";a.r(t),a.d(t,"tableData",(function(){return n}));const n=[{key:"isShow",type:"props",parameterType:"Boolean",desc:"是否显示键盘",remark:""},{key:"bottom",type:"props",parameterType:"String",desc:"距离底部安全区的距离",remark:""},{key:"@complete",type:"methods",parameterType:"",desc:"点击完成事件",remark:""},{key:"@change",type:"methods",parameterType:"",desc:"键盘点击后的改变事件",remark:""},{key:"validatePlateNumber(plateNumber)",type:"ref methods",parameterType:"",desc:"校验车牌号的函数 传入车牌号",remark:"只是一个基础的函数不对真实校验负责"}]},"84ae":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e._self._c;return t("section",[t("public-item",{attrs:{title:"基础用法"}},[t("div",{staticClass:"keyboard"},[t("el-input",{staticClass:"ipt",attrs:{placeholder:"请输入车牌号"},on:{focus:function(t){e.showKeyboard=!0}},model:{value:e.plateNumber,callback:function(t){e.plateNumber=t},expression:"plateNumber"}}),t("dzs-license-plate-keyboard",{attrs:{isShow:e.showKeyboard},on:{"update:isShow":function(t){e.showKeyboard=t},"update:is-show":function(t){e.showKeyboard=t},change:e.changeKeyboard,del:e.del}})],1)]),t("public-item",{attrs:{title:"手机端",code:e.code1}},[t("div",{staticClass:"phone-public"},[t("div",{staticClass:"phone-box"},[t("el-input",{staticClass:"ipt",attrs:{placeholder:"请输入车牌号"},on:{focus:function(t){e.showKeyboard=!0}},model:{value:e.plateNumber,callback:function(t){e.plateNumber=t},expression:"plateNumber"}}),t("dzs-license-plate-keyboard",{attrs:{isShow:e.showKeyboard},on:{"update:isShow":function(t){e.showKeyboard=t},"update:is-show":function(t){e.showKeyboard=t},change:e.changeKeyboard,del:e.del}})],1)])]),t("public-item",{attrs:{title:"参数说明",list:e.tableData}}),t("public-item",{attrs:{title:"组件源代码查看",links:e.links}}),t("dzs-backtop",{attrs:{target:".el-main"}})],1)},s=[],o=a("56ed"),i=a("ee77"),r=function(){var e=this,t=e._self._c;return t("div",{staticClass:"keyboard-box"},[t("div",{staticClass:"keyboard",class:e.isShow?"keyboard-height":"keyboard-bottom",style:{bottom:e.bottom},attrs:{id:e.keyboardId}},[t("div",{staticClass:"com-btn"},[t("span",{on:{click:e.complete}},[e._v("完成")])]),e.showNums?e._e():t("div",{staticClass:"area-tag-wrap"},e._l(e.area,(function(a,n){return t("div",{key:n,staticClass:"flex first-line"},e._l(a,(function(a,n){return t("button",{key:n,class:{"bg-del":"del"==a,"bg-abc":"operation"==a,flex1:!0,"min-fiex1":e.keyboardWidth<375},on:{click:function(t){return e.selectOtherNum(a)}}},["del"!=a&&"operation"!=a?t("span",[e._v(e._s(a))]):e._e(),"operation"==a?t("span",{on:{click:function(t){return t.stopPropagation(),e.showOtherWord.apply(null,arguments)}}},[e._v("切换")]):e._e(),"del"==a?t("span",[e._v("删除")]):e._e()])})),0)})),0),e.showNums?t("div",{staticClass:"area-tag-wrap"},[0!=e.plateNum.length?t("div",{staticClass:"flex first-line"},e._l(e.num[0],(function(a,n){return t("button",{key:n,staticClass:"flex1",class:{flex1:!0,"min-fiex1":e.keyboardWidth<375},on:{click:function(t){return e.selectOtherNum(a)}}},[e._v(" "+e._s(a)+" ")])})),0):t("div",{staticClass:"flex first-line"},e._l(e.num[0],(function(a,n){return t("button",{key:n,staticClass:"flex1 flexWhite",class:{flex1:!0,"min-fiex1":e.keyboardWidth<375},on:{click:function(t){return e.selectOtherNum(a)}}},[e._v(e._s(a))])})),0),t("div",{staticClass:"flex first-line mt-3"},[e._l(e.num[1],(function(a,n){return t("button",{key:n,class:{flex1:!0,"min-fiex1":e.keyboardWidth<375},on:{click:function(t){return e.selectOtherNum(a)}}},[e._v(" "+e._s(a)+" ")])})),t("button",{class:{flex1:!0,"min-fiex1":e.keyboardWidth<375},on:{click:function(t){return e.selectOtherNum("O")}}},[e._v("O")])],2),t("div",{staticClass:"flex first-line mt-3"},e._l(e.num[2],(function(a,n){return t("button",{key:n,class:{flex1:!0,"min-fiex1":e.keyboardWidth<375},on:{click:function(t){return e.selectOtherNum(a)}}},[e._v(" "+e._s(a)+" ")])})),0),t("div",{staticClass:"flex first-line mt-3"},e._l(e.num[3],(function(a,n){return t("button",{key:n,class:{"bg-del":"del"==a,"bg-abc":"operation"==a,flex1:!0,"min-fiex1":e.keyboardWidth<375},on:{click:function(t){return e.selectOtherNum(a)}}},[t("span",[e._v(e._s("del"==a||"operation"==a?"":a))]),"operation"==a?t("span",{on:{click:function(t){return t.stopPropagation(),e.showOtherWord.apply(null,arguments)}}},[e._v("省份")]):e._e(),"del"==a?t("span",[e._v("删除")]):e._e()])})),0)]):e._e()])])},l=[],c={name:"dzsLicensePlateKeyboard",props:{isShow:{type:Boolean,default:()=>!1},bottom:{type:String,default:()=>"0px"}},data(){return{area:[["京","沪","粤","浙","苏","津","冀","川","渝","鄂","闽"],["陕","鲁","湘","辽","皖","赣","豫","桂","晋","云","黑"],["贵","吉","琼","甘","蒙","新","青","宁","藏"],["operation","使","港","澳","学","警","领","挂","del"]],num:[[1,2,3,4,5,6,7,8,9,0],["Q","W","E","R","T","Y","U","P"],["A","S","D","F","G","H","J","K","L"],["operation","Z","X","C","V","B","N","M","del"]],plateNum:"",showNums:!1,keyboardWidth:0,keyboardId:"keyboard"+(new Date).getTime()}},mounted(){this.keyboardWidth=document.querySelector("#"+this.keyboardId).offsetWidth},methods:{showOtherWord(){this.showNums=!this.showNums},complete(){this.$emit("update:isShow",!1),this.$emit("complete")},selectOtherNum(e){"del"!=e&&"operation"!=e?this.$emit("change",e):"del"==e&&this.$emit("del")},validatePlateNumber(e){const t=/^[\u4e00-\u9fa5]{1}(使|港|澳|学|警|领)?[A-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学领警澳港使]{1}$/,a=/^[\u4e00-\u9fa5]{1}(使|港|澳|学|警|领)?[A-Z]{1}[DF]{1}[A-HJ-NP-Z0-9]{5}[挂学领警澳港使]{1}$/;return!!a.test(e)||t.test(e)}}},d=c,u=(a("ec4a"),a("2877")),p=Object(u["a"])(d,r,l,!1,null,"057dd2aa",null),b=p.exports,m={components:{dzsLicensePlateKeyboard:b},data(){return{code1:{title:"代码示例",code:i["code1"],lang:"vue"},tableData:o["tableData"],plateNumber:"",showKeyboard:!0,links:{href:"https://github.com/zsduan/zsduan-summary/blob/master/src/components/dzs-license-plate-keyboard/index.vue",title:"组件源码"}}},methods:{changeKeyboard(e){this.plateNumber+=e},del(){this.plateNumber=this.plateNumber.substring(0,this.plateNumber.length-1)}}},h=m,f=(a("5593"),Object(u["a"])(h,n,s,!1,null,"54e5db47",null));t["default"]=f.exports},ec4a:function(e,t,a){"use strict";a("20f4")},ee77:function(e,t,a){"use strict";a.r(t),a.d(t,"code1",(function(){return n}));const n='\n<template>\n    <div>\n        <el-input placeholder="请输入车牌号" v-model="plateNumber" class="ipt" @focus="showKeyboard = true"></el-input>\n        <dzs-license-plate-keyboard :isShow.sync="showKeyboard" @change="changeKeyboard" @del="del">\n        </dzs-license-plate-keyboard>\n    </div>\n</template>\n<script>\nimport dzsLicensePlateKeyboard from "@/components/dzs-license-plate-keyboard/index.vue";\nexport default{\n    components:{\n        dzsLicensePlateKeyboard\n    },\n    data(){\n        return{\n            plateNumber:"",\n            showKeyboard:false\n        }\n    },\n    methods: {\n        changeKeyboard(e) {\n            this.plateNumber += e;\n        },\n        del() {\n            this.plateNumber = this.plateNumber.substring(0, this.plateNumber.length - 1)\n        }\n    }\n}\n<\/script>\n'}}]);
//# sourceMappingURL=chunk-66f3f74b.cc9dcc4f.js.map