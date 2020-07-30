<template>
  <div class="cart-list">
    <scroll class="content" ref="scroll">
      <cart-list-item v-for="(item, index) in cartLists" :key="index" :cart-list="item"></cart-list-item>
    </scroll>
  </div>
</template>

<script>
  import scroll from 'components/common/scroll/Scroll'
  import CartListItem from './CartListItem'
  import {mapGetters} from 'vuex'
  export default {
    name:'CartList',
    components: {
      scroll,
      CartListItem
    },
    computed: {
      ...mapGetters(['cartLists'])
    },
    // 当组件活跃的时候触发这个函数
    activated() {
      this.$refs.scroll.refresh()
    }
  }
</script>

<style scoped>
  .content {
    overflow: hidden;
    height: calc(100vh - 44px - 49px - 40px);
  }
</style>