/*
 * @Author: zs.duan
 * @Date: 2022-12-05 17:31:47
 * @LastEditors: zs.duan
 * @LastEditTime: 2022-12-05 17:31:47
 * @FilePath: \vue2+elui+template\src\views\markdown\config.js
 */
/*
 * @Author: zs.duan
 * @Date: 2022-09-27 09:40:56
 * @LastEditors: zs.duan
 * @LastEditTime: 2022-12-05 17:14:47
 * @FilePath: \vue2+elui+template\src\views\edit\config.js
 */

export const code1 = `
// html
<dzs-markdown></dzs-markdown>
// js
/*
 * @name 富文本编辑组件
 * @prop value string 默认值 改变值 可以使用 v-model / update:value
 * @prop height Number | String default 500 富文本高度 
 * @prop width string default 100% 富文本宽度
 * @porp show_save Boolean default false 是否显示实时保存
 * @porp placeholder string default "请输入类容" 默认提示文字
 * @porp production_url string default "/zsduan-summary" hash模式下 语言和样式的配置文件的前缀目录
 * @porp plugins string 菜单配置 支持菜单见文件
 * @porp toolbar Array 快捷键配置 支持菜单见文件
 * @method save 保存方法 返回 改变的value
*/ 
import dzsMarkdown from "../../components/dzs-markdown/index.vue";
`

export const code2 = `
// html
<dzs-editor v-model="defaultValue"></dzs-editor>
<!--两者选一个-->
<dzs-editor :value.sync="defaultValue"></dzs-editor>
// js
/*
 * @name 富文本编辑组件
 * @prop value string 默认值 改变值 可以使用 v-model / update:value
 * @prop height Number | String default 500 富文本高度 
 * @prop width string default 100% 富文本宽度
 * @porp show_save Boolean default false 是否显示实时保存
 * @porp placeholder string default "请输入类容" 默认提示文字
 * @porp production_url string default "/zsduan-summary" hash模式下 语言和样式的配置文件的前缀目录
 * @porp plugins string 菜单配置 支持菜单见文件
 * @porp toolbar Array 快捷键配置 支持菜单见文件
 * @method save 保存方法 返回 改变的value
*/ 
import dzsEditor from "@/components/dzs-editor/index.vue";
`