<template>
	<div class="sliders">
		<div class="slides-img">
			<a href="#">
				<img src="../../build/logo.png"/>
			</a>
		</div>
		<h2> {{slides[0].title}} </h2>
		<ul>
			<li>&lt;</li>
			<li>
				<a>1</a>
				<a>1</a>
				<a>1</a>
			</li>
			<li>&gt;</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'SliderShow',
		props: {
			slides:{
				type: Array,
				default: []
			}
			
		},
		data () {
			return {
				msg: ''
			}
		},
		mounted () {
			console.log(this.slides)
		}
	}
	
</script>

<style scoped="scoped">
	li{
		list-style: none;
		display: inline-block;
		cursor: pointer;
	}
	a:hover, ul li:nth-child(1):hover, ul li:nth-last-child(1):hover{
		color: #CE0000;
	}
	ul li:nth-child(1) {
		margin-right: 10px;
	}
	ul li:nth-last-child(1) {
		margin-left: 10px;
	}
	h2{
		position: absolute;
		width: 100%;
		height: 40px;
		bottom: 0;
		background-color: rgba(0,0,0,0.3);
		color: white;
		font-size: 14px;
		margin: 0;
		text-align: left;
		padding-left: 15px;
		line-height: 30px;
		box-sizing: border-box;
	}
	ul{
		width: 100%;
		height: 30px;
		line-height: 30px;
		position: absolute;
		bottom: 0;
		text-align: right;
		box-sizing: border-box;
		padding-right: 30px;
		color: white;
		margin: 0;
	}
	.sliders{
		width: 100%;
		height: 100%;
		overflow: hidden;
		position: relative;
	}
	.slides-img, .slides-img a{
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
	}
	.slides-img img{
		width: 100%;
		height: 100%;
	}
	
	
</style>