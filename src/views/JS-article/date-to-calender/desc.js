
export const tableData = [
    {
        key : "option",
        type : "param",
        parameterType : "Object | Date | string | number",
        desc : "配置对象 | 需要转换的时间",
        remark : "",
        children : [
            {
                key : "time",
                type : "param",
                parameterType : "Date | string | number",
                desc : "需要转换的时间",
                remark : ""
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
        ]
    },
]


export const returnTableData = [
    {
        key : "gregorianYear",
        type : "return",
        parameterType : "String",
        desc : "公历年",
        remark : ""
    },
    {
        key : "gregorianMonth",
        type : "return",
        parameterType : "String",
        desc : "公历月",
        remark : ""
    },
    {
        key : "gregorianDay",
        type : "return",
        parameterType : "String",
        desc : "公历日",
        remark : ""
    },
    {
        key : "weekday",
        type : "return",
        parameterType : "String",
        desc : "星期",
        remark : ""
    },
    {
        key : "hours",
        type : "return",
        parameterType : "String",
        desc : "时",
        remark : ""
    },
    {
        key : "minutes",
        type : "return",
        parameterType : "String",
        desc : "分",
        remark : ""
    },
    {
        key : "seconds",
        type : "return",
        parameterType : "String",
        desc : "秒",
        remark : ""
    },
    {
        key : "lunarYear",
        type : "return",
        parameterType : "String",
        desc : "农历年",
        remark : ""
    },
    {
        key : "lunarMonth",
        type : "return",
        parameterType : "String",
        desc : "农历月",
        remark : ""
    },
    {
        key : "lunarDay",
        type : "return",
        parameterType : "String",
        desc : "农历日",
        remark : ""
    },
    {
        key : "lunarYearCn",
        type : "return",
        parameterType : "String",
        desc : "农历天干地支纪年",
        remark : ""
    },
    {
        key : "lunarMonthCn",
        type : "return",
        parameterType : "String",
        desc : "农历中文月",
        remark : ""
    },
    {
        key : "lunarDayCn",
        type : "return",
        parameterType : "String",
        desc : "农历中文日",
        remark : ""
    },
    {
        key : "zodiacYear",
        type : "return",
        parameterType : "String",
        desc : "农历生肖年",
        remark : ""
    },
    {
        key : "solarTerm",
        type : "return",
        parameterType : "String",
        desc : "节气",
        remark : ""
    },
    {
        key : "gregorianFestival",
        type : "return",
        parameterType : "String",
        desc : "公立节日",
        remark : ""
    },
    {
        key : "lunarFestival",
        type : "return",
        parameterType : "String",
        desc : "农历节日",
        remark : ""
    },
]