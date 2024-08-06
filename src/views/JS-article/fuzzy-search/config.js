export const code1 = `
import Search from "@/tool/fuzzySearch";

// 方式一
const searchResult = Search({
    data : ["重庆","北京","天津","上海","上岸"],
    value : "重",
})

// 方式二
Search({
    data : ["重庆","北京","天津","上海","上岸"],
    value : "重",
    success : (res) => {
        console.log(res);
    }
})
`;

export const code2 = `
import Search from "@/tool/fuzzySearch";
// 方式一
const searchResult = Search({
    data : [
        {
            name : "重庆",
            pinyin : "chongqing"
        },
        {
            name : "北京",
            pinyin : "beijing"
        },
        {
            name : "天津",
            pinyin : "tianjin"
        },
        {
            name : "上海",
            pinyin : "shanghai"
        },
    ],
    value : "beijing",
    key : "pinyin"
})

// 方式二
Search({
    data : [
        {
            name : "重庆",
            pinyin : "chongqing"
        },
        {
            name : "北京",
            pinyin : "beijing"
        },
        {
            name : "天津",
            pinyin : "tianjin"
        },
        {
            name : "上海",
            pinyin : "shanghai"
        },
    ],
    value : "北京",
    key : "name",
    success : (res) => {
        console.log(res);
    }
})
`;

export const code3 = `
import Search from "@/tool/fuzzySearch";
// 方式一
const searchResult = Search({
    data : [
        {
            name : "重庆",
            pinyin : "chongqing",
            children : [
                {
                    name : "渝中",
                    pinyin : "yuzhong",
                    children : [
                        {
                            name : "桂花园街道",
                            pinyin : "guihuayuan"
                        },
                    ]
                },
                {
                    name : "渝北",
                    pinyin : "yubei"
                },
            ],
        },
        {
            name : "北京",
            pinyin : "beijing",
            children : [
                {
                    name : "朝阳",
                    pinyin : "chaoyang"
                },
                {
                    name : "海淀",
                    pinyin : "haidian"
                },
            ],
        },
    ],
    value : "桂花园",
    key : "name",
    children : "children"
})

// 方式二
Search({
    data : [
        {
            name : "重庆",
            pinyin : "chongqing",
            children : [
                {
                    name : "渝中",
                    pinyin : "yuzhong",
                    children : [
                        {
                            name : "桂花园街道",
                            pinyin : "guihuayuan"
                        },
                    ]
                },
                {
                    name : "渝北",
                    pinyin : "yubei"
                },
            ],
        },
        {
            name : "北京",
            pinyin : "beijing",
            children : [
                {
                    name : "朝阳",
                    pinyin : "chaoyang"
                },
                {
                    name : "海淀",
                    pinyin : "haidian"
                },
            ],
        },
    ],
    value : "guihuayuan",
    key : "pinyin",
    children : "children",
    success : (res) => {
        console.log(res);
    }
})

`

