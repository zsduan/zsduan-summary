<template>
    <div class="public-item">
        <div class="title" v-if="title">{{ title }}</div>
        <div class="notice-bar" v-if="tips">
            <dzs-notice-bar :text="tips" type="success" :showCloseIcon="false">
            </dzs-notice-bar>
        </div>
        <slot></slot>

        <!-- 代码code -->
        <template v-if="codes.length">
            <div class="box-card" v-for="(item, index) in codes" :key="index">
                <div class="header-box">
                    <span>{{ item.title || '代码示例' }}</span>
                    <el-button type="text" @click="copy(item.code)">复制</el-button>
                </div>
                <div class="code-box" v-dzs-autoExpand="item.isOpen">
                    <vue-prism-editor :value="item.code"></vue-prism-editor>
                </div>
                <div>
                    <el-divider>
                        <i class="el-icon el-icon-caret-bottom" v-if="!item.isOpen"></i>
                        <i class="el-icon el-icon-caret-top" v-if="item.isOpen"></i>
                        <el-button type="text" @click="openCard(index)">
                            {{ item.isOpen ? "隐藏代码" : "展开代码" }}
                        </el-button>
                    </el-divider>
                </div>
            </div>
        </template>

        <!-- 参数说明 -->
        <template v-if="list && list.length">
            <dzs-table :tableHeader="tableHeader" :list="list" :showOperation="false" :tableOptions="tableOptions">
            </dzs-table>
        </template>

        <!-- 链接 -->
        <template v-if="links[0]">
            <el-link v-for="(item, index) in links" :key="index" :href="item.href" target="_blank">
                {{ item.title }}
            </el-link>
        </template>
        <template v-if="links.href">
            <el-link :href="links.href" target="_blank">{{ links.title }}</el-link>
        </template>
    </div>
</template>
<script>
import copy from "../../tool/copy";
import vuePrismEditor from '../vue-prism-editor/index';
import { tableHeader, tableOptions } from "./config";
import dzsNoticeBar from "../dzs-notice-bar/index.vue";
export default {
    name: "publicItem",
    components: {
        vuePrismEditor,
        dzsNoticeBar
    },
    props: {
        code: {
            type: [Object, Array],
            default: () => {
                return {}
            }
        },
        title: {
            type: String,
            default: () => {
                return ''
            }
        },
        links: {
            type: [Array, Object],
            default: () => {
                return []
            }
        },
        list: {
            type: Array,
            default: () => {
                return []
            }
        },
        isOpen: {
            type: Boolean,
            default: () => {
                return false
            }
        },
        tips: {
            type: String,
            default: () => {
                return ''
            }
        }
    },
    data() {
        return {
            codes: [],
            tableHeader,
            tableOptions
        }
    },
    watch: {
        code: {
            handler(newVal, oldVal) {
                if (JSON.stringify(newVal) == '{}') return;
                if (Array.isArray(newVal)) {
                    this.codes = newVal;
                } else {
                    this.codes = [newVal];
                }
                this.codes.forEach(item => {
                    item.isOpen = this.isOpen;
                })
            },
            immediate: true,
            deep: true
        },

    },
    methods: {
        openCard(index) {
            this.codes[index].isOpen = !this.codes[index].isOpen;
            this.$forceUpdate()
        },
        copy(text) {
            copy({
                text: text,
                success: () => {
                    this.$notify({
                        title: '复制成功',
                        type: 'success'
                    });
                }
            });
        }
    }
}
</script>
<style lang="scss" scoped>
.public-item {
    padding-top: 10px;

    .title {
        font-size: 22px;
        padding: 10px 0;
        line-height: 20px;
        font-weight: 500;
    }

    .notice-bar{
        margin-bottom: 10px;
    }

    .box-card {
        margin: 10px 0;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
        padding: 10px;
        padding-top: 0;

        .header-box {
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-bottom: 1px solid #ebeef5;
        }

        .el-icon {
            color: var(--themecolor);
        }
    }
}
</style>
