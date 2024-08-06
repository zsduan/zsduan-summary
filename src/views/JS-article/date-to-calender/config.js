export const code1 = `
import getCalendar from "@/tool/calender";

// 调用方式一
const calendar = getCalendar(new Date());

// 调用方式二
getCalendar({
    time : new Date(),
    success : (data) => {
        console.log(data);
    }
});
`

