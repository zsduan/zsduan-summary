/**
 * 判断在手机那个app中
 * */ 
export default function phoneAppNavigator(){
    let ua = navigator.userAgent.toLowerCase();  
    if(ua.match(/MicroMessenger/i)=="micromessenger") {
        return "wx";  
    } else if(ua.match(/Alipay/i)=="alipay") {  
        return "Alipay";  
    }else if(/(Taobao|TB)\/\d+\.\d+/.test(navigator.userAgent)){
        return "taobao"
    }else if(/JDApp/.test(navigator.userAgent)){
        return "jd"
    }else if(/QQ\//i.test(navigator.userAgent)){
        return "qq"
    }else if(ua.match(/WeiBo/i) == "weibo"){
        return "weibo"
    }else{
        return "other"
    }
}