<template>
	<div class="info">
		<myheader rehead="true" middle="通知"></myheader>
		<div class="list">
			<div class="content" v-for="(item,index) in data" :key="index">
				<div class="specific">
					<infoIcon msg="通知" class="icon"></infoIcon>
					<b>{{item.title}}</b>
					<div class="main">
						{{item.info}}
					</div>
					<div class="bottom"><span class="cla">{{item.myclass}}</span><span class="time">{{item.time}}</span></div>
				</div>
			</div>
		</div>
		<!-- 增加新通知的按钮 -->
		<div class="addnew" @click="issue">
			<img src="../../assets/icon/pencil.png" width="60px" height="60px" style="position: fixed;right: 1rem;bottom: 5rem;">
		</div>
	</div>
</template>

<script>
	import myheader from '../../components/Header';
	import infoIcon from '../../components/infoIcon';
	import datas from '../../../common/js/datas.js';
	export default {
		name: 'info',
		data() {
			return {
				data:[]
			}
		},
		components: {
			myheader,
			infoIcon
		},
		methods: {
			issue() {
				this.$router.push('/info/issue');
			}
		},
		created() {
			this.data=datas.info();
		}
	}
</script>

<style lang="less" scoped>
	@import "../../style/user/index.css";
	.list {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 2.5rem;

		.content {
			background-color: #fff;
			width: 90%;
			border-radius: 0.2rem;
			margin-bottom: 0.6rem;
		}

		.specific {
			margin: 0.6rem;
			.icon {
				display: inline-block;
			}

			b {
				display: inline-block;
				font-size: 0.6rem;
				margin-left: 0.3rem;
			}

			.main {
				font-size: 0.7rem;
				margin: 0.5rem 0;
			}

			.bottom {
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
