/*
 * @Author: zs.duan
 * @Date: 2022-11-23 17:35:29
 * @LastEditors: zs.duan
 * @LastEditTime: 2022-11-23 19:00:20
 * @FilePath: \vue2+elui+template\src\utils\notification.js
 */
/*
 * @name 通知
 * @parame _this 全局this
 * @parame title 标题 string 必填
 * @parame msg 详情信息 string
 * @parame audioUrl 音频地址 string
 * @parame duration 延时时间 number
 *
*/ 
export const notification = ( _this , ...arg) =>{
    let data = arg[0];
    if(!_this){
        throw new Error("_this must be not null")
    }
    if(!data.title){
        throw new Error("title must be not null")
    }
    if(typeof data.title !== 'string' || (!Object.prototype.toString.call(data.title) === "[object String]")){
        throw new Error("title must be string");
    }
    if((typeof data.msg !== 'string' || (!Object.prototype.toString.call(data.msg) === "[object String]")) && data.msg){
        throw new Error("msg must be string");
    }
    
    data.duration = data.duration ? Number(data.duration) : 10000;
    if(!isFinite(data.duration)){
        throw new Error("duration must be Number or String Number");
    }
    _this.$notify({
        title: data.title,
        duration : data.duration,
        message: data.msg,
        position: 'bottom-right',
        onClick : function (){
            this.close();
        }
    });
    // 是否播放音频
    if(data.audioUrl)playAudio(data.audioUrl);
    console.log(Notification.permission)
    if (Notification.permission === 'denied' && process.env.NODE_ENV != "development") {
        // 如果用户已拒绝显示通知
        let url = window.location.href;
        let arr = url.split("//");
        if(arr[0] == 'http:'){
            _this.$notify({
                title: "请使用https",
                message: "浏览器限制 http 不能使用 通知权限",
                duration: 5000,
                type : "error"
            });
            return ;
        }
        _this.$notify({
            title: "系统通知被拒绝",
            message: "点击左上角允许通知 或者在设置中开启通知",
            duration: 5000,
            type : "error"
        });
        return;
    }
    // 先检查浏览器是否支持
    if (!('Notification' in window)) {
        // IE浏览器不支持发送Notification通知!
        return;
    }

    if (Notification.permission === 'granted') {
        //用户已授权，直接发送通知
        notify(data.title ,data.msg);
    } else {
        // 默认，先向用户询问是否允许显示通知
        Notification.requestPermission(function(permission) {
            // 如果用户同意，就可以直接发送通知
            if (permission === 'granted') {
                notify(data.title ,data.msg);
            }
        });
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