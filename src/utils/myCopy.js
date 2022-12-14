/*
 * @Author: zs.duan
 * @Date: 2022-11-23 19:41:59
 * @LastEditors: zs.duan
 * @LastEditTime: 2022-12-04 14:38:04
 * @FilePath: \vue2+elui+template\src\utils\myCopy.js
 */
/*
 * @name 复制
 * @parame copyContent 复制的内容
 * @parame is_input 是否为 原始的input复制 仅支持文字 默认 false
 * @parame is_input 为false 支持 Html Html 仅支持 windows  Text 全系统支持支持
 * @return
    success : (reslut) =>{}, //成功
    fail : (error) =>{} //失败
*/
import ua from "./ua";
export const myCopy = (...arg) =>{
    let data = {
        copyContent : "",
        type : "Text",
        is_input : false,
        img_type : "image/png",
        success : (reslut) =>{},
        fail : (error) =>{}
    };

    for (const key in data) {
        if (Object.hasOwnProperty.call(data, key)) {
            data[key] = arg[0][key] ? arg[0][key] : data[key];
        }
    }
    
    if(ua().osName == "Windows" && window.location.protocol == "http:"){
        data.is_input = true;
        data.type = 'Text';
        console.warn("osName is not Windows or protocol is not https");
    }
    if(!data.copyContent){
        throw new Error("copyContent must be not null");
    }
    // 浏览器自带方法
    if(data.is_input && data.type == 'Text'){
        // 原生方法
        let input = document.createElement("input");
        input.value = data.copyContent;
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

    if(data.type == 'Text'){
        navigator.clipboard.writeText(data.copyContent);
        data.success({
            code : 200,
            msg : "success"
        })
    }

    if(data.type == 'Html'){
        const html = new Blob([data.copyContent],{type : "text/html"});
        const item = new ClipboardItem({"text/html":html});
        navigator.clipboard.write([item]);
        data.success({
            code : 200,
            msg : "success"
        })
    }
    
    
    return true;
}