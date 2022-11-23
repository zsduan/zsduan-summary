<!--
 * @Author: zs.duan
 * @Date: 2022-09-20 16:14:21
 * @LastEditors: zs.duan
 * @LastEditTime: 2022-11-23 12:35:56
 * @FilePath: \vue2+elui+template\src\components\dzs-header\index.vue
-->
<template>
    <div>
        <div class="header-box">
            <div class="top-box">
                <div class="go-home" @click="goHome">
                    <i class="el-icon-s-home"></i>
                    <span>返回首页</span>
                </div>
                <div class="title-box">
                    <span v-for="(item , index) in setTitle" :key="index" class="title" :style="{animationDelay : index * 0.1 + 's'}">{{item}}</span>
                </div>
            </div>
        </div>
        <div class="top-empty"></div>
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
    computed:{
        setTitle : function(){
            return this.title.split("");
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
.header-box{
    width: 100%;
    height: 50px;
    box-shadow: 3px 3px 3px rgba(100, 100, 100, 0.3);
    position: fixed;
    background: #fff;
    z-index: 999;
}
.top-box{
    display: flex;
    justify-content: center;
    align-items: flex-end;
    width: 1200px;
    left: 50%;
    transform: translateX(-50%);
    position: fixed;
    z-index: 999;
    
    .go-home{
        font-size: 18px;
        flex: 2;
        cursor: pointer;
    }
    .title-box {
        text-align: center;
        flex: 22;
        .title{
            font-size: 30px;
            display: inline-block;
            padding-left: 5px;
            animation: shadowing 1s ease-in-out infinite alternate;
            &:first-child{
                padding-left: 0;
            }
        }
    }

    @keyframes shadowing {
        to{
            color: var(--ThemeColor);
        }
    }
}
.top-empty{
    width: 100%;
    height: 50px;
}
</style>