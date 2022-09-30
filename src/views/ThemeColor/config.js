/*
 * @Author: zs.duan
 * @Date: 2022-09-30 11:01:12
 * @LastEditors: zs.duan
 * @LastEditTime: 2022-09-30 14:55:29
 * @FilePath: \vue2+js+eui+template\src\views\ThemeColor\config.js
 */
/*
 * @Author: zs.duan
 * @Date: 2022-09-30 10:01:05
 * @LastEditors: zs.duan
 * @LastEditTime: 2022-09-30 10:01:06
 * @FilePath: \vue2+js+eui+template\src\views\guid\config.js
 */

export const code1 = `
// 复制下面的方法就可以了 传入 16进制  或者 rgb 不支持 rgba
function setThemeColor(color){
    let index = color.indexOf("#");
    if(index == -1) {
        let rgb = color.replace("rgb(", "").replace(")", "");
        for(let i = 1 ; i < 10 ; i++){
            let setRgba = "rgba(" + arr.join(',') + ',0' + i")";
            let root = document.querySelector(":root")
            root.style.setProperty("--ThemeColor0" + i, setRgba);
        }
        return 
    }
    document.body.style.setProperty("--ThemeColor", color);
    var reg = /^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/;
    if (!reg.test(color)) {
        return;
    }
    let newStr = color.toLowerCase().replace(/\#/g, "");
    let len = newStr.length;
    if (len == 3) {
        let t = "";
        for (var i = 0; i < len; i++) {
            t += newStr.slice(i, i + 1).concat(newStr.slice(i, i + 1));
        }
        newStr = t;
    }
    let arr = []; //将字符串分隔，两个两个的分隔
    for (var i = 0; i < 6; i = i + 2) {
        let s = newStr.slice(i, i + 2);
        arr.push(parseInt("0x" + s));
    }
    for(let i = 1 ; i < 10 ; i++){
        let setRgba = "rgba(" + arr.join(',') + ',0' + i")";
        let root = document.querySelector(":root")
        root.style.setProperty("--ThemeColor0" + i, setRgba);
    }
}
`
