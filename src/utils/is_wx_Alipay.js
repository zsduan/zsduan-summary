/*
 * @Author: zs.duan
 * @Date: 2022-11-08 14:20:26
 * @LastEditors: zs.duan
 * @LastEditTime: 2022-11-08 14:26:44
 * @FilePath: \vue2+js+eui+template\src\utils\is_wx_Alipay.js
 */
class is_wx_Alipay{
    is_wx_Alipay(){  
        var ua = navigator.userAgent.toLowerCase();  
        if(ua.match(/MicroMessenger/i)=="micromessenger") {
            return "wx";  
        } else if(ua.match(/Alipay/i)=="alipay") {  
            return "Alipay";  
        }else{
            return "other"
        }
    } 
}

export const is_wx_Alipays = new is_wx_Alipay().is_wx_Alipay();