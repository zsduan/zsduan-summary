export const code1 = `
<template>
    <div>
        <dzs-postman :request="request"></dzs-postman>
    </div>
</template>

<script>
import dzsPostman from '@/components/dzs-postman/index.vue';
import request from "@/tool/request/index";
export default {
    components: {
        dzsPostman
    },
    data(){
        return{
            request : request
        }
    }
}
</script>
`