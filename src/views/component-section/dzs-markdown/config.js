
export const code1 = `
<template>
    <dzs-markdown v-model="value"></dzs-markdown>
</template>
<script>
import dzsMarkdown from "@/components/dzs-markdown/index.vue"
export default{
    components:{
        dzsMarkdown
    },
    data(){
        return{
            value:"",
        }
    },
}
</script>
`