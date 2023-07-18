/*
 * @Author: zs.duan
 * @Date: 2022-09-30 10:01:05
 * @LastEditors: zs.duan
 * @LastEditTime: 2022-09-30 14:14:03
 * @FilePath: \vue2+js+eui+template\src\views\ua\config.js
 */

export const code1 = `
/**
 * @name 设置水印
 * @param {Object} options
 * @param {String} options.watermark_txt 水印文字
 * @param {Number} [options.watermark_x] 水印起始位置x轴坐标
 * @param {Number} [options.watermark_y] 水印起始位置Y轴坐标
 * @param {Number} [options.watermark_rows] 水印行数
 * @param {Number} [options.watermark_cols] 水印列数
 * @param {Number} [options.watermark_x_space] 水印x轴间隔
 * @param {Number} [options.watermark_y_space] 水印y轴间隔
 * @param {String} [options.watermark_color] 水印字体颜色
 * @param {Number} [options.watermark_alpha] 水印透明度
 * @param {String} [options.watermark_fontsize] 水印字体大小
 * @param {String} [options.watermark_font] 水印字体
 * @param {Number} [options.watermark_width] 水印宽度
 * @param {Number} [options.watermark_height] 水印长度
 * @param {Number} [options.watermark_angle] 水印倾斜度数
 * @param {Boolean} [options.isHtml] 是否是html水印
 * @example
 * watermark({
 *  watermark_txt: "text",
 * })
 * */ 
import watermark from "@/utils/watermark.js";


watermark({
    watermark_txt: "测试水印",
});
`

export const code2 = `
/**
 * @name 设置水印
 * @param {Object} options
 * @param {String} options.watermark_txt 水印文字
 * @param {Number} [options.watermark_x] 水印起始位置x轴坐标
 * @param {Number} [options.watermark_y] 水印起始位置Y轴坐标
 * @param {Number} [options.watermark_rows] 水印行数
 * @param {Number} [options.watermark_cols] 水印列数
 * @param {Number} [options.watermark_x_space] 水印x轴间隔
 * @param {Number} [options.watermark_y_space] 水印y轴间隔
 * @param {String} [options.watermark_color] 水印字体颜色
 * @param {Number} [options.watermark_alpha] 水印透明度
 * @param {String} [options.watermark_fontsize] 水印字体大小
 * @param {String} [options.watermark_font] 水印字体
 * @param {Number} [options.watermark_width] 水印宽度
 * @param {Number} [options.watermark_height] 水印长度
 * @param {Number} [options.watermark_angle] 水印倾斜度数
 * @param {Boolean} [options.isHtml] 是否是html水印
 * @example
 * watermark({
 *  watermark_txt: "text",
 * })
 * */ 
import watermark from "@/utils/watermark.js";


watermark({
    watermark_txt: "<div style='color:red'>测试水印</div>",
    isHtml: true
});
`