import dzsQrCode from "./index.vue";

dzsQrCode.install = (Vue , options) =>{
    Vue.component(dzsQrCode.name, dzsQrCode)
}

export default dzsQrCode;