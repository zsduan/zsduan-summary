(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ed53edae","chunk-2d0e562f","chunk-2d0baab8"],{"37ca":function(e,t,n){"use strict";n.r(t),n.d(t,"tableData",(function(){return a}));const a=[{key:"value / v-model",type:"props",parameterType:"String",desc:"生成的验证码",remark:""},{key:"codeArr",type:"props",parameterType:"Array",desc:"传入一个数组来自定义验证码",remark:"默认26个字母和0-9数字"},{key:"uppercase",type:"props",parameterType:"Boolean",desc:"是否转大写",remark:""}]},"457e":function(e,t,n){"use strict";n("6f48")},"6f48":function(e,t,n){},"6f75":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e._self._c;return t("section",[t("public-item",{attrs:{title:"基础用法",code:e.code1}},[t("div",{staticClass:"ipt-box"},[t("el-input",{staticClass:"ipt",attrs:{placeholder:"请输入验证码"},model:{value:e.myCode,callback:function(t){e.myCode=t},expression:"myCode"}}),t("div",{staticClass:"code-box"},[t("dzs-identifying-code-canvans",{model:{value:e.code,callback:function(t){e.code=t},expression:"code"}})],1)],1),t("div",{staticClass:"tips"},[e._v("tips："+e._s(e.myCode==e.code?"验证成功":"未输入/验证失败"))])]),t("public-item",{attrs:{title:"自定义验证码",code:e.code2}},[t("div",{staticClass:"ipt-box"},[t("el-input",{staticClass:"ipt",attrs:{placeholder:"请输入验证码"},model:{value:e.myCode2,callback:function(t){e.myCode2=t},expression:"myCode2"}}),t("div",{staticClass:"code-box"},[t("dzs-identifying-code-canvans",{attrs:{codeArr:["技","术","部","好","样"]},model:{value:e.editCode2,callback:function(t){e.editCode2=t},expression:"editCode2"}})],1)],1),t("div",{staticClass:"tips"},[e._v("tips："+e._s(e.myCode2==e.editCode2?"验证成功":"未输入/验证失败"))])]),t("public-item",{attrs:{title:"参数说明",list:e.tableData}}),t("public-item",{attrs:{title:"组件源代码查看",links:e.links}}),t("dzs-backtop",{attrs:{target:".el-main"}})],1)},o=[],d=function(){var e=this,t=e._self._c;return t("div",{staticClass:"dzs-code-canvans-box",on:{click:e.generateCode}},[t("canvas",{ref:"dzs_code_canvans",staticClass:"dzs-code-canvans",attrs:{id:"dzs-code-canvans"}},[e._v("您的浏览器不支持canvas")])])},s=[],i={name:"dzsIdentifyingCodeCanvans",model:{prop:"value",event:"update:value"},props:{codeArr:{type:Array,default:()=>[]},value:{type:String,default:()=>""},uppercase:{type:Boolean,default:()=>!1}},data(){return{code_show:""}},mounted(){setTimeout(()=>{this.generateCode()},100)},methods:{generateCode(){this.codeArr.length&&this.codeArr.length<4&&console.warn("codeArr.length Less than 4");let e=[],t=this.$refs.dzs_code_canvans.width,n=this.$refs.dzs_code_canvans.height,a=this.$refs.dzs_code_canvans,o=a.getContext("2d");a.width=t,a.height=n;let d="a,b,c,d,e,f,g,h,i,j,k,m,n,p,q,r,s,t,u,v,w,x,y,z,A,B,C,E,F,G,H,J,K,L,M,N,P,Q,R,S,T,W,X,Y,Z,1,2,3,4,5,6,7,8,9,0",s=d.split(",");this.codeArr.length&&this.codeArr.length>4&&(s=this.codeArr);let i=s.length;for(let c=0;c<4;c++){let t=Math.floor(Math.random()*i),n=Math.random()-.5,a=s[t];e[c]=a;let d=10+70*c,r=100+20*Math.random();o.font="bold 63px 微软雅黑",o.translate(d,r),o.rotate(n),o.fillStyle=this.randomColor(),o.fillText(a,0,0),o.rotate(-n),o.translate(-d,-r)}this.code_show=e.join(""),this.uppercase&&(this.code_show=this.code_show.toLocaleUpperCase()),this.$emit("update:value",this.code_show);for(let c=0;c<=5;c++)o.strokeStyle=this.randomColor(),o.beginPath(),o.moveTo(Math.random()*t,Math.random()*n),o.lineTo(Math.random()*t,Math.random()*n),o.stroke();for(let c=0;c<=30;c++){o.strokeStyle=this.randomColor(),o.beginPath();let e=Math.random()*t,a=Math.random()*n;o.moveTo(e,a),o.lineTo(e+1,a+1),o.stroke()}},randomColor(){let e=Math.floor(256*Math.random()),t=Math.floor(256*Math.random()),n=Math.floor(256*Math.random());return"rgb("+e+","+t+","+n+")"}}},c=i,r=(n("457e"),n("1805")),l=Object(r["a"])(c,d,s,!1,null,"29888cdd",null),p=l.exports;p.install=(e,t)=>{e.component(p.name,p)};var u=p,m=n("37ca"),h=n("93ed"),f={components:{dzsIdentifyingCodeCanvans:u},data(){return{myCode:"",code:"",myCode2:"",editCode2:"",links:{href:"https://github.com/zsduan/zsduan-summary/blob/master/src/components/dzs-identifying-code-canvans/index.vue",title:"组件源码"},tableData:m["tableData"],code1:{title:"代码示例",code:h["code1"],lang:"vue"},code2:{title:"代码示例",code:h["code2"],lang:"vue"}}}},v=f,C=(n("c310"),Object(r["a"])(v,a,o,!1,null,"af6ab5aa",null));t["default"]=C.exports},"762c":function(e,t,n){},"93ed":function(e,t,n){"use strict";n.r(t),n.d(t,"code1",(function(){return a})),n.d(t,"code2",(function(){return o}));const a='\n<template>\n    <dzs-identifying-code-canvans v-model="code"></dzs-identifying-code-canvans>\n</template>\n<script>\nimport dzsIdentifyingCodeCanvans from "@/components/dzs-identifying-code-canvans"\nexdefault {\n    components : {\n        dzsIdentifyingCodeCanvans\n    },\n    data(){\n        return {\n            code : ""\n        }\n    },\n}\n<\/script>\n',o="\n<template>\n    <dzs-identifying-code-canvans v-model=\"code\" :codeArr=\"['技','术','部','好','样']\"></dzs-identifying-code-canvans>\n</template>\n<script>\nimport dzsIdentifyingCodeCanvans from \"@/components/dzs-identifying-code-canvans\"\nexdefault {\n    components : {\n        dzsIdentifyingCodeCanvans\n    },\n    data(){\n        return {\n            code : \"\"\n        }\n    },\n}\n<\/script>\n"},c310:function(e,t,n){"use strict";n("762c")}}]);
//# sourceMappingURL=chunk-ed53edae.7cf76d28.js.map