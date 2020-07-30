<template>
	<div class="goods-item" @click="itemClick">
		<img v-lazy="showImg" @load="itemImgLoad">
		<div class="goods-text">
			<p>{{goodsItem.title}}</p>
			<span class="price">￥{{goodsItem.price}}</span>
			<span class="collect">{{goodsItem.cfav}}</span>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'GoodsListItem',
		props: {
			goodsItem: {
				type: Object,
				default() {
					return {}
				}
			}
		},
		methods:{
		  // 监听图片是否加载完成
		  itemImgLoad() {
//		    console.log(1)
//      this.$bus 事件总线
        // 如果执行了一次监听图片是否加载完成,就会执行一次this.$bus.$emit 事件
		    this.$bus.$emit('ItemImageLoad')
		  },
		  itemClick() {
		    // 点击去到详情页
//		    console.log('详情页')
		    this.$router.push('/detail/' + this.goodsItem.iid)
		  }
		},
		computed: {
		  // 判断传过来的数据 再给img显示
		  showImg() {
		    return this.goodsItem.image || this.goodsItem.show.img
		  }
		}
	}
</script>

<style>
	.goods-item {
		width: 48%;
	}
	.goods-item img {
		width: 100%;
		border-radius: 5px;
	}
	.goods-text {
		text-align: center;
		padding: 3px;
	}
	.goods-text > p {
		white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    word-break: break-all;
    font-size: 13px;
	}
	.price {
		font-size: 14px;
		color: hotpink;
	}
	.collect {
		font-size: 12px;
		margin-left: 8px;
	}
	.collect::before {
		content: '';
		display: inline-block;
		width: 14px;
		height: 14px;
		transform: translateY(2px);
		background: url('~assets/img/common/collect.svg') 0 0/14px 14px;
	}
	/* 设置加载中时的图片 */
	img[lazy = loading] {
	  /*height: 270px;*/
	}
</style>