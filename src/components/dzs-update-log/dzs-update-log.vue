<template>
    <div class="update-log">
        <h1>版本更新日志</h1>
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
        return {};
    },
    methods: {},
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