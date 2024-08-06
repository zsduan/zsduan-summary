
/**基础用法*/ 
export const code1 = `
<template>
    <section>
        <public-item title="基础用法">
            <dzs-upload-img @change="change"></dzs-upload-img>
        </public-item>
    </section>
</template>
<script>
import dzsUploadImg from "@/components/dzs-upload-img"
export default {
    components:{
        dzsUploadImg
    },
    methods: {
        change(fileList){
            // do something
        }
    }
}
</script>
`