<!--
 * @Author: zs.duan
 * @Date: 2021-12-20 16:33:42
 * @LastEditors: zs.duan
 * @LastEditTime: 2022-12-26 16:34:41
 * @FilePath: \vue2+js+eui+template\src\components\dzs-form\index.vue
-->
<template>
    <div class="form-box">
        <el-form v-loading="loading" :element-loading-text="loadingText" v-bind="{ ...formProps }" :model="fromModel"
            :rules="fromRules" :label-position="labelPosition" ref="dzsForm"
            :class="['ruleForm', loading ? 'noScroll' : '']">
            <!-- 自定义头部 -->
            <el-row :gutter="10">
                <div v-for="(item, index) in formItem" :key="index">
                    <el-col :span="item.span ? item.span : 24" v-if="!item.isHidden">
                        <!-- 自定义组件 -->
                        <template v-if="item.isSlot">
                            <slot :name="item.key"></slot>
                        </template>
                        <template v-if="!item.isSlot">
                            <el-form-item :label="item.label" :prop="item.key">
                                <!-- 输入框 -->
                                <template v-if="item.type == 'input' || !item.type">
                                    <el-input v-model="fromModel[item.key]" v-bind="{ ...item.props }"
                                        @input="changeVaule($event, item.key)"
                                        :placeholder="getPlaceholder(item)"></el-input>
                                </template>

                                <!-- 数字输入框 -->
                                <template v-if="item.type == 'number'">
                                    <el-input-number v-model="fromModel[item.key]" v-bind="{ ...item.props }"
                                        @input="changeVaule($event, item.key)"
                                        :placeholder="getPlaceholder(item)"></el-input-number>
                                </template>

                                <!-- 选择框 -->
                                <template v-if="item.type == 'select'">
                                    <el-select v-model="fromModel[item.key]" v-bind="{ ...item.props }"
                                        @input="changeVaule($event, item.key)"
                                        :placeholder="getPlaceholder(item, 'select')">
                                        <el-option style="padding : 0 6px;" v-for="(option, idx) in item.children"
                                            :key="option.value + (idx).toString()" :label="option.label"
                                            :value="option.value"></el-option>
                                    </el-select>
                                </template>

                                <!-- 日期选择器 -->
                                <template v-if="item.type == 'date'">
                                    <el-date-picker v-model="fromModel[item.key]" v-bind="{ ...item.props }"
                                        @input="changeVaule($event, item.key)"
                                        :placeholder="getPlaceholder(item, 'select')"></el-date-picker>
                                </template>

                                <!-- 颜色选择器 -->
                                <template v-if="item.type == 'color'">
                                    <el-color-picker v-model="fromModel[item.key]" v-bind="{ ...item.props }"
                                        @input="changeVaule($event, item.key)"></el-color-picker>
                                </template>

                                <!-- 开关 -->
                                <template v-if="item.type == 'switch'">
                                    <el-switch v-model="fromModel[item.key]" v-bind="{ ...item.props }"
                                        @input="changeVaule($event, item.key)"></el-switch>
                                </template>

                                <!-- 多选框 -->
                                <template v-if="item.type == 'checkbox'">
                                    <el-checkbox-group v-model="fromModel[item.key]" v-bind="{ ...item.props }"
                                        @change="changeVaule($event, item.key)">
                                        <el-checkbox class="items" v-for="(option, idx) in item.children"
                                            v-bind="{ ...option.props }" :key="option.value + idx" :label="option.value">{{
                                                option.label }}</el-checkbox>
                                    </el-checkbox-group>
                                </template>

                                <!-- 单选框 -->
                                <template v-if="item.type == 'radio'">
                                    <el-radio-group v-model="fromModel[item.key]" v-bind="{ ...item.props }"
                                        @change="changeVaule($event, item.key)">
                                        <el-radio class="items" v-for="(option, idx) in item.children"
                                            v-bind="{ ...option.props }" :key="option.value + idx" :label="option.value">{{
                                                option.label }}</el-radio>
                                    </el-radio-group>
                                </template>

                                <!-- 上传图片 -->
                                <template v-if="item.type == 'uploadImg'">
                                    <dzs-upload-img v-model="fromModel[item.key]" v-bind="{ ...item.props }"
                                        @change="changeVaule($event, item.key)"></dzs-upload-img>
                                </template>

                                <!-- 富文本组件 -->
                                <dzs-editors v-if="item.type == 'edit'" @save="changeVaule($event, item.key)"
                                    :show_save="false" v-bind="{ ...item.props }" v-model="fromModel[item.key]"></dzs-editors>

                                <!-- 支持除开自身外的组件 -->
                                <template v-if="item.props && item.props.isSlot">
                                    <slot :name="`${item.key}Children`"></slot>
                                </template>


                                <div class="from-item-tips" v-if="getTips(item)">{{ getTips(item) }}</div>
                            </el-form-item>
                            <!-- 分割线 -->
                            <div v-if="item.type == 'divider'">
                                <el-divider v-bind="{ ...item.props }">
                                    <span v-if="item.props && item.props.tips">{{ item.props.tips }}</span>
                                    <i v-if="item.props && item.props.icon" :class="item.props.icon"></i>
                                </el-divider>
                            </div>
                        </template>
                    </el-col>
                </div>
            </el-row>
        </el-form>
        <div class="form-sbumit-box" v-if="showBtn">
            <el-button type="info" @click.stop="cancel" class="btn cancel">取消</el-button>
            <slot name="footerBtn"></slot>
            <el-button class="btn" type="primary" @click.stop="submit('dzsForm')">{{ success_txt }}</el-button>
        </div>
    </div>
