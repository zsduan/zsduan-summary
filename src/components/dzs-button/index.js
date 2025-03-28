import dzsButton from "./index.vue";

dzsButton.install = (Vue , options) =>{
    Vue.component(dzsButton.name, dzsButton)
}

export default dzsButton;