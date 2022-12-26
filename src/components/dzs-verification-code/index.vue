<!--
 * @Author: zs.duan
 * @Date: 2022-12-26 14:55:22
 * @LastEditors: zs.duan
 * @LastEditTime: 2022-12-26 15:35:32
 * @FilePath: \vue2+js+eui+template\src\components\dzs-verification-code\index.vue
-->
<template>
    <div @click="generateCode" class="dzs-verification-code-box">
        <canvas id="dzs_verification_code" ref="dzs_verification_code" class="dzs-verification-code">您的浏览器不支持canvas</canvas>
    </div>
</template>
<script>
/*
 * @name 生成随机字符串验证码 
 * @v-model 返回大写后的字符串
*/ 
export default {
    name: "dzs-verification-code",
    model:{
        prop: "value",
        event: "update:value",
    },
    props: {
        codeArr : {
            type : Array,
            default:()=>{
                return []
            }
        },
        value : {
            type : String,
            default : ()=>{
                return ""
            }
        }
    },
    data() {
        return {
            code_show : ""
        };
    },
    mounted() {
        setTimeout(()=>{
            this.generateCode();
        },100)
    },
    methods: {
        generateCode() {
            if(this.codeArr.length && this.codeArr.length < 4){
                console.warn("codeArr.length Less than 4")
            }
            let show_num = [];
            let canvas_width = this.$refs.dzs_verification_code.width;
            let canvas_height = this.$refs.dzs_verification_code.height;
            let canvas = this.$refs.dzs_verification_code; //获取到canvas的对象
            let context = canvas.getContext("2d"); //获取到canvas画图的环境
            canvas.width = canvas_width;
            canvas.height = canvas_height;
            let sCode =
                "a,b,c,d,e,f,g,h,i,j,k,m,n,p,q,r,s,t,u,v,w,x,y,z,A,B,C,E,F,G,H,J,K,L,M,N,P,Q,R,S,T,W,X,Y,Z,1,2,3,4,5,6,7,8,9,0";
            let aCode = sCode.split(",");
            if(this.codeArr.length && this.codeArr.length > 4){
                aCode = this.codeArr;
            }
            let aLength = aCode.length; //获取到数组的长度
            for (let i = 0; i < 4; i++) {
                //这里的for循环可以控制验证码位数（如果想显示6位数，4改成6即可）
                let j = Math.floor(Math.random() * aLength); //获取到随机的索引值
                // let deg = Math.random() * 30 * Math.PI / 180;//产生0~30之间的随机弧度
                let deg = Math.random() - 0.5; //产生一个随机弧度
                let txt = aCode[j]; //得到随机的一个内容
                show_num[i] = txt;
                let x = 10 + i * 70; //文字在canvas上的x坐标
                let y = 100 + Math.random() * 20; //文字在canvas上的y坐标
                context.font = "bold 63px 微软雅黑";
                context.translate(x, y);
                context.rotate(deg);
                context.fillStyle = this.randomColor();
                context.fillText(txt, 0, 0);
                context.rotate(-deg);
                context.translate(-x, -y);
            }

            this.code_show = show_num.join("");
            this.code_show = this.code_show.toLocaleUpperCase();
            this.$emit("update:value",this.code_show);
            for (let i = 0; i <= 5; i++) {
                //验证码上显示线条
                context.strokeStyle = this.randomColor();
                context.beginPath();
                context.moveTo(
                    Math.random() * canvas_width,
                    Math.random() * canvas_height
                );
                context.lineTo(
                    Math.random() * canvas_width,
                    Math.random() * canvas_height
                );
                context.stroke();
            }
            for (let i = 0; i <= 30; i++) {
                //验证码上显示小点
                context.strokeStyle = this.randomColor();
                context.beginPath();
                let x = Math.random() * canvas_width;
                let y = Math.random() * canvas_height;
                context.moveTo(x, y);
                context.lineTo(x + 1, y + 1);
                context.stroke();
            }
        },
        //得到随机的颜色值
        randomColor() {
            let r = Math.floor(Math.random() * 256);
            let g = Math.floor(Math.random() * 256);
            let b = Math.floor(Math.random() * 256);
            return "rgb(" + r + "," + g + "," + b + ")";
        },
    },
};
</script>
<style lang="less" scoped>
.dzs-verification-code-box{
    width: 100%;
    height: 100%;
}
.dzs-verification-code {
    width: 100%;
    height: 100%;
}
</style>