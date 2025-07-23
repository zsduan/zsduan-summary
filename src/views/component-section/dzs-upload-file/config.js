
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
/**按钮模式*/ 
export const code2 = `
<template>
    <section>
        <dzs-upload-file :isButton="true" @change="change"></dzs-upload-file>
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

/**不显示提示*/ 
export const code3 = `
<template>
    <section>
        <dzs-upload-file :isOpenTip="false" :isButton="true" @change="change"></dzs-upload-file>
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
