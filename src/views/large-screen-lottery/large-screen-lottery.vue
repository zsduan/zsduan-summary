<template>
    <div class="large-screen-page" :style="backImg">
        <dzs-header title="大屏抽奖" v-if="!newIndex"></dzs-header>
        <div class="full-screen" @click="fullScreen">
            <i class="el-icon-full-screen" :style="{ 'font-size': iconSize + 'px' }"></i>
        </div>
        <div class="fixed-user-change" v-if="!isFullScreen">
            <label class="label">内定人员选择</label>
            <el-select v-model="fixedIds" filterable multiple collapse-tags placeholder="请选择" @change="changeUser">
                <el-option v-for="item in userList" :key="item.id" :label="item.name" :value="item.id"
                    :disabled="item.isWinning">
                </el-option>
            </el-select>
        </div>
        <div class="title">{{ title }}</div>
        <div class="lottery-box">
            <!-- 签到状态 -->
            <ul class="public-list" v-if="state === 1">
                <li v-for="(item, index) in userList" :key="index">
                    <div v-if="!item.icon" class="icon"
                        :style="{ background: item.color, width: liWidth, height: liWidth }"></div>
                    <div v-else class="icon">
                        <img :src="item.icon" alt="" class="image" />
                    </div>
                    <div class="name">{{ item.name }}</div>
                    <div class="phone">{{ item.phone }}</div>
                </li>
            </ul>
            <!-- 抽奖状态 -->
            <ul class="public-list" v-if="state === 2">
                <li v-for="(item, index) in scrollList" :key="index">
                    <div v-if="!item.icon" class="icon"
                        :style="{ background: item.color, width: liWidth, height: liWidth }"></div>
                    <div v-else class="icon">
                        <img :src="item.icon" alt="" class="image" />
                    </div>
                    <div class="name">{{ item.name }}</div>
                    <div class="phone">{{ item.phone }}</div>
                </li>
            </ul>
            <!-- 结束状态 -->
            <ul class="public-list" v-if="state === 3">
                <li v-for="(item, index) in winningList" :key="index">
                    <div v-if="!item.icon" class="icon"
                        :style="{ background: item.color, width: liWidth, height: liWidth }"></div>
                    <div v-else class="icon">
                        <img :src="item.icon" alt="" class="image" />
                    </div>
                    <div class="name">{{ item.name }}</div>
                    <div class="phone">{{ item.phone }}</div>
                </li>
            </ul>
        </div>
        <div class="footer-box">
            <div class="footer-top" v-if="!isFullScreen">
                <label class="label">中奖人数设置</label>
                <el-input-number v-model="winNum" :min="1" :max="50" label="描述文字"></el-input-number>
            </div>
            <div class="footer-bottom">
                <el-tooltip class="item" effect="dark" content="点击空格/按钮开始" placement="top" v-if="state !== 2">
                    <el-button type="primary" @click="startLottery" >开始抽奖</el-button>
                </el-tooltip>
                <el-tooltip class="item" effect="dark" content="点击空格/按钮结束" placement="top" v-if="state === 2">
                    <el-button type="primary" @click="stopLottery" >停止抽奖</el-button>
                </el-tooltip>
                <el-button type="danger" @click="resetLottery" v-if="state !== 2">重置</el-button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "large-screen-lottery",
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
            backImg: {
                background: `url(${require("@/assets/image/2024.png")}) no-repeat`,
                'background-size': '100% 100%'
            },
            /**用户列表*/
            userList: [],
            /**内定名额列表*/
            fixedList: [],
            fixedIds: [],
            /**中奖名额*/
            winningList: [],
            /**已经中奖名额*/
            winnedList: [],
            /**滚动列表*/
            scrollList: [],
            /**中奖数量*/
            winNum: 5,
            /**图标大小*/
            iconSize: 30,
            /**是否全屏*/
            isFullScreen: false,
            /**标题*/
            title: "XX抽奖",
            /**当前状态*/
            state: 1, // 1:未开始 2:进行中 3:已结束 
            /**li的宽度*/
            liWidth: 0,
            /**定时器*/
            timer: null,
            /**滚动速度 ms*/
            speed: 200
        }
    },
    mounted() {
        this.randomUser();
        // 监听空格键
        window.addEventListener('keydown', (e) => {
            if (e.keyCode === 32 || e.code === "Space") {
                if (this.state === 1 || this.state === 3) {
                    this.startLottery();
                } else if (this.state === 2) {
                    this.stopLottery();
                }
            }
        });
    },
    beforeDestroy() {
        this.exitFullscreen();
        window.removeEventListener('resize', this.getLiWidth);
        window.removeEventListener('keydown', () => { });
    },
    methods: {
        /**随机生成 1000 个名额*/
        randomUser() {
            let arr = [];
            for (let i = 0; i < 1000; i++) {
                // 随机生成 16进制颜色
                let color = '#' + Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, '0');
                let obj = {
                    id: i + 1,
                    name: `用户${i + 1}`,
                    phone: `138${Math.floor(Math.random() * 100000000)}`,
                    isWinning: false,
                    icon: "",
                    color: color
                }
                arr.push(obj);
            }
            this.userList = Object.freeze(arr);
            setTimeout(() => {
                this.getLiWidth();
            }, 200);
        },
        /**全屏*/
        fullScreen() {
            this.isFullScreen = !this.isFullScreen;
            if (this.isFullScreen) {
                this.iconSize = 20;
                this.requestFullScreen();
            } else {
                this.iconSize = 30;
                this.exitFullscreen();
            }
        },
        /**退出全屏*/
        exitFullscreen() {
            let el = document;
            let cfs = el.cancelFullScreen || el.webkitCancelFullScreen || el.mozCancelFullScreen || el.exitFullScreen;
            if (typeof cfs != "undefined" && cfs) {
                cfs.call(el);
            } else if (typeof window.ActiveXObject != "undefined") {
                let wscript = new ActiveXObject("WScript.Shell");
                if (wscript != null) {
                    wscript.SendKeys("{F11}");
                }
            }
            setTimeout(() => {
                this.getLiWidth(true);
            }, 200);
        },
        /**请求全屏*/
        requestFullScreen() {
            let el = document.querySelector('.large-screen-page');
            let rfs = el.requestFullScreen || el.webkitRequestFullScreen || el.mozRequestFullScreen || el.msRequestFullScreen;
            if (typeof rfs != "undefined" && rfs) {
                rfs.call(el);
            } else if (typeof window.ActiveXObject != "undefined") {
                let wscript = new ActiveXObject("WScript.Shell");
                if (wscript != null) {
                    wscript.SendKeys("{F11}");
                }
            }
            setTimeout(() => {
                this.getLiWidth(true);
            }, 200);
        },
        /**开始抽奖*/
        startLottery() {
            // 根据滚动人数随机推入人员信息
            let userList = this.userList.filter(user => user.isWinning === false);
            if (this.winNum > userList.length) {
                this.$message.error(`中奖人数不能超过总人数`);
                return;
            }
            this.state = 2;
            this.timer = setInterval(() => {
                let scrollList = [];
                for (let i = 0; i < this.winNum; i++) {
                    let index = Math.floor(Math.random() * this.userList.length);
                    let item = this.userList[index];
                    let winIndex = this.winnedList.findIndex(win => win.id === item.id);
                    let repeatIndex = scrollList.findIndex(scroll => scroll.id === item.id);
                    if (winIndex == -1 && repeatIndex == -1) {
                        scrollList.push(item);
                    } else {
                        i--;
                    }
                }
                this.scrollList = scrollList;
            }, this.speed);
            this.getLiWidth(true);

        },
        /**重置*/
        resetLottery() {
            this.winnedList = [];
            this.state = 1;
            this.fixedList = [];
            this.winningList = [];
            this.userList.forEach(user => user.isWinning = false);
        },
        /**停止抽奖*/
        stopLottery() {
            clearInterval(this.timer);
            this.timer = null;
            this.winningList = [];
            if (this.fixedList.length > 0) {
                this.winningList = this.userList.filter(user => this.fixedList.findIndex(fix => fix.id === user.id) !== -1);
            }
            // 剩余名额 在滚动中选择
            let winNum = this.userList.length < this.winNum ? this.userList.length : this.winNum;
            winNum = winNum - this.winningList.length;
            for (let i = 0; i < winNum; i++) {
                let index = Math.floor(Math.random() * this.scrollList.length);
                let item = this.scrollList[index];
                let winIndex = this.winningList.findIndex(win => win.id === item.id);
                if (winIndex == -1) {
                    this.winningList.push(item);
                } else {
                    i--;
                }
            }
            this.winningList.forEach(win => {
                let index = this.userList.findIndex(user => user.id === win.id);
                this.userList[index].isWinning = true;
                this.winnedList.push(win);
            });

            // 对中奖名单 随机排序
            this.winningList.sort(() => Math.random() - 0.5);
            this.state = 3;
            this.fixedList = [];
            this.fixedIds = [];
            this.scrollList = [];
        },
        /**
         * 动态获取li的宽度
         * @param {Boolean} noLister 是否监听
         * */
        getLiWidth(noLister = false) {
            let li = document.querySelector('.public-list li');
            this.liWidth = (li.offsetWidth - 100) + 'px';
            if(noLister) return ;
            window.addEventListener('resize', () => {
                if (this.isFullScreen) {
                    this.liWidth = (li.offsetWidth - 160) + 'px';
                    return;
                }
                this.liWidth = (li.offsetWidth - 100) + 'px';
            });
        },
        /**内定人员选择*/
        changeUser() {
            if (this.fixedIds.length > this.winNum) {
                this.$message.error(`内定人员不能超过中奖人数`);
                this.fixedIds = this.fixedIds.slice(0, this.winNum);
                return;
            }
            this.fixedList = this.userList.filter(user => this.fixedIds.findIndex(fix => fix === user.id) !== -1);
        }
    }
}
</script>
<style lang="less" scoped>
.large-screen-page {
    width: 100%;
    height: 100%;
    background-size: 100% 100%;
    position: relative;
    box-sizing: border-box;

    .full-screen {
        position: absolute;
        right: 20px;
        top: 20px;
        cursor: pointer;
        z-index: 999;

        .el-icon-full-screen {
            color: var(--ThemeColor);
        }
    }

    .title {
        font-size: 50px;
        text-align: center;
        padding-top: 5%;
    }

    .fixed-user-change {
        position: absolute;
        right: 10px;
        top: 60px;
        display: flex;
        align-items: center;

        .label {
            font-size: 20px;
            margin-right: 10px;
        }
    }

    .lottery-box {
        width: 65%;
        height: 60%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        border-radius: 10px;
        background: rgba(255, 255, 255, 0.5);
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.1);
        overflow-y: auto;

        // 隐藏滚动条
        &::-webkit-scrollbar {
            display: none;
        }

        .public-list {
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            width: 100%;
            justify-content: center;

            li {
                width: 25%;
                text-align: center;
                padding: 5px;

                .icon {
                    margin: 0 auto;
                    border-radius: 50%;
                    overflow: hidden;
                    margin-bottom: 5px;

                    .image {
                        width: 100%;
                        height: 100%;
                    }
                }
            }
        }
    }

    .footer-box {
        position: absolute;
        bottom: 40px;
        left: 50%;
        transform: translateX(-50%);

        .footer-top {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 20px;

            .label {
                font-size: 20px;
                margin-right: 10px;
            }
        }

        .footer-bottom {
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
}
</style>