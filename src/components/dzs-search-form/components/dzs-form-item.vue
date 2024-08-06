<template>
    <div class="dzs-form-item">
        <el-form-item :label="item.label" :prop="item.key">
            <!-- 自定义组件 -->
            <template v-if="item.props && item.props.isSlot">
                <slot :name="`${item.key}`"></slot>
            </template>
            <slot v-else></slot>
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