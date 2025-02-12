<template>
    <section>
        <public-item title="基础用法">
            <div class="keyboard">
                <el-input placeholder="请输入车牌号" v-model="plateNumber" class="ipt"
                    @focus="showKeyboard = true"></el-input>
                <dzs-license-plate-keyboard :isShow.sync="showKeyboard" @change="changeKeyboard" @del="del">
                </dzs-license-plate-keyboard>
            </div>
        </public-item>
        <public-item title="手机端" :code="code1">
            <div class="phone-public">
                <div class="phone-box">
                    <el-input placeholder="请输入车牌号" v-model="plateNumber" class="ipt"
                        @focus="showKeyboard = true"></el-input>
                    <dzs-license-plate-keyboard :isShow.sync="showKeyboard" @change="changeKeyboard" @del="del">
                    </dzs-license-plate-keyboard>
                </div>
            </div>
        </public-item>
        <public-item title="参数说明" :list="tableData"></public-item>
        <public-item title="组件源代码查看" :links="links"></public-item>
        <dzs-backtop  target=".el-main"></dzs-backtop>
        <dzs-navigation-title></dzs-navigation-title>
    </section>
</template>
<script>
import { tableData } from "./desc.js";
import { code1 } from "./config.js";
import dzsLicensePlateKeyboard from "@/components/dzs-license-plate-keyboard/index.vue";
export default {
    components: {
        dzsLicensePlateKeyboard
    },
    data() {
        return {
            code1: {
                title: "代码示例",
                code: code1,
                lang: "vue"
            },
            tableData,
            plateNumber: "",
            showKeyboard: true,
            links: {
                href: "https://github.com/zsduan/zsduan-summary/blob/master/src/components/dzs-license-plate-keyboard/index.vue",
                title: "组件源码"
            },
        }
    },
    methods: {
        changeKeyboard(e) {
            this.plateNumber += e;
        },
        del() {
            this.plateNumber = this.plateNumber.substring(0, this.plateNumber.length - 1)
        }
    }
}
</script>
<style lang="scss" scoped>
.keyboard {
    position: relative;
    height: 320px;
}

.phone-box {
    position: relative;
}
</style>