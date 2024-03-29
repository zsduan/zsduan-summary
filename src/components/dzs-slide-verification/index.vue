<!--
 * @Author: zs.duan
 * @Date: 2022-12-27 13:39:12
 * @LastEditors: zs.duan
 * @LastEditTime: 2023-02-02 15:47:57
 * @FilePath: \vue2+js+eui+template\src\components\dzs-slide-verification\index.vue
-->
<template>
    <div class="slide-verification-box" v-if="isShow">
        <div class="slide-verification">
            <div class="top-box">
                <div class="back-img">
                    <img :src="imgUrl" class="img" />
                </div>
                <div class="cropping-img" :style="{top : coordinate.y + 'px' , left : moveCoordinate.x + 'px'}">
                    <img :src="imgUrl" class="img" :style="{top : -coordinate.y + 'px',left: -coordinate.x + 'px'}" />
                </div>
                <div class="mask-box" :style="{top : coordinate.y + 'px',left: coordinate.x + 'px'}"></div>
                <div class="success-box" v-if="isSuccess == 'success'">{{btnTips}}</div>
            </div>
            <div v-if="!is_phone" class="bottom-box" @mousemove.stop="btnMousemove" @mouseleave.stop="btnMouseleave" @mouseup.stop="btnMouseup">
                <div class="move-box" :style="{width : (moveCoordinate.x - 3) + 'px'}"></div>
                <div class="btn" :style="{left : moveCoordinate.x + 'px'}" @mousedown.stop="btnMousedown"></div>
                <span v-if="isSuccess != 'success'" class="tips" :class="isSuccess == 'error' ? 'error-tips' : ''">{{btnTips}}</span>
            </div>
            <div v-else class="bottom-box" @touchmove.stop="btnMousemove" @touchend.stop="btnMouseleave">
                <div class="move-box" :style="{width : (moveCoordinate.x - 3) + 'px'}"></div>
                <div class="btn" :style="{left : moveCoordinate.x + 'px'}" @touchstart.stop="btnMousedown"></div>
                <span v-if="isSuccess != 'success'" class="tips" :class="isSuccess == 'error' ? 'error-tips' : ''">{{btnTips}}</span>
            </div>
        </div>
    </div>
</template>
<script>
/*
 * @name 滑动验证
 * @prop ErrorRange 误差范围 number 默认10
 * @prop isShow 是否显示
 * @method success 成功返回
 * @method fail 失败返回
 */
