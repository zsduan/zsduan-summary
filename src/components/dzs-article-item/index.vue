<template>
    <a :href="articleInfo.href ? articleInfo.href : 'javaScript:void()'" class="dzs-article-item-box"
        :class="placement">
        <slot name="header"></slot>
        <div class="dzs-article-item-title-box" v-if="placement == 'bottom' || placement == 'left'">
            <div class="dzs-article-item-title dzs-eli1">{{ articleInfo.title }}</div>
            <div class="dzs-article-item-desc" :class="['dzs-eli' + row]">{{ articleInfo.desc }}</div>
        </div>
        <div class="dzs-article-item-content-box" :class="[scroll ? 'content-isScroll' : '']">
            <div class="img-box"
                :class="['dzs-grid' + articleInfo.grid, articleInfo.img.length > 3 && scroll ? 'isScroll' : '']"
                v-if="!articleInfo.isVideo"
                :style="{ width: imgItemWidth > 0 ? ((imgItemWidth + 10) * maxNum) + 'px' : '' }">
                <template v-for="(item, index) in articleInfo.img">
                    <div class="img-item" v-if="index < maxNum"
                        :style="{ width: imgItemWidth > 0 ? imgItemWidth + 'px' : '' }">
                        <img :src="item" :alt="articleInfo.title"></img>
                        <div class="dzs-article-more-item" v-if="moreNum && index == num - 1">
                            +{{ moreNum }}
                        </div>
                    </div>
                </template>
            </div>
            <div class="dzs-article-item-video-box" v-if="articleInfo.isVideo && articleInfo.img.length">
                <div class="img-item">
                    <img :src="articleInfo.img[0]" :alt="articleInfo.title"></img>
                </div>
                <div class="dzs-article-item-video-play">
                    <svg t="1743044693687" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2899" data-spm-anchor-id="a313x.search_index.0.i9.55b53a81LLBlSS" width="200" height="200"><path d="M512.1 63.9c-247.4 0-447.9 200.5-447.9 447.9 0 247.4 200.5 447.9 447.9 447.9S960 759.2 960 511.8c0.1-247.4-200.5-447.9-447.9-447.9z m210.5 480.2L413.7 722.4c-24.9 14.4-56-3.6-56-32.3V333.5c0-28.7 31.1-46.7 56-32.3l308.8 178.3c24.9 14.3 24.9 50.3 0.1 64.6z" p-id="2900" data-spm-anchor-id="a313x.search_index.0.i10.55b53a81LLBlSS" class="" fill="#e6e6e6"></path></svg>
                </div>
            </div>
            <slot name="image"></slot>
        </div>
        <div class="dzs-article-item-title-box" v-if="placement == 'top' || placement == 'right'">
            <div class="dzs-article-item-title dzs-eli1">{{ articleInfo.title }}</div>
            <div class="dzs-article-item-desc" :class="['dzs-eli' + row]">{{ articleInfo.desc }}</div>
        </div>
        <div class="dzs-article-item-bottom-box" v-if="showFooter">
            <div class="dzs-article-item-bottom-left-box">
                <div>
                    <div class="dzs-article-item-bottom-left-item-title">{{ articleInfo.author }}</div>
                    <div class="dzs-article-item-bottom-left-item-time">{{ articleInfo.time }}</div>
                </div>
                <div class="dzs-article-item-bottom-left-item-tag">
                    <template v-for="(item, index) in articleInfo.tag">
                        <div class="dzs-article-item-bottom-left-item-tag-item">{{ item }}</div>
                    </template>
                </div>
            </div>
            <div class="dzs-article-item-bottom-right-box">
                <div class="dzs-article-item-bottom-right-item-star">Star {{ articleInfo.star }}</div>
            </div>
        </div>
        <slot name="footer"></slot>
    </a>
</template>
<script>
/**
 * @name dzsArticleItem 文章列表组件
 * @param {Object} item 文章信息
 * @param {String} [item.desc] 文章描述
 * @param {String} [item.img] 文章图片
 * @param {String} [item.time] 文章时间
 * @param {String} [item.author] 文章作者
 * @param {String} item.href 文章链接
 * @param {Array} [item.tag] 文章标签
 * @param {String} [item.star] 文章收藏数
 * @param {Boolean} [item.isVideo] 是否为视频
 * @param {String} [placement] 图片放置位置
 * @param {Number} [num] 显示图片数量
 * @param {Boolean} [scroll] 是否可以横向滚动
 * @param {Number} [row] 简介显示行数 最多 3 行
 * @param {Boolean} [show-footer] 是否显示底部
 * */ 
