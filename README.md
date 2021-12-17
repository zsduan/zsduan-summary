# 文档说明


## 目录


	├──assets
	│    ├──css
	│    ├──data
	│    ├──icon
	│    └──images
	│
	│──common  //公共文件
	│    ├──cookie.js
	│    └──encryp.js //对称加解密
	│
	│──components //组件
	│    ├──details  //信息详情
	│    ├──editor  //富文本
	│    ├──header //搜索
	│    ├──home-header //公共头部
	│    ├──my-popup //弹窗
	│    ├──slider //侧边栏
	│    └──tableList //表格
	│
	│── request //封装请求
	│    ├──api.js  //请求的api
	│    └──request.js
	│
	│── router // 路由
	│    
	│── store // 公共store
	│
	│── util // 公共处理事件
	│
	│── views //页面
	│    └──modulePage
	│    │     ├──config.js  //配置文件 
	│    │     └──xx.vue  //页面
	│    │ 
	│    │── Home.vue // 首页
	│    └── login.vue  //登录
	│
	│── subMenu.json  //路由与侧边栏原始文件
	│
	└── App.vue //主要入口

## 动态路由说明

subMenu.json 是初始化的动态路由，主要是通过角色判断后端返回进行的 具体逻辑见router>setRoute.js


## 所有组件的使用均在组件里面有标注


## view 配置文件说明
```JavaScript
//表格配置
export const TABALE_HEADER = [{
		lable: "", //表格 表头
		key: "", //表格 数据 
		width:"", //表格 宽度 非必填
		color : "" , //表格文字颜色 里面color关键字和key一个用法，
	},
]

// 表格操作配置 不同的位置显示不同 可以不写
export const OPERATION = [
	"details",
	"del",
	"add"
]

// 顶部搜索

export const HEADER_LIST = [{
		type: "", //输入框类型 select input time
		lable: "", //输入框标题
		key: "", //输入框 返回对象名称
		value: "", //输入框的值
		list: [] //select列表值
	},
]


// 搜索顶部配置 true 开启  false 关闭 不写 默认关闭
export const OPERATION_HEADER = {
	is_search: true, 
	is_reset: true,
	is_add : true , 
}


```

## 请求说明

见 request.js 


## 关于加密 

用户敏感信息全部加密，encryp.js 已挂在全局  传入类型为string




