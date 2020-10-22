<template>
	<div class="chat">
		<myheader left="私聊"></myheader>
		<div class="chatchat">
			<div class="friends w" v-for="(item,index) in friends" :key="item.id"  @click="jump">
				<div class="pic">
					<img :src="require(`../../assets/image/${item.imgUrl}`)"></img>
					<i>6</i>
				</div>
				<div class="main">
					<div class="textTop">
						<div class="friendName">{{item.friendName}}</div>
						<div class="times">{{getTime(item.times)}}</div>
					</div>
					<div class="textBottom">
						{{item.msg}}
					</div>
				</div>
			</div>
		</div>
		<div style="height: 1rem;"></div>
		<tabbar></tabbar>
	</div>
</template>

<script>
	import tabbar from '../../components/Tabbar.vue';
	import myheader from '../../components/Header.vue';
	import datas from '../../../common/js/datas.js'
	import momentDate from '../../../common/js/myTime.js'
	export default {
		name: 'chat',
		components: {
			tabbar,
			myheader
		},
		data() {
			return {
				friends:[]
			}
		},
		methods:{
			getTime(dateTime) {
				return momentDate.dateTime(dateTime);
			},
			jump() {
				this.$router.push('/chat/chatroom')
			}
		},
		created() {
			this.friends=datas.friends();
		}
	}
</script>

<style lang="less" scoped>
	@import "../../style/user/index.css";
	.chatchat {
		margin-top: 2.1rem;
	}
	.friends {
		display: flex;
		margin-top: 0.1rem;
		
		background-color: #fff;
		.pic {
			position: relative;
			width: 3.2rem;
			height: 3.2rem;
			img {
				position: absolute;
				width: 2.2rem;
				height: 2.2rem;
				left: 50%;
				top: 50%;
				transform: translate(-50%, -50%);
				border-radius: 2rem;
			}
	
			i {
				position: absolute;
				top: 0.3rem;
				right: 0.2rem;
				width: 0.8rem;
				height: 0.8rem;
				color: #fff;
				font-size: 0.6rem;
				font-style: normal;
				text-align: center;
				background-color: #FF5D5B;
				border-radius: 50%;
			}
		}
	
		.main {
			width: 13rem;
			display: flex;
			flex-direction: column;
	
			.textTop {
				flex: 1;
				display: flex;
				justify-content: space-between;
				align-items: flex-end;
	
				.friendName {
					font-size: 0.7rem;
					color: #272832; 
					padding-bottom: 0.2rem;
				}
	
				.times {
					padding-right: 1rem;
					padding-bottom: 0.4rem;
					font-size: 0.6rem;
					color: #272832;
					opacity: 0.5;
				}
			}
	
			.textBottom {
				flex: 1;
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
				padding-right: 1.1rem;
				font-size: 0.7rem;
				color: #272832;
				opacity: 0.6;
			}
		}
	}
</style>
