<template>
    <div v-bind="fullScreenParentProps">
        <ul class="dzs-code-header-box" v-if="showMenu">
            <li>
                <div>编辑</div>
                <ol class="hidden-scrollbar" :style="{ 'max-height': codeHight }">
                    <li @click="copy">复制</li>
                    <li @click="openSearch">
                        <span>搜索</span>
                        <span>Ctrl + F</span>
                    </li>
                </ol>
            </li>
            <li>
                <div>主题</div>
                <ol class="hidden-scrollbar" :style="{ 'max-height': codeHight }">
                    <li v-for="(item, index) in themeList" :key="index" @click="changeTheme(item, index)">
                        <span>{{ item.label }}</span>
                        <i class="el-icon-check" v-if="item.cheked"></i>
                    </li>
                </ol>
            </li>
            <li>
                <div>语言选择</div>
                <ol class="hidden-scrollbar" :style="{ 'max-height': codeHight }">
                    <li v-for="(item, index) in languageList" :key="index" @click="changeLanguage(item, index)">
                        <span>{{ item.label }}</span>
                        <i class="el-icon-check" v-if="item.value.toLowerCase() == mode.toLowerCase()"></i>
                    </li>
                </ol>
            </li>
            <li>
                <div>更多工具</div>
                <ol class="hidden-scrollbar" :style="{ 'max-height': codeHight }">
                    <li @click="() => fullCoder = !fullCoder">
                        <span>全屏</span>
                        <i class="el-icon-check" v-if="fullCoder"></i>
                    </li>
                </ol>
            </li>
        </ul>
        <div class="code-editor-cust full-screen-child">
            <textarea ref="textarea"></textarea>
            <span @click="nullTipClick" class="null-tip" :class="{ 'null-tip-hidden': hasCode }" :style="nullTipStyle">
                {{ placeholderShow }}
            </span>
            <div class="code-editor-cust-footer">当前语言 {{ mode }}</div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">

/**
 * 代码编辑器组件
 * @author zs.duan
 * @date 2024-07-26
 * @props {string} value 绑定的值
 * @props {string} language 语言类型
 * @props {string} placeholder 占位符
 * @props {string} zIndex 全屏后的z-index
 * @props {string} autoHeight 是否自动高度
 * @props {string} height 不自适应高度的情况下生效的固定高度
 * @props {object} editorOptions 编辑器配置
 * @props {boolean} showMenu 是否显示菜单
 * @methods {function}copy 复制
 * */ 

import copy from "../../tool/copy";
// 引入全局实例
import _CodeMirror from 'codemirror'

// 核心样式
import 'codemirror/lib/codemirror.css'
// 引入主题后还需要在 options 中指定主题才会生效 darcula  gruvbox-dark hopscotch  monokai
import 'codemirror/theme/panda-syntax.css'; // 熊猫主题
import 'codemirror/theme/erlang-dark.css';  // 爱尔兰黑主题
import 'codemirror/theme/juejin.css'; //掘金主题
import 'codemirror/theme/paraiso-dark.css'; // 天堂黑主题
import 'codemirror/theme/xq-light.css'; // xq-白天主题
import 'codemirror/theme/xq-dark.css'; // xq-黑夜主题
import 'codemirror/theme/3024-night.css'; // 3024-黑夜主题
import 'codemirror/theme/3024-day.css'; // 3024-白天主题
import 'codemirror/theme/duotone-dark.css'; // 浓妆黑
import 'codemirror/theme/duotone-light.css'; // 浓妆白


//提示css
import "codemirror/addon/hint/show-hint.css";

// 提示js
import "codemirror/addon/hint/show-hint.js";
import "codemirror/addon/hint/javascript-hint.js";
import "codemirror/addon/hint/sql-hint.js";
import "codemirror/addon/hint/xml-hint.js";
import "codemirror/addon/hint/anyword-hint.js";
import "codemirror/addon/hint/css-hint.js";
import "codemirror/addon/hint/html-hint.js";

