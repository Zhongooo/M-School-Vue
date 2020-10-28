<template>
	<div class="detail">
		<myheader rehead="true"></myheader>
		<div>
		<div class="top">
			<div class="top_left">
				<img src="../../assets/icon/class03.png">
			</div>
			<div class="top_mid">
					<div style="font-size: 0.8rem;letter-spacing:2px;font-weight:700; 0.2rem;">{{myclass}}</div>
					<div style="font-size: 0.5rem;color: #aeaeae;margin-top: 0.3rem;">班级号：{{classNum}} 管理员：林老师</div>
			</div>
		</div>
		<div class="bottom w">
			<div class="bot_content"><span class="nums">33</span><span>学生</span></div>
			<div class="bot_content"><span class="nums">6</span><span>老师</span></div>
			<div class="bot_content"><img src="../../assets/icon/add.png">邀请</div>
			<div class="bot_content"><img src="../../assets/icon/book.png">通讯录</div>
		</div>	
		</div>
	</div>
</template>

<script>
	import myheader from '../../components/Header';
	export default {
		name:'detail',
		components:{
			myheader
		},
		data() {
			return {
				myclass:'辅导小猫三年一班',
				classNum:666
			}
		}
	}
</script>

<style lang="less" scoped>
	@import "../../style/user/index.css";
	.top {
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #fff;
		padding: 0.3rem 0;
		margin-top: 2.3rem;
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
		
		font-size: 0.7rem;
		background-color: #fff;
		.bot_content {
			display: flex;
			align-items: center;
			padding: 0.2rem 0.5rem;
			.nums {
				font-weight: 700;
				color: #4e58bc;
			}
			img {
				width: 1rem;
				height: 1rem;
			}
			span {
				margin-left: 0.2rem;
			}
		}
		
	}
</style>
