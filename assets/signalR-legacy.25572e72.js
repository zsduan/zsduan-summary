System.register(["./HubConnectionBuilder-legacy.edba6c6e.js","./index-legacy.47d59fb5.js"],(function(t){"use strict";var n;return{setters:[function(){},function(t){n=t.n}],execute:function(){var e={},s=n({data:function(){return{code1:'\n/*\n * @name signalR连接 .net、\n * @parame connUrl 连接的url\n * @parame data 连接中携带的参数 object\n * @method success 成功方法\n * @method fail 失败方法\n * @method stop 停止后返回的方法\n * @return {\n * code : 200,\n    data : {\n        SR : SR, //连接成功后的返回\n        stop : stopSignalR(SR,data) //返回的停止函数\n    }}\n *\n*/ \n// 使用\nimport {signalRcoont} from "@/utils/signalR";\nsignalRcoont({\n    connUrl : "",\n    data : {},\n    success : (reslut) =>{},\n    fail : (error) =>{},\n    stop : (stop) => {},\n})\n'}}},(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("dzs-header",{attrs:{title:"signalR连接"}}),e("div",{staticClass:"page"},[e("div",{staticClass:"tips-box"},[t._v("signalR 是.net 提供的及时通信")]),e("h2",[t._v("基础用法")]),e("div",{staticClass:"item"},[e("dzs-code",{attrs:{title:"源代码",value:t.code1}})],1),e("h2",[t._v("源代码下载/查看")]),t._m(0)]),e("el-backtop",{attrs:{"visibility-height":20}})],1)}),[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"item"},[e("a",{attrs:{target:"_blank",href:"https://github.com/zsduan/zsduan-summary/blob/master/src/utils/signalR.js"}},[t._v("下载/查看地址")])])}],!1,a,null,null,null);function a(t){for(var n in e)this[n]=e[n]}t("default",function(){return s.exports}())}}}));