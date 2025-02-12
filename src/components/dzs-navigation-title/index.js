import dzsNavigationTitle from "./index.vue";

dzsNavigationTitle.install = (Vue , options) =>{
    Vue.component(dzsNavigationTitle.name, dzsNavigationTitle)
}

export default dzsNavigationTitle;