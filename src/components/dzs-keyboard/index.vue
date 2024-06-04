<template>
    <div class="keyboard-box">
        <div :id="keyboardId" :class="showKeyboard ? 'keyboard-height' : 'keyboard-bottom'" class="keyboard"
            :style="{ bottom: bottom }">
            <!--省份简称键盘-->
            <div class="com-btn">
                <span @click="complete">完成</span>
            </div>
            <div class="area-tag-wrap" v-if="!showNums">
                <div class="flex first-line" v-for="(item, index) in area" :key="index">
                    <button @click="selectOtherNum(itm)" :key="idx"
                        :class="{ 'bg-del': itm == 'del', 'bg-abc': itm == 'operation', flex1: true, 'min-fiex1': keyboardWidth < 375 }"
                        v-for="(itm, idx) in item">
                        <span v-if="itm != 'del' && itm != 'operation'">{{ itm }}</span>
                        <span v-if="itm == 'operation'" @click.stop="showOtherWord">切换</span>
                        <span v-if="itm == 'del'">删除</span>
                    </button>
                </div>
            </div>

            <!--数字与字母键盘-->
            <div class="area-tag-wrap" v-if="showNums">
                <div class="flex first-line" v-if="plateNum.length != 0">
                    <button class="flex1" :class="{ flex1: true, 'min-fiex1': keyboardWidth < 375 }"
                        v-for="(item, index) in num[0]" :key="index" @click="selectOtherNum(item)">
                        {{ item }}
                    </button>
                </div>
                <div class="flex first-line" v-else>
                    <button class="flex1 flexWhite" :class="{ flex1: true, 'min-fiex1': keyboardWidth < 375 }"
                        v-for="(item, index) in num[0]" :key="index" @click="selectOtherNum(item)">{{ item }}</button>
                </div>
                <div class="flex first-line mt-3">
                    <button :class="{ flex1: true, 'min-fiex1': keyboardWidth < 375 }" v-for="(item, index) in num[1]"
                        :key="index" @click="selectOtherNum(item)">
                        {{ item }}
                    </button>
                    <button :class="{ flex1: true, 'min-fiex1': keyboardWidth < 375 }"
                        @click="selectOtherNum('O')">O</button>
                </div>
                <div class="flex first-line mt-3">
                    <button :class="{ flex1: true, 'min-fiex1': keyboardWidth < 375 }" v-for="(item, index) in num[2]"
                        :key="index" @click="selectOtherNum(item)">
                        {{ item }}
                    </button>
                </div>
                <div class="flex first-line mt-3">
                    <button :key="index" @click="selectOtherNum(item)"
                        :class="{ 'bg-del': item == 'del', 'bg-abc': item == 'operation', flex1: true, 'min-fiex1': keyboardWidth < 375 }"
                        v-for="(item, index) in num[3]">
                        <span>{{ item == 'del' || item == 'operation' ? '' : item }}</span>
                        <span v-if="item == 'operation'" @click.stop="showOtherWord">省份</span>
                        <span v-if="item == 'del'">删除</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
