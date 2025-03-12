<template>
    <div class="dzs-douyin-box">
        <div class="content-box" :style="{
            height: (height * videoList.length) + 'px',
            transform: 'translateY(' + transformY + 'px)',
            'transition-duration': transitionDuration,
        }">
            <div class="item-box" :style="{ height: height + 'px' }" v-for="(item, index) in videoList" :key="index">
                <div class="video-box">
                    <video :ref="'dzs-video-' + index" :src="item.url" :autoplay="item.autoplay" loop="loop" muted="muted">
                    </video>
                </div>
                <div class="mask-box" @mousedown="itemDown(index)" @mousemove="itemMove" @mouseup="itemUp"
                    @touchstart="itemDown(index)" @touchmove.stop="itemMove" @touchend.stop="itemUp" @click="playVideo(index)">
                    <div class="right-bottom">
                        <div class="heart" :class="[item.isLike ? 'active' : '']"></div>
                        <div class="star-button" :class="[item.isStar ? 'active' : '']"></div>
                        <div class="share-button">
                            <svg t="1741661731876" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                xmlns="http://www.w3.org/2000/svg" p-id="3478"
                                xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200">
                                <path
                                    d="M350.912 605.376L50.944 422.656l908.48-355.648L800.352 885.28l-387.04-247.872 345.952-373.472zM416 704v209.92l128.256-130.208z"
                                    p-id="3479" data-spm-anchor-id="a313x.search_index.0.i0.24243a81UnG1KT"
                                    class="selected">
                                </path>
                            </svg>
                        </div>
                    </div>
                    <div class="info-box">
                        <div class="left-box">
                            <div class="username-box ellipsis1">
                                @ {{ item.username }}
                            </div>
                            <div class="title-box ellipsis1">
                                {{ item.title }}
                            </div>
                            <div class="desc-box ellipsis2">
                                {{ item.desc }}
                            </div>
                        </div>
                    </div>
                    <div class="right-box"></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'dzsdDouyin',
    props: {
        list: {
            type: Array,
            default: () => {
                return []
            }
        }
    },
    data() {
        return {
            height: 0,
            isMouseDown: false,
            clickIndex: -1,
            clickDomInfo: {},
            transformY: 0,
            videoList: [],
            /**向上滑动*/
            isUp: false,
            /**向下滑动*/
            isDown: false,
            current: {
                start: 0,
                index: 0,
                end: 5,
                interval: 5
            },
            transitionDuration: '500ms',
        }
    },
    watch: {
        list: {
            handler(newVal, oldVal) {
                if (newVal.length > 10) {
                    this.videoList = [];
                    for (let i = this.current.start; i < this.current.end; i++) {
                        let item = newVal[i];
                        item.autoplay = false;
                        this.videoList.push(item)
                    }
                    this.videoList[0].autoplay = true;
                } else {
                    for (let i = 0; i < newVal.length; i++) {
                        let item = newVal[i];
                        item.autoplay = false;
                        this.videoList.push(item)
                    }
                    this.videoList[0].autoplay = true;
                }
            }
        }
    },
    mounted() {
        this.getHeight();
    },
    methods: {
        // 获取 最外层的高度
        getHeight() {
            let dom = document.querySelector('.dzs-douyin-box');
            this.height = dom.offsetHeight;
        },
        itemDown(index) {
            this.clickIndex = index;
            this.isMouseDown = true;
        },
        itemUp() {
            this.isMouseDown = false;
            this.clickDomInfo = {};
            this.videoList.forEach((item, index) => {
                item.autoplay = false;
            })
            let isUp = false;
            let isDown = false;
            if (this.transformY % this.height != 0) {
                if (this.transformY % this.height < this.height / 2 && this.isUp) {
                    this.transformY = -(this.height * (this.clickIndex + 1));
                    this.videoList[this.clickIndex + 1].autoplay = true;
                    isUp = true;
                } else if (this.transformY % this.height < this.height / 2 && this.isDown) {
                    this.transformY = -(this.height * (this.clickIndex - 1));
                    this.videoList[this.clickIndex - 1].autoplay = true;
                    isDown = true;
                } else {
                    this.transformY = -(this.height * this.clickIndex);
                }
            }
            this.current.index = this.clickIndex;
            // 上拉
            if (this.isUp) {
                if (this.current.index + 1 >= this.current.interval) {
                    this.current.start = this.current.end - 2;
                    this.current.end = this.current.end + this.current.interval - 2;
                    if (this.current.end > this.list.length) {
                        this.current.end = this.list.length;
                    }
                    this.videoList = [];
                    for (let i = this.current.start; i < this.current.end; i++) {
                        let item = this.list[i];
                        item.autoplay = false;
                        this.videoList.push(item);
                    }
                    this.transitionDuration = '0ms';
                    this.transformY = -(this.height);
                    this.videoList[2].autoplay = true;
                    setTimeout(() => {
                        this.transitionDuration = '500ms';
                        this.transformY = -(this.height * 2);
                    }, 100);
                }
            }
            // 上拉
            if (this.isDown) {
                if (this.current.index == 0 && this.current.start != 0) {
                    this.current.end = this.current.end - this.current.start;
                    this.current.start = this.current.start - this.current.interval;
                    if (this.current.start < 0) {
                        this.current.start = 0;
                        this.current.end = this.current.interval;
                    }
                    this.videoList = [];
                    for (let i = this.current.start; i < this.current.end; i++) {
                        let item = this.list[i];
                        item.autoplay = false;
                        this.videoList.push(item);
                    }
                    this.transitionDuration = '0ms';
                    this.transformY = -(this.height * (this.current.interval - 2));
                    this.videoList[this.current.interval - 3].autoplay = true;
                    setTimeout(() => {
                        this.transitionDuration = '500ms';
                        this.transformY = -(this.height * (this.current.interval - 3));
                    }, 100);
                }
            }
            let changeIndex = this.clickIndex;
            isDown ? changeIndex = this.clickIndex - 1 : null;
            isUp ? changeIndex = this.clickIndex + 1 : null;
            this.$emit('change', {
                index: changeIndex,
                item: this.videoList[changeIndex]
            });
            this.clickIndex = -1;
        },
        itemMove(e) {
            if (!this.isMouseDown) return;
            if (this.clickIndex == -1) return;
            const $event = e.touches ? e.touches[0] : e;
            if (!this.clickDomInfo.clientY) {
                this.clickDomInfo = $event;
            }
            this.isUp = $event.clientY - this.clickDomInfo.clientY < 0;
            this.isDown = $event.clientY - this.clickDomInfo.clientY > 0;
            if ($event.clientY - this.clickDomInfo.clientY < 0 && this.clickIndex != this.videoList.length - 1) {
                if (($event.clientY - this.clickDomInfo.clientY) < -this.height) {
                    return;
                }
                this.transformY = -(this.height * this.clickIndex) + ($event.clientY - this.clickDomInfo.clientY);
                if (this.transformY < -this.height * (this.list.length - 1)) {
                    this.transformY = -this.height * (this.list.length - 1);
                }
            }
            if ($event.clientY - this.clickDomInfo.clientY < 20) {
                return;
            }
            if ($event.clientY - this.clickDomInfo.clientY > 0 && this.clickIndex != 0) {
                if (($event.clientY - this.clickDomInfo.clientY) > this.height) {
                    return;
                }
                this.transformY += ($event.clientY - this.clickDomInfo.clientY);
                if (this.transformY > 0) {
                    this.transformY = 0;
                }
            }
        },
        /**播放和暂停视频*/
        playVideo(index){
            let video = this.$refs['dzs-video-'+index][0];
            if(video.paused){
                video.play();
            }else{
                video.pause();
            }
        } 
    }
}
</script>
<style lang="scss" scoped>
.dzs-douyin-box {
    position: relative;
    width: 100%;
    height: 100%;
    --icon-color: #fff;
    user-select: none;
    overflow: hidden;

    .mask-box {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;

        .right-bottom {
            position: absolute;
            right: 10px;
            bottom: 20%;
            height: 180px;
            width: 50px;
            // background-color: aqua;

            .heart {
                position: absolute;
                width: 50px;
                height: 45px;
                top: 0;
                left: 50%;
                transform: translateX(-50%);
                cursor: pointer;

                &::after,
                &::before {
                    position: absolute;
                    content: "";
                    top: 10px;
                    width: 22px;
                    height: 30px;
                    border-radius: 30px 30px 0 0;
                    background-color: var(--icon-color);
                }

                &.active::before,&.active::after {
                    background-color: red;
                }

                &::after {
                    left: 4px;
                    transform: rotate(45deg);
                    transform-origin: 100% 100%;
                }

                &::before {
                    left: 24px;
                    transform: rotate(-45deg);
                    transform-origin: 0 100%;
                }
            }

            .star-button {
                position: absolute;
                top: 60px;
                left: 50%;
                transform: translateX(-50%);
                width: 48px;
                height: 48px;
                cursor: pointer;

                &::after,
                &::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    clip-path: polygon(50% 0%, 62.5% 30%, 90% 30%, 67.5% 50%, 77.5% 80%, 50% 65%, 22.5% 80%, 32.5% 50%, 10% 30%, 37.5% 30%);
                    transition: background-color 0.3s, transform 0.3s;
                    border-radius: 25%;
                }

                &::before {
                    background-color: var(--icon-color);
                }

                &::after {
                    background-color: transparent;
                    z-index: 1;
                }

                &.active::before {
                    background-color: gold;
                    filter: drop-shadow(0 0 10px rgba(255, 215, 0, 0.7));
                }
            }

            .share-button {
                position: absolute;
                top: 120px;
                width: 35px;
                height: 48px;
                cursor: pointer;
                left: 5px;

                svg {
                    width: 100%;
                    height: 100%;
                    fill: var(--icon-color);
                }
            }
        }
    }

    .info-box {
        position: absolute;
        bottom: 10px;
        left: 0;
        padding: 5px;
        width: 100%;
        color: #fff;

        .username-box {
            width: 40%;
            font-size: 14px;
            font-weight: bold;
            padding-bottom: 5px;
        }

        .title-box {
            width: 50%;
            font-size: 14px;
            font-weight: 500;
            padding-bottom: 5px;
        }

        .desc-box {
            width: 60%;
            font-size: 14px;
            color: rgba(255, 255, 255, .8);
        }
    }

    .content-box {
        width: 100%;
        overflow-y: auto;
        display: flex;
        flex-direction: column;
        position: relative;

        // 禁止滚动
        &::-webkit-scrollbar {
            display: none;
        }
    }

    .item-box {
        width: 100%;
        // height: 100%;
        position: relative;
        background-color: rgba(0, 0, 0, 1);
        cursor: pointer;

        .video-box {
            width: 100%;
            height: 100%;
            position: relative;

            video {
                width: 100%;
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
            }
        }
    }
}

// 超出一行隐藏
.ellipsis1 {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;

}

// 超出两行隐藏
.ellipsis2 {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
}
</style>