<template>
    <div class="dzs-item">
        <!-- 输入框 -->
        <template v-if="item.type == 'input'">
            <el-input v-if="status != 'details'" v-model="editValue" v-bind="{ ...item.props }"
                @input="changeVaule($event, item.key)">
                <template v-if="item.slots" :slot="item.slots.name">
                    {{ item.slots.text }}
                </template>
            </el-input>
            <span v-else class="dzs-suffix">{{ editValue }}</span>
        </template>
        <!-- 选择框 -->
        <template v-if="item.type == 'select'">
            <el-select v-if="status != 'details'" v-model="editValue" v-bind="{ ...item.props }"
                @input="changeVaule($event, item.key)">
                <el-option style="padding : 0 6px;" v-for="(option, idx) in item.children"
                    :key="option.value + (idx).toString() + getRandom()" :label="option.label"
                    :value="option.value"></el-option>
            </el-select>
            <span v-else class="dzs-suffix">{{ getSelectValue(editValue) }}</span>
        </template>
        <!-- 数字输入框 -->
        <template v-if="item.type == 'number'">
            <el-input-number v-if="status != 'details'" v-model="numberEditValue" v-bind="{ ...item.props }"
                @change="changeVaule($event, item.key)"></el-input-number>
            <span v-else class="dzs-suffix">{{ editValue }}</span>
        </template>
        <!-- 日期选择器 -->
        <template v-if="item.type == 'date'">
            <el-date-picker v-if="status != 'details'" v-model="editValue" v-bind="{ ...item.props }"
                @input="changeVaule($event, item.key)"></el-date-picker>
            <span v-else class="dzs-suffix">{{ editValue }}</span>
        </template>
        <!-- 时间选择器 代步进 -->
        <template v-if="item.type == 'timeSelect'">
            <el-time-select v-if="status != 'details'" v-model="editValue" v-bind="{ ...item.props }"
                @input="changeVaule($event, item.key)"></el-time-select>
            <span v-else class="dzs-suffix">{{ editValue }}</span>
        </template>
        <!-- 时间选择器 -->
        <template v-if="item.type == 'time'">
            <el-time-picker v-if="status != 'details'" v-model="editValue" v-bind="{ ...item.props }"
                @input="changeVaule($event, item.key)"></el-time-picker>
            <span v-else class="dzs-suffix">{{ editValue }}</span>
        </template>
        <!-- 颜色选择器 -->
        <template v-if="item.type == 'color'">
            <el-color-picker v-if="status != 'details'" v-model="editValue" v-bind="{ ...item.props }"
                @input="changeVaule($event, item.key)"></el-color-picker>
            <span v-else>
                <span class="details-color" :style="{ 'background-color': editValue }"></span>
                <span class="dzs-suffix">{{ editValue }}</span>
            </span>
        </template>
        <!-- 开关 -->
        <template v-if="item.type == 'switch'">
            <el-switch v-if="status != 'details'" v-model="editValue" v-bind="{ ...item.props }"
                @input="changeVaule($event, item.key)"></el-switch>
            <span class="dzs-suffix" v-else>{{ getSwitchValue(editValue) }}</span>
        </template>
        <!-- 多选框 -->
        <template v-if="item.type == 'checkbox'">
            <el-checkbox-group v-if="status != 'details'" v-model="editValue" v-bind="{ ...item.props }"
                @input="changeVaule($event, item.key)">
                <el-checkbox class="items" v-for="(option, idx) in item.children" v-bind="{ ...option.props }"
                    :key="option.value + (idx).toString() + getRandom()" :label="option.value">
                    {{ option.label }}
                </el-checkbox>
            </el-checkbox-group>
            <span class="dzs-suffix" v-else>{{ getCheckboxValue(editValue) }}</span>
        </template>
        <!-- 单选框 -->
        <template v-if="item.type == 'radio'">
            <el-radio-group v-if="status != 'details'" v-model="editValue" v-bind="{ ...item.props }"
                @input="changeVaule($event, item.key)">
                <el-radio class="items" v-for="(option, idx) in item.children" v-bind="{ ...option.props }"
                    :key="option.value + (idx).toString() + getRandom()" :label="option.value">
                    {{ option.label }}
                </el-radio>
            </el-radio-group>
            <span class="dzs-suffix" v-else>{{ getRadioValue(editValue) }}</span>
        </template>
        <!-- 上传图片 -->
        <template v-if="item.type == 'uploadImg'">
            <dzs-upload-img v-model="editValue" v-bind="{ ...item.props }"
                @change="changeVaule($event, item.key)"></dzs-upload-img>
        </template>
        <!-- 上传文件 -->
        <template v-if="item.type == 'uploadFile'">
            <dzs-upload-file :isPhone="formBoxWidth <= 768" v-model="editValue" v-bind="{ ...item.props }"
                @change="changeVaule($event, item.key)"></dzs-upload-file>
        </template>
        <!-- 富文本组件 -->
        <template v-if="item.type == 'editor'">
            <dzs-editor v-model="editValue" :toolbar="toolbar" v-bind="{ ...item.props }"
                @save="changeVaule($event, item.key)" :show_save="false">
            </dzs-editor>
        </template>
        <!-- markdown 组件 -->
         <template v-if="item.type == 'markdown'"> 
            <dzs-markdown v-model="editValue" v-bind="{ ...item.props }" @save="changeVaule($event, item.key)"></dzs-markdown>
        </template>
        <div class="from-item-tips" v-if="getTips() && item.type != 'divider'">
            {{ getTips() }}
        </div>
    </div>
