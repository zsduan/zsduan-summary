<template>
    <div class="dzs-form-item">
        <el-form-item :label="item.label" :prop="item.key">
            <slot :name="`${item.key}Before`"></slot>
            <!-- 自定义组件 -->
            <template v-if="item.props && item.props.isSlot">
                <slot :name="`${item.key}`"></slot>
            </template>
            <slot v-else></slot>
            <slot :name="`${item.key}After`"></slot>
        </el-form-item>
    </div>
</template>
<script>
export default{
    name: "dzsFormItem",
    props: {
        item: {
            type: Object,
            default: () => {
                return {};
            }
        }
    }
}
</script>