export const code1 = `
<template>
    <dzs-editor @save="save"></dzs-editor>
</template>
<script>
import dzsEditor from "@/components/dzs-editor/index.vue";
exdefault {
    components : {
        dzsEditor
    },
    methods:{
        save(val) {
            // do something
        }
    }
}
</script>
`

export const code2 = `
<template>
    <dzs-editor v-model="value" @save="save"></dzs-editor>
</template>
<script>
import dzsEditor from "@/components/dzs-editor/index.vue";
exdefault {
    components : {
        dzsEditor
    },
    data(){
        return {
            value : "<p>这是默认值</p>"
        }
    },
    methods:{
        save(val) {
            // do something
        }
    }
}
</script>
`