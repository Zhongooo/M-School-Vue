<template>
	<div class="infoIcon" :class="color">
		{{msg}}
	</div>
</template>

<script>
	export default {
		name:'infoIcon',
		props:['msg','color']
	}
</script>

<style scoped>
	.infoIcon {
		width: 2rem;
		height: 1.1rem;
		font-size: 0.5rem;
		color: #fff;
		/* background-color: #ecffff; */
		border-radius: 1rem;
		text-align: center;
		line-height: 1.1rem;
	}
	.blue {
		background-color: #4d89ff;
	}
	.red {
		background-color: #f95e5a;
	}
	.deepblue {
		background-color: #4e58bc;
	}
</style>
