<template>
    <div class="midHeader">
		<div class="left">{{left}}</div>
		<div class="right">{{right}}</div>
	</div>
</template>

<script>
    export default {
		name:'midHeader',
		props:['left','right'],
        data() {
            return {
				
            }
        }
    };
</script>
<style lang="less" scoped> 
	.midHeader {
		display: flex;
		position: relative;
		justify-content: space-between;
		align-items: center;
		background-color: #fff;
		height: 1.8rem;
		width: 15rem;
		.left {
			font-size: 0.6rem;
			font-weight: 600;
			margin-left: 0.6rem;
		}
		.right {
			font-size :0.5rem;
			color: #666;
			margin-right: 0.6rem;
		}
	}
	.midHeader::after {
			content:'';
			position: absolute;
			width: 15rem;
			height:3px;
			top: 1.8rem;
			background-color: #ccc;
			transform: scaleY(0.2);
		}
</style>
