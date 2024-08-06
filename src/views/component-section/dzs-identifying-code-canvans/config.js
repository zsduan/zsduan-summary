/*
 * @Author: zs.duan
 * @Date: 2022-12-26 15:32:46
 * @LastEditors: zs.duan
 * @LastEditTime: 2022-12-26 15:35:42
 * @FilePath: \vue2+js+eui+template\src\views\VerificationCode\config.js
 */
export const code1 = `
<template>
    <dzs-identifying-code-canvans v-model="code"></dzs-identifying-code-canvans>
</template>
<script>
import dzsIdentifyingCodeCanvans from "@/components/dzs-identifying-code-canvans"
exdefault {
    components : {
        dzsIdentifyingCodeCanvans
    },
    data(){
        return {
            code : ""
        }
    },
}
</script>
`

export const code2 = `
<template>
    <dzs-identifying-code-canvans v-model="code" :codeArr="['技','术','部','好','样']"></dzs-identifying-code-canvans>
</template>
<script>
import dzsIdentifyingCodeCanvans from "@/components/dzs-identifying-code-canvans"
exdefault {
    components : {
        dzsIdentifyingCodeCanvans
    },
    data(){
        return {
            code : ""
        }
    },
}
</script>
`