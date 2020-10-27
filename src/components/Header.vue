<template>
    <div class="myheader">
		<div class="left">{{left}}</div>
		<div class="rehead" v-show="rehead">
			<img src="../assets/icon/return.png" width="20" height="20" @click="backto">
		</div>
		<div class="middle">
			{{middle}}
		</div>
		<div class="right" @click="jump">{{right}}</div>
		<div class="jumpto" v-show="jumpto" @click="backto">{{jumpmsg}}</div>
	</div>
</template>

<script>
    export default {
		name:'myheader',
		props:['left','right','rehead','middle','jumpto','jumpmsg'],
        data() {
            return {
				
            }
        },
		methods:{
			jump() {
				if(this.right==='登录'){
					this.$router.push('/login')
				}else if(this.right==='确定') {
					this.$router.go(-1);
				}
				return;
			},
			backto() {
				this.$router.go(-1);
			},
		}
    };
</script>
<style lang="less" scoped> 
	.myheader {
		display: flex;
		justify-content: space-between;
		align-items: center;
		background-color: #fff;
		height: 2rem;
		width: 15rem;
		position: fixed;
		z-index: 999;
		top: 0;
		.left {
			font-size: 0.7rem;
			font-weight: 600;
			margin-left: 0.6rem;
		}
		.right {
			font-size :0.6rem;
			color: #3478f7;
			margin-right: 0.6rem;
		}
		.middle {
			font-size: 0.7rem;
		}
		.rehead {
			position: absolute;
			left: 0.3rem;
		}
		.jumpto {
			position: absolute;
			font-size: 0.6rem;
			right: 0.2rem;
			padding: 0.2rem 0.7rem;
			border-radius: 0.8rem;
			background-color: #fed801;
		}
	}
</style>