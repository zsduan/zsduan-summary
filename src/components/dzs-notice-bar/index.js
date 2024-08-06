import dzsNoticeBar from "./index.vue";

dzsNoticeBar.install = (Vue , options) =>{
    Vue.component(dzsNoticeBar.name, dzsNoticeBar)
}

export default dzsNoticeBar;