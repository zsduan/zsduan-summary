<!--
 * @Author: zs.duan
 * @Date: 2021-12-20 16:33:42
 * @LastEditors: zs.duan
 * @LastEditTime: 2021-12-27 14:36:16
 * @FilePath: \adminBlogf:\模板\template\src\components\from\from.vue
-->
<template>
    <div class="from-box">
        <div
            class="ipt-box-worp"
            v-for="(item, index) in FromList"
            :key="index"
        >
            <div class="ipt-box" v-if="!item.hidden">
                <label :style="{ width: width }">
                    <span class="important" v-if="item.important">*</span>
                    <span class="important" v-else></span>
                    <span>{{ item.lable }}</span>
                </label>
                <div class="ipt" v-if="item.type == 'input' || !item.type">
                    <el-input
                        :placeholder="'请输入' + item.lable"
                        v-model="item.content"
                        @blur="BlurIpt(index, item)"
                        @input="InputIpt(index, item)"
                    ></el-input>
                </div>
                <div class="select" v-if="item.type == 'select'">
                    <el-select
                        v-model="item.content"
                        filterable
                        placeholder="请选择"
                        @change="changSelect($event, index)"
                    >
                        <el-option
                            key="--请选择--"
                            label="--请选择--"
                            value="0"
                        ></el-option>
                        <el-option
                            v-for="itm in item.list"
                            :key="itm.value"
                            :label="itm.label"
                            :value="itm.value"
                        >
                        </el-option>
                    </el-select>
                </div>

                <div class="switch" v-if="item.type == 'switch'">
                    <el-switch
                        v-model="item.content"
                        @change="changeSwitch"
                    ></el-switch>
                </div>

                <div class="time-all" v-if="item.type == 'times'">
                    <el-date-picker
                        v-model="item.content"
                        type="datetimerange"
                        align="right"
                        unlink-panels
                        range-separator="—"
                        value-format="yyyy-MM-dd HH:mm"
                        format="yyyy-MM-dd HH:mm"
                        start-placeholder="开始时间"
                        end-placeholder="结束时间"
                        :picker-options="pickerOptions"
                        :clearable="false"
                        @blur="changeTimes(index)"
                    >
                    </el-date-picker>
                </div>

                <div class="time" v-if="item.type == 'time'">
                    <el-date-picker
                        v-model="item.content"
                        type="date"
                        value-format="yyyy-MM-dd HH:mm"
                        placeholder="选择日期时间"
                        @blur="changTime(index)"
                        @change="changTime(index)"
                    >
                    </el-date-picker>
                </div>

                <div class="num" v-if="item.type == 'num'">
                    <el-input-number
                        v-model="item.content"
                        @change="changeNum(index)"
                    ></el-input-number>
                </div>

                <div class="img" v-if="item.type == 'img'">
                    <div class="icon-wrop" v-if="item.content">
                        <img :src="item.content" />
                    </div>
                    <div class="up-img" @click="upImgClick(index)">
                        <el-upload
                            class="avatar-uploader"
                            action="#"
                            :show-file-list="false"
                            list-type="picture-card"
                            :before-upload="beforeAvatarUpload"
                            :auto-upload="false"
                            :on-change="changAvatar"

                        >
                            <i class="el-icon-plus avatar-uploader-icon"></i>
                        </el-upload>
                    </div>
                </div>

                <div class="textarea" v-if="item.type == 'textarea'" >
                    <el-input
                        type="textarea"
                        :placeholder="'请输入' + item.lable"
                        v-model="item.content"
                        @blur="BlurIpt(index, item)"
                        @input="InputIpt(index, item)"
                        show-word-limit
                        :maxlength="item.maxlength ? item.maxlength : '999'"
                    >
                    </el-input>
                </div>
            </div>
            <div
                class="tips"
                v-if="item.show_tips"
                :style="{ paddingLeft: width }"
            >
                {{ item.lable }}不能为空
            </div>
        </div>
        <div class="sbumit">
            <el-button class="btn" type="primary" @click.stop="onSubmit">{{
                success_txt
            }}</el-button>
            <el-button type="info" @click.stop="onClose" class="btn"
                >取消</el-button
            >
        </div>
    </div>
</template>

