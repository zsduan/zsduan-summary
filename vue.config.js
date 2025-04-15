let date = new Date();
const addZroe = (num) => {
    return num < 10 ? `0${num}` : num;
}
let time = `${date.getFullYear()}${addZroe(date.getMonth() + 1)}${addZroe(date.getDate())}`;
module.exports = {
    publicPath: process.env.VUE_APP_PUBLIC_PATH,
    outputDir: `dist/${time}`,
    lintOnSave: false,
    assetsDir: "static",
    devServer: {
        https: false
    }
};