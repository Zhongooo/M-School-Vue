<template>
	<div class="infoIcon">
		{{msg}}
	</div>
</template>

<script>
	export default {
		name:'infoIcon',
		props:['msg']
	}
</script>

<style scoped>
	.infoIcon {
		width: 2rem;
		height: 1.1rem;
		font-size: 0.4rem;
		background-color: #ecffff;
		color: #4d89ff;
		border-radius: 1rem;
		text-align: center;
		line-height: 1.1rem;
	}
</style>
