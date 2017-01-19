<template src="./nice.html">
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
<style  src="./nice.css">

</style>