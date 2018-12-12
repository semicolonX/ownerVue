<template>
	<div class="menuLists">
		<div class="ml_list">
			<div class="ml_title">全部产品</div>
			<template v-for=" menu in menuList ">
				<h4 class="ml_name">{{menu.name}}</h4>
				<ul>
					<li v-for=" item in menu.list ">{{item.temName}}</li>
				</ul>
			</template>
		</div>
		
		<div class="ml_list">
			<div class="ml_title">最新消息</div>
				<ul class="infoList">
					<li v-for=" item in tips ">{{item.temName}}</li>
				</ul>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'MenuList',
		data () {
			return {
				menuList: [
					{
						name: '接口文档',
						list: [
							{temName: '新增数据'},
							{temName: '查看数据'},
							{temName: '数据分析'},
							{temName: '产品发布'}
						]
					},
					{
						name:'手机应用类',
						list: [
							{temName: '手机助手'},
							{temName: '产品助手'},
							{temName: '智能地图'}
						]
					}
				],
				tips: [
					{temName: '静夜思'},
					{temName: '李白'},
					{temName: '床前明月光，疑是明月光？'},
					{temName: '疑是地上霜。'},
					{temName: '举头望明月，低头望明月？'},
					{temName: '低头思故乡。'}
				]
			}
		}
	}
</script>

<style scoped="scoped">
	.menuLists{
		width: 200px;
		float: left;
		margin-right: 15px;
	}
	.ml_list{
		width: 200px;
		min-height: 100px;
		font-size: 14px;
		line-height: 30px;
		text-align: left;
		background-color: white;
		margin-bottom: 5px;
	}
	.ml_title{
		width: 100%;
		height: 35px;
		line-height: 35px;
		background-color: #CE0000;
		box-sizing: border-box;
		padding: 0 30px;
		color: white;
	}
	.ml_name{
		padding: 0 30px;
		margin: 15px 0;
	}
	ul{
		border-bottom: 2px solid #EFF1F3;
		padding: 0;
		margin: 0;
		padding-bottom: 10px;
	}
	li{
		list-style: none;
		padding-left: 35px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	li:hover{
		color: #CE0000;
		background-color: #EFF1F3;
		cursor: pointer;
	}
	.infoList{
		padding-top: 15px;
	}
</style>