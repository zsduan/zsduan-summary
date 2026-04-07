export const code1 = `
// main.js
import Vue from 'vue';
import VersionControl from './your-path/version-control.js';
Vue.use(VersionControl, {
    currentVersion: '1.0.0',
    suffixRules: [
        { name: 'dev', isHide: true , desc : '开发环境' },
        { name: 'bate', isHide: true , desc : '测试环境' },
        { name: 'alpha', isHide: false , desc : '预发布环境' },
    ],
    debug: true , // 选填 默认false 开启后输出日志
});

// xx.vue
<div v-version="'0.9.0'">xx</div> // 0.9.0版本 显示
<div v-version="'1.0.0'">xx</div> // 1.0.0版本 显示
<div v-version="'1.0.1'">xx</div> // 1.0.1版本 不显示
<div v-version="'0.0.1.dev'">xx</div> // 0.0.1.dev版本 不显示
<div v-version="'0.0.1.bate'">xx</div> // 0.0.1.bate版本 不显示
<div v-version="'0.0.1.alpha'">xx</div> // 0.0.1.alpha版本 显示
`

export const code2 = `
// main.js
import { createApp } from 'vue';
import App from './App.vue';
import VersionControl from './your-path/version-control.js';
const app = CreateApp(App);
app.use(VersionControl, {
    currentVersion: '1.0.0',
    suffixRules: [
        { name: 'dev', isHide: true , desc : '开发环境' },
        { name: 'bate', isHide: true , desc : '测试环境' },
        { name: 'alpha', isHide: false , desc : '预发布环境' },
    ],
    debug: true,// 选填 默认false
})

// xx.vue
<div v-version="'0.9.0'">xx</div> // 0.9.0版本 显示
<div v-version="'1.0.0'">xx</div> // 1.0.0版本 显示
<div v-version="'1.0.1'">xx</div> // 1.0.1版本 不显示
`


export const code3 = `
// xx.html
<script src="./your-path/version-control.js"></script>

<script>
    VersionControl.initNative({
        currentVersion: '1.0.0',
        suffixRules: [
            { name: 'dev', isHide: true , desc : '开发环境' },
            { name: 'bate', isHide: true , desc : '测试环境' },
            { name: 'alpha', isHide: false , desc : '预发布环境' },
        ],
        debug: true , // 选填 默认false
    })
</script>

<div data-version="0.9.0">xx</div> // 0.9.0版本 显示
<div data-version="1.0.0">xx</div> // 1.0.0版本 显示
<div data-version="1.0.1">xx</div> // 1.0.1版本 不显示
`

export const code4 = `
// xx.html 开始调试模式
<script src="./your-path/version-control.js"></script>

<script>
    VersionControl.initNative({
        currentVersion: '1.0.0',
        suffixRules: [
            { name: 'dev', isHide: true , desc : '开发环境' },
            { name: 'bate', isHide: true , desc : '测试环境' },
            { name: 'alpha', isHide: false , desc : '预发布环境' },
        ],
        debug: true, // 选填 默认false
        isDev : true , // 选填 在开发环境下 显示所有版本
    })
</script>

<div data-version="0.9.0">xx</div> // 0.9.0版本 显示
<div data-version="1.0.0">xx</div> // 1.0.0版本 显示
<div data-version="1.0.1">xx</div> // 1.0.1版本 显示
`