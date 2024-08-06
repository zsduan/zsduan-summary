/**
 * @name 99乘法表
 * @author zs.duan
 * @date 2023-01-15
 * @param {object} option 配置对象
 * @param {Boolean} option.is_empty 是否添加空数组
 * @param {Function} [option.success] 成功返回
 * @retrun success return Array 
 * @example retrun {
 *      equation : String, //等式
        reslut : Number, //结果
        left : Number, //左边的值
        right : Number, //右边的值
        is_invalid : Boolean //是否有效
    }
 * 
*/ 
export default function multiplicationTable99 (option){
    let options = {
        is_empty : true, //是否填空数组
        success : (reslut)=>{}
    }
    options = {
        ...options,
        ...option
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
    options.success(list);
    return list;
}