<!--
 * @Author: zs.duan
 * @Date: 2022-09-28 14:12:31
 * @LastEditors: zs.duan
 * @LastEditTime: 2023-01-11 15:33:06
 * @FilePath: \vue2+js+eui+template\src\views\license-plate-number\license-plate-number.vue
-->
<template>
    <div>
        <dzs-header title="车牌号键盘" v-if="!newIndex"></dzs-header>
        <div class="page">
            <h2>基础用法</h2>
            <div class="item">
                <div class="tips-box">点按钮直接打开</div>
                <el-button @click="showKeyboard = true" type="primary">打开键盘</el-button>
                <div class="keyboard">
                    <el-input placeholder="请输入车牌号" v-model="plateNumber" class="ipt" @focus="showKeyboard = true"></el-input>
                    <dzs-keyboard :showKeyboard.sync="showKeyboard" @change="changeKeyboard" @del="del"></dzs-keyboard>
                </div>
            </div>
            <h2>更多功能</h2>
            <div class="item">
                <div class="tips-box">自己在源代码去看</div>
            </div>
            <h2>组件源代码下载</h2>
            <div class="item">
                <a target="_blank" href="https://github.com/zsduan/zsduan-summary/blob/master/src/components/dzs-keyboard/index.vue">键盘组件下载地址</a>
            </div>
        </div>
        <el-backtop :visibility-height="20" v-if="!newIndex"></el-backtop>
    </div>
</template>
<script>
import dzsKeyboard from "@/components/dzs-keyboard/index.vue";
export default {
    props:{
        newIndex : {
            type : Boolean,
            default:()=>{
                return false
            }
        }
    },
    components: {
        dzsKeyboard,
    },
    data() {
        return {
            showKeyboard: true,
            plateNumber : ""
        };
    },
    methods:{
        changeKeyboard(e){
            this.plateNumber += e;
        },
        del(){
            this.plateNumber = this.plateNumber.substring(0 , this.plateNumber.length - 1)
        }
    }
   
};
</script>
<style lang="less" scoped>
.keyboard{
    position: relative;
    height: 320px;
    .ipt{
        margin-top: 10px;
        width: 280px;
    }
}
.page {
    .item {
        padding: 10px 0;
        a{
            display: inline-block;
            padding: 10px 20px;
            text-align: center;
            border: 1px solid #ccc;
            border-radius: 10px;
        }
    }
}
</style>