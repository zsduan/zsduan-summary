/*
 * @Author: zs.duan
 * @Date: 2022-11-23 19:41:59
 * @LastEditors: zs.duan
 * @LastEditTime: 2022-12-15 10:35:52
 * @FilePath: \vue2+js+eui+template\src\utils\myCopy.js
 */
import ua from "./ua";
/**
 * @name 复制
 * @param {object} option 配置对象
 * @param {string} option.content 复制内容
 * @param {string} [option.type] 复制类型 Text Html Image
 * @param {Function} [option.success] 成功回调
 * @param {Function} [option.fail] 失败回调
 * @return
    success : (reslut) =>{}, //成功
    fail : (error) =>{} //失败
*/
export const myCopy = (option) =>{
    let options = {
        content : "",
        type : "Text",
        is_input : false,
        success : (reslut) =>{},
        fail : (error) =>{}
    };
    options = {
        ...options,
        ...option
    }
    
    if(ua().osName == "Windows" && window.location.protocol == "http:"){
        options.is_input = true;
        options.type = 'Text';
        console.warn("osName is not Windows or protocol is not https");
    }
    if(!options.content){
        throw new Error("content must be not null");
    }
    // 浏览器自带方法
    if(options.is_input && options.type == 'Text'){
        // 原生方法
        let input = document.createElement("input");
        input.value = options.content;
        document.body.appendChild(input);
        input.select();
        document.execCommand("copy");
        document.body.removeChild(input);
        options.success({
            code : 200,
            msg : "success"
        })
        return true;
    }

    if(options.type == 'Text'){
        navigator.clipboard.writeText(options.content);
        options.success({
            code : 200,
            msg : "success"
        })
    }

    if(options.type == 'Html'){
        const html = new Blob([options.content],{type : "text/html"});
        const item = new ClipboardItem({"text/html":html});
        navigator.clipboard.write([item]);
        options.success({
            code : 200,
            msg : "success"
        })
    }
    
    
    return true;
}