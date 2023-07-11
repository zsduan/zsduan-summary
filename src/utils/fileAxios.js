import axios  from "axios";

/**
 * 文件上传下载
 * @param {Object} options
 * @param {String} options.url 请求地址
 * @param {String} [options.method] 请求方式 默认post
 * @param {File} [options.file] 文件 File对象 和 FormData对象必须有一个 优先级 File > FormData
 * @param {FormData} [options.FormData] FormData对象 和 File对象必须有一个
 * @param {Object} [options.header] 请求头 默认{"Content-Type" : "multipart/form-data"}
 * @param {Function} [options.onUploadProgress] 上传进度回调
 * @param {Function} [options.onDownloadProgress] 下载进度回调
 * @param {Function} [options.success] 成功回调
 * @param {Function} [options.fail] 失败回调
 * @returns {void}
*/
const fileAxios = (options) => {
    let option = {
        url : "",
        method : "post",
        file : null,
        FormData : null,
        header : {
            "Content-Type" : "multipart/form-data"
        },
        onUploadProgress : (progress) => {},
        onDownloadProgress : (progress) => {},
        success : (res) => {},
        fail : (err) => {}
    }
    Object.assign(option, options);
    if(option.url === ""){
        throw new Error("url不能为空");
    }
    if(option.file === null && option.FormData === null){
        throw new Error("file和FormData不能同时为空");
    }
    let formData = null;
    if(option.file){
        formData = new FormData();
        formData.append("file", option.file);
        option.file = formData;
    }else{
        formData = option.file;
    }
    axios({
        url : option.url,
        method : option.method,
        data : formData,
        headers : option.header,
        onUploadProgress : (progressEvent)=>{
            let upLoadProgress= progressEvent.loaded / progressEvent.total * 100 ;//实时获取上传进度
            option.onUploadProgress(upLoadProgress);
        },
        onDownloadProgress : (progressEvent)=>{
            let downLoadProgress= progressEvent.loaded / progressEvent.total * 100 ;//实时获取下载进度
            option.onDownloadProgress(downLoadProgress);
        },
    }).then((res)=>{
        option.success(res);
    }).catch((err)=>{
        option.fail(err);
    });
}

export default fileAxios;