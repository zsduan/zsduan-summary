<!--
 * @Author: zs.duan
 * @Date: 2021-12-20 16:33:42
 * @LastEditors: zs.duan
 * @LastEditTime: 2022-12-26 16:34:41
 * @FilePath: \vue2+js+eui+template\src\components\dzs-form\index.vue
-->
<template>
    <div class="form-box">
        <el-form
            v-bind="{...formProps}"
            :model="fromModel"
            :rules="fromRules"
            :label-position="labelPosition"
            ref="dzsForm"
            class="ruleForm"
            @submit.native.prevent="submit('dzsForm')"
        >
            <!-- 自定义头部 -->
            <el-row :gutter="10">
                <div v-for="(item,index) in formItem" :key="index">
                    <el-col :span="item.span ? item.span : 24" v-if="!item.isHidden">
                        <!-- 自定义组件 -->
                        <el-form-item :label="item.label" v-if="item.isSlot">
                            <slot :name="item.key"></slot>
                        </el-form-item>
                        <div v-if="!item.isSlot">
                            <!-- 输入框 -->
                            <el-form-item :label="item.label" :prop="item.key" v-if="item.type == 'input'">
                                <el-input
                                    v-model="fromModel[item.key]"
                                    v-bind="{...item.props}"
                                    @input="changeVaule($event,item.key)"
                                    :placeholder="item.props && item.props.placeholder ? item.props.placeholder : '请输入'"
                                ></el-input>
                                <div class="from-item-tips" v-if="item.props && item.props.tips">{{item.props.tips}}</div>
                            </el-form-item>
                            <!-- 选择框 -->
                            <el-form-item :label="item.label" :prop="item.key" v-if="item.type == 'select'">
                                <el-select
                                    v-model="fromModel[item.key]"
                                    v-bind="{...item.props}"
                                    @input="changeVaule($event,item.key)"
                                    :placeholder="item.props && item.props.placeholder ? item.props.placeholder : '请选择'"
                                >
                                    <el-option
                                        style="padding : 0 6px;"
                                        v-for="(option) in item.children"
                                        :key="option.value"
                                        :label="option.label"
                                        :value="option.value"
                                    ></el-option>
                                </el-select>
                                <div class="from-item-tips" v-if="item.props && item.props.tips">{{item.props.tips}}</div>
                            </el-form-item>
                            <!-- 日期选择器 -->
                            <el-form-item :label="item.label" :prop="item.key" v-if="item.type == 'date'">
                                <el-date-picker
                                    v-model="fromModel[item.key]"
                                    v-bind="{...item.props}"
                                    @input="changeVaule($event,item.key)"
                                    :placeholder="item.props && item.props.placeholder ? item.props.placeholder : '请选择日期'"
                                ></el-date-picker>
                                <div class="from-item-tips" v-if="item.props && item.props.tips">{{item.props.tips}}</div>
                            </el-form-item>
                            <!-- 颜色选择器 -->
                            <el-form-item :label="item.label" :prop="item.key" v-if="item.type == 'color'">
                                <el-color-picker
                                    v-model="fromModel[item.key]"
                                    v-bind="{...item.props}"
                                    @input="changeVaule($event,item.key)"
                                ></el-color-picker>
                                <div class="from-item-tips" v-if="item.props && item.props.tips">{{item.props.tips}}</div>
                            </el-form-item>
                            <!-- 开关 -->
                            <el-form-item :label="item.label" :prop="item.key" v-if="item.type == 'switch'">
                                <el-switch
                                    v-model="fromModel[item.key]"
                                    v-bind="{...item.props}"
                                    @input="changeVaule($event,item.key)"
                                ></el-switch>
                                <div class="from-item-tips" v-if="item.props && item.props.tips">{{item.props.tips}}</div>
                            </el-form-item>
                            <!-- 多选框 -->
                            <el-form-item :label="item.label" :prop="item.key" v-if="item.type == 'checkbox'">
                                <el-checkbox-group
                                    v-model="fromModel[item.key]"
                                    v-bind="{...item.props}"
                                    @change="changeVaule($event,item.key)"
                                >
                                    <el-checkbox
                                        class="items"
                                        v-for="(option,index) in item.children"
                                        v-bind="{...option.props}"
                                        :key="index"
                                        :label="option.value"
                                    >{{option.label}}</el-checkbox>
                                </el-checkbox-group>
                                <div class="from-item-tips" v-if="item.props && item.props.tips">{{item.props.tips}}</div>
                            </el-form-item>
                            <!-- 单选框 -->
                            <el-form-item :label="item.label" :prop="item.key" v-if="item.type == 'radio'">
                                <el-radio-group
                                    v-model="fromModel[item.key]"
                                    v-bind="{...item.props}"
                                    @change="changeVaule($event,item.key)"
                                >
                                    <el-radio
                                        class="items"
                                        v-for="(option) in item.children"
                                        v-bind="{...option.props}"
                                        :key="option.value"
                                        :label="option.value"
                                    >{{option.label}}</el-radio>
                                </el-radio-group>
                                <div class="from-item-tips" v-if="item.props && item.props.tips">{{item.props.tips}}</div>
                            </el-form-item>
                            <!-- 图片 -->
                            <el-form-item :label="item.label" :prop="item.key" v-if="item.type == 'uploadImg'">
                                <dzs-upload-img
                                    v-model="fromModel[item.key]"
                                    v-bind="{...item.props}"
                                    @change="changeVaule($event,item.key)"
                                ></dzs-upload-img>
                                <div class="from-item-tips" v-if="item.props && item.props.tips">{{item.props.tips}}</div>
                            </el-form-item>
                            <!-- 富文本 -->
                            <el-form-item :label="item.label" :prop="item.key" v-if="item.type == 'edit'">
                                <div class="from-item-tips" v-if="item.props && item.props.tips">{{item.props.tips}}</div>
                                <dzs-editors
                                    @save="changeVaule($event,item.key)"
                                    :show_save="false"
                                    v-bind="{...item.props}"
                                    v-model="fromModel[item.key]"
                                ></dzs-editors>
                            </el-form-item>
                            <!-- 分割线 -->
                            <div v-if="item.type == 'divider'">
                                <el-divider v-bind="{...item.props}">
                                    <span v-if="item.props && item.props.tips">{{item.props.tips}}</span>
                                    <i v-if="item.props && item.props.icon" :class="item.props.icon"></i>
                                </el-divider>
                            </div>
                        </div>
                    </el-col>
                </div>
            </el-row>
        </el-form>
        <div class="form-sbumit-box" v-if="showBtn">
            <el-button type="info" @click.stop="cancel" class="btn cancel">取消</el-button>
            <slot name="footerBtn"></slot>
            <el-button class="btn" type="primary" @click.stop="submit('dzsForm')">{{success_txt}}</el-button>
        </div>
    </div>
