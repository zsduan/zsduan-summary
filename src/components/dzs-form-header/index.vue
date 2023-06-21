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
        btnSpan: {
            type: Number,
            default: () => {
                return 6
            }
        },
        btnIcon : {
            type: String,
            default: () => {
                return "el-icon-search"
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
            initDataTimer: null, //定时器 防止重复提交
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
                        this.$emit("Search", sendList);
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
        /**重置*/
        Reset() {
            this.initData({}, this.options);
            this.$emit("update:value", this.fromModel);
            this.$emit("Reset");
        },

        /**
         * 初始化表单数据
         * @param {Object} data v-model
         * @param {Object} options 表单配置 中可能有默认值
         * */
        initData(data, options) {
            if(this.initDataTimer){
                clearTimeout(this.initDataTimer);
                this.initDataTimer = null;
                return ;
            }
            this.initDataTimer = setTimeout(()=>{
                this.initDataTimer = null;
            },500)
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
        },

        /**初始化表单配置*/
        initModel(data) {
            // 兼容手机端
            this.labelPosition = this.screenWidth <= 768 ? "top" : "left";
            this.formProps = data.formProps || {};
            this.formItem = data.formItem;
            this.formItem.forEach((item) => {
                // 兼容手机端
                item.span = this.screenWidth <= 768 ? 24 : item.span || 6;
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