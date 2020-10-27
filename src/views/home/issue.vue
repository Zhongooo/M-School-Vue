<template>
	<div class="issue">
		<myheader rehead="true" middle="通知" jumpto="true" jumpmsg="发布"></myheader>
		<div class="receive w" @click="jump">
			<span>接收班级</span>
			<div class="myclass">
				<span>六年五班</span>
				<img src="../../assets/icon/next.png" width="20" height="20">
			</div>
		</div>
		<!-- 通知标题 -->
		<input type="text" placeholder="请输入标题" v-focus class="title"></input>
		<!-- 通知内容 -->
		<textarea class="content" placeholder="请输入要发布的内容,别发太多,看完(◎﹏◎)"></textarea>
	</div>
</template>

<script>
	import myheader from '../../components/Header';
	export default {
		name: 'issue',
		data() {
			return {
				
			}
		},
		components: {
			myheader
		},
		methods: {
			jump() {
				this.$router.push('/home/checkclass');
			}
		}
	}
</script>

<style lang="less" scoped>
	@import "../../style/user/index.css";
	.receive {
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 0.6rem;
		height: 2rem;
		background-color: #fff;
		margin-top: 2.2rem;
		border-bottom: 1px solid gainsboro;
		span {
			margin-left: 1rem;
		}
		.myclass {
			position: relative;
			display: inline-block;
			margin-right: 1rem;
			span {
				background-color: gainsboro;
				padding: 0.25rem 0.3rem;
				border-radius: 0.5rem;
				font-size: 0.5rem;
			}
			img {
				position: absolute;
				top: 50%;
				transform: translateY(-50%);
			}
		}
	}
	.title {
		width: 13rem;
		height: 2rem;
		padding: 0 1rem;
		border: 0;
		border-bottom: 1px solid gainsboro;
		font-size: 0.6rem;
		outline: none;
	}
	.content {
		width: 13rem;
		height: 20rem;
		padding: 0.5rem 1rem;
		border: 0;
		font-size: 0.6rem;
		outline: none;
	}
</style>
