<template>
    <div>
        <dzs-header title="代码编辑器" v-if="!newIndex"></dzs-header>
        <div class="page">
            <h2>基础用法</h2>
            <div class="item">
                <dzs-code-editor ></dzs-code-editor>
            </div>
            <h2>源代码下载/查看</h2>
            <div class="item">
                <a target="_blank"
                    href="https://github.com/zsduan/zsduan-summary/blob/master/src/utils/calender.js">下载/查看地址</a>
            </div>
        </div>
        <el-backtop :visibility-height="20" v-if="!newIndex"></el-backtop>
    </div>
</template>
<script>
import dzsCodeEditor from "@/components/dzs-code-editor/index.vue";
import { code1 } from "./config";
export default {
    components: {
        dzsCodeEditor
    },
    props: {
        newIndex: {
            type: Boolean,
            default: () => {
                return false
            }
        }
    },
    data() {
        return {
            time: {},
            code1: code1
        }
    },

    mounted() {

    },
    methods: {

    }
}
</script>
<style lang="less" scoped>
.guid {
    padding-top: 10px;
}
</style>