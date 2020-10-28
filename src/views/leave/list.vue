<template>
	<div class="leave">
		<myheader rehead="true" middle="请假" right="提交"></myheader>
		<div class="main">
			<van-field v-model="value" label="请假人" placeholder="请输入请假人" required/>
			<van-field readonly clickable label="请假类型" :value="reason" @click="showPicker = true" placeholder="点我快选!" required/>
			<van-picker v-show="showPicker" :columns="columns" show-toolbar @cancel="showPicker = false" @confirm="onConfirm"
			 :default-index="2" />
			 <van-field readonly clickable label="开始时间" :value="beginDate" @click="showbeginDate = true"  required/>
			<van-datetime-picker v-show="showbeginDate" show-toolbar type="date" :min-date="minDate" :max-date="maxDate"
			 @cancel="showbeginDate = false" @confirm="ConfirmBegin"/>
			 <van-field readonly clickable label="结束时间" :value="endDate" @click="showendDate = true"  required/>
			 <van-datetime-picker v-show="showendDate" show-toolbar type="date" :min-date="minDate" :max-date="maxDate"
			  @cancel="showendDate = false" @confirm="ConfirmEnd"/>
			  <van-field type="textarea" v-model="value" placeholder="请输入请假原因..." rows="8"  required/>
			  
		</div>
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
		name: 'leave',
		components: {
			myheader
		},
		data() {
			return {
				value: '',
				showPicker: false,
				showbeginDate: false,
				showendDate: false,
				reason: '',
				columns: ['事假', '病假', '无聊', '就是不想上学', '太丑'],
				minDate: new Date(2020, 0, 1),
				maxDate: new Date(2025, 10, 1),
				beginDate: moment().format('YYYY MM-DD'),
				endDate: moment().format('YYYY MM-DD'),
			}
		},
		methods: {
			onConfirm(reason) {
				this.reason = reason;
				this.showPicker = false;
				console.log(this.reason)
			},
			ConfirmBegin(time) {
				this.beginDate=moment(time).format('YYYY MM-DD');
				this.showbeginDate=false;
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

	.main {
		margin-top: 2.1rem;
	}
</style>
