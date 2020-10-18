<template>
	<div class="identity w">
		<div class="words"><span>请选择您的身份</span></div>
		<!-- 选择框 -->
		<div class="choose w">
			<div class="content" @click="tReg">
				<p>我是教师</p>
				<img src="../assets/image/teacher.png">
			</div>
			<div class="content" @click="pReg">
				<p>我是家长</p>
				<img src="../assets/image/parent.png" style="width: 2.8rem;height: 3rem;">
			</div>
		</div>
		<!-- 确定按钮 -->
		<!-- <button class="btn">确定</button> -->
	</div>
</template>

<script>
	export default {
		name: 'identity',
		data() {
			return {

			}
		},
		methods: {
			tReg() {
				this.$router.push('/register/teacher');
			},
			pReg() {
				this.$router.push('/register/parent');
			}
		}
	}
</script>

<style lang="less" scoped>
	@import "../style/rem/common.css";
	@import "../style/normalize.css";

	.identity {
		position: relative;
		background-color: #fff;
		height: 26.5rem;

		.words {
			position: relative;
			top: 1.6rem;
			text-align: center;
			font-size: 0.7rem;

		}

		.choose {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			margin-top: 6rem;

			.content {
				display: flex;
				justify-content: space-evenly;
				align-items: center;
				width: 90%;
				height: 3.6rem;
				background-color: whitesmoke;
				margin-bottom: 2.6rem;
				border-radius: 1.5rem;

				p {
					font-size: 0.9rem;
					font-weight: 700;
					color: #333333;
				}

				img {
					width: 3.2rem;
					height: 3.6rem;
				}
			}
		}

		.btn {
			position: absolute;
			left: 50%;
			margin-top: 2rem;
			transform: translateX(-50%);
			border-radius: 2rem;
			border: 0;
			background-color: #595bb3;
			color: #fff;
			font-size: 0.6rem;
			letter-spacing: 0.2rem;
			width: 80%;
			height: 2rem;
		}
	}
</style>
