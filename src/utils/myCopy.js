/*
 * @Author: zs.duan
 * @Date: 2022-11-23 19:41:59
 * @LastEditors: zs.duan
 * @LastEditTime: 2022-11-23 19:52:06
 * @FilePath: \vue2+elui+template\src\utils\myCopy.js
 */
/*
 * @name 复制
 * @parame Text 复制的文本
 * @return true
*/ 
export const myCopy = (...arg) =>{
    let data = arg[0];
    if(!data.Text){
        throw new Error("Text must be not null");
    }
    let input = document.createElement("input");
    input.value = data.Text;
    document.body.appendChild(input);
    input.select();
    document.execCommand("copy");
    document.body.removeChild(input);
    return true;
}