/**
 * 处理html 目前仅支持处理图片
 * @author zs.duan
 * @date 2023-02-02
 * @description 将图片的宽度变成 100% 高度自适应
 * @param {object} option 配置文件
 * @description option 数据详情
 * @param {string} option.html html源码
 * @param {string} [option.imgUrl] 是否需要拼接图片的url 选填
 * @param {Function} option.success 成功返回
 * @param {Function} option.fail 失败返回
 * @returns {string} 返回处理后的html
 * */ 

const setHtml = (option)=>{
    let options = {
        html : "",
        imgUrl : "",
        success : (res)=>{},
        fail : (error)=>{}
    }
    Object.assign(options, option);
    if(!options.html){
        options.fail("html is null")
        return ;
    }
    if(typeof options.html != 'string'){
        options.fail("html is not string")
        return ;
    }
    let html = options.html.replaceAll("  &lt;", "<").replaceAll("  &gt;", ">");

    let newContent = html.replace(/<img[^>]*>/gi, function(match, capture) {
		if (match.search(/style=/gi) == -1) {
			match = match.replace(/\<img/gi, '<img style=""');
		}
		return match;
	});
    newContent = newContent.replace(/style="/gi, '$& max-width:100% ; height:auto; ');
	var str = /<img [^>]*src=['"]([^'"]+)[^>]*>/g; // img 标签取src里面内容的正则
	if (!newContent.match(str)) {
        options.success(newContent)
		return;
	}
    var allImg = newContent.match(str); // 取到所有img标签 放到数组 s里面
	for (var i = 0; i < allImg.length; i++) {
		var srcImg = allImg[i].replace(str, '$1'); //取src面的内容
        // http https base64 不进行组合
		if (srcImg.slice(0, 4) === 'http' || srcImg.slice(0, 5) === 'https' || srcImg.slice(0, 4) === 'data') {
			continue;
		} else {
			newContent = newContent.replace(new RegExp(srcImg, 'g'), options.imgUrl + srcImg);
		}
	}
    options.success(newContent);
    return newContent;
}

export default setHtml