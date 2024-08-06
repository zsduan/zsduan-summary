import dzsHeaderButton from "./index.vue";

dzsHeaderButton.install = (Vue , options) =>{
    Vue.component(dzsHeaderButton.name, dzsHeaderButton)
}

export default dzsHeaderButton;