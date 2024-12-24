<template>
    <div :id="formId" class="dzs-form-box">
        <el-form v-bind="{ ...formProps }" :model="fromModel" :rules="fromRules" :label-position="labelPosition"
            :ref="formId" :class="{ 'phone-form': formBoxWidth <= 768 }">
            <el-row :gutter="gutter">
                <template v-for="(item, index) in formItem">
                    <el-col v-show="item.isShow" :span="item.span ? item.span : 6" :key="index" v-if="!item.isHidden">
                        <!-- 自定义组件 -->
                        <template v-if="item.isSlot">
                            <slot :name="item.key"></slot>
                        </template>
                        <dzs-form-item v-else :item="item">
                            <template v-for="(slotProps, slotName) in $slots" #[slotName]="slotProps">
                                <slot :name="slotName" v-bind="slotProps"></slot>
                            </template>
                            <template #default>
                                <dzs-item :formBoxWidth="formBoxWidth" :value="getFromModelValue(item.key)" :item="item"
                                    @change="changeVaule">
                                </dzs-item>
                                <div class="from-item-tips" v-if="getTips(item) && item.type != 'divider'">
                                    {{ getTips(item) }}
                                </div>
                            </template>
                        </dzs-form-item>
                    </el-col>
                </template>
                <slot></slot>
                <template>
                    <el-col :span="btnSpan">
                        <div :class="{ 'form-sbumit-box': true, 'form-sbumit-box-phone': this.btnSpan == 24 }">
                            <el-button v-if="showButton" class="btn" type="primary" :icon="btnIcon"
                                @click.stop="onSubmit()">
                                {{ bottonText.submitText ? bottonText.submitText : '搜索' }}
                            </el-button>
                            <el-button v-if="showButton" @click.stop="onReset">
                                {{ bottonText.resetText ? bottonText.resetText : '重置' }}
                            </el-button>
                            <el-button v-if="!openItems && spanCount > 18" @click="openItem" type="text">展开<i
                                    class="el-icon-arrow-down"></i></el-button>
                            <el-button v-if="openItems && spanCount > 18" @click="retractItem" type="text">收起<i
                                    class="el-icon-arrow-up"></i></el-button>
                            <slot name="button"></slot>
                        </div>
                    </el-col>
                </template>
            </el-row>
        </el-form>
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
 * @props {String} bottonText.submitText 搜索按钮文字
 * @props {String} bottonText.resetText 重置按钮文字
 * @props {Boolean} showButton 是否显示按钮
 * @props {Number} antiShakeTime 防抖时间
 * @props {Number} gutter el-row 配置
 * @props {String} btnIcon 按钮图标
 * 
 * @event {Function} @change 值改变事件
 * @event {Function} @onSearch 搜索事件 返回一个Promise
 * @event {Function} @onreset 重置事件
 * @event {Function} setFormData 设置表单数据 用ref调用
 * @event {Function} getFormMethod 获取el-form原始方法 用ref调用
 * 
 * @slot {Object} button 按钮插槽
 * */ 
