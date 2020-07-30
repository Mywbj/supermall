<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  // 封装滚动
  import BScroll from 'better-scroll'
  export default {
    name: 'Scroll',
    props: {
      probeType: {
        type: Number,
        default: 0
      },
      pullUpLoad: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        scroll: null
      }
    },
    methods: {
      scrollTo(x, y, time=300) {
        this.scroll && this.scroll.scrollTo(x, y, time)
      },
      refresh() {
        this.scroll && this.scroll.refresh()
      },
      finishPullUp() {
        this.scroll.finishPullUp()
      },
      scrollSaveY() {
        return this.scroll.y
      }
    },
    mounted() {
      // 1. 创建BScroll对象
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true,
        probeType: this.probeType, // 是否实时监听滚动？
        pullUpLoad: this.pullUpLoad // 是否加载更多？
      })
      // 2. 监听滚动的位置
      this.scroll.on('scroll', (position) => {
        this.$emit('scroll', position)
      })
      // 3. 监听上拉加载更多
      if(this.pullUpLoad) {
        this.scroll.on('pullingUp', () => {
          this.$emit('pullingUp')
        })
      }
    }
  }
</script>

<style scoped>
</style>