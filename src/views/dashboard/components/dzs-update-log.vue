<template>
    <section class="update-log-box">
        <div class="update-title">更新日志</div>
        <ul>
            <ol v-for="(item,index) in logData" :key="index">
                <li class="log-title">
                    <span>版本号{{item.version}}</span>
                    <span class="log-time">{{item.date}}</span>
                </li>
                <li v-for="(log,logIndex) in item.log" :key="logIndex">
                    {{logIndex + 1}}、
                    <span v-if="!log.tips">{{log}}</span>
                    <span v-else>
                        <span>{{log.tips}}</span>
                        <a v-for="(item,index) in log.links" :href="item">查看（{{index + 1}}）</a>
                    </span>
                </li>
            </ol>
        </ul>
    </section>
</template>
<script>
import logData from './log-data';
export default{
    data(){
        return{
            logData : logData,
            BASE_URL : "https://zongjie.anran233.com"
        }
    }
}
</script>
<style lang="scss" scoped>
.update-log-box{
    .update-title{
        width: 100%;
        height: 100%;
        font-size: 20px;
        color: #333;
        font-weight: 500;
    }
    ul{
        ol{
            padding-top: 10px;
            .log-title{
                display: flex;
                justify-content: space-between;
            }
            li{
                font-size: 14px;
                color: #666;
                padding: 2px 0;
                a {
                    display: inline-block;
                    color : var(--themecolor);
                    padding-left : 10px;
                }
            }
        }
    }
}
</style>