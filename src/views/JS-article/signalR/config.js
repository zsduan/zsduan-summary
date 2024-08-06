export const code1 = `
import signalRcoont from "@/tool/signalR";
const signalR = signalRcoont({
    url : "",
    data : {
        token : "123456"
    },
    success : (reslut) =>{
        console.log(reslut)
    },
    fail : (error) =>{
        console.log(error)
    },
    stop : (stop) => {
        console.log(stop)
    }
})
`

