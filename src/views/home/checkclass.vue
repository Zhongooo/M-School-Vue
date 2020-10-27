<template>
	<div class="checkclass">
		<myheader rehead="true" middle="选择接收班级" right="确定"></myheader>
		<div class="top">
			<div class="search">
				<img src="../../assets/icon/搜索.png">
				<span>搜索班级</span>
			</div>
		</div>
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
	}
</script>

<style lang="less" scoped>
	@import "../../style/user/index.css";
	.top {
		position: relative;
		margin-top: 2rem;
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
	}
</style>
