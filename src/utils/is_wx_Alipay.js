/*
 * @Author: zs.duan
 * @Date: 2022-11-08 14:20:26
 * @LastEditors: zs.duan
 * @LastEditTime: 2022-11-23 17:48:41
 * @FilePath: \vue2+elui+template\src\utils\is_wx_Alipay.js
 */
/*
 * @name 判断 在wx还是Alipay
 * @retrun 返回浏览器的类型
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