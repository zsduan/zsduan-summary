import dzsVueOffice from "./index.vue";

dzsVueOffice.install = (Vue , options) =>{
    Vue.component(dzsVueOffice.name, dzsVueOffice)
}

export default dzsVueOffice;