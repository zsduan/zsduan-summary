
/**基础用法*/ 
export const code1 = `
<template>
    <dzs-notice-bar :text="text"></dzs-notice-bar>
</template>
<script>
import dzsNoticeBar from "@/components/dzs-notice-bar/index.vue";
exdefault {
    components : {
        dzsNoticeBar
    },
    data() {
        return {
            text: "欢迎来到zs.duan的个人总结"
        }
    }
}
</script>
`

/**图标的使用*/ 
export const code2 = `
<template>
    <div>
        <el-divider content-position="left">左边 饿了吗自带图标</el-divider>
        <dzs-notice-bar icon="el-icon-warning-outline"></dzs-notice-bar>
        <el-divider content-position="left">左边 地址图标</el-divider>
        <dzs-notice-bar imgSrc="https://anran233.com/img/Applet.jpg"></dzs-notice-bar>
        <el-divider content-position="left">右边 饿了吗自带图标</el-divider>
        <dzs-notice-bar closeIcon="el-icon-warning-outline"></dzs-notice-bar>
        <el-divider content-position="left">右边 地址图标</el-divider>
        <dzs-notice-bar closeImgSrc="https://anran233.com/img/Applet.jpg"></dzs-notice-bar>
        <el-divider content-position="left">关闭图标显示</el-divider>
        <dzs-notice-bar :showCloseIcon="false" :showIcon="false"></dzs-notice-bar>
    </div>
</template>
<script>
import dzsNoticeBar from "@/components/dzs-notice-bar/index.vue";
exdefault {
    components : {
        dzsNoticeBar
    },
}
</script>
`


/**滚动文字*/ 
export const code3 = `
<template>
    <dzs-notice-bar :speed="5" :isMove="true"></dzs-notice-bar>
</template>
<script>
import dzsNoticeBar from "@/components/dzs-notice-bar/index.vue";
exdefault {
    components : {
        dzsNoticeBar
    }
}
</script>
`

/**多行显示*/ 
export const code4 = `
<template>
    <dzs-notice-bar :isEline="true" text="zs.duan的个人博客 zs.duan的个人博客 zs.duan的个人博客 zs.duan的个人博客 zs.duan的个人博客 zs.duan的个人博客 zs.duan的个人博客 zs.duan的个人博客 zs.duan的个人博客 zs.duan的个人博客 zs.duan的个人博客 zs.duan的个人博客"></dzs-notice-bar>
</template>
<script>
import dzsNoticeBar from "@/components/dzs-notice-bar/index.vue";
exdefault {
    components : {
        dzsNoticeBar
    }
}
</script>
`

/**自定义颜色*/
export const code5 = `
<template>
    <dzs-notice-bar :text="text" color="red" backgroundColor="rgba(255,0,0,0.1)"></dzs-notice-bar>
</template>
<script>
import dzsNoticeBar from "@/components/dzs-notice-bar/index.vue";
exdefault {
    components : {
        dzsNoticeBar
    }
}
</script>
`