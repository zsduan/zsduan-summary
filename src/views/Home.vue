<!--
 * @Author: zs.duan
 * @Date: 2022-09-20 13:49:02
 * @LastEditors: zs.duan
 * @LastEditTime: 2022-09-28 14:27:18
 * @FilePath: \vue2+js+eui+template\src\views\Home.vue
-->
<template>
    <div class="home">
        <h1 class="home-title">zs.duan的自我总结</h1>
        <div class="components-box piblic-box">
            <h2 class="title">组件篇(基于饿了吗ui)</h2>
            <ul>
                <li v-for="(item,index) in componentsList" :key="index" @click="goNav(item.path)">{{item.title}}</li>
            </ul>
        </div>
        <div class="components-box piblic-box">
            <h2 class="title">js篇</h2>
            <ul>
                <li v-for="(item,index) in jsList" :key="index" @click="goNav(item.path)">{{item.title}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
import {componentsList , jsList} from "../assets/data/homeData"
export default {
    name: "Home",
    components: {},
    data(){
        return {
            componentsList : componentsList.filter(item => {return item.is_show == true}),
            jsList : jsList.filter(item => {return item.is_show == true})
        }
    },
    methods:{
        goNav(path){
            if(!path){
                this.$message({
                    message: '功能暂未开放',
                    type: 'info'
                });
                return ;
            }
            this.$router.push({path : path})
        }
    }
};
</script>
<style lang="less" scoped>
.not-select{
    -moz-user-select: none;
    /*火狐*/
    -webkit-user-select: none;
      
    /*webkit浏览器*/
    -ms-user-select: none;
    -ms-overflow-style: none;
    /*IE10*/
    -khtml-user-select: none;
    /*早期浏览器*/
    user-select: none;
}
.home-title {
    font-size: 36px;
    text-align: center;
}
.piblic-box {
    max-width: 1200px;
    margin: 0 auto;
    .title{
        font-size: 20px;
        padding-top: 30px;
    }
    ul{
        display: grid;
         /* 宽度平均分成4份 */
        grid-template-columns: repeat(4,1fr);
        column-gap:20px ; //左右间距
        row-gap: 40px; //上下间距
        margin-top: 40px;
        .not-select();
        li{
            height: 100px;
            line-height: 100px;
            box-shadow: 0 4px 8px 6px rgba(7, 17, 21, 0.06);
            text-align: center;
            font-size: 26px;
            border: 10px;
            cursor: pointer;
            transition: all .3s;
            color: var(--fontColor);
            &:hover{
                box-shadow: 0 4px 8px 10px rgba(7, 17, 21, 0.1);
            }
        }
    }
}
</style>
