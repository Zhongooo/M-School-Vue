<template>
	<div class="chatroom">
		<input type="text" v-model="msg" @confirm="sendmsg" class="chatVal">
		<button type="default" class="btn" @click="sendmsg">发送</button>
		<div v-for="(item,index) in datas" :key="item" class="chatmsg">
			{{item}}
		</div>
	</div>
</template>

<script>
	import Vue from 'vue';
	import VueSocketIO from 'vue-socket.io';
	Vue.use(new VueSocketIO({
	    debug: false,
	    connection: 'http://localhost:3001'
	}));
	export default {
		name:'chatroom',
		data() {
			return {
				datas:[],
				msg:''
			}
		},
		methods: {
			sendmsg() {
				console.log('点击了发送消息！');
				this.$socket.emit('client', this.msg);
				this.msg = '';
			},
		},
		created(){
			this.sockets.subscribe('hhh', (data) => {
				this.datas.push(data);
			})
		},
		sockets: {
			connect: function() {
				console.log('socket connected');
			},
			res: function(val) {
				console.log('接收到服务端消息', val);
			}
		}
	}
</script>

<style>
</style>
