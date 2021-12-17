<template>
	<div class="login-wrop" v-if="is_show">
		<el-row class="login-container">
			<el-col :span="11">
				<div class="login-img"><img src="../assets/images/login.jpg" /></div>
			</el-col>
			<el-col :span="13">
				<div class="grid-content">
					<div class="title">xx后台管理系统</div>
					<div class="from">
						<el-form label-width="0" :model="parms" :rules="rules" ref="parms">
							<el-form-item prop="userName">
								<el-input v-model="parms.userName" placeholder="请输入用户名" auto-complete="off"
									prefix-icon="iconfont icon-yonghuming"></el-input>
							</el-form-item>
							<el-form-item prop="userPWD">
								<el-input v-model="parms.userPWD" show-password placeholder="请输入密码" auto-complete="off"
									prefix-icon="iconfont icon-mima"></el-input>
							</el-form-item>
							<el-row>
								<el-col :span="12">
									<el-form-item prop="code">
										<el-input type="text" v-model="parms.code" auto-complete="off"
											placeholder="图形验证码" prefix-icon="iconfont icon-yanzhengma" @keyup.enter.native="login"></el-input>
									</el-form-item>
								</el-col>
								<el-col :span="12">
									<div class="canvas" @click="draw([])">
										<canvas id="canvas" width="155" height="48" ref="canvas">
											您的浏览器不支持canvas
										</canvas>
									</div>
								</el-col>
							</el-row>
						</el-form>

					</div>
					<div class="btn-wrop">
						<el-button type="primary" class="btn" @click="login">立即登录</el-button>
					</div>
				</div>
			</el-col>
		</el-row>
	</div>
</template>

