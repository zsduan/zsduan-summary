<template>
    <section>
        <public-item title="基础用法">
            <div class="phone-public">
                <div class="phone-box">
                    <dzs-douyin :list="videoList" @change="changeVideo"></dzs-douyin>
                </div>
            </div>
        </public-item>
    </section>
</template>
<script>
import dzsDouyin from '@/components/dzs-douyin';
export default {
    components: {
        dzsDouyin
    },
    data() {
        return {
            videoList : [
                
            ],
        }
    },
    mounted() {
        for(let i = 1; i < 100; i++){
            let json = {
                title : `测试标题 ${i}`,
                desc : `测试描述`,
                username : `测试用户名 ${i}`,
                url : `/video/0${i % 2 == 0 ? '2' : '1'}.mp4`
            }
            this.videoList.push(json)
        }
    },
    methods: {
        changeVideo(e){
            console.log(e)
        }
    }
}
</script>
