import dzsPostman from "./index.vue";

dzsPostman.install = (Vue , options) =>{
    Vue.component(dzsPostman.name, dzsPostman)
}

export default dzsPostman;