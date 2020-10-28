<template>
	<div class="tabbar">
		<van-tabbar v-model="active" active-color="#5f60b5" fixed placeholder>
			<van-tabbar-item replace v-for="(item,index) in list" :key="index" :to="item.path">
				<span>{{item.title}}</span>
				<img slot="icon" slot-scope="props" :src="props.active ? item.active : item.inactive" />
			</van-tabbar-item>
		</van-tabbar>
	</div>
</template>
<script>
	import Vue from 'vue';
	import {
		Tabbar,
		TabbarItem
	} from 'vant';
	Vue.use(Tabbar);
	Vue.use(TabbarItem);
	export default {
		name: 'Tabbar',
		data() {
			return {
				active: 0,
				list: [
					{
						path: '/',
						title: '首页',
						active: require('../assets/icon/首页.png'),
						inactive: require('../assets/icon/首页灰.png')
					},
					{
						path: '/myclass',
						title: '班级',
						active: require('../assets/icon/联系.png'),
						inactive: require('../assets/icon/联系灰.png')
					},
					{
						path: '/chat',
						title: '私聊',
						active: require('../assets/icon/消息.png'),
						inactive: require('../assets/icon/消息灰.png'),
					},
					{
						path: '/user',
						title: '我的',
						active: require('../assets/icon/我的.png'),
						inactive: require('../assets/icon/我的灰.png'),
					},
				]
			};
		},
		mounted() {
			switch (this.$route.name) {
				case 'home':
					this.active = 0;
					break;
				case 'myclass':
					this.active = 1;
					break;
				case 'chat':
					this.active = 2;
					break;
				case 'user':
					this.active = 3;
			}
		}
	};
</script>
<style lang="less" scoped>
	@import "../style/user/index.css";
</style>