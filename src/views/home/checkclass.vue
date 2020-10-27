<template>
	<div class="checkclass">
		<myheader rehead="true" middle="选择接收班级" right="确定"></myheader>
		<div class="top w">
			<div class="search">
				<img src="../../assets/icon/搜索.png">
				<span>搜索班级</span>
			</div>
		</div>

		<div class="mid">
			<van-radio-group v-model="radio" @change="rad">
				<div class="sel" v-for="(item,index) in options" :key="index">
					<van-radio :name="item.name" checked-color="#ffcc00">
						<div class="decora w">
							<div class="pic"><img src="../../assets/icon/smile.png" width="50" height="50"></div>
							<div class="msg">
								<div style="font-size: 0.7rem;">{{item.myclass}}</div>
								<div style="font-size: 0.6rem;color: #aeaeae;">教师0/0 成员1/1</div>
							</div>
						</div>
					</van-radio>
				</div>
			</van-radio-group>

		</div>
	</div>
</template>

<script>
	import myheader from '../../components/Header';
	import datas from '../../../common/js/datas.js';
	import Vue from 'vue';
	import {
		RadioGroup,
		Radio
	} from 'vant';
	Vue.use(Radio).use(RadioGroup);
	export default {
		name: 'issue',
		data() {
			return {
				radio: '1',
				options: []
			}
		},
		components: {
			myheader
		},
		methods: {
			rad() {
				console.log(this.radio);
			}
		},
		created() {
			this.options = datas.options();
			console.log(this.options);
		}
	}
</script>
<style>
	.van-radio__label {
		line-height: 1.4rem;
	}
</style>
<style lang="less" scoped>
	@import "../../style/user/index.css";

	.top {
		position: relative;
		margin-top: 2rem;
		height: 3.2rem;
		background-color: #fff;

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
				margin: 0 0.3rem;
			}

			span {
				font-size: 0.6rem;
				color: #cccccc;
			}
		}
	}

	.mid {
		position: relative;
		min-height: 30rem;
		padding: 0 0.6rem;
		font-size: 0.8rem;
		background-color: #fff;
		.decora {
			display: flex;
			
			
			background-color: #fff;
			border-bottom: 1px solid gainsboro;
			
		}
		.pic {
			img {
				position: relative;
				top: 50%;
				transform: translateY(-50%);
			}
		}
		.msg {
			position: relative;
			left: 1rem;
		}
	}
</style>
