/*
 * @Author: zs.duan
 * @Date: 2021-12-17 15:23:43
 * @LastEditors: zs.duan
 * @LastEditTime: 2023-02-02 13:58:02
 * @FilePath: \vue2+js+eui+template\vue.config.js
 */
const path = require("path");
let date = new Date();
const addZroe = (num) => {
    return num < 10 ? `0${num}` : num;
}
let time = `${date.getFullYear()}${addZroe(date.getMonth() + 1)}${addZroe(date.getDate())}`;
module.exports = {
    //=>process.env.NODE_ENV：环境变量中存储的是开发环境还是生产环境
    publicPath: "./",
    outputDir: `dist/${time}`,
    lintOnSave: false,
    assetsDir: "static",
    devServer:{
        https : false
    },
};