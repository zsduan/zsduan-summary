/*
 * @Author: zs.duan
 * @Date: 2022-11-25 17:13:14
 * @LastEditors: zs.duan
 * @LastEditTime: 2022-12-15 10:38:48
 * @FilePath: \vue2+js+eui+template\src\utils\file-slice-and-merge.js
 */

/**
 * @name 文件切片与还原 合并文件要和切片的文件相同
 * @param fileId 读取文件的 id 可选 fileId/file/refs 任选其一
 * @param file 文件本身 可选 fileId/file/refs 任选其一
 * @param refs vue的ref 可选 fileId/file/refs 任选其一
 * @param _this 全局的this指向 refs不为空可选
 * @param type Slice 分片 Merge 合并 
 * @param fileSize 切片大小 默认 5M
 * @param fileName 合并的文件名称
 * @param isSort 合并进行排序
 * @method fail 错误返回
 * @method success 成功返回 返回数据为下面的数据
 * @return { 分片返回
     code : 200,
     fileList : [
        {
            sort : number, //排序
            file : file, //文件bold
            file_name : string ,//文件名称
        }
     ], //文件分片的list数据
     file_name : files.name //文件名称
 * }
 * @return { 合并返回
     code : 200,
     file : file, //文件 blod数据
     file_name : string //文件名称
 * }
*/ 

export const fileSliceAndMerge = (option) =>{
    let options = {
        fileId : "",  //读取文件的id
        file : "" , //文件
        refs : "" ,
        _this : null  , //全局this 指向 指向 Vue
        type : "slice", //Slice 分片 Merge 合并
        fileSize : 1024 * 1024 * 5 ,// 切片大小 5M
        fileName : "" , //合并文件名称
        isSort : true , //合并是否进行自动排序
        success : (result)=>{} , //读取成功返回
        fail : (error) => {} , //读取失败返回
    }
    options = {
        ...options,
        ...option
    }
    if(!options.fileId && !options.file && !options.refs){
        options.fail({
            code : -1,
            msg : "fileId or file or refs must be not null"
        })
        return ;
    }
    if(options.refs && !options._this){
        options.fail({
            code : -1,
            msg : "_this must be not null"
        })
        return ;
    }
    if(!options.type){
        options.fail({
            code : -1,
            msg : "type must be not null"
        })
        return ;
    }
    let files = null;
    if(options.refs){
        files = options._this.$refs[options.refs].files
    }
    if(options.fileId){
        files = document.querySelector(`#${options.fileId}`).files;
    }
    if(options.file){
        files = options.file;
    }
    if(options.type == "slice"){
        fileSlice(files[0] , options);
    }
    if(options.type == 'merge'){
        fileMerge(files , options)
    }
}

// 切片
export const fileSlice = (files , options) =>{
    let fileList = [];
    for(let i = 0 ; i < files.size ; i += options.fileSize){
        let index = parseInt(i / options.fileSize) + 1;
        let fileSort = {
            sort : index,
            file : files.slice(i , options.fileSize * index),
            file_name : `${files.name}-index` 
        }
        fileList.push(fileSort);
    }
    options.success({
        code : 200,
        fileList : fileList,
        file_name : files.name
    })
}

// 合并
export const fileMerge = (files , options , fileName) =>{
    let fileList = [];
    if(!files.length){
        options.fail({
            code : -1,
            msg : "files is null"
        })
        return ;
    }
    if(options.isSort){
        let file_name_arr = []
        for(let i = 0 ; i < files.length ; i ++){
            file_name_arr.push(files[i].name);
        }
        file_name_arr = file_name_arr.sort();
        file_name_arr.forEach(v =>{
            for(let i = 0 ; i < files.length ; i ++){
                if(files[i].name == v){
                    fileList.push(files[i].slice(0 , files[i].size))
                }
            }
        })
    }else{
        fileList = [...files].map((v)=>{
            return v.slice(0 , v.size);
        })
    }
    const name = fileName ? fileName : files[0].name.replace(/-\d+$/,"");
    const file = new File(fileList , name)
    options.success({
        code : 200,
        file : file,
        file_name : name
    })
}