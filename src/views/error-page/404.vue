<template>
    <div class="not-found">
        <h1>404</h1>
        <p>抱歉，您访问的页面不存在。</p>
        <el-button type="primary" @click="goToHome">返回首页</el-button>
    </div>
</template>

<script>
export default {
    name: '404',
    methods: {
        goToHome() {
            this.$router.push('/');
        },
        relogin() {
            window.location.href = "/";
        }
    }
};
</script>

<style scoped>
.not-found {
    text-align: center;
    margin-top: 50px;
}

h1 {
    font-size: 10rem;
    color: #333;
}

p {
    font-size: 1.2rem;
    color: #666;
}

.el-button {
    margin-top: 20px;
}
</style>