<template src="./home.html">
</template>

<script type="text/babel">
	import c_header from '../../shared/c_header/c_header';

	export default {
		name: 'home',
		components: {
			c_header
		},
		props:{
			prop_from_app:{
				type: String,
				default: "no prop from top"

			}
		},
		data () {
			return {
				msg: 'home page'
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
			console.log('created home');

		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  src="./home.css">

</style>