export default {
    name: 'dzsArticleItem',
    props: {
        /**
         * @param {String} item.title 文章标题
         * @param {String} [item.desc] 文章描述
         * @param {String} [item.img] 文章图片
         * @param {String} [item.time] 文章时间
         * @param {String} [item.author] 文章作者
         * @param {String} item.href 文章链接
         * @param {Array} [item.tag] 文章标签
         * @param {String} [item.star] 文章收藏数
         * @param {String} [item.isVideo] 是否为视频
         * */
        item: {
            type: Object,
            default: () => { }
        },
        /**
         * 放置位置
         * top | bottom | left | right
         * */
        placement: {
            type: String,
            default: 'bottom',
            validator(value) {
                return ['top', 'bottom', 'left', 'right'].indexOf(value) !== -1
            }
        },
        /**显示图片数量*/
        num: {
            type: Number,
            default: 6
        },
        /**是否可以横向滚动*/
        scroll: {
            type: Boolean,
            default: false
        },
        /**简介显示行数 最多 3 行*/
        row: {
            type: Number,
            default: 3
        },
        /**是否显示底部*/
        'show-footer': {
            type: Boolean,
            default: true
        } 
    },
    data() {
        return {
            articleInfo: {},
            moreNum: 0,
            maxNum: 0,
            imgItemWidth: 0
        }
    },
    watch: {
        item: {
            handler(val) {
                let item = val;
                this.maxNum = this.num;
                if (item.img) {
                    typeof item.img == 'string' ? item.img = [item.img] : null;
                } else {
                    item.img = [];
                }
                item.grid = item.img.length < 3 ? item.img.length : 3;
                item.grid = this.num > item.grid ? item.grid : this.num;
                if (item.img.length > this.num) {
                    this.moreNum = item.img.length - this.num;
                }
                if (this.placement == 'left' || this.placement == 'right') {
                    item.grid = 1;
                    this.moreNum = item.img.length - 1;
                    this.maxNum = 1;
                }

                // 只保留两个 tag
                if (item.tag && item.tag.length > 2) {
                    item.tag = item.tag.slice(0, 2);
                }

                this.articleInfo = item;
            },
            immediate: true,
            deep: true
        },
        scroll: {
            handler(val) {
                if (val) {
                    setTimeout(() => {
                        this.moreNum = 0;
                        this.maxNum = this.articleInfo.img.length;
                        let imgItemDom = document.querySelector('.dzs-article-item-content-box');
                        if (imgItemDom && this.maxNum > 3) {
                            this.imgItemWidth = parseInt(imgItemDom.offsetWidth / 3);
                        }
                    }, 200)
                }
            },
            immediate: true
        }
    },
    methods: {

    }
}
</script>
<style lang="scss" scoped>
.dzs-article-item-box {
    display: block;
    margin: 10px 0;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    padding: 10px;
    border-radius: 10px;

    &.left,
    &.right {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        align-items: center;

        .dzs-article-item-title-box {
            width: 70%;
            margin-right: 2%;
        }

        .dzs-article-item-content-box {
            width: 28%;

            .img-box {
                width: 100%;
            }

        }
    }

    &.right {
        .dzs-article-item-title-box {
            margin-left: 10px;
            margin-right: 0;
        }
    }

    .dzs-article-item-title-box {
        .dzs-article-item-title {
            font-size: 16px;
            font-weight: bold;
            margin-bottom: 3px;
        }

        .dzs-article-item-desc {
            font-size: 14px;
            margin-bottom: 10px;
        }
    }

    .dzs-article-item-content-box {
        &.content-isScroll {
            overflow-x: auto;

            // 显示滚动条
            &::-webkit-scrollbar {
                display: block;
            }

            // 滚动条滑块
            &::-webkit-scrollbar-thumb {
                background-color: #e9e7e7;
                height: 6px;
            }
            // 手机端
            @media screen and (max-width: 768px) {
                &::-webkit-scrollbar{
                    display: none;
                }
            }
        }

        .img-box {
            display: grid;
            gap: 10px;
        }

        .dzs-grid2 {
            grid-template-columns: repeat(2, 1fr);
        }

        .dzs-grid3 {
            grid-template-columns: repeat(3, 1fr);
        }

        .isScroll {
            display: flex;
        }

        .img-item {
            max-width: 100%;
            position: relative;

            .dzs-article-more-item {
                position: absolute;
                top: 0;
                width: 100%;
                height: calc(100% - 5px);
                background: rgba(0, 0, 0, 0.5);
                color: #fff;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 26px;
            }

            img {
                width: 100%;
            }
        }
    }

    .dzs-article-item-video-box {
        position: relative;
        .img-item {
            position: relative;
        }
        .dzs-article-item-video-play{
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50% , -50%);
                svg{
                    width: 40px;
                    height: 40px;
                }
            }
    }

    .dzs-article-item-bottom-box {
        display: flex;
        justify-content: space-between;
        width: 100%;
        align-items: flex-end;

        .dzs-article-item-bottom-left-box {
            display: flex;
            // 底部对齐
            align-items: flex-end;

            .dzs-article-item-bottom-left-item-title {
                font-size: 14px;
                margin-right: 10px;
            }

            .dzs-article-item-bottom-left-item-time {
                font-size: 12px;
                color: #999;
                margin-right: 10px;
            }

            .dzs-article-item-bottom-left-item-tag {
                display: flex;

                .dzs-article-item-bottom-left-item-tag-item {
                    font-size: 12px;
                    padding: 1px 5px;
                    margin-right: 5px;
                    background-color: #eee;
                    max-width: 68px;

                    &:hover {
                        color: #fff;
                        background: #409eff;
                    }
                }
            }
        }

        .dzs-article-item-bottom-right-box {
            .dzs-article-item-bottom-right-item-star {
                color: #409eff;
            }
        }
    }
}

/**一行隐藏*/
.dzs-eli1 {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
}

.dzs-eli2 {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
}

.dzs-eli3 {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
}
</style>
