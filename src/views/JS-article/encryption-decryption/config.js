export const code1 = `
import {ACEencrypt} from "@/tool/encryp";

// 方式一
const result = ACEencrypt({
    word : "123456",
    key : "123456",
    success : (res) => {
        console.log(res);
    }
})

// 方式二
const result = ACEencrypt(74646464)
`;

export const code2 = `
import {ACEencrypt} from "@/tool/encryp";

const result = ACEencrypt({
    word : {'name' : '张三', 'age' : 18},
    key : "123456",
    success : (res) => {
        console.log(res);
    }
})

`;

export const code3 = `
import { ACEdecrypt } from "@/tool/encryp";

// 方式一
const result = ACEdecrypt({
    word : "GlIVeLBhtberF5W5g0gC7AVZ2fQAMQb7zQOIC+HHm1M=",
    key : "",
    success : (res) => {
        console.log(res);
    }
})

// 方式二
const result = ACEdecrypt("GlIVeLBhtberF5W5g0gC7AVZ2fQAMQb7zQOIC+HHm1M=”)
`;

export const code4 = `
import { ACEdecrypt } from "@/tool/encryp";

const result = ACEdecrypt({
    word : "GlIVeLBhtberF5W5g0gC7AVZ2fQAMQb7zQOIC+HHm1M=",
    key : "",
    type : "object",
    success : (res) => {
        console.log(res);
    }
})


`;

export const code5 = `
import { MD5} from "@/tool/encryp";

// 方式一
const result = MD5({
    word : "123456",
    success : (res) => {
        console.log(res);
    }
})

// 方式二
const result = MD5("123456")
`;