<template>
    <dzs-dialog :isShow="isShow" title="用户管理"  @close="close" @open="open">
        <dzs-form v-model="formData" :options="formOption" @onSubmit="onSubmit" @onCancel="onCancel"></dzs-form>
    </dzs-dialog>
</template>
<script>
/**
 * 以下这2个组件 建议全局引用 因为后台都会用到
 * */
import dzsForm from "@/components/dzs-form";
import dzsDialog from "@/components/dzs-dialog"
export default{
    components:{
        dzsForm,
        dzsDialog
    },
    props : {
        isShow : {
            type : Boolean,
            default : false
        },
        dialogData : {
            type : Object,
            default : () => {
                return {}
            }
        }
    },
    computed:{
        formOption(){
            return {
                formProps : {
                    labelWidth : '100px'
                },
                formItem : [
                    {
                        label : 'ID',
                        key : 'id',
                        type : 'input',
                        isHidden : true
                    },
                    {
                        label : '用户名',
                        key : 'username.xxx',
                        type : 'input',
                        isHidden : true
                    },
                    {
                        label : '年龄',
                        key : 'age',
                        type : 'number',
                        rules : [
                            {
                                required : true,
                                message : '请输入年龄',
                                trigger : 'blur'
                            }
                        ]
                    },
                    {
                        label : '性别',
                        key : 'sex',
                        type : 'select',
                        children : [
                            {
                                label : '男',
                                value : '男'
                            },
                            {
                                label : '女',
                                value : '女'
                            }
                        ]
                    },
                    {
                        label : '地址',
                        key : 'address',
                        type : 'input',
                        props : {
                            type : 'textarea',
                            rows : 3
                        }
                    },
                ]
            }
        }
    },
    data(){
        return {
            formData : {}
        }
    },
    methods:{
        /**打开处理*/
        open(){
            if(this.dialogData.id){
                this.initFormData(this.dialogData);
            }
        }, 
        /**关闭处理*/
        close(){
            this.initFormData();
            this.$emit("update:isShow", false);
            this.$emit("close");
        },
        /**取消*/ 
        onCancel () {
            this.close();
        },
        /**初始化表单*/
        initFormData(data){
            this.formData = {
                name: '',
                age: '',
                sex: '',
                address: '',
            }
            if(data)Object.assign(this.formData, data);
        }, 
        /**提交*/
        onSubmit() {
            this.$emit('onHoldSearch');
            this.close();
        }, 
    }
}
</script>