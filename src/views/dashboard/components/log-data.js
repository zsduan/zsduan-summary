

export default [
    {
        version : "3.1.4",
        date : "2025-11-4",
        log : [
            "修复上传文件、上传图片在文件名称为多个点(.)时 校验失败的bug 优化文件格式虚无提示",
            {
                tips : "新增ip地址输入框组件 支持用点(.)切换到下一个输入框/输入3个字符后，会自动跳转到下一个输入框",
                links : [
                    '/dzs-ip-input'
                ]
            },
            "修复了其他已知bug"
        ]
    },
    {
        version : "3.1.3",
        date : "2025-9-22",
        log : [
            "表单搜索组件新增 点击回车提交",
            {
                tips : "弹窗组件新增 可以设置标题栏颜色、标题字体颜色",
                links : [
                    '/dzs-dialog#设置标题栏颜色与标题字体颜色'
                ]
            },
            {
                tips : "弹窗组件新增 可以设置高度，设置高度后会设置设置 overflow-y: hidden;",
                links : [
                    '/dzs-dialog#设置高度'
                ]
            },
        ]
    },
    {
        version : "3.1.2",
        date : "2025-9-12",
        log : [
            "修复上传文件组件的时候删除文件时，不同步的bug",
            "新增上传文件组件自定义上传中 新增删除文件功能 (file , success , delete)=>{} ,使用 delete(file.fileIndex)"
        ]
    },
    {
        version : "3.1.1",
        date : "2025-07-30",
        log : [
            "修复搜索表单组件/表单组件 在switch/checkbox/select(多选)状态下没传值时，会无法赋值的bug",
        ]
    },
    {
        version : "3.1.1",
        date : "2025-07-30",
        log : [
            {
                tips : "markdown文档新增 预览功能",
                links : [
                    '/dzs-markdown#预览使用'
                ]
            },
            {
                tips : "markdown文档新增 流式读取功能",
                links : [
                    '/dzs-markdown#支持大模型流式读取'
                ]
            },
            {
                tips : "markdown文档新增 很多配置项",
                links : [
                    '/dzs-markdown#参数说明'
                ]
            },
            {
                tips : "表单组件新增 markdown 编辑器",
                links : [
                    '/dzs-form#PC端'
                ]
            },
        ]
    },
    {
        version : "3.1.0",
        date : "2025-07-15",
        log : [
            {
                tips : "新增 上传文件组件支持button属性",
                links : [
                    '/dzs-upload-file'
                ]
            },
            {
                tips : "新增 上传文件组件支持是否显示提示",
                links : [
                    '/dzs-upload-file'
                ]
            },
            {
                tips : "修复 上传文件组件在自定义上传 limit=1时，多次上传不报错的bug",
                links : [
                    '/dzs-upload-file'
                ]
            },
            {
                tips : "新增下拉刷新和上拉加载组件",
                links : [
                    '/dzs-pull-to-refresh'
                ]
            },
        ]
    },
    {
        version : "3.0.1",
        date : "2025-05-09",
        log : [
            "新增 表单组件 清空表单数据新增可以执行函数 且可以异步执行",
        ]
    },
    {
        version : "3.0.9",
        date : "2025-03-28",
        log : [
            {
                tips : "基础版仿抖音组件上线",
                links : [
                    '/dzs-douyin'
                ]
            },
            {
                tips : "新增文章列表组件",
                links : [
                    '/dzs-article-item'
                ]
            },
            {
                tips : "新增按钮组件",
                links : [
                    '/dzs-button'
                ]
            },
            "后台四件套/表单组件/表单搜索组件更换按钮组件",
            "新版深度复制更新了,对正则表达式/时间复制进行了修复"
        ]
    },
    {
        version : "3.0.8",
        date : "2025-02-24",
        log : [
            {
                tips : "表格组件 新增 operationWidth 控制操作栏的宽度",
                links : [
                    '/dzs-table#参数说明'
                ]
            },
            "修复 表单组件、表格组件、表单搜索组件 对正则表达式和时间处理失败的bug",
            {
                tips : "新增 postman 组件 可以直接进行 请求 目前只支持 query 和 json参数",
                links : [
                    '/postman'
                ]
            },
        ]
    },
    {
        version : "3.0.7",
        date : "2025-02-13",
        log : [
            "支持移动端展示啦",
        ]
    },
    {
        version : "3.0.6",
        date : "2025-02-12",
        log : [
            "表单组件新增可以复制原生组件的值",
            "表单组件修复当type为number时，一直赋值失败的bug",
            "新增目录 可以点击目录直接跳转 也可以直接分享"
        ]
    },
    {
        version : "3.0.5",
        date : "2024-12-24",
        log : [
            "头部表单组件新增 slot 插槽",
            "表单组件新增 slot 默认插槽 form-header 具名插槽",
            "上传文件/图片组件 新增 uploadFun 属性 可以自定义上传方法",
            "修复日期转农历 农历年跨年不对的bug"
        ]
    },
    {
        version : "3.0.4",
        date : "2024-10-31",
        log : [
            "修复表单组件在v-model下 有更多值不会携带出来的bug",
        ]
    },
    {
        version : "3.0.3",
        date : "2024-10-16",
        log : [
            "修复表单组件在v-model小概率赋值失败的bug",
            "优化表单组件/表单组件的参数提示",
            "修复表单组织某些情况下下拉框、多选框、单选框value值相同时报key不是唯一值的bug"
        ]
    },
    {
        version : "3.0.2",
        date : "2024-09-10",
        log : [
            "修复搜索表单组件/表单组件在v-model多层级(xx.xx.xx)赋值失败的bug",
            "参数提示表格对参数类型进行了优化处理"
        ]
    },
    {
        version : "3.0.1",
        date : "2024-08-12",
        log : [
            "修复搜索表单组件/表单组件没填写props报错的bug",
            "修复代码编辑器不能输入的bug",
            "新增后台代码四件套 地址 /four-sets",
            "优化了 富文本编辑器 在后端插入sql时单引号出现的bug"
        ]
    },
    {
        version : "3.0.0",
        date : "2024-08-06",
        log : [
            "全新版本上线了",
            "新增代码编辑器组件",
            "新增文件上传组件、图片上传组件",
            "文档预览新增ppt、txt",
            "删除了拖动示例",
            "搜索更改了 请用ctrl+k进行搜索",
            "优化了暂开指令 修复了部分失效的bug",
            "修复了部分bug"
        ]
    },
]