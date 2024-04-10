/*
 * @Author: zs.duan
 * @Date: 2022-12-26 15:32:46
 * @LastEditors: zs.duan
 * @LastEditTime: 2022-12-26 15:35:42
 * @FilePath: \vue2+js+eui+template\src\views\VerificationCode\config.js
 */
export const code1 = `
// html
<dzs-verification-code v-model="verification_code"></dzs-verification-code>
// js
import dzsVerificationCode from "@/components/dzs-verification-code/index.vue";
components:{dzsVerificationCode},
`

export const code2 = `
// html
<dzs-verification-code v-model="verification_code2" :codeArr="['技','术','部','好','样']"></dzs-verification-code>
// js
import dzsVerificationCode from "@/components/dzs-verification-code/index.vue";
components:{dzsVerificationCode},
`