</template>
<script>
import dzsUploadImg from '../../dzs-upload-img/index.vue';
import dzsUploadFile from '../../dzs-upload-file/index.vue';
import dzsEditor from '../../dzs-editor/index.vue';
import dzsMarkdown from '../../dzs-markdown/index.vue';
export default {
    name: 'dzsItem',
    components: {
        dzsUploadImg,
        dzsUploadFile,
        dzsEditor,
        dzsMarkdown
    },
    props: {
        item: {
            type: Object,
            required: true
        },
        value: {
            type: [String, Number, Boolean, Object, Array, Date],
            default: () => {
                return ""
            }
        },
        formBoxWidth: {
            type: Number,
            default: () => {
                return 0
            }
        },
        toolbar: {
            type: Array,
            default: () => {
                return []
            }
        },
        status: {
            type: String,
            default: () => {
                return 'normal'
            }
        }

    },
    data() {
        return {
            editValue: "",
            numberEditValue: "",
        }
    },
    watch: {
        value: {
            handler(val, oldVal) {
                if (this.item.type == 'number') {
                    this.numberEditValue = val ? Number(val) : 0;
                    return;
                }
                this.editValue = val || "";
            },
            deep: true,
            immediate: true
        }
    },
    methods: {
        changeVaule(value, keyPath) {
            this.$emit('change', value, keyPath);
        },
        /**设置提示信息*/
        getTips() {
            if (this.item.props && this.item.props.tips) {
                return this.item.props.tips
            };
            return ""
        },
        /**获取switch的value*/
        getSwitchValue(value) {
            let switchValue = true;
            if (typeof value == 'boolean') {
                switchValue = value;
            } else if (typeof value == 'number') {
                switchValue = value > 0;
            } else if (typeof value == 'string') {
                switchValue = value == 'true';
            } else {
                return value;
            }
            let returnText = switchValue ? '是' : '否';
            if (props.item.props) {
                returnText = switchValue ? props.item.props['active-text'] || returnText : props.item.props['inactive-text'] || returnText;
            }
            return returnText;
        },

        /**获取选择框的值*/
        getSelectValue(value) {
            let returnText = '';
            if (!props.item.children) return value;
            if (!value) return ""
            const children = props.item.children;
            if (typeof value == 'string' || typeof value == 'number') {
                returnText = children.find((item) => item.value == value)?.label || value;
            }
            if (Array.isArray(value)) {
                returnText = value.map((item) => children.find((child) => child.value == item)?.label || item).join(',');
            }
            return returnText;
        },

        /**获取单选框的值*/
        getRadioValue(value) {
            let returnText = '';
            if (!props.item.children) return value;
            if (!value) return ""
            const children = props.item.children;
            returnText = children.find((item) => item.value == value)?.label || value;
            return returnText;
        },

        /**获取多选框的值*/
        getCheckboxValue(value) {
            let returnText = '';
            if (!props.item.children) return value;
            if (!value) return ""
            const children = props.item.children;
            returnText = value.map((item) => children.find((child) => child.value == item)?.label || item).join(',');
            return returnText;
        },
        /**获取随机数*/
        getRandom() {
            let reslut = Math.random() * (1000 - 1) + 1;
            return reslut;
        }
    }
}
</script>
<style lang="scss" scoped>
.from-item-tips {
    font-size: 12px;
    color: #999;
    line-height: 14px;
    padding-top: 4px;
}
</style>
