!function(){function e(e,t){for(var i=0;i<t.length;i++){var o=t[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,a(o.key),o)}}function t(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */t=function(){return e};var e={},i=Object.prototype,o=i.hasOwnProperty,n=Object.defineProperty||function(e,t,i){e[t]=i.value},r="function"==typeof Symbol?Symbol:{},a=r.iterator||"@@iterator",s=r.asyncIterator||"@@asyncIterator",l=r.toStringTag||"@@toStringTag";function c(e,t,i){return Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(N){c=function(e,t,i){return e[t]=i}}function u(e,t,i,o){var r=t&&t.prototype instanceof h?t:h,a=Object.create(r.prototype),s=new k(o||[]);return n(a,"_invoke",{value:_(e,i,s)}),a}function d(e,t,i){try{return{type:"normal",arg:e.call(t,i)}}catch(N){return{type:"throw",arg:N}}}e.wrap=u;var p={};function h(){}function f(){}function m(){}var v={};c(v,a,(function(){return this}));var g=Object.getPrototypeOf,b=g&&g(g(I([])));b&&b!==i&&o.call(b,a)&&(v=b);var y=m.prototype=h.prototype=Object.create(v);function w(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function x(e,t){function i(n,r,a,s){var l=d(e[n],e,r);if("throw"!==l.type){var c=l.arg,u=c.value;return u&&"object"==typeof u&&o.call(u,"__await")?t.resolve(u.__await).then((function(e){i("next",e,a,s)}),(function(e){i("throw",e,a,s)})):t.resolve(u).then((function(e){c.value=e,a(c)}),(function(e){return i("throw",e,a,s)}))}s(l.arg)}var r;n(this,"_invoke",{value:function(e,o){function n(){return new t((function(t,n){i(e,o,t,n)}))}return r=r?r.then(n,n):n()}})}function _(e,t,i){var o="suspendedStart";return function(n,r){if("executing"===o)throw new Error("Generator is already running");if("completed"===o){if("throw"===n)throw r;return P()}for(i.method=n,i.arg=r;;){var a=i.delegate;if(a){var s=C(a,i);if(s){if(s===p)continue;return s}}if("next"===i.method)i.sent=i._sent=i.arg;else if("throw"===i.method){if("suspendedStart"===o)throw o="completed",i.arg;i.dispatchException(i.arg)}else"return"===i.method&&i.abrupt("return",i.arg);o="executing";var l=d(e,t,i);if("normal"===l.type){if(o=i.done?"completed":"suspendedYield",l.arg===p)continue;return{value:l.arg,done:i.done}}"throw"===l.type&&(o="completed",i.method="throw",i.arg=l.arg)}}}function C(e,t){var i=t.method,o=e.iterator[i];if(void 0===o)return t.delegate=null,"throw"===i&&e.iterator.return&&(t.method="return",t.arg=void 0,C(e,t),"throw"===t.method)||"return"!==i&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+i+"' method")),p;var n=d(o,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,p;var r=n.arg;return r?r.done?(t[e.resultName]=r.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,p):r:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,p)}function j(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function S(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function k(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(j,this),this.reset(!0)}function I(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,n=function t(){for(;++i<e.length;)if(o.call(e,i))return t.value=e[i],t.done=!1,t;return t.value=void 0,t.done=!0,t};return n.next=n}}return{next:P}}function P(){return{value:void 0,done:!0}}return f.prototype=m,n(y,"constructor",{value:m,configurable:!0}),n(m,"constructor",{value:f,configurable:!0}),f.displayName=c(m,l,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===f||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,c(e,l,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},w(x.prototype),c(x.prototype,s,(function(){return this})),e.AsyncIterator=x,e.async=function(t,i,o,n,r){void 0===r&&(r=Promise);var a=new x(u(t,i,o,n),r);return e.isGeneratorFunction(i)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},w(y),c(y,l,"Generator"),c(y,a,(function(){return this})),c(y,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),i=[];for(var o in t)i.push(o);return i.reverse(),function e(){for(;i.length;){var o=i.pop();if(o in t)return e.value=o,e.done=!1,e}return e.done=!0,e}},e.values=I,k.prototype={constructor:k,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(S),!e)for(var t in this)"t"===t.charAt(0)&&o.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function i(i,o){return a.type="throw",a.arg=e,t.next=i,o&&(t.method="next",t.arg=void 0),!!o}for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n],a=r.completion;if("root"===r.tryLoc)return i("end");if(r.tryLoc<=this.prev){var s=o.call(r,"catchLoc"),l=o.call(r,"finallyLoc");if(s&&l){if(this.prev<r.catchLoc)return i(r.catchLoc,!0);if(this.prev<r.finallyLoc)return i(r.finallyLoc)}else if(s){if(this.prev<r.catchLoc)return i(r.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<r.finallyLoc)return i(r.finallyLoc)}}}},abrupt:function(e,t){for(var i=this.tryEntries.length-1;i>=0;--i){var n=this.tryEntries[i];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var r=n;break}}r&&("break"===e||"continue"===e)&&r.tryLoc<=t&&t<=r.finallyLoc&&(r=null);var a=r?r.completion:{};return a.type=e,a.arg=t,r?(this.method="next",this.next=r.finallyLoc,p):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),p},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var i=this.tryEntries[t];if(i.finallyLoc===e)return this.complete(i.completion,i.afterLoc),S(i),p}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var i=this.tryEntries[t];if(i.tryLoc===e){var o=i.completion;if("throw"===o.type){var n=o.arg;S(i)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,i){return this.delegate={iterator:I(e),resultName:t,nextLoc:i},"next"===this.method&&(this.arg=void 0),p}},e}function i(e,t,i,o,n,r,a){try{var s=e[r](a),l=s.value}catch(c){return void i(c)}s.done?t(l):Promise.resolve(l).then(o,n)}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,o)}return i}function n(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function r(e,t,i){return(t=a(t))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var o=i.call(e,t||"default");if("object"!=typeof o)return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}var s=document.createElement("style");s.innerHTML=':root{--ThemeColor: var(--ThemeColor, #0065ff);--fontColor: #333}::selection{background:var(--ThemeColor);color:#fff}.page{max-width:1200px;width:100%;margin:0 auto}.page h2{font-size:20px;padding-top:30px}.page .tips-box{font-size:16px;color:var(--fontColor);line-height:20px;padding:10px 0}.page .item{padding:10px 0}.page .item a{display:inline-block;padding:10px 20px;text-align:center;border:1px solid #ccc;border-radius:10px}@media screen and (max-width: 1200px){.page{padding:0 20px}}@media screen and (max-width: 768px){.page{padding:0 10px}.page .item a{display:block;margin-top:10px}}.not-select[data-v-11563914]{-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;-ms-overflow-style:none;-khtml-user-select:none;user-select:none}.home[data-v-11563914]{padding-bottom:20px}.home-title[data-v-11563914]{font-size:36px;text-align:center}.piblic-box[data-v-11563914]{max-width:1200px;margin:0 auto}.piblic-box .title[data-v-11563914]{font-size:20px;padding-top:30px}.piblic-box ul[data-v-11563914]{display:grid;grid-template-columns:repeat(4,1fr);column-gap:20px;row-gap:40px;margin-top:40px;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;-ms-overflow-style:none;-khtml-user-select:none;user-select:none}.piblic-box ul li[data-v-11563914]{height:100px;line-height:100px;box-shadow:0 4px 8px 6px rgba(7,17,21,.06);text-align:center;font-size:26px;border:10px;cursor:pointer;transition:all .3s;color:var(--fontColor);background:#fff}.piblic-box ul li[data-v-11563914]:hover{box-shadow:0 4px 8px 10px rgba(7,17,21,.1)}.piblic-box .small-size[data-v-11563914]{font-size:18px}#back[data-v-11563914]{position:fixed;top:0;z-index:-2}.canvas-back[data-v-11563914]{position:fixed;top:0;width:100vw;height:100vh;background:rgba(255,255,255,.7);z-index:-1}.search-box[data-v-11563914]{display:flex;justify-content:space-between;max-width:1200px;margin:20px auto 0}.search-box .right[data-v-11563914]{display:flex}.search-box .right .btn[data-v-11563914]{display:inline-block;margin-left:5px}.search-box .right .ipt[data-v-11563914]{width:300px}@media screen and (max-width: 1200px){.piblic-box[data-v-11563914]{padding:0 20px}.piblic-box ul[data-v-11563914]{grid-template-columns:repeat(3,1fr);column-gap:10px;row-gap:20px;margin-top:20px}.search-box[data-v-11563914]{padding:0 20px}.search-box .right[data-v-11563914]{display:flex;width:80%}.search-box .right .btn[data-v-11563914]{display:inline-block;margin-left:5px}.search-box .right .ipt[data-v-11563914]{width:80%}}@media screen and (max-width: 768px){.piblic-box[data-v-11563914]{padding:0 10px}.piblic-box ul[data-v-11563914]{grid-template-columns:repeat(2,1fr)}.piblic-box ul li[data-v-11563914]{font-size:20px}.piblic-box .small-size[data-v-11563914]{font-size:14px}.search-box[data-v-11563914]{padding:0 10px}.home-title-box .change[data-v-11563914]{display:none}}@media screen and (max-width: 400px){.piblic-box ul[data-v-11563914]{grid-template-columns:repeat(1,1fr)}}.home-title-box[data-v-11563914]{position:relative}.home-title-box .change[data-v-11563914]{position:absolute;right:10%;top:25px;cursor:pointer}div,p,span,ul,li,h1,h2,h3,h4,h5,header,main,footer,section,body{padding:0;margin:0;font-size:14px;box-sizing:border-box}div{word-break:break-all}li{list-style:none}input{outline:none;border:0}a{text-decoration:none;color:#333}a:link,a:visited{text-decoration:none}img{border:0;outline:none}.fl{float:left}.fr{float:right}.elli1{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.elli2{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden}.elli3{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:3;overflow:hidden}.elli4{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:4;overflow:hidden}.clearfix:after{content:"";display:block;clear:both}.not-select{-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;-ms-overflow-style:none;-khtml-user-select:none;user-select:none}.box-show{box-shadow:0 0 12px rgba(46,72,233,.2);background-color:#fff}.el-form-item--medium.el-form-item,.el-form-item--default.el-form-item{margin-bottom:22px}.el-button--primary{background-color:var(--ThemeColor);border-color:var(--ThemeColor)}.el-button--primary:focus{background-color:var(--ThemeColor);border-color:var(--ThemeColor)}.el-switch.is-checked .el-switch__core{border-color:var(--ThemeColor);background-color:var(--ThemeColor)}.header-box[data-v-7a44007c]{width:100%;height:50px;box-shadow:3px 3px 3px rgba(100,100,100,.3);position:fixed;background:#fff;z-index:999}.top-box[data-v-7a44007c]{max-width:1200px;width:100%;left:50%;transform:translate(-50%);position:fixed;z-index:999}.top-box .go-home[data-v-7a44007c]{font-size:18px;flex:2;cursor:pointer;position:absolute;left:0;top:10px}.top-box .title-box[data-v-7a44007c]{text-align:center;max-width:calc(100% - 170px);margin:0 auto}.top-box .title-box .title[data-v-7a44007c]{font-size:30px;display:inline-block;padding-left:5px;animation:shadowing-data-v-7a44007c 1s ease-in-out infinite alternate}.top-box .title-box .title[data-v-7a44007c]:first-child{padding-left:0}@keyframes shadowing-data-v-7a44007c{to{color:var(--ThemeColor)}}.top-empty[data-v-7a44007c]{width:100%;height:50px}@media screen and (max-width: 1200px){.top-box .go-home[data-v-7a44007c]{left:20px}}@media screen and (max-width: 768px){.top-box .go-home[data-v-7a44007c]{left:10px}}.code-box[data-v-19594384]{box-shadow:0 4px 8px 6px rgba(7,17,21,.06);border:10px;padding:10px;margin:10px 0;border-radius:5px}.code-box .title[data-v-19594384]{font-size:16px;font-weight:500}.code-box .header-box[data-v-19594384]{display:flex;justify-content:space-between;padding-bottom:10px}.code-box .header-box .copy[data-v-19594384]{cursor:pointer}.code-box .header-box .copy[data-v-19594384]:hover{color:var(--ThemeColor)}.code-box .pre[data-v-19594384]{font-weight:500;font-size:16px;line-height:26px;width:100%;overflow-x:auto}.code-box .pre[data-v-19594384]::-webkit-scrollbar-thumb{border-radius:10px;box-shadow:inset 0 0 5px rgba(97,184,179,.1);background:#78b4b4}.code-box .pre[data-v-19594384]::-webkit-scrollbar-track{box-shadow:inset 0 0 5px rgba(87,175,187,.1);border-radius:10px;background:#ededed}.my-editor[data-v-19594384]{background:#2d2d2d;color:#ccc;font-family:Fira code,Fira Mono,Consolas,Menlo,Courier,monospace;font-size:14px;line-height:1.5;padding:5px}.prism-editor__textarea[data-v-19594384]:focus{outline:none}\n',document.head.appendChild(s),System.register(["../../assets/_vue@2.6.11@vue-legacy.63dd66dc.js","../../assets/_vue-router@3.6.5@vue-router-legacy.19356d24.js","../../assets/_vuex@3.6.2@vuex-legacy.94bc131c.js","../../assets/_element-ui@2.15.12@element-ui-legacy.8f3b5fb4.js","../../assets/_mavon-editor@2.10.4@mavon-editor-legacy.b45d5020.js","../../assets/_vue-prism-editor@1.3.0@vue-prism-editor-legacy.be0e5f62.js","../../assets/_prismjs@1.29.0@prismjs-legacy.a6de8169.js","../../assets/_async-validator@1.8.5@async-validator-legacy.075698ce.js","../../assets/_babel-runtime@6.26.0@babel-runtime-legacy.1a12242f.js","../../assets/_core-js@2.6.12@core-js-legacy.6aa07fbe.js","../../assets/_deepmerge@1.5.2@deepmerge-legacy.c1b16c21.js","../../assets/_resize-observer-polyfill@1.5.1@resize-observer-polyfill-legacy.1f4c05a3.js","../../assets/_throttle-debounce@1.1.0@throttle-debounce-legacy.66589680.js","../../assets/_lodash@4.17.21@lodash-legacy.4530bffc.js","../../assets/_babel-helper-vue-jsx-merge-props@2.0.3@babel-helper-vue-jsx-merge-props-legacy.4282b64f.js","../../assets/_normalize-wheel@1.0.1@normalize-wheel-legacy.72fffe93.js"],(function(o,r){"use strict";var a,s,l,c,u,d,p;return{setters:[function(e){a=e.V},function(e){s=e.V},function(e){l=e.V},function(e){c=e.E},function(e){u=e.m},function(e){d=e.P},function(e){p=e.p},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){}],execute:function(){o("n",h);function h(e,t,i,o,n,r,a,s){var l,c="function"==typeof e?e.options:e;if(t&&(c.render=t,c.staticRenderFns=i,c._compiled=!0),o&&(c.functional=!0),r&&(c._scopeId="data-v-"+r),a?(l=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},c._ssrRegister=l):n&&(l=s?function(){n.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:n),l)if(c.functional){c._injectStyles=l;var u=c.render;c.render=function(e,t){return l.call(t),u(e,t)}}else{var d=c.beforeCreate;c.beforeCreate=d?[].concat(d,l):[l]}return{exports:e,options:c}}var f={},m=h({mounted:function(){setTimeout((function(){var e=window.localStorage.getItem("ThemeColor");e||(window.localStorage.setItem("ThemeColor","#0065ff"),e="#0065ff"),document.body.style.setProperty("--ThemeColor",e);if(/^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/.test(e)){var t=e.toLowerCase().replace(/\#/g,""),i=t.length;if(3==i){for(var o="",n=0;n<i;n++)o+=t.slice(n,n+1).concat(t.slice(n,n+1));t=o}var r=[];for(n=0;n<6;n+=2){var a=t.slice(n,n+2);r.push(parseInt("0x"+a))}for(var s=1;s<10;s++){var l="rgba(".concat(r.join(","),",0.").concat(s,")");document.body.style.setProperty("--ThemeColor0".concat(s),l)}}}),200)}},(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)}),[],!1,v,null,null,null);function v(e){for(var t in f)this[t]=f[t]}var g=function(){return m.exports}(),b=function(e,t){return e()},y=[{title:"弹窗组件",path:"/Popup",is_show:!0},{title:"表格组件",path:"/table",is_show:!0},{title:"富文本组件",path:"/edit",is_show:!0},{title:"markdown组件",path:"/markdown",is_show:!0},{title:"表单组件",path:"/form",is_show:!0},{title:"横向表单组件",path:"/formWidth",is_show:!0},{title:"车牌号键盘组件",path:"/licensePlateNumber",is_show:!0},{title:"canvas生成验证码",path:"/VerificationCode",is_show:!0},{title:"滑动验证",path:"/slide-verification",is_show:!0}],w=[{title:"处理时间 苹果/安卓",path:"/setTime",is_show:!0},{title:"防抖/节流 指令",path:"/debounce",is_show:!0},{title:"自动展开 指令",path:"/listOpen",is_show:!0},{title:"生成guid",path:"/guid",is_show:!0},{title:"设置主题色",path:"/ThemeColor",is_show:!0},{title:"获取浏览器型号",path:"/ua",is_show:!0},{title:"计算时间差",path:"/timeDifference",is_show:!0},{title:"日期转农历",path:"/calender",is_show:!0},{title:"xlsx/excel读取数据，没预览",path:"/readeXlsx",is_show:!0},{title:"word读取",path:"/readeWord",is_show:!0},{title:"signalR 及时通信",path:"/signalR",is_show:!0},{title:"Notification 消息通知",path:"/myNotification",is_show:!0},{title:"js模糊搜索",path:"/blurSearch",is_show:!0},{title:"vue动态路由",path:"/myRouter",is_show:!0},{title:"对称加密/解密/MD5加密",path:"/encryp",is_show:!0},{title:"微信/支付宝/其他浏览器的判断",path:"/is-wx-Alipay",is_show:!0},{title:"大文件切片与合并",path:"/file-slice-and-merge",is_show:!0},{title:"js复制",path:"/myCopy",is_show:!0}],x=[{title:"模块拖动更换位置",path:"/drag",is_show:!0},{title:"边框动画效果",path:"/button-border",is_show:!0}],_=[{title:"比较好用的js片段",path:"/EasyJS",is_show:!0}],C=(o("p",{fragmentList:_,effectList:x,jsList:w,componentsList:y}),function(e,t,i,o,n){e.fillStyle="rgba(255,255,255,0.1)",e.fillRect(0,0,window.innerWidth,window.innerHeight);e.fillStyle=j(),e.font="".concat(20,"px 'Roboto Mono'");for(var r=0;r<i;r++){var a=r*o,s=20*n[r];e.fillText(S(t),a,s),s>window.innerHeight&&Math.random()>.95?n[r]=0:n[r]++}}),j=function(){var e=["#33B5E5","#0099CC","#AA66CC","#9933CC","#669900","#FFBB33","#FF8800","#FF4444"];return e[Math.floor(Math.random()*e.length)]},S=function(e){if("string"!=typeof(e=e||"Hello Word")||"[object String]"===!Object.prototype.toString.call(e))throw new Error("showWord must be not string");return e[Math.floor(Math.random()*e.length)]},k=o("b",(function(){var e={list:[],searValue:"",key:"",success:function(e){},fail:function(e){}};if(!(e=n(n({},e),arguments.length<=0?void 0:arguments[0])).list)throw new Error("list must be not null");if(Array.isArray(e.list)&&!e.list.constructor!==Array){if(!e.searValue)return e.success(e.list),e.list;if("string"==typeof e.searValue&&"[object String]"!==!Object.prototype.toString.call(e.searValue))if(!e.key||"string"==typeof e.key&&"[object String]"!==!Object.prototype.toString.call(e.key)){var t=[],i=new RegExp(e.searValue);if(e.key)return e.list.forEach((function(o){o[e.key].match(i)&&t.push(o)})),void e.success(t);e.list.forEach((function(e){e.match(i)&&t.push(e)})),e.success(t)}else e.fail({code:-1,msg:"key must be string"});else e.fail({code:-1,msg:"searValue must be string"})}else e.fail({code:-1,msg:"list must be Array"})})),I={name:"Home",components:{},data:function(){return{componentsList:y.filter((function(e){return 1==e.is_show})),jsList:w.filter((function(e){return 1==e.is_show})),effectList:x.filter((function(e){return 1==e.is_show})),fragmentList:_.filter((function(e){return 1==e.is_show})),allList:[].concat(y,w,x,_).filter((function(e){return e.is_show})),searchList:[],searchValue:""}},mounted:function(){!function(){var e={canvasId:"",showWord:"",columnWidth:20,success:function(e){},fail:function(e){}};if((e=n(n({},e),arguments.length<=0?void 0:arguments[0])).canvasId)if("string"==typeof e.canvasId&&"[object String]"!==!Object.prototype.toString.call(e.canvasId)||!showWord)if("string"==typeof e.showWord&&"[object String]"!==!Object.prototype.toString.call(e.showWord)){var t=e.columnWidth?Number(e.columnWidth):20;if(isFinite(t)){var i=document.querySelector("#"+e.canvasId),o=window.innerWidth-20,r=window.innerHeight;i.width=o,i.height=r;var a=i.getContext("2d"),s=Math.floor(o/t),l=new Array(s);l.fill(1),setInterval((function(){C(a,e.showWord,s,t,l)}),50),e.success("success")}else e.fail({code:-1,msg:"columnWidth must be Number or String Number"})}else e.fail({code:-1,msg:"showWord must be string"});else e.fail({code:-1,msg:"canvasId must be string"});else e.fail({code:-1,msg:"canvasId must be not null"})}({canvasId:"back",showWord:"zsduan的自我总结",columnWidth:21})},methods:{goNav:function(e){e?this.$router.push({path:e}):this.$message({message:"功能暂未开放",type:"info"})},inputValue:function(){var e=this;k({list:this.allList,searValue:this.searchValue,key:"title",success:function(t){e.searchList=t}})},changeNew:function(){this.$router.push({path:"/"})}}},P={},N=h(I,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"home"},[i("div",{staticClass:"home-title-box"},[i("h1",{staticClass:"home-title"},[e._v("zs.duan的自我总结")]),i("div",{staticClass:"change",on:{click:e.changeNew}},[e._v("切换新版")])]),i("div",{staticClass:"search-box"},[i("div",{staticClass:"left"}),i("div",{staticClass:"right"},[i("el-input",{staticClass:"ipt",attrs:{placeholder:"请输入你需要搜索的名称",clearable:""},on:{input:e.inputValue},model:{value:e.searchValue,callback:function(t){e.searchValue=t},expression:"searchValue"}}),i("el-button",{staticClass:"btn",attrs:{type:"primary",icon:"el-icon-search"}},[e._v("搜索")])],1)]),e.searchValue?i("div",[i("div",{staticClass:"components-box piblic-box"},[i("h2",{staticClass:"title"},[e._v("搜索结果")]),i("ul",e._l(e.searchList,(function(t,o){return i("li",{key:o,staticClass:"elli1",class:t.title.length>8?"small-size":"",on:{click:function(i){return e.goNav(t.path)}}},[e._v(e._s(t.title))])})),0),e.searchList.length?e._e():i("el-empty",{attrs:{description:"暂无数据,换个关键词试试"}})],1)]):i("div",[i("div",{staticClass:"components-box piblic-box"},[i("h2",{staticClass:"title"},[e._v("组件篇(基于饿了吗ui)")]),i("ul",e._l(e.componentsList,(function(t,o){return i("li",{key:o,staticClass:"elli1",class:t.title.length>8?"small-size":"",on:{click:function(i){return e.goNav(t.path)}}},[e._v(e._s(t.title))])})),0)]),i("div",{staticClass:"components-box piblic-box"},[i("h2",{staticClass:"title"},[e._v("js篇")]),i("ul",e._l(e.jsList,(function(t,o){return i("li",{key:o,staticClass:"elli1",class:t.title.length>8?"small-size":"",on:{click:function(i){return e.goNav(t.path)}}},[e._v(e._s(t.title))])})),0)]),i("div",{staticClass:"components-box piblic-box"},[i("h2",{staticClass:"title"},[e._v("动效/页面效果")]),i("ul",e._l(e.effectList,(function(t,o){return i("li",{key:o,staticClass:"elli1",class:t.title.length>8?"small-size":"",on:{click:function(i){return e.goNav(t.path)}}},[e._v(e._s(t.title))])})),0)]),i("div",{staticClass:"components-box piblic-box"},[i("h2",{staticClass:"title"},[e._v("好用的js片段")]),i("ul",e._l(e.fragmentList,(function(t,o){return i("li",{key:o,staticClass:"elli1",class:t.title.length>8?"small-size":"",on:{click:function(i){return e.goNav(t.path)}}},[e._v(e._s(t.title))])})),0)])]),i("el-backtop",{attrs:{"visibility-height":20}}),i("div",{staticClass:"canvas-back"}),i("canvas",{attrs:{id:"back"}},[e._v("您的浏览器不支持canvas")])],1)}),[],!1,D,"11563914",null,null);function D(e){for(var t in P)this[t]=P[t]}var E=function(){return N.exports}(),T=Object.freeze(Object.defineProperty({__proto__:null,default:E},Symbol.toStringTag,{value:"Module"}));a.use(s);var O=new s({mode:"hash",base:{}.BASE_URL,routes:[{path:"/old-index",name:"Home",component:E},{path:"/",name:"Index",component:function(){return b((function(){return r.import("../../assets/Index-legacy.9ec88619.js")}))}}]});O.beforeEach(function(){var e,o=(e=t().mark((function e(i,o,n){var r;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:document.title=null!==(r=i.meta)&&void 0!==r&&r.title?i.meta.title:"zs.duan的个人总结",n();case 2:case"end":return e.stop()}}),e)})),function(){var t=this,o=arguments;return new Promise((function(n,r){var a=e.apply(t,o);function s(e){i(a,n,r,s,l,"next",e)}function l(e){i(a,n,r,s,l,"throw",e)}s(void 0)}))});return function(e,t,i){return o.apply(this,arguments)}}()),a.use(l);var L=new l.Store({state:{},mutations:{},actions:{},modules:{}});new(function(){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this.newMenu=[],this.menu=e}var i,o,n;return i=t,(o=[{key:"set",value:function(){this.getRouters(this.menu).forEach((function(e){O.addRoute(e)}))}},{key:"getRouters",value:function(e,t){var i=this;return t=t||[],e.forEach((function(e){if(e.isShow){var o={path:"/".concat(e.pathName),name:e.pathName,component:i.loadView("".concat(e.page,".vue")),meta:{title:e.title}};e.PID||(o.children=[],t.push(o)),t.forEach((function(t){e.PID===t.ID&&t.children.push(t)})),e.children&&e.children.length&&i.getRouters(e.children,t)}})),t}},{key:"loadView",value:function(e){return{"../views/Home.vue":function(){return Promise.resolve().then((function(){return T}))},"../views/blurSearch/blurSearch.vue":function(){return r.import("../../assets/blurSearch-legacy.6857228c.js")},"../views/button-border/button-border.vue":function(){return r.import("../../assets/button-border-legacy.5446c1ce.js")},"../views/calender/calender.vue":function(){return r.import("../../assets/calender-legacy.af999fbc.js")},"../views/debounce/debounce.vue":function(){return r.import("../../assets/debounce-legacy.2167b688.js")},"../views/drag/drag.vue":function(){return r.import("../../assets/drag-legacy.0a9d4546.js")},"../views/EasyJS/EasyJS.vue":function(){return r.import("../../assets/EasyJS-legacy.3712331b.js")},"../views/edit/edit.vue":function(){return r.import("../../assets/edit-legacy.5a184634.js")},"../views/encryp/encryp.vue":function(){return r.import("../../assets/encryp-legacy.3da02485.js")},"../views/file-slice-and-merge/file-slice-and-merge.vue":function(){return r.import("../../assets/file-slice-and-merge-legacy.38ef66c9.js")},"../views/form/form.vue":function(){return r.import("../../assets/form-legacy.b78e0b16.js")},"../views/formWidth/formWidth.vue":function(){return r.import("../../assets/formWidth-legacy.5b98612a.js")},"../views/guid/guid.vue":function(){return r.import("../../assets/guid-legacy.ca8e7d2e.js")},"../views/Index/Index.vue":function(){return r.import("../../assets/Index-legacy.9ec88619.js")},"../views/is-wx-Alipay/is-wx-Alipay.vue":function(){return r.import("../../assets/is-wx-Alipay-legacy.3e06fac8.js")},"../views/license-plate-number/license-plate-number.vue":function(){return r.import("../../assets/license-plate-number-legacy.a7acb3af.js")},"../views/listOpen/listOpen.vue":function(){return r.import("../../assets/listOpen-legacy.d4dceb85.js")},"../views/markdown/markdown.vue":function(){return r.import("../../assets/markdown-legacy.2b2e8a6b.js")},"../views/myCopy/myCopy.vue":function(){return r.import("../../assets/myCopy-legacy.4138ab5e.js")},"../views/myNotification/myNotification.vue":function(){return r.import("../../assets/myNotification-legacy.54da57c1.js")},"../views/myRouter/myRouter.vue":function(){return r.import("../../assets/myRouter-legacy.faa1d77e.js")},"../views/Popup/Popup.vue":function(){return r.import("../../assets/Popup-legacy.07dfd8c7.js")},"../views/readeWord/readeWord.vue":function(){return r.import("../../assets/readeWord-legacy.1fa09a31.js")},"../views/readeXlsx/readeXlsx.vue":function(){return r.import("../../assets/readeXlsx-legacy.512d9b9b.js")},"../views/setTime/setTime.vue":function(){return r.import("../../assets/setTime-legacy.dcf66c93.js")},"../views/signalR/signalR.vue":function(){return r.import("../../assets/signalR-legacy.f7ac98e7.js")},"../views/slide-verification/slide-verification.vue":function(){return r.import("../../assets/slide-verification-legacy.0b07c72b.js")},"../views/table/table.vue":function(){return r.import("../../assets/table-legacy.eb6b8daf.js")},"../views/ThemeColor/ThemeColor.vue":function(){return r.import("../../assets/ThemeColor-legacy.7bde9d96.js")},"../views/time-difference/time-difference.vue":function(){return r.import("../../assets/time-difference-legacy.d80ea2a5.js")},"../views/ua/ua.vue":function(){return r.import("../../assets/ua-legacy.9f7d0c56.js")},"../views/VerificationCode/VerificationCode.vue":function(){return r.import("../../assets/VerificationCode-legacy.0bfe9332.js")}}["../views/".concat(e)]}}])&&e(i.prototype,o),n&&e(i,n),Object.defineProperty(i,"prototype",{writable:!1}),t}())([{ID:"20220920145900",PID:null,title:"弹窗组件",pathName:"Popup",page:"Popup/Popup",isShow:!0,children:[]},{ID:"20220921145900",PID:null,title:"表格组件",pathName:"table",page:"table/table",isShow:!0,children:[]},{ID:"20220921145547",PID:null,title:"富文本",pathName:"edit",page:"edit/edit",isShow:!0,children:[]},{ID:"20220927103837",PID:null,title:"表单组件",pathName:"form",page:"form/form",isShow:!0,children:[]},{ID:"20220928141333",PID:null,title:"车牌号组件",pathName:"licensePlateNumber",page:"license-plate-number/license-plate-number",isShow:!0,children:[]},{ID:"20220930095422",PID:null,title:"guid",pathName:"guid",page:"guid/guid",isShow:!0,children:[]},{ID:"20220930110149",PID:null,title:"设置主题色",pathName:"ThemeColor",page:"ThemeColor/ThemeColor",isShow:!0,children:[]},{ID:"20220930141632",PID:null,title:"获取浏览器信息",pathName:"ua",page:"ua/ua",isShow:!0,children:[]},{ID:"20220930143154",PID:null,title:"时间差",pathName:"timeDifference",page:"time-difference/time-difference",isShow:!0,children:[]},{ID:"20220930150113",PID:null,title:"获取农历",pathName:"calender",page:"calender/calender",isShow:!0,children:[]},{ID:"20220930171524",PID:null,title:"设置时间",pathName:"setTime",page:"setTime/setTime",isShow:!0,children:[]},{ID:"20221108142330",PID:null,title:"微信/支付宝/其他浏览器",pathName:"is-wx-Alipay",page:"is-wx-Alipay/is-wx-Alipay",isShow:!0,children:[]},{ID:"20221122173425",PID:null,title:"对称加密/解密/MD5加密",pathName:"encryp",page:"encryp/encryp",isShow:!0,children:[]},{ID:"20221122203652",PID:null,title:"模糊搜索",pathName:"blurSearch",page:"blurSearch/blurSearch",isShow:!0,children:[]},{ID:"20221123145701",PID:null,title:"指令 防抖 节流",pathName:"debounce",page:"debounce/debounce",isShow:!0,children:[]},{ID:"20221123145755",PID:null,title:"指令 展开列表",pathName:"listOpen",page:"listOpen/listOpen",isShow:!0,children:[]},{ID:"20221123173825",PID:null,title:"Notification 消息通知",pathName:"myNotification",page:"myNotification/myNotification",isShow:!0,children:[]},{ID:"202211233854",PID:null,title:"js 复制",pathName:"myCopy",page:"myCopy/myCopy",isShow:!0,children:[]},{ID:"20221124131125",PID:null,title:"xlsx/excel读取",pathName:"readeXlsx",page:"readeXlsx/readeXlsx",isShow:!0,children:[]},{ID:"20221125142130",PID:null,title:"signalR 连接",pathName:"signalR",page:"signalR/signalR",isShow:!0,children:[]},{ID:"20221125142912",PID:null,title:"vue 动态路由",pathName:"myRouter",page:"myRouter/myRouter",isShow:!0,children:[]},{ID:"20221125142912",PID:null,title:"word读取",pathName:"readeWord",page:"readeWord/readeWord",isShow:!0,children:[]},{ID:"20221125172012",PID:null,title:"大文件分片与合并",pathName:"file-slice-and-merge",page:"file-slice-and-merge/file-slice-and-merge",isShow:!0,children:[]},{ID:"20221129153425",PID:null,title:"边框动画效果",pathName:"button-border",page:"button-border/button-border",isShow:!0,children:[]},{ID:"20221129153430",PID:null,title:"拖动改变位置",pathName:"drag",page:"drag/drag",isShow:!0,children:[]},{ID:"20221205172925",PID:null,title:"markdown组件",pathName:"markdown",page:"markdown/markdown",isShow:!0,children:[]},{ID:"20221226141219",PID:null,title:"比较好用的js片段",pathName:"EasyJS",page:"EasyJS/EasyJS",isShow:!0,children:[]},{ID:"20221226145152",PID:null,title:"canvas生成验证码",pathName:"VerificationCode",page:"VerificationCode/VerificationCode",isShow:!0,children:[]},{ID:"20221226145152",PID:null,title:"横向表单",pathName:"formWidth",page:"formWidth/formWidth",isShow:!0,children:[]},{ID:"20221227133734",PID:null,title:"滑动验证",pathName:"slide-verification",page:"slide-verification/slide-verification",isShow:!0,children:[]}]).set();var z=function(e,t){if(!e){if(!t.getAttribute("data-height"))return t.style.transition="0.3s height ease-in-out",void(t.style.display="none");t.style.transition||(t.style.transition="0.3s height ease-in-out"),t.style.overflow="hidden";var i=t.getAttribute("data-height")?t.getAttribute("data-height"):t.offsetHeight;return t.style.height=i+"px",setTimeout((function(){t.style.height="0px"}),10),void setTimeout((function(){t.style.display="none",t.style.height="",t.style.overflow="",t.style.transition=""}),300)}t.style.display="",t.style.transition="0.3s height ease-in-out";var o=t.getAttribute("data-height")?t.getAttribute("data-height"):t.offsetHeight;0!=o&&o&&t.setAttribute("data-height",o),t.style.height="0px",t.style.overflow="hidden",setTimeout((function(){t.style.height=o+"px"}),10),setTimeout((function(){t.style.height="",t.style.overflow="",t.style.transition=""}),310)},V={},W=h({name:"dzs-header",props:{title:{type:String,default:function(){return"zs.duan的个人总结"}}},computed:{setTitle:function(){return this.title.split("")}},methods:{goHome:function(){this.$router.push({path:"/"})}}},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("div",{staticClass:"header-box"},[i("div",{staticClass:"top-box"},[i("div",{staticClass:"go-home",on:{click:e.goHome}},[i("i",{staticClass:"el-icon-s-home"}),i("span",[e._v("返回首页")])]),i("div",{staticClass:"title-box elli1"},e._l(e.setTitle,(function(t,o){return i("span",{key:o,staticClass:"title",style:{animationDelay:.1*o+"s"}},[e._v(e._s(t))])})),0)])]),i("div",{staticClass:"top-empty"})])}),[],!1,A,"7a44007c",null,null);function A(e){for(var t in V)this[t]=V[t]}var R=function(){return W.exports}(),F=o("u",(function(){var e=navigator.userAgent,t={browserName:"",browserVersion:"",osName:"",osVersion:"",deviceName:""},i={Chrome:/Chrome/,IE:/MSIE/,Firefox:/Firefox/,Opera:/Presto/,Safari:/Version\/([\d.]+).*Safari/,360:/360SE/,QQBrowswe:/QQ/,sougou:/metasr/,bidubrowser:/bidubrowser/,ucbrowser:/ubrowser/},o={iPhone:/iPhone/,iPad:/iPad/,Android:/Android/,Windows:/Windows/,Mac:/Macintosh/};for(var n in i)i[n].test(e)&&(t.browserName=n,t.browserVersion="Chrome"===n?e.split("Chrome/")[1].split(" ")[0]:"IE"===n?e.split("MSIE ")[1].split(" ")[1]:"Firefox"===n?e.split("Firefox/")[1]:"Opera"===n?e.split("Version/")[1]:"Safari"===n?e.split("Version/")[1].split(" ")[0]:"360"===n?"360":"QQBrowswe"===n?e.split("QQBrowser/")[1].split(" ")[0]:"sougou"===n?e.split("metasr/")[1].split(" ")[0]:"bidubrowser"===n?e.split("bidubrowser/")[1].split(" ")[0]:"ucbrowser"===n?e.split("ubrowser/")[1].split(" ")[0]:"other");for(var r in o)o[r].test(e)&&(t.osName=r,"Windows"===r?t.osVersion=e.split("Windows NT ")[1].split(";")[0]:"Mac"===r?t.osVersion=e.split("Mac OS X ")[1].split(")")[0]:"iPhone"===r?t.osVersion=e.split("iPhone OS ")[1].split(" ")[0]:"iPad"===r?t.osVersion=e.split("iPad; CPU OS ")[1].split(" ")[0]:"Android"===r?(t.osVersion=e.split("Android ")[1].split(";")[0],t.deviceName=e.split("(Linux; Android ")[1].split("; ")[1].split(" Build")[0]):t.osVersion="other");return t})),M=o("m",(function(){var e={copyContent:"",type:"Text",is_input:!1,img_type:"image/png",success:function(e){},fail:function(e){}};if(e=n(n({},e),arguments.length<=0?void 0:arguments[0]),"Windows"==F().osName&&"http:"==window.location.protocol&&(e.is_input=!0,e.type="Text",console.warn("osName is not Windows or protocol is not https")),!e.copyContent)throw new Error("copyContent must be not null");if(e.is_input&&"Text"==e.type){var t=document.createElement("input");return t.value=e.copyContent,document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t),e.success({code:200,msg:"success"}),!0}if("Text"==e.type&&(navigator.clipboard.writeText(e.copyContent),e.success({code:200,msg:"success"})),"Html"==e.type){var i=new Blob([e.copyContent],{type:"text/html"}),o=new ClipboardItem({"text/html":i});navigator.clipboard.write([o]),e.success({code:200,msg:"success"})}return!0})),$={name:"dzs-code",components:{PrismEditor:d},props:{title:{type:String,default:function(){return""}},value:{type:String,default:function(){return""}},isShowCopy:{type:Boolean,default:function(){return!0}}},data:function(){return{code:'console.log("Hello World")'}},methods:{copyToClipboard:function(){var e=this;this.value?M({copyContent:this.value,type:"Text",success:function(){e.$notify({message:"已经复制到剪贴板",type:"success"})}}):this.$notify({message:"没有复制内容",type:"warning"})},highlighter:function(e){return p.exports.highlight(e,p.exports.languages.js)}}},H={},B=h($,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"code-box"},[i("div",{staticClass:"header-box"},[i("div",{staticClass:"title"},[e._v(e._s(e.title))]),e.isShowCopy&&e.value?i("div",{staticClass:"copy",on:{click:e.copyToClipboard}},[e._v("复制")]):e._e()]),e.value?i("prism-editor",{staticClass:"my-editor",attrs:{readonly:!0,highlight:e.highlighter,"line-numbers":""},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}}):e._e(),e._t("default")],2)}),[],!1,X,"19594384",null,null);function X(e){for(var t in H)this[t]=H[t]}var G,Q=function(){return B.exports}();a.use(c),a.use(u),a.config.productionTip=!1,a.component("dzsHeader",R),a.component("dzsCode",Q),function(e){e.directive("dzs-list-open",{componentUpdated:function(e,t){z(t.value,e)},bind:function(e,t){z(t.value,e)}})}(G=a),function(e){e.directive("dzs-debounce",{bind:function(e,t){var i=t.value;i||(i=500);var o=null;e.addEventListener("click",(function(e){o?e&&e.stopImmediatePropagation():o=setTimeout((function(){o=null}),i)}),!0)}})}(G),function(e){e.directive("dzs-input-throttle",{inserted:function(e,t){var i=null;e.addEventListener("keyup",(function(){i=i?null:setTimeout((function(){t.value&&t.value()}),500)}))}})}(G),function(e){e.directive("dzs-btn-throttle",{inserted:function(e,t){t.value,e.addEventListener("click",(function(){e.disabled?e.disabled=!0:(e.disabled=!0,setTimeout((function(){e.disabled=!1}),500))}))}})}(G),new a({router:O,store:L,render:function(e){return e(g)}}).$mount("#app")}}}))}();