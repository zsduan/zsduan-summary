import dzsForm from "./index.vue";

dzsForm.install = (Vue , options) =>{
    Vue.component(dzsForm.name, dzsForm)
}

dzsForm.version = '20250123';

export default dzsForm;