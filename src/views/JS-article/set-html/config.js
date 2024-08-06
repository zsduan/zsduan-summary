export const code1 = `
import imgUrl from "./image/1.jpg";
import setHtml from "@/utils/sethtml";

// 方式一
setHtml({
    html : "<img src='imgUrl' />",
    success : (res)=>{
        // do something
    },
})

// 方式二
const html [= setHtml({
    html : "<img src='imgUrl' />",
})
`