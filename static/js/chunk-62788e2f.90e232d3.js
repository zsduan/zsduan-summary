(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-62788e2f","chunk-2d0c51d8"],{"1cfd":function(t,e,s){"use strict";s("7454")},"3e5e":function(t,e,s){"use strict";s.r(e),s.d(e,"code1",(function(){return n})),s.d(e,"code2",(function(){return i}));const n='\n// 共有两个方法 formatTime 和 asyncFormatTime 其中 asyncFormatTime 返回一个Promise对象\nimport {formatTime , asyncFormatTime} from "../../utils/format-time";\n\n\n/**\n * @name 格式化时间 \n * @description options 建议使用对象传参 也可以使用字符串 | 时间戳 | 日期对象\n * @description 所有参数不传时 默认为当前时间\n * @param {Object | string | Date | number} [options] 配置对象 | 日期字符串 | 日期对象 | 时间戳\n * @param {String} options.format 格式化字符串 yyyy-MM-dd HH:mm:ss\n * @param {Date | string | number} [options.date] 日期对象 | 日期字符串 | 时间戳\n * @param {Function} [options.success] 成功返回\n * @param {Function} [options.fail] 失败返回\n * @param {Function} [options.complete] 完成返回\n * @returns {String} 格式化后的时间\n * */\n\nformatTime({\n    date : new Date(),\n    format : "yyyy-MM-dd HH:mm:ss",\n    success : (res)=>{\n        this.time2 = res\n    },\n    fail : (err)=>{\n        console.log(err)\n    },\n})\n\n// 还可以\nlet time = formatTime({\n    date : new Date(),\n    format : "yyyy-MM-dd",\n});\n',i='\nasyncFormatTime({\n    date : new Date(),\n    format : "yyyy-MM-dd HH:mm:ss",\n}).then((res)=>{\n    this.time3 = res\n}).catch((err)=>{\n    console.log(err)\n})\n'},7454:function(t,e,s){},"983c":function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t._self._c;return e("div",[t.newIndex?t._e():e("dzs-header",{attrs:{title:"处理时间"}}),e("div",{staticClass:"page"},[e("h2",[t._v("格式化时间")]),e("div",{staticClass:"item"},[e("div",{staticClass:"tips-box"},[t._v("正常使用")]),e("dzs-form",{attrs:{options:t.formOptions},on:{onSubmit:t.onSubmit}}),e("div",{staticClass:"guid"},[t._v(t._s(t.time))]),e("dzs-code",{attrs:{title:"使用方法",value:t.code1}})],1),e("h2",[t._v("格式化支持Promise")]),e("div",{staticClass:"item"},[e("div",{staticClass:"guid"},[t._v(t._s(t.time3))]),e("dzs-code",{attrs:{title:"使用方法",value:t.code2}})],1),e("h2",[t._v("源代码下载/查看")]),t._m(0)]),t.newIndex?t._e():e("el-backtop",{attrs:{"visibility-height":20}})],1)},i=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"item"},[e("a",{attrs:{target:"_blank",href:"https://github.com/zsduan/zsduan-summary/blob/master/src/utils/setTime.js"}},[t._v("下载/查看地址")])])}],a=s("ac93"),o=s("3e5e"),r=s("829f"),m={props:{newIndex:{type:Boolean,default:()=>!1}},components:{dzsForm:a["a"]},computed:{formOptions(){return{formProps:{"label-width":"60px"},formItem:[{label:"时间",key:"Time",type:"date",span:24,rules:[],props:{type:"datetime","value-format":"yyyy-MM-dd HH:mm:ss",placeholder:"请选择时间"}}]}}},data(){return{time:Object(r["b"])(),code1:o["code1"],code2:o["code2"],time1:Object(r["b"])({format:"yyyy-MM-dd"}),time2:"",time3:""}},mounted(){this.setTime2(),this.setTime3()},methods:{onSubmit(t){Object(r["b"])({date:t.Time,success:t=>{this.time=t}})},onSubmit1(t){Object(r["b"])({date:t.Time,format:"yyyy-MM-dd",success:t=>{this.time1=t}})},setTime2(){Object(r["b"])({date:new Date,format:"yyyy-MM-dd HH:mm:ss",success:t=>{this.time2=t},fail:t=>{console.error(t)}})},setTime3(){Object(r["a"])({date:new Date,format:"yyyy-MM-dd HH:mm:ss"}).then(t=>{this.time3=t}).catch(t=>{console.error(t)})}}},c=m,d=(s("1cfd"),s("2877")),u=Object(d["a"])(c,n,i,!1,null,"c716f61e",null);e["default"]=u.exports}}]);
//# sourceMappingURL=chunk-62788e2f.90e232d3.js.map