import{d as t}from"./index.a8c1aa15.js";import{n as e}from"./index.c53ed4d2.js";const a={};var n=e({components:{dzsEditor:t},data:()=>({code1:'\n// html\n<dzs-editor></dzs-editor>\n// js\n/*\n * @name 富文本编辑组件\n * @prop value string 默认值 改变值 可以使用 v-model / update:value\n * @prop height Number | String default 500 富文本高度 \n * @prop width string default 100% 富文本宽度\n * @porp show_save Boolean default false 是否显示实时保存\n * @porp placeholder string default "请输入类容" 默认提示文字\n * @porp production_url string default "/zsduan-summary" hash模式下 语言和样式的配置文件的前缀目录\n * @porp plugins string 菜单配置 支持菜单见文件\n * @porp toolbar Array 快捷键配置 支持菜单见文件\n * @method save 保存方法 返回 改变的value\n*/ \nimport dzsEditor from "@/components/dzs-editor/index.vue";\n',code2:'\n// html\n<dzs-editor v-model="defaultValue"></dzs-editor>\n\x3c!--两者选一个--\x3e\n<dzs-editor :value.sync="defaultValue"></dzs-editor>\n// js\n/*\n * @name 富文本编辑组件\n * @prop value string 默认值 改变值 可以使用 v-model / update:value\n * @prop height Number | String default 500 富文本高度 \n * @prop width string default 100% 富文本宽度\n * @porp show_save Boolean default false 是否显示实时保存\n * @porp placeholder string default "请输入类容" 默认提示文字\n * @porp production_url string default "/zsduan-summary" hash模式下 语言和样式的配置文件的前缀目录\n * @porp plugins string 菜单配置 支持菜单见文件\n * @porp toolbar Array 快捷键配置 支持菜单见文件\n * @method save 保存方法 返回 改变的value\n*/ \nimport dzsEditor from "@/components/dzs-editor/index.vue";\n',defaultValue:"<p>我是默认值</p>"}),mounted(){}},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("dzs-header",{attrs:{title:"富文本组件"}}),a("div",{staticClass:"page"},[a("h2",[t._v("基础用法")]),a("div",{staticClass:"item"},[a("dzs-editor"),a("dzs-code",{attrs:{title:"源代码",value:t.code1}})],1),a("h2",[t._v("默认值")]),a("div",{staticClass:"item"},[a("dzs-editor",{attrs:{value:t.defaultValue},on:{"update:value":function(e){t.defaultValue=e}}}),a("dzs-code",{attrs:{title:"源代码",value:t.code2}})],1),a("h2",[t._v("更多功能")]),t._m(0),a("h2",[t._v("组件源代码下载")]),t._m(1)]),a("el-backtop",{attrs:{"visibility-height":20}})],1)}),[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"item"},[a("div",{staticClass:"tips-box"},[t._v("自己在源代码去看")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"item"},[a("a",{attrs:{target:"_blank",href:"https://github.com/zsduan/zsduan-summary/blob/master/src/components/dzs-editor/index.vue"}},[t._v("富文本组件下载地址")])])}],!1,r,"5f1c1dc3",null,null);function r(t){for(let e in a)this[e]=a[e]}var s=function(){return n.exports}();export{s as default};