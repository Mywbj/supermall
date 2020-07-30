<template>
  <div>
    <nav-bar>
      <div slot="left" class="back" @click="backClick">
        <img src="~assets/img/common/back.svg">
      </div>
      <div slot="center" class="title">
        <div v-for="(item, index) in titles" class="title-item" @click="itemClick(index)" :class="{active: index === currentIndex}">{{item}}</div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
  export default {
    name: 'DetailNavBar',
    components: {
      NavBar
    },
    data() {
      return {
        titles: ['商品', '参数', '评论', '推荐'],
        currentIndex: 0
      }
    },
    methods: {
      itemClick(index) {
        this.currentIndex = index
        this.$emit('GotuoScrollY', index)
      },
      // 点击返回上一页
      backClick() {
        this.$router.back()
      }
    }
  }
</script>

<style scoped>
  .title {
    display: flex;
    font-size: 15px;
  }
  .title-item {
    flex: 1;
  }
  .active {
    color: pink;
  }
  .back img {
    width: 20px;
    margin-top: 12px;
  }
</style>