export default {
    name: "dzs-slide-verification",
    props: {
        ErrorRange: {
            type: Number,
            default: () => {
                return 10;
            },
        },
        isShow: {
            type: Boolean,
            default: () => {
                return false;
            },
        },
    },
    data() {
        return {
            imgList: [
                {
                    // url: new URL("./image/1.jpg", import.meta.url).href , 
                    url:  require("./image/1.jpg"), 
                },
                {
                    // url: new URL("./image/2.jpg", import.meta.url).href, 
                    url: require("./image/2.jpg"), 
                },
                {
                    // url: new URL("./image/3.jpg", import.meta.url).href , 
                    url: require("./image/3.jpg"), 
                },
                {
                    // url: new URL("./image/4.jpg", import.meta.url).href , 
                    url: require("./image/4.jpg"), 
                },
                {
                    // url: new URL("./image/5.jpg", import.meta.url).href, 
                    url: require("./image/5.jpg"), 
                },
            ],
            imgUrl: "",
            // 生成的随机坐标
            coordinate: {
                x: 0,
                y: 0,
            },
            // 可以移动的坐标
            moveCoordinate: {
                x: 3,
                y: 0,
            },
            isMousemove: false,
            btnTips: "拖动左边滑块完成上方拼图",
            isSuccess: "none",
            is_phone: false,
        };
    },
    created() {
        this.isPc();
        this.init();
    },
    watch: {
        isShow: {
            handler() {
                this.isPc();
                this.init();
            },
            deep: true,
            immediate: true,
        },
    },
    methods: {
        // 初始化滑动列表
        init() {
            let index = Math.floor(Math.random() * this.imgList.length) + 0;
            index = index < 0 ? index + index * index : index;
            this.imgUrl = this.imgList[index].url;

            // 随机生成坐标
            let x = Math.floor(Math.random() * (260 - 160 + 1)) + 160;

            let y = Math.floor(Math.random() * (130 - 0 + 1)) + 0;
            y = y < 0 ? y + y * y : y;
            this.coordinate.x = x;
            this.coordinate.y = y;
            this.moveCoordinate.x = 3;
            this.isSuccess = "none";
        },
        btnMouseleave() {
            this.isMousemove = false;
            // 允许误差
            if (
                this.moveCoordinate.x - this.coordinate.x > -10 &&
                this.moveCoordinate.x - this.coordinate.x < 10
            ) {
                this.btnTips = "验证成功!";
                this.isSuccess = "success";
                setTimeout(() => {
                    this.$emit("success");
                }, 1000);
                return;
            }
            this.isSuccess = "error";
            this.$emit("fail");
            this.btnTips = "验证失败，请重新滑动验证";
            let timer = setInterval(() => {
                this.moveCoordinate.x -= 5;
                if (this.moveCoordinate.x <= 3) {
                    clearInterval(timer);
                    this.moveCoordinate.x = 3;
                }
            }, 10);
        },
        // 鼠标移开
        btnMouseup() {
            this.isMousemove = false;
        },
        // 鼠标点击
        btnMousedown() {
            this.isMousemove = true;
        },
        // 鼠标移动
        btnMousemove(e) {
            if (!this.isMousemove || this.isSuccess == "success") return;
            if (this.is_phone) {
                let x = e.changedTouches[0].clientX;
                if (x >= 315 || x <= 3) {
                    return;
                }
                if (x && this.moveCoordinate.x - x < 50) {
                    this.moveCoordinate.x = x - 40 > 0 ? x - 40 : x;
                }
                return;
            }
            if (e.offsetX >= 275 || e.offsetX <= 3) {
                return;
            }
            if (e.offsetX && this.moveCoordinate.x - e.offsetX < 50) {
                this.moveCoordinate.x = e.offsetX;
            }
        },
        // 是否为pc
        isPc() {
            let userAgentInfo = navigator.userAgent;
            let Agents = [
                "Android",
                "iPhone",
                "SymbianOS",
                "Windows Phone",
                "iPad",
                "iPod",
            ];
            this.is_phone = false;
            for (let v = 0; v < Agents.length; v++) {
                if (userAgentInfo.indexOf(Agents[v]) > 0) {
                    this.is_phone = true;
                    break;
                }
            }
        },
        // 关闭
        close(){
            this.$emit("update:isShow",false);
            this.$emit("close",false);
        }
    },
};
</script>
<style lang="less" scoped>
.slide-verification-box {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99;
    .slide-verification {
        background: #fff;
        width: 350px;
        height: 260px;
        border-radius: 5px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        padding: 20px;
        user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
        -o-user-select: none;
        box-shadow: -1px -5px 8px 5px rgba(0, 0, 0, 0.1);
        .top-box {
            width: 100%;
            border-radius: 3px;
            height: 174px;
            background: rgba(0, 0, 0, 0.1);
            position: relative;
            .img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
            .mask-box {
                width: 40px;
                height: 40px;
                position: absolute;
                background: rgba(0, 0, 0, 0.6);
                z-index: 99;
                border-radius: 5px;
            }
            .cropping-img {
                width: 40px;
                height: 40px;
                position: absolute;
                z-index: 101;
                border-radius: 5px;
                overflow: hidden;
                box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.6);
                img {
                    width: 310px;
                    height: 174px;
                    position: absolute;
                }
            }
        }
        .bottom-box {
            width: 100%;
            height: 40px;
            border-radius: 3px;
            background: rgba(0, 0, 0, 0.2);
            margin-top: 10px;
            position: relative;
            text-align: center;
            line-height: 40px;
            overflow: hidden;
            .tips {
                color: #fff;
                user-select: none;
                -webkit-user-select: none;
                -ms-user-select: none;
                -o-user-select: none;
            }
            .error-tips {
                color: rgb(206, 60, 60);
            }
            .btn {
                position: absolute;
                width: 32px;
                height: 32px;
                background: #fff;
                border-radius: 5px;
                top: 50%;
                transform: translateY(-50%);
                box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.6);
                cursor: pointer;
            }
            .move-box {
                height: 100%;
                background: rgb(99, 240, 99);
                position: absolute;
            }
        }
        .success-box {
            position: absolute;
            background: rgba(0, 0, 0, 0.6);
            color: #fff;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 102;
            font-size: 24px;
            text-align: center;
            line-height: 202px;
        }
    }
}
</style>