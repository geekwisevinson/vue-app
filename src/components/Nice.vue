<template>
	<div>
		<div v-html="msg"></div>
		<button v-on:click="reverseString()">reverse message</button>
		<input type="text" v-model="msg">
		<br>
		<div v-html="addHOneTag"></div>
		prop from app
		<br>
		{{prop_from_app}}
	</div>
</template>

<script type="text/babel">
	export default {
		name: 'Nice',
		props:{
			prop_from_app:{
				type: String,
				default: "no prop from top"

			}
		},
		data () {
			return {
				msg: 'hello world'
			}
		},
		methods:{
			reverseString(){
				this.msg = this.msg.split('').reverse().join('');
			}
		},
		computed:{
			addHOneTag:function(){
				return "<h1>"+this.msg+"</h1>";
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