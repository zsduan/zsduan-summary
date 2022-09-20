<!--
 * @Author: zs.duan
 * @Date: 2022-09-20 16:14:21
 * @LastEditors: zs.duan
 * @LastEditTime: 2022-09-20 16:18:21
 * @FilePath: \vue2+js+eui+template\src\components\dzs-header\index.vue
-->
<template>
    <div>
        <div class="title">{{title}}</div>
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
    }
}
</script>
<style lang="less" scoped>
.title {
    font-size: 36px;
    text-align: center;
}
</style>