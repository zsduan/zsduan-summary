/**
 * 改变主题颜色
 * @author zs.duan
 * @date 2024-08-02
 * @param {String | Object} option 配置信息 | 修改颜色 
 * @param {String} option.color 修改颜色 支持16进制颜色 rgb颜色 不支持rgba和hsl
 * @param {String} [option.generate] 是否生成0.1-0.9透明度颜色
 * @param {String} [option.name] 主题名称 默认为 --themecolor
 * @param {Function} [option.success] 成功回调
 * @param {Function} [option.fail] 失败回调
 * */
export default function setThemecolor(option){
    let options = {
        color: "",
        generate: true,
        name: "--themecolor",
        success: () => { },
        fail: () => { },
    }
    if (typeof option === "string") {
        options.color = option;
        option = {};
    }
    Object.assign(options, option);
    if (!options.color) {
        options.fail({ code: -1, msg: "color 必填" })
        throw new Error("color 必填");
        return;
    }
    if (options.color.indexOf("#") === -1 && options.color.indexOf("rgb") === -1) {
        options.fail({ code: -1, msg: "color 只支持16进制颜色 rgb颜色 不支持rgba和hsl" })
        throw new Error("color 只支持16进制颜色 rgb颜色 不支持rgba和hsl");
        return;
    }
    var reg = /^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/;
    if (!reg.test(options.color)) {
        options.fail({ code: -1, msg: "color 只支持16进制颜色 rgb颜色 不支持rgba和hsl" })
        throw new Error("color 只支持16进制颜色 rgb颜色 不支持rgba和hsl");
        return;
    }
    document.body.style.setProperty(options.name, options.color);
    if (!options.generate) {
        options.success(options.color);
        return;
    }
    let colorStr = options.color.toLowerCase().replace(/\#/g, "");
    let colorStrLength = colorStr.length;
    if (colorStrLength == 3) {
        let t = "";
        for (var i = 0; i < len; i++) {
            t += newStr.slice(i, i + 1).concat(newStr.slice(i, i + 1));
        }
        colorStr = t;
    }
    let colorList = []; //将字符串分隔，两个两个的分隔
    for (var i = 0; i < 6; i = i + 2) {
        let s = colorStr.slice(i, i + 2);
        colorList.push(parseInt("0x" + s));
    }
    console.log(colorList);
    for (var i = 0; i < 10; i++) {
        let rgba = `rgba(${colorList.join(",")},0.${i})`;
        document.body.style.setProperty(`${options.name}0${i}`, rgba);
    }
    options.success(options.color);
}