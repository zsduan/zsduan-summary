export const tableData = [
    {
        key : "option",
        type : "param",
        parameterType : "Object",
        desc : "配置对象",
        remark : "",
        children : [
            {
                key : "watermark_txt",
                type : "param",
                parameterType : "String",
                desc : "水印文本",
                remark : "必填"
            },
            {
                key : "watermark_x",
                type : "param",
                parameterType : "Number",
                desc : "水印起始位置x轴坐标",
                remark : "默认 20"
            },
            {
                key : "watermark_y",
                type : "param",
                parameterType : "Number",
                desc : "水印起始位置Y轴坐标",
                remark : "默认 20"
            },
            {
                key : "watermark_rows",
                type : "param",
                parameterType : "Number",
                desc : "水印行数",
                remark : "默认 0"
            },
            {
                key : "watermark_cols",
                type : "param",
                parameterType : "Number",
                desc : "水印列数",
                remark : "默认 0"
            },
            {
                key : "watermark_x_space",
                type : "param",
                parameterType : "Number",
                desc : "水印x轴间隔",
                remark : "默认 100"
            },
            {
                key : "watermark_y_space",
                type : "param",
                parameterType : "Number",
                desc : "水印y轴间隔",
                remark : "默认 100"
            },
            {
                key : "watermark_color",
                type : "param",
                parameterType : "String",
                desc : "水印字体颜色",
                remark : "默认 #000"
            },
            {
                key : "watermark_alpha",
                type : "param",
                parameterType : "Number",
                desc : "水印透明度",
                remark : "默认 0.4"
            },
            {
                key : "watermark_fontsize",
                type : "param",
                parameterType : "Number",
                desc : "水印字体大小",
                remark : "默认 16"
            },
            {
                key : "watermark_font",
                type : "param",
                parameterType : "String",
                desc : "水印字体",
                remark : "默认 SimSun"
            },
            {
                key : "watermark_width",
                type : "param",
                parameterType : "Number",
                desc : "水印宽度",
                remark : "默认 100"
            },
            {
                key : "watermark_height",
                type : "param",
                parameterType : "Number",
                desc : "水印长度",
                remark : "默认 100"
            },
            {
                key : "watermark_angle",
                type : "param",
                parameterType : "Number",
                desc : "水印倾斜度数",
                remark : "默认 15"
            },
            {
                key : "isHtml",
                type : "param",
                parameterType : "Boolean",
                desc : "是否是html水印",
                remark : "默认 false"
            },
        ]
    },
    {
        key : "clearWatermark",
        type : "method",
        parameterType : "Function",
        desc : "本函数可单独导出清空水印方法",
        remark : ""
    }
]
