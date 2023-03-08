<template>
    <div>
        <canvas ref="qrCode" :width="options.size" :height="options.size"></canvas>
    </div>
</template>
<script>
import QRCode from "qrcode";
export default {
    props: {
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
        option: {
            type: Object,
            default: () => {
                return {};
            },
        },
    },
    data() {
        return {
            options: {
                value: "dzs-qr-code",
                size: 200,
                level: "L",
                bgColor: "#ffffff",
                fgColor: "#000000",
                margin: 4,
                scale: 4,
                version: -1,
                errorCorrectionLevel: "M",
                logo: "",
                logoWidth: 40,
                logoHeight: 40,
                text: "",
                font: "bold 16px Arial",
                fontColor: "#000000",
                lineWidth: 2,
                lineColor: "#000000",
                showBoder: true,
            },
        };
    },
    watch: {
        option: {
            handler: function (val) {
                setTimeout(() => {
                    this.drawQrCode();
                }, 100);
            },
            deep: true,
            immediate: true,
        },
    },
    methods: {
        drawQrCode() {
            let canvas = this.$refs.qrCode;
            let option = {
                ...this.options,
                ...this.option,
            };
            QRCode.toCanvas(
                canvas,
                option.value,
                {
                    width: option.size,
                    height: option.size,
                    color: {
                        dark: option.fgColor,
                        light: option.bgColor,
                    },
                    margin: option.margin,
                    scale: option.scale,
                    version: option.version,
                    errorCorrectionLevel: option.errorCorrectionLevel,
                },
                function (error) {
                    if (error) console.error(error);
                    console.log("success!");
                }
            );
            // 设置logo
            if (option.logo) {
                this.setLogo(canvas, option);
            }
            // 设置底部文字
            if (option.text) {
                this.setText(canvas, option);
            }
            // 绘制边框
            if (option.showBoder) {
                this.setFrame(canvas, option);
            }
            // canvas 转图片
            let img = canvas.toDataURL("image/png");
            this.$emit("qrCode", img);
        },
        /**
         * 设置logo
         * @param {Object} canvas canvas对象
         * @param {Object} options 配置
         */
        setLogo(canvas, options) {
            let ctx = canvas.getContext("2d");
            let img = new Image();
            img.src = options.logo;
            console.log((options.size - options.logoWidth) / 2 , (options.size - options.logoHeight) / 2)
            img.onload = function () {
                ctx.drawImage(
                    img,
                    (options.size - options.logoWidth) / 2,
                    (options.size - options.logoHeight) / 2,
                    options.logoWidth,
                    options.logoHeight
                );
            };
        },
        /**
         * 设置底部文字
         * @param {Object} canvas canvas对象
         * @param {Object} options 配置
         */
        setText(canvas, options) {
            let ctx = canvas.getContext("2d");
            ctx.font = options.font;
            ctx.fillStyle = options.fontColor;
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillText(options.text, options.size / 2, options.size - 20);
        },
        /**
         * 绘制边框
         * @param {Object} canvas canvas对象
         * @param {Object} options 配置
         */
        setFrame(canvas, options) {
            let ctx = canvas.getContext("2d");
            ctx.beginPath();
            ctx.lineWidth = options.lineWidth;
            ctx.strokeStyle = options.lineColor;
            ctx.rect(0, 0, options.size, options.size);
            ctx.stroke();
        },
    },
};
</script>
<style lang="less" scoped>
</style>
