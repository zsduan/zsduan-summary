<template>
    <div class="dzs-item">
        <!-- 输入框 -->
        <template v-if="item.type == 'input'">
            <el-input :value="value" v-bind="{ ...item.props }" @input="changeVaule($event, item.key)">
                <template v-if="item.slots" :slot="item.slots.name">
                    {{ item.slots.text }}
                </template>
            </el-input>
        </template>
        <!-- 选择框 -->
        <template v-if="item.type == 'select'">
            <el-select :value="value" v-bind="{ ...item.props }" @input="changeVaule($event, item.key)">
                <el-option style="padding : 0 6px;" v-for="(option, idx) in item.children"
                    :key="option.value + (idx).toString()" :label="option.label" :value="option.value"></el-option>
            </el-select>
        </template>
        <!-- 数字输入框 -->
        <template v-if="item.type == 'number'">
            <el-input-number :value="value" v-bind="{ ...item.props }"
                @input="changeVaule($event, item.key)"></el-input-number>
        </template>
        <!-- 日期选择器 -->
        <template v-if="item.type == 'date'">
            <el-date-picker :value="value" v-bind="{ ...item.props }"
                @input="changeVaule($event, item.key)"></el-date-picker>
        </template>
        <!-- 时间选择器 -->
        <template v-if="item.type == 'time'">
            <el-time-picker :value="value" v-bind="{ ...item.props }"
                @input="changeVaule($event, item.key)"></el-time-picker>
        </template>
        <!-- 颜色选择器 -->
        <template v-if="item.type == 'color'">
            <el-color-picker :value="value" v-bind="{ ...item.props }"
                @input="changeVaule($event, item.key)"></el-color-picker>
        </template>
        <!-- 开关 -->
        <template v-if="item.type == 'switch'">
            <el-switch :value="value" v-bind="{ ...item.props }" @input="changeVaule($event, item.key)"></el-switch>
        </template>
        <!-- 多选框 -->
        <template v-if="item.type == 'checkbox'">
            <el-checkbox-group :value="value" v-bind="{ ...item.props }" @input="changeVaule($event, item.key)">
                <el-checkbox class="items" v-for="(option, idx) in item.children" v-bind="{ ...option.props }"
                    :key="option.value + idx" :label="option.value">
                    {{ option.label }}
                </el-checkbox>
            </el-checkbox-group>
        </template>
        <!-- 单选框 -->
        <template v-if="item.type == 'radio'">
            <el-radio-group :value="value" v-bind="{ ...item.props }" @input="changeVaule($event, item.key)">
                <el-radio class="items" v-for="(option, idx) in item.children" v-bind="{ ...option.props }"
                    :key="option.value + idx" :label="option.value">
                    {{ option.label }}
                </el-radio>
            </el-radio-group>
        </template>
        <!-- 上传图片 -->
        <template v-if="item.type == 'uploadImg'">
            <dzs-upload-img :value="value" v-bind="{ ...item.props }"
                @change="changeVaule($event, item.key)"></dzs-upload-img>
        </template>
        <!-- 上传文件 -->
        <template v-if="item.type == 'uploadFile'">
            <dzs-upload-file :isPhone="formBoxWidth <= 768" :value="value" v-bind="{ ...item.props }"
                @change="changeVaule($event, item.key)"></dzs-upload-file>
        </template>
        <!-- 富文本组件 -->
        <template v-if="item.type == 'editor'">
            <dzs-editor :value="value" :toolbar="toolbar" v-bind="{ ...item.props }"
                @save="changeVaule($event, item.key)" :show_save="false">
            </dzs-editor>
        </template>
    </div>
</template>
<script>
import dzsUploadImg from '../../dzs-upload-img/index.vue';
import dzsUploadFile from '../../dzs-upload-file/index.vue';
import dzsEditor from '../../dzs-editor/index.vue';
export default {
    name: 'dzsItem',
    components: {
        dzsUploadImg,
        dzsUploadFile,
        dzsEditor
    },
    props: {
        item: {
            type: Object,
            required: true
        },
        value: {
            type: [String, Number, Boolean, Object, Array , Date],
            required: true
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
        }

    },
    methods: {
        changeVaule(value, keyPath) {
            this.$emit('change', value, keyPath);
        }
    }
}
</script>
<style lang="scss" scoped></style>
