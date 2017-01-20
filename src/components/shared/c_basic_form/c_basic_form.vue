<template src="./c_basic_form.html">
</template>

<script type="text/babel">
	export default {
		name: 'c_basic_form',
		props:{
			title:{
				type: String,
				default: "no prop from top"
			},
			form_items:{
				type: Array,
				default : [],
			}
		},
		data () {
			return {
				msg: 'this is c_basic_form'
			}
		},
		methods:{
			submitForm(e){
				e.preventDefault();
				this.$http.get('http://localhost:5000/1.0.0/users/users')
					.then(users=>{
						console.log(users.data);
						this.$router.push({ name: 'login', params: { users: users.data }});
						console.log(this.$route.params);
					});
				console.log('submitted from');
			}
		},
		computed:{
			addHOneTag:function(){
				return "<h1>"+this.msg+"</h1>";
			}
		},
		created: function (){
			console.log('created c_basic_form');
			console.log(this.form_items);

		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  src="./c_basic_form.css">

</style>