<!--
 * @Author: zs.duan
 * @Date: 2023-01-15 15:09:17
 * @LastEditors: zs.duan
 * @LastEditTime: 2023-01-15 16:13:48
 * @FilePath: \vue2+js+eui+template\src\components\dzs-new-year\dzs-new-year.vue
-->
<template>
    <div class="new_year_box">
        <div class="year_box">
            <div class="year_num">2023</div>
            <ul>
                <li class="pinyin" v-for="(item , index) in showInfo.pinyin" :key="index">
                    {{item}}
                </li>
            </ul>
            <ul>
                <li class="text" v-for="(item , index) in showInfo.text" :key="index">
                    {{item}}
                </li>
            </ul>
        </div>
    </div>
</template>
<script>

export default {
    props:{
        
    },
    data(){
        return {
            list : [
                {
                    pinyin : ["xīn","nián",'kuài','lè'],
                    text : ['新','年','快','乐']
                },
                {
                    pinyin : ["tù","fēi",'méng','jìn'],
                    text : ['兔','飞','猛','进']
                },
                {
                    pinyin : ["wàng","shì",'rú','yì'],
                    text : ['万','事','如','意']
                }
            ],
            showInfo : {}
        }
    },
    created(){
        // Math.random()*(this.list.length-m)+m
        this.showInfo = this.list[parseInt(Math.random()*this.list.length,10)]
    }
}
</script>
<style lang="less" scoped>
    .new_year_box{
        user-select: none;
        -ms-user-select: none;
        -o-user-select: none;
        -webkit-user-select: none;
        // background: #DC0F2E;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        ul{
            display: flex;
            justify-content: center;
            li{
                color: transparent;
                font-size: 90px;
                font-weight: bold;
                width: 260px;
                text-align: center;
                -webkit-text-stroke: 5px #DC0F2E;
                // background: linear-gradient(0deg, #241b8c 0%, #244ac9 10%, #cce4ff 60%);
                -webkit-background-clip: text;
            }
            .pinyin{
                color: #DC0F2E;
            }
        }
        .year_box{
            position: relative;
            .year_num{
                color: transparent;
                font-size: 50px;
                -webkit-text-stroke: 2px #DC0F2E;
                -webkit-background-clip: text;
                letter-spacing: 10px;
                position: absolute;
                transform-origin: 0% 100%;
                // transform: rotateZ(325deg) translateY(-50%);
                left: 84%;
                top: 120%;
                font-family: '微软雅黑', Courier, monospace;
            }
        }
    }
</style>