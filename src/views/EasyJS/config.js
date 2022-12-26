/*
 * @Author: zs.duan
 * @Date: 2022-12-26 14:19:31
 * @LastEditors: zs.duan
 * @LastEditTime: 2022-12-26 14:44:56
 * @FilePath: \vue2+js+eui+template\src\views\EasyJS\config.js
 */

export const code1 = `
// 方法1
const newJson = JSON.parse(JSON.stringify(oldJson));
// 方法2
const newJson = {...oldJson}
`;

export const code2 = `
const sleep = async (duration) => (
    new Promise(resolve =>
      setTimeout(resolve, duration)
    )
);

// 使用
await sleep(1000);
`

export const code3 = `
const flatten = list => list.reduce((prev, next) => ([
    ...prev,
    ...(Array.isArray(next) ? flatten(next) : [next])
]), []);

// 使用

flatten([[1, 2, [3, 4], 5, [6, [7, 8]]]]); // = [1, 2, 3, 4, 5, 6, 7, 8]
`

export const code4 = `
const ascending = (fn) => (a, b) => {
    const valA = fn(a);
    const valB = fn(b);
    return valA < valB ? -1 : valA > valB ? 1 : 0;
}

// 使用
const byPrice = ascending(val => val.price);
[{ price: 300 }, { price: 100 }, { price: 200 }].sort(byPrice); 
// = [{ price: 100 }, { price: 200 }, { price: 300 }]
`

export const code5 = `
const descending = (fn) => (a, b) => {
    const valA = fn(b);
    const valB = fn(a);
    return valA < valB ? -1 : valA > valB ? 1 : 0;
}

// 使用
const byPrice = descending(val => val.price);
[{ price: 300 }, { price: 100 }, { price: 200 }].sort(byPrice); 
// = [{ price: 300 }, { price: 200 }, { price: 100 }]
`

export const code6 = `
const reverseString = string => [...string].reverse().join('');
// 使用
reverseString('Medium'); // 'muideM'
`

export const code7 = `
// 是否已为IE浏览器
    IEVersion() {
        let userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
        let isIE =
            userAgent.indexOf("compatible") > -1 &&
            userAgent.indexOf("MSIE") > -1; //判断是否IE<11浏览器
        let isEdge = userAgent.indexOf("Edge") > -1 && !isIE; //判断是否IE的Edge浏览器
        let isIE11 =
            userAgent.indexOf("Trident") > -1 &&
            userAgent.indexOf("rv:11.0") > -1;
        if (isIE) {
            let reIE = new RegExp("MSIE (\\d+\\.\\d+);");
            reIE.test(userAgent);
            let fIEVersion = parseFloat(RegExp["$1"]);
            if (fIEVersion == 7) {
                return 7;
            } else if (fIEVersion == 8) {
                return 8;
            } else if (fIEVersion == 9) {
                return 9;
            } else if (fIEVersion == 10) {
                return 10;
            } else {
                return 6; //IE版本<=7
            }
        } else if (isEdge) {
            return "edge"; //edge
        } else if (isIE11) {
            return 11; //IE11
        } else {
            return -1; //不是ie浏览器
        }
    }
`