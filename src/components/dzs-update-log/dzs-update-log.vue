<template>
    <div class="update-log">
        <h1>版本更新日志</h1>
        <div class="item">
            <div class="header-box">
                <h2>版本号 v2.1.0</h2>
                <div class="time">2024-1-24</div>
            </div>
            <div class="content">
                <p>1. 新增vue-office</p>
                <p>2. 优化读取excel文件 支持 导出 cvs xls xlsx</p>
                <p>3. 修复了其他一只bug</p>
            </div>
        </div>
        <div class="item">
            <div class="header-box">
                <h2>版本号 v2.0.36</h2>
                <div class="time">2023-12-01</div>
            </div>
            <div class="content">
                <p>1. 新增排序和分组/?type=/group-sorting</p>
                <p>2. 修复了左边菜单栏刷新后没有滚动到响应的bug</p>
                <p>3. 车牌号输入新增点击效果</p>
            </div>
        </div>
        <div class="item">
            <div class="header-box">
                <h2>版本号 v2.0.35</h2>
                <div class="time">2023-11-21</div>
            </div>
            <div class="content">
                <p>1. 表单组件 input可以和官方一样自定义组件了</p>
                <p>2. 表单组件 新增时间(time)组件</p>
                <p>3. 表单组件 修复分割线还显示12px的提示</p>
            </div>
        </div>
        <div class="item">
            <div class="header-box">
                <h2>版本号 v2.0.34</h2>
                <div class="time">2023-11-7</div>
            </div>
            <div class="content">
                <p>1. 表单组件 新增可以上传文件了</p>
                <p>2. 表单组件 新增可以formData类型了</p>
                <p>3. 新增上传文件组件 dzs-upload-file</p>
                <p>4. 设置时间可用新版啦 新版支持Promise 取消了直接return 但是可以用 await支持</p>
                <P>5. 消息通知栏组件 优化了自定义图标 只发送事件closeClick 不关闭 新增closeNoticeBar 可以用ref调用</P>
            </div>
        </div>
        <div class="item">
            <div class="header-box">
                <h2>版本号 v2.0.35</h2>
                <div class="time">2023-07-26</div>
            </div>
            <div class="content">
                <p>1. 弹窗组件 新增两个功能 showFullscreen 是否显示全屏按钮 fullscreen 直接全屏</p>
                <p>2. 表格组件 高度可以传string类型了</p>
                <p>3. 表格组件 可以拉取原生方法了</p>
                <p>4. 表格组件 可以控制侧边栏是否显示</p>
                <p>5. 新增 消息通知栏组件 ?type=%2Fnotice-bar</p>
            </div>
        </div>
        <div class="item">
            <div class="header-box">
                <h2>版本号 v2.0.34</h2>
                <div class="time">2023-07-18</div>
            </div>
            <div class="content">
                <p>1. 新增了水印js 可以添加水印了 ?type=%2Fwatermark</p>
                <p>2. 新增了上传和下载的js 可以监听进度</p>
            </div>
        </div>
        <div class="item">
            <div class="header-box">
                <h2>版本号 v2.0.33</h2>
                <div class="time">2023-07-14</div>
            </div>
            <div class="content">
                <p>1. 新增了可以拖动弹窗组件啦，弹窗组件可以点击放大缩小啦</p>
            </div>
        </div>
        <div class="item">
            <div class="header-box">
                <h2>版本号 v2.0.32</h2>
                <div class="time">2023-06-02</div>
            </div>
            <div class="content">
                <p>1. 修复了一些bug</p>
                <p>2. 顶部表单组件/表单组件 修复了 在多选框出现问题的bug</p>
                <p>3. 顶部表单组件/表单组件 修复了 部分时候无法重新赋值的bug</p>
                <p>5. 优化读入xlsx的option的读取</p>
                <p>4. 新增一些好用的js</p>
            </div>
        </div>
        <div class="item">
            <div class="header-box">
                <h2>版本号 v2.0.31</h2>
                <div class="time">2023-05-10</div>
            </div>
            <div class="content">
                <p>1. 修复了一些bug</p>
                <p>2. 顶部表单组件 修复了 手机端显示出现bug的问题</p>
                <p>3. 顶部表单组件 新增了 改变值可以有函数了 @change</p>
                <p>4. 表单组件 修复了 有时候赋值不能成功的bug</p>
                <p>5. 表单/顶部表单组件 修复了 时间类型为 datetimerange 报警告的bug</p>
            </div>
        </div>
        <div class="item">
            <div class="header-box">
                <h2>版本号 v2.0.3</h2>
                <div class="time">2023-05-08</div>
            </div>
            <div class="content">
                <p>1. 修复了一些bug</p>
                <p>2. 表单/顶部表单组件 修复了 当选择框为多选时候 出现警告的bug</p>
                <p>3. 表单/顶部表单组件 新增了 可以调用饿了么ui的默认方法 具体用 getForm</p>
                <p>4. 表单组件 新增了 在点击取消时 会自动清空表单内容了</p>
                <p>5. 删除了 原本的 setTime的内容</p>
                <p>6. 新增了 可以处理时间更多时间了 ?type=%2FsetTime</p>
                <p>7. 优化了 部分js的返回</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
           
        };
    },
    methods: {
        
    },
    mounted() {},
};
</script>
<style lang="less" scoped>
.update-log{
    h1{
        text-align: center;
        font-size: 30px;
        margin-bottom: 20px;
    }
    .header-box{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
        .time{
            color: #999;
        }
    }
    .content{
        p{
            margin-bottom: 10px;
        }
    }
}
</style>