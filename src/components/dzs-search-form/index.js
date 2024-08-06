import dzsSearchForm from "./index.vue";

dzsSearchForm.install = (Vue , options) =>{
    Vue.component(dzsSearchForm.name, dzsSearchForm)
}

export default dzsSearchForm;