/*
 * @Author: zs.duan
 * @Date: 2022-11-08 14:34:08
 * @LastEditors: zs.duan
 * @LastEditTime: 2022-11-22 19:04:24
 * @FilePath: \vue2+elui+template\src\utils\encryp.js
 */
let CryptoJS = require('crypto-js/index.js');
let keyStr = "JXU5NkM2JXU1NkUyJXU4RkQwJXU4NDI1JXU2NTcwJXU1QjU3JXU1MzE2JXU1MjA2JXU2NzkwJXU1RTczJXU1M0Yw";

/*
 @name 对称加密
 @parame word 加密的文本 string / object 必填 key秘钥 非必填
*/ 
export const ACEencrypt = (word , key ) =>{
    if(!word) throw new Error("err : word must be not null");
    let is_string = true;
    if(typeof word !== 'string' || (!Object.prototype.toString.call(word) === "[object String]")) is_string = false;
    let is_object = true ;
    if(typeof word !== 'object' || !(Object.prototype.toString.call(word) === '[object Object]')) is_object = false;
    
    if(!is_string && !is_object){
        throw new Error("err : word must be string or object");
    }
    if(is_object) word = JSON.stringify(word);
    const myKey = key ? key : keyStr ? keyStr : 'abcdefgabcdefg12';
    const utf8_key = CryptoJS.enc.Utf8.parse(myKey);
    const Text = CryptoJS.enc.Utf8.parse(word);
    let encrypText = CryptoJS.AES.encrypt(Text , utf8_key , {
        mode : CryptoJS.mode.ECB,
        padding :CryptoJS.pad.Pkcs7
    })
    return encrypText.toString();
}

/*
 @name 对称解密
 @parame word 解密的文本 string 必填 key秘钥 非必填 type 返回类型 string / object 非必填
*/ 
export const ACEdecrypt = (word , key , type = 'string') => {
    if(!word) throw new Error("err : word must be not null");
    let is_string = true;
    if(typeof word !== 'string' || (!Object.prototype.toString.call(word) === "[object String]")) is_string = false;
    if(!is_string) throw new Error("err : word must be string");
    const myKey = key ? key : keyStr ? keyStr : 'abcdefgabcdefg12';
    const utf8_key = CryptoJS.enc.Utf8.parse(myKey);
    let decryptText = CryptoJS.AES.decrypt(word , utf8_key , {
        mode : CryptoJS.mode.ECB,
        padding :CryptoJS.pad.Pkcs7
    })
    decryptText = CryptoJS.enc.Utf8.stringify(decryptText).toString();
    if(type == 'object'){
        return JSON.parse(decryptText);
    }
    return decryptText;
}

/*
 @name 对称解密
 @parame word 加密的文本 string / object
*/ 
export const MD5 = (word) =>{
    if(!word) throw new Error("err : word must be not null");
    let is_string = true;
    if(typeof word !== 'string' || (!Object.prototype.toString.call(word) === "[object String]")) is_string = false;
    let is_object = true ;
    if(typeof word !== 'object' || !(Object.prototype.toString.call(word) === '[object Object]')) is_object = false;
    if(!is_string && !is_object){
        throw new Error("err : word must be string or object");
    }
    if(is_object)word = JSON.stringify(word);
    const Text = CryptoJS.enc.Utf8.parse(word);
    let encrypText = CryptoJS.MD5(Text);
    return encrypText;
}
