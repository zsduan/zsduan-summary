export const code1 = `

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
                label: "带有lable自定义组件",
                key: "lableSlot",
                type: "input",
                span: 24,
                props: {
                    isSlot: true
                }
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