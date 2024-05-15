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