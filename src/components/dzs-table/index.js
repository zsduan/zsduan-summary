import dzsTable from "./index.vue";

dzsTable.install = (Vue , options) =>{
    Vue.component(dzsTable.name, dzsTable)
}

export default dzsTable;