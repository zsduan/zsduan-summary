/*
 * @Author: zs.duan
 * @Date: 2021-12-17 15:23:43
 * @LastEditors: zs.duan
 * @LastEditTime: 2022-12-04 13:32:05
 * @FilePath: \vue2+elui+template\vue.config.js
 */

const path = require("path");

module.exports = {
    //=>process.env.NODE_ENV：环境变量中存储的是开发环境还是生产环境
    publicPath: "./",
    // publicPath: './',
    lintOnSave: false,
    assetsDir: "static",
    devServer:{
        https : true
    }
};