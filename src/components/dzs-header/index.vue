<!--
 * @Author: zs.duan
 * @Date: 2022-09-20 16:14:21
 * @LastEditors: zs.duan
 * @LastEditTime: 2022-09-21 11:33:29
 * @FilePath: \vue2+js+eui+template\src\components\dzs-header\index.vue
-->
<template>
    <div>
        <div class="top-box">
            <div class="go-home" @click="goHome">返回首页</div>
            <div class="title">{{title}}</div>
        </div>
    </div>
</template>
<script>
export default {
    name : "dzs-header",
    props : {
        title : {
            type : String,
            default : ()=>{
                return "zs.duan的个人总结"
            }
        }
    },
    methods:{
        goHome(){
            this.$router.push({path : "/"})
        }
    }
}
</script>
<style lang="less" scoped>

.top-box{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1200px;
    margin: 0 auto;
    .go-home{
        font-size: 16px;
        flex: 2;
        cursor: pointer;
    }
    .title {
        font-size: 36px;
        text-align: center;
        flex: 22;
    }
}
</style>