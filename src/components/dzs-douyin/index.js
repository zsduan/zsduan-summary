import dzsdDouyin from "./index.vue";

dzsdDouyin.install = (Vue , options) =>{
    Vue.component(dzsdDouyin.name, dzsdDouyin)
}

export default dzsdDouyin;