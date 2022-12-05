/*
 * @Author: zs.duan
 * @Date: 2022-12-05 17:31:47
 * @LastEditors: zs.duan
 * @LastEditTime: 2022-12-05 18:47:53
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
<dzs-markdown v-model="value"></dzs-markdown>
// js
/*
 * @name markdown 组件
 * @prop value string 默认值 改变值 可以使用 v-model / update:value
 * @prop height String default 500px 富文本高度
 * @prop width string default 100% 富文本宽度
 * @prop markdownOption的配置 详情见 https://github.com/hinesboy/mavonEditor
 */
import dzsMarkdown from "../../components/dzs-markdown/index.vue";
`

export const code2 = `
// html
<dzs-markdown v-model="defaultValue"></dzs-markdown>
<!--两者选一个-->
<dzs-markdown :value.sync="defaultValue"></dzs-markdown>
// js
/*
 * @name markdown 组件
 * @prop value string 默认值 改变值 可以使用 v-model / update:value
 * @prop height String default 500px 富文本高度
 * @prop width string default 100% 富文本宽度
 * @prop markdownOption的配置 详情见 https://github.com/hinesboy/mavonEditor
 */
import dzsMarkdown from "../../components/dzs-markdown/index.vue";
`