(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0bd1cc"],{"2b39":function(n,t,i){"use strict";i.r(t),i.d(t,"code1",(function(){return o})),i.d(t,"code2",(function(){return e})),i.d(t,"code3",(function(){return r})),i.d(t,"code4",(function(){return a}));const o="\n@keyframes rotate {\n    to{\n        transform: rotate(1turn);\n    }\n}\n",e='\n.btn{\n    width: 150px;\n    height: 50px;\n    text-align: center;\n    line-height: 50px;\n    border-radius: 5px;\n    position: relative;\n    z-index: 3;\n    overflow: hidden;\n    background: #fff;\n    &::before{\n        content: " ";\n        position: absolute;\n        background: var(--ThemeColor);\n        width: 200%;\n        height: 200%;\n        z-index: -2;\n        left: 50%;\n        top: 50%;\n        transform-origin: 0 0 ;\n        animation: rotate 3s infinite linear;\n    }\n    &::after{\n        content:"";\n        width: calc(150px - 5px);\n        height: calc(50px - 5px);\n        position: absolute;\n        left: 2.5px;\n        top: 2.5px;\n        z-index: -1;\n        background: #fff;\n        border-radius: 5px;\n    }\n}\n',r='\n.circular{\n    width: 150px;\n    height: 150px;\n    text-align: center;\n    line-height: 150px;\n    border-radius: 50%;\n    position: relative;\n    z-index: 3;\n    overflow: hidden;\n    background: #fff;\n     &::before{\n        content: " ";\n        position: absolute;\n        background: var(--ThemeColor);\n        width: 200%;\n        height: 200%;\n        z-index: -2;\n        left: 50%;\n        top: 50%;\n        transform-origin: 0 0 ;\n        animation: rotate 2s infinite linear;\n    }\n    &::after{\n        content:"";\n        width: calc(150px - 5px);\n        height: calc(150px - 5px);\n        position: absolute;\n        left: 2.5px;\n        top: 2.5px;\n        z-index: -1;\n        background: #fff;\n        border-radius: 50%;\n    }\n}\n',a='\n// html\n<div class="taiji">\n    <div class="top"></div>\n    <div class="bottom"></div>\n</div>\n\n// less\n.taiji{\n    width: 200px;\n    height: 200px;\n    outline: 3px solid #000;\n    border-radius: 50%;\n    background: linear-gradient(to right,#fff 50%,#000 50%);\n    position: relative;\n    z-index: 2;\n    animation: rotate 2s infinite linear;\n    .top{\n        width: calc(200px / 2);\n        height: calc(200px / 2);\n        background: #fff;\n        border-radius: 50%;\n        position: absolute;\n        left: 25%;\n        top: 0;\n        z-index: -1;\n        &::after{\n            content: "";\n            display: block;\n            width: calc(200px / 6);\n            height: calc(200px / 6);\n            background: #000;\n            border-radius: 50%;\n            position: absolute;\n            top: 50%;\n            left: 50%;\n            transform: translate(-50% , -50%);\n        }\n    }\n    .bottom{\n        width: calc(200px / 2);\n        height: calc(200px / 2);\n        background: #000;\n        border-radius: 50%;\n        position: absolute;\n        left: 25%;\n        bottom: 0;\n        z-index: -1;\n        &::after{\n            content: "";\n            display: block;\n            width: calc(200px / 6);\n            height: calc(200px / 6);\n            background: #fff;\n            border-radius: 50%;\n            position: absolute;\n            top: 50%;\n            left: 50%;\n            transform: translate(-50% , -50%);\n        }\n    }\n    \n}\n'}}]);
//# sourceMappingURL=chunk-2d0bd1cc.e82686d1.js.map