</template>

<script>
/*
 *@props options = {
    formProps : {} , //from表单属性 和饿了吗表单属性一样
    fromItem : [
            {
                label: "", //输入框名称 非必填
                key: "", //输入框key 必填
                type : "", //类型 非必填 默认input 输入框 input select date switch checkbox radio uploadImg edit 
                children : [] , //列表数据 非必填
                defaultValue : "" , //默认值 非必填
                isHidden : false , //是否隐藏 非必填
                props:{ }, //内部参数 饿了吗ui相同 非必填 tips type == uploadImg  参数见组件 特殊参数  tips 文字介绍说明
                rules：{ } ,// 规则 饿了吗ui相同 非必填
                isNull : false , //是否不需要添加到提交表单中  非必填
                isSlot : false , //非必填 是否为自定义组件
            }
        ] 
    }
 *
 * @props value / v-model 返回值 表单数据
 * 
 * @methods onSubmit  提交事件 返回当前表单数据
 * 
 * 
*/
import { pickerOptions } from "./config.js";
import dzsEditors from "../dzs-editor/index.vue";
import dzsUploadImg from "../dzs-upload-img/dzs-upload-img.vue";

export default {
    name: "dzs-form",
    components: {
        dzsUploadImg,
        dzsEditors,
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
        }
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
                this.initData(this.value || {}, newValue);
            },
            deep: true,
            immediate: true,
        },
        screenWidth: {
            handler() {
                if (!this.options.formItem || !this.options.formItem.length) return;
                this.initModel(this.options);
            },
        },
        value: {
            handler(newValue, oldValue) {
                if (!newValue) return;
                this.initData(this.value || {}, this.options || {});
            },
            deep: true,
            immediate: true,
        },
    },
    created() {
        window.onresize = () => {
            this.screenWidth = document.body.clientWidth;
        };
    },
    methods: {
        // 改变输入的值
        changeVaule(value, key) {
            delete this.fromModel[key];
            this.$set(this.fromModel, key, value);
            this.$emit("update:value", this.fromModel);
            this.$emit("change", {
                value: value,
                key: key,
            });
        },

        async submit(formName = "dzsForm") {
            let next = await this.debounce();
            if (!next) return;
            return new Promise((resolve, reject) => {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        let sendList = {};
                        let formItem = this.formItem;
                        formItem.forEach(v =>{
                            sendList[v.key] = this.fromModel[v.key];
                            if(v.isNull){
                                delete sendList[v.key];
                            }
                        })
                        this.$emit("onSubmit", sendList);
                        this.$emit("update:value", sendList);
                        resolve(sendList);
                    } else {
                        this.$message.error("请填写完整信息");
                        reject();
                        return false;
                    }
                });
            });
        },
        /**取消*/
        cancel() {
            this.clearForm();
            this.$emit("onCancel");
        },

        /**
         * 初始化表单数据
         * @param {Object} data v-model
         * @param {Object} options 表单配置 中可能有默认值
         * */
        initData(data, options) {
            let formItem = options.formItem || [];
            let formModel = {};
            formItem.forEach((item) => {
                if (item.defaultValue) {
                    formModel[item.key] = item.defaultValue;
                } else {
                    switch (item.type) {
                        case "select":
                            if (item.props && item.props.multiple) {
                                formModel[item.key] = [];
                            } else {
                                formModel[item.key] = "";
                            }
                            break;
                        case "checkbox":
                            formModel[item.key] = [];
                            break;
                        case "uploadImg":
                            formModel[item.key] = [];
                            break;
                        case "switch":
                            formModel[item.key] = false;
                            break;
                        default:
                            formModel[item.key] = "";
                            break;
                    }
                }
            });
            // 如果data中有值 则覆盖默认值 不然就使用默认值
            for (let key in data) {
                if(data[key] == "" ){
                    data[key] = formModel[key]
                }
            }
            this.fromModel = {
                ...formModel,
                ...data,
            };
            this.$emit("update:value", this.fromModel);
        },

        /**初始化表单配置*/
        initModel(data) {
            // 兼容手机端
            this.labelPosition = this.screenWidth <= 768 ? "top" : "left";
            this.formProps = data.formProps || {};
            this.formItem = data.formItem;
            this.formItem.forEach((item) => {
                // 兼容手机端
                item.span = this.screenWidth <= 768 ? 24 : item.span || 24;
                this.fromRules[item.key] = item.rules || [];
            });
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
            this.fromModel = {
                ...this.fromModel,
                ...data,
            };
        },

        /**防抖*/
        debounce() {
            return new Promise((resolve, reject) => {
                if (this.timer) {
                    this.$message({
                        message: `请勿重复提交,${this.antiShakeTime / 1000} 秒后再试`,
                        type: "warning",
                    });
                    resolve(false);
                    return;
                }
                if (this.antiShakeTime) {
                    this.timer = setTimeout(() => {
                        clearTimeout(this.timer);
                        this.timer = null;
                    }, this.antiShakeTime);
                }
                resolve(true);
            });
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
