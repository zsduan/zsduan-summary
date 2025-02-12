<template>
    <section>
        <public-item title="基础用法" :code="code1"> </public-item>
        <public-item title="源代码查看" :links="links"></public-item>
        <dzs-backtop  target=".el-main"></dzs-backtop>
        <dzs-navigation-title></dzs-navigation-title>
    </section>
</template>
<script>
import { code1 } from './config';
export default {
    data() {
        return {
            code1 : {
                title: "代码示例",
                code : code1,
                lang : 'js'
            },
            links: {
                href: "https://github.com/zsduan/zsduan-summary/blob/master/src/router/setRouter.js",
                title: "源码"
            },
        };
    }
};
</script>
<style lang="scss" scoped>

</style>