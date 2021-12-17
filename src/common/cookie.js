function setCookie(name, value, days) {
    var Days = days || 5;
    var exp = new Date();
    exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
    document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
}

function readCookie(name) {
    var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg))
        return unescape(arr[2]);
    else
        return null;
}

function delCookie(name) {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval = readCookie(name);
    if (cval != null){
        document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
    }
}

export default {
    setCookie,
    readCookie,
    delCookie
}
