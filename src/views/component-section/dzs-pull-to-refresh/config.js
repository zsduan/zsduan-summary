
/**基础用法*/
export const code1 = `
<template>
    <dzs-pull-to-refresh ref="refresh" :enableReachBottom="true" :onReachBottom="onReachBottom" :onPullDownRefresh="onPullDownRefresh">
        <div v-for="(item, index) in items" :key="index" class="item">
            {{ item }}
        </div>
    </dzs-pull-to-refresh>
</template>
<script>
import dzsPullToRefresh from "@/components/dzs-pull-to-refresh/index.vue";
exdefault {
    components : {
        dzsPullToRefresh
    },
    data() {
        return {
            items: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5' , 'Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5' , 'Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'],
        }
    }
}
</script>
`

