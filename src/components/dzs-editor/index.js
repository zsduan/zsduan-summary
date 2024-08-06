import dzsEditor from "./index.vue";

dzsEditor.install = (Vue , options) =>{
    Vue.component(dzsEditor.name, dzsEditor)
}

export default dzsEditor;