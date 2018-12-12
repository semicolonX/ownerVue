<template>
	<div class="loginBg">
		<div class="l-info">
			<div class="l-info-bg"></div>
			<div class="l-input">
				<div class="l-word">账号</div>
				<input type="text" id="name" :value="passName" placeholder="工号"/>
			</div>
			<div class="l-input">
				<div class="l-word">密码</div>
				<input type="password" name="password" id="password" :value="passWord" />
			</div>
			
			<div class="subInfo" @click="submit()">登录</div>
			
		</div>
	</div>
</template>

<script>

export default {
	name: 'Login',
	data() {
		return {
			passName:'',
			passWord:''
		}
	},
	methods: {
		submit: function() {
			this.passName = document.getElementById("name").value;
			this.passWord = document.getElementById("password").value;
			console.log(this.passName+"--"+this.passWord);
			
			this.$router.push({ path: '/HomePage' })
		}
	}
}

</script>

<style scoped="scoped">
.loginBg{
	width: 100%;
	height: 100%;
	background: url(../assets/LoginBg.gif) repeat-y center center;
	background-size: 100%;
	
}
.l-info{
	width: 400px;
	height: 300px;
	margin: auto;
	position: relative;
	top: 20%;
	box-sizing: border-box;
	padding-top: 40px;
}
.l-info-bg{
	width: 400px;
	height: 300px;
	background-color: white;
	filter: blur(5px);
	opacity: 0.3;
	position: absolute;
	top: 0;
}
.l-input{
	position: relative;
}
.l-word{
	color: white;
	height: 40px;
	line-height: 40px;
}
input{
	width: 230px;
	height: 40px;
	background-color: white;
	font-size: 17px;
	text-align: left;
	border: none;
	padding: 0 15px;
	border-radius: 3px;
}
input:focus {
    outline:none;
}
.subInfo{
	width: 260px;
	margin-left: 70px;
	height: 40px;
	background-color: #DD4C4C;
	color: white;
	text-align: center;
	line-height: 40px;
	font-size: 17px;
	border-radius: 5px;
	margin-top: 30px;
	position: relative;
	cursor: pointer;
}
	
</style>