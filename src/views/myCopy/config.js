/*
 * @Author: zs.duan
 * @Date: 2022-11-23 19:50:45
 * @LastEditors: zs.duan
 * @LastEditTime: 2022-11-23 19:52:29
 * @FilePath: \vue2+elui+template\src\views\myCopy\config.js
 */

export const code1 = `
// 导入
import {myCopy} from "@/utils/myCopy";
// 使用
/*
 * @name 复制
 * @parame Text 复制的文本
 * @return true
*/ 
myCopy({
    Text : this.Text
})
`