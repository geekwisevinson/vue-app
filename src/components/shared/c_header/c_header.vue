<template src="./c_header.html">
</template>

<script type="text/babel">
	export default {
		name: 'c_header',
		props:{
			title:{
				type: String,
				default: "no prop from top"
			}
		},
		data () {
			return {
				msg: 'this is c_header'
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
		},
		created: function (){
			console.log('created c_header');

		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  src="./c_header.css">

</style>