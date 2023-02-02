
<template>
    <div>
        <dzs-header title="设置html" v-if="!newIndex"></dzs-header>
        <div class="page">
            <div class="tips-box">目前只支持图片适应屏幕模式 其他模式暂时不支持</div>
            <h2>基础用法</h2>
            <div class="item">
                <div class="tips-box">原始尺寸</div>
                <div v-html="oldHtml"></div>
                <div class="tips-box">处理后尺寸 不超过100%</div>
                <div v-html="newHtml"></div>
                <dzs-code title="源代码" :value="code1"></dzs-code>
            </div>
            <h2>源代码下载/查看</h2>
            <div class="item">
                <a target="_blank" href="https://github.com/zsduan/zsduan-summary/blob/master/src/utils/sethtml.js">下载/查看地址</a>
            </div>
        </div>
        <el-backtop :visibility-height="20" v-if="!newIndex">
        </el-backtop>
    </div>
</template>
<script>
import setHtml from "../../utils/sethtml"
import {code1} from "./config"
import imgUrl from "./image/1.jpg"
export default {
    props:{
        newIndex : {
            type : Boolean,
            default:()=>{
                return false
            }
        }
    },
    data(){
        return {
            oldHtml : `<img src='${imgUrl}' />`,
            code1 : code1,
            newHtml : ""
        }
    },
    mounted(){
        this.mysetHtml();
    },
    methods:{
        mysetHtml(){
            setHtml({
                html : this.oldHtml,
                success : (res)=>{
                    this.newHtml = res;
                },
            })
        }
        
    }
}
</script>
<style lang="less" scoped>
</style>