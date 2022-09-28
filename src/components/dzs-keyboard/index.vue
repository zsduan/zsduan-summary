<!--
 * @Author: zs.duan
 * @Date: 2022-09-28 14:33:41
 * @LastEditors: zs.duan
 * @LastEditTime: 2022-09-28 15:34:25
 * @FilePath: \vue2+js+eui+template\src\components\dzs-keyboard\index.vue
-->
<template>
    <div class="keyboard-box">
        <div :class="showKeyboard ? 'keyboard-height' : 'keyboard-bottom'" class="keyboard" :style="{bottom:bottom}">
            <!--省份简称键盘-->
            <div class="com-btn" @click="complete">完成</div>
            <div class="area-tag-wrap" v-if="!showNums">
                <div class="flex first-line" v-for="(item,index) in area" :key="index">
                    <span
                        class="flex1"
                        @click="selectOtherNum(itm)"
                        :key="idx"
                        :class="{'bg-del': itm == 'del','bg-abc': itm == 'operation'}"
                        v-for="(itm,idx) in item"
                    >
                        <span v-if="itm != 'del' && itm != 'operation'">{{itm}}</span>
                        <span v-if="itm == 'operation'" @click.stop="showOtherWord">切换</span>
                        <span v-if="itm == 'del'">删除</span>
                    </span>
                </div>
            </div>

            <!--数字与字母键盘-->
            <div class="area-tag-wrap" v-if="showNums">
                <div class="flex first-line" v-if="plateNum.length!=0">
                    <span
                        class="flex1"
                        v-for="(item,index) in num[0]"
                        :key="index"
                        @click="selectOtherNum(item)"
                    >{{ item }}</span>
                </div>
                <div class="flex first-line" v-else>
                    <span
                        class="flex1 flexWhite"
                        v-for="(item,index) in num[0]"
                        :key="index"
                        @click="selectOtherNum(item)"
                    >{{ item }}</span>
                </div>
                <div class="flex first-line mt-3">
                    <span
                        class="flex1"
                        v-for="(item,index) in num[1]"
                        :key="index"
                        @click="selectOtherNum(item)"
                    >{{ item }}</span>
                    <span class="flex1" @click="selectOtherNum('O')">O</span>
                </div>
                <div class="flex first-line mt-3">
                    <span
                        class="flex1"
                        v-for="(item,index) in num[2]"
                        :key="index"
                        @click="selectOtherNum(item)"
                    >{{ item }}</span>
                </div>
                <div class="flex first-line mt-3">
                    <span
                        class="flex1"
                        :key="index"
                        @click="selectOtherNum(item)"
                        :class="{'bg-del': item == 'del','bg-abc': item == 'operation'}"
                        v-for="(item,index) in num[3]"
                    >
                        <span>{{ item == 'del' || item == 'operation'? '' : item }}</span>
                        <span v-if="item == 'operation'" @click.stop="showOtherWord">省份</span>
                        <span v-if="item == 'del'">删除</span>
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
/*
 * @props  showKeyboard 是否显示键盘  
 * @props bottom 距离底部的距离
 * 
 * 
 * @methods complete 点击完成
 * @methods change 点击改变事件
 * @methods changeShow 点击切换 /省份

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
                [
                    "京",
                    "沪",
                    "粤",
                    "浙",
                    "苏",
                    "津",
                    "冀",
                    "川",
                    "渝",
                    "鄂",
                    "闽",
                ],
                [
                    "陕",
                    "鲁",
                    "湘",
                    "辽",
                    "皖",
                    "赣",
                    "豫",
                    "桂",
                    "晋",
                    "云",
                    "黑",
                ],
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
            showNums : false
        };
    },
    methods: {
        // 切换
        showOtherWord() {
            this.showNums = !this.showNums;
            this.$emit("changeShow", !this.showNums);
        },
        // 点击完成
        complete() {
            this.$emit("update:showKeyboard",false);
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
    },
};
</script>
<style lang="less" scoped>
.keyboard-box {
    user-select: none;
    .keyboard {
        position: absolute;
        width: 390px;
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
                width: 30px;
                text-align: center;
                margin-right: 5px;
                height: 30px;
                line-height: 30px;
                border-radius: 3px;
                box-shadow: 1px 1px 1px 1px #adb2b9;
                cursor: pointer;
                &:last-child {
                    margin-right: 0;
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
                width: auto;
                padding: 0 5px;
                text-align: center;
            }
        }
    }
}
</style>