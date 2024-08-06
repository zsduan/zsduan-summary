import dzsMarkdown from "./index.vue";

dzsMarkdown.install = (Vue , options) =>{
    Vue.component(dzsMarkdown.name, dzsMarkdown)
}

export default dzsMarkdown;