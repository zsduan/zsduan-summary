export const code1 = `
<template>
    <dzs-popup :isShow.sync="isShow">
        <div>我是一个默认的弹窗</div>
    </dzs-popup>
</template>
import dzsDialog from "@/components/dzs-dialog/index.vue"
export default {
    components: {
        dzsDialog
    },
    data(){
        return {
            isShow : false
        }
    }
}
`

export const code2 = `
<template>
    <dzs-popup :isShow.sync="isShow">
        <div>我是一个有底部的弹窗</div>
        <template slot="footer">
            <el-button>提交</el-button>
        </template>
    </dzs-popup>
</template>
<script>
import dzsDialog from "@/components/dzs-dialog/index.vue"
export default {
    components: {
        dzsDialog
    },
    data(){
        return {
            isShow : false
        }
    }
}
</script>

`