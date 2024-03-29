/**
 * @name 设置水印
 * @param {Object} options
 * @param {String} options.watermark_txt 水印文字
 * @param {Number} [options.watermark_x] 水印起始位置x轴坐标
 * @param {Number} [options.watermark_y] 水印起始位置Y轴坐标
 * @param {Number} [options.watermark_rows] 水印行数
 * @param {Number} [options.watermark_cols] 水印列数
 * @param {Number} [options.watermark_x_space] 水印x轴间隔
 * @param {Number} [options.watermark_y_space] 水印y轴间隔
 * @param {String} [options.watermark_color] 水印字体颜色
 * @param {Number} [options.watermark_alpha] 水印透明度
 * @param {String} [options.watermark_fontsize] 水印字体大小
 * @param {String} [options.watermark_font] 水印字体
 * @param {Number} [options.watermark_width] 水印宽度
 * @param {Number} [options.watermark_height] 水印长度
 * @param {Number} [options.watermark_angle] 水印倾斜度数
 * @param {Boolean} [options.isHtml] 是否是html水印
 * @example
 * watermark({
 *  watermark_txt: "text",
 * })
 * */ 

export default function watermark(options) {
    if (!settingConfig.openWatermark) return;
    //默认设置
    var defaultSettings = {
        watermark_txt: "text",
        watermark_x: 20,//水印起始位置x轴坐标
        watermark_y: 20,//水印起始位置Y轴坐标
        watermark_rows: 5,//水印行数
        watermark_cols: 10,//水印列数
        watermark_x_space: 100,//水印x轴间隔
        watermark_y_space: 100,//水印y轴间隔
        watermark_color: '#aaa',//水印字体颜色
        watermark_alpha: 0.4,//水印透明度
        watermark_fontsize: '15px',//水印字体大小
        watermark_font: '',//水印字体
        watermark_width: 210,//水印宽度
        watermark_height: 80,//水印长度
        watermark_angle: 15 ,//水印倾斜度数
        isHtml: false //是否是html水印
    };
    Object.assign(defaultSettings, options);
    //采用配置项替换默认值，作用类似Jquery.extend
    if (arguments.length === 1 && typeof arguments[0] === "object") {
        var src = arguments[0] || {};
        for (var keyS in src) {
            if (src[keyS] && defaultSettings[keyS] && src[keyS] === defaultSettings[keyS])
                continue;
            else if (src[keyS])
                defaultSettings[keyS] = src[keyS];
        }
    }

    var oTemp = document.createDocumentFragment();

    //获取页面最大宽度
    var page_width = Math.max(document.body.scrollWidth, document.body.clientWidth);
    var cutWidth = page_width * 0.0150;
    var page_width = page_width - cutWidth;
    //获取页面最大高度
    var page_height = Math.max(document.body.scrollHeight, document.body.clientHeight) + 650;
    // var page_height = document.body.scrollHeight+document.body.scrollTop;
    //如果将水印列数设置为0，或水印列数设置过大，超过页面最大宽度，则重新计算水印列数和水印x轴间隔
    if (defaultSettings.watermark_cols == 0 || (parseInt(defaultSettings.watermark_x + defaultSettings.watermark_width * defaultSettings.watermark_cols + defaultSettings.watermark_x_space * (defaultSettings.watermark_cols - 1)) > page_width)) {
        defaultSettings.watermark_cols = parseInt((page_width - defaultSettings.watermark_x + defaultSettings.watermark_x_space) / (defaultSettings.watermark_width + defaultSettings.watermark_x_space) - 1);
        defaultSettings.watermark_x_space = parseInt((page_width - defaultSettings.watermark_x - defaultSettings.watermark_width * defaultSettings.watermark_cols) / (defaultSettings.watermark_cols - 1) - 10);
    }
    //如果将水印行数设置为0，或水印行数设置过大，超过页面最大长度，则重新计算水印行数和水印y轴间隔
    if (defaultSettings.watermark_rows == 0 || (parseInt(defaultSettings.watermark_y + defaultSettings.watermark_height * defaultSettings.watermark_rows + defaultSettings.watermark_y_space * (defaultSettings.watermark_rows - 1)) > page_height)) {
        defaultSettings.watermark_rows = parseInt((defaultSettings.watermark_y_space + page_height - defaultSettings.watermark_y) / (defaultSettings.watermark_height + defaultSettings.watermark_y_space));
        defaultSettings.watermark_y_space = parseInt(((page_height - defaultSettings.watermark_y) - defaultSettings.watermark_height * defaultSettings.watermark_rows) / (defaultSettings.watermark_rows - 1));
    }
    var x;
    var y;
    for (var i = 0; i < defaultSettings.watermark_rows; i++) {
        y = defaultSettings.watermark_y + (defaultSettings.watermark_y_space + defaultSettings.watermark_height) * i;
        for (var j = 0; j < defaultSettings.watermark_cols; j++) {
            x = defaultSettings.watermark_x + (defaultSettings.watermark_width + defaultSettings.watermark_x_space) * j;

            var mask_div = document.createElement('div');
            mask_div.id = 'mask_div' + i + j;
            mask_div.className = 'mask_div';
            if(defaultSettings.isHtml){
                mask_div.innerHTML = defaultSettings.watermark_txt;
            }else{
                mask_div.innerText = defaultSettings.watermark_txt;
            }
            
            // mask_div.appendChild(document.createTextnode(defaultSettings.watermark_txt));
            //设置水印div倾斜显示
            mask_div.style.WEBkitTransfORM = "rotate(-" + defaultSettings.watermark_angle + "deg)";
            mask_div.style.MozTransform = "rotate(-" + defaultSettings.watermark_angle + "deg)";
            mask_div.style.msTransform = "rotate(-" + defaultSettings.watermark_angle + "deg)";
            mask_div.style.OTransform = "rotate(-" + defaultSettings.watermark_angle + "deg)";
            mask_div.style.transform = "rotate(-" + defaultSettings.watermark_angle + "deg)";
            mask_div.style.visibility = "";
            mask_div.style.position = "fixed";
            mask_div.style.left = x + 'px';
            mask_div.style.top = y + 'px';
            mask_div.style.overflow = "hidden";
            mask_div.style.zIndex = "9999";
            mask_div.style.pointerEvents = 'none';//pointer-events:none  让水印不遮挡页面的点击事件
            //mask_div.style.border="solid #eee 1px";
            mask_div.style.opacity = defaultSettings.watermark_alpha;
            mask_div.style.fontSize = defaultSettings.watermark_fontsize;
            mask_div.style.fontFamily = defaultSettings.watermark_font;
            mask_div.style.color = defaultSettings.watermark_color;
            mask_div.style.textAlign = "center";
            mask_div.style.width = defaultSettings.watermark_width + 'px';
            mask_div.style.height = defaultSettings.watermark_height + 'px';
            mask_div.style.display = "block";
            oTemp.appendChild(mask_div);
        };
    };
    document.body.appendChild(oTemp);
}