</template>

<script>

/*
 *@props options = {
    formProps : {} , //from表单属性 和饿了吗表单属性一样
    formItem : [
            {
                label: "", //输入框名称 非必填
                key: "", //输入框key 必填
                type : "", //类型 非必填 默认input 输入框 input select date switch checkbox radio uploadImg edit 
                children : [] , //列表数据 非必填
                defaultValue : "" , //默认值 非必填
                isHidden : false , //是否隐藏 非必填
                props:{
                    ...defalut , //内部参数 饿了吗ui相同 type == uploadImg 参数见组件
                    tips : "" , //提示文字信息
                    isSlot : false , //是否在 from-item里面添加新的 slot 具名插槽:key+Children
                },
                rules：{ } ,// 规则 饿了吗ui相同 非必填
                isNull : false , //是否不需要添加到提交表单中  非必填
                isSlot : false , //非必填 是否为自定义组件
            }
        ] 
    }
 * @props success_txt 提交按钮文字 非必填
 * @props showBtn 是否显示按钮 非必填
 * @props value / v-model 返回值 表单数据
 * 
 * @methods onSubmit 提交事件 返回当前表单数据
 * @methods onCancel 取消事件
 * 
 * 
*/
import { pickerOptions } from "./config.js";
import dzsUploadImg from "../dzs-upload-img/dzs-upload-img.vue";
import dzsEditors from "../dzs-editor/index.vue"
export default {
    name: "From",
    components: {
        dzsUploadImg,
        dzsEditors
    },
    model: {
        prop: "value",
        event: "update:value",
    },
    props: {
        options: {
            type: Object,
            default: () => {
                return {};
            },
        },
        success_txt: {
            type: String,
            default: () => {
                return "提交";
            },
        },
        showBtn: {
            type: Boolean,
            default: () => {
                return true;
            },
        },
        value: {
            type: Object,
            default: () => {
                return {};
            },
        },
        fromStatus: {
            type: String,
            default: () => {
                return "";
            },
        },
        /**防抖时间*/
        antiShakeTime: {
            type: Number,
            default: () => {
                return 1000
            }
        },
        loadingText: {
            type: String,
            default: () => {
                return ""
            }
        },
        /**是否显示loading*/
        loading: {
            type: Boolean,
            default: () => {
                return false
            }
        },
        /**高度*/
        height: {
            type: String,
            default: () => {
                return ""
            }
        },
    },
    data() {
        return {
            fromModel: {},
            fromRules: {},
            formItem: [], //表单初始数据
            formProps: {}, //表单配置
            pickerOptions: pickerOptions,
            screenWidth: document.body.clientWidth, //屏幕宽度
            labelPosition: "left", //对其方式
            timer: null, //定时器 防止重复提交
        };
    },
    watch: {
        options: {
            handler(newValue, oldValue) {
                if (!newValue.formItem || !newValue.formItem.length) return;
                this.initModel(newValue);
            },
            deep: true,
            immediate: true,
        },
        value: {
            handler(newValue, oldValue) {
                if (!newValue) return;
                this.setFormData(newValue);
            },
            deep: true,
            immediate: true,
        },
    },
    created() {
        window.onresize = () => {
            this.screenWidth = document.body.clientWidth;
            this.initModel(this.options)
        };
    },
    methods: {
        /**
         * 设置 placeholder
         * @param {Object} item 需要处理的对象
         * @param {String} [type] 什么类型  默认input 支持 input select
         * */
        getPlaceholder(item, type = 'input') {
            let fisrtText = type == 'select' ? '请选择' : '请输入';
            let placeholder = item.props ? item.props.placeholder ? item.props.placeholder : fisrtText + item.label : fisrtText + item.label
            return placeholder
        },
        /**设置提示信息*/
        getTips(item) {
            if (item.props && item.props.tips) {
                return item.props.tips
            };
            return ""
        },
        /**改变输入的值*/
        changeVaule(value, key) {
            this.$set(this.fromModel, key, value);
            this.$emit("update:value", this.fromModel);
            this.$emit("change", {
                value: value,
                key: key,
            });
        },

        submit(formName = "dzsForm") {
            if (this.timer) {
                this.$message({
                    message: `请勿重复提交,${this.antiShakeTime / 1000} 秒后再试`,
                    type: "warning",
                });
                return;
            }
            if (this.antiShakeTime) {
                this.timer = setTimeout(() => {
                    clearTimeout(this.timer);
                    this.timer = null;
                }, this.antiShakeTime);
            }
            return new Promise((resolve, reject) => {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        let sendList = {};
                        for (const key in this.fromModel) {
                            if (Object.hasOwnProperty.call(this.fromModel, key)) {
                                let item = this.formItem.filter(
                                    (item) => item.key == key
                                )[0];
                                sendList[key] = this.fromModel[key];
                                if (item) {
                                    if (item.type == "uploadImg") {
                                        let urlList = this.fromModel[key];
                                        sendList[key] = "";
                                        if (urlList && urlList.length > 0) {
                                            if (urlList.length == 1) {
                                                sendList[key] =
                                                    urlList[0].uploadUrl;
                                            } else {
                                                urlList.forEach((item) => {
                                                    sendList[key] +=
                                                        item.uploadUrl + ",";
                                                });
                                            }
                                        }
                                    }
                                    if (item.type == "checkbox") {
                                        sendList[key] = this.fromModel[key];
                                    }
                                    if (item.type == "switch") {
                                        sendList[key] = this.fromModel[key] ? 1 : 0;
                                    }
                                    if (item.isNull) {
                                        delete sendList[key];
                                    }
                                }
                            }
                        }
                        this.$emit("onSubmit", this.fromModel);
                        this.$emit("update:value", this.fromModel);
                        resolve(this.fromModel);
                    } else {
                        this.$message.error("请填写完整信息");
                        reject();
                        return false;
                    }
                });
            });
        },

        cancel() {
            this.clearForm();
            this.$emit("onCancel");
        },

        async initModel(data) {
            this.labelPosition = this.screenWidth <= 768 ? "top" : "left";
            this.formProps = data.formProps || {};
            this.formItem = JSON.parse(JSON.stringify(data.formItem));
            this.formItem.forEach((item) => {
                // 兼容手机端
                item.span = this.screenWidth <= 768 ? 24 : item.span;
                // 初始化选项框 和上传图片框
                if (
                    (item.type === "checkbox" || item.type === "uploadImg") &&
                    !item.defaultValue
                ) {
                    if (this.value[item.key]) {
                        item.defaultValue = this.value[item.key];
                    } else {
                        item.defaultValue = [];
                    }
                }
                // 初始化 开关
                if (item.type === "switch" && this.value[item.key]) {
                    item.defaultValue = this.value[item.key];
                }
                if ( item.type == "switch" && !item.defaultValue ) {
                    item.defaultValue = false;
                }

                // input框 在饿了吗ui 中需要是 string类型
                if (item.type == "input" && item.defaultValue) {
                    item.defaultValue = item.defaultValue.toString();
                }
                if (!item.props) item.props = {};
                // 当下拉框为多选时，需要将默认值转换为数组
                if (item.type == "select" && item.props.multiple && !item.defaultValue) {
                    if (this.value[item.key]) {
                        item.defaultValue = this.value[item.key];
                    } else {
                        item.defaultValue = [];
                    }
                }
                this.fromRules[item.key] = item.rules || [];
                if (item.defaultValue) {
                    this.changeVaule(item.defaultValue, item.key);
                }
                if (item.type != 'switch') {
                    this.fromModel[item.key] = this.fromModel[item.key] ? this.fromModel[item.key] : item.defaultValue || "";
                } else {
                    this.fromModel[item.key] = this.fromModel[item.key] ? this.fromModel[item.key] : item.defaultValue;
                }

            });
        },

        /**
         * 步骤一 初始化表单值
         * @param {Array} data 初始化的数据 
         * */
        step1(data) {
            return new Promise((resolve, reject) => {
                if (JSON.stringify(this.fromModel) != '{}') {
                    resolve(true);
                    return;
                }
                let formData = {};
                for (let i = 0; i < data.length; i++) {
                    if (data[i].isNull) continue;
                    if (data[i].defaultValue) {
                        formData[data[i].key] = data[i].defaultValue;
                        continue;
                    }
                    switch (data[i].type) {
                        case 'switch':
                            formData[data[i].key] = false;
                            break;
                        case 'select':
                            if (data[i].props && data[i].props.multiple) {
                                formData[data[i].key] = []
                            } else {
                                formData[data[i].key] = ""
                            }
                            break;
                        case "checkbox":
                            formData[data[i].key] = [];
                            break;
                        case "uploadImg":
                            formData[data[i].key] = [];
                            break;
                        default:
                            formData[data[i].key] = "";
                            break;
                    }
                }
                
                this.fromModel = formData;
                resolve(true);
            })

        },

        /**
         * 步骤二 初始化表单配置项
         * @param {Object} data 需要配置的信息 
         * */
        step2(data) {
            data.formProps ? this.formProps = data.formProps : null;
            this.formProps['label-position'] || this.formProps['labelPosition'] ? this.labelPosition = this.formProps['label-position'] || this.formProps['labelPosition'] : null;
            this.screenWidth < 768 ? this.labelPosition = 'top' : null;
            let options = data.formItem;
            let rulesOptions = {};
            options.forEach((item) => {
                // step1 初始化 宽度
                item.span = item.span ? item.span : 24;
                this.screenWidth < 768 ? item.span = 24 : null;
                // step2 初始化 规则配置
                rulesOptions[item.key] = item.rules || [];
                delete item.rules;
                // step3 初始化 配置项
                item.props = item.props || {};
            })
            this.formItem = options;
            this.fromRules = rulesOptions;
            setTimeout(() => {
                this.$refs['dzsForm'].clearValidate();
            }, 100)
            
        },

        /**清空表单数据*/
        clearForm() {
            this.$refs["dzsForm"].resetFields();
        },

        /**调用饿了么表单的原生方法*/
        getForm() {
            return this.$refs["dzsForm"];
        },

        /**赋值*/
        setFormData(data) {
            let data1 = JSON.parse(JSON.stringify(data));
            let data2 = JSON.parse(JSON.stringify(this.fromModel));
            this.fromModel = {...data2 , ...data1};
            setTimeout(()=>{
                this.fromModel = {...data2 , ...data1};
            },100)
        },
    },
};
</script>

<style lang="less" scoped>
.ruleForm {
    min-width: 650px;

    .items {
        padding-right: 10px;
    }

    .from-item-tips {
        font-size: 12px;
        color: #ccc;
        padding-top: 3px;
        line-height: 14px;
    }
}

.form-box {
    .form-sbumit-box {
        display: flex;
        flex-wrap: wrap;
        justify-content: right;
        padding: 10px 0;

        .cancel {
            background-color: #fff;
            border: 1px solid #bbb;
            color: #666;
        }
    }
}

@media screen and (max-width: 768px) {
    .ruleForm {
        width: 100%;
        min-width: 100%;
    }
}
</style>
