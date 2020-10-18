<template>
	<div class="swiper">
		<van-swipe :autoplay="3000" indicator-color="white">
			<van-swipe-item v-for="(item,index) in imgList" :key="index">
				<img v-lazy="require(`../assets/swiperImg/${item.img}`)" />
			</van-swipe-item>
		</van-swipe>
	</div>
</template>

<script>
	import Vue from 'vue';
	import { Swipe, SwipeItem,Lazyload} from 'vant';
	Vue.use(Swipe).use(SwipeItem).use(Lazyload);
	export default {
		name: 'swiper',
		props: {
			imgList: {
				type: Array,
				required: true
			}
		},
		data() {
			return {

			};
		},
	}
</script>
<style lang="less">
	.swiper {
		width: 15rem;
		height: 4rem;
		margin: 2rem 0 1.8rem;

		.van-swipe {
			height: 6rem;

			img {
				height: 100%;
				width: 100%;
			}
		}
	}
</style>
