<template>
    <div :id="fromId" class="form-box">
        <el-form v-loading="loading" :element-loading-text="loadingText" v-bind="{ ...formProps }" :model="fromModel"
            :rules="fromRules" :label-position="labelPosition" ref="dzsForm"
            :class="{ ruleForm: true, noScroll: loading, 'phone-form': formBoxWidth <= 768, 'form-box-scroll': isScroll }"
            :style="{ height: isScroll ? height : '100%' }">
            <!-- 自定义头部 -->
            <el-row :gutter="gutter">
                <div v-for="(item, index) in formItem" :key="index">
                    <el-col :span="item.span ? item.span : 24" v-if="!item.isHidden">
                        <!-- 自定义组件 -->
                        <template v-if="item.isSlot">
                            <slot :name="item.key"></slot>
                        </template>
                        <template v-if="!item.isSlot">
                            <el-form-item :label="item.label" :prop="item.key">
                                <div class="dzs-form-item">
                                    <slot :name="`${item.key}Before`"></slot>
                                    <!-- 自定义组件 -->
                                    <template v-if="item.props && item.props.isSlot">
                                        <slot :name="`${item.key}`"></slot>
                                    </template>

                                    <!-- 输入框 -->
                                    <template v-if="item.type == 'input'">
                                        <el-input :value="getFromModelValue(item.key)" v-bind="{ ...item.props }"
                                            @input="changeVaule($event, item.key)" :placeholder="getPlaceholder(item)">
                                            <template v-if="item.slots" :slot="item.slots.name">
                                                {{ item.slots.text }}
                                            </template>
                                        </el-input>
                                    </template>

                                    <!-- 数字输入框 -->
                                    <template v-if="item.type == 'number'">
                                        <el-input-number :value="getFromModelValue(item.key)" v-bind="{ ...item.props }"
                                            @input="changeVaule($event, item.key)"
                                            :placeholder="getPlaceholder(item)"></el-input-number>
                                    </template>

                                    <!-- 选择框 -->
                                    <template v-if="item.type == 'select'">
                                        <el-select :value="getFromModelValue(item.key)" v-bind="{ ...item.props }"
                                            @input="changeVaule($event, item.key)"
                                            :placeholder="getPlaceholder(item, 'select')">
                                            <el-option style="padding : 0 6px;" v-for="(option, idx) in item.children"
                                                :key="option.value + (idx).toString()" :label="option.label"
                                                :value="option.value"></el-option>
                                        </el-select>
                                    </template>

                                    <!-- 日期选择器 -->
                                    <template v-if="item.type == 'date'">
                                        <el-date-picker :value="getFromModelValue(item.key)" v-bind="{ ...item.props }"
                                            @input="changeVaule($event, item.key)"
                                            :placeholder="getPlaceholder(item, 'select')"></el-date-picker>
                                    </template>

                                    <!-- 时间选择器 -->
                                    <template v-if="item.type == 'time'">
                                        <el-time-picker :value="getFromModelValue(item.key)" v-bind="{ ...item.props }"
                                            @input="changeVaule($event, item.key)"
                                            :placeholder="getPlaceholder(item, 'select')"></el-time-picker>
                                    </template>

                                    <!-- 颜色选择器 -->
                                    <template v-if="item.type == 'color'">
                                        <el-color-picker :value="getFromModelValue(item.key)" v-bind="{ ...item.props }"
                                            @input="changeVaule($event, item.key)"></el-color-picker>
                                    </template>

                                    <!-- 开关 -->
                                    <template v-if="item.type == 'switch'">
                                        <el-switch :value="getFromModelValue(item.key)" v-bind="{ ...item.props }"
                                            @input="changeVaule($event, item.key)"></el-switch>
                                    </template>

                                    <!-- 多选框 -->
                                    <template v-if="item.type == 'checkbox'">
                                        <el-checkbox-group :value="getFromModelValue(item.key)"
                                            v-bind="{ ...item.props }" @input="changeVaule($event, item.key)">
                                            <el-checkbox class="items" v-for="(option, idx) in item.children"
                                                v-bind="{ ...option.props }" :key="option.value + idx"
                                                :label="option.value">
                                                {{ option.label }}
                                            </el-checkbox>
                                        </el-checkbox-group>
                                    </template>

                                    <!-- 单选框 -->
                                    <template v-if="item.type == 'radio'">
                                        <el-radio-group :value="getFromModelValue(item.key)" v-bind="{ ...item.props }"
                                            @input="changeVaule($event, item.key)">
                                            <el-radio class="items" v-for="(option, idx) in item.children"
                                                v-bind="{ ...option.props }" :key="option.value + idx"
                                                :label="option.value">
                                                {{ option.label }}
                                            </el-radio>
                                        </el-radio-group>
                                    </template>

                                    <!-- 上传图片 -->
                                    <template v-if="item.type == 'uploadImg'">
                                        <dzs-upload-img :value="getFromModelValue(item.key)" v-bind="{ ...item.props }"
                                            @change="changeVaule($event, item.key)"></dzs-upload-img>
                                    </template>

                                    <!-- 上传文件 -->
                                    <template v-if="item.type == 'uploadFile'">
                                        <dzs-upload-file :isPhone="formBoxWidth <= 768"
                                            :value="getFromModelValue(item.key)" v-bind="{ ...item.props }"
                                            @change="changeVaule($event, item.key)"></dzs-upload-file>
                                    </template>

                                    <!-- 富文本组件 -->
                                    <template v-if="item.type == 'editor'">
                                        <dzs-editors :toolbar="toolbar" @save="changeVaule($event, item.key)"
                                            :show_save="false" v-bind="{ ...item.props }"
                                            :value="getFromModelValue(item.key)">
                                        </dzs-editors>
                                    </template>

                                    <slot :name="`${item.key}After`"></slot>
                                </div>

                                <div class="from-item-tips" v-if="getTips(item) && item.type != 'divider'">
                                    {{ getTips(item) }}
                                </div>
                            </el-form-item>
                            <!-- 分割线 -->
                            <template v-if="item.type == 'divider'">
                                <el-divider v-bind="{ ...item.props }">
                                    <span v-if="item.props && item.props.tips">{{ item.props.tips }}</span>
                                    <i v-if="item.props && item.props.icon" :class="item.props.icon"></i>
                                </el-divider>
                            </template>
                        </template>
                    </el-col>
                </div>
            </el-row>
        </el-form>
        <div class="form-sbumit-box" v-if="showBtn">
            <el-button type="info" @click.stop="cancel" class="btn cancel">{{ cancelText }}</el-button>
            <slot name="footerBtn"></slot>
            <el-button class="btn" type="primary" @click.stop="submit('dzsForm')">{{ submitText }}</el-button>
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
                type : "", //类型 非必填 默认input 输入框 input select date time switch checkbox radio uploadImg edit divider uploadFile 
                children : [] , //列表数据 非必填
                defaultValue : "" , //默认值 非必填
                isHidden : false , //是否隐藏 非必填
                span : 24 , //宽度 el-col span 非必填
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
 * @props submit-text 提交按钮文字 非必填
 * @props cancel-text 取消按钮文字 非必填
 * @props showBtn 是否显示按钮 非必填
 * @props value / v-model 返回值 表单数据
 * @props antiShakeTime 防抖时间 非必填
 * @props loadingText loading文字 非必填
 * @props loading 是否显示loading 非必填
 * @props isFormData 是否为formData 非必填
 * @props gutter el-row 配置 非必填
 * @props isScroll 是否开启超出滚动 非必填
 * @props height form表单高度 非必填
 * 
 * @methods onSubmit 提交事件 返回当前表单数据
 * @methods onCancel 取消事件
 * @methods change 输入框改变事件 返回当前输入框的值和key
 * @methods getFormMethod 获取饿了吗表单的原生方法
 * @methods clearForm 清空表单数据
 * @methods setFormData 设置表单数据
 * 
