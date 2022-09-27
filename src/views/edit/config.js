/*
 * @Author: zs.duan
 * @Date: 2022-09-27 09:40:56
 * @LastEditors: zs.duan
 * @LastEditTime: 2022-09-27 09:45:08
 * @FilePath: \vue2+js+eui+template\src\views\edit\config.js
 */

export const code1 = `
<dzs-editor></dzs-editor>
`

export const code2 = `
<dzs-editor v-model="defaultValue"></dzs-editor>
<!--两者选一个-->
<dzs-editor :value.sync="defaultValue"></dzs-editor>
`