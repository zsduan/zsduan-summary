<template>
    <div class="back-top" v-show="isShow" @click="handleBackTop">
        <i class="el-icon-caret-top"></i>
    </div>
</template>
<script>
/**
 * 返回顶部组件
 * @author zs.duan
 * @date 2024-07-26
 * @props {string} target 监听的元素
 * */ 
export default {
    name: 'dzsBacktop',
    props: {
        target: {
            type: String,
            default: 'body'
        }
    },
    mounted() {
        const target = document.querySelector(this.target)
        target.addEventListener('scroll', this.handleScroll)
    },
    beforeDestroy() {
        const target = document.querySelector(this.target)
        target.removeEventListener('scroll', this.handleScroll)
    },
    data() {
        return {
            isShow: false
        }
    },
    methods: {
        handleScroll(event) {
            const target = document.querySelector(this.target)
            let scrollTop = target.scrollTop;
            this.isShow = scrollTop > 100
        },
        handleBackTop() {
            const target = document.querySelector(this.target)
            this.smoothScrollToTop(target , 2000)
        },
        smoothScrollToTop(element, duration) {
            var start = element.scrollTop,
                end = 0,
                currentTime = 0;

            var time = Math.max(
                0.1,    // 最小时间间隔  
                Math.min(duration || 0.5, 0.3 + (Math.abs(start - end)) / 1000) // 计算所需时间  
            );

            var easeInOutQuad = function (t, b, c, d) {
                t /= d / 2;
                if (t < 1) return c / 2 * t * t + b;
                t--;
                return -c / 2 * (t * (t - 2) - 1) + b;
            };

            var animation = function () {
                currentTime += 10 / 60;

                var value = easeInOutQuad(currentTime, start, end - start, time);
                element.scrollTop = Math.ceil(value);

                if (currentTime < time) {
                    requestAnimationFrame(animation);
                } else {
                    element.scrollTop = end;
                }
            };
            animation();
        }
    }
}
</script>
<style lang="scss" scoped>
.back-top {
    height: 40px;
    width: 40px;
    background-color: #f2f5f6;
    box-shadow: 0 0 6px rgba(0, 0, 0, .12);
    text-align: center;
    line-height: 40px;
    color: #1989fa;
    border-radius: 50%;
    position: fixed;
    right: 20px;
    bottom: 20px;
    font-size: 18px;
}
</style>