export const code1 = `
<template>
    <section>
        <dzs-slide-verification :isShow.sync="isShow" @success="success">
        </dzs-slide-verification>
    </section>
</template>
<script>
import dzsSlideVerification from "@/components/dzs-slide-verification"
export default {
    components: {
        dzsSlideVerification
    },
    data() {
        return {
            isShow: true
        }
    },
    methods: {
        success() {
            // do something
        }
    }
}
</script>
`