import { pickerOptions } from "./config.js";
import deepCopy from "./deepCopy.js";
import dzsFormItem from "./components/dzs-form-item";
import dzsItem from "./components/dzs-item";
export default {
    name: "dzsSearchForm",
    components: {
        dzsFormItem,
        dzsItem
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
        bottonText: {
            type: Object,
            default: () => {
                return {
                    submitText: "搜索",
                    resetText: "重置"
                };
            },
        },
        showButton: {
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
        /**防抖时间*/
        antiShakeTime: {
            type: Number,
            default: () => {
                return 1000
            }
        },
        /**el-row 配置*/
        gutter: {
            type: Number,
            default: () => {
                return 10
            }
        },
        btnIcon: {
            type: String,
            default: () => {
                return ""
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
            formId: `dzsForm${new Date().getTime()}`,
            btnSpan: 6,
            openItems: false,
            retractItems: false,
            spanCount: 0,
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
            handler(newValue) {
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
                this.setItemShowspan(items);
                return;
            }
            let fromModel = {};
            let rules = {};
            let formItem = [];
            // 定义一个映射，用于根据表单项类型设置默认值  
            const defaultValuesByType = {
                'checkbox': [],
                'switch': false,
            };
            items.forEach(item => {
                item.span = this.formBoxWidth <= 768 ? 24 : item.span; //手机端默认24
                item.isShow = true;
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
                } else {
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
            this.setItemShowspan(items);
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
        /**设置span显示*/
        setItemShowspan(items) {
            let spanCount = 0;
            this.formItem.forEach((item, index) => {
                item.span = this.formBoxWidth <= 768 ? 24 : items[index].span || 6;
                spanCount += item.span;
                spanCount > 18 ? item.isShow = false : item.isShow = true;
                this.openItems ? item.isShow = true : null;
                this.retractItems && spanCount > 18 ? item.isShow = false : null;
                this.formBoxWidth < 768 ? item.isShow = true : null;
            })
            this.formBoxWidth < 768 ? spanCount = 0 : null;
            this.spanCount = spanCount;
        },
        /**获取FromModel的参数*/
        getFromModelValue(keyPath) {
            let keyList = keyPath.split('.');
            let value = this.fromModel;
            for (let i = 0; i < keyList.length; i++) {
                value = value[keyList[i]];
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
        /**设置提示信息*/
        getTips(item) {
            if (item.props && item.props.tips) {
                return item.props.tips
            };
            return ""
        },
        /**改变输入的值*/
        changeVaule(value, keyPath) {
            let keyList = keyPath.split('.');
            let obj = this.fromModel;
            for (let i = 0; i < keyList.length - 1; i++) {
                obj = obj[keyList[i]];
            }
            obj[keyList[keyList.length - 1]] = value;
            this.$emit("update:value", this.fromModel);
            this.$emit("change", {
                value: value,
                key: keyPath,
            });
        },
        /**清空表单数据*/
        clearForm() {
            this.initModel(true);
            setTimeout(() => {
                this.$refs[this.formId].resetFields();
            }, 0)
            this.$emit("update:value", this.fromModel);
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
            const resizeObserver = new ResizeObserver(entries => {
                for (let entry of entries) {
                    const { width } = entry.contentRect;
                    if (this.formBoxWidth == width) return
                    this.formBoxWidth = width;
                    this.labelPosition = width <= 768 ? "top" : "left";
                    this.btnSpan = width <= 765 ? 24 : 6;
                    this.initModel(false, true);
                }
            })
            resizeObserver.observe(document.querySelector(`#${this.formId}`));
        },
        /**展开formItem*/
        openItem() {
            this.openItems = true;
            this.formItem.forEach((item) => {
                item.isShow = true
            })
        },
        /**收起formItem*/
        retractItem() {
            let spanCount = 0;
            this.formItem.forEach((item) => {
                spanCount += item.span;
                spanCount > 18 ? item.isShow = false : item.isShow = true;
            })
            this.retractItems = true;
            this.openItems = false;
            setTimeout(() => {
                this.retractItems = false;
            }, 200)
        },
        /**清空表单数据*/
        onReset() {
            this.clearForm();
            this.$emit('onReset', this.fromModel)
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
                        let keyPath = item.key.split('.');
                        let value = this.fromModel;
                        for (let i = 0; i < keyPath.length; i++) {
                            value = value[keyPath[i]];
                        }
                        sendData[item.key] = value;
                        if (item.isNull) delete sendData[item.key];
                        sendData = this.transformKeysToNestedObject(sendData);
                    })
                    this.$emit("onSearch", sendData);
                    this.$emit("update:value", sendData);
                    resolve(sendData);
                });
            })
        }
    }
}
</script>
<style lang="scss" scoped>
.dzs-form-box {
    .phone-form {
        min-width: 98%;
        width: 98%;
    }

    .from-item-tips {
        font-size: 12px;
        color: #ccc;
        padding-top: 3px;
        line-height: 14px;
    }
    .form-sbumit-box-phone{
        display: flex;
        align-items: center;
        justify-content: center;
    }

    /deep/.el-date-editor {
        width: 100%;
    }

    .el-row {
        display: flex;
        flex-wrap: wrap;
    }

    [class*=el-col-] {
        float: none;
    }
}
</style>