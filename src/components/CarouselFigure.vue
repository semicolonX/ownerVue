<template>
	<div class="carousel">
		<div class="cFigure">
			<SliderShow :slides="slides"></SliderShow>
		</div>
		
		<div class="hotFunction">
			<div class="hotFuns">
				<div class="hFlogo"></div>
				<div class="hFtitle">标题标题</div>
				<div class="hFbrief">简介简介简介简介简介简介</div>
				<div class="hFbtn">点击进入</div>
			</div>
			<div class="hotFuns">
				<div class="hFlogo"></div>
				<div class="hFtitle">标题标题</div>
				<div class="hFbrief">简介简介简介简介简介简介</div>
				<div class="hFbtn">点击进入</div>
			</div>
			<div class="hotFuns">
				<div class="hFlogo"></div>
				<div class="hFtitle">标题标题</div>
				<div class="hFbrief">简介简介简介简介简介简介</div>
				<div class="hFbtn">点击进入</div>
			</div>
			<div class="hotFuns">
				<div class="hFlogo"></div>
				<div class="hFtitle">标题标题</div>
				<div class="hFbrief">简介简介简介简介简介简介</div>
				<div class="hFbtn">点击进入</div>
			</div>
		</div>
	</div>
</template>

<script>
	import SliderShow from './SliderShow'
	
	export default {
		created: function() {
			this.$http.post('http://10.0.158.25:9001/MSreport/permission?flag=A_P_Q&permissionType=D',{"peopleId": "86000807"})
			.then(function(data) {
				console.log(data)
			}, function(err) {
				console.log(err)
			})
		},
		components: {
			SliderShow
		},
		data() {
			return {
				mag: 'CarouseFigure.vue',
				invTime: 2000,
				slides:[
					{
						src: require('../assets/loginBg.gif'),
						title: 'hahahahaha',
						href: '#'
					}
				]
			}
		}
	}
</script>

<style>
	.carousel{
		float: left;
		width: 730px;
		height: 100%;
	}
	.hotFunction{
		width: 100%;
		height: 100%;
	}
	.hotFuns{
		width: 350px;
		height: 120px;
		box-sizing: border-box;
		padding: 10px;
		background-color: white;
		float: left;
	}
	.hotFuns:nth-child(2n+1){
		margin-right: 30px;
	}
	.hotFuns:nth-child(n+3){
		margin-top: 15px;
	}
	.hFlogo{
		float: left;
		width: 80px;
		height: 80px;
		margin-top: 10px;
		background: url(../../build/logo.png) no-repeat center center;
		background-size: 100%;
	}
	.hFtitle, .hFbrief, .hFbtn{
		float: left;
		width: 200px;
		height: 30px;
		line-height: 30px;
		margin-left: 15px;
		text-align: left;
		font-size: 14px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.hFtitle{
		font-weight: bold;
	}
	.hFbrief{
		height: 25px;
		line-height: 25px;
		font-size: 13px;
		color: #C0C0C0;
	}
	.hFbtn{
		width: 90px;
		background-color: #CE0000;
		color: white;
		text-align: center;
		margin-top: 5px;
		height: 30px;
		line-height: 30px;
		cursor: pointer;
	}
	.cFigure{
		width: 100%;
		height: 250px;
		border: 1px solid black;
		margin-bottom: 15px;
	}
</style>