<template>
    <div class="update-log">
        <h1>版本更新日志</h1>
        <div class="item">
            <div class="header-box">
                <h2>版本号 v2.1.4</h2>
                <div class="time">2024-5-15</div>
            </div>
            <div class="content">
                <p>1. 新增了大屏抽奖组件 见 ?type=%2Fbig-screen-draw</p>
                <p>2. 修复了一些bug</p>
            </div>
        </div>
        <div class="item">
            <div class="header-box">
                <h2>版本号 v2.1.3</h2>
                <div class="time">2024-4-10</div>
            </div>
            <div class="content">
                <p>1. 更新了很多时间处理 具体见?type=%2FsetTime</p>
                <p>2. 组件新增了表格写的配置</p>
                <p>3. 验证码组件新增了是否转成大写字母</p>
                <p>4. 修复车键盘的宽度事情 在小屏幕下改变了一下字体的大小</p>
                <p>5. 修复日历js的相关bug</p>
            </div>
        </div>
        <div class="item">
            <div class="header-box">
                <h2>版本号 v2.1.2</h2>
                <div class="time">2024-4-9</div>
            </div>
            <div class="content">
                <p>1. 修复手机端表格组件分页显示的bug</p>
                <p>2. 新增表格组件手机端展示</p>
                <p>3. 修复表单/横向表单组件有时候设置值失败的bug</p>
                <p>4. 修复横向表单组件按钮单独一行会显示错位置的bug</p>
                <p>5. 删除横向表单组件的加载中和加载文字props</p>
                <p>6. 优化了在手机端选择文件提示和宽度</p>
                <p>7. 修改了弹窗组件的名称 dzs-dialog</p>
                <p>8. (横向)表单组件新增了手机端展示</p>
                <p>9. (横向)表单组件新增了表格的配置展示</p>
            </div>
        </div>
        <div class="item">
            <div class="header-box">
                <h2>版本号 v2.1.1</h2>
                <div class="time">2024-4-3</div>
            </div>
            <div class="content">
                <p>1. 表格新增搜索啦 可以在侧边栏搜索</p>
                <p>2. 修复侧边栏表格设置高度刷新不生效的问题</p>
                <p>3. 修复了表格在设置高度滚动条会失效的bug</p>
                <p>4. 优化了代码展示 可以展开和关闭列表了</p>
                <p>5. 表格组件可以新增了 属性列表</p>
                <p>6. 优化了表单组件在设置校验函数会失败的bug</p>
                <p>7. 表格组件新增了更多的配置项</p>
            </div>
        </div>
        <div class="item">
            <div class="header-box">
                <h2>版本号 v2.1.0</h2>
                <div class="time">2024-1-24</div>
            </div>
            <div class="content">
                <p>1. 新增vue-office</p>
                <p>2. 优化读取excel文件 支持 导出 cvs xls xlsx</p>
                <p>3. 修复了其他一些bug</p>
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