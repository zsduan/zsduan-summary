<!--
 * @Author: zs.duan
 * @Date: 2021-12-20 16:33:42
 * @LastEditors: zs.duan
 * @LastEditTime: 2022-11-29 20:45:47
 * @FilePath: \vue2+elui+template\src\components\dzs-form\index.vue
-->
<template>
    <div class="form-box">
        <el-form
            v-bind="{...formProps}"
            :model="fromModel"
            :rules="fromRules"
            ref="dzsForm"
            class="ruleForm"
            @submit.native.prevent="submit('dzsForm')"
        >
            <!-- 自定义头部 -->
            <el-row>
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
                                ></el-input>
                                <div class="from-item-tips" v-if="item.props && item.props.tips">{{item.props.tips}}</div>
                            </el-form-item>
                            <!-- 选择框 -->
                            <el-form-item :label="item.label" :prop="item.key" v-if="item.type == 'select'">
                                <el-select
                                    v-model="fromModel[item.key]"
                                    v-bind="{...item.props}"
                                    @input="changeVaule($event,item.key)"
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
                                ></el-date-picker>
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
    name: "From",
    components: {
        dzsEditors,
        dzsUploadImg,
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
    },
    data() {
        return {
            fromModel: {},
            fromRules: {},
            formItem: [], //表单初始数据
            formProps: {}, //表单配置
            pickerOptions: pickerOptions,
        };
    },
    watch: {
        options: {
            handler(newValue, oldValue) {
                if (!newValue.formItem || !newValue.formItem.length) return;
                this.formProps = newValue.formProps || {};
                this.formItem = newValue.formItem;
                this.formItem.forEach((item) => {
                    if ((item.type === "checkbox" || item.type === "uploadImg") && !item.defaultValue) {
                        item.defaultValue = [];
                    }
                    if (item.type == "switch" && (!item.defaultValue || item.defaultValue == 'false') ) {
                        item.defaultValue = false;
                    }
                    // input框 在饿了吗ui 中需要是 string类型
                    if(item.type == 'input' && item.defaultValue) item.defaultValue = (item.defaultValue).toString();
                    if (!item.props) item.props = {};
                    this.fromRules[item.key] = item.rules || [];
                    if (item.defaultValue) {
                        this.changeVaule(item.defaultValue, item.key);
                    }
                    this.fromModel[item.key] = item.defaultValue || "";
                });
            },
            deep: true,
            immediate: true,
        },
    },
    methods: {
        // 改变输入的值
        changeVaule(value, key) {
            delete this.fromModel[key];
            this.$set(this.fromModel, key, value);
            this.$emit("update:value", this.fromModel);
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
                                if (item.type == "uploadImg") {
                                    let urlList = this.fromModel[key];
                                    sendList[key] = "";
                                    if (urlList && urlList.length > 0) {
                                        if (urlList.length == 1) {
                                            sendList[key] = urlList[0].uploadUrl;
                                        } else {
                                            urlList.forEach((item) => {
                                                sendList[key] += item.uploadUrl + ",";
                                            });
                                        }
                                    }
                                }
                                if (item.type == "checkbox") {
                                    sendList[key] = this.fromModel[key].join(",");
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

        cancel() {
            this.$emit("onCancel");
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
    .from-item-tips{
        font-size: 12px;
        color: #ccc;
        padding-top: 3px;
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
@media screen and (max-width : 768px) {
    .ruleForm{
        width: 100%;
        min-width: 100%;
    }
}
</style>
