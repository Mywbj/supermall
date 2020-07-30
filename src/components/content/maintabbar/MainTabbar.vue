<template>
	<div>
		<tab-bar>
	  	<!-- 动态封装了 点击的字体颜色 -->
	  	<tab-bar-itme path="/home" activeColor="#FF350A">
				<img slot="item-icon" src="~assets/img/tabbar/home.svg">
				<img slot="item-icon-active" src="~assets/img/tabbar/home_active.svg">
				<div slot="item-text">首页</div>
	  	</tab-bar-itme>
	  	<tab-bar-itme path="/category" activeColor="#FF350A">
				<img slot="item-icon" src="~assets/img/tabbar/category.svg">
				<img slot="item-icon-active" src="~assets/img/tabbar/category_active.svg">
				<div slot="item-text">分类</div>
	  	</tab-bar-itme>
	  	<tab-bar-itme path="/cart" activeColor="#FF350A">
				<img slot="item-icon" src="~assets/img/tabbar/shopcart.svg">
				<img slot="item-icon-active" src="~assets/img/tabbar/shopcart_active.svg">
				<div slot="item-text">购物车</div>
	  	</tab-bar-itme>
	  	<tab-bar-itme path="/profile" activeColor="#FF350A">
				<img slot="item-icon" src="~assets/img/tabbar/profile.svg">
				<img slot="item-icon-active" src="~assets/img/tabbar/profile_active.svg">
				<div slot="item-text">我的</div>
	  	</tab-bar-itme>
	  </tab-bar>
	</div>
</template>

<script>
	import TabBar from 'components/common/tabbar/TabBar.vue'
	import TabBarItme from 'components/common/tabbar/TabBarItme.vue'
	
	export default {
		name: 'MainTabbar',
		components: {
			TabBar,
			TabBarItme
		}
	}
</script>

<style>
</style>