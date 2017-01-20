<template src="./login.html">
</template>

<script type="text/babel">
	import c_header from '../../shared/c_header/c_header';

	export default {
		name: 'login',
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
				msg: 'login page',
				users:[]
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
			console.log('created login');
			console.log('params',this.$route.params);
			if(this.$route.params.users){
				this.users = this.$route.params.users;
			}

		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  src="./login.css">

</style>