<template>
    <div class="refresh-container-box" :style="{ height: height }">
        <slot name="header"></slot>
        <div :ref="refreshContainer" class="refresh-container" @touchstart="onTouchStart" @touchmove="onTouchMove"
            @touchend="onTouchEnd">
            <!-- 刷新区域 -->
            <div :ref="refreshHeader" class="refresh-header" :style="{ backgroundColor: refreshBackgroundColor }">
                <slot name="refreshHeader"></slot>
                <span :ref="refreshTextDom" v-if="!$slots.refreshHeader">{{ refreshText }}</span>
            </div>

            <!-- 内容区域 -->
            <div :ref="refreshContent" class="content">
                <slot></slot>
            </div>
            <div :ref="loadMore" v-show="enableReachBottom && isReachBottom" class="load-more">
                <slot name="loadMore"></slot>
                <span v-if="!$slots.loadMore">加载更多</span>
            </div>
        </div>
    </div>
</template>
<script>
/**
 * 下拉刷新与上拉加载组件
 * 
 * @props : height 组件高度 String 默认 "100%"
 * @props : enablePullDownRefresh 是否允许下拉刷新 Boolean 默认 true
 * @props : onPullDownRefresh 下拉刷新回调 Function 默认 null
 * @props : refreshFunLoading 刷新中回调 Function 默认 null
 * @props : onReachBottomDistance 页面上拉触底事件触发时距底部距离 Number 默认 20
 * @props : enableReachBottom 是否允许上拉加载 Boolean 默认 false
 * @props : onReachBottom 上拉完成回调 Function 默认 null
 * @props : pullDownRefreshHeight 下拉刷新的高度 Number 默认 50
 * @props : refreshBackgroundColor 下拉刷新背景颜色 String 默认 "#f7f7f7"
 * 
 * @slot : header 下拉刷新区域
 * @slot : refreshHeader 下拉刷新区域
 * @slot : loadMore 加载更多 
 */
