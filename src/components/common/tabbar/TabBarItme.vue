<template>
	<div class="tab-bar-item" @click="itemClick">
		<div v-if="!isActive">
			<slot name="item-icon"></slot>
		</div>
		<div v-else>
			<slot name="item-icon-active"></slot>
		</div>
		<div :style="activeStyle">
			<slot name="item-text"></slot>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'TabBarItme',
		props: {
			path: String,
			activeColor: {
				type: String,
				default: 'red'
			}
		},
		data() {
			return {
//				isActive: true
			}
		},
		computed: {
			isActive() {
				// /home -> item1(/home) = true
				// /home -> item2(/category) = false
				// /home -> item3(/cart) = false
				// /home -> item4(/profile) = false
				return this.$route.path.indexOf(this.path) !== -1
			},
			activeStyle() {
				// 这里判断 如果为点击是true 那就动态添加字体颜色
				return this.isActive ? {color: this.activeColor} : {}
			}
		},
		methods: {
			itemClick() {
				console.log(this.path)
				this.$router.push(this.path)
			}
		}
	}
</script>

<style>
	.tab-bar-item {
		flex: 1;
		text-align: center;
		height: 49px;
		font-size: 14px;
	}
	.tab-bar-item img {
		width: 24px;
		height: 24px;
		margin-top: 3px;
		vertical-align: middle;
		margin-bottom: 2px;
	}
	.active {
		color: red;
	}
</style>