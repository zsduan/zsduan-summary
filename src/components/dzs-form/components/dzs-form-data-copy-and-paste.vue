<template>
    <div class="dzs-form-data-copy-and-paste">
        <dzs-button icon="el-icon-document-copy" type='primary' text @click="copyData">复制表单数据</dzs-button>
        <dzs-button icon="el-icon-document" type='primary' text @click="pasteData">粘贴表单数据</dzs-button>
    </div>
</template>
<script>
import {copyToClipboard} from "../tool.js";
import deepCopy from "../deepCopy.js";
import dzsButton from "../../dzs-button";
export default {
    name: "dzsFormDataCopyAndPaste",
    components : {
        dzsButton
    },
    props: {
        formData: {
            type: Object,
            default: () => {
                return {}
            }
        },
        simple : {
            type : String,
            default : () => {
                return ''
            }
        },
        formItem : {
            type : Array,
            default : () => {
                return []
            }
        },
    },
    methods: {
        copyData() {
            let formData = deepCopy(this.formData);
            this.formItem.forEach(item => {
                if(item.isHidden){
                    formData[item.key] = ""
                }
            })
            formData = this.transformKeysToNestedObject(formData);

            localStorage.setItem('dzs-form-data-copy', JSON.stringify({
                formData : formData,
                simple : this.simple
            }))
            copyToClipboard(JSON.stringify(formData));
            this.$message.success('标准组件值拷贝成功,部分数据丢失')
        },
        pasteData(){
            let data = localStorage.getItem('dzs-form-data-copy');
            if(!data){
                this.$message.error('没有复制的内容');
                return ;
            }
            data = JSON.parse(data);
            if(data.simple != this.simple){
                this.$message.error('复制的内容和当前表单不一致');
                return;
            }
            // 确认框
            this.$confirm('是否覆盖当前表单内容?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.$emit('paste', data.formData)
            }).catch(() => {})
        },
        /**格式化值*/
        transformKeysToNestedObject(obj) {
            let result = {};

            // 获取对象的所有键（避免在for-in循环中检查hasOwnProperty）  
            const keys = Object.keys(obj);

            for (let i = 0; i < keys.length; i++) {
                const keyPath = keys[i].split('.');
                const value = obj[keys[i]];
                let currentNode = result;

                // 遍历嵌套键数组，除了最后一个键  
                for (let j = 0; j < keyPath.length - 1; j++) {
                    const currentKey = keyPath[j];

                    // 使用逻辑或运算符来避免额外的检查  
                    currentNode = currentNode[currentKey] || (currentNode[currentKey] = {});
                }

                // 将最后一个键和值赋给当前节点  
                currentNode[keyPath[keyPath.length - 1]] = value;
            }

            return result;
        },
    }

}
</script>
<style lang="scss" scoped>
.dzs-form-data-copy-and-paste{
    display: flex;
    justify-content : flex-end;
}
</style>