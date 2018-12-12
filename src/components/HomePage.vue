<template>
	<div class="homePage">
		<div class="hp-header">
			<img class="logo" src="../assets/logo.png"/>
			<div class="list">
				<div class="">我的</div>
				<div class="loginOut">登出</div>
				<div class="">关于</div>
			</div>
		</div>
		
		<div class="hp-content">
			<router-view></router-view>
		</div>
		
		<div class="hp-footer">
			welcome to use.
		</div>
	</div>
</template>

<script>
export default {
	name: 'HomePage',
	data () {
		return {
			msg: 'i am homePage'
		}
	}
}
</script>

<style>
	div{
		box-sizing: border-box;
	}
	.homePage{
		width: 100%;
		height: 100%;
		background-color: #EFF1F3;
		/*min-width: 800px;*/
		/*min-height: 600px;*/
	}
	.hp-header{
		width: 100%;
		height: 65px;
		background-color: #2C2C2C;
		color: white;
		text-align: left;
		padding: 15px;
		font-size: 13px;
		box-sizing: border-box;
		overflow: hidden;
	}
	.hp-header .logo{
		width: 35px;
		height: 35px;
	}
	.hp-header .list{
		float: right;
		width: 160px;
		height: 40px;
	}
	.hp-header .list div{
		float: right;
		width: 50px;
		height: 12px;
		line-height: 12px;
		text-align: center;
		margin-top: 13px;
		
	}
	.hp-header .list div:hover{
		color: #DD5246;
		cursor: pointer;
	}
	.loginOut{
		border-left: 1px solid white;
		border-right: 1px solid white;
	}
	.hp-content{
		float: left;
		width: 100%;
		height: 90%;
		padding: 10px 10px 50px 10px;
		overflow: scroll;
	}
	.hp-footer{
		width: 100%;
		height: 40px;
		line-height: 40px;
		font-size: 12px;
		text-align: center;
		position: fixed;
		bottom: 0;
		background-color: #E1E3E7;
	}
</style>