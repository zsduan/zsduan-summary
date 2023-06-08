<!--
 * @Author: zs.duan
 * @Date: 2022-12-26 16:25:51
 * @LastEditors: zs.duan
 * @LastEditTime: 2022-12-26 17:30:16
 * @FilePath: \vue2+js+eui+template\src\components\dzs-form-header\index.vue
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
                    <el-col class="my-col" :span="item.span ? item.span : 6" v-if="!item.isHidden">
                        <!-- 自定义组件 -->
                        <div v-if="item.isSlot">
                            <slot :name="item.key"></slot>
                        </div>
                        <div v-if="!item.isSlot">
                            <!-- 输入框 -->
                            <el-form-item :label="item.label" :prop="item.key" v-if="item.type == 'input'">
                                <el-input v-model="fromModel[item.key]" v-bind="{...item.props}" @input="changeVaule($event,item.key)"></el-input>
                            </el-form-item>
                            <!-- 选择框 -->
                            <el-form-item :label="item.label" :prop="item.key" v-if="item.type == 'select'">
                                <el-select v-model="fromModel[item.key]" v-bind="{...item.props}" @input="changeVaule($event,item.key)">
                                    <el-option
                                        style="padding : 0 6px;"
                                        v-for="(option) in item.children"
                                        :key="option.value"
                                        :label="option.label"
                                        :value="option.value"
                                    ></el-option>
                                </el-select>
                            </el-form-item>
                            <!-- 日期选择器 -->
                            <el-form-item :label="item.label" :prop="item.key" v-if="item.type == 'date'">
                                <el-date-picker v-model="fromModel[item.key]" v-bind="{...item.props}" @input="changeVaule($event,item.key)"></el-date-picker>
                            </el-form-item>
                            <!-- 开关 -->
                            <el-form-item :label="item.label" :prop="item.key" v-if="item.type == 'switch'">
                                <el-switch v-model="fromModel[item.key]" v-bind="{...item.props}" @input="changeVaule($event,item.key)"></el-switch>
                            </el-form-item>
                            <!-- 多选框 -->
                            <el-form-item :label="item.label" :prop="item.key" v-if="item.type == 'checkbox'">
                                <el-checkbox-group v-model="fromModel[item.key]" v-bind="{...item.props}" @change="changeVaule($event,item.key)">
                                    <el-checkbox
                                        class="items"
                                        v-for="(option,index) in item.children"
                                        v-bind="{...option.props}"
                                        :key="index"
                                        :label="option.value"
                                    >{{option.label}}</el-checkbox>
                                </el-checkbox-group>
                            </el-form-item>
                            <!-- 单选框 -->
                            <el-form-item :label="item.label" :prop="item.key" v-if="item.type == 'radio'">
                                <el-radio-group v-model="fromModel[item.key]" v-bind="{...item.props}" @change="changeVaule($event,item.key)">
                                    <el-radio
                                        class="items"
                                        v-for="(option) in item.children"
                                        v-bind="{...option.props}"
                                        :key="option.value"
                                        :label="option.value"
                                    >{{option.label}}</el-radio>
                                </el-radio-group>
                            </el-form-item>
                        </div>
                    </el-col>
                </div>
                <div>
                    <el-col :span="btnSpan">
                        <div class="form-sbumit-box" v-if="showBtn">
                            <el-button class="btn" type="primary" :icon="btnIcon" @click.stop="submit('dzsForm')">{{success_txt}}</el-button>
                            <el-button type="info" @click.stop="Reset" class="btn cancel">重置</el-button>
                            <slot name="footerBtn"></slot>
                        </div>
                    </el-col>
                </div>
            </el-row>
        </el-form>
        
    </div>
