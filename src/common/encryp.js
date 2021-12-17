/*
 * @Author: zs.duan
 * @Date: 2021-12-16 15:27:00
 * @LastEditors: zs.duan
 * @LastEditTime: 2021-12-17 13:48:41
 * @FilePath: \template\src\common\encryp.js
 */

/**
 * 工具类
 */
// import Vue from 'vue'
import CryptoJS from 'crypto-js'
let keyStr = "JXU5NkM2JXU1NkUyJXU4RkQwJXU4NDI1JXU2NTcwJXU1QjU3JXU1MzE2JXU1MjA2JXU2NzkwJXU1RTczJXU1M0Yw"

//对称加密
export function encrypt(word){
	if(typeof word != "string" && typeof word != "object"){
		throw new Error("err:Please pass in a string or object");
	}
	if(typeof word == "object") word = JSON.stringify(word);
	keyStr = keyStr ? keyStr : 'abcdefgabcdefg12';
	var key  = CryptoJS.enc.Utf8.parse(keyStr);
	var srcs = CryptoJS.enc.Utf8.parse(word);
	var encrypted = CryptoJS.AES.encrypt(srcs, key, {mode:CryptoJS.mode.ECB,padding: CryptoJS.pad.Pkcs7});
	return encrypted.toString();
}

//对称解密
export function decrypt(word){
	if(typeof word != "string" && typeof word != "object"){
		throw new Error("err:Please pass in a string or object")
	}
	if(typeof word == "object") word = JSON.stringify(word);
	keyStr = keyStr ? keyStr : 'abcdefgabcdefg12';
	var key  = CryptoJS.enc.Utf8.parse(keyStr);
	var decrypt = CryptoJS.AES.decrypt(word, key, {mode:CryptoJS.mode.ECB,padding: CryptoJS.pad.Pkcs7});
	return CryptoJS.enc.Utf8.stringify(decrypt).toString();
}
