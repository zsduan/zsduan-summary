/**
 * 复制
 * @author zs.duan
 * @date 2024-07-25
 * @param {object | String} option 配置对象
 * @param {string} option.text 复制内容
 * @param {string} [option.type] 复制类型 text html image
 * @param {Function} [option.success] 成功回调
 * @param {Function} [option.fail] 失败回调
 * */
export default function copy(options) {
    let option = {
        text: '',
        type: 'text',
        success: () => { },
        fail: () => { },
    }
    if(typeof options === 'string'){
        options = {text: options}
    }
    Object.assign(option, options);
    console.log(option.type);
    if(!option.text) return console.warn('请传入复制内容');
    if (!navigator.clipboard) {
        console.warn('当前浏览器不支持复制图片和html将用存文末模式进行');
        let input = document.createElement("input");
        input.value = options.text;
        document.body.appendChild(input);
        input.select();
        document.execCommand("copy");
        document.body.removeChild(input);
        options.success({ code: 200, msg: "复制成功" })
        return
    }
    switch(option.type){
        case 'text':
            copyText(option);
            break;
        case 'html':
            const html = new Blob([options.text], { type: "text/html" });
            navigator.clipboard.write([new ClipboardItem({ "text/html": html })]).then(function () {
                options.success({ code: 200, msg: "复制成功" })
            }, function () {
                option.fail({ code: 500, msg: "复制失败" })
            });
            break;
        case 'image':
            const img = new Image();
            img.src = options.text;
            img.onload = () => {
                const canvas = document.createElement("canvas");
                canvas.width = img.width;
                canvas.height = img.height;
                canvas.getContext("2d").drawImage(img, 0, 0);
                canvas.toBlob(function (blob) {
                    navigator.clipboard.write([new ClipboardItem({ "image/png": blob })]).then(function () {
                        // 销毁canvas
                        canvas.remove();
                        img.remove();
                        option.success({ code: 200, msg: "复制成功" })
                    }, function () {
                        option.fail({ code: 500, msg: "复制失败" })
                    });
                });
            }
            break;
        default :
            console.warn('你传入类型有误,将用文字模式复制');
            copyText(options);
            break;
    }
}

function copyText(options) {
    navigator.clipboard.writeText(options.text).then(function () {
        options.success({ code: 200, msg: "复制成功" })
    }, function () {
        options.fail({ code: 500, msg: "复制失败" })
    });
}