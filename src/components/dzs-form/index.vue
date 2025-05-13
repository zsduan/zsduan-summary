<template>
    <div :id="formId" class="dzs-form-box">
        <dzs-form-data-copy-and-paste v-if="copyAndPaste" :formItem="formItem" :formData="fromModel" :simple="simple"
            @paste="pasteData($event)"></dzs-form-data-copy-and-paste>
        <el-form v-loading="loadingOption.loading" :element-loading-text="loadingOption.loadingText"
            :element-loading-spinner="loadingOption.spinner" :element-loading-background="loadingOption.background"
            v-bind="{ ...formProps }" :model="fromModel" :rules="fromRules" :label-position="labelPosition"
            :ref="formId"
            :class="{ ruleForm: true, noScroll: loadingOption.loading, 'phone-form': formBoxWidth <= 768, 'form-box-scroll': isScroll }"
            :style="{ height: isScroll ? height : '100%' }">
            <slot name="form-header"></slot>
            <el-row :gutter="gutter">
                <template v-for="(item, index) in formItem">
                    <el-col :span="item.span ? item.span : 24" v-if="!item.isHidden">
                        <!-- 自定义组件 -->
                        <template v-if="item.isSlot">
                            <slot :name="item.key"></slot>
                        </template>
                        <dzs-form-item v-else :item="item">
                            <template v-for="(slotProps, slotName) in $slots" #[slotName]="slotProps">
                                <slot :name="slotName" v-bind="slotProps"></slot>
                            </template>
                            <template #default>
                                <dzs-item :formBoxWidth="formBoxWidth" :toolbar="toolbar"
                                    :value="getFromModelValue(item.key)" :item="item" @change="changeVaule">
                                </dzs-item>
                            </template>
                        </dzs-form-item>
                        <template v-if="item.type == 'divider'">
                            <el-divider v-bind="{ ...item.props }">
                                <span v-if="item.props && item.props.tips">{{ item.props.tips }}</span>
                                <i v-if="item.props && item.props.icon" :class="item.props.icon"></i>
                            </el-divider>
                        </template>
                    </el-col>
                </template>
            </el-row>
            <slot></slot>
        </el-form>
        <div :class="['form-sbumit-box', buttonFlex]" v-if="showFooter">
            <dzs-button @click.stop="onCancel" v-if="showButton">
                {{ bottonText.cancelText ? bottonText.cancelText : '取消' }}
            </dzs-button>
            <slot name="footerBtn"></slot>
            <dzs-button type="primary" @click.stop="onSubmit()" v-if="showButton">
                {{ bottonText.submitText ? bottonText.submitText : '提交' }}
            </dzs-button>
        </div>
    </div>
</template>
<script>


/**
 * 表单组件
 * @author zs.duan
 * @date 2024-07-30
 * @props {Object} options 表单配置
 * @props {Object} options.formProps 表单配置 el-form配置
 * @props {Array} options.formItem 表单配置 
 * @props {Object} options.formItem.label 标签
 * @props {String} options.formItem.key 唯一标识
 * @props {String} options.formItem.type 表单类型 支持 input、textarea、number、select、date、switch、checkbox、radio、uploadImg 、uploadFile 、editor、divider
 * @props {Object} options.formItem.rules 表单验证规则 el-form-item 配置
 * @props {Object} options.formItem.props 更多配置 el-form-item 配置 uploadImg 、uploadFile 见组件
 * @props {Object} options.formItem.props.tips 底部提示文字
 * @props {Object} options.formItem.children 子选项配置 select 、radio 、uploadImg 、uploadFile配置
 * @props {Object} options.formItem.defaultValue 默认值 优先级低于 value
 * @props {Object} options.formItem.span el-col 配置
 * @props {Object} value 表单数据 支持v-model
 * @props {Object} bottonText 按钮文字
 * @props {String} bottonText.submitText 提交按钮文字
 * @props {String} bottonText.cancelText 取消按钮文字
 * @props {Boolean} showButton 是否显示按钮
 * @props {Boolean} showFooter 是否显示底部
 * @props {Number} antiShakeTime 防抖时间
 * @props {Object} loadingOption 加载配置
 * @props {Boolean} loadingOption.loading 是否开启loading
 * @props {String} loadingOption.loadingText loading文字
 * @props {String} loadingOption.spinner loading图标
 * @props {String} loadingOption.background loading背景色
 * @props {Number} gutter el-row 配置
 * @props {Boolean} isScroll 是否开启超出滚动
 * @props {String} heightform表单高度
 * 
 * @event {Function} @change 值改变事件
 * @props {Number} gutter el-row 配置
 * @props {Boolean} isScroll 是否开启超出滚动
 * @props {String} heightform表单高度
 * 
 * @event {Function} @change 值改变事件
 * @event {Function} @onSubmit 提交事件 返回一个Promise
 * @event {Function} @onCancel 取消事件
 * @event {Function} setFormData 设置表单数据 用ref调用
 * @event {Function} getFormMethod 获取el-form原始方法 用ref调用
 * 
 * @slot {Object} footerBtn 底部按钮插槽
 * 
 * */
