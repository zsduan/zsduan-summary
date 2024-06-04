<template>
    <div>
        <h2>电脑端</h2>
        <div class="item">
            <dzs-header-btn></dzs-header-btn>
        </div>
        <h2>手机端</h2>
        <div class="item">
            <div class="is-phone-public">
                <div class="phone-box">
                    <dzs-header-btn></dzs-header-btn>
                </div>
            </div>
        </div>
        <h2>代码示例</h2>
        <div class="item">
            <dzs-code title="代码示例" :value="code1"></dzs-code>
        </div>
        <h2>参数说明</h2>
        <div class="item">
            <dzs-table :tableHeader="descHeader" :list="descData" :showOperation="false">
            </dzs-table>
        </div>
    </div>
</template>
<script>
import dzsHeaderBtn from "@/components/dzs-header-btn/index.vue";
import { code1 } from "./config";
import { descHeader, descData } from "./desc";
export default {
    name: "public-button",
    components: {
        dzsHeaderBtn,
    },
    data() {
        return {
            code1,
            descHeader,
            descData,
        };
    },
    methods: {},
};
</script>
<style lang="less" scoped></style>