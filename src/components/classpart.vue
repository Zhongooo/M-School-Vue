<template>
	<div class="classpart">
		<div class="top">
			<div class="top_left">
				<img :src="require(`../assets/icon/${img}`)">
			</div>
			<div class="top_mid">
					<div style="font-size: 0.6rem;margin-bottom: 0.2rem;">{{myclass}}</div>
					<div style="font-size: 0.5rem;color: #aeaeae;">班级号：{{classNum}} 成员：{{numbers}}</div>
			</div>
			<div class="top_right">
				<img src="../assets/icon/next.png" width="20" height="20">
			</div>
		</div>
		<div class="bottom w">
			<div class="bot_content"><img src="../assets/icon/page.png"><span>班级文件</span></div>
			<div class="bot_content"><img src="../assets/icon/talk.png">班级通知</div>
			<div class="bot_content"><img src="../assets/icon/toadd.png">邀请成员</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'classpart',
		props: ['img','myclass','classNum','numbers']
	}
</script>

<style lang="less" scoped>
	@import "../style/user/index.css";
	.classpart {
		margin-top: 0.1rem;
		border-bottom: 1px solid gainsboro;
		.top {
			display: flex;
			justify-content: center;
			align-items: center;
			background-color: #fff;
			padding: 0.3rem 0;
			.top_left {
				width: 2rem;
				height: 2rem;
				margin-left: 1rem;
				
				img {
					width: 100%;
					height: 100%;
				}
			}
			.top_mid {
				flex: 1;
				margin-left: 0.5rem;
			}
			.top_right {
				position: relative;
				width: 2rem;
				height: 2rem;
				img {
					position: absolute;
					left: 50%;
					top: 50%;
					transform: translate(-50%,-50%);
				}
			}
		}
		.bottom {
			display: flex;
			justify-content: space-evenly;
			
			font-size: 0.5rem;
			background-color: #fff;
			.bot_content {
				display: flex;
				align-items: center;
				padding: 0.2rem 0.8rem;
				img {
					width: 1rem;
					height: 1rem;
				}
				span {
					margin-left: 0.2rem;
				}
			}
			
		}
	}
</style>
