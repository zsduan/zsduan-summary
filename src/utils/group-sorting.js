/**
 * 分组/排序
 * @param {Object} option
 * @param {Array} option.list 需要处理的数据 必填
 * @param {String} [option.key] 需要处理的数据的key 排序/分组
 * @param {Function} [option.func] 处理函数 优先级高于key 仅在type为sort时有效
 * @param {String} [option.type] 处理类型 group/sort group分组 sort排序 默认sort
 * @param {String} [option.order] 排序方式 asc/desc 仅在type为sort时有效 默认asc
 * @param {Function} [option.success] 成功回调
 * @param {Function} [option.fail] 失败回调
 * @returns {Array} 处理后的数据
 * */ 

function groupOrSort (option) {
    let options = {
        list : [], // 需要处理的数据
        key : '', // 需要处理的数据的key 排序/分组
        func : null, // 处理函数 优先级高于key
        type : 'sort', // 处理类型 group/sort group分组 sort排序
        order : 'asc' ,// 排序方式 asc/desc 仅在type为sort时有效
        success : function (reslut) {}, // 成功回调
        fail : function (error) {} // 失败回调
    }
    // option不是对象 直接报错
    if (typeof option !== 'object') {
        options.fail('option is not a object');
        throw new Error('option is not a object');
    }
    Object.assign(options, option);

    // list不是数组 直接报错
    if (!Array.isArray(options.list)) {
        options.fail('list is not a array');
        throw new Error('list is not a array');
    }
    let list = [];
    if(options.type === 'group') {
        list = groupBy(options.list, options.key);
    } else if (options.type === 'sort') {
        list = sortBy(options.list, options.key, options.func);
        if (options.order === 'desc') {
            list.reverse();
        }
    }
    options.success(list);
    return list;
}

/**分组*/ 
const groupBy = (list, key) => {
    let map = {};
    list.forEach(item => {
        let value = item[key];
        if (!map[value]) {
            map[value] = [];
        }
        map[value].push(item);
    });
    return map;
}

/**排序*/
const sortBy = (list, key, func , order) => {
    if (func) {
        list.sort(func);
    } else {
        if(order === 'desc') {
            // 如果不是数组对象 直接排序
            if (list[0] && typeof list[0] !== 'object') {
                list.sort((a, b) => {
                    return b - a;
                });
                return list;
            }
            list.sort((a, b) => {
                return b[key] - a[key];
            });
        }
        else {
            // 如果不是数组对象 直接排序
            if (list[0] && typeof list[0] !== 'object') {
                list.sort((a, b) => {
                    return a - b;
                });
            }
            list.sort((a, b) => {
                return a[key] - b[key];
            });
        }
    }
    return list;
}

export default groupOrSort;