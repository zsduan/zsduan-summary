import dzsUploadImg from "./index.vue";

dzsUploadImg.install = (Vue , options) =>{
    Vue.component(dzsUploadImg.name, dzsUploadImg)
}

export default dzsUploadImg;