<!--
 * @Author: zs.duan
 * @Date: 2023-01-11 14:46:53
 * @LastEditors: zs.duan
 * @LastEditTime: 2023-02-02 15:39:56
 * @FilePath: \vue2+js+eui+template\src\components\dzs-components-list\dzs-components-list.vue
-->
<template>
    <div v-if="type">
        <popup v-if="type == '/Popup'" :newIndex="true"></popup>
        <mytable v-else-if="type == '/table'" :newIndex="true"></mytable>
        <myedit v-else-if="type == '/edit'" :newIndex="true"></myedit>
        <mymarkdown v-else-if="type == '/markdown'" :newIndex="true"></mymarkdown>
        <myform v-else-if="type == '/form'" :newIndex="true"></myform>
        <formWidth v-else-if="type == '/formWidth'" :newIndex="true"></formWidth>
        <licensePlateNumber v-else-if="type == '/licensePlateNumber'" :newIndex="true"></licensePlateNumber>
        <verificationCode v-else-if="type == '/VerificationCode'" :newIndex="true"></verificationCode>
        <slide-verification v-else-if="type == '/slide-verification'" :newIndex="true"></slide-verification>
        <setTime v-else-if="type == '/setTime'" :newIndex="true"></setTime>
        <debounce v-else-if="type == '/debounce'" :newIndex="true"></debounce>
        <listOpen v-else-if="type == '/listOpen'" :newIndex="true"></listOpen>
        <guid v-else-if="type == '/guid'" :newIndex="true"></guid>
        <themeColor v-else-if="type == '/ThemeColor'" :newIndex="true"></themeColor>
        <ua v-else-if="type == '/ua'" :newIndex="true"></ua>
        <time-difference v-else-if="type == '/timeDifference'" :newIndex="true"></time-difference>
        <calender v-else-if="type == '/calender'" :newIndex="true"></calender>
        <readeXlsx v-else-if="type == '/readeXlsx'" :newIndex="true"></readeXlsx>
        <readeWord v-else-if="type == '/readeWord'" :newIndex="true"></readeWord>
        <signalR v-else-if="type == '/signalR'" :newIndex="true"></signalR>
        <myNotification v-else-if="type == '/myNotification'" :newIndex="true"></myNotification>
        <blurSearch v-else-if="type == '/blurSearch'" :newIndex="true"></blurSearch>
        <myRouter v-else-if="type == '/myRouter'" :newIndex="true"></myRouter>
        <encryp v-else-if="type == '/encryp'" :newIndex="true"></encryp>
        <is-wx-Alipay v-else-if="type == '/is-wx-Alipay'" :newIndex="true"></is-wx-Alipay>
        <file-slice-and-merge v-else-if="type == '/file-slice-and-merge'" :newIndex="true"></file-slice-and-merge>
        <myCopy v-else-if="type == '/myCopy'" :newIndex="true"></myCopy>
        <drag v-else-if="type == '/drag'" :newIndex="true"></drag>
        <button-border v-else-if="type == '/button-border'" :newIndex="true"></button-border>
        <easyJS v-else-if="type == '/EasyJS'" :newIndex="true"></easyJS>
        <binary-tree v-else-if="type == '/binary-tree'" :newIndex="true"></binary-tree>
        <myPromise v-else-if="type == '/myPromise'" :newIndex="true"></myPromise>
        <multiplicationTable v-else-if="type == '/99-multiplication-table'" :newIndex="true"></multiplicationTable>
        <setHtml v-else-if="type == '/setHtml'" :newIndex="true"></setHtml>
        <qr-code v-else-if="type == '/qr-code'" :newIndex="true"></qr-code>
        <easy-css v-else-if="type == '/EasyCss'" :newIndex="true"></easy-css>
        <div v-else class="empty-list">
            <el-empty  description="页面开发中~"></el-empty>
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
import readeWord from "@/views/readeWord/readeWord.vue";
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
import myPromise from "@/views/myPromise/myPromise.vue";
import MultiplicationTable from "@/views/99-multiplication-table/99-multiplication-table.vue";
import setHtml from "@/views/setHtml/setHtml.vue";
import qrCode from "@/views/qr-code/qr-code.vue";
import EasyCss from "@/views/EasyCss/index.vue"


export default {
    name : "dzs-components-list",
    components:{
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
        readeWord,
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
        myPromise,
        MultiplicationTable,
        setHtml,
        qrCode,
        EasyCss
    },
    props : {
        type : {
            type : String,
            default : ()=>{
                return ""
            }
        }
    }
}
</script>
<style lang="less" scoped>
.empty-list{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50% , -50%);
}
</style>