import { pickerOptions } from "./config";
import deepCopy from "./deepCopy.js";
import dzsFormItem from "./components/dzs-form-item";
import dzsItem from "./components/dzs-item";
import dzsFormDataCopyAndPaste from "./components/dzs-form-data-copy-and-paste";
import dzsButton from "../dzs-button";
import { simpleHash } from "./tool.js";
export default {
    name: "dzsForm",
    model: {
        prop: "value",
        event: "update:value"
    },
    components: {
        dzsFormItem,
        dzsItem,
        dzsFormDataCopyAndPaste,
        dzsButton
    },
    props: {
        options: {
            type: Object,
            default: () => {
                return {
                    formProps: {
                        labelPosition: "left",
                        labelWidth: "80px",
                    },
                    formItem: [],
                };
            },
        },
        value: {
            type: Object,
            default: () => {
                return {};
            },
        },
        bottonText: {
            type: Object,
            default: () => {
                return {
                    submitText: "提交",
                    cancelText: "取消"
                };
            },
        },
        showButton: {
            type: Boolean,
            default: () => {
                return true;
            },
        },
        showFooter: {
            type: Boolean,
            default: () => {
                return true
            }
        },
        /**防抖时间*/
        antiShakeTime: {
            type: Number,
            default: () => {
                return 1000
            }
        },
        loadingOption: {
            type: Object,
            default: () => {
                return {
                    background: "rgba(0,0,0,0.5)",
                    text: "加载中...",
                    spinner: "el-icon-loading",
                    loading: false
                }
            }
        },
        /**el-row 配置*/
        gutter: {
            type: Number,
            default: () => {
                return 10
            }
        },
        /**是否开启超出滚动*/
        isScroll: {
            type: Boolean,
            default: () => {
                return true
            }
        },
        /**form表单高度*/
        height: {
            type: String,
            default: () => {
                return "100%"
            }
        },
        /**botton位置*/
        buttonFlex: {
            type: String,
            default: () => {
                return "right"
            }
        },
        /**是否开启复制粘贴*/
        copyAndPaste: {
            type: Boolean,
            default: () => {
                return true
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
            formBoxWidth: 0, //form-box宽度
            labelPosition: "left", //对其方式
            timer: null, //定时器 防止重复提交
            toolbar: [],
            formId: `dzsForm${new Date().getTime()}`,
            simple: "", // 生成一个固定的hash值 用户复制粘贴
        }
    },
    watch: {
        options: {
            handler(val) {
                if (!val.formItem || !val.formItem.length) return;
                this.initModel();
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
    mounted() {
        this.listenFormBoxWidth();
    },
    methods: {
        /**
         * 初始化model
         * @param {Boolean} clear 是否value清空数据
         * @param {Boolean} changeSpan 是否改变span
         * */
        initModel(clear = false, changeSpan) {
            this.initFormProps(this.options.formProps);
            this.initFormItem(deepCopy(this.options.formItem), clear, changeSpan);
        },
        /**
         * 初始化form配置项
         * @param {Object} options 表单配置项
         * */
        initFormProps(options) {
            if (!options) return;
            this.labelPosition = this.formBoxWidth <= 768 ? "top" : "left";
            let labelPosition = options['label-position'] || options['labelPosition'];
            if (labelPosition) this.labelPosition = labelPosition;
            this.formProps = options;
        },
        /**
         * 初始化formItem
         * @param {Array} items 展示表单配置项
         * @param {Boolean} clear 是否value清空数据
         * @param {Boolean} changeSpan 是否改变span
         * */
        initFormItem(items, clear, changeSpan) {
            if (changeSpan && this.formItem.length) {
                this.formItem.forEach((item, index) => {
                    item.span = this.formBoxWidth <= 768 ? 24 : items[index].span; //手机端默认24
                })
                return;
            }
            let fromModel = {};
            let rules = {};
            let formItem = [];
            // 定义一个映射，用于根据表单项类型设置默认值  
            const defaultValuesByType = {
                'checkbox': [],
                'uploadImg': [],
                'uploadFile': [],
                'switch': false,
            };
            items.forEach(item => {
                item.span = this.formBoxWidth <= 768 ? 24 : item.span; //手机端默认24
                if (!item.props) item.props = {};
                if (this.value[item.key]) item.defaultValue = this.value[item.key];
                if (defaultValuesByType.hasOwnProperty(item.type) && !item.defaultValue) {
                    item.defaultValue = defaultValuesByType[item.type];
                }
                if (item.type == "select" && item.props.multiple && !item.defaultValue) item.defaultValue = [];
                if (item.type == "input" && item.defaultValue) { // input框 在饿了吗ui 中需要是 string类型
                    item.defaultValue = item.defaultValue.toString();
                }
                if (item.type != 'switch') { //其他处理
                    item.defaultValue = item.defaultValue ? item.defaultValue : "";
                } else {
                    item.defaultValue = item.defaultValue ? item.defaultValue : false;
                }
                rules[item.key] = item.rules || [];
                item.props.placeholder = this.getPlaceholder(item, item.type);
                formItem.push(item);
                if (clear) {
                    fromModel[item.key] = item.defaultValue;
                } else if (item.key) {
                    let keyList = item.key.split(".");
                    let setValue = this.value;
                    for (let i = 0; i < keyList.length; i++) {
                        setValue = setValue ? setValue[keyList[i]] : null;
                    }
                    fromModel[item.key] = setValue || item.defaultValue;
                }
            });
            this.fromModel = this.transformKeysToNestedObject(fromModel);
            this.formItem = deepCopy(formItem);
            this.fromRules = deepCopy(rules);
            this.getOriginalFormData();
        },

        /**生成原始表单数据 用来进行复制粘贴 生成hash值*/
        getOriginalFormData() {
            let originalFormData = {};
            for (let i = 0; i < this.formItem.length; i++) {
                let item = this.formItem[i];
                if (item.key) {
                    originalFormData[item.key] = "";
                }
            }
            this.simple = simpleHash(JSON.stringify(originalFormData));
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
        /**获取FromModel的参数*/
        getFromModelValue(keyPath) {
            if (!keyPath) return '';
            let keyList = keyPath.split('.');
            let value = this.fromModel;
            for (let i = 0; i < keyList.length; i++) {
                value = value[keyList[i]] ? value[keyList[i]] : '';
            }
            return value;
        },
        /**
         * 设置 placeholder
         * @param {Object} item 需要处理的对象
         * @param {String} [type] 什么类型  默认input 支持 input select
         * */
        getPlaceholder(item, type) {
            const types = ['date', 'time', 'select', 'uploadFile', 'uploadImg'];
            let fisrtText = '请输入';
            if (types.includes(type)) {
                fisrtText = '请选择';
            }
            let placeholder = item.props ? item.props.placeholder ? item.props.placeholder : fisrtText + item.label : fisrtText + item.label
            return placeholder
        },
        /**改变输入的值*/
        changeVaule(value, keyPath) {
            let keyList = keyPath.split('.');
            let obj = this.fromModel;
            for (let i = 0; i < keyList.length - 1; i++) {
                obj = obj[keyList[i]] ? obj[keyList[i]] : null;
            }
            obj[keyList[keyList.length - 1]] = value;
            this.$emit("update:value", this.fromModel);
            this.$emit("change", {
                value: value,
                key: keyPath,
            });
        },
        /**
         * 清空表单数据
         * @param {Function} [callback] 回调函数
         * */
        clearForm(callback) {
            return new Promise((resolve, reject) => {
                this.initModel(true);
                setTimeout(() => {
                    this.$refs[this.formId].resetFields();
                    callback && callback();
                    resolve();
                }, 0)
                this.$emit("update:value", this.fromModel);
            });
        },

        /**调用饿了么表单的原生方法*/
        getFormMethod() {
            return this.$refs[this.formId];
        },
        /**赋值*/
        setFormData(data) {
            if (JSON.stringify(data) == '{}' || !data) return;
            this.fromModel = { ...deepCopy(data) };
            // 避免数据未加载完毕时，数据未赋值
            setTimeout(() => {
                this.fromModel = { ...deepCopy(data) };
            }, 100)
        },
        /**监听form-box宽度变化*/
        listenFormBoxWidth() {
            let phoneToolbar = ["undo redo save | importword autosave fullscreen print help"];
            let toolbar = ["undo redo save| formatselect | fontsizeselect | fontselect | bold italic forecolor backcolor | alignleft aligncenter alignright alignjustify | lists image searchreplace | bullist numlist outdent indent |  media table insertdatetime | removeformat hr | importword autosave fullscreen print help"];
            const resizeObserver = new ResizeObserver(entries => {
                for (let entry of entries) {
                    const { width } = entry.contentRect;
                    if (this.formBoxWidth == width) return
                    this.formBoxWidth = width;
                    this.labelPosition = width <= 768 ? "top" : "left";
                    this.toolbar = width <= 768 ? phoneToolbar : toolbar;
                    this.initModel(false, true);
                }
            })
            resizeObserver.observe(document.querySelector(`#${this.formId}`));
        },
        /**点击取消*/
        onCancel() {
            this.clearForm();
            this.$emit("onCancel");
        },
        /**提交表单*/
        onSubmit() {
            if (this.timer) {
                this.$message.error(`请勿重复提交,${this.antiShakeTime / 1000} 秒后再试`);
                return
            }
            this.timer = setTimeout(() => {
                clearTimeout(this.timer);
                this.timer = null;
            }, this.antiShakeTime);
            let sendData = [];
            return new Promise((resolve, reject) => {
                this.$refs[this.formId].validate((valid) => {
                    if (!valid) {
                        this.$message.error("请完善表单信息");
                        reject({ code: -1, msg: "请完善表单信息" });
                        return
                    }
                    this.formItem.forEach(item => {
                        item.key = item.key ? item.key : '';
                        let keyPath = item.key.split('.');
                        let value = this.fromModel;
                        for (let i = 0; i < keyPath.length; i++) {
                            value = value[keyPath[i]];
                        }
                        sendData[item.key] = value;
                        if (item.isNull) delete sendData[item.key];
                    })
                    sendData = this.transformKeysToNestedObject(sendData);
                    if (this.value) sendData = { ...sendData, ...this.value }
                    this.$emit("onSubmit", sendData);
                    this.$emit("update:value", sendData);
                    resolve(sendData);
                });
            })
        },
        /**粘贴数据*/
        pasteData($event) {
            this.setFormData($event);
            this.$emit('update:value', $event);
        },
    }
}
</script>
<style lang="scss" scoped>
.dzs-form-box {
    .from-item-tips {
        font-size: 12px;
        color: #ccc;
        padding-top: 3px;
        line-height: 14px;
    }

    .form-sbumit-box {
        display: flex;
        flex-wrap: wrap;
        padding: 10px 0;

        &.right {
            justify-content: flex-end;
        }

        &.left {
            justify-content: flex-start;
        }

        &.center {
            justify-content: center;
        }
    }

    .form-box-scroll {
        overflow-y: auto;
        -ms-overflow-style: none;

        /*IE10*/
        &::-webkit-scrollbar {
            display: none;
        }
    }

    .phone-form {
        min-width: 98%;
        width: 98%;
    }
}
</style>
