/**
 * 搜索
 * @author zs.duan
 * @date 2024-08-02
 * @param {object} option 配置对象
 * @param {Array} option.data 原始数组
 * @param {string} [option.key] 搜索的key
 * @param {string} [option.children] 子级的key
 * @param {string} [option.value] 搜索的关键词
 * @param {boolean} [option.isCompletely] 是否完全匹配
 * @param {Function} [option.success] 成功返回
 * @param {Function} [option.fail] 失败返回
 * @returns {Array} 返回搜索结果
 * @example search({
 *      data : [],
 *      value : "",
 *      success : (reslut) =>{},
 *      fail : (error) =>{}
 * })
 * */

function Search(option) {
    let options = {
        data: [],
        key: "",
        children: "",
        value: "",
        isCompletely: false,
        success: (reslut) => { },
        fail: (error) => { }
    }
    Object.assign(options, option);
    let msg = "";
    if (!options.data) {
        msg = "原始搜索数据不能为空"
    }
    if (!Array.isArray(options.data)) {
        msg = "原始搜索数据必须为数组"
    }
    if (typeof options.value !== 'string') {
        msg = "搜索关键词必须为字符串"
    }
    if (options.key && typeof options.key !== 'string') {
        msg = "搜索key必须为字符串"
    }
    const hasObject = options.data.some(item => item !== null && typeof item === 'object');
    if (msg) {
        options.fail({ code: -1, msg: msg });
        console.error(msg);
        return []
    }
    if (!options.value) {
        console.log('搜索关键词不能为空 ==>' , options.data);
        options.success(options.data);
        return options.data;
    }

    let reslut = [];
    function escapeRegExp(str) {
        return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }
    const reg = new RegExp(escapeRegExp((options.value).toString()), 'i');
    // 通过key搜索
    const _searchByKey = (data) => {
        data.forEach(element => {
            if (options.isCompletely && element[options.key] === options.value) {
                reslut.push(element)
            } else {
                element[options.key] = element[options.key] ? element[options.key].toString() : '';
                if (element[options.key].match(reg)) {
                    reslut.push(element)
                }
            }
            if (options.children && Array.isArray(element[options.children])) {
                _searchByKey(element[options.children]);
            }
        });
    }

    // 通过数组搜索
    const _search = (data) => {
        data.forEach(element => {
            if(options.isCompletely && hasObject){
                console.warn('数组对象时,默认全场景匹配')
            }
            if (options.isCompletely && !hasObject &&  element === options.value) {
                reslut.push(element)
            } else {
                let matchString = '';
                if (element !== null && hasObject) {
                    for (const prop in element) {
                        if (prop === options.children) continue;
                        const val = element[prop];
                        if (val != null) {
                            matchString += val.toString() + ' ';
                        }
                    }
                } else {
                    matchString = element != null ? element.toString() : '';
                }
                if (reg.test(matchString)) {
                    reslut.push(element);
                }
            }
            if (options.children && element[options.children]) {
                _search(element[options.children]);
            }
        })
    }
    const searchData = JSON.parse(JSON.stringify(options.data));
    if (options.key) {
        _searchByKey(searchData);
    } else {
        _search(searchData);
    }
    reslut.forEach(element => {
        delete element[options.children];
    });
    options.success(reslut);
    return reslut;
}

export default  Search;