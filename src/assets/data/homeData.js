/*
 * @Author: zs.duan
 * @Date: 2022-09-20 14:54:21
 * @LastEditors: zs.duan
 * @LastEditTime: 2023-02-02 15:37:47
 * @FilePath: \vue2+js+eui+template\src\assets\data\homeData.js
 */

export const componentsList = [
    {
        title : "弹窗组件",
        path : "/Popup",
        is_show : true
    },
    {
        title : "表格组件",
        path : "/table",
        is_show : true
    },
    {
        title : "富文本组件",
        path : "/edit",
        is_show : true
    },
    {
        title : "代码编辑器组件",
        path : "/code-editor",
        is_show : false
    },
    {
        title : "markdown组件",
        path : "/markdown",
        is_show : true
    },
    {
        title : "表单组件",
        path : "/form",
        is_show : true
    },  
    {
        title : "横向表单组件",
        path : "/formWidth",
        is_show : true
    }, 
    // {
    //     title : "公共按钮组件",
    //     path : "",
    //     is_show : true
    // },
    {
        title : "车牌号键盘组件",
        path : "/licensePlateNumber",
        is_show : true
    },
    {
        title : "canvas生成验证码",
        path : "/VerificationCode",
        is_show : true
    },
    {
        title : "滑动验证",
        path : "/slide-verification",
        is_show : true
    },
    {
        title : "生成二维码",
        path : "/qr-code",
        is_show : true
    },
    {
        title : "消息通知栏",
        path : "/notice-bar",
        is_show : true
    }
]


export const jsList = [
    {
        title : "二叉树",
        path : "/binary-tree",
        is_show : true
    },
    {
        title : "手写 promise",
        path : "/myPromise",
        is_show : false
    },
    {
        title : "时间相关处理",
        path : "/setTime",
        is_show : true
    },
    {
        title : "防抖/节流 指令",
        path : "/debounce",
        is_show : true
    },
    {
        title : "自动展开 指令",
        path : "/listOpen",
        is_show : true
    },
    {
        title : "生成guid",
        path : "/guid",
        is_show : true
    },
    {
        title : "设置主题色",
        path : "/ThemeColor",
        is_show : true
    },
    {
        title : "获取浏览器型号",
        path : "/ua",
        is_show : true
    },
    {
        title : "计算时间差",
        path : "/timeDifference",
        is_show : true
    },
    {
        title : "日期转农历",
        path : "/calender",
        is_show : true
    },
    {
        title : "xlsx/excel读取数据，没预览",
        path : "/readeXlsx",
        is_show : true
    },
    {
        title : "vueOffice 支持 xlxs pdf word",
        path : "/vue-office",
        is_show : true
    },
    {
        title : "signalR 及时通信",
        path : "/signalR",
        is_show : true
    },
    {
        title : "Notification 消息通知",
        path : "/myNotification",
        is_show : true
    },
    {
        title : "js模糊搜索",
        path : "/blurSearch",
        is_show : true
    },
    {
        title : "vue动态路由",
        path : "/myRouter",
        is_show : true
    },
    {
        title : "对称加密/解密/MD5加密",
        path : "/encryp",
        is_show : true
    },
    {
        title : "微信/支付宝/其他浏览器的判断",
        path : "/is-wx-Alipay",
        is_show : true
    },
    {
        title : "大文件切片与合并",
        path : "/file-slice-and-merge",
        is_show : true
    },
    {
        title : "js复制",
        path : "/myCopy",
        is_show : true
    },
    {
        title : "水印",
        path : "/watermark",
        is_show : true
    },
    {
        title : "分组排序",
        path : "/group-sorting",
        is_show : true
    }
]

export const effectList = [
    {
        title : "模块拖动更换位置",
        path : "/drag",
        is_show : true
    },
    {
        title : "边框动画效果",
        path : "/button-border",
        is_show : true
    },
    {
        title : "一些不常用的css",
        path : "/EasyCss",
        is_show : true
    },
]

export const fragmentList = [
    {
        title : "比较好用的js片段",
        path : "/EasyJS",
        is_show : true
    },
    {
        title : "设置Html",
        path : "/setHtml",
        is_show : true
    },
    {
        title : "99乘法表",
        path : "/99-multiplication-table",
        is_show : true
    },
    {
        title : "特殊记忆aboutFather",
        path : "",
        is_show : true,
        desc : "/about-father"
    } 
]

export default  {
    fragmentList,
    effectList ,
    jsList , 
    componentsList
}