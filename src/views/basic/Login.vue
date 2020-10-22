<template>
	<div class="login">
		<div class="loginImg w">
			<img src="../../assets/image/register3.png">
		</div>
		<div class="loginBorder">
			<input type="text" placeholder="USERNAME" v-focus>
			<input :type="type" placeholder="PASSWORD">
			<img :src="src" @click="openeyes">
		</div>
		<div class="btns">
			<button class="btn">登录</button>
			<button class="btn" @click="jumpToreg">注册</button>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'login',
		data() {
			return {
				src: require('../../assets/icon/close.png'),
				type: 'password'
			}
		},
		methods: {
			openeyes() {
				this.type=this.type === 'password'?'text':'password';
				this.src=this.src===require('../../assets/icon/close.png')?require('../../assets/icon/open.png')
				:require('../../assets/icon/close.png');
			},
			jumpToreg() {
				this.$router.push('/identity');
			}
		}
	}
</script>

<style lang="less" scoped>
	@import "../../style/basics/login.css";
</style>
