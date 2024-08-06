
/**基础用法*/ 
export const code1 = `
<template>
    <section>
        <dzs-upload-file @change="change"></dzs-upload-file>
    </section>
</template>
<script>
import dzUploadFile from "@/components/dzs-upload-file"
export default {
    components:{
        dzUploadFile
    },
    methods: {
        change(fileList){
            // do something
        }
    }
}
</script>
`

