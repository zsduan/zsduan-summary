/**
 * 日期转农历
 * @author zs.duan
 * @date 2022-09-30
 * */ 

const calendar = {
    gregorianYear: null, //公历年
    gregorianMonth: null, //公历月
    gregorianDay: null, //公历日
    weekday: null, //星期
    hours: null,
    minutes: null,
    seconds: null,

    lunarYear: null, //农历年
    lunarMonth: null, //农历月
    lunarDay: null, //农历日

    lunarYearCn: "", //农历天干地支纪年
    lunarMonthCn: "", //农历中文月
    lunarDayCn: "", //农历中文日
    zodiacYear: "", //农历生肖年

    solarTerm: "", //节气
    gregorianFestival: "", //公历节日
    lunarFestival: "", //农历节日
};

let now = null ; //全局时间变量

// 年份列表
let lunarInfo = [
    0x04bd8, 0x04ae0, 0x0a570, 0x054d5, 0x0d260, 0x0d950, 0x16554, 0x056a0,
    0x09ad0, 0x055d2, 0x04ae0, 0x0a5b6, 0x0a4d0, 0x0d250, 0x1d255, 0x0b540,
    0x0d6a0, 0x0ada2, 0x095b0, 0x14977, 0x04970, 0x0a4b0, 0x0b4b5, 0x06a50,
    0x06d40, 0x1ab54, 0x02b60, 0x09570, 0x052f2, 0x04970, 0x06566, 0x0d4a0,
    0x0ea50, 0x06e95, 0x05ad0, 0x02b60, 0x186e3, 0x092e0, 0x1c8d7, 0x0c950,
    0x0d4a0, 0x1d8a6, 0x0b550, 0x056a0, 0x1a5b4, 0x025d0, 0x092d0, 0x0d2b2,
    0x0a950, 0x0b557, 0x06ca0, 0x0b550, 0x15355, 0x04da0, 0x0a5d0, 0x14573,
    0x052d0, 0x0a9a8, 0x0e950, 0x06aa0, 0x0aea6, 0x0ab50, 0x04b60, 0x0aae4,
    0x0a570, 0x05260, 0x0f263, 0x0d950, 0x05b57, 0x056a0, 0x096d0, 0x04dd5,
    0x04ad0, 0x0a4d0, 0x0d4d4, 0x0d250, 0x0d558, 0x0b540, 0x0b5a0, 0x195a6,
    0x095b0, 0x049b0, 0x0a974, 0x0a4b0, 0x0b27a, 0x06a50, 0x06d40, 0x0af46,
    0x0ab60, 0x09570, 0x04af5, 0x04970, 0x064b0, 0x074a3, 0x0ea50, 0x06b58,
    0x055c0, 0x0ab60, 0x096d5, 0x092e0, 0x0c960, 0x0d954, 0x0d4a0, 0x0da50,
    0x07552, 0x056a0, 0x0abb7, 0x025d0, 0x092d0, 0x0cab5, 0x0a950, 0x0b4a0,
    0x0baa4, 0x0ad50, 0x055d9, 0x04ba0, 0x0a5b0, 0x15176, 0x052b0, 0x0a930,
    0x07954, 0x06aa0, 0x0ad50, 0x05b52, 0x04b60, 0x0a6e6, 0x0a4e0, 0x0d260,
    0x0ea65, 0x0d530, 0x05aa0, 0x076a3, 0x096d0, 0x04bd7, 0x04ad0, 0x0a4d0,
    0x1d0b6, 0x0d250, 0x0d520, 0x0dd45, 0x0b5a0, 0x056d0, 0x055b2, 0x049b0,
    0x0a577, 0x0a4b0, 0x0aa50, 0x1b255, 0x06d20, 0x0ada0,
];

let zodiacs = [
    "鼠",
    "牛",
    "虎",
    "兔",
    "龙",
    "蛇",
    "马",
    "羊",
    "猴",
    "鸡",
    "狗",
    "猪",
];
let Gan = ["甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸"];
let Zhi = [
    "子",
    "丑",
    "寅",
    "卯",
    "辰",
    "巳",
    "午",
    "未",
    "申",
    "酉",
    "戌",
    "亥",
];
let weekday = [
    "星期一",
    "星期二",
    "星期三",
    "星期四",
    "星期五",
    "星期六",
    "星期日",
];

