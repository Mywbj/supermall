
<!-- 详情页面， -->
<template>
  <div id="detail">
    <detail-nav-bar ref="nav" class="bar-top" @GotuoScrollY="GotuoScrollY"></detail-nav-bar>
    <scroll class="content" ref="scroll" :probe-type="3" @scroll="scroll">
    <!-- to轮播图 -->
    <detail-swiper :top-images="topImages"></detail-swiper>
    <detail-base-info :Goods="Goods"></detail-base-info>
    <detail-shop-info :Shop="Shop"></detail-shop-info>
    <detail-goods-info :detail-info="detailInfo" @imagesLoad="imagesLoad"></detail-goods-info>
    <detail-param-info :param-info="paramInfo" ref="parameter"></detail-param-info>
    <detail-comment-info :comment-info="commentInfo" ref="comment"></detail-comment-info>
    <goods-list :goods="recommends" ref="recommend"></goods-list>
    </scroll>
    <detail-bottom-bar @addMerchandise="addMerchandise"></detail-bottom-bar>
    <!-- 返回顶部 -->
    <tack-top @click.native="backClick" v-show="backShow"></tack-top>
  </div>
</template>

<script>
  import DetailNavBar from './childCompos/DetailNavBar'
  import DetailSwiper from './childCompos/DetailSwiper'
  import DetailBaseInfo from './childCompos/DetailBaseInfo'
  import DetailShopInfo from './childCompos/DetailShopInfo'
  import DetailGoodsInfo from './childCompos/DetailGoodsInfo'
  import DetailParamInfo from './childCompos/DetailParamInfo'
  import DetailCommentInfo from './childCompos/DetailCommentInfo'
  import DetailBottomBar from './childCompos/DetailBottomBar'
  import Scroll from 'components/common/scroll/Scroll'
  import GoodsList from 'components/content/goods/GoodsList'
  import {getDetail, Goods, Shop, GoodsParam, recommend} from 'network/detail'
  import {backTopMixin} from 'common/mixin'
  
  export default {
    name: 'Detail',
    components: {
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      DetailGoodsInfo,
      DetailParamInfo,
      DetailCommentInfo,
      DetailBottomBar,
      Scroll,
      GoodsList
    },
    mixins: [backTopMixin],
    data() {
      return {
        iid: null,
        topImages: [], // 轮播图数据
        Goods: {},
        Shop: {},
        detailInfo: {},
        paramInfo: {},
        commentInfo: {},
        recommends: [],
        GoscrollYs: [],
        currentIndex: 0
      }
    },
    methods: {
      // 加入购物车 先把数据传给vuex
      addMerchandise() {
        const product = {}
        product.iid = this.iid
        product.topImages = this.topImages[0]
        product.title = this.Goods.title
        product.desc = this.Goods.desc
        product.price = this.Goods.lowNowPrice
        
//      this.$store.commit('addCart', product)
        this.$store.dispatch('addCart', product).then(res => {
          this.$toast.show(res)
        })
      },
      imagesLoad() {
        this.$refs.scroll.refresh()
        
        this.GoscrollYs = []
        this.GoscrollYs.push(0)
        this.GoscrollYs.push(this.$refs.parameter.$el.offsetTop-44)
        this.GoscrollYs.push(this.$refs.comment.$el.offsetTop-44)
        this.GoscrollYs.push(this.$refs.recommend.$el.offsetTop-44)
        this.GoscrollYs.push(Number.MAX_VALUE)
      },
      GotuoScrollY(index) {
        this.$refs.scroll.scrollTo(0, -this.GoscrollYs[index], 0)
      },
      scroll(position) {
        // 返回顶部
        this.mixinTop(position)
        //
        let y = -position.y
        for(let i in this.GoscrollYs) {
          if(y > this.GoscrollYs[i]  && y < this.GoscrollYs[Number(i)+1]) {
            this.currentIndex = Number(i)
            this.$refs.nav.currentIndex = this.currentIndex
          }
        }
      }
    },
    created() {
      // 1.保存传入的iid
      this.iid = this.$route.params.iid
      // 2.根据iid请求商品详情数据
      getDetail(this.iid).then(res => {
        console.log(res)
        const data = res.data.result
        // 1. 获取顶部的图片轮播图数据
        this.topImages = data.itemInfo.topImages
        // 2. 获取商品信息
        this.Goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
        // 3. 创建店铺信息对象
        this.Shop = new Shop(data.shopInfo)
        // 4.保存商品的详情数据
        this.detailInfo = data.detailInfo
        // 5.获取参数的信息
        this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)
        // 6.取出评论的信息
        if(data.rate.cRate !== 0) {
          this.commentInfo = data.rate.list[0]
        }
        // 7. 请求推荐数据
        recommend().then(res => {
          this.recommends = res.data.data.list
        })
      })
      
      this.$bus.$on('transmitScroll', (message) =>{
        console.log(message)
      })
    },
  }
</script>

<style scoped>
  #detail {
    position: relative;
    background-color: #Fff;
    z-index: 9;
  }
  .content {
    overflow: hidden;
    height: calc(100vh - 44px - 49px);
  }
  .bar-top {
    position: relative;
    z-index: 9;
    background-color: #fff;
  }
</style>