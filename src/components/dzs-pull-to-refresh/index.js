import dzsPullToRefresh from "./index.vue";

dzsPullToRefresh.install = (Vue , options) =>{
    Vue.component(dzsPullToRefresh.name, dzsPullToRefresh)
}

export default dzsPullToRefresh;