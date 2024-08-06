import dzsForm from "./index.vue";

dzsForm.install = (Vue , options) =>{
    Vue.component(dzsForm.name, dzsForm)
}

export default dzsForm;