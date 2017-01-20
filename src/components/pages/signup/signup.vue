<template src="./signup.html">
</template>

<script type="text/babel">
	import c_header from '../../shared/c_header/c_header';
	import c_basic_form from '../../shared/c_basic_form/c_basic_form'

	export default {
		name: 'signup',
		components: {
			c_header,
			c_basic_form
		},
		props:{
			prop_from_app:{
				type: String,
				default: "no prop from top"

			}
		},
		data () {
			return {
				msg: 'signup page'
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
			console.log('created signup');

		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  src="./signup.css">

</style>