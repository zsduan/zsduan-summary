<template>
    <div>
        <div class="page">
            <h2>基础用法</h2>
            <div class="item">
                <dzs-editor ></dzs-editor>
                <dzs-code title="源代码" :value="code1"></dzs-code>
            </div>
            <h2>默认值</h2>
            <div class="item" v-if="shoeDefault">
                <dzs-editor :value.sync="defaultValue"></dzs-editor>
                <dzs-code title="源代码" :value="code2"></dzs-code>
            </div>
            <h2>参数说明</h2>
            <div class="item">
                <dzs-table :tableHeader="descHeader" :list="descData" :showOperation="false" :tableOptions="descTableOptions">
                </dzs-table>
            </div>
            <h2>更多功能</h2>
            <div class="item">
                <div class="tips-box">自己在源代码去看</div>
            </div>
            <h2>组件源代码下载</h2>
            <div class="item">
                <a target="_blank" href="https://github.com/zsduan/zsduan-summary/blob/master/src/components/dzs-editor/index.vue">富文本组件下载地址</a>
            </div>
        </div>
        <el-backtop :visibility-height="20" ></el-backtop>
    </div>
</template>
<script>
import dzsEditor from "@/components/dzs-editor/index.vue";
import {code1 , code2} from "./config";
import {descHeader , descData , descTableOptions} from "./desc";
export default {
    components : {
        dzsEditor
    },
    data(){
        return {
            code1 : code1,
            code2 : code2,
            defaultValue : "<p>我是默认值</p>",
            shoeDefault : false,
            descHeader : descHeader,
            descData : descData,
            descTableOptions : descTableOptions
        }
    },
    mounted(){
        setTimeout(()=>{
            this.shoeDefault = true;
        },3000)
    }
}
</script>
<style lang="less" scoped>
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