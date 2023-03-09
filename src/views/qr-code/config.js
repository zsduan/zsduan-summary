export const code1 = `
// 只需要提供需要显示的内容即可
// html
<dzs-qr-code :option="options1"></dzs-qr-code>

// js
import dzsQrCode from "@/components/dzs-qr-code/index.vue";
options1 : {
    value : "https://www.baidu.com",
}
`

export const code2 = `
// html
<dzs-qr-code :option="options1"></dzs-qr-code>

// js
import dzsQrCode from "@/components/dzs-qr-code/index.vue";
options1 : {
    value : "https://www.baidu.com",
    size : 300, //二维码大小
}
`

export const code3 = `
// html
<dzs-qr-code :option="options1"></dzs-qr-code>

// js
import dzsQrCode from "@/components/dzs-qr-code/index.vue";
options3 : {
    value : "https://www.baidu.com",
    logo : "https://yy.yunweicn.com/mp-wx-img/userIcon.png",
}
`

export const code4 = `
/**
  * 配置说明
  * @param {String} value 二维码内容
  * @param {Number} size 二维码大小
  * @param {String} level 二维码等级
  * @param {String} bgColor 二维码背景色
  * @param {String} fgColor 二维码前景色
  * @param {Number} margin 二维码边距
  * @param {Number} scale 二维码缩放
  * @param {Number} version 二维码版本
  * @param {String} errorCorrectionLevel 二维码容错级别
  * @param {String} logo 二维码logo
  * @param {Number} logoWidth 二维码logo宽度
  * @param {Number} logoHeight 二维码logo高度
  * @param {String} text 二维码底部文字
  * @param {String} font 二维码底部文字字体
  * @param {String} fontColor 二维码底部文字颜色
  * @param {Number} lineWidth 二维码底部文字线条宽度
  * @param {String} lineColor 二维码底部文字线条颜色
  * @param {Boolean} showBoder 二维码是否显示边框
  *
  * */

 options : {
    value : "https://www.baidu.com",
    size : 400,
    margin : 4,
    fgColor : "#000000",
    bgColor : "#ffffff",
    correctLevel : "H",
    logo : "https://yy.yunweicn.com/mp-wx-img/userIcon.png",
    logoWidth : 50,
    logoHeight : 50,
    text : "zs.duan的总结",
    font: "bold 16px Arial",
    fontColor: "#000000",
    lineWidth: 2,
    lineColor: "#000000",
    showBoder: true,
},
`