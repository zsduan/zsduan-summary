/*
 * @Author: zs.duan
 * @Date: 2023-01-15 14:50:11
 * @LastEditors: zs.duan
 * @LastEditTime: 2023-01-15 14:55:18
 * @FilePath: \vue2+js+eui+template\src\views\99-multiplication-table\config.js
 */

export const code1 = `
import multiplicationTable99 from "@/utils/99-multiplication-table"
multiplicationTable99({
    success : (res =>{
        // do something
    })
});
`

export const code2 = `
import multiplicationTable99 from "@./utils/99-multiplication-table"
multiplicationTable99({
    is_empty : false,
    success : (res =>{
        // do something
    })
});
`