let traditional_festival = [
    {
        name: "除夕",
        mouth: "腊月",
        day: "三十",
    },
    {
        name: "大年初一",
        mouth: "正月",
        day: "初一",
    },
    {
        name: "元宵节",
        mouth: "正月",
        day: "十五",
    },
    {
        name: "端午节",
        mouth: "五月",
        day: "初五",
    },
    {
        name: "七夕节",
        mouth: "七月",
        day: "初七",
    },
    {
        name: "中秋节",
        mouth: "八月",
        day: "十五",
    },
    {
        name: "重阳节",
        mouth: "九月",
        day: "初九",
    },
    {
        name: "腊八节",
        mouth: "腊月",
        day: "初八",
    },
    {
        name: "龙抬头",
        mouth: "二月",
        day: "初二",
    },
    {
        name: "中元节",
        mouth: "七月",
        day: "十五",
    },
];

const festival = [
    {
        name: "清明节",
        mouth: 4,
        day: 5,
    },
    {
        name: "国际妇女节",
        mouth: 3,
        day: 8,
    },
    {
        name: "植树节",
        mouth: 3,
        day: 12,
    },
    {
        name: "国际劳动节",
        mouth: 5,
        day: 1,
    },
    {
        name: "儿童节",
        mouth: 6,
        day: 1,
    },
    {
        name: "中国共产党诞生纪念日",
        mouth: 7,
        day: 1,
    },
    {
        name: "中国人民解放军建军纪念日",
        mouth: 8,
        day: 1,
    },
    {
        name: "教师节",
        mouth: 9,
        day: 10,
    },
    {
        name: "国庆节",
        mouth: 10,
        day: 1,
    },
    {
        name: "元旦",
        mouth: 1,
        day: 1,
    },
    {
        name: "平安夜",
        mouth: 12,
        day: 24,
    },
    {
        name: "圣诞节",
        mouth: 12,
        day: 25,
    },
    {
        name: "感恩节",
        mouth: 11,
        day: 25,
    },
    {
        name: "父亲节",
        mouth: 6,
        day: 20,
    },
    {
        name: "愚人节",
        mouth: 4,
        day: 1,
    },
    {
        name: "消费者权益保护日",
        mouth: 3,
        day: 15,
    },
    {
        name: "青年节",
        mouth: 5,
        day: 4,
    },
];

//==== 传入 offset 传回干支, 0=甲子
function cyclical(num) {
    return Gan[num % 10] + Zhi[num % 12];
}

//==== 传回农历 year年的总天数
function lYearDays(year) {
    let i,
        sum = 348;
    for (i = 0x8000; i > 0x8; i >>= 1) {
        sum += lunarInfo[year - 1900] & i ? 1 : 0;
    }
    return sum + leapDays(year);
}

//==== 传回农历 year年闰月的天数
function leapDays(year) {
    if (leapMonth(year)) {
        return lunarInfo[year - 1900] & 0x10000 ? 30 : 29;
    } else {
        return 0;
    }
}

//==== 传回农历 year年闰哪个月 1-12 , 没闰传回 0
function leapMonth(year) {
    return lunarInfo[year - 1900] & 0xf;
}

//==== 传回农历 year年month月的总天数
function monthDays(year, month) {
    return lunarInfo[year - 1900] & (0x10000 >> month) ? 30 : 29;
}

