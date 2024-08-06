<template>
    <div class="footer-box">
        <p>&copy;2021-{{ runTime.year }}</p>
        <p>{{ title }}</p>
        <p>备:<a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer"
                alt="渝ICP备2023001910号">渝ICP备2023001910号</a></p>
        <p>本网站勉强运行{{ runTime.days }}天</p>
    </div>
</template>
<script>
import defaultSetting from "@/seeting";
export default {
    data() {
        return {
            runTime: {
                days: new Date().getFullYear(),
                year: 0,
            },
            title: defaultSetting.title
        }
    },
    created() {
        this.runTime = this.getRunTime();
    },
    methods: {
        getRunTime() {
            let date = new Date();
            let year = date.getFullYear();
            let mouth = date.getMonth() + 1;
            let day = date.getDate();
            let days = new Date(year + "-" + mouth + "-" + day) - new Date("2021-08-05");
            return {
                year,
                days: Math.floor(days / 1000 / 60 / 60 / 24) + 1
            }
        }
    }
}
</script>
<style lang="scss" scoped>
.footer-box {
    p {
        font-size: 14px;
        color: #666;
        text-align: center;
        padding: 0;
        margin: 0;
    }
}
</style>