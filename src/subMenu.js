/**菜单配置*/
export default [
    {
        path: '/about-component',
        component: "Layout",
        redirect: '/dzs-dialog',
        name: "aboutcComponent",
        meta: {
            title: "组件篇"
        },
        children: [
            // {
            //     path: '/drag-form',
            //     component: "component-section/drag-form/index",
            //     name: 'dragForm',
            //     meta: { title: '自定义表单' }
            // },
            {
                path: '/dzs-button',
                component: "component-section/dzs-button/dzs-button",
                name: 'dzsButton',
                meta: { title: '按钮组件' }
            },
            {
                path: '/dzs-dialog',
                component: "component-section/dzs-dialog/index",
                name: 'dzsDialog',
                meta: { title: '弹窗组件' }
            },
            {
                path: '/dzs-table',
                component: "component-section/dzs-table/index",
                name: 'dzsTable',
                meta: { title: '表格组件' }
            },
            {
                path: '/dzs-editor',
                component: "component-section/dzs-editor/index",
                name: 'dzsEditor',
                meta: { title: '富文本组件(tinymce)' }
            },
            {
                path: '/dzs-upload-img',
                component: "component-section/dzs-upload-img/index",
                name: 'dzsUploadImg',
                meta: { title: '上传图片组件' }
            },
            {
                path: '/dzs-upload-file',
                component: "component-section/dzs-upload-file/index",
                name: 'dzsUploadFile',
                meta: { title: '上传文件组件' }
            },
            {
                path: '/dzs-form',
                component: "component-section/dzs-form/index",
                name: 'dzsForm',
                meta: { title: '表单组件' }
            },
            {
                path: '/dzs-search-form',
                component: "component-section/dzs-search-form/index",
                name: 'dzsSearchForm',
                meta: { title: '表单搜索组件' }
            },
            {
                path: '/dzs-header-button',
                component: "component-section/dzs-header-button/index",
                name: 'dzsHeaderButton',
                meta: { title: '后台通用操作按钮' }
            },
            {
                path: '/dzs-markdown',
                component: "component-section/dzs-markdown/index",
                name: 'dzsMarkdown',
                meta: { title: 'markdown组件' }
            },
            {
                path: '/dzs-license-plate-keyboard',
                component: "component-section/dzs-license-plate-keyboard/index",
                name: 'dzsLicensePlateKeyboard',
                meta: { title: '车牌号键盘组件' }
            },
            {
                path: '/dzs-notice-bar',
                component: "component-section/dzs-notice-bar/index",
                name: 'dzsNoticeBar',
                meta: { title: '消息提示组件' }
            },
            {
                path: '/dzs-identifying-code-canvans',
                component: "component-section/dzs-identifying-code-canvans/index",
                name: 'dzsIdentifyingCodeCanvans',
                meta: { title: '验证码组件(canvans)' }
            },
            {
                path: '/dzs-slide-verification',
                component: "component-section/dzs-slide-verification/index",
                name: 'dzsSlideVerification',
                meta: { title: '滑动验证' }
            },
            {
                path: '/dzs-qr-code',
                component: "component-section/dzs-qr-code/index",
                name: 'dzsQrCode',
                meta: { title: '生成二维码' }
            },
            {
                path: '/dzs-vue-office',
                component: "component-section/dzs-vue-office/index",
                name: 'dzsVueOffice',
                meta: { title: '文档预览(docx,xlsx,pdf,ppt,txt)' }
            },
            {
                path: '/code-editor',
                component: "component-section/code-editor/index",
                name: 'codeEditor',
                meta: { title: '代码编辑器' }
            },
            {
                path : "/four-sets",
                component : "component-section/four-sets/index",
                name : 'fourSets',
                meta : { title : '后台四件套' }
            },
            {
                path : "/dzs-douyin",
                component : "component-section/dzs-douyin/index",
                name : 'dzsDouyin',
                meta : { title : '仿抖音' }
            },
            {
                path : "/dzs-article-item",
                component : "component-section/dzs-article-item/index",
                name : 'dzsArticleItem',
                meta : { title : '文章列表' }
            },
            {
                path : "/dzs-pull-to-refresh",
                component : "component-section/dzs-pull-to-refresh/index",
                name : 'dzsPullToRefresh',
                meta : { title : '下拉刷新与上拉加载' }
            },
            {
                path : "/dzs-ip-input",
                component : "component-section/dzs-ip-input/index",
                name : 'IpInput',
                meta : { title : 'ip地址输入框' }
            },
        ]
    },
    {
        path: '/about-js',
        component: "Layout",
        redirect: '/binary-tree',
        name: "aboutJs",
        meta: {
            title: "js篇"
        },
        children: [
            {
                path: '/easy-js',
                component: "JS-article/easy-js/index",
                name: 'easyJs',
                meta: { title: '简单好用的js' }
            },
            {
                path: '/format-time',
                component: "JS-article/format-time/index",
                name: 'formatTime',
                meta: { title: '格式化时间与时间处理' }
            },
            {
                path: '/get-guid',
                component: "JS-article/get-guid/index",
                name: 'getGuid',
                meta: { title: '获取guid' }
            },
            {
                path: '/set-themecolor',
                component: "JS-article/set-themecolor/index",
                name: 'setThemecolor',
                meta: { title: '设置主题色' }
            },
            {
                path: '/get-ua',
                component: "JS-article/get-ua/index",
                name: 'getUa',
                meta: { title: '获取浏览器版本基础信息' }
            },
            {
                path: '/date-to-calender',
                component: "JS-article/date-to-calender/index",
                name: 'dateToCalender',
                meta: { title: '日期转农历' }
            },
            {
                path: '/reade-excel',
                component: "JS-article/reade-excel/index",
                name: 'readeExcel',
                meta: { title: '读取Excel' }
            },
            {
                path: '/signalR',
                component: "JS-article/signalR/index",
                name: 'signalR',
                meta: { title: 'signalR及时通信(.NET)' }
            },
            {
                path: '/send-notification',
                component: "JS-article/send-notification/index",
                name: 'sendNotification',
                meta: { title: '发送通知(含系统通知)' }
            },
            {
                path: '/fuzzy-search',
                component: "JS-article/fuzzy-search/index",
                name: 'fuzzySearch',
                meta: { title: '模糊搜索' }
            },
            {
                path: '/dynamic-route',
                component: "JS-article/dynamic-route/index",
                name: 'dynamicRoute',
                meta: { title: '动态路由' }
            },
            {
                path: '/encryption-decryption',
                component: "JS-article/encryption-decryption/index",
                name: 'encryptionDecryption',
                meta: { title: '对称加解密与MD5加密' }
            },
            {
                path: '/phone-app-navigator',
                component: "JS-article/phone-app-navigator/index",
                name: 'phoneAppNavigator',
                meta: { title: '手机app浏览器判断' }
            },
            {
                path: '/file-slice-and-merge',
                component: "JS-article/file-slice-and-merge/index",
                name: 'fileSliceAndMerge',
                meta: { title: '文件切片与合并' }
            },
            {
                path: '/copy',
                component: "JS-article/copy/index",
                name: 'copy',
                meta: { title: '复制' }
            },
            {
                path: '/watermark',
                component: "JS-article/watermark/index",
                name: 'watermark',
                meta: { title: '水印' }
            },
            {
                path: '/group-sort',
                component: "JS-article/group-sort/index",
                name: 'groupSort',
                meta: { title: '分组或排序' }
            },
            {
                path: '/scroll-to-number',
                component: "JS-article/scroll-to-number/index",
                name: 'scrollToNumber',
                meta: { title: '数字滚动' }
            },
            {
                path: '/set-html',
                component: "JS-article/set-html/index",
                name: 'setHtml',
                meta: { title: '富文本设置图片大小' }
            },
        ]
    },
    {
        path: '/directive',
        component: "Layout",
        redirect: '/anti-vibration-and-throttling',
        name: "directive",
        meta: {
            title: "指令"
        },
        children: [
            {
                path: '/anti-vibration-and-throttling',
                component: "directive/anti-vibration-and-throttling/index",
                name: 'antiVibrationAndThrottling',
                meta: { title: '节流与防抖' }
            },
            {
                path: '/auto-open',
                component: "directive/auto-open/index",
                name: 'autoOpen',
                meta: { title: '自动展开' }
            },
        ]
    },
    {
        path : "/css",
        component : "Layout",
        redirect : "/frame-animation-effect",
        name : "css",
        meta : {title : "css篇"},
        children : [
            {
                path : "/frame-animation-effect",
                component : "my-css/frame-animation-effect/index",
                name : "frameAnimationEffect",
                meta : {title : "边框动效"}
            },
            {
                path : "/easy-css",
                component : "my-css/easy-css/index",
                name : "easyCss",
                meta : {title : "一些常用的css"}
            }
        ]
    },
    {
        path: '/idea',
        component: "Layout",
        redirect: '/binary-tree',
        name: "idea",
        meta: {
            title: "一些突如其来的想法"
        },
        children: [
            {
                path: '/binary-tree',
                component: "idea/binary-tree/index",
                name: 'binaryTree',
                meta: { title: '二叉树' }
            },
            {
                path: '/99-multiplication-table',
                component: "idea/99-multiplication-table/index",
                name: '99MultiplicationTable',
                meta: { title: '99乘法表' }
            },
            {
                path : '/postman',
                component : "idea/postman/index",
                name : 'postman',
                meta : {title : 'Postman'}
            },
        ]
    }
] 