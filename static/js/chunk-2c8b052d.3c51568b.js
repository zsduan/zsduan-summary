(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2c8b052d","chunk-2d21dfea"],{"8a43":function(s,t,i){"use strict";i("8b8d")},"8b8d":function(s,t,i){},9853:function(s,t,i){"use strict";i.r(t);var e=function(){var s=this,t=s._self._c;return t("div",[s.newIndex?s._e():t("dzs-header",{attrs:{title:"滑动验证"}}),t("div",{staticClass:"page"},[t("h2",[s._v("基础用法")]),t("div",{staticClass:"item"},[t("el-button",{staticClass:"btn",attrs:{type:"primary"},on:{click:function(t){s.isShow=!0}}},[s._v("点我打开验证")]),t("dzs-slide-verification",{attrs:{isShow:s.isShow},on:{"update:isShow":function(t){s.isShow=t},"update:is-show":function(t){s.isShow=t},success:function(t){s.isShow=!1}}}),t("dzs-code",{attrs:{title:"使用方法",value:s.code1}})],1),t("h2",[s._v("组件源代码下载")]),s._m(0)]),s.newIndex?s._e():t("el-backtop",{attrs:{"visibility-height":20}})],1)},o=[function(){var s=this,t=s._self._c;return t("div",{staticClass:"item"},[t("a",{attrs:{target:"_blank",href:"https://github.com/zsduan/zsduan-summary/blob/master/src/components/dzs-slide-verification/index.vue"}},[s._v("滑动验证组件下载地址")])])}],n=function(){var s=this,t=s._self._c;return s.isShow?t("div",{staticClass:"slide-verification-box"},[t("div",{staticClass:"slide-verification"},[t("div",{staticClass:"top-box"},[t("div",{staticClass:"back-img"},[t("img",{staticClass:"img",attrs:{src:s.imgUrl}})]),t("div",{staticClass:"cropping-img",style:{top:s.coordinate.y+"px",left:s.moveCoordinate.x+"px"}},[t("img",{staticClass:"img",style:{top:-s.coordinate.y+"px",left:-s.coordinate.x+"px"},attrs:{src:s.imgUrl}})]),t("div",{staticClass:"mask-box",style:{top:s.coordinate.y+"px",left:s.coordinate.x+"px"}}),"success"==s.isSuccess?t("div",{staticClass:"success-box"},[s._v(s._s(s.btnTips))]):s._e()]),s.is_phone?t("div",{staticClass:"bottom-box",on:{touchmove:function(t){return t.stopPropagation(),s.btnMousemove.apply(null,arguments)},touchend:function(t){return t.stopPropagation(),s.btnMouseleave.apply(null,arguments)}}},[t("div",{staticClass:"move-box",style:{width:s.moveCoordinate.x-3+"px"}}),t("div",{staticClass:"btn",style:{left:s.moveCoordinate.x+"px"},on:{touchstart:function(t){return t.stopPropagation(),s.btnMousedown.apply(null,arguments)}}}),"success"!=s.isSuccess?t("span",{staticClass:"tips",class:"error"==s.isSuccess?"error-tips":""},[s._v(s._s(s.btnTips))]):s._e()]):t("div",{staticClass:"bottom-box",on:{mousemove:function(t){return t.stopPropagation(),s.btnMousemove.apply(null,arguments)},mouseleave:function(t){return t.stopPropagation(),s.btnMouseleave.apply(null,arguments)},mouseup:function(t){return t.stopPropagation(),s.btnMouseup.apply(null,arguments)}}},[t("div",{staticClass:"move-box",style:{width:s.moveCoordinate.x-3+"px"}}),t("div",{staticClass:"btn",style:{left:s.moveCoordinate.x+"px"},on:{mousedown:function(t){return t.stopPropagation(),s.btnMousedown.apply(null,arguments)}}}),"success"!=s.isSuccess?t("span",{staticClass:"tips",class:"error"==s.isSuccess?"error-tips":""},[s._v(s._s(s.btnTips))]):s._e()])])]):s._e()},a=[],r={name:"dzs-slide-verification",props:{ErrorRange:{type:Number,default:()=>10},isShow:{type:Boolean,default:()=>!1}},data(){return{imgList:[{url:"./image/1.jpg"},{url:"./image/2.jpg"},{url:"./image/3.jpg"},{url:"./image/4.jpg"},{url:"./image/5.jpg"}],imgUrl:"",coordinate:{x:0,y:0},moveCoordinate:{x:3,y:0},isMousemove:!1,btnTips:"拖动左边滑块完成上方拼图",isSuccess:"none",is_phone:!1}},created(){this.isPc(),this.init()},watch:{isShow:{handler(){this.isPc(),this.init()},deep:!0,immediate:!0}},methods:{init(){let s=Math.floor(Math.random()*this.imgList.length)+0;s=s<0?s+s*s:s,this.imgUrl=this.imgList[s].url;let t=Math.floor(101*Math.random())+160,i=Math.floor(131*Math.random())+0;i=i<0?i+i*i:i,this.coordinate.x=t,this.coordinate.y=i,this.moveCoordinate.x=3,this.isSuccess="none"},btnMouseleave(){if(this.isMousemove=!1,this.moveCoordinate.x-this.coordinate.x>-10&&this.moveCoordinate.x-this.coordinate.x<10)return this.btnTips="验证成功!",this.isSuccess="success",void setTimeout(()=>{this.$emit("success")},1e3);this.isSuccess="error",this.$emit("fail"),this.btnTips="验证失败，请重新滑动验证";let s=setInterval(()=>{this.moveCoordinate.x-=5,this.moveCoordinate.x<=3&&(clearInterval(s),this.moveCoordinate.x=3)},10)},btnMouseup(){this.isMousemove=!1},btnMousedown(){this.isMousemove=!0},btnMousemove(s){if(this.isMousemove&&"success"!=this.isSuccess)if(this.is_phone){let t=s.changedTouches[0].clientX;if(t>=315||t<=3)return;t&&this.moveCoordinate.x-t<50&&(this.moveCoordinate.x=t-40>0?t-40:t)}else s.offsetX>=275||s.offsetX<=3||s.offsetX&&this.moveCoordinate.x-s.offsetX<50&&(this.moveCoordinate.x=s.offsetX)},isPc(){let s=navigator.userAgent,t=["Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"];this.is_phone=!1;for(let i=0;i<t.length;i++)if(s.indexOf(t[i])>0){this.is_phone=!0;break}},close(){this.$emit("update:isShow",!1),this.$emit("close",!1)}}},c=r,l=(i("8a43"),i("2877")),u=Object(l["a"])(c,n,a,!1,null,"4c0510b3",null),d=u.exports,p=i("d459"),h={props:{newIndex:{type:Boolean,default:()=>!1}},components:{dzsSlideVerification:d},data(){return{isShow:!1,code1:p["code1"]}}},m=h,v=Object(l["a"])(m,e,o,!1,null,"0be59202",null);t["default"]=v.exports},d459:function(s,t,i){"use strict";i.r(t),i.d(t,"code1",(function(){return e}));const e='\n/*\n * @name 滑动验证\n * @prop ErrorRange 误差范围 number 默认10\n * @prop isShow 是否显示\n * @method success 成功返回\n * @method fail 失败返回\n */\n// html\n<dzs-slide-verification :isShow.sync="isShow" @success="isShow = false"></dzs-slide-verification>\n// js\nimport dzsSlideVerification from "@/components/dzs-slide-verification/index.vue"\n\n'}}]);
//# sourceMappingURL=chunk-2c8b052d.3c51568b.js.map