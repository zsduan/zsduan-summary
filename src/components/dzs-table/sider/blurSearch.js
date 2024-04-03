/*
 * @Author: zs.duan
 * @Date: 2022-11-22 20:46:13
 * @LastEditors: zs.duan
 * @LastEditTime: 2023-01-28 21:50:44
 * @FilePath: \vue2+elui+template\src\utils\blurSearch.js
 */

/**
 * 模糊搜索/直接搜索
 * @author zsduan
 * @param {object} option 配置对象
 * @param {Array} option.list 原始数组 必填
 * @param {string} option.searValue 搜索的关键词 必填
 * @param {string} [option.key] 为数组对象时必填
 * @param {Boolean} [option.is_completely] 是否完全匹配
 * @param {Function} option.success 成功返回
 * @param {Function} [option.fail] 失败返回
 * @returns {Array} 返回搜索结果
 * @example Search({
 *      list : [],
 *      searValue : "",
 *      key : "",
 *      is_completely : false , //是都完全匹配
 *      success : (reslut) =>{},
 *      fail : (error) =>{}
 * })
*/
const Search = (option) => {
    let options = {
        list: [],
        searValue: "",
        key: "",
        is_completely: false, //是都完全匹配
        success: (reslut) => { },
        fail: (error) => { }
    }
    options = {
        ...options,
        ...option
    }
    if (!options.list) throw new Error("list must be not null");
    if (!Array.isArray(options.list) || (!options.list.constructor === Array)) {
        options.fail({
            code: -1,
            msg: "list must be Array"
        })
        return;
    }
    if (!options.searValue) {
        options.success(options.list);
        return options.list;
    }
    if (typeof options.searValue !== 'string' || (!Object.prototype.toString.call(options.searValue) === "[object String]")) {
        options.fail({
            code: -1,
            msg: "searValue must be string"
        })
        return
    }
    if (options.key && (typeof options.key !== 'string' || (!Object.prototype.toString.call(options.key) === "[object String]"))) {
        options.fail({
            code: -1,
            msg: "key must be string"
        })
        return;
    }
    let reslut = [];
    const reg = new RegExp((options.searValue).toString());
    if (options.key) {
        options.list.forEach(element => {
            if (options.is_completely && element[options.key] === options.searValue) {
                reslut.push(element)
            }
            if (!options.is_completely) {
                // 需要转成成 string 因为其他类型没有match方法
                element[options.key] = element[options.key].toString();
                if (element[options.key].match(reg)) {
                    reslut.push(element)
                }
            }
        })
        options.success(reslut);
        return reslut;
    }
    options.list.forEach(element => {
        if (element.match(reg) && !options.is_completely) {
            reslut.push(element)
        }
        if (options.is_completely && element === options.searValue) {
            reslut.push(element)
        }
    });
    options.success(reslut);
    return reslut;
}

export default Search