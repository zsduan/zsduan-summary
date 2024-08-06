export const code1 = `
import groupOrSort from "@/tool/groupOrSort.js";
const list = [
    {
        age: 18,
        name: "张三"
    },
    {
        age: 16,
        name: "李四"
    },
    {
        age: 17,
        name: "王五"
    },
    {
        age: 17,
        name: "赵六"
    },
],

// 方式一
const sortList = groupOrSort({
    list: list,
    order: 'desc',
    key: "age"
});

// 方式二
groupOrSort({
    list: list,
    order: 'desc',
    key: "age",
    success: (res) => {
        // do something
    }
});
`;

export const code2 = `
import groupOrSort from "@/tool/groupOrSort.js";
const list = [
    {
        age: 18,
        name: "张三"
    },
    {
        age: 16,
        name: "李四"
    },
    {
        age: 17,
        name: "王五"
    },
    {
        age: 17,
        name: "赵六"
    },
],

// 方式一
const groupList = groupOrSort({
    list: list,
    type: 'group',
    key: "age"
});

// 方式二
groupOrSort({
    list: list,
    type: 'group',
    key: "age",
    success: (res) => {
        // do something
    }
});
`;