// 但 vue 貌似没有无法在实例初始化后再动态加载对应 JS ，所以此处才把对应的 JS 提前引入
import 'codemirror/mode/javascript/javascript.js'
import 'codemirror/mode/css/css.js'
import 'codemirror/mode/xml/xml.js'
import 'codemirror/mode/clike/clike.js'
import 'codemirror/mode/markdown/markdown.js'
import 'codemirror/mode/python/python.js'
import 'codemirror/mode/r/r.js'
import 'codemirror/mode/shell/shell.js'
import 'codemirror/mode/sql/sql.js'
import 'codemirror/mode/swift/swift.js'
import 'codemirror/mode/vue/vue.js'

// 折叠
import 'codemirror/addon/fold/foldgutter.css'
import 'codemirror/addon/fold/foldcode'
import 'codemirror/addon/fold/foldgutter'
import 'codemirror/addon/fold/brace-fold'
import 'codemirror/addon/fold/comment-fold'

// 搜索
import 'codemirror/addon/scroll/annotatescrollbar.js'
import 'codemirror/addon/search/matchesonscrollbar.js'
import 'codemirror/addon/search/match-highlighter.js'
import 'codemirror/addon/search/jump-to-line.js'

import 'codemirror/addon/dialog/dialog.js'
import 'codemirror/addon/dialog/dialog.css'
import 'codemirror/addon/search/searchcursor.js'
import 'codemirror/addon/search/search.js'

// 尝试获取全局实例
const CodeMirror = window.CodeMirror || _CodeMirror

