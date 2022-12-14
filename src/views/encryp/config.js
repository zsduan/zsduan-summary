/*
 * @Author: zs.duan
 * @Date: 2022-11-22 17:36:16
 * @LastEditors: zs.duan
 * @LastEditTime: 2022-11-22 19:12:01
 * @FilePath: \vue2+elui+template\src\views\encryp\config.js
 */

export const code1 = `
/*
 @name 对称加密
 @parame word 加密的文本 string / object 必填 key秘钥 非必填
*/ 
import {ACEencrypt} from "@/utils/encryp"
ACEencrypt(Text);
`

export const code2 = `
/*
 @name 对称加密
 @parame word 加密的文本 string / object 必填 key秘钥 非必填
*/ 
import {ACEencrypt} from "@/utils/encryp"

// 对象
MyObject : {
    name : "我是加密",
    desc : "用的是crypto-js"
},
ACEencrypt(MyObject)
`

export const code3 = `
/*
 @name 对称解密
 @parame word 解密的文本 string 必填 key秘钥 非必填 type 返回类型 string / object 非必填
*/ 
import {ACEdecrypt} from "@/utils/encryp"
ACEdecrypt(Text)
`

export const code4 = `
/*
 @name 对称解密
 @parame word 解密的文本 string 必填 key秘钥 非必填 type 返回类型 string / object 非必填
*/ 
import {ACEdecrypt} from "@/utils/encryp"
ACEdecrypt(Text , null , 'object')
`

export const code5 = `
/*
 @name MD5加密不可逆
 @parame word 加密的文本 string / object
*/ 
import {MD5} from "@/utils/encryp"
MD5(Text)
`