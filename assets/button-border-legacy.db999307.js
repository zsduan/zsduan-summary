!function(){var t=document.createElement("style");t.innerHTML='.btn[data-v-40e3ca53]{width:150px;height:50px;text-align:center;line-height:50px;border-radius:5px;position:relative;z-index:3;overflow:hidden;background:#fff}.btn[data-v-40e3ca53]:before{content:" ";position:absolute;background:var(--ThemeColor);width:200%;height:200%;z-index:-2;left:50%;top:50%;transform-origin:0 0;animation:rotate-data-v-40e3ca53 3s infinite linear}.btn[data-v-40e3ca53]:after{content:"";width:145px;height:45px;position:absolute;left:2.5px;top:2.5px;z-index:-1;background:#fff;border-radius:5px}.circular[data-v-40e3ca53]{width:150px;height:150px;text-align:center;line-height:150px;border-radius:50%;position:relative;z-index:3;overflow:hidden;background:#fff}.circular[data-v-40e3ca53]:before{content:" ";position:absolute;background:var(--ThemeColor);width:200%;height:200%;z-index:-2;left:50%;top:50%;transform-origin:0 0;animation:rotate-data-v-40e3ca53 2s infinite linear}.circular[data-v-40e3ca53]:after{content:"";width:145px;height:145px;position:absolute;left:2.5px;top:2.5px;z-index:-1;background:#fff;border-radius:50%}@keyframes rotate-data-v-40e3ca53{to{transform:rotate(1turn)}}.taiji[data-v-40e3ca53]{width:200px;height:200px;outline:3px solid #000;border-radius:50%;background:linear-gradient(to right,#fff 50%,#000 50%);position:relative;z-index:2;animation:rotate-data-v-40e3ca53 2s infinite linear}.taiji .top[data-v-40e3ca53]{width:100px;height:100px;background:#fff;border-radius:50%;position:absolute;left:25%;top:0;z-index:-1}.taiji .top[data-v-40e3ca53]:after{content:"";display:block;width:calc(200px / 6);height:calc(200px / 6);background:#000;border-radius:50%;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.taiji .bottom[data-v-40e3ca53]{width:100px;height:100px;background:#000;border-radius:50%;position:absolute;left:25%;bottom:0;z-index:-1}.taiji .bottom[data-v-40e3ca53]:after{content:"";display:block;width:calc(200px / 6);height:calc(200px / 6);background:#fff;border-radius:50%;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}\n',document.head.appendChild(t),System.register(["./index-legacy.47d59fb5.js"],(function(t){"use strict";var n;return{setters:[function(t){n=t.n}],execute:function(){var e={},i=n({data:function(){return{code1:"\n@keyframes rotate {\n    to{\n        transform: rotate(1turn);\n    }\n}\n",code2:'\n.btn{\n    width: 150px;\n    height: 50px;\n    text-align: center;\n    line-height: 50px;\n    border-radius: 5px;\n    position: relative;\n    z-index: 3;\n    overflow: hidden;\n    background: #fff;\n    &::before{\n        content: " ";\n        position: absolute;\n        background: var(--ThemeColor);\n        width: 200%;\n        height: 200%;\n        z-index: -2;\n        left: 50%;\n        top: 50%;\n        transform-origin: 0 0 ;\n        animation: rotate 3s infinite linear;\n    }\n    &::after{\n        content:"";\n        width: calc(150px - 5px);\n        height: calc(50px - 5px);\n        position: absolute;\n        left: 2.5px;\n        top: 2.5px;\n        z-index: -1;\n        background: #fff;\n        border-radius: 5px;\n    }\n}\n',code3:'\n.circular{\n    width: 150px;\n    height: 150px;\n    text-align: center;\n    line-height: 150px;\n    border-radius: 50%;\n    position: relative;\n    z-index: 3;\n    overflow: hidden;\n    background: #fff;\n     &::before{\n        content: " ";\n        position: absolute;\n        background: var(--ThemeColor);\n        width: 200%;\n        height: 200%;\n        z-index: -2;\n        left: 50%;\n        top: 50%;\n        transform-origin: 0 0 ;\n        animation: rotate 2s infinite linear;\n    }\n    &::after{\n        content:"";\n        width: calc(150px - 5px);\n        height: calc(150px - 5px);\n        position: absolute;\n        left: 2.5px;\n        top: 2.5px;\n        z-index: -1;\n        background: #fff;\n        border-radius: 50%;\n    }\n}\n',code4:'\n// html\n<div class="taiji">\n    <div class="top"></div>\n    <div class="bottom"></div>\n</div>\n\n// less\n.taiji{\n    width: 200px;\n    height: 200px;\n    outline: 3px solid #000;\n    border-radius: 50%;\n    background: linear-gradient(to right,#fff 50%,#000 50%);\n    position: relative;\n    z-index: 2;\n    animation: rotate 2s infinite linear;\n    .top{\n        width: calc(200px / 2);\n        height: calc(200px / 2);\n        background: #fff;\n        border-radius: 50%;\n        position: absolute;\n        left: 25%;\n        top: 0;\n        z-index: -1;\n        &::after{\n            content: "";\n            display: block;\n            width: calc(200px / 6);\n            height: calc(200px / 6);\n            background: #000;\n            border-radius: 50%;\n            position: absolute;\n            top: 50%;\n            left: 50%;\n            transform: translate(-50% , -50%);\n        }\n    }\n    .bottom{\n        width: calc(200px / 2);\n        height: calc(200px / 2);\n        background: #000;\n        border-radius: 50%;\n        position: absolute;\n        left: 25%;\n        bottom: 0;\n        z-index: -1;\n        &::after{\n            content: "";\n            display: block;\n            width: calc(200px / 6);\n            height: calc(200px / 6);\n            background: #fff;\n            border-radius: 50%;\n            position: absolute;\n            top: 50%;\n            left: 50%;\n            transform: translate(-50% , -50%);\n        }\n    }\n    \n}\n'}}},(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("dzs-header",{attrs:{title:"按钮旋转动画"}}),e("div",{staticClass:"page"},[e("h2",[t._v("基础动画样式样式")]),e("div",{staticClass:"item"},[e("dzs-code",{attrs:{title:"基础样式",value:t.code1}})],1),e("h2",[t._v("矩形效果")]),e("div",{staticClass:"item"},[e("div",{staticClass:"btn"},[t._v("我是边框旋转的按钮")]),e("dzs-code",{attrs:{title:"less",value:t.code2}})],1),e("h2",[t._v("加载中")]),e("div",{staticClass:"item"},[e("div",{staticClass:"circular"},[t._v("加载中")]),e("dzs-code",{attrs:{title:"less",value:t.code3}})],1),e("h2",[t._v("太极图")]),e("div",{staticClass:"item"},[t._m(0),e("dzs-code",{attrs:{title:"代码",value:t.code4}})],1),e("h2",[t._v("源代码下载/查看")]),t._m(1)]),e("el-backtop",{attrs:{"visibility-height":20}})],1)}),[function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"taiji"},[n("div",{staticClass:"top"}),n("div",{staticClass:"bottom"})])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"item"},[e("a",{attrs:{target:"_blank",href:"https://github.com/zsduan/zsduan-summary/blob/master/src/views/button-border.vue"}},[t._v("下载/查看地址")])])}],!1,a,"40e3ca53",null,null);function a(t){for(var n in e)this[n]=e[n]}t("default",function(){return i.exports}())}}}))}();