import { themeList, languageList } from "./config";
export default {
    name: 'dzsCode',
    model:{
        prop: 'value',
        event: 'input'
    },
    props: {
        // 外部传入的内容，用于实现双向绑定
        value: {
            type: String,
            default: ''
        },
        // 外部传入的语法类型
        language: {
            type: String,
            default: "javascript"
        },
        placeholder: {
            type: String,
            default: null
        },
        // 全屏以后的z-index
        zIndex: {
            type: [Number, String],
            default: 999
        },
        autoHeight: {
            type: [String, Boolean],
            default: true
        },
        // 不自适应高度的情况下生效的固定高度
        height: {
            type: Number,
            default: 0
        },
        editorOptions: {
            type: Object,
            default: () => { }
        },
        /**是否显示菜单*/
        showMenu: {
            type: Boolean,
            default: true
        },
        /**是否开启提示*/ 
        showHint: {
            type: Boolean,
            default: false
        },
    },
    data() {
        return {
            code: '',
            hasCode: false,
            mode: 'javascript', // 默认的语法类型
            coder: null,// 编辑器实例
            // 默认配置
            options: {
                // 缩进格式
                tabSize: 4,
                indentUnit: 2, // 一个块应该缩进多少个空格（无论这在编辑语言中意味着什么）。默认值为 2。
                theme: 'panda-syntax',
                line: true,
                smartIndent: true, //自动缩进
                lineWrapping: true, // 自动换行
                readOnly: false, // 只读
                lineNumbers: true, // 是否显示行号
                styleActiveLine: true, // 高亮选中行
                showCursorWhenSelecting: true, // 当选择处于活动状态时是否应绘制游标
                matchBrackets: true, // 括号匹配高亮  
                extraKeys: { 'Ctrl': 'autocomplete', },//自定义快捷键
                hintOptions: {
                    tables: {
                        users: ['name', 'score', 'birthDate'],
                        countries: ['name', 'population', 'size']
                    },
                    completeSingle: false
                },
                foldGutter: true, // 折叠
                gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter', 'CodeMirror-lint-markers'],
            },
            fontSize: "18px",
            // 支持切换的语法高亮类型，对应 JS 已经提前引入
            // code 编辑器 是否全屏
            fullCoder: false,
            themeList: themeList,
            languageList: languageList,
            codeHight: '0px',
            codeId: "dzsCode" + new Date().getTime(),
        }
    },
    watch: {
        value:{
            handler(val) {
                this.setCodeContent(val);
            },
            deep: true,
            immediate : true
        },
        language: {
            immediate: true,
            handler(language) {
                this._getCoder().then(() => {
                    // 尝试从父容器获取语法类型
                    if (language) {
                        // 获取具体的语法类型对象
                        let modeObj = this._getLanguage(language)
                        // 判断父容器传入的语法是否被支持
                        if (modeObj) {
                            this.mode = modeObj.label
                            this.coder.setOption('mode', `text/${modeObj.value}`)
                        }
                    }
                })
            }
        }
    },
    computed: {
        placeholderShow() {
            if (this.placeholder == null) {
                return `请在此输入代码`
            } else {
                return this.placeholder
            }
        },
        nullTipStyle() {
            if (this.options.lineNumbers) {
                return { left: '46px' }
            } else {
                return { left: '12px' }
            }
        },
        // coder 配置
        coderOptions() {
            return Object.assign(this.options, this.editorOptions)
        },
        isAutoHeight() {
            let { autoHeight } = this;
            if (this.height > 0) return false;
            autoHeight = true;
            return autoHeight;
        },
        fullScreenParentProps() {
            let props = {
                class: {
                    'full-screen-parent': true,
                    'full-screen': this.fullCoder,
                    'auto-height': this.isAutoHeight,
                },
                id: this.codeId,
                style: {}
            }
            if (this.fullCoder) {
                props.style['z-index'] = this.zIndex
            }
            if (!this.isAutoHeight && !this.fullCoder) {
                props.style['height'] = this.height + 'px'
            }
            return props
        }
    },
    mounted() {
        this._initialize();
    },
    methods: {
        /**初始化*/
        _initialize() {
            // 初始化编辑器实例，传入需要被实例化的文本域对象和默认配置
            this.coder = CodeMirror.fromTextArea(this.$refs.textarea, {
                ...this.coderOptions,
            })
            // 编辑器赋值
            if (this.value || this.code) {
                this.hasCode = true
                this.setCodeContent(this.value || this.code)
            } else {
                this.coder.setValue('')
                this.hasCode = false
            }
            // 支持双向绑定
            this.coder.on('change', (coder) => {
                this.code = coder.getValue()
                if (this.code) {
                    this.hasCode = true
                } else {
                    this.hasCode = false
                }
                if (this.$emit) {
                    this.$emit('input', this.code)
                }
            })
            this.coder.on('focus', () => {
                this.hasCode = true
            })
            this.coder.on('blur', () => {
                if (this.code) {
                    this.hasCode = true
                } else {
                    this.hasCode = false
                }
            })

            this.coder.on('cursorActivity', () => {
                this.showHint && this.coder.showHint()
            })

            //获取编辑框的高度
            const resizeObserver = new ResizeObserver(entries => {
                for (let entry of entries) {
                    const { height } = entry.contentRect;
                    this.codeHight = (height - 35) + 'px';
                }
            })
            resizeObserver.observe(document.querySelector(`#${this.codeId}`));
        },
        setCodeContent(val) {
            setTimeout(() => {
                if (!val) {
                    this.coder.setValue('')
                } else {
                    this.coder.setValue(val)
                }
            }, 300)
        },
        /**获取当前语法类型*/ 
        _getLanguage(language) {
            // 在支持的语法类型列表中寻找传入的语法类型
            return this.languageList.find((mode) => {
                // 所有的值都忽略大小写，方便比较
                let currentLanguage = language.toLowerCase()
                let currentLabel = mode.label.toLowerCase()
                let currentValue = mode.value.toLowerCase()

                // 由于真实值可能不规范，例如 java 的真实值是 x-java ，所以讲 value 和 label 同时和传入语法进行比较
                return currentLabel === currentLanguage || currentValue === currentLanguage
            })
        },
        _getCoder() {
            let _this = this
            return new Promise((resolve) => {
                (function get() {
                    if (_this.coder) {
                        resolve(_this.coder)
                    } else {
                        setTimeout(get, 10)
                    }
                })()
            })
        },
        /**更改模式*/ 
        changeMode(val) {
            // 修改编辑器的语法配置
            this.coder.setOption('mode', `text/${val}`)
            // 获取修改后的语法
            let label = this._getLanguage(val).label.toLowerCase()

            // 允许父容器通过以下函数监听当前的语法值
            this.$emit('language-change', label)
        },
        nullTipClick() {
            this.coder.focus()
        },
        /**
         * 改变主题
         * @param {Object} item 模式对象
         * @param {Number} index 模式索引
         * */
        changeTheme(item, index) {
            this.coder.setOption('theme', item.value);
            this.themeList.forEach(item => {
                item.cheked = false;
            })
            this.themeList[index].cheked = true;
        },
        /**改变语言*/
        changeLanguage(item, index) {
            this.changeMode(item.value);
            this.mode = item.value;
        },
        /**打开搜索*/
        openSearch() {
            if (!this.hasCode) {
                this.$message({
                    message: '请先输入内容',
                    type: 'warning'
                });
                return;
            }
            this.coder.execCommand('find') //触发
        },
        /**复制*/
        copy() {
            if (!this.hasCode) return;
            copy(this.code)
        }
    }
}
</script>

