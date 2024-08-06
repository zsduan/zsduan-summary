export const code1 = `
<template>
    <dzs-header-button @btnClick='btnClick'></dzs-header-button>
</template>
<script>
import dzsHeaderButton from "@/components/dzs-header-button";
exdefault {
    components : {
        dzsHeaderButton
    },
    methods:{
        btnClick(val) {
            // do something
        }
    }
}
</script>
`