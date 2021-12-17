<template>
	<div class="pup-wrop" v-if="isShow" @click="onClose">
		<div class="content" :class="!showFooter ? 'content-footer':''" @click.stop="onCenter">
			<div class="title">{{title}}</div>
			<div class="close">
				<img src="../../assets/images/close.png" alt="关闭" @click="onClose">
			</div>
			<div class="center" >
				<!-- 在这里填写中间的内容 -->
				<slot></slot>
			</div>
			<div class="sbumit" v-if="showFooter">
				<el-button class="btn" type="primary" @click.stop="onSubmit">{{success_txt}}</el-button>
				<el-button type="info" @click.stop="onClose" class="btn">取消</el-button>
			</div>
		</div>
	</div>
</template>

<script>
	/* 
	 *@props : title 弹窗标题
	 *@props : isShow  是否显示
	 *@props : success_txt 提示文字
	 *@props : showFooter 显示底部
	 * 
	 *@methods :onSubmit 成功提交
	 *@methods :onClose 关闭弹窗
	 * 
	 */
	export default {
		name: "My-Popup",
		props: {
			title: { //提示框标题
				type: String,
				default: () => {
					return "提示"
				}
			},
			isShow: {
				type: Boolean,
				default: () => {
					return false
				}
			},
			success_txt: {
				type: String,
				default: () => {
					return "提交"
				}
			},
			showFooter: {
				type: Boolean,
				default: () => {
					return true
				}
			}
		},
		data() {
			return {

			}
		},
		methods: {
			onSubmit() {
				this.$emit("onSubmit")
			},
			onClose() {
				this.$emit("onClose")
			},
			onCenter(){
				return ;
			}
		}
	}
</script>

<style lang="less" scoped>
	@import "../../assets/css/reset.less";

	.pup-wrop {
		position: fixed;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		background-color: rgba(0, 0, 0, 0.5);
		z-index: 10;
		animation-name: showWrop;
		animation-duration: 0.7s;

		.content {
			background-color: #fff;
			min-width: 520px;
			min-height: 200px;
			
			position: absolute;
			left: 50%;
			top: 50%;
			transform: translate(-50%, -50%);
			border-radius: 5px;
			padding: 70px 40px 60px;
			padding-bottom: 80px;
			max-height: 75vh;
			overflow-y: auto;
			-ms-overflow-style: none;
			/* IE 10+ */
			scrollbar-width: none;
			box-sizing: border-box;
			box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.4);

			/* Firefox */
			&::-webkit-scrollbar {
				/* Chrome Safari */
				display: none;
			}


			.title {
				position: absolute;
				left: 0;
				top: 0;
				width: 100%;
				font-size: 24px;
				line-height: 50px;
				background-color: #f0f3fa;
				text-align: center;
				.not-select();
			}

			.close {
				position: absolute;
				right: 20px;
				top: 15px;
				cursor: pointer;
				width: 20px;
				height: 20px;

				img {
					display: block;
					width: 100%;
					height: 100%;
					object-fit: cover;
				}
			}

			.sbumit {
				text-align: center;
				position: absolute;
				bottom: 20px;
				width: calc(100% - 80px);
				.btn {
					width: 115px;
					height: 42px;
					background-color: @ThemeColor;
					border: none;
					&.el-button--info{
						background-color: #f0f3fa;
						color: #8fa1c5;
					}
				}
			}

			.submits {
				background-color: @fontColor;
				color: #fff;
			}
		}

		.content-footer {
			padding-bottom: 20px;
		}
	}

	@keyframes showWrop {
		from {
			opacity: 0;
		}

		to {
			opacity: 1;
		}
	}
</style>
