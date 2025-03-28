import dzsArticleItem from "./index.vue";

dzsArticleItem.install = (Vue , options) =>{
    Vue.component(dzsArticleItem.name, dzsArticleItem)
}

export default dzsArticleItem;