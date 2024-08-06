import SparkMD5 from "spark-md5";

/**
 * 文件切片与合并
 * @author zs.duan
 * @date 2023-11-25
 * @param {Object } options 配置对象
 * @param {File | string | object | Array} options.file 文件(文件列表) 可选 fileId/file/refs 任选其一
 * @param {Object} options.Vue vue本身也就是this
 * @param {'slice' | 'merge'} options.type 切片还是合并 默认切片 
 * @param {boolean} options.md5 是否需要md5值 默认不需要 true 需要 false 不需要 md5会影响分片速度
 * @param {number} options.chunkSize 切片大小 默认 5M
 * @param {string} options.fileName 合并的文件名称
 * @param {boolean} options.sort 合并进行排序 默认true 合并文件较多建议开启
 * @param {Function} options.success 成功返回 
 * @param {Function} options.fail 错误返回
 * @returns Promise
 * @description 分片返回数据
 * @returns 
 * { 
 *    code : 200,
 *    list : [
 *      {
            sort : number, //排序
            file : file, //分片文件bold
            filename : string ,//文件名称 name-1 name-2
            md5 : string //分片文件的md5值
        }
 *    ], //文件分片的list数据
 *    filename : string, //文件原始名称
 *    file : file, //原始文件 blod数据
 *    md5 : string //原始文件的md5值
 * }
 * @description 合并返回数据
 * @returns
 * {
 *     code : 200,
 *     file : file, //文件 blod数据
 *     filename : string //文件名称
 * }
 * 
 * */
const fileSliceMerge = (options) => {
    let option = {
        file: "", // 文件 可选 fileId/file/refs 任选其一 
        Vue: null, // vue本身也就是this
        type: "slice", // 切片还是合并 默认切片
        md5: false, // 是否需要md5值 默认不需要 true 需要 false 不需要 md5会影响分片速度
        chunkSize: 1024 * 1024 * 5, // 切片大小 默认 5M
        fileName: "", // 合并的文件名称
        sort: true, // 合并进行排序
        success: (result) => { }, // 成功返回
        fail: (error) => { }, // 错误返回
    }
    Object.assign(option, options);
    return new Promise((resolve, reject) => {
        if (!option) {
            reject({ code: -1, msg: "options不能为空!" })
            option.fail({ code: -1, msg: "options不能为空" })
            throw new Error("options不能为空")
        }
        if (typeof options !== "object") {
            reject({code: -1,msg: "options请传入对象!"})
            option.fail({code: -1,msg: "options请传入对象"})
            throw new Error("options请传入对象")
        }
        if (!option.file) {
            reject({code: -1,msg: "options.file不能为空!"})
            option.fail({code: -1,msg: "options.file不能为空"})
            throw new Error("options.file不能为空")
        }
        let files = null;
        if(typeof option.file === "string"){
            if(option.Vue){
                if(!option.Vue.$refs[option.file]){
                    reject({code: -1,msg: "请确定您存在该ref!"})
                    option.fail({code: -1,msg: "请确定您存在该ref!"})
                    throw new Error("请确定您存在该ref!")
                }
                files = option.Vue.$refs[option.file].files;
            }else{
                if(!document.querySelector(`#${option.file}`)){
                    reject({code: -1,msg: "请确定您存在该id!"})
                    option.fail({code: -1,msg: "请确定您存在该id!"})
                    throw new Error("请确定您存在该id!")
                }
                files = document.querySelector(`#${option.file}`).files;
            }
        }else{
            files = option.file;
        }
        switch(option.type){
            case 'slice' : 
                console.log("files ==>" ,files)
                files = files[0] || files
                slice(option, files ,resolve , reject);
                break;
            case 'merge' : 
                if(!files.length){
                    reject({code: -1,msg: "options.file不能为空!"})
                    options.fail({code: -1,msg: "options.file不能为空!"})
                    throw new Error("options.file不能为空!")
                }
                merge(option , files , resolve , reject);
                break;
            default : 
                reject({code: -1,msg: "您输入的类型不正确！"})
                options.fail({code: -1,msg: "您输入的类型不正确！"})
                throw new Error("您输入的类型不正确！")
        }
    })
}

/**
 * 分片
 * @param {Object} option 
 * @param {File} files 文件
 * @param {Function} resolve 
 * @param {Function} reject
 * */
const slice = (option , files  , resolve , reject) =>{
    let filelist = [];
    for (let i = 0; i < files.size; i += option.chunkSize) {
        let index = parseInt(i / option.chunkSize) + 1;
        let chunkFile = {
            sort: index,
            file: files.slice(i, option.chunkSize * index),
            filename: `${files.name}-${index}`,
            md5: ""
        }
        if (option.md5) {
            // 对切片文件进行md5加密
            let fileReader = new FileReader();
            let spark = new SparkMD5.ArrayBuffer();
            fileReader.readAsArrayBuffer(chunkFile.file);
            fileReader.onload = (e) => {
                spark.append(e.target.result);
                chunkFile.md5 = spark.end();
            }
            fileReader.onerror = (err) => {
                reject({code: -1,msg: "文件读取失败!"})
                options.fail({code: -1,msg: "文件读取失败!"})
                throw new Error("文件读取失败!")
            }
        }
        filelist.push(chunkFile);
    }
    let sendFile = {
        code: 200,
        list: filelist,
        filename: files.name,
        file: files,
        md5: ""
    }
    if(option.md5){
        // 对原始文件进行md5加密
        let fileReader = new FileReader();
        let spark = new SparkMD5.ArrayBuffer();
        fileReader.readAsArrayBuffer(files);
        fileReader.onload = (e) => {
            spark.append(e.target.result);
            sendFile.md5 = spark.end();
            option.success(sendFile);
            resolve(sendFile);
        }
        fileReader.onerror = (err) => {
            reject({code: -1,msg: "文件读取失败!"})
            option.fail({code: -1,msg: "文件读取失败!"})
            throw new Error("文件读取失败!")
        }
        return ;
    }
    option.success(sendFile);
    resolve(sendFile);
}

/**
 * 合并
 * @param {Object} option 
 * @param {Function} resolve 
 * @param {Function} reject
 * */
const merge = (option  , files , resolve , reject) =>{
    if (!files.length) {
        reject({code: -1,msg: "合并文件需要一个数组！"})
        option.fail({code: -1,msg: "合并文件需要一个数组！"})
        throw new Error("合并文件需要一个非空数组！");
    }

    let filelist = [];
    if (option.sort) {
        // 改进排序逻辑
        const sortedFiles = Array.from(files).sort((a, b) => {
            const aSuffix = parseInt(a.name.match(/-(\d+)$/)[1]);
            const bSuffix = parseInt(b.name.match(/-(\d+)$/)[1]);
            return aSuffix - bSuffix;
        });
        filelist = sortedFiles.map(file => file.slice(0, file.size));
    } else {
        filelist = Array.from(files).map(file => file.slice(0, file.size));
    }

    const name = option.fileName || files[0].name.replace(/-\d+$/, "");
    const file = new File(filelist, name);

    const sendFile = {
        code: 200,
        file,
        filename: name
    };

    option.success && option.success(sendFile);
    resolve(sendFile);

    return ;
}

export default fileSliceMerge;
