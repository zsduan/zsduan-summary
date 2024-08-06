<template>
    <ul class="sidebar-box">
        <template v-for="(item, index) in routes">
            <li v-if="!item.hidden">
                <template v-if="item.children">
                    <div class="title">{{ item.meta.title }}</div>
                    <ol>
                        <li v-for="(child, childIndex) in item.children" :key="childIndex">
                            <component v-bind="linkProps(child.path)">
                                {{ child.meta.title }}
                            </component>
                        </li>
                    </ol>
                </template>
            </li>
        </template>
    </ul>
</template>
<script>
import { routes } from '@/router'
export default {
    data() {
        return {
            routes: routes,
        }
    },
    mounted() {
        let dom = document.querySelector('.router-link-active');
        if (dom) dom.scrollIntoView();
    },
    methods: {
        linkProps(path) {
            if (path.indexOf('http') === 0 || path.indexOf('//') === 0) {
                return {
                    is: 'a',
                    href: path,
                    target: "_blank"
                }
            } else {
                return {
                    is: 'router-link',
                    to: { path }
                }
            }
        }
    }
}
</script>
<style lang="scss" scoped>
.sidebar-box {
    height: calc(100% - 87px);
    overflow-y: scroll;
    // position: fixed;
    margin-top: 10px;

    // 滚动条宽度
    &::-webkit-scrollbar {
        width: 6px;
        background-color: #fff;
        display: block;
    }

    // 滚动条轨道
    &::-webkit-scrollbar-track {
        background-color: transparent;
        -webkit-border-radius: 2em;
        -moz-border-radius: 2em;
        border-radius: 2em;
    }

    // 滚动条背景
    &::-webkit-scrollbar-track-piece {
        background-color: transparent;
        -webkit-border-radius: 2em;
        -moz-border-radius: 2em;
        border-radius: 2em;
    }

    // 滚动条滑块
    &::-webkit-scrollbar-thumb {
        background-color: #e9e7e7;
        -webkit-border-radius: 2em;
        -moz-border-radius: 2em;
        border-radius: 2em;
    }

    .title {
        line-height: 20px;
        font-size: 16px;
        font-weight: 600;
        color: #213547;
        transition: color .5s;
        position: -webkit-sticky;
        position: sticky;
        top: 0px;
        background-color: #fff;
    }

    ol {
        padding-top: 10px;

        li {
            line-height: 30px;
            cursor: pointer;
            font-size: 14px;

            a {
                &:hover {
                    color: var(--themecolor);
                }
            }

            .router-link-active {
                color: var(--themecolor);
            }
        }
    }

    >li {
        padding-top: 10px;
    }
}
</style>