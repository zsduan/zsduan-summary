export const code1 = `
import copy from "@/tool/copy";

// 方式一
copy({
    text : "需要复制的文本",
    success : ()=>{
        // do something
    }
});

// 方式二
copy("需要复制的文本");
`;

export const code2 = `
import copy from "@/tool/copy";

copy({
    text : "需要复制的html",
    type : "html",
    success : ()=>{
        // do something
    }
});
`;

export const code3 = `
import copy from "@/tool/copy";
copy({
    text : "需要复制的url地址",
    type : "image",
    success : ()=>{
        // do something
    }
});
`;