/*
 * @props showKeyboard 是否显示键盘  
 * @props bottom 距离底部的距离
 * 
 * 
 * @methods complete 点击完成
 * @methods change 点击改变事件
 * @methods validatePlateNumber 基础的车牌号校验
 * 
*/
export default {
    name: "keyboard",
    props: {
        showKeyboard: {
            type: Boolean,
            default: () => {
                return false;
            },
        },
        bottom: {
            type: String,
            default: () => {
                return "0px";
            },
        },
    },
    data() {
        return {
            area: [
                ["京", "沪", "粤", "浙", "苏", "津", "冀", "川", "渝", "鄂", "闽",],
                ["陕", "鲁", "湘", "辽", "皖", "赣", "豫", "桂", "晋", "云", "黑",],
                ["贵", "吉", "琼", "甘", "蒙", "新", "青", "宁", "藏"],
                ["operation", "使", "港", "澳", "学", "警", "领", "挂", "del"],
            ],
            num: [
                [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
                ["Q", "W", "E", "R", "T", "Y", "U", "P"],
                ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
                ["operation", "Z", "X", "C", "V", "B", "N", "M", "del"],
            ], //数字与字母键盘（车牌号中没有I，老式警车含有O的进行特殊处理，只能在第二位输入O，其他为不能选中）
            plateNum: "",
            showNums: false,
            keyboardWidth: 0,
            keyboardId: `keyboard${new Date().getTime()}`
        };
    },
    mounted() {
        this.keyboardWidth = document.querySelector(`#${this.keyboardId}`).offsetWidth;
    },
    methods: {
        // 切换
        showOtherWord() {
            this.showNums = !this.showNums;
        },
        // 点击完成
        complete() {
            this.$emit("update:showKeyboard", false);
            this.$emit("complete");
        },
        // 点击按钮
        selectOtherNum(item) {
            if (item == "del" || item == "operation") {
                if (item == "del") {
                    this.$emit("del");
                }
                return;
            }
            this.$emit("change", item);
        },
        /**车牌校验*/
        validatePlateNumber(plateNumber) {
            // 车牌号规则：省份简称（1位汉字）+ 发牌机关代号（1位字母）+ 序号（5位，新能源车6位）+ 特殊标识（可选，1位，如挂）
            // 新能源车牌号以D或F开头
            const regex = /^[\u4e00-\u9fa5]{1}(使|港|澳|学|警|领)?[A-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学领警澳港使]{1}$/; // 普通车牌号
            const newEnergyRegex = /^[\u4e00-\u9fa5]{1}(使|港|澳|学|警|领)?[A-Z]{1}[DF]{1}[A-HJ-NP-Z0-9]{5}[挂学领警澳港使]{1}$/; // 新能源车牌号

            // 首先尝试匹配新能源车牌号
            if (newEnergyRegex.test(plateNumber)) {
                return true;
            }
            // 如果不是新能源车牌号，则尝试匹配普通车牌号
            return regex.test(plateNumber);
        }
    },
};
</script>
<style lang="less" scoped>
.keyboard-box {
    user-select: none;

    .keyboard {
        position: absolute;
        width: 100%;
        z-index: 99;
        height: 0;
        overflow: hidden;
        transition: all .3s;

        .com-btn {
            text-align: right;
            padding: 10px;
            background: #efefef;
            color: #4097df;
            font-size: 16px;
            cursor: pointer;
        }
    }

    .keyboard-height {
        height: 248px;
    }

    .keyboard-bottom {
        bottom: 0 !important;
    }

    .area-tag-wrap {
        background: #cfd2de;
        padding: 20px;

        .flex {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 15px;

            &:first-child {
                margin-top: 0;
            }

            .flex1 {
                background: #ffffff;
                font-size: 16px;
                width: calc(100% / 11);
                text-align: center;
                margin-right: 5px;
                height: 30px;
                line-height: 30px;
                border-radius: 3px;
                box-shadow: 1px 1px 1px 1px #adb2b9;
                border: 0;
                cursor: pointer;

                &:last-child {
                    margin-right: 0;
                }

                &:active {
                    background: #e6e6e6;
                }
            }

            .min-fiex1 {
                span {
                    font-size: 12px;
                }
            }

            .bg-abc {
                width: 40px;
                padding: 0;
                margin: 0;
                box-shadow: 1px 1px 1px 1px #adb2b9;
                height: 30px;
                margin-right: 5px;
            }

            .bg-del {
                background: #aab3bd;
                // width: auto;
                width: 40px;
                padding: 0 5px;
                text-align: center;
            }
        }
    }
}

@media screen and (max-width : 768px) {
    .keyboard-box {
        .keyboard {
            width: 100%;
        }
    }
}
</style>