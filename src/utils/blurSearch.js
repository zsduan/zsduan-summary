/*
 * @Author: zs.duan
 * @Date: 2022-11-22 20:46:13
 * @LastEditors: zs.duan
 * @LastEditTime: 2022-11-22 21:05:28
 * @FilePath: \vue2+elui+template\src\utils\blurSearch.js
 */

/*
 * @name 模糊查询
 * @parame data 搜索的数据原始 Array 必填  searValue string 搜索的关键词 必填 key 匹配的对象key
*/ 
export const blurSearch = (data , searValue , key)=>{
    if(!data) throw new Error("data must be not null");
    if(!Array.isArray(data) || (!data.constructor === Array)){
        throw new Error("data must be Array");
    }
    if(!searValue){
        return data;
    }
    if(typeof searValue !== 'string' || (!Object.prototype.toString.call(searValue) === "[object String]")){
        throw new Error("searValue must be string")
    }
    if(key && (typeof key !== 'string' || (!Object.prototype.toString.call(key) === "[object String]"))){
        throw new Error("key must be string")
    }
    let reslut = [];
    const reg = new RegExp(searValue);
    if(key){
        data.forEach(element =>{
            if(element[key].match(reg)){
                reslut.push(element)
            }
        })
        return reslut;
    }
    data.forEach(element => {
        if(element.match(reg)){
            reslut.push(element)
        }
    });
    return reslut;
}