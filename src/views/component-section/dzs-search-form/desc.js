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
                        key: "key(防止更新失败)",
                        type: "props",
                        parameterType: "String",
                        desc: "需要组合的字段 通过key来获取对应的值",
                        remark: "支持xx.xx的参数理论可以支持无限"
                    },
                    {
                        key: "type",
                        type: "props",
                        parameterType: "String",
                        desc: "类型",
                        remark: "input | select | checkbox | date | time | switch | radio"
                    },
                    {
                        key: "span",
                        type: "props",
                        parameterType: "Number",
                        desc: "el-col的span",
                        remark: "默认6"
                    },
                    {
                        key: "children",
                        type: "props",
                        parameterType: "String",
                        desc: "当type为select | radio | checkbox时，需要传入的数据",
                        remark: ""
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
                                key: "text",
                                type: "props",
                                parameterType: "String",
                                desc: "插槽的名称",
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
                        key: "isSlot(防止更新失败)",
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
        desc: "按钮配置",
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
                key: "reset-text",
                type: "props",
                parameterType: "String",
                desc: "重置按钮文字",
                remark: "默认重置"
            },
        ]
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
        key: "btnIcon",
        type: "props",
        parameterType: "String",
        desc: "搜索按钮的icon",
        remark: ""
    },
    {
        key  : "default",
        type: "slot",
        parameterType: "",
        desc: "默认插槽",
        remark: ""
    },
    {
        key: "@onSearch",
        type: "methods",
        parameterType: "",
        desc: "提交事件 返回一个promise",
        remark: ""
    },
    {
        key: "@onReset",
        type: "methods",
        parameterType: "",
        desc: "重置事件",
        remark: ""
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
        key: "button",
        type: "slot",
        parameterType: "",
        desc: "搜索栏按钮插槽",
        remark: ""
    }
]