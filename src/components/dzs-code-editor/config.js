/**语言管理*/
export const language = ['java', 'c_cpp', 'javascript', 'golang','mysql','php'];
/**主题管理*/
export const theme = ['xcode', 'eclipse', 'monokai', 'cobalt'];
// tabs
export const tabs = [2, 4, 8]
// 字体大小
export const fontSizes = [14, 15, 16, 17, 18, 19, 20, 21, 22];

// 编辑器选项
export const moreOptions = {
    tabSize: 4, // tab默认大小
    showPrintMargin: true, // 去除编辑器里的竖线
    fontSize: 18, // 字体大小
    highlightActiveLine: true, // 高亮配置
    enableBasicAutocompletion: true, //启用基本自动完成
    enableSnippets: true, // 启用代码段
    scrollPastEnd: true, // 滚动位置
    showLineNumbers: true, // 显示行号
}

/**菜单管理*/
export const menuList = [
    {
        name : "主题",
        children : theme
    },
    {
        name : "字体大小",
        children : fontSizes
    },
    {
        name : "tab栏",
        children : tabs
    },
    {
        name : "编辑语音",
        children : language
    }
]