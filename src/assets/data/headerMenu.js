/**顶部菜单配置*/
export default [
    {
        title: "首页",
        path: "/",
        children: []
    },
    {
        title: "我的项目",
        path: "",
        children: [
            {
                title: "基于nodejs的博客后台",
                path: "https://gitee.com/zsduan/blog_node.git"
            },
            {
                title: "基于nuxt.js的博客页面",
                path: "https://gitee.com/zsduan/blog_show.git"
            },
            {
                title: "基于react的博客页面(已废弃)",
                path: "https://gitee.com/zsduan/blog_show/tree/react/"
            },
            {
                title: "博客页面小程序(ts版本)",
                path: "https://gitee.com/zsduan/blog_show/tree/mp/"
            },
            {
                title: "基于vue2的博客后台管理系统",
                path: "https://gitee.com/zsduan/my_blog.git"
            },
            {
                title: "个人总结(源码)",
                path: "https://github.com/zsduan/zsduan-summary"
            }
        ]
    },
    {
        title: "关于我",
        path: "https://anran233.com/aboutme",
        children: []
    },
    {
        title: "更多链接",
        path: "",
        children: [
            {
                title: "个人博客",
                path: "https://anran233.com"
            },
            {
                title : "面试题",
                path : "https://www.html5iq.com/5fe8029ca1fe3d72b82e0b45.html"
            }
        ]
    }
]