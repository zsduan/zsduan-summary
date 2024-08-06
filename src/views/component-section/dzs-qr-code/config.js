export const code1 = `
<template>
    <section>
        <dzs-qr-code :option="options"></dzs-qr-code>
    </section>
</template>
<script>
import dzsQrCode from "@/components/dzs-qr-code";
export default {
    components: {
        dzsQrCode,
    },
    data() {
        return {
            options : {
                value : "https://anran233.com",
                size : 200,
                margin : 4,
                fgColor : "#000000",
                bgColor : "#ffffff",
                correctLevel : "H",
                logo : "https://anran233.com/img/Applet.jpg",
                logoWidth : 50,
                logoHeight : 50,
                text : "zs.duan的总结",
                font: "bold 16px Arial",
                fontColor: "#000000",
                lineWidth: 2,
                lineColor: "#000000",
                showBoder: true,
            },
        }
    },
    methods: {
        
    }
}
</script>
<style lang="scss" scoped></style>
`