//==== 算出农历, 传入日期对象, 传回农历日期对象
//     该对象属性有 农历年year 农历月month 农历日day 是否闰年isLeap yearCyl dayCyl monCyl
function Lunar(objDate) {
    let i,
        temp = 0;
    let baseDate = new Date(1900, 0, 31);
    let offset = Math.floor((objDate - baseDate) / 86400000);

    let dayCyl = offset + 40;
    let monCyl = 14;

    for (i = 1900; i < 2050 && offset > 0; i++) {
        temp = lYearDays(i);
        offset -= temp;
        monCyl += 12;
    }
    if (offset < 0) {
        offset += temp;
        i--;
        monCyl -= 12;
    }
    //农历年
    let year = i;
    let yearCyl = i - 1864;

    let leap = leapMonth(i); //闰哪个月
    let isLeap = false; //是否闰年

    for (i = 1; i < 13 && offset > 0; i++) {
        //闰月
        if (leap > 0 && i === leap + 1 && isLeap === false) {
            --i;
            isLeap = true;
            temp = leapDays(year);
        } else {
            temp = monthDays(year, i);
        }

        //解除闰月
        if (isLeap === true && i === leap + 1) {
            isLeap = false;
        }

        offset -= temp;
        if (isLeap === false) {
            monCyl++;
        }
    }

    if (offset === 0 && leap > 0 && i === leap + 1)
        if (isLeap) {
            isLeap = false;
        } else {
            isLeap = true;
            --i;
            --monCyl;
        }

    if (offset < 0) {
        offset += temp;
        --i;
        --monCyl;
    }
    //农历月
    let month = i;
    //农历日
    let day = offset + 1;

    return {
        year: year,
        month: month,
        day: day,
        isLeap: isLeap,
        leap: leap,
        yearCyl: yearCyl,
        dayCyl: dayCyl,
        monCyl: monCyl,
    };
}

//==== 中文日期 m为传入月份，d为传入日期
function cDay(m, d) {
    let nStr1 = [
        "日",
        "一",
        "二",
        "三",
        "四",
        "五",
        "六",
        "七",
        "八",
        "九",
        "十",
    ];
    let nStr2 = ["初", "十", "廿", "卅", ""];
    //农历中文月
    let lunarMonthCn;
    //农历中文日
    let lunarDayCn;
    if (m > 10) {
        lunarMonthCn = "十" + nStr1[m - 10];
        if (nStr1[m - 10] == "二") {
            lunarMonthCn = "腊";
        }
    } else {
        lunarMonthCn = nStr1[m];
        if (nStr1[m] == "一") {
            lunarMonthCn = "正";
        }
    }
    lunarMonthCn += "月";

    switch (d) {
        case 10:
            lunarDayCn = "初十";
            break;
        case 20:
            lunarDayCn = "二十";
            break;
        case 30:
            lunarDayCn = "三十";
            break;
        default:
            lunarDayCn = nStr2[Math.floor(d / 10)] + nStr1[d % 10];
    }
    return {
        lunarMonthCn: lunarMonthCn,
        lunarDayCn: lunarDayCn,
    };
}

//节气
// 按地球每转过15°为一节气，因为地球轨道是椭圆所以会存在计算误差，数组里数据对应各个节气距离一年起点的毫秒数
// 31556925974.7为地球公转周期天数换算的毫秒数(约365.2422天)
// Date.UTC(1900,0,6,2,5)为日期1900-01-06 02:05毫秒数
function getSolarTerm(GY, GD, GM) {
    let sTermInfo = [
        0, 21208, 42467, 63836, 85337, 107014, 128867, 150921, 173149, 195551,
        218072, 240693, 263343, 285989, 308563, 331033, 353350, 375494, 397447,
        419210, 440795, 462224, 483532, 504758,
    ];
    let solarTerm = [
        "小寒",
        "大寒",
        "立春",
        "雨水",
        "惊蛰",
        "春分",
        "清明",
        "谷雨",
        "立夏",
        "小满",
        "芒种",
        "夏至",
        "小暑",
        "大暑",
        "立秋",
        "处暑",
        "白露",
        "秋分",
        "寒露",
        "霜降",
        "立冬",
        "小雪",
        "大雪",
        "冬至",
    ];

    let solarTerms = "";
    let tmp1 = new Date(
        31556925974.7 * (GY - 1900) +
        sTermInfo[GM * 2 + 1] * 60000 +
        Date.UTC(1900, 0, 6, 2, 5)
    );
    let tmp2 = tmp1.getUTCDate();
    if (tmp2 === GD) solarTerms = solarTerm[GM * 2 + 1];
    tmp1 = new Date(
        31556925974.7 * (GY - 1900) +
        sTermInfo[GM * 2] * 60000 +
        Date.UTC(1900, 0, 6, 2, 5)
    );
    tmp2 = tmp1.getUTCDate();
    if (tmp2 === GD) solarTerms = solarTerm[GM * 2];

    return solarTerms;
}

