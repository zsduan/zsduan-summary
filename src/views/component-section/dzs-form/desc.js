
export const tableData = [
    {
        key: "options",
        type: "props",
        parameterType: "Object",
        desc: "配置项",
        remark: "",
        children: [
            {
                key: "formProps",
                type: "props",
                parameterType: "Object",
                desc: "form配置项",
                remark: "和el-form一致",
            },
            {
                key: "formItem",
                type: "props",
                parameterType: "Array",
                desc: "表单项配置",
                remark: "这一项是一个数组，数组中的每一项是一个对象",
                children: [
                    {
                        key: "label",
                        type: "props",
                        parameterType: "String",
                        desc: "label名称 formItem的label",
                        remark: "非必填"
                    },
                    {
                        key: "key(避免更新错误)",
                        type: "props",
                        parameterType: "String",
                        desc: "需要组合的字段 通过key来获取对应的值",
                        remark: "支持xx.xx的参数理论可以支持无限 会返回一个对象"
                    },
                    {
                        key: "type",
                        type: "props",
                        parameterType: "String",
                        desc: "类型",
                        remark: "input | select | radio | checkbox | date | time | timeSelect | switch | uploadImg | editor | uploadFile | divider"
                    },
                    {
                        key: "span",
                        type: "props",
                        parameterType: "Number",
                        desc: "el-col的span",
                        remark: "默认12"
                    },
                    {
                        key: "children",
                        type: "props",
                        parameterType: "String",
                        desc: "多选项的子选项",
                        remark: "当type为select | radio | checkbox | uploadImg | uploadFile  需要传入的数据"
                    },
                    {
                        key: "defaultValue",
                        type: "props",
                        parameterType: "String",
                        desc: "默认值",
                        remark: "优先级低于v-model / v-bind:value"
                    },
                    {
                        key: "isHidden",
                        type: "props",
                        parameterType: "Boolean",
                        desc: "是否隐藏",
                        remark: ""
                    },
                    {
                        key: "props",
                        type: "props",
                        parameterType: "Object",
                        desc: "更多配置项",
                        remark: "原生的el-form-item的props直接写在这里",
                        children : [
                            {
                                key: "tips",
                                type: "props",
                                parameterType: "String",
                                desc: "提示文字",
                                remark: ""
                            },
                            {
                                key: "isSlot",
                                type: "props",
                                parameterType: "Boolean",
                                desc: "是否为el-form-item的slot",
                                remark: ""
                            },
                        ]
                    },
                    {
                        key: "slots",
                        type: "props",
                        parameterType: "Object",
                        desc: "内部组件的插槽",
                        remark: "目前只支持 input类型",
                        children : [
                            {
                                key: "name",
                                type: "props",
                                parameterType: "String",
                                desc: "插槽名称",
                                remark: ""
                            },
                            {
                                key: "text(防止更新错误)",
                                type: "props",
                                parameterType: "String",
                                desc: "显示文字",
                                remark: ""
                            }
                        ]
                    },
                    {
                        key: "rules",
                        type: "props",
                        parameterType: "Array | Object",
                        desc: "规则配置和el-form相同",
                        remark: ""
                    },
                    {
                        key: "isNull",
                        type: "props",
                        parameterType: "Boolean",
                        desc: "在提交时不需要把数据返回的key",
                        remark: ""
                    },
                    {
                        key: "isSlot(避免更新错误)",
                        type: "props",
                        parameterType: "Boolean",
                        desc: "是否为自定义组件",
                        remark: "el-form-item全部替换掉"
                    }
                ]
            }
        ]
    },
    {
        key: "value / v-model",
        type: "props",
        parameterType: "Object",
        desc: "表单的原始数据/修改时的数据",
        remark: ""
    },
    {
        key: "bottonText",
        type: "props",
        parameterType: "Object",
        desc: "底部文字控制",
        remark: "",
        children : [
            {
                key: "submit-text",
                type: "props",
                parameterType: "String",
                desc: "提交按钮文字",
                remark: "默认提交"
            },
            {
                key: "cancel-text",
                type: "props",
                parameterType: "String",
                desc: "取消按钮文字",
                remark: "默认取消"
            },
        ]
    },
    {
        key: "showFooter",
        type: "props",
        parameterType: "Boolean",
        desc: "是否显示底部",
        remark: ""
    },
    {
        key: "showButton",
        type: "props",
        parameterType: "Boolean",
        desc: "是否显示底部按钮",
        remark: ""
    },
    {
        key: "antiShakeTime",
        type: "props",
        parameterType: "Number",
        desc: "防抖时间",
        remark: "默认 1000"
    },
    {
        key: "loadingOption",
        type: "props",
        parameterType: "Object",
        desc: "加载中配置",
        remark: "",
        children : [
            {
                key: "text",
                type: "props",
                parameterType: "String",
                desc: "加载中文字",
                remark: ""
            },
            {
                key: "loading",
                type: "props",
                parameterType: "Boolean",
                desc: "是否显示加载中",
                remark: ""
            },
            {
                key: "background",
                type: "props",
                parameterType: "String",
                desc: "加载中背景颜色",
                remark: ""
            },
            {
                key: "spinner",
                type: "props",
                parameterType: "String",
                desc: "加载图标",
                remark: ""
            },
        ]
    },
    {
        key : 'gutter',
        type : 'props',
        parameterType : 'Number',
        desc : '栅格间隔',
        remark : '默认 20'
    },
    {
        key : 'isScroll',
        type : 'props',
        parameterType : 'Boolean',
        desc : '是否开启滚动',
        remark : '默认 true false时高度自适应'
    },
    {
        key : 'height',
        type : 'props',
        parameterType : 'String',
        desc : '高度',
        remark : '默认 100%'
    },
    {
        key : 'buttonFlex',
        type : 'props',
        parameterType : 'String',
        desc : '底部按钮位置',
        remark : '默认 right  支持 left center right'
    },
    {
        key : 'form-header',
        type: "slot",
        desc: "表单头部插槽",
        remark: ""
    },
    {
        key : 'default',
        type: "slot",
        desc: "表单默认插槽",
        remark: ""
    },
    {
        key: "@onSubmit",
        type: "methods",
        parameterType: "",
        desc: "提交事件 返回一个promise",
        remark: ""
    },
    {
        key: "@onCancel",
        type: "methods",
        parameterType: "",
        desc: "取消事件",
        remark: "会触发reset事件"
    },
    {
        key: "@change",
        type: "methods",
        parameterType: "",
        desc: "改变事件",
        remark: ""
    },
    {
        key: "getFormMethod()",
        type: "ref methods",
        parameterType: "",
        desc: "获取el-form的方法",
        remark: ""
    },
    {
        key: "clearForm()",
        type: "ref methods",
        parameterType: "",
        desc: "将表单重置为初始值",
        remark: ""
    },
    {
        key: "setFormData(data)",
        type: "ref methods",
        parameterType: "",
        desc: "设置表单数据",
        remark: "参数为一个对象 某些时候v-model失败时可以使用"
    },
    {
        key : "key + Before",
        type : "slot" ,
        parameterType : "",
        desc : "表单项的前置插槽",
        remark : "flex布局 key为formItem的key"
    },
    {
        key : "key + After",
        type : "slot" ,
        parameterType : "",
        desc : "表单项的后置插槽",
        remark : "flex布局 key为formItem的key"
    },
    {
        key : "key",
        type : "slot" ,
        parameterType : "",
        desc : "表单项的插槽",
        remark : "key为formItem的key isSlot为true时生效"
    }
]