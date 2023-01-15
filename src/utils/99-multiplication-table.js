/*
 * @Author: zs.duan
 * @Date: 2023-01-15 14:11:32
 * @LastEditors: zs.duan
 * @LastEditTime: 2023-01-15 14:53:20
 * @FilePath: \vue2+js+eui+template\src\utils\99-multiplication-table.js
 */

/*
 * @name 99乘法表
 * @parame {boolen} true //是否填写空数组 
 * method success 成功返回
*/ 
export const multiplicationTable99 = (...arg)=>{
    let options = {
        is_empty : true, //是否填空数组
        success : (reslut)=>{}
    }
    options = {
        ...options,
        ...arg[0]
    }
    let list = [];
    let now_loop = 0;
    for(let i = 1 ; i < 10 ; i ++){
        let multiplication = [];
        now_loop = i;
        for(let key = options.is_empty ? 1 : now_loop ; key < 10 ; key ++){
            if(key < now_loop){
                multiplication.push({
                    equation : "",
                    reslut : 0,
                    left :0 ,
                    right : 0,
                    is_invalid : false,
                })
            }else{
                multiplication.push({
                    equation : `${i} x ${key} = ${i * key}`,
                    reslut : i * key,
                    left : i ,
                    right : key,
                    is_invalid : true
                })
            }
        }
        list.push(multiplication);
    }
    options.success(list)
}