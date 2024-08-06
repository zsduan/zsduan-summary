export const code1 = `
<template>
    <dzs-code-editor v-model="code"></dzs-code-editor>
</template>
import dzsCodeEditor from "@/components/dzs-code-editor"
export default {
    components: {
        dzsCodeEditor
    },
    data(){
        return {
            code : ""
        }
    }
}
`