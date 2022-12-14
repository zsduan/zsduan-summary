/*
 * @Author: zs.duan
 * @Date: 2022-11-22 20:46:13
 * @LastEditors: zs.duan
 * @LastEditTime: 2022-11-23 19:08:30
 * @FilePath: \vue2+elui+template\src\utils\blurSearch.js
 */

/*
 * @name 模糊查询
 * @parame data 搜索的数据原始 Array 必填
 * @parame searValue string 搜索的关键词 必填
 * @parame key 匹配的对象key
 * @return 匹配对象列表
*/ 
export const blurSearch = (...arg)=>{
    let data = arg[0];
    if(!data.list) throw new Error("list must be not null");
    if(!Array.isArray(data.list) || (!data.list.constructor === Array)){
        throw new Error("list must be Array");
    }
    if(!data.searValue){
        return data.list;
    }
    if(typeof data.searValue !== 'string' || (!Object.prototype.toString.call(data.searValue) === "[object String]")){
        throw new Error("searValue must be string")
    }
    if(data.key && (typeof data.key !== 'string' || (!Object.prototype.toString.call(data.key) === "[object String]"))){
        throw new Error("key must be string")
    }
    let reslut = [];
    const reg = new RegExp(data.searValue);
    if(data.key){
        data.list.forEach(element =>{
            if(element[data.key].match(reg)){
                reslut.push(element)
            }
        })
        return reslut;
    }
    data.list.forEach(element => {
        if(element.match(reg)){
            reslut.push(element)
        }
    });
    return reslut;
}