<script>
/*
 *@props FromList = [
     {
		important : true, //是否必填
        lable: "", //输入框名称
        key: "", //输入框key
		type : "", //类型  input(default)输入框 select选择框 switch开关 time时间 times时间段 img图片 num数字 textarea 多行文本输入框
		list : [] , //select 列表
        maxlength : 999 , //多行文本输入长度
	}
 ] //表单列表
 *@props width default 100px lable宽度
 *@props success_txt 底部按钮提示文字
 *
 * 
 *@methods onSubmit 提交事件
 *@methods onClose 关闭事件
 * 
 * 
*/ 
import { pickerOptions } from "./config.js";
export default {
    name: "From",
    props: {
        FromList: {
            type: Array,
            default: () => {
                return [];
            },
        },
        width: {
            type: String,
            default: () => {
                return "100px";
            },
        },
        success_txt: {
            type: String,
            default: () => {
                return "提交";
            },
        },
    },
    data() {
        return {
            pickerOptions: pickerOptions,
            content: "",
            imgItemIndex : {}
        };
    },
    methods: {
        // 输入框失去焦点
        BlurIpt(index, item) {
            if (!item.important) return;
            if (item.content == "" || item.content == undefined) {
                this.FromList[index].show_tips = true;
            } else {
                this.FromList[index].show_tips = false;
            }
            this.$forceUpdate();
        },
        // 输入框正在输入
        InputIpt(index, item) {
            this.FromList[index] = item;
            if (item.important) {
                if (item.content == "" || item.content == undefined) {
                    this.FromList[index].show_tips = true;
                } else {
                    this.FromList[index].show_tips = false;
                }
            }
            this.$forceUpdate();
        },
        // 改变select
        changSelect(e, index) {
            let list = this.FromList[index].list;
            list.forEach((v) => {
                v.active = false;
                if (v.value == e) {
                    v.content = v.label;
                    v.active = true;
                }
            });
            this.$forceUpdate();
        },

        // 改变时间 times
        changeTimes() {
            this.$forceUpdate();
        },

        // 改变时间
        changTime(index) {
            console.log(this.FromList[index].content);
            // this.FromList[index].content = this.$formatTime(this.FromList[index].content)
            this.$forceUpdate();
        },

        changeNum() {
            this.$forceUpdate();
        },

        changeSwitch() {
            this.$forceUpdate();
        },

        onSubmit() {
            let falge = false;
            this.FromList.forEach((v) => {
                if (v.important && !v.content && !v.hidden) {
                    falge = true;
                }
            });
            if (falge) {
                this.$message({
                    showClose: true,
                    message: "数据不完整",
                    type: "warning",
                    duration: 1000,
                });
                return;
            }
            let sendList = {};
            this.FromList.forEach(async v => {
                sendList[`${v.key}`] = v.content;
                if (!v.content && v.type == "num") {
                    sendList[`${v.key}`] = 0;
                }
                if (v.type == "select") {
                    v.list.forEach((item) => {
                        if (item.active) {
                            sendList[`${v.key}`] = item.lable;
                        }
                    });
                }
                if(v.type == "img" && v.raw){
                    sendList[`${v.key}`] = v.raw;
                }
            });
            for (const key in sendList) {
                if (sendList[`${key}`] == undefined) {
                    sendList[`${key}`] = "";
                }
            }
            this.$emit("onSubmit", sendList);
        },
        onClose() {
            this.$emit("onClose");
        },
        // 图片选择
        beforeAvatarUpload(file) {
            // const isJPG = file.type === 'image/jpeg';
            const isLt2M = file.size / 1024 / 1024 < 5;
            // if (!isJPG) {
            //     this.$message.error('上传头像图片只能是 JPG 格式!');
            // }
            if (!isLt2M) {
                this.$message.error("上传头像图片大小不能超过 5MB!");
            }
            return isLt2M;
        },

        // 选择图片
        changAvatar(file, fileList) {
            this.FromList[this.imgItemIndex].content = file.url;
            this.FromList[this.imgItemIndex].raw = file.raw;
            this.$forceUpdate();
        },

        // 点击上传图片时候
        upImgClick(index){
            this.imgItemIndex = index;
        },
    },
};
</script>

<style lang="less" scoped>
@import "../../assets/css/reset.less";
li {
    padding: 0 20px !important;
}

.from-box {
    width: 600px;
    .ipt-box {
        display: flex;
        align-items: center;
        min-height: 55px;
        .important {
            color: red;
            display: inline-block;
            width: 10px;
        }
        .ipt {
            width: 85%;
        }
        .textarea{
            width: 85%;
        }
    }
    .tips {
        font-size: 12px;
        color: red;
        padding-top: 2px;
    }
    .sbumit {
        text-align: center;
        .btn {
            width: 115px;
            height: 42px;
            background-color: @ThemeColor;
            border: none;
            &.el-button--info {
                background-color: #f0f3fa;
                color: #8fa1c5;
            }
        }
    }

    .submits {
        background-color: @fontColor;
        color: #fff;
    }
    .img{
        display: flex;
        .icon-wrop{
            width: 80px;
            height: 80px;
            margin-right: 10px;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .up-img{
            width: 80px;
            height: 80px;
            /deep/.avatar-uploader{
                height: 100%;
            }
            /deep/.el-upload{
                width: 100%;
                height: 100%;
                position: relative;
            }
            /deep/.el-icon-plus{
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%,-50%);
            }
        }
    }
}
</style>