*/
import { pickerOptions } from "./config.js";
import dzsUploadImg from "../dzs-upload-img/dzs-upload-img.vue";
import dzsEditors from "../dzs-editor/index.vue";
import dzsUploadFile from "../dzs-upload-file/dzs-upload-file.vue";
import deepCopy from "./deepCopy.js";
export default {
    name: "From",
    components: {
        dzsUploadImg,
        dzsEditors,
        dzsUploadFile
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
        submitText: {
            type: String,
            default: () => {
                return "提交";
            },
        },
        cancelText: {
            type: String,
            default: () => {
                return "取消";
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
        /**是否为formData*/
        isFormData: {
            type: Boolean,
            default: () => {
                return false
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
            fromId: `dzsForm${new Date().getTime()}`
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

    },
    mounted() {
        this.listenFormBoxWidth();
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

        /**获取FromModel的参数*/
        getFromModelValue(keyPath) {
            let keyList = keyPath.split('.');
            let value = this.fromModel;
            for (let i = 0; i < keyList.length; i++) {
                value = value[keyList[i]];
            }
            return value;
        },

        /**提交*/
        submit(formName = "dzsForm") {
            if (this.timer) {
                this.$message({
                    message: `请勿重复提交,${this.antiShakeTime / 1000} 秒后再试`,
                    type: "warning",
                });
                return;
            }
            this.timer = setTimeout(() => {
                clearTimeout(this.timer);
                this.timer = null;
            }, this.antiShakeTime);
            return new Promise((resolve, reject) => {
                this.$refs[formName].validate((valid) => {
                    if (!valid) {
                        this.$message.error("请填写完整信息");
                        reject({ code: -200, message: "请填写完整的信息" });
                        return;
                    }
                    if (this.isFormData) {
                        this.sendFormData(resolve);
                        return;
                    }
                    let sendList = {};
                    this.formItem.forEach(item => {
                        let keyPath = item.key.split('.');
                        let value = this.fromModel;
                        for (let i = 0; i < keyPath.length; i++) {
                            value = value[keyPath[i]];
                        }
                        switch (item.type) {
                            case "uploadImg":
                                let urlList = value;
                                sendList[item.key] = urlList && urlList.length > 0 ? urlList.map(item => item.uploadUrl).join(",") : "";
                                break;
                            case "switch":
                                sendList[item.key] = value || false;
                                break;
                            default:
                                sendList[item.key] = value;
                                break;
                        }
                        if (item.isNull) delete sendList[item.key];
                        sendList = this.transformKeysToNestedObject(sendList);
                    })
                    this.$emit("onSubmit", sendList);
                    this.$emit("update:value", sendList);
                    resolve(sendList);
                });
            });
        },

        /**formData 发送数据*/
        sendFormData(resolve, reject) {
            let sendList = new FormData();
            this.formItem.forEach((item) => {
                if (item.isNull) return;
                let keyPath = item.key.split('.');
                let value = this.fromModel;
                for (let i = 0; i < keyPath.length; i++) {
                    value = value[keyPath[i]];
                }
                let files = null;
                switch (item.type) {
                    case "uploadImg":
                        let urlList = value;
                        if (urlList && urlList.length > 1) {
                            reject({ code: -200, message: "formData 上传图片只能上传一张图片 请检查" });
                            throw new Error(`formData 上传图片只能上传一张图片 请检查`)
                        }
                        if (urlList && urlList.length > 0) {
                            files = urlList[0].file;
                        }
                        if (!files && urlList) {
                            files = urlList.file || null;
                        }
                        if (urlList && urlList.length > 0) {
                            sendList.append(item.key, files);
                        }
                        break;
                    case "uploadFile":
                        let fileList = value;
                        if (fileList && fileList.length > 1) {
                            reject({ code: -200, message: "formData 上传图片只能上传一个文件 请检查" });
                            throw new Error(`formData 上传图片只能上传一个文件 请检查`)
                        }
                        if (fileList && fileList.length > 0) {
                            files = fileList[0].file;
                        }
                        if (!files && fileList) {
                            files = fileList.file || null;
                        }

                        if (fileList && fileList.length > 0) {
                            sendList.append(item.key, files);
                        }
                        break;
                    case "switch":
                        sendList.append(item.key, value ? 'true' : 'false');
                        break;
                    case "checkbox":
                        sendList.append(item.key, value.join(','));
                        break;
                    case "divider":
                        sendList.delete(item.key);
                        break;
                    default:
                        sendList.append(item.key, value);
                        break;
                }
            });
            this.$emit("onSubmit", sendList);
            resolve(sendList);
        },
        cancel() {
            this.clearForm();
            this.$emit("onCancel");
        },

        /**初始化数据*/
        initModel(data) {
            this.labelPosition = this.formBoxWidth <= 768 ? "top" : "left";
            if (this.options && this.options.formProps) {
                let labelPosition = this.options.formProps['label-position'] || this.options.formProps['labelPosition']
                if (labelPosition) {
                    this.labelPosition = labelPosition;
                }
            }
            this.formProps = data.formProps || {};
            this.formItem = deepCopy(data.formItem);
            let fromModel = {};
            this.formItem.forEach((item) => {
                // 兼容手机端
                item.span = this.formBoxWidth <= 768 ? 24 : item.span;
                if (this.value[item.key]) item.defaultValue = this.value[item.key];
                // 初始化选项框 和上传图片框
                if (
                    (item.type === "checkbox" || item.type === "uploadImg" || item.type == 'uploadFile') &&
                    !item.defaultValue
                ) {
                    item.defaultValue = [];
                }
                // 初始化 开关
                if (item.type == "switch" && !item.defaultValue) {
                    item.defaultValue = false;
                }
                // input框 在饿了吗ui 中需要是 string类型
                if (item.type == "input" && item.defaultValue) {
                    item.defaultValue = item.defaultValue.toString();
                }
                if (!item.props) item.props = {};
                // 当下拉框为多选时，需要将默认值转换为数组
                if (item.type == "select" && item.props.multiple && !item.defaultValue) {
                    item.defaultValue = [];
                }
                this.fromRules[item.key] = item.rules || [];
                if (item.defaultValue) {
                    fromModel[item.key] = item.defaultValue;
                }
                if (item.type != 'switch') {
                    fromModel[item.key] = fromModel[item.key] ? fromModel[item.key] : item.defaultValue || "";
                } else {
                    fromModel[item.key] = fromModel[item.key] ? fromModel[item.key] : item.defaultValue;
                }
            });
            fromModel = this.transformKeysToNestedObject(fromModel);
            this.fromModel = { ...deepCopy(this.fromModel), ...deepCopy(fromModel) };
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

        /**清空表单数据*/
        clearForm() {
            this.$refs["dzsForm"].resetFields();
            this.initModel(this.options);
            this.$emit("update:value", this.fromModel);
        },

        /**调用饿了么表单的原生方法*/
        getFormMethod() {
            return this.$refs["dzsForm"];
        },

        /**赋值*/
        setFormData(data) {
            if(JSON.stringify(data) == '{}' || !data) return ;
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
                    this.formBoxWidth = width;
                    this.labelPosition = width <= 768 ? "top" : "left";
                    if (this.options && this.options.formProps) {
                        let labelPosition = this.options.formProps['label-position'] || this.options.formProps['labelPosition']
                        if (labelPosition) {
                            this.labelPosition = labelPosition;
                        }
                    }
                    this.toolbar = width <= 768 ? phoneToolbar : toolbar;
                    this.formItem = deepCopy(this.options.formItem);
                    if (!this.formItem) return;
                    this.formItem.forEach((item) => {
                        // 兼容手机端
                        item.span = width <= 768 ? 24 : item.span;
                    })
                }
            })
            resizeObserver.observe(document.querySelector(`#${this.fromId}`));
        }
    },
};
</script>

<style lang="less" scoped>
.ruleForm {
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
