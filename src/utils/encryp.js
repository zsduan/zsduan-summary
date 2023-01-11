/*
 * @Author: zs.duan
 * @Date: 2022-11-08 14:34:08
 * @LastEditors: zs.duan
 * @LastEditTime: 2023-01-11 15:55:35
 * @FilePath: \vue2+js+eui+template\src\utils\encryp.js
 */
// webpack
// let CryptoJS = require('crypto-js/index.js');
// vite
import CryptoJS from "crypto-js/index.js";
let keyStr = "JXU5NkM2JXU1NkUyJXU4RkQwJXU4NDI1JXU2NTcwJXU1QjU3JXU1MzE2JXU1MjA2JXU2NzkwJXU1RTczJXU1M0Yw";

/*
 * @name 对称加密
 * @parame word 加密的文本 string / object 必填
 * @parame key秘钥 非必填
 * @return 返回加密后的文本
*/ 
export const ACEencrypt = (...arg) =>{
    let options = {
        word : "",
        key : "JXU5NkM2JXU1NkUyJXU4RkQwJXU4NDI1JXU2NTcwJXU1QjU3JXU1MzE2JXU1MjA2JXU2NzkwJXU1RTczJXU1M0Yw",
        success : (reslut) =>{},
        fail : (error) =>{}
    }
    options = {
        ...options,
        ...arg[0]
    }
    if(!options.word){
        options.fail({
            code : -1,
            msg : "word must be not null"
        })
        return ;
    }
    let is_string = true;
    if(typeof options.word !== 'string' || (!Object.prototype.toString.call(options.word) === "[object String]")) is_string = false;
    let is_object = true ;
    if(typeof options.word !== 'object' || !(Object.prototype.toString.call(options.word) === '[object Object]')) is_object = false;
    
    if(!is_string && !is_object){
        options.fail({
            code : -1,
            msg : "word must be string or object"
        })
        return ;
    }
    if(is_object) options.word = JSON.stringify(options.word);
    const myKey = options.key ? options.key : 'abcdefgabcdefg12';
    const utf8_key = CryptoJS.enc.Utf8.parse(myKey);
    const Text = CryptoJS.enc.Utf8.parse(options.word);
    let encrypText = CryptoJS.AES.encrypt(Text , utf8_key , {
        mode : CryptoJS.mode.ECB,
        padding :CryptoJS.pad.Pkcs7
    })
    options.success(encrypText.toString())
    return encrypText.toString();
}

/*
 * @name 对称解密
 * @parame word 解密的文本 string 必填 
 * @parame key秘钥 非必填 
 * @parame type 返回类型 string / object 非必填
 * @return 返回解密后的信息
*/ 
export const ACEdecrypt = (...arg) => {
    let options = {
        word : "",
        key : "JXU5NkM2JXU1NkUyJXU4RkQwJXU4NDI1JXU2NTcwJXU1QjU3JXU1MzE2JXU1MjA2JXU2NzkwJXU1RTczJXU1M0Yw",
        type : "string",
        success : (reslut) =>{},
        fail : (error) =>{}
    }
    options = {
        ...options,
        ...arg[0]
    }
    if(!options.word){
        options.fail({
            code : -1,
            msg : "word must be not null"
        })
        return ;
    }
    let is_string = true;
    if(typeof options.word !== 'string' || (!Object.prototype.toString.call(options.word) === "[object String]")) is_string = false;
    if(!is_string){
        options.fail({
            code : -1,
            msg : "word must be string"
        })
        return ;
    }
    const myKey = options.key ? options.key : 'abcdefgabcdefg12';
    const utf8_key = CryptoJS.enc.Utf8.parse(myKey);
    let decryptText = CryptoJS.AES.decrypt(options.word , utf8_key , {
        mode : CryptoJS.mode.ECB,
        padding :CryptoJS.pad.Pkcs7
    })
    decryptText = CryptoJS.enc.Utf8.stringify(decryptText).toString();
    if(options.type == 'object'){
        decryptText = JSON.parse(decryptText)
    }
    options.success(decryptText)
}

/*
 * @name MD5加密
 * @parame word 加密的文本 string / object
 * @return 返回加密后的文本
*/ 
export const MD5 = (...arg) =>{
    let options ={
        word : "",
        success : (reslut) =>{},
        fail : (error) =>{}
    }
    options = {...options , ...arg[0]};
    if(!options.word){
        options.fail({
            code : -1,
            msg : "word must be not null"
        })
        return ;
    }
    let is_string = true;
    if(typeof options.word !== 'string' || (!Object.prototype.toString.call(options.word) === "[object String]")) is_string = false;
    let is_object = true ;
    if(typeof options.word !== 'object' || !(Object.prototype.toString.call(options.word) === '[object Object]')) is_object = false;
    if(!is_string && !is_object){
        options.fail({
            code : -1,
            msg : "word must be string or object"
        })
        return ;
    }
    if(is_object)options.word = JSON.stringify(options.word);
    const Text = CryptoJS.enc.Utf8.parse(options.word);
    let encrypText = CryptoJS.MD5(Text);
    options.success(encrypText)
}
