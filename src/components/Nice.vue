<template>
<div v-html="msg"></div>
</template>

<script>
	export default {
		name: 'Nice',
		data () {
			return {
				msg: '<h1>hello world</h1>'
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	h1 {
		color: red;
	}
</style>