<script>
	import setRouter from "../router/setRouter.js";
	import subMenu from "@/subMenu.json";
	export default {
		name: 'login',
		data() {
			return {
				logining: false,
				parms: {
					userName: '',
					userPWD: '',
					code: "",
				},

				code_show: "",
				rules: {
					userName: [{
						required: true,
						message: '请输入账号',
						trigger: 'blur'
					}],
					userPWD: [{
						required: true,
						message: '请输入密码',
						trigger: 'blur'
					}],
					code: [{
						required: true,
						message: '请输入验证码',
						trigger: 'blur'
					}]
				},
				is_show: false,
				loading: null,
			}
		},
		mounted() {
			let query = this.$route.query;
			if (query.toPath && query.toPath == "Login") {
				this.is_show = true;
			}
			if (!query.toPath || query.toPath == "Login") {
				this.is_show = true;
				setTimeout(() => {
					this.draw([]);
				}, 100)
			}
			if(this.$cookie.readCookie("menu")){
				let pagePowerStr =[];
				pagePowerStr = JSON.parse(this.decrypt(this.$cookie.readCookie("menu")));
				if(pagePowerStr.length && !this.is_show) setRouter(pagePowerStr,this.$router);
			}
			let judge = false;
			if(query.toPath ){
				query.toPath = query.toPath.replace("/dist","");
				judge =  this.judgePath(this.$router.getRoutes(),query.toPath);
				if(!judge){
					this.$router.push({
						path : "/404"
					})
				}
			}
			
			if (query.toPath && judge) {
				this.$router.push({
					path: query.toPath
				}).then(res =>{
					if(!res.name){
						this.$message({
							showClose: true,
							message: "登录信息过期了，请重新登录",
							type: 'warning',
							duration: 1000
						});
						this.exit();
					}
				}).catch(err =>{
					this.$router.push({
						path : "/404"
					})
					
				})
			}
		},
		methods: {
			// 用户登录
			login() {
				if (!this.parms.userName || !this.parms.userPWD) {
					this.$message({
						showClose: true,
						message: '请输入用户名或者密码',
						type: 'error',
						duration: 1000
					});
					return;
				}
				if (this.code_show.toLocaleUpperCase() != this.parms.code.toLocaleUpperCase()) {
					this.$message({
						showClose: true,
						message: '验证码错误',
						type: 'error',
						duration: 1000
					});
					this.draw([]);
					this.code = "";
					return;
				}
				this.parms = {
					"parms": {
						userName: this.parms.userName.replace(/\s+/g, ""),
						userPWD: this.parms.userPWD.replace(/\s+/g, "")
					}
				}
				
				this.$cookie.setCookie('TK', "ttk", 0.5); //token
				this.$cookie.setCookie('un', this.encrypt(JSON.stringify("zs.duan")), 0.5); //用户名
				this.$cookie.setCookie('HandsomeL·Y',this.encrypt(JSON.stringify(this.parms.parms.userPWD)), 1) ; //用户原密码
				this.roleList();
			},

			// 请求权限数据
			roleList(id) {
				this.$cookie.setCookie("menu", this.encrypt(JSON.stringify(subMenu)),0.5);
				this.$cookie.setCookie("functonPower", this.encrypt(JSON.stringify(this.$jurisdiction)),0.5);
				this.$store.commit("setMenuList", subMenu);
				setTimeout(() => {
					this.$router.push({
						name: 'Index'
					});
				}, 1000)
				
			},

			// 生成验证码
			//生成并渲染出验证码图形
			draw(show_num) {
				let canvas_width = this.$refs.canvas.width;
				let canvas_height = this.$refs.canvas.height;
				let canvas = document.getElementById("canvas"); //获取到canvas的对象，演员
				let context = canvas.getContext("2d"); //获取到canvas画图的环境，演员表演的舞台
				canvas.width = canvas_width;
				canvas.height = canvas_height;
				let sCode =
					"a,b,c,d,e,f,g,h,i,j,k,m,n,p,q,r,s,t,u,v,w,x,y,z,A,B,C,E,F,G,H,J,K,L,M,N,P,Q,R,S,T,W,X,Y,Z,1,2,3,4,5,6,7,8,9,0";
				let aCode = sCode.split(",");
				let aLength = aCode.length; //获取到数组的长度
				for (let i = 0; i < 4; i++) { //这里的for循环可以控制验证码位数（如果想显示6位数，4改成6即可）
					let j = Math.floor(Math.random() * aLength); //获取到随机的索引值
					// let deg = Math.random() * 30 * Math.PI / 180;//产生0~30之间的随机弧度
					let deg = Math.random() - 0.5; //产生一个随机弧度
					let txt = aCode[j]; //得到随机的一个内容
					show_num[i] = txt;
					let x = 10 + i * 35; //文字在canvas上的x坐标
					let y = 30 + Math.random() * 8; //文字在canvas上的y坐标
					context.font = "bold 23px 微软雅黑";
					context.translate(x, y);
					context.rotate(deg);
					context.fillStyle = this.randomColor();
					context.fillText(txt, 0, 0);
					context.rotate(-deg);
					context.translate(-x, -y);
				}
				this.code_show = show_num.join("");
				// this.parms.code = this.code_show; //记得删
				for (let i = 0; i <= 5; i++) { //验证码上显示线条
					context.strokeStyle = this.randomColor();
					context.beginPath();
					context.moveTo(Math.random() * canvas_width, Math.random() * canvas_height);
					context.lineTo(Math.random() * canvas_width, Math.random() * canvas_height);
					context.stroke();
				}
				for (let i = 0; i <= 30; i++) { //验证码上显示小点
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
				var r = Math.floor(Math.random() * 256);
				var g = Math.floor(Math.random() * 256);
				var b = Math.floor(Math.random() * 256);
				return "rgb(" + r + "," + g + "," + b + ")";
			},
			
			exit() {
				this.$cookie.delCookie("TK");
				this.$cookie.delCookie("un");
				this.$cookie.delCookie("menu");
				this.$cookie.delCookie("functonPower");
				setTimeout(() => {
					this.$router.push({
						name: "Login"
					})
				}, 1000)
			},
			
			// 判断路径
			judgePath(list,url){
				let jurisdiction = false;
				list.forEach(v =>{
					if(v.path == url) jurisdiction = true;
				})
				return jurisdiction;
			}
		}
	}
</script>

<style lang="less" scoped>
	@import "../assets/css/reset.less";

	.login-wrop {
		box-sizing: border-box;
		width: 100%;
		height: 100%;
		background-color: #f6f7fb;
		position: relative;

		.login-container {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			background: #fff;
			width: 1000px;
			border-radius: 5px;
			box-shadow: 0 0 38px 0 rgba(129, 129, 129, 0.15);
			overflow: hidden;

			.login-img {
				height: 630px;
				width: 100%;

				img {
					width: 100%;
					height: 100%;
					object-fit: cover;
					object-position: center;
				}
			}

			.grid-content {
				width: 330px;
				margin: 0 auto;

				.title {
					font-size: 30px;
					color: #3e4552;
					text-align: center;
					font-weight: 200;
					line-height: 36px;
					padding-bottom: 30px;
					padding-top: 100px;
					margin-bottom: 40px;
					border-bottom: 2px solid @ThemeColor;
				}

				.from {
					/deep/.el-input {
						.el-input__inner {
							line-height: 48px;
							height: 48px;
							border-radius: 5px;
							border: 1px solid #e3e8f0;
							padding-left: 50px;
						}

						.el-input__prefix {
							left: 15px;

							.el-input__icon {
								line-height: 48px;
							}
						}
					}

					/deep/.is-error {
						.el-input__inner {
							border-color: #F56C6C;
						}
					}

					.canvas {
						cursor: pointer;
						margin-left: 10px;
					}
				}

				.btn-wrop {
					.btn {
						width: 100%;
						height: 50px;
						background-color: @ThemeColor;
						border-color: @ThemeColor;
						border-radius: 5px;
						margin-top: 15px;
					}
				}
			}
		}
	}
</style>
