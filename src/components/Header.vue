<template>
    <div class="myheader">
		<div class="left">{{left}}</div>
		<div class="right" @click="jump">{{right}}</div>
	</div>
</template>

<script>
    export default {
		name:'myheader',
		props:['left','right'],
        data() {
            return {
				
            }
        },
		methods:{
			jump() {
				if(this.right==='登录'){
					this.$router.push('/login')
				}
				return;
				
			}
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
	}
</style>