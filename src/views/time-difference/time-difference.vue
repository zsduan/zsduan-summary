<template>
    <div>
        <div class="page">
            <h2>基础用法</h2>
            <div class="item">
                <dzs-form :options="formOptions" @onSubmit="onSubmit"></dzs-form>
                <div class="guid">{{time}}</div>
                <dzs-code title="使用方法" :value="code1"></dzs-code>
            </div>
            <h2>源代码下载/查看</h2>
            <div class="item">
                <a target="_blank" href="https://github.com/zsduan/zsduan-summary/blob/master/src/utils/time-difference.js">下载/查看地址</a>
            </div>
        </div>
        <el-backtop :visibility-height="20" ></el-backtop>
    </div>
</template>
<script>
import timeDifference from "@/utils/time-difference";
import dzsForm from "@/components/dzs-form/index.vue";
import { code1 } from "./config";
export default {
    components: {
        dzsForm,
    },
    computed: {
        formOptions() {
            return {
                formProps: {
                    "label-width": "110px",
                },
                formItem: [
                    {
                        label: "开始时间",
                        key: "startTime",
                        type: "date",
                        span: 12,
                        rules: [
                            {
                                required: true,
                                message: "请选择开始时间",
                                trigger: "change",
                            },
                        ],
                        props: {
                            type: "datetime",
                            "value-format": "yyyy-MM-dd HH:mm:ss",
                            placeholder: "请选择开始时间",
                        },
                    },
                    {
                        label: "结束时间",
                        key: "endTime",
                        type: "date",
                        span: 12,
                        rules: [],
                        props: {
                            type: "datetime",
                            "value-format": "yyyy-MM-dd HH:mm:ss",
                            placeholder: "请选择结束时间",
                        },
                    },
                ],
            };
        },
    },
    data() {
        return {
            time: {},
            code1: code1,
        };
    },
    methods: {
        onSubmit(e) {
            timeDifference({
                startDate: e.startTime,
                endDate: e.endTime,
                success: (res) => {
                    this.time = res;
                },
            });
        },
    },
};
</script>
<style lang="less" scoped>
.guid {
    padding-top: 10px;
}
</style>