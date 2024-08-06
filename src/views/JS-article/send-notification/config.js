export const code1 = `
import sendNotification from "@/tool/sendNotification";
sendNotification({
    title: "系统通知",
    Vue : this,
});
`;

export const code2 = `
import sendNotification from "@/tool/sendNotification";
sendNotification({
    title: "系统通知",
    msg : "测试信息",
    Vue : this,
});
`;

export const code3 = `
import sendNotification from "@/tool/sendNotification";
sendNotification({
    title: "系统通知",
    duration : 3000,
    position : "bottom-right",
    Vue : this,
});
`;

export const code4 = `
import sendNotification from "@/tool/sendNotification";
sendNotification({
    title: "系统通知",
    audioUrl : "https://xxx",
    Vue : this,
});
`;