<!--
 * @Author: zs.duan
 * @Date: 2022-09-20 16:57:00
 * @LastEditors: zs.duan
 * @LastEditTime: 2022-09-21 10:08:56
 * @FilePath: \vue2+js+eui+template\src\components\dzs-code\index.vue
-->
<template>
    <div class="code-box">
        <div class="header-box">
            <div class="title">{{title}}</div>
            <div class="copy" @click="copyToClipboard" v-if="isShowCopy && value">复制</div>
        </div>
        <pre class="pre" v-if="value">
            {{value}}
        </pre>
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: "dzs-code",
    props: {
        title: {
            type: String,
            default: () => {
                return "";
            },
        },
        value : {
            type : String,
            default :() =>  {
                return ""
            }
        },
        isShowCopy : {
            type : Boolean,
            default : ()=>{
                return true
            }
        }
    },
    methods:{
        copyToClipboard() {
            if(!this.value){
                this.$notify({
                    message: '没有复制内容',
                    type: 'warning'
                });
                return ;
            }
            let input = document.createElement("input");
            input.value = this.value;
            document.body.appendChild(input);
            input.select();
            document.execCommand("copy");
            document.body.removeChild(input);
            this.$notify({
                message: '已经复制到剪贴板',
                type: 'success'
            });
        }
    }
};
</script>
<style lang="less" scoped>
.code-box {
    box-shadow: 0 4px 8px 6px rgba(7, 17, 21, 0.06);
    border: 10px;
    padding: 10px;
    margin: 10px 0;
    border-radius: 5px;
    .title {
        font-size: 16px;
        font-weight: 500;
    }
    .header-box{
        display: flex;
        justify-content: space-between;
        .copy{
            cursor: pointer;
            &:hover{
                color : var(--ThemeColor)
            }
        }
    }
    .pre{
        font-weight: 500;
        font-size: 16px;
        line-height: 26px;
    }
}
</style>