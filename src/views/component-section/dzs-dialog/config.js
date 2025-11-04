export const code1 = `
<template>
    <dzs-dialog :isShow.sync="isShow">
        <div>我是一个默认的弹窗</div>
    </dzs-dialog>
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
    <dzs-dialog :isShow.sync="isShow">
        <div>我是一个有底部的弹窗</div>
        <template slot="footer">
            <el-button>提交</el-button>
        </template>
    </dzs-dialog>
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

export const code3 = `
<template>
    <dzs-dialog :isShow.sync="isShow" title="设置标题栏颜色与标题字体颜色"   background-color="red" fontColor="#fff">
        <div>设置标题栏颜色与标题字体颜色</div>
    </dzs-dialog>
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

export const code4 = `
<template>
    <dzs-dialog :isShow.sync="isShow" title="设置高度"  height="200px">
        <div v-for="item in 50">滑动查看内容{{ item }}</div>
    </dzs-dialog>
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