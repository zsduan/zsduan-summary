(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cb57fbec","chunk-2d0e5352","chunk-2d0c11b9"],{"0cb2":function(t,e,n){var r=n("e330"),i=n("7b0b"),s=Math.floor,l=r("".charAt),a=r("".replace),c=r("".slice),o=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,u=/\$([$&'`]|\d{1,2})/g;t.exports=function(t,e,n,r,d,m){var h=n+t.length,p=r.length,f=u;return void 0!==d&&(d=i(d),f=o),a(m,f,(function(i,a){var o;switch(l(a,0)){case"$":return"$";case"&":return t;case"`":return c(e,0,n);case"'":return c(e,h);case"<":o=d[c(a,1,-1)];break;default:var u=+a;if(0===u)return i;if(u>p){var m=s(u/10);return 0===m?i:m<=p?void 0===r[m-1]?l(a,1):r[m-1]+l(a,1):i}o=r[u-1]}return void 0===o?"":o}))}},"44e7":function(t,e,n){var r=n("861d"),i=n("c6b6"),s=n("b622"),l=s("match");t.exports=function(t){var e;return r(t)&&(void 0!==(e=t[l])?!!e:"RegExp"==i(t))}},4546:function(t,e,n){t.exports=n.p+"static/img/1.b9ee55ab.jpg"},"5b81":function(t,e,n){"use strict";var r=n("23e7"),i=n("c65b"),s=n("e330"),l=n("1d80"),a=n("1626"),c=n("7234"),o=n("44e7"),u=n("577e"),d=n("dc4a"),m=n("90d8"),h=n("0cb2"),p=n("b622"),f=n("c430"),g=p("replace"),v=TypeError,b=s("".indexOf),w=s("".replace),x=s("".slice),H=Math.max,_=function(t,e,n){return n>t.length?-1:""===e?n:b(t,e,n)};r({target:"String",proto:!0},{replaceAll:function(t,e){var n,r,s,p,y,k,$,C,A,j=l(this),z=0,E=0,I="";if(!c(t)){if(n=o(t),n&&(r=u(l(m(t))),!~b(r,"g")))throw v("`.replaceAll` does not allow non-global regexes");if(s=d(t,g),s)return i(s,t,j,e);if(f&&n)return w(u(j),t,e)}p=u(j),y=u(t),k=a(e),k||(e=u(e)),$=y.length,C=H(1,$),z=_(p,y,0);while(-1!==z)A=k?u(e(y,z,p)):h(y,p,z,[],void 0,e),I+=x(p,E,z)+A,E=z+$,z=_(p,y,z+C);return E<p.length&&(I+=x(p,E)),I}})},"90d8":function(t,e,n){var r=n("c65b"),i=n("1a2d"),s=n("3a9b"),l=n("ad6d"),a=RegExp.prototype;t.exports=function(t){var e=t.flags;return void 0!==e||"flags"in a||i(t,"flags")||!s(a,t)?e:r(l,t)}},9401:function(t,e,n){"use strict";n.r(e),n.d(e,"code1",(function(){return r}));const r='\n/**\n * 处理html 目前仅支持处理图片\n * @description 将图片的宽度变成 100% 高度自适应\n * @param {object} option 配置文件\n * @description option 数据详情\n * @param {string} option.html html源码\n * @param {string} [option.imgUrl] 是否需要拼接图片的url 选填\n * @return {Function} option.success 成功返回\n * @return {Function} option.fail 失败返回\n * */ \n// data\noldHtml : \'<img src=\'\' />",\nnewHtml : ""\n// js\nimport setHtml from "../../utils/sethtml"\nsetHtml({\n    html : this.oldHtml,\n    success : (res)=>{\n        this.newHtml = res;\n    },\n})\n'},ad6d:function(t,e,n){"use strict";var r=n("825a");t.exports=function(){var t=r(this),e="";return t.hasIndices&&(e+="d"),t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.unicodeSets&&(e+="v"),t.sticky&&(e+="y"),e}},f86e:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t._self._c;return e("div",[t.newIndex?t._e():e("dzs-header",{attrs:{title:"设置html"}}),e("div",{staticClass:"page"},[e("div",{staticClass:"tips-box"},[t._v("目前只支持图片适应屏幕模式 其他模式暂时不支持")]),e("h2",[t._v("基础用法")]),e("div",{staticClass:"item"},[e("div",{staticClass:"tips-box"},[t._v("原始尺寸")]),e("div",{domProps:{innerHTML:t._s(t.oldHtml)}}),e("div",{staticClass:"tips-box"},[t._v("处理后尺寸 不超过100%")]),e("div",{domProps:{innerHTML:t._s(t.newHtml)}}),e("dzs-code",{attrs:{title:"源代码",value:t.code1}})],1),e("h2",[t._v("源代码下载/查看")]),t._m(0)]),t.newIndex?t._e():e("el-backtop",{attrs:{"visibility-height":20}})],1)},i=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"item"},[e("a",{attrs:{target:"_blank",href:"https://github.com/zsduan/zsduan-summary/blob/master/src/utils/sethtml.js"}},[t._v("下载/查看地址")])])}];n("5b81");const s=t=>{let e={html:"",imgUrl:"",success:t=>{},fail:t=>{}};if(e={...e,...t},!e.html)return void e.fail("html is null");if("string"!=typeof e.html)return void e.fail("html is not string");let n=e.html.replaceAll("  &lt;","<").replaceAll("  &gt;",">"),r=n.replace(/<img[^>]*>/gi,(function(t,e){return-1==t.search(/style=/gi)&&(t=t.replace(/\<img/gi,'<img style=""')),t}));r=r.replace(/style="/gi,"$& max-width:100% ; height:auto; ");var i=/<img [^>]*src=['"]([^'"]+)[^>]*>/g;if(r.match(i)){for(var s=r.match(i),l=0;l<s.length;l++){var a=s[l].replace(i,"$1");"http"!==a.slice(0,4)&&"https"!==a.slice(0,5)&&"data"!==a.slice(0,4)&&(r=r.replace(new RegExp(a,"g"),e.imgUrl+a))}return e.success(r),r}e.success(r)};var l=s,a=n("9401"),c=n("4546"),o=n.n(c),u={props:{newIndex:{type:Boolean,default:()=>!1}},data(){return{oldHtml:`<img src='${o.a}' />`,code1:a["code1"],newHtml:""}},mounted(){this.mysetHtml()},methods:{mysetHtml(){l({html:this.oldHtml,success:t=>{this.newHtml=t}})}}},d=u,m=n("2877"),h=Object(m["a"])(d,r,i,!1,null,"1f49c2ce",null);e["default"]=h.exports}}]);
//# sourceMappingURL=chunk-cb57fbec.6d2aee57.js.map