<template>
    <div class="dzs-navigation-title-box" v-if="navigationTitleArr.length">
        <ul>
            <li v-for="(item, index) in navigationTitleArr" :key="index">
                <a class="elli1" :class="[currentUrl == item ? 'active' : '']" :href="'#' + item">{{ item }}</a>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: "dzsNavigationTitle",
    data() {
        return {
            navigationTitleArr: [],
            currentUrl: "",
        };
    },
    mounted() {
        this.getAllNavigationTitle();
        const mainContent = document.querySelector('.el-main');
        mainContent && mainContent.removeEventListener("scroll", this.scrollEvent());
        mainContent.addEventListener("scroll", this.scrollEvent);
    },
    beforeDestroy() {
        const mainContent = document.querySelector('.el-main');
        mainContent && mainContent.removeEventListener("scroll", this.scrollEvent());
    },
    methods: {
        // 获取所有 .dzs-navigation-title 的节点
        getAllNavigationTitle() {
            let navigationTitle = document.querySelectorAll(
                ".dzs-navigation-title"
            );
            let navigationTitleArr = [];
            for (let i = 0; i < navigationTitle.length; i++) {
                if (navigationTitle[i].innerText) navigationTitleArr.push(navigationTitle[i].innerText);
            }
            this.navigationTitleArr = navigationTitleArr;
            this.getCurrentUrl();
        },
        /**获取当前url #的地址*/
        getCurrentUrl() {
            let url = window.location.href;
            let urlArr = url.split("#");
            this.currentUrl = decodeURIComponent(urlArr[urlArr.length - 1]);
            if (this.currentUrl && url.includes("#")) {
                setTimeout(() => {
                    window.location.href = url;
                }, 1000);
            }
            if (!url.includes("#")) {
                this.currentUrl = this.navigationTitleArr[0]
            }
        },
        /**监听 滚动事件 获取可视范围内的第一个 .dzs-navigation-title */
        scrollEvent() {
            const mainContent = document.querySelector('.el-main');
            // 获取 mainContent 的滚动条
            const scrollTop = mainContent.scrollTop;
            if (scrollTop < 40) {
                this.currentUrl = this.navigationTitleArr[0]
                return;
            }
            const isInViewport = (targetElement) => {
                const mainElement = document.querySelector('.el-main');
                if (!mainElement) {
                    return false;
                }
                const mainRect = mainElement.getBoundingClientRect();
                const targetRect = targetElement.getBoundingClientRect();
                const isVisible = (
                    targetRect.top >= mainRect.top &&
                    targetRect.bottom <= mainRect.bottom &&
                    targetRect.left >= mainRect.left &&
                    targetRect.right <= mainRect.right
                );
                return isVisible;
            };

            const titles = document.querySelectorAll(".dzs-navigation-title");
            for (let title of titles) {
                if (isInViewport(title)) {
                    this.currentUrl = title.innerText;
                }
            }
        },
    },
};
</script>
<style lang="scss" scoped>
.dzs-navigation-title-box {
    width: 200px;
    position: absolute;
    top: 100px;
    right: 20px;
    z-index: 999;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

    ul {
        li {
            a {
                display: block;
                padding: 10px;
                text-decoration: none;

                &:hover {
                    color: #fff;
                    background: var(--themecolor);
                }

                &.active {
                    color: #fff;
                    background: var(--themecolor);
                }
            }
        }
    }
}
</style>
