<template>
	<div class="assign">
		<myheader rehead="true" middle="作业" jumpto="true" jumpmsg="发布"></myheader>
		<div style="margin-top: 2.2rem;">
			<div class="receive w" @click="jump">
				<span>接收班级</span>
				<div class="myclass">
					<span>六年五班</span>
					<img src="../../assets/icon/next.png" width="20" height="20">
				</div>
			</div>
		</div>
		<van-field v-model="subject" label="学科" placeholder="请输入学科"/>
		<van-field v-model="title" label="标题" placeholder="请输入标题"/>
		<van-field readonly clickable label="结束时间" :value="endDate" @click="showendDate = true"/>
		<van-datetime-picker v-show="showendDate" show-toolbar type="date" :min-date="minDate" :max-date="maxDate"
		 @cancel="showendDate = false" @confirm="ConfirmEnd"/>
		 <textarea class="content" v-model="content" placeholder="请输入要发布的作业内容,别布置太多今晚要早睡"></textarea>
		 
	</div>
</template>

<script>
	import myheader from '../../components/Header';
	import moment from 'moment';
	import Vue from 'vue';
	import {
		Field
	} from 'vant';
	import {
		Picker
	} from 'vant';
	import {
		DatetimePicker
	} from 'vant';
	Vue.use(Field).use(Picker).use(DatetimePicker);
	export default {
		name: 'assign',
		components: {
			myheader
		},
		data() {
			return {
				subject:'',
				title:'',
				content:'',
				showendDate: false,
				minDate: new Date(2020, 0, 1),
				maxDate: new Date(2025, 10, 1),
				endDate: moment().format('YYYY MM-DD'),
			}
		},
		methods: {
			jump() {
				this.$router.push('/homework/checkclass')
			},
			ConfirmEnd(time) {
				this.endDate=moment(time).format('YYYY MM-DD');
				this.showendDate=false;
			}
		}
	}
</script>

<style lang="less" scoped>
	@import "../../style/user/index.css";

	.receive {
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 0.6rem;
		height: 2rem;
		background-color: #fff;
		border-bottom: 1px solid gainsboro;
		span {
			margin-left: 0.6rem;
			color: #646566;
		}

		.myclass {
			position: relative;
			display: inline-block;
			margin-right: 1rem;

			span {
				background-color: gainsboro;
				padding: 0.25rem 0.3rem;
				border-radius: 0.5rem;
				font-size: 0.5rem;
			}

			img {
				position: absolute;
				top: 50%;
				transform: translateY(-50%);
			}
		}
	}
	.content {
		width: 13rem;
		height: 20rem;
		padding: 0.5rem 1rem;
		border: 0;
		font-size: 0.6rem;
		outline: none;
	}
</style>
