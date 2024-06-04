<template>
    <div v-if="type" class="dzs-components-list-box">
        <popup v-if="type == '/Popup'"></popup>
        <mytable v-else-if="type == '/table'"></mytable>
        <myedit v-else-if="type == '/edit'"></myedit>
        <mymarkdown v-else-if="type == '/markdown'"></mymarkdown>
        <myform v-else-if="type == '/form'"></myform>
        <formWidth v-else-if="type == '/formWidth'"></formWidth>
        <licensePlateNumber v-else-if="type == '/licensePlateNumber'"></licensePlateNumber>
        <verificationCode v-else-if="type == '/VerificationCode'"></verificationCode>
        <slide-verification v-else-if="type == '/slide-verification'"></slide-verification>
        <setTime v-else-if="type == '/setTime'"></setTime>
        <debounce v-else-if="type == '/debounce'"></debounce>
        <listOpen v-else-if="type == '/listOpen'"></listOpen>
        <guid v-else-if="type == '/guid'"></guid>
        <themeColor v-else-if="type == '/ThemeColor'"></themeColor>
        <ua v-else-if="type == '/ua'"></ua>
        <time-difference v-else-if="type == '/timeDifference'"></time-difference>
        <calender v-else-if="type == '/calender'"></calender>
        <readeXlsx v-else-if="type == '/readeXlsx'"></readeXlsx>
        <readeWord v-else-if="type == '/readeWord'"></readeWord>
        <signalR v-else-if="type == '/signalR'"></signalR>
        <myNotification v-else-if="type == '/myNotification'"></myNotification>
        <blurSearch v-else-if="type == '/blurSearch'"></blurSearch>
        <myRouter v-else-if="type == '/myRouter'"></myRouter>
        <encryp v-else-if="type == '/encryp'"></encryp>
        <is-wx-Alipay v-else-if="type == '/is-wx-Alipay'"></is-wx-Alipay>
        <file-slice-and-merge v-else-if="type == '/file-slice-and-merge'"></file-slice-and-merge>
        <myCopy v-else-if="type == '/myCopy'"></myCopy>
        <drag v-else-if="type == '/drag'"></drag>
        <button-border v-else-if="type == '/button-border'"></button-border>
        <easyJS v-else-if="type == '/EasyJS'"></easyJS>
        <binary-tree v-else-if="type == '/binary-tree'"></binary-tree>
        <multiplicationTable v-else-if="type == '/99-multiplication-table'"></multiplicationTable>
        <setHtml v-else-if="type == '/setHtml'"></setHtml>
        <qr-code v-else-if="type == '/qr-code'"></qr-code>
        <easy-css v-else-if="type == '/EasyCss'"></easy-css>
        <watermark v-else-if="type == '/watermark'"></watermark>
        <notice-bar v-else-if="type == '/notice-bar'"></notice-bar>
        <code-editor v-else-if="type == '/code-editor'"></code-editor>
        <group-sorting v-else-if="type == '/group-sorting'"></group-sorting>
        <vue-office v-else-if="type == '/vue-office'"></vue-office>
        <large-screen-lottery v-else-if="type == '/big-screen-draw'"></large-screen-lottery>
        <public-button v-else-if="type == '/public-button'"></public-button>
        <div v-else class="empty-list">
            <el-empty description="页面开发中~"></el-empty>
        </div>
    </div>
</template>
<script>
import Popup from "@/views/Popup/Popup.vue";
import Mytable from "@/views/table/table.vue";
import Myedit from "@/views/edit/edit.vue";
import Mymarkdown from "@/views/markdown/markdown.vue";
import Myform from "@/views/form/form.vue";
import formWidth from "@/views/formWidth/formWidth.vue";
import licensePlateNumber from "@/views/license-plate-number/license-plate-number.vue";
import VerificationCode from "@/views/VerificationCode/VerificationCode.vue";
import slideVerification from "@/views/slide-verification/slide-verification.vue";
import setTime from "@/views/setTime/setTime.vue";
import debounce from "@/views/debounce/debounce.vue";
import listOpen from "@/views/listOpen/listOpen.vue";
import guid from "@/views/guid/guid.vue";
import ThemeColor from "@/views/ThemeColor/ThemeColor.vue";
import ua from "@/views/ua/ua.vue";
import timeDifference from "@/views/time-difference/time-difference.vue";
import calender from "@/views/calender/calender.vue";
import readeXlsx from "@/views/readeXlsx/readeXlsx.vue";
import signalR from "@/views/signalR/signalR.vue";
import myNotification from "@/views/myNotification/myNotification.vue";
import blurSearch from "@/views/blurSearch/blurSearch.vue";
import myRouter from "@/views/myRouter/myRouter.vue";
import encryp from "@/views/encryp/encryp.vue";
import isWxAlipay from "@/views/is-wx-Alipay/is-wx-Alipay.vue";
import fileSliceAndMerge from "@/views/file-slice-and-merge/file-slice-and-merge.vue";
import myCopy from "@/views/myCopy/myCopy.vue";
import drag from "@/views/drag/drag.vue";
import buttonBorder from "@/views/button-border/button-border.vue";
import EasyJS from "@/views/EasyJS/EasyJS.vue";
import binaryTree from "@/views/binary-tree/binary-tree.vue";
import MultiplicationTable from "@/views/99-multiplication-table/99-multiplication-table.vue";
import setHtml from "@/views/setHtml/setHtml.vue";
import qrCode from "@/views/qr-code/qr-code.vue";
import EasyCss from "@/views/EasyCss/index.vue"
import watermark from "@/views/watermark/index.vue"
import noticeBar from "@/views/notice-bar/notice-bar.vue";
import codeEditor from "@/views/code-editor/code-editor.vue";
import groupSorting from "@/views/group-sorting/group-sorting.vue";
import vueOffice from "@/views/vue-office/index.vue";
import largeScreenLottery from "@/views/large-screen-lottery/large-screen-lottery.vue";
import publicButton from "@/views/public-button/index.vue";
export default {
    name: "dzs-components-list",
    components: {
        Popup,
        Mytable,
        Myedit,
        Mymarkdown,
        Myform,
        formWidth,
        licensePlateNumber,
        VerificationCode,
        slideVerification,
        setTime,
        debounce,
        listOpen,
        guid,
        ThemeColor,
        ua,
        timeDifference,
        calender,
        readeXlsx,
        signalR,
        myNotification,
        blurSearch,
        myRouter,
        encryp,
        isWxAlipay,
        fileSliceAndMerge,
        myCopy,
        drag,
        buttonBorder,
        EasyJS,
        binaryTree,
        MultiplicationTable,
        setHtml,
        qrCode,
        EasyCss,
        watermark,
        noticeBar,
        codeEditor,
        groupSorting,
        vueOffice,
        largeScreenLottery,
        publicButton
    },
    props: {
        type: {
            type: String,
            default: () => {
                return ""
            }
        }
    }
}
</script>
<style lang="less" scoped>
.empty-list {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.dzs-components-list-box {
    width: 100%;
    height: 100%;
    // 隐藏滚动条
    -ms-overflow-style: none;
    /* IE 10+ */
    scrollbar-width: none;

    /* Firefox */
    &::-webkit-scrollbar {
        /* Chrome Safari */
        display: none;
    }
}
</style>