<style lang="scss">
.dzs-code-header-box {
    display: flex;
    background-color: #59595a;
    padding: 2px;

    >li {
        font-size: 16px;
        padding: 4px 10px;
        color: #fff;
        user-select: none;
        cursor: pointer;
        position: relative;

        &:hover {
            background-color: rgba(0, 0, 0, 0.2);

            ol {
                display: block;
            }
        }
    }

    ol {
        position: absolute;
        display: none;
        width: 120px;
        z-index: 9999;
        background-color: #fff;
        color: #59595a;
        border-radius: 4px;
        box-shadow: 0 0 12px 0 rgba(46, 72, 233, 0.2);
        left: 0;
        overflow-y: auto;

        li {
            padding: 5px 8px;
            display: flex;
            align-items: center;
            justify-content: space-between;

            &:hover {
                background-color: rgba(0, 0, 0, 0.5);
                color: #fff;
            }
        }
    }
}

.code-editor-cust {
    flex-grow: 1;
    display: flex;
    position: relative;
    height: 100%;

    .CodeMirror {
        flex-grow: 1;
        z-index: 1;

        .CodeMirror-code {
            // line-height: 24px;
            font-size: v-bind(fontSize);

            span {
                font-size: v-bind(fontSize);
            }
        }

        .CodeMirror-linenumber {
            font-size: v-bind(fontSize);
        }
    }

    .code-mode-select {
        position: absolute;
        z-index: 2;
        right: 10px;
        top: 10px;
        max-width: 130px;
    }

    .CodeMirror {
        height: auto;
        min-height: 100%;
    }

    .null-tip {
        position: absolute;
        top: 4px;
        left: 36px;
        z-index: 10;
        color: #e0dfdf;
        line-height: initial;
        font-size: v-bind(fontSize);
    }

    .null-tip-hidden {
        display: none;
    }

    .code-editor-cust-footer {
        position: absolute;
        bottom: 3px;
        right: 5px;
        z-index: 999;
        color: #e0dfdf;
    }

    /**选中样式偶然出现高度不够的情况*/
    // .CodeMirror-selected {
    //     min-height: 24px !important;
    // }
}

/* 全屏样式 */
.full-screen-parent {
    position: relative;

    .full-screen-icon {
        opacity: 0;
        color: black;
        width: 20px;
        height: 20px;
        line-height: 24px;
        background-color: white;
        position: absolute;
        top: 2px;
        right: 2px;
        z-index: 9;
        cursor: pointer;
        transition: opacity 0.3s;
    }

    &:hover {
        .full-screen-icon {
            opacity: 1;

            &:hover {
                background-color: rgba(255, 255, 255, 0.88);
            }
        }
    }

    &.full-screen {
        position: fixed;
        top: 10px;
        left: 10px;
        width: calc(100% - 20px);
        height: calc(100% - 20px);
        padding: 10px;
        background-color: #f5f5f5;

        .full-screen-icon {
            top: 12px;
            right: 12px;
        }

        .full-screen-child {
            height: calc(100% - 35px);
            max-height: 100%;
            min-height: 100%;
        }
    }

    .full-screen-child {
        height: calc(100% - 35px);
    }

    &.auto-height {
        .full-screen-child {
            min-height: 150px;
            max-height: 320px;
            height: unset;
            overflow: hidden;
        }

        &.full-screen .full-screen-child {
            height: calc(100% - 35px);
            max-height: 100%;
            min-height: 100%;
        }
    }

}
</style>