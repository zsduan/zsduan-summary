
/**word预览*/ 
export const code1 = `
<template>
    <section>
        <dzs-vue-office :url="url" type="word"></dzs-vue-office>
    </section>
</template>
<script>
import dzsVueOffice from "@/components/dzs-vue-office";
export default {
    components:{
        dzsVueOffice
    },
    data(){
        return {
            url:"" , //支持http:// 或者 https:// 或者 blod://
        }
    },
    methods: {
        change(fileList){
            // do something
        }
    }
}
</script>
`
/**excel预览*/ 
export const code2 = `
<template>
    <section>
        <dzs-vue-office :url="url" type="excel"></dzs-vue-office>
    </section>
</template>
<script>
import dzsVueOffice from "@/components/dzs-vue-office";
export default {
    components:{
        dzsVueOffice
    },
    data(){
        return {
            url:"" , //支持http:// 或者 https:// 或者 blod://
        }
    },
    methods: {
        change(fileList){
            // do something
        }
    }
}
</script>
`;
/**pdf预览*/ 
export const code3 = `
<template>
    <section>
        <dzs-vue-office :url="url" type="pdf"></dzs-vue-office>
    </section>
</template>
<script>
import dzsVueOffice from "@/components/dzs-vue-office";
export default {
    components:{
        dzsVueOffice
    },
    data(){
        return {
            url:"" , //支持http:// 或者 https:// 或者 blod://
        }
    },
    methods: {
        change(fileList){
            // do something
        }
    }
}
</script>`;
/**ppt预览*/ 
export const code4 = `
<template>
    <section>
        <dzs-vue-office :url="url" type="ppt"></dzs-vue-office>
    </section>
</template>
<script>
import dzsVueOffice from "@/components/dzs-vue-office";
export default {
    components:{
        dzsVueOffice
    },
    data(){
        return {
            url:"" , //支持http:// 或者 https:// 或者 blod://
        }
    },
    methods: {
        change(fileList){
            // do something
        }
    }
}
</script>
`;
/**txt预览*/ 
export const code5 = `
<template>
    <section>
        <dzs-vue-office :url="url" type="txt"></dzs-vue-office>
    </section>
</template>
<script>
import dzsVueOffice from "@/components/dzs-vue-office";
export default {
    components:{
        dzsVueOffice
    },
    data(){
        return {
            url:"" , //支持http:// 或者 https:// 或者 blod://
        }
    },
    methods: {
        change(fileList){
            // do something
        }
    }
}
</script>`
