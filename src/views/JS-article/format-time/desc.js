/**
 * @name 格式化时间 表格
 * */
export const formatTimeTableData = [
    {
        key : "options",
        type : "param",
        parameterType : "object | string | Date | number",
        desc : "配置对象 | 日期字符串 | 日期对象 | 时间戳",
        remark : "",
        children : [
            {
                key : "format",
                type : "param",
                parameterType : "String",
                desc : "格式化方式",
                remark : "完整格式 yyyy-MM-dd HH:mm:ss 链式调用.format"
            },
            {
                key : "date",
                type : "param",
                parameterType : "Date | string | number",
                desc : "日期对象 | 日期字符串 | 时间戳",
                remark : "链式调用请在一个参数传"
            },
            {
                key : "success",
                type : "param",
                parameterType : "Function",
                desc : "成功返回",
                remark : ""
            },
            {
                key : "fail",
                type : "param",
                parameterType : "Function",
                desc : "失败返回",
                remark : ""
            },
            {
                key : "complete",
                type : "param",
                parameterType : "Function",
                desc : "完成时返回",
                remark : "仅 formatTime 支持"
            },
        ]
    },
    {
        key : "callback",
        type : "param",
        parameterType : "Function",
        desc : "回调函数",
        remark : "仅 setTime.format 支持"
    },
    {
        key : "return",
        type : "",
        parameterType : "String",
        desc : "返回数据",
        remark : "formatTime|chainFormatTime支持 返回格式化后的数据"
    },
]

/**
 * @name 对比时间差 表格
 * */
export const diffTableData = [
    {
        key : "options",
        type : "param",
        parameterType : "object | Function",
        desc : "配置对象 | 回调函数",
        remark : "",
        children : [
            {
                key : "startDate",
                type : "param",
                parameterType : "string | Date | number",
                desc : "开始时间",
                remark : "必填"
            },
            {
                key : "endDate",
                type : "param",
                parameterType : "Date | string | number",
                desc : "结束时间",
                remark : ""
            },
        ]
    },
    {
        key : "callback",
        type : "param",
        parameterType : "Function",
        desc : "回调函数",
        remark : ""
    },
    {
        key : "return",
        type : "",
        parameterType : "Object",
        desc : "返回数据",
        remark : '{ "allday": -206.225, "day": -207, "hours": -6, "allHours": -4950, "minutes": -25, "allMinutes": -296965, "seconds": -16, "allSeconds": -17817856, "timeDiff": -17817855398 }'
    },
]


/**
 * @name 对比时间差 表格
 * */
export const lastTableData = [
    {
        key : "options",
        type : "param",
        parameterType : "object | Function",
        desc : "配置对象 | 回调函数",
        remark : "",
        children : [
            {
                key : "date",
                type : "param",
                parameterType : "string | Date | number",
                desc : "需要设置的时间",
                remark : "默认当前时间"
            },
            {
                key : "number",
                type : "param",
                parameterType : "number",
                desc : "需要前后多少天(小时/周)",
                remark : " 默认1"
            },
            {
                key : "type",
                type : "param",
                parameterType : "string",
                desc : "类型",
                remark : " day hour week 默认 day"
            },
        ]
    },
    {
        key : "callback",
        type : "param",
        parameterType : "Function",
        desc : "回调函数",
        remark : ""
    },
    {
        key : "return",
        type : "",
        parameterType : "Object",
        desc : "返回数据",
        remark : '{ "previousDate": "", "nextDate": "2024-07-27", "nowDate": "2024-07-27", "dateInfo": { "year": 2024, "month": 7, "day": 25, "hour": 17, "minutes": 24, "seconds": 15, "time": 1721899455398, "date": "2024-07-25 17:24:15" } }'
    },
]

/**
 * @name 获取当前日期是星期几 表格
 * */
export const weekTableData = [
    {
        key : "options",
        type : "param",
        parameterType : "object | Function",
        desc : "配置对象 | 回调函数",
        remark : "",
        children : [
            {
                key : "date",
                type : "param",
                parameterType : "string | Date | number",
                desc : "需要设置的时间",
                remark : "默认当前时间"
            },
        ]
    },
    {
        key : "callback",
        type : "param",
        parameterType : "Function",
        desc : "回调函数",
        remark : ""
    },
    {
        key : "return",
        type : "",
        parameterType : "String",
        desc : "返回数据",
        remark : '返回星期几'
    },
]


/**
 * @name 指定日期是当前(年、月、周)的多少天 表格
 * */
export const dayTableData = [
    {
        key : "options",
        type : "param",
        parameterType : "object | Function",
        desc : "配置对象 | 回调函数",
        remark : "",
        children : [
            {
                key : "date",
                type : "param",
                parameterType : "string | Date | number",
                desc : "需要设置的时间",
                remark : "默认当前时间"
            },
            {
                key : "number",
                type : "param",
                parameterType : "number",
                desc : "需要前后多少天(小时/周)",
                remark : " 默认1"
            },
            {
                key : "type",
                type : "param",
                parameterType : "string",
                desc : "类型",
                remark : "year month week 默认 year"
            },
        ]
    },
    {
        key : "callback",
        type : "param",
        parameterType : "Function",
        desc : "回调函数",
        remark : ""
    },
    {
        key : "return",
        type : "",
        parameterType : "Number",
        desc : "返回数据",
        remark : '返回指定日期是当前(年、月、周)的多少天'
    },
]

/**
 * @name 是否为闰年 表格
 * */
export const leapYearTableData = [
    {
        key : "options",
        type : "param",
        parameterType : "object | Function",
        desc : "配置对象|回调函数",
        remark : "",
        children : [
            {
                key : "date",
                type : "param",
                parameterType : "string | Date | number",
                desc : "需要设置的时间",
                remark : "默认当前时间"
            },
        ]
    },
    {
        key : "callback",
        type : "param",
        parameterType : "Function",
        desc : "回调函数",
        remark : ""
    },
    {
        key : "return",
        type : "",
        parameterType : "String",
        desc : "返回数据",
        remark : '返回星期几'
    },
]