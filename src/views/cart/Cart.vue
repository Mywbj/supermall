<template>
	<div class="cart">
	  <nav-bar class="navbar">
	    <div slot="center">购物车({{cartLength}})</div>
	  </nav-bar>
	  <!-- 商品结算列表 -->
	  <cart-list></cart-list>
	  <!-- 商品底部汇总 -->
	  <cart-bottom-bar></cart-bottom-bar>
	</div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import CartList from './childComps/CartList'
  import {mapGetters} from 'vuex'
  import CartBottomBar from './childComps/CartBottomBar'
	export default {
		name: 'Cart',
		components: {
		  NavBar,
		  CartList,
		  CartBottomBar
		},
		computed: {
		  // 把vuex里面的getters里面的方法 进行成计算属性
		  ...mapGetters(['cartLength'])
		},
		// 当组件活跃的时候触发这个函数
		activated() {
		  
		}
	}
</script>

<style scoped>
  .navbar {
    background: #FF873E;
    color: #fff;
    font-size: 14px;
  }
  .cart {
    background: #f0f0f0;
  }
</style>