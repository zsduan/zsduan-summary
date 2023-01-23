/*
 * @Author: zs.duan
 * @Date: 2022-11-23 17:35:29
 * @LastEditors: zs.duan
 * @LastEditTime: 2022-12-15 13:46:13
 * @FilePath: \vue2+js+eui+template\src\utils\notification.js
 */
/*
 * @name 通知
 * @parame _this 全局this
 * @parame title 标题 string 必填
 * @parame msg 详情信息 string
 * @parame audioUrl 音频地址 string
 * @parame duration 延时时间 number
 * @method success 成功返回 code 100网页成功 200网页和系统都成功
 * @method fail 失败返回
 *
*/ 
export const notification = ( _this , ...arg) =>{
    let options = {
        title : "",
        msg : "",
        duration : 10000,
        audioUrl : null ,
        success : (reslut)=>{},
        fail : (error)=>{}
    }
    options = {
        ...options,
        ...arg[0]
    }
    if(!_this){
        throw new Error("_this must be not null")
    }
    if(!options.title){
        options.fail({
            code : -1,
            msg : "title must be not null"
        })
        return ;
    }
    if(typeof options.title !== 'string' || (!Object.prototype.toString.call(options.title) === "[object String]")){
        options.fail({
            code : -1,
            msg : "title must be string"
        })
        return ;
    }
    if((typeof options.msg !== 'string' || (!Object.prototype.toString.call(options.msg) === "[object String]")) && options.msg){
        options.fail({
            code : -1,
            msg : "msg must be string"
        })
        return ;
    }
    
    options.duration = Number(options.duration);
    if(!isFinite(options.duration)){
        options.fail({
            code : -1,
            msg : "duration must be Number or String Number"
        })
        return ;
    }
    _this.$notify({
        title: options.title,
        duration : options.duration,
        message: options.msg,
        position: 'bottom-right',
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
        if(arr[0] == 'http:'){
            options.fail({
                code : -1,
                msg : "The browser restricts http from using notification permission"
            })
            options.success({
                code : 100,
                msg : "Web page notification succeeded but system notification failed"
            });
            return ;
        }
        options.fail({
            code : -1,
            msg : "Click the upper left corner to allow notification or enable notification in settings",
        })
        options.success({
            code : 100,
            msg : "Web page notification succeeded but system notification failed"
        })
        return;
    }
    // 先检查浏览器是否支持
    if (!('Notification' in window)) {
        // IE浏览器不支持发送Notification通知!
        options.fail({
            code : -1,
            msg : "Browser is IE",
        })
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
            msg : "Click the upper left corner to allow notification or enable notification in settings",
        })
        options.success({
            code : 100,
            msg : "Web page notification succeeded but system notification failed"
        })
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