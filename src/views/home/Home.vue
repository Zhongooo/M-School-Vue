<template>
	<div class="home">
		<myheader left="首页" right="登录"></myheader>
		<!-- 轮播图 -->
		<swiper :imgList="imgList"></swiper>
		<!-- 功能 -->
		<div class="tool">
			<midHeader left="功能"></midHeader>
			<div class="toolImg">
				<div class="imgs" v-for="(item,index) in toolList" :key="item.id">
					<img :src="require(`../../assets/icon/${item.img}`)">{{item.name}}
				</div>
			</div>
		</div>
		<!-- 校园动态 -->
		<div class="campusNews">
			<midHeader left="校园动态" right="更多"></midHeader>
			<div class="news w">
				<div class="newsContent" v-for="(item,index) in newsList" :key="item.id">
					<div class="newsImg">
						<img v-lazy="require(`../../assets/newsImg/${item.img}`)" />
					</div>
					<!-- 不要超过十个字 -->
					<h6 style="font-size: 0.6rem;margin: 0.4rem 0;">{{item.title}}</h6>
					<div class="newsword">
						<span>{{item.release}}</span>
						<span>阅读:{{item.looks}}</span>
					</div>
				</div>
			</div>
		</div>
		<div style="height: 1rem;"></div>
		<tabbar></tabbar>
	</div>
</template>

<script>
	import tabbar from '../../components/Tabbar';
	import myheader from '../../components/Header.vue';
	import midHeader from '../../components/midHeader.vue';
	import swiper from '../../components/swiper.vue';
	import datas from '../../../common/js/datas.js';
	export default {
		name: 'home',
		components: {
			tabbar,
			myheader,
			midHeader,
			swiper
		},
		data() {
			return {
				toolList: [],
				imgList: [],
				newsList: []
			}
		},
		created() {
			this.toolList = datas.tool();
			this.imgList = datas.swiperPic();
			this.newsList = datas.campusNews();
		}
	}
</script>
<style lang="less" scoped>
	@import "../../style/user/index.css";

	.tool {

		background-color: #fff;
		margin-top: 2.5rem;

		.toolImg {
			display: flex;
			flex-wrap: wrap;
			font-size: 0.6rem;
			color: #666;

			.imgs {
				width: 15 / 3rem;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				margin: 0.6rem 0;

				img {
					width: 1.6rem;
					height: 1.6rem;
					margin-bottom: 0.2rem;
				}
			}
		}
	}

	.campusNews {
		margin-top: 0.6rem;

		.news {
			display: flex;
			justify-content: center;
			align-content: center;
			flex-wrap: wrap;
			background-color: #fff;

			.newsContent {
				margin: 0.6rem 0.4rem;

				.newsImg {
					width: 6.5rem;
					height: 4rem;
					background-color: #e4e4e4;
					img {
						width: 100%;
						height: 100%;
					}
				}
				.newsword {
					display: flex;
					justify-content: space-between;
					font-size: 0.6rem;
					color: #999;
				}
			}

		}

		.news::after {
			content: '';
			display: block;
			width: 0;
			height: 0;
			clear: both;
			visibility: hidden;
		}
	}
</style>
