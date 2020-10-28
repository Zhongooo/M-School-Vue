<template>
	<div class="detail">
		<myheader rehead="true"></myheader>
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
		<!-- 图标行 -->
		<div class="icons">
			<div class="cont">
				<img src="../../assets/icon/news.png">班级信息
			</div>
			<div class="cont">
				<img src="../../assets/icon/record.png">课程表
			</div>
			<div class="cont">
				<img src="../../assets/icon/score.png">成绩
			</div>
			<div class="cont">
				<img src="../../assets/icon/doc.png">班级文件
			</div>
		</div>
		<!-- 班级通知and作业！为什么那么多个通知啊  我觉得放当天的就好吧 -->
		<div class="list">
			<div class="content">
				<div class="specific">
					<infoIcon msg="通知" color="red" class="icon"></infoIcon>
					<b>{{data.title}}</b>
					<div class="main">
						{{data.info}}
					</div>
					<div class="bot"><span class="cla">{{data.myclass}}</span><span class="time">{{data.time}}</span></div>
				</div>
			</div>
		</div>
		<!-- 我来了我是作业通知 -->
		<div class="list">
			<div class="content">
				<div class="specific">
					<infoIcon msg="作业" color="deepblue" class="icon"></infoIcon>
					<b>{{homework.title}}</b>
					<div class="main">
						{{homework.homework}}
					</div>
					<div class="bot"><span class="cla">{{homework.myclass}}</span><span class="time">{{homework.time}}</span></div>
				</div>
			</div>
		</div>
		
	</div>
</template>

<script>
	import myheader from '../../components/Header';
	import infoIcon from '../../components/infoIcon';
	import datas from '../../../common/js/datas.js';
	export default {
		name: 'detail',
		components: {
			myheader,
			infoIcon
		},
		data() {
			return {
				myclass: '辅导小猫三年一班',
				classNum: 666,
				data:{},
				homework:{}
			}
		},
		created() {
			let temp=datas.info();
			let len=temp.length;
			console.log(temp[len-1]);
			this.data=temp[len-1];
			let temp2=datas.homework();
			let len2=temp2.length;
			this.homework=temp2[len2-1];
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
		margin-top: 2.7rem;

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
				transform: translate(-50%, -50%);
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
	
	.icons{
		display: flex;
		justify-content: space-evenly;
		margin-top: 0.6rem;
		padding: 0.5rem 0;
		background-color: #fff;
		.cont {
			display: flex;
			flex-direction: column;
			align-items: center;
			flex: 1;
			font-size: 0.7rem;
			img {
				width: 1.6rem;
				height: 1.6rem;
			}
		}
	}
	.list {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 0.7rem;
	
		.content {
			background-color: #fff;
			width: 90%;
			border-radius: 0.2rem;
		}
	
		.specific {
			margin: 0.6rem;
			.icon {
				display: inline-block;
			}
	
			b {
				display: inline-block;
				font-size: 0.7rem;
				margin-left: 0.3rem;
			}
	
			.main {
				font-size: 0.7rem;
				margin: 0.5rem 0;
			}
	
			.bot {
				font-size: 0.4rem;
				color: #bbbcc0;
	
	
				.cla {
					border-right: 1px solid #939393;
					padding-right: 0.2rem;
				}
	
				.time {
					padding-left: 0.2rem;
				}
			}
		}
	}
</style>
