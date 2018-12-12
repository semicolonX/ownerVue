<template>
	<div class="productList">
		
		<MenuList></MenuList>
		
		<router-view></router-view>
	</div>
</template>

<script>
	import MenuList from './MenuList.vue'
	
	export default {
		name: 'ProductList',
		data () {
			return {
				msg: ''
			}
		},
		components: {
			MenuList
		}
	}
</script>

<style>
	.productList{
		float: left;
		min-width: 960px;
		min-height: 200px;
	}
</style>