// 获取传统节日
function getTraditionalFestival(mouth, day) {
    
    let Festival = traditional_festival.filter((item) => {
        return item.mouth == mouth && item.day == day;
    });
    // 处理腊月廿九 就是过年的问题
    if(mouth === '腊月' && day == '廿九'){
        let lunarDayCn =  cDay(now.getMonth(), now.getDate()).lunarDayCn;
        if(lunarDayCn !== '三十'){
            return "春节"
        }
    }
    return Festival.length ? Festival[0].name : "";
}

// 获取公立节日
function getFestival(mouth, day) {
    let Festival = festival.filter((item) => {
        return item.mouth == mouth && item.day == day;
    });
    return Festival.length ? Festival[0].name : "";
}

/**
 * @name 获取农历
 * @param {object} option 配置对象
 * @param {string | Date } option.time 时间
 * @param {Function} [option.success] 成功返回
 * @param {Function} [option.fail] 失败返回
 * @return {
 *   gregorianYear: null, //公历年
 *   gregorianMonth: null, //公历月
 *   gregorianDay: null, //公历日
 *   weekday: null, //星期
 *   hours: null,
 *   minutes: null,
 *   seconds: null,
 *   lunarYear: null, //农历年
 *   lunarMonth: null, //农历月
 *   lunarDay: null, //农历日
 *   lunarYearCn: "", //农历天干地支纪年
 *   lunarMonthCn: "", //农历中文月
 *   lunarDayCn: "", //农历中文日
 *   zodiacYear: "", //农历生肖年
 *   solarTerm: "", //节气
 *   gregorianFestival: "", //公历节日
 *   lunarFestival: "", //农历节日
 * }
*/ 
function getCalendar(option) {
    let options = {
        time : "",
        success : (reslut) =>{},
        fail : (error) =>{},
    }
    if(!option.time && option){
        options.time = option;
        option = {};
    }
    Object.assign(options, option);
    try{
        options.time = options.time ? new Date(options.time) : new Date();
    }catch(error){
        options.fail(error);
        return error
    }
    now = options.time;
    //用于计算农历年月日的数据
    let GY = now.getFullYear();
    let GM = now.getMonth();
    let GD = now.getDate();

    let year = now.getFullYear();
    let month = now.getMonth() + 1;
    let date = now.getDate();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    month = month.toString().padStart(2, "0");
    date = date.toString().padStart(2, "0");
    hours = hours.toString().padStart(2, "0");
    minutes = minutes.toString().padStart(2, "0");
    seconds = seconds.toString().padStart(2, "0");

    //公历年月日、星期、时分秒
    calendar.gregorianYear = year;
    calendar.gregorianMonth = month;
    calendar.gregorianDay = date;
    calendar.weekday = weekday[now.getDay() - 1];
    calendar.hours = hours;
    calendar.minutes = minutes;
    calendar.seconds = seconds;
    calendar.gregorianFestival = getFestival(month, date);

    //去掉时分秒的日期
    let sDObj = new Date(GY, GM, GD);
    let lDObj = new Lunar(sDObj);

    //农历年月日、生肖年
    calendar.lunarYear = lDObj.year;
    calendar.lunarMonth = lDObj.month;
    calendar.lunarDay = lDObj.day;

    // 如果年份小于今年 则 多减去1年
    if (lDObj.year < year) {
        calendar.zodiacYear = zodiacs[(GY - 5) % 12];
        calendar.lunarYearCn = cyclical(GY - 1900 + 35);
    }else{
        calendar.zodiacYear = zodiacs[(GY - 4) % 12];
        calendar.lunarYearCn = cyclical(GY - 1900 + 36);
    }
    calendar.lunarMonthCn = cDay(lDObj.month, lDObj.day).lunarMonthCn;
    calendar.lunarDayCn = cDay(lDObj.month, lDObj.day).lunarDayCn;

    calendar.lunarFestival = getTraditionalFestival(
        calendar.lunarMonthCn,
        calendar.lunarDayCn
    );

    //节气
    calendar.solarTerm = getSolarTerm(GY, GD, GM);

    options.success(calendar);
    return calendar;
}

export default getCalendar;
