export const code1 = `
// 只需要提供需要显示的内容即可
// html
<dzs-qr-code :option="options1"></dzs-qr-code>

// js
import dzsQrCode from "@/components/dzs-qr-code/index.vue";
options1 : {
    value : "https://anran233.com",
}
`

export const code2 = `
// html
<dzs-qr-code :option="options1"></dzs-qr-code>

// js
import dzsQrCode from "@/components/dzs-qr-code/index.vue";
options1 : {
    value : "https://anran233.com",
    size : 300, //二维码大小
}
`

export const code3 = `
// html
<dzs-qr-code :option="options1"></dzs-qr-code>

// js
import dzsQrCode from "@/components/dzs-qr-code/index.vue";
options3 : {
    value : "https://anran233.com",
    logo : "https://anran233.com/img/Applet.jpg",
}
`