export default {
    name: "dzsPullToRefresh",
    props: {
        /**高度*/
        height: {
            type: String,
            default: () => {
                return "100%"
            }
        },
        /**是否允许下拉刷新*/
        enablePullDownRefresh: {
            type: Boolean,
            default: () => {
                return true;
            }
        },
        /**
         * 刷新回调
         *  */
        onPullDownRefresh: {
            type: Function,
            default: () => {
                return null;
            },
        },
        /**刷新中回调 */
        refreshFunLoading: {
            type: Function,
            default: () => {
                return null;
            }
        },
        /**
         * 页面上拉触底事件触发时距页面底部距离
         *  */
        onReachBottomDistance: {
            type: Number,
            default: () => {
                return 20
            }
        },
        /**
         * 是否允许上拉加载
         *  */
        enableReachBottom: {
            type: Boolean,
            default: () => {
                return false;
            }
        },
        /** 上拉完成回调 */
        onReachBottom: {
            type: Function,
            default: () => {
                return null;
            }
        },
        /**下拉刷新的高度*/
        pullDownRefreshHeight: {
            type: Number,
            default: () => {
                return 50;
            }
        },
        /**下拉刷新背景颜色*/
        refreshBackgroundColor: {
            type: String,
            default: () => {
                return "#f7f7f7"
            }
        }

    },
    data() {
        return {
            startY: 0,
            currentY: 0,
            pulling: false,
            isRefreshing: false,
            refreshText: '下拉刷新',
            isReachBottom: false,
            isReachBottomScroll: true,
            onReachBottomDelay: 3000, // 关闭加载更多时间
            onReachBottomTimer: null,
            onPullDownRefreshDelay: 5000, // 关闭下拉刷新时间
            onPullDownRefreshTimer: null,
            refreshContainer: `refreshContainer${Date.now()}`,
            refreshContent: `refreshContent${Date.now()}`,
            loadMore: `loadMore${Date.now()}`,
            refreshHeader: `refreshHeader${Date.now()}`,
            refreshTextDom: `refreshText${Date.now()}`
        }
    },
    mounted() {
        let refreshContainer = this.$refs[this.refreshContainer];
        // 监听滚动
        refreshContainer.addEventListener('scroll', () => {
            this.onBottomShow(refreshContainer);
        });
    },
    beforeDestroy() {
        let refreshContainer = this.$refs[this.refreshContainer];
        refreshContainer.removeEventListener('scroll', () => {
            this.onBottomShow(refreshContainer);
        });
    },
    methods: {
        /**停止刷新*/
        stopPullDownRefresh() {
            this.refreshText = '刷新成功';
            this.onPullDownRefreshTimer && clearTimeout(this.onPullDownRefreshTimer);
            this.onPullDownRefreshTimer = null;
            setTimeout(() => {
                this.isRefreshing = false
                this.pulling = false
                let refreshHeaderHeight = this.pullDownRefreshHeight;
                const refreshHeader = this.$refs[this.refreshHeader];
                let timer = setInterval(() => {
                    refreshHeaderHeight -= 5;
                    refreshHeader.style.height = refreshHeaderHeight + 'px';
                    if (refreshHeaderHeight <= 0) {
                        clearInterval(timer);
                    }
                }, 10);
                setTimeout(() => {
                    this.refreshText = '下拉刷新'
                }, 200)
            }, 1000)
        },

        onTouchStart(e) {
            if (!this.enablePullDownRefresh) return;
            let refreshContainer = this.$refs[this.refreshContainer];
            if (refreshContainer.scrollTop === 0) {
                this.startY = e.touches[0].clientY
                this.pulling = true;
            }
        },

        onTouchMove(e) {
            if (!this.pulling) return
            this.currentY = e.touches[0].clientY
            const diff = this.currentY - this.startY;
            const refreshText = this.$refs[this.refreshTextDom];
            const refreshHeader = this.$refs[this.refreshHeader];
            if (diff > 0) {
                e.preventDefault()
                let pullDistance = Math.min(diff, 100);
                if (pullDistance > this.pullDownRefreshHeight) {
                    this.refreshText = '释放刷新';
                    pullDistance = this.pullDownRefreshHeight;
                } else {
                    this.refreshText = '下拉刷新'
                }
                refreshHeader.style.height = `${pullDistance}px`;
                refreshText.style.lineHeight = `${pullDistance}px`;
            }
        },

        onTouchEnd() {
            if (!this.pulling) return;
            const diff = this.currentY - this.startY
            this.pulling = false
            if (diff > 60) {
                this.isRefreshing = true
                this.refreshText = '刷新中...';
                this.onPullDownRefresh();
                this.onPullDownRefreshTimer = setTimeout(() => {
                    this.stopPullDownRefresh()
                }, this.onPullDownRefreshDelay);
            } else {
                const refreshHeader = this.$refs[this.refreshHeader];
                refreshHeader.style.height = '0px';
            }
        },
        onBottomShow(container) {
            if (!this.enableReachBottom || !this.isReachBottomScroll) return;
            const scrollTop = container.scrollTop;
            const scrollHeight = container.scrollHeight;
            const clientHeight = container.clientHeight;
            // 判断是否滚动到底部
            if (scrollHeight - scrollTop <= clientHeight + this.onReachBottomDistance) {
                this.isReachBottom = true;
                this.onReachBottom();
                this.onReachBottomTimer = setTimeout(() => { this.stopLoadMore() }, this.onReachBottomDelay);
            }
        },
        /**停止加载更多*/
        stopLoadMore() {
            this.isReachBottomScroll = false;
            this.isReachBottom = false;
            this.onReachBottomTimer && clearTimeout(this.onReachBottomTimer);
            this.onReachBottomTimer = null;
            // 防止抖动
            setTimeout(() => {
                this.isReachBottomScroll = true;
            }, 200);
        },

    },
}
</script>
<style lang="scss" scoped>
.refresh-container {
    height: 100%;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
}

.refresh-header {
    height: 0px;
    text-align: center;
    background-color: #f5f5f5;
    transition: transform 0.3s ease;
    font-size: 16px;
    color: #666;
    overflow: hidden;
}


.content {
    padding: 10px;
}


.load-more {
    text-align: center;
    margin-top: 10px;
    color: #666;
    font-size: 14px;
    height: 60px;
}
</style>