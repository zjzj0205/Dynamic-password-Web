<template>
	<div>
		<el-button @click="outLogin">退出登录</el-button>
	</div>
</template>

<script>
	export default{
		name:'main',
		methods:{
			outLogin(){
				window.sessionStorage.clear();
				this.$router.push("/login")
			}
		}
	}
</script>

<style>
</style>