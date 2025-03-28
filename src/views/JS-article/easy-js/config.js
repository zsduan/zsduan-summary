
export const code1 = `
/**深拷贝*/ 
// 方法1
const newJson = JSON.parse(JSON.stringify(oldJson));
// 方法2
const newJson = {...oldJson}
`;

export const code2 = `
/**
 * 延时函数
 * @param {Number} [time] 延时时间 默认500ms
 * @param {Function} [fn] 回调函数
 * */ 
const sleep = (time = 500 , fn) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (fn && typeof fn === 'function') {
                resolve(fn())
            }else{
                resolve(true)
            }
        }, time)
    })
}

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
/**
 * 将url参数转换为对象
 * @param {String} [url] url地址
 * */ 
parseQueryString(url) {
    url = url == null ? window.location.href : url
    const search = url.substring(url.lastIndexOf('?') + 1)
    const obj = {}
    const reg = /([^?&=]+)=([^?&=]*)/g
    search.replace(reg, (rs, $1, $2) => {
        const name = decodeURIComponent($1)
        let val = decodeURIComponent($2)
        val = String(val)
        obj[name] = val
        return rs
    })
    return obj
}
`

export const code8 = `
/**
 * 将对象转换为url参数
 * @param {Object} obj 对象
 * */ 
param(json) {
    if (!json) return ''
    return cleanArray(
        Object.keys(json).map(key => {
            if (json[key] === undefined) return ''
            return encodeURIComponent(key) + '=' + encodeURIComponent(json[key])
        })
    ).join('&')
}
`

export const code9 = `
/**
 * 深拷贝
 * @param {Object} source 对象
 * */ 
const deepCopy = (obj) => {
    if (typeof obj !== 'object' || obj === null) {
        return obj;
    }
    
    // Handle Date
    if (obj instanceof Date) {
        return new Date(obj.getTime());
    }
    
    // Handle RegExp
    if (obj instanceof RegExp) {
        return new RegExp(obj);
    }

    let copy = Array.isArray(obj) ? [] : {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            copy[key] = deepCopy(obj[key]);
        }
    }
    return copy;
}
`

export const code10 =  `
/**
 * 生成随机数
 * @param {Number} min 最小值
 * @param {Number} max 最大值
 * */ 
function getRandom (min , max){
    let reslut = Math.random()*(max - min) + min;
    return reslut;
}
`