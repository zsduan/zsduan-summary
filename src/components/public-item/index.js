import publicItem from "./index.vue";

publicItem.install = (Vue , options) =>{
    Vue.component(publicItem.name, publicItem)
}

export default publicItem;