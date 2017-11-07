<template>
	<div class="parent">
			<div class="child"><slot>垂直居中的文本</slot></div>
	</div>
</template>
<script>
export default {
  name: 'verticMid'
}
</script>
<style scoped>
	.parent{
		height: 100%;
		width: 100%;
		display: table;
	}
	.child{
		display: table-cell;
		vertical-align: middle;
	}
</style>