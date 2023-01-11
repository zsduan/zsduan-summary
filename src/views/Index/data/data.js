/*
 * @Author: zs.duan
 * @Date: 2023-01-11 11:42:30
 * @LastEditors: zs.duan
 * @LastEditTime: 2023-01-11 17:09:16
 * @FilePath: \vue2+js+eui+template\src\views\Index\data\data.js
 */
const MenuList = [
    {
        menu : "首页",
        herf : "./index",
        list : []
    },
    {
        menu : "我的项目",
        list : [
            {
                menu : "博客后台 基于node",
                herf : "https://gitee.com/zsduan/blog_node.git"
            },
            {
                menu : "博客展示 基于react",
                herf : "https://gitee.com/zsduan/blog_show.git"
            },
            {
                menu : "博客后台管理系统 基于vue",
                herf : "https://gitee.com/zsduan/my_blog.git"
            }
        ]
    },
    {
        menu : "切换旧版",
        list : [],
        herf : "/old-index",
    }
]


const asideList = [
    {
        name : "组件篇(基于饿了吗ui)",
        key : "componentsList"
    },
    {
        name : "js篇",
        key : "jsList"
    },
    {
        name : "动效/页面效果",
        key : "effectList"
    },
    {
        name : "好用的js片段",
        key : "fragmentList"
    },
];


export const data = {
    MenuList : MenuList,
    asideList : asideList
}