</template>
<script>
import { pickerOptions } from "./config.js";
export default {
    name: "dzs-form-header",
    model: {
        prop: "value",
        event: "update:value",
    },
    props: {
        options: {
            type: Object,
            default: () => {},
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
        success_txt: {
            type: String,
            default: () => {
                return "搜索";
            },
        },
        btnIcon : {
            type: String,
            default: () => {
                return "el-icon-search";
            },
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
            btnSpan : 6
        };
    },
    watch: {
        options: {
            handler(newValue, oldValue) {
                if (
                    !newValue ||
                    !newValue.formItem ||
                    !newValue.formItem.length
                )
                return;
                this.initModel(JSON.parse(JSON.stringify(newValue)));
            },
            deep: true,
            immediate: true,
        },
        value: {
            handler(newValue, oldValue) {
                if(!newValue) return;
                if(JSON.stringify(newValue) == JSON.stringify(this.fromModel)) return;
                if(JSON.stringify(newValue) == '{}') return;
                this.fromModel = {
                    ...this.fromModel,
                    ...newValue,
                };
            },
            deep: true,
        },
    },
    created() {
        window.addEventListener("resize" , ()=>{
            this.changeFormSize();
        })
    },
    methods: {
        /**动态改变表单大小*/
        changeFormSize() {
            this.screenWidth = document.body.clientWidth;
            // 兼容手机端
            this.labelPosition = this.screenWidth <= 768 ? "top" : "left";
            if (this.formItem.length) {
                let spanAll = 0;
                this.formItem.forEach((item, index) => {
                    let span = this.options.formItem[index].span;
                    // 兼容手机端
                    item.span = this.screenWidth <= 768 ? 24 : span ? span : 6;
                    spanAll += item.span;
                });
                if (24 - (spanAll % 24) < 6) {
                    this.btnSpan = 24;
                } else {
                    this.btnSpan = 6;
                }
                if (this.screenWidth <= 768) {
                    this.btnSpan = 24;
                }
            }
        },
        /**改变输入的值*/ 
        changeVaule(value, key) {
            delete this.fromModel[key];
            this.$set(this.fromModel, key, value);
            this.$emit("update:value", this.fromModel);
            this.$emit("change", {
                value: value,
                key: key,
            });
        },
        /**
         * 初始化表单值
         * @param {object} data 表单数据
         * @param {object} data.formProps 表单配置
         * @param {Array} data.formItem 表单数据
         * @param {boolean} is_reset 是否重置
         * */ 
        initModel(data , is_reset = false) {
            this.formProps = data.formProps || {};
            this.formItem = data.formItem;
            let spanAll = 0;
            this.formItem.forEach((item) => {
                // 兼容手机端
                item.span = this.screenWidth <= 768 ? 24 : item.span ? item.span : 6;
                spanAll += item.span;
                // 初始化选项框
                if (item.type === "checkbox" && !item.defaultValue) {
                    item.defaultValue = [];
                }
                // 初始化 开关
                if (
                    item.type == "switch" &&
                    (!item.defaultValue || item.defaultValue == "false")
                ) {
                    item.defaultValue = false;
                }
                // input框 在饿了吗ui 中需要是 string类型
                if (item.type == "input" && item.defaultValue)
                    item.defaultValue = item.defaultValue.toString();
                if (!item.props) item.props = {};
                this.fromRules[item.key] = item.rules || [];
                if(item.props && item.props.type == 'datetimerange'){
                    item.defaultValue = item.defaultValue || [];
                }
                if(is_reset){
                    this.fromModel[item.key] = item.defaultValue || "";
                }else{
                    this.fromModel[item.key] = this.fromModel[item.key] ? this.fromModel[item.key] : item.defaultValue || "";
                }
            })
            if (24 - (spanAll % 24) < 6) {
                this.btnSpan = 24;
            }
        },
        submit(formName) {
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
                                if (item.type == "checkbox") {
                                    sendList[key] =
                                        this.fromModel[key].join(",");
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
                } else {
                    return false;
                }
            });
        },
        Reset(){
            this.initModel(this.options , true);
        },
        /**调用饿了么ui默认方法*/
        getForm() {
            return this.$refs.dzsForm;
        },
        /**
         * 直接给表单赋值
         * @param {object} data {key: value}
         * */
         setFormData(data) {
            if (!data) {
                throw new Error('data is not defined');
            }
            if(typeof data !== 'object' || !(Object.prototype.toString.call(data) === '[object Object]')){
                throw new Error('data must be object');
            }
            this.fromModel = {
                ...this.fromModel,
                ...data,
            };
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
    .my-col{
        overflow: hidden;
    }
}
.form-box {
    .form-sbumit-box {
        display: flex;
        flex-wrap: wrap;
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