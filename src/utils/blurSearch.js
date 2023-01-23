/*
 * @Author: zs.duan
 * @Date: 2022-11-22 20:46:13
 * @LastEditors: zs.duan
 * @LastEditTime: 2023-01-23 19:08:15
 * @FilePath: \vue2+elui+template\src\utils\blurSearch.js
 */

/*
 * @name 模糊查询
 * @parame data 搜索的数据原始 Array 必填
 * @parame searValue string 搜索的关键词 必填
 * @parame key 匹配的对象key
 * @method success 返回成功
 * @method fail 返回失败
*/ 
export const blurSearch = (...arg)=>{
    let options = {
        list : [],
        searValue : "",
        key : "",
        success : (reslut) =>{},
        fail : (error) =>{}
    } 
    options = {
        ...options,
        ...arg[0]
    }
    if(!options.list) throw new Error("list must be not null");
    if(!Array.isArray(options.list) || (!options.list.constructor === Array)){
        options.fail({
            code : -1,
            msg : "list must be Array"
        })
        return ;
    }
    if(!options.searValue){
        options.success(options.list);
        return options.list;
    }
    if(typeof options.searValue !== 'string' || (!Object.prototype.toString.call(options.searValue) === "[object String]")){
        options.fail({
            code : -1,
            msg : "searValue must be string"
        })
        return 
    }
    if(options.key && (typeof options.key !== 'string' || (!Object.prototype.toString.call(options.key) === "[object String]"))){
        options.fail({
            code : -1,
            msg : "key must be string"
        })
        return;
    }
    let reslut = [];
    const reg = new RegExp((options.searValue).toString());
    if(options.key){
        options.list.forEach(element =>{
            element[options.key] = element[options.key].toString();
            if(element[options.key].match(reg)){
                reslut.push(element)
            }
        })
        options.success(reslut);
        return;
    }
    options.list.forEach(element => {
        if(element.match(reg)){
            reslut.push(element)
        }
    });
    options.success(reslut);
}