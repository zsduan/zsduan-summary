export const code1 = `
import {formatTime , asyncFormatTime , chainFormatTime , setTime} from "@/tool/format-time";

/**方式一*/
formatTime({
    date : new Date(),
    format : "yyyy-MM-dd HH:mm:ss",
    success : (res)=>{
        console.log("格式化后的时间 ==>" ,res)
    },
    fail : (err)=>{
        console.log("格式化错误 ==>" , err)
    },
})

/**方式二*/ 
const time = formatTime({
    date : new Date(),
    format : "yyyy-MM-dd",
});

/**方式三*/ 
const time = formatTime(new Date())

/**方式四 Promise*/ 
asyncFormatTime({
    date : new Date(),
    format : "yyyy-MM-dd HH:mm:ss",
}).then((res)=>{
    console.log("格式化后的时间 ==>" ,res)
}).catch((err)=>{
    console.log("格式化错误 ==>" , err)
})

/**方式五 链式调用*/ 
const time = chainFormatTime(new Date()).format("yyyy-MM-dd HH:mm:ss").time;

/**方式六 统一调用 不支持Promise 但是支持回调*/ 
import {setTime} from "@/tool/format-time";
setTime.format({
    date : new Date(),
    format : "yyyy-MM-dd HH:mm:ss",
    callback : (res)=>{
        console.log("格式化后的时间 ==>" ,res)
    }
})
`

export const code2 = `
import {setTime} from "@/tool/format-time";
const diffTime = setTime.diff({
    startDate : "2024-01-01 12:00:00",
    endDate : new Date(),
})
`

export const code3 = `
import {setTime} from "@/tool/format-time";
const lastTime = setTime.last({
    date : new Date(),
    num : 2 ,
    type : "day"
})
`

export const code4 = `
import {setTime} from "@/tool/format-time";
const week = setTime.week()
`

export const code5 = `
import {setTime} from "@/tool/format-time";
const day= setTime.day({
    date : new Date(),
    type : "year"
})
`

export const code6 = `
import {setTime} from "../../utils/format-time";
const leapYear = setTime.leapYear(new Date())
`