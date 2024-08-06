import dzsCode from "./index.vue";

dzsCode.install = (Vue , options) =>{
    Vue.component(dzsCode.name, dzsCode)
}

export default dzsCode;