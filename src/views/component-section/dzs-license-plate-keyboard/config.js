export const code1 = `
<template>
    <div>
        <el-input placeholder="请输入车牌号" v-model="plateNumber" class="ipt" @focus="showKeyboard = true"></el-input>
        <dzs-license-plate-keyboard :isShow.sync="showKeyboard" @change="changeKeyboard" @del="del">
        </dzs-license-plate-keyboard>
    </div>
</template>
<script>
import dzsLicensePlateKeyboard from "@/components/dzs-license-plate-keyboard/index.vue";
export default{
    components:{
        dzsLicensePlateKeyboard
    },
    data(){
        return{
            plateNumber:"",
            showKeyboard:false
        }
    },
    methods: {
        changeKeyboard(e) {
            this.plateNumber += e;
        },
        del() {
            this.plateNumber = this.plateNumber.substring(0, this.plateNumber.length - 1)
        }
    }
}
</script>
`