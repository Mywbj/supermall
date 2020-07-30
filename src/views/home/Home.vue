<template>
	<div id="home">
		<!-- 顶 -->
		<nav-bar class="home-nav">
			<div slot="center">购物街</div>
		</nav-bar>
		
      <tab-control v-show="tabConIf" class="tab-control tabCOnc" 
        :titles="['流行', '新款', '精选']" 
        @tabClick="tabClick"
        ref="tabCont2"></tab-control>
        
		<scroll class="content" ref="scroll" 
		  :probe-type="3" 
		  @scroll="contentScroll" 
		  :pull-up-load="true"
		  @pullingUp="loadMore">
      <!-- 插入轮播图 -->
      <home-swiper :banners="banners"></home-swiper>
      <!-- -->
      <recommend-view :recommends="recommends"></recommend-view>
      
      <!--  -->
      <feature-view></feature-view>
       
      <!--  -->
      <tab-control class="tab-control" 
        :titles="['流行', '新款', '精选']" 
        @tabClick="tabClick"
        ref="tabCont"></tab-control>
    
      <!--  -->
      <goods-list :goods="showGoods" @click.native="scrollSSSS"></goods-list>		  
		</scroll>
		<!-- 返回顶部 -->
		<tack-top @click.native="backClick" v-show="backShow"></tack-top>
	</div>
</template>
<script>
	import NavBar from 'components/common/navbar/NavBar'
	import HomeSwiper from 'views/home/childComps/HomeSwiper'
	import RecommendView from 'views/home/childComps/RecommendView'
	import FeatureView from './childComps/FeatureView'
	import GoodsList from 'components/content/goods/GoodsList'
  import Scroll from 'components/common/scroll/Scroll'
	
	import TabControl from 'components/content/tabControl/TabControl'
	
	import {
		getHomeMultidata,
		getHomeGoods
	} from 'network/home'
	
	import {backTopMixin} from 'common/mixin'
	
	export default {
		name: 'Home',
		components: {
			NavBar,
			HomeSwiper,
			RecommendView,
			FeatureView,
			TabControl,
			GoodsList,
			Scroll
		},
		data() {
			return {
				banners: [],
				recommends: [],
				goods: {
					'pop': {page: 0, list: []},// 流行
					'new': {page: 0, list: []},// 新款
					'sell': {page: 0, list: []} // 精选
				},
				currentType: 'pop',
				saveY: 0,
				tabConIf: false // 解决吸顶
			}
		},
		mixins: [backTopMixin],
		created() { //生命周期
			// 1.请求多个数据
			this.getHomeMultidata()
			// 2.请求商品数据
			this.getHomeGoods('pop')
			this.getHomeGoods('new')
			this.getHomeGoods('sell')
		},
		mounted() { //生命周期
		  // 防抖动
		  const refresh = this.debounce(this.$refs.scroll.refresh, 50)
      // 事件总线
      this.$bus.$on('ItemImageLoad', () => {
      this.debounce()
        // 监听图片加载完就刷新一次scrollHeight
        refresh()
      })		  
		},
		computed: { // 计算属性
			showGoods() {
				return this.goods[this.currentType].list
			}
		},
		// 当组件活跃的时候触发这个函数
		activated() {
		  this.$refs.scroll.scrollTo(0, this.saveY, 0)
		  this.$refs.scroll.refresh()
		},
		// 当组件不活跃的时候触发这个函数
		deactivated() {
		  console.log('不活跃')
		  this.saveY = this.$refs.scroll.scrollSaveY()
		},
		methods: {
			/*
			 事件监听相关的方法
			 * */
			scrollSSSS() {
			  this.$bus.$emit('addcs', this.$refs.scroll)
			},
			// 防抖动
			debounce(fn, delay) {
			  let timer = null
			  return () => {
        if(timer) clearTimeout(timer)
			   timer = setTimeout(() => {
           fn.apply(this)
			    }, delay)
			  }
			},
      // 监听滚动 如果大于800就显示返回顶部
      contentScroll(position) {
        // 判断是否吸顶
        this.tabConIf = (-position.y) >= this.$refs.tabCont.$el.offsetTop
        // 判断是否显示返回顶部按钮
        this.mixinTop(position)
      },
      // 加载更多
      loadMore() {
//      console.log('加载更多')
        this.getHomeGoods(this.currentType)
      },
			tabClick(index) {
//				console.log(index)
				switch (index) {
					case 0:
						this.currentType = 'pop'
						break;
					case 1:
						this.currentType = 'new'
						break;
					case 2:
						this.currentType = 'sell'
						break;
				}
				// 解决吸顶
				this.$refs.tabCont.currentIndex = index
				this.$refs.tabCont2.currentIndex = index
			},
			/*
			 网络请求相关的方法
			 * */
			getHomeMultidata() { // 轮播图
				getHomeMultidata().then(res => {
					this.banners = res.data.data.banner.list
					this.recommends = res.data.data.recommend.list
				})
			},
			getHomeGoods(type) {
				const page = this.goods[type].page + 1
				console.log(type+page)
				getHomeGoods(type, page).then(res => {
					this.goods[type].list.push(...res.data.data.list)
					this.goods[type].page + 1
					// 等数据请求完成之后调用加载更多
					this.$refs.scroll.finishPullUp()
				})
			}
		}
	}
</script>

<style scoped>
	#home {
		padding-top: 44px;
	}
	.home-nav {
		color: #fff;
		background-color: #FF873E;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 9;
		font-size: 15px;
	}
	.tab-control {
		/* 这个属性帮你判断如果你到44，就自动变成fixed 固定定位*/
		/*position: sticky;*/
		/*top: 44px;*/
		/*position: fixed;*/
	}
	
	.content {
	  height: calc(100vh - 93px);
	  overflow: hidden;
	}
	.tabCOnc {
	  width: 100vw;
	  position: fixed;
	  z-index: 20;
	}
</style>