<template>
	<div class="myclass">
		<myheader left="班级"></myheader>
		<div class="classTop w">
			<div class="search">
				<img src="../../assets/icon/搜索.png">
				<span>搜索班级</span>
			</div>
			<div class="classicon w">
				<div class="addClass">
					<img src="../../assets/icon/添加.png">添加班级
				</div>
				<div class="addClass">
					<img src="../../assets/icon/编辑.png">创建班级
				</div>
			</div>
		</div>
		<div class="main">
			<midHeader left="我创建的"></midHeader>
			<div v-for="(item,index) in list" :key="index" @click="jump()">
				<classpart v-if="item.type==='add'" :img="item.img" :myclass="item.myclass" :classNum="item.classNum" :numbers="item.numbers"></classpart>
			</div>
		</div>
		<div class="main">
			<midHeader left="我加入的"></midHeader>
			<div v-for="(item,index) in list" :key="index" @click="jump()">
				<classpart v-if="item.type==='enjoy'" :img="item.img" :myclass="item.myclass" :classNum="item.classNum" :numbers="item.numbers"></classpart>
			</div>
		</div>
		<div style="height: 1rem;"></div>
		<tabbar></tabbar>
	</div>
</template>

<script>
	import tabbar from '../../components/Tabbar.vue';
	import myheader from '../../components/Header.vue';
	import midHeader from '../../components/midHeader.vue';
	import classpart from '../../components/classpart.vue';
	import datas from '../../../common/js/datas.js';
	export default {
		name: 'myclass',
		data() {
			return {
				list: []
			}
		},
		components: {
			tabbar,
			myheader,
			classpart,
			midHeader
		},
		methods:{
			jump() {
				this.$router.push('/class/detail')
			}
		},
		created() {
			this.list = datas.classList();
		}
	}
</script>

<style lang="less" scoped>
	@import "../../style/user/index.css";
	.classTop {
		position: relative;
		height: 6.4rem;
		background-color: #fff;
		margin-top: 2.1rem;
		.search {
			position: absolute;
			display: flex;
			align-items: center;
			width: 90%;
			height: 1.6rem;
			top: 0.8rem;
			left: 50%;
			transform: translateX(-50%);
			background-color: #f2f2f2;
			border-radius: 0.4rem;
			img {
				width: 0.9rem;
				height: 0.9rem;
				margin:0 0.3rem;
			}
			span {
				font-size: 0.6rem;
				color: #cccccc;
			}
		}
		.classicon {
			display: flex;
			justify-content: space-around;
			align-items: center;
			position: absolute;
			top: 3rem;
			height: 3rem;
			font-size: 0.6rem;
			color: #666666;
			.addClass {
				display: flex;
				flex-direction: column;
				align-items: center;
				img {
					width: 1.8rem;
					height: 1.8rem;
					margin-bottom: 0.2rem;
				}
			}
		}
	}
	.main {
		margin-top: 0.6rem;
	}
</style>