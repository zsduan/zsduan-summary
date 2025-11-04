export const code1 = `
<template>
    div >
        <dzs-ip-input v-model="value"></dzs-ip-input>
    </div>
</template>
import dzsIpInput from "@/components/dzs-ip-input";
export default {
    components: {
        dzsIpInput
    },
    data(){
        return {
            value : ''
        }
    }
}
`

