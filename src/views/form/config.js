/*
 * @Author: zs.duan
 * @Date: 2022-09-28 13:43:24
 * @LastEditors: zs.duan
 * @LastEditTime: 2022-12-26 16:39:51
 * @FilePath: \vue2+js+eui+template\src\views\form\config.js
 */
export const code1 = `
/*
 *@props options = {
    formProps : {} , //from表单属性 和饿了吗表单属性一样
    formItem : [
            {
                label: "", //输入框名称 非必填
                key: "", //输入框key 必填
                type : "", //类型 非必填 默认input 输入框 input select date itme switch checkbox radio uploadImg edit 
                children : [] , //列表数据 非必填
                defaultValue : "" , //默认值 非必填
                isHidden : false , //是否隐藏 非必填
                props:{
                    ...defalut , //内部参数 饿了吗ui相同 type == uploadImg | uploadFile 参数见组件
                    tips : "" , //提示文字信息
                    isSlot : false , //是否在 from-item里面添加新的 slot 具名插槽:key+Children
                },
                slots : { //插槽 非必填
                    name : "" , //插槽名称
                    text : "" , //插槽文字
                },
                rules：[] || { } ,// 规则 饿了吗ui相同 非必填
                isNull : false , //是否不需要添加到提交表单中  非必填
                isSlot : false , //非必填 是否为自定义组件
            }
        ] 
    }
 * @props success_txt 提交按钮文字 非必填
 * @props showBtn 是否显示按钮 非必填
 * @props value / v-model 返回值 表单数据
 * @props fromStatus 表单状态 非必填
 * @props antiShakeTime 防抖时间 非必填
 * @props loadingText loading文字 非必填
 * @props loading 是否显示loading 非必填
 * @props height 高度 非必填
 * @props isFormData 是否为formData 非必填
 * 
 * @methods onSubmit 提交事件 返回当前表单数据
 * @methods onCancel 取消事件
 * 
 * 
*/
    // value / v-model 返回值 表单数据

    // 推荐用计算属性 很方便 只要后面的值改变了 里面就会改变
`

export const code2 = `

<dzs-form :options="formOptions">
    <template #mySlot>
        <el-button>我是自定义组件的button</el-button>
    </template>
</dzs-form>

formOptions(){
    return {
        formProps : {
            "label-width" : "110px",
        },
        formItem : [
            {
                label: "自定义组件", 
                key: "mySlot", 
                type : "input",
                isSlot : true , 
                span : 24
            },
            {
                label: "输入框", 
                key: "input", 
                type : "input",
                rules:[
                    { required: true, message: '请输入输入框名称', trigger: 'blur' },
                ],
                props:{
                    placeholder : "请输入输入框"
                },
                span : 24
            },
            {
                label: "下拉框", 
                key: "select", 
                type : "select",
                rules:[
                    { required: true, message: '请选择下拉框', trigger: 'change' },
                ],
                props:{
                    placeholder : "请选择下拉框",
                    clearable  : true
                },
                children:[
                    {
                        label : "参数1",
                        value : 1
                    },
                    {
                        label : "参数2",
                        value : 2
                    },
                ],
                span : 12
            },
            {
                label : "日期",
                key : "date",
                type : "date",
                span : 12
            },
            {
                label : "开关",
                key : "switch",
                type : "switch",
                span : 12
            },
            {
                label : "",
                key : "divider",
                type : "divider",
                span : 24,
                props:{
                    tips : "我是分割线"
                }
            },
            {
                label: "多选框", 
                key: "checkbox", 
                type : "checkbox",
                rules:[],
                props:{},
                children:[
                    {
                        label : "选项1",
                        value : 1
                    },
                    {
                        label : "选项2",
                        value : 2
                    },
                ],
            },
            {
                label: "单选框 默认值", 
                key: "radio", 
                type : "radio",
                rules:[],
                props:{},
                children:[
                    {
                        label : "选项1",
                        value : 1
                    },
                    {
                        label : "选项2",
                        value : 2
                    },
                ],
                defaultValue : 1
            },
            {
                label: "图片", 
                key: "uploadImg", 
                type : "uploadImg",
                rules:[],
                props:{
                    autoUpload : false
                },
            },
            {
                label: "富文本", 
                key: "edit", 
                type : "edit",
                rules:[],
                props:{},
            },
        ]
    }
}`