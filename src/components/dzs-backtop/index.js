import dzsBacktop from "./index.vue";

dzsBacktop.install = (Vue , options) =>{
    Vue.component(dzsBacktop.name, dzsBacktop)
}

export default dzsBacktop;