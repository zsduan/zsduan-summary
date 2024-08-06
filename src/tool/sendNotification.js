
/**
 * @name 发送通知
 * @author zs.duan
 * @date 2022-11-23
 * @param {Object} option 配置对象
 * @param {Object} [option.Vue] Vue对象
 * @param {String} option.title 标题 
 * @param {String} [option.msg] 详情信息 
 * @param {String} [option.position] 信息位置
 * @param {String} [option.audioUrl] 音频地址
 * @param {Number} [option.duration] 延时时间
 * @param {Function} option.success 成功返回 code 100网页成功 200网页和系统都成功
 * @param {Function} option.fail 失败返回
 *
*/ 
export const sendNotification = ( option) =>{
    let options = {
        title : "",
        msg : "",
        duration : 10000,
        position : 'bottom-right',
        audioUrl : null ,
        success : (reslut)=>{},
        fail : (error)=>{}
    }
    Object.assign(options , option);
    if(!options.title){
        options.fail({
            code : -1,
            msg : "标题不能为空"
        })
        throw new Error("标题不能为空")
        return ;
    }
    if(!option.Vue){
        console.warn("没有vue对象将不能借助elui发送信息")
    }
    if(typeof options.title !== 'string'){
        options.fail({
            code : -1,
            msg : "标题必须为string"
        })
        throw new Error("标题必须为string")
        return ;
    }
    if(typeof options.msg !== 'string' && options.msg){
        options.fail({
            code : -1,
            msg : "详情信息必须为string"
        })
        throw new Error("详情信息必须为string")
        return ;
    }
    
    options.duration = Number(options.duration);
    if(!isFinite(options.duration)){
        options.fail({
            code : -1,
            msg : "延时时间需要为number类型"
        })
        throw new Error("延时时间需要为number类型")
        return ;
    }
    options.Vue && options.Vue.$notify({
        title: options.title,
        duration : options.duration,
        message: options.msg,
        position: options.position,
        onClick : function (){
            this.close();
        }
    });
    // 是否播放音频
    if(options.audioUrl)playAudio(options.audioUrl);
    if (Notification.permission === 'denied' && process.env.NODE_ENV != "development") {
        // 如果用户已拒绝显示通知
        let url = window.location.href;
        let arr = url.split("//");
        if(url.indexOf("https://")){
            options.fail({
                code : -1,
                msg : "请使用https/localhost发送系统通知"
            })
            console.warn("请使用https/localhost发送系统通知");
            return ;
        }
        options.fail({
            code : -1,
            msg : "页面尝试发送系统通知被拒绝,请点击左上角允许通知后再点击发送",
        })
        console.warn("页面尝试发送系统通知被拒绝,请点击左上角允许通知后再点击发送");
        return;
    }
    // 先检查浏览器是否支持
    if (!('Notification' in window)) {
        // IE浏览器不支持发送Notification通知!
        options.fail({
            code : -1,
            msg : "浏览器为IE,无法发送消息",
        })
        console.warn("浏览器不支持发送通知");
        return;
    }

    if (Notification.permission === 'granted') {
        //用户已授权，直接发送通知
        notify(options.title ,options.msg);
        options.success({
            code : 200,
            msg : "success"
        })
    } else {
        // 默认，先向用户询问是否允许显示通知
        Notification.requestPermission(function(permission) {
            // 如果用户同意，就可以直接发送通知
            if (permission === 'granted') {
                notify(options.title ,options.msg);
            }
        });
        options.fail({
            code : -1,
            msg : "页面尝试发送系统通知被拒绝,请点击左上角允许通知后再点击发送",
        })
        console.warn("页面尝试发送系统通知被拒绝,请点击左上角允许通知后再点击发送");
    }

}

// 发送系统消息
const notify = (title , msg )=>{
    let notification = new Notification(title, {
        dir: 'ltr',
        lang: 'zh-CN',
        body: msg,
    });
}


// 播放音频
const playAudio = (path) => {
    let audio = new Audio(path);
    audio.play();
}

export default sendNotification