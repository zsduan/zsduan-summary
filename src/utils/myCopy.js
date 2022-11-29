/*
 * @Author: zs.duan
 * @Date: 2022-11-23 19:41:59
 * @LastEditors: zs.duan
 * @LastEditTime: 2022-11-29 21:11:29
 * @FilePath: \vue2+elui+template\src\utils\myCopy.js
 */
/*
 * @name 复制
 * @parame Text 复制的文本
 * @return
    success : (reslut) =>{}, //成功
    fail : (error) =>{} //失败
*/ 
export const myCopy = (...arg) =>{
    let data = {
        Text : "",
        type : "navigator",
        success : (reslut) =>{},
        fail : (error) =>{}
    };
    if(!data.Text){
        throw new Error("Text must be not null");
    }
    // 浏览器自带方法
    if(data.type == 'navigator'){
        navigator.clipboard.writeText(data.Text);
        data.success({
            code : 200,
            msg : "success"
        })
        return true;
    }
    
    // 原生方法
    let input = document.createElement("input");
    input.value = data.Text;
    document.body.appendChild(input);
    input.select();
    document.execCommand("copy");
    document.body.removeChild(input);
    data.success({
        code : 200,
        msg : "success"
    })
    return true;
}