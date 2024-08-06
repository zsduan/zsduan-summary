import dzsUploadFile from "./index.vue";

dzsUploadFile.install = (Vue , options) =>{
    Vue.component(dzsUploadFile.name, dzsUploadFile)
}

export default dzsUploadFile;