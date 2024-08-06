import dzsDialog from "./index.vue";

dzsDialog.install = (Vue , options) =>{
    Vue.component(dzsDialog.name, dzsDialog)
}

export default dzsDialog;