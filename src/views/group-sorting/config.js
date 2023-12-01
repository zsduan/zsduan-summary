/*
 * @Author: zs.duan
 * @Date: 2022-11-08 14:23:04
 * @LastEditors: zs.duan
 * @LastEditTime: 2022-11-29 17:58:22
 * @FilePath: \vue2+elui+template\src\views\is-wx-Alipay\config.js
 */

export const code1 = `
/**
 * 分组/排序
 * @param {Object} option
 * @param {Array} option.list 需要处理的数据 必填
 * @param {String} [option.key] 需要处理的数据的key 排序/分组
 * @param {Function} [option.func] 处理函数 优先级高于key 仅在type为sort时有效
 * @param {String} [option.type] 处理类型 group/sort group分组 sort排序 默认sort
 * @param {String} [option.order] 排序方式 asc/desc 仅在type为sort时有效 默认asc
 * @param {Function} [option.success] 成功回调
 * @param {Function} [option.fail] 失败回调
 * @returns {Array} 处理后的数据
 * */ 

import groupOrSort from "@/utils/group-sorting";

let list = [
    {
        age: 18,
        name: "张三"
    },
    {
        age: 18,
        name: "李四"
    },
    {
        age: 17,
        name: "王五"
    },
    {
        age: 17,
        name: "王麻子"
    },
    {
        age: 20,
        name: "赵六"
    },
    {
        age : 24 ,
        name : "赵六器"
    },
    {
        age: 20,
        name: "赵六器"
    }
];

this.value1 = groupOrSort({
    list,
    key: "age",
});
`

export const code2 = `
this.value2 = groupOrSort({
    list,
    key: "age",
    order: "desc"
});
`

export const code3 = `
this.value3 = groupOrSort({
    list,
    key: "name",
    type : "group"
});
`