(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-51668d3d","chunk-2d0bd1cc"],{"07b9":function(n,t,e){"use strict";e("9216")},"2b39":function(n,t,e){"use strict";e.r(t),e.d(t,"code1",(function(){return i})),e.d(t,"code2",(function(){return o})),e.d(t,"code3",(function(){return a})),e.d(t,"code4",(function(){return r}));const i="\n@keyframes rotate {\n    to{\n        transform: rotate(1turn);\n    }\n}\n",o='\n.btn{\n    width: 150px;\n    height: 50px;\n    text-align: center;\n    line-height: 50px;\n    border-radius: 5px;\n    position: relative;\n    z-index: 3;\n    overflow: hidden;\n    background: #fff;\n    &::before{\n        content: " ";\n        position: absolute;\n        background: var(--ThemeColor);\n        width: 200%;\n        height: 200%;\n        z-index: -2;\n        left: 50%;\n        top: 50%;\n        transform-origin: 0 0 ;\n        animation: rotate 3s infinite linear;\n    }\n    &::after{\n        content:"";\n        width: calc(150px - 5px);\n        height: calc(50px - 5px);\n        position: absolute;\n        left: 2.5px;\n        top: 2.5px;\n        z-index: -1;\n        background: #fff;\n        border-radius: 5px;\n    }\n}\n',a='\n.circular{\n    width: 150px;\n    height: 150px;\n    text-align: center;\n    line-height: 150px;\n    border-radius: 50%;\n    position: relative;\n    z-index: 3;\n    overflow: hidden;\n    background: #fff;\n     &::before{\n        content: " ";\n        position: absolute;\n        background: var(--ThemeColor);\n        width: 200%;\n        height: 200%;\n        z-index: -2;\n        left: 50%;\n        top: 50%;\n        transform-origin: 0 0 ;\n        animation: rotate 2s infinite linear;\n    }\n    &::after{\n        content:"";\n        width: calc(150px - 5px);\n        height: calc(150px - 5px);\n        position: absolute;\n        left: 2.5px;\n        top: 2.5px;\n        z-index: -1;\n        background: #fff;\n        border-radius: 50%;\n    }\n}\n',r='\n// html\n<div class="taiji">\n    <div class="top"></div>\n    <div class="bottom"></div>\n</div>\n\n// less\n.taiji{\n    width: 200px;\n    height: 200px;\n    outline: 3px solid #000;\n    border-radius: 50%;\n    background: linear-gradient(to right,#fff 50%,#000 50%);\n    position: relative;\n    z-index: 2;\n    animation: rotate 2s infinite linear;\n    .top{\n        width: calc(200px / 2);\n        height: calc(200px / 2);\n        background: #fff;\n        border-radius: 50%;\n        position: absolute;\n        left: 25%;\n        top: 0;\n        z-index: -1;\n        &::after{\n            content: "";\n            display: block;\n            width: calc(200px / 6);\n            height: calc(200px / 6);\n            background: #000;\n            border-radius: 50%;\n            position: absolute;\n            top: 50%;\n            left: 50%;\n            transform: translate(-50% , -50%);\n        }\n    }\n    .bottom{\n        width: calc(200px / 2);\n        height: calc(200px / 2);\n        background: #000;\n        border-radius: 50%;\n        position: absolute;\n        left: 25%;\n        bottom: 0;\n        z-index: -1;\n        &::after{\n            content: "";\n            display: block;\n            width: calc(200px / 6);\n            height: calc(200px / 6);\n            background: #fff;\n            border-radius: 50%;\n            position: absolute;\n            top: 50%;\n            left: 50%;\n            transform: translate(-50% , -50%);\n        }\n    }\n    \n}\n'},9216:function(n,t,e){},9875:function(n,t,e){"use strict";e.r(t);var i=function(){var n=this,t=n._self._c;return t("div",[n.newIndex?n._e():t("dzs-header",{attrs:{title:"按钮旋转动画"}}),t("div",{staticClass:"page"},[t("h2",[n._v("基础动画样式样式")]),t("div",{staticClass:"item"},[t("dzs-code",{attrs:{title:"基础样式",value:n.code1}})],1),t("h2",[n._v("矩形效果")]),t("div",{staticClass:"item"},[t("div",{staticClass:"btn"},[n._v("我是边框旋转的按钮")]),t("dzs-code",{attrs:{title:"less",value:n.code2}})],1),t("h2",[n._v("加载中")]),t("div",{staticClass:"item"},[t("div",{staticClass:"circular"},[n._v("加载中")]),t("dzs-code",{attrs:{title:"less",value:n.code3}})],1),t("h2",[n._v("太极图")]),t("div",{staticClass:"item"},[n._m(0),t("dzs-code",{attrs:{title:"代码",value:n.code4}})],1),t("h2",[n._v("源代码下载/查看")]),n._m(1)]),n.newIndex?n._e():t("el-backtop",{attrs:{"visibility-height":20}})],1)},o=[function(){var n=this,t=n._self._c;return t("div",{staticClass:"taiji"},[t("div",{staticClass:"top"}),t("div",{staticClass:"bottom"})])},function(){var n=this,t=n._self._c;return t("div",{staticClass:"item"},[t("a",{attrs:{target:"_blank",href:"https://github.com/zsduan/zsduan-summary/blob/master/src/views/button-border.vue"}},[n._v("下载/查看地址")])])}],a=e("2b39"),r={props:{newIndex:{type:Boolean,default:()=>!1}},data(){return{code1:a["code1"],code2:a["code2"],code3:a["code3"],code4:a["code4"]}}},s=r,d=(e("07b9"),e("e607")),c=Object(d["a"])(s,i,o,!1,null,"394aca21",null);t["default"]=c.exports}}]);
//# sourceMappingURL=chunk-51668d3d.502355ee.js.map