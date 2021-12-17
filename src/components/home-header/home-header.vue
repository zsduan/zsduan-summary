<template>
	<div class="header-wrop">
		<div class="left">
			<div class="title">{{title}}</div>
			<slot name="left"></slot>
		</div>
		<div class="right">
			<div class="user">
				<div class="icon">
					<img :src="user_icon">
				</div>
				<div class="user-name">{{user_name}}</div>
			</div>
			<div class="dropdown-menu">
				<i class="ico"></i>
				<div class="change-pwd" @click="changePwd" v-if="user_name != '未登录'">修改密码</div>
				<div class="exit" @click="exit" v-if="user_name != '未登录'">注销</div>
			</div>

			<slot name="right"></slot>
		</div>
		<MyPopup :isShow="show_pup" @onClose="onClose" @onSubmit="onSubmit" title="修改密码">
			<div class="from">
				<el-form label-width="100px" :model="parms">
					<el-form-item prop="OriginalPassword" label="输入原密码">
						<el-input v-model="parms.OriginalPassword" type="password" placeholder="请输入原密码" auto-complete="off">
						</el-input>
					</el-form-item>
					<el-form-item prop="sysUser_PWD" label="输入新密码">
						<el-input v-model="parms.sysUser_PWD" type="password" placeholder="请输入新密码" auto-complete="off">
						</el-input>
					</el-form-item>
					<el-form-item prop="confirmPassword" label="确认新密码">
						<el-input v-model="parms.confirmPassword" type="password" placeholder="请再次输入密码"
							auto-complete="off"></el-input>
					</el-form-item>
				</el-form>
			</div>
		</MyPopup>
	</div>
</template>

<script>
	/* 
	 * @data : 2021-09-13
	 * @props :user_name 用户名
	 * @props :title  标题
	 * @props :user_icon 用户头像
	 * 
	 * @methods:changePwd 打开修改密码弹窗
	 * @methods:exit 退出登录
	 * @methods:onClose 关闭弹窗
	 * @methods:onSubmit 提交修改数据
	 * 
	 */
	import userIcon from "../../assets/images/user-default.png"; //导入默认用户图片
	export default {
		name: "home-header",
		props: {
			title: { //标题
				type: String,
				default: () => {
					return this.$env.sliderName
				}
			},
			user_icon: { // 用户头像
				type: String,
				default: () => {
					return userIcon
				}
			}
		},
		data() {
			return {
				parms: {
					OriginalPassword:"",
					sysUser_PWD: '',
					confirmPassword: "",
				},
				show_pup: false,
				info_lits: {},
				user_name: "未登录",
			}
		},
		created() {
			this.info_lits = JSON.parse(this.decrypt(this.$cookie.readCookie('un')))
			this.user_name = this.info_lits.sysUserName
		},
		methods: {
			// 修改密码
			changePwd() {
				this.show_pup = true;
				this.parms = {
					OriginalPassword:"",
					sysUser_PWD: '',
					confirmPassword: "",
				};
			},

			// 注销登录
			exit() {
				this.$cookie.delCookie("TK");
				this.$cookie.delCookie("un");
				this.$cookie.delCookie("menu");
				this.$cookie.delCookie("functonPower");
				this.$cookie.delCookie("HandsomeL·Y");
				const loading = this.$loading({
					lock: true,
					text: '退出登录中，请稍等',
					spinner: 'el-icon-loading',
					background: 'rgba(0, 0, 0, 0.7)'
				});

				setTimeout(() => {
					loading.close();
					this.$router.push({
						name: "Login"
					})
				}, 2000)
			},

			onClose() {
				this.show_pup = false;
			},

			onSubmit() {
				let OriginalPassword = this.parms.OriginalPassword.replace(/\s+/g, "");
				let sysUser_PWD = this.parms.sysUser_PWD.replace(/\s+/g, "");
				let confirmPassword = this.parms.confirmPassword.replace(/\s+/g, "");
				let HandsomeLY=JSON.parse(this.decrypt(this.$cookie.readCookie("HandsomeL·Y")))
				
				
				if(OriginalPassword !== HandsomeLY){
					this.$message.error('原密码错误,请重新输入');
					this.parms.OriginalPassword = "";
					this.parms.sysUser_PWD = "";
					this.parms.confirmPassword = "";
					return
				}else if (sysUser_PWD !== confirmPassword) {
					this.$message.error('两次密码输入不一致,请重新输入');
					this.parms.sysUser_PWD = "";
					this.parms.confirmPassword = "";
					return
				} else if (sysUser_PWD.length < 6) {
					this.parms.sysUser_PWD = "";
					this.parms.confirmPassword = "";
					this.$message.error('密码长度不能小于6位');
					return
				}

				const loading = this.$loading({
					lock: true,
					text: '修改中，请稍等',
					spinner: 'el-icon-loading',
					background: 'rgba(0, 0, 0, 0.7)'
				}); 
				setTimeout(() => {
					loading.close();	
				}, 1000);

				// 新密码
				// this.sysUser_PWD
			},
		}
	}
</script>

<style lang="less" scoped>
	@import "../../assets/css/reset.less";

	.header-wrop {
		display: flex;
		color: @fontColor;
		justify-content: space-between;
		width: 100%;
		cursor: pointer;
		padding: 0 30px;

		.not-select();

		.title {
			font-size: 18px;
			line-height: 50px;
		}
		.left{
			padding: 5px 0;
		}
		.right {
			display: flex;
			justify-content: space-between;
			position: relative;
			padding: 5px 0;
			height: 70px;
			.icon {
				width: 40px;
				height: 40px;
				margin: 5px 10px;
				border-radius: 50%;
				overflow: hidden;

				img {
					width: 100%;
					height: 100%;
					object-fit: cover;
					object-position: center;
				}
			}

			.user {
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding-right: 40px;
				height: 50px;
			}

			.dropdown-menu {
				display: none;
				flex-direction: column;
				position: absolute;
				top: 70px;
				left: 0;
				background-color: #FFF;
				border: 1px solid #EBEEF5;
				border-radius: 4px;
				box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
				padding: 5px 15px;
				z-index: 99;
				width: 100%;
				.ico{
					display: block;
					width: 10px;
					height: 10px;
					border-radius: 2px;
					position: absolute;
					background-color: #fff;
					top: -5px;
					transform: rotate(45deg);
				}
				div{
					font-size: 14px;
					line-height: 28px;
					&:hover{
						color: @ThemeColor;
					}
				}
			}
			&:hover{
				.dropdown-menu{
					display: flex;
				}
			}
		}

	}
</style>
