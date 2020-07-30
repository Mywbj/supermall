<template>
  <div class="bottom-bar">
    <div class="check-botton">
      <check-button class="check-bar" :is-check="isSelectAll" @click.native="elseCheck"></check-button>
      <span>全选</span>
    </div>
    
    <div class="sum-count">
          合计：<span>{{totalPaice}}</span>
    </div>
    
    <div class="pay-the-bill" @click="GoAccounts">
          去结算({{checkLength}})
    </div>
  </div>
</template>

<script>
  import CheckButton from 'components/content/checkButton/CheckButton'
  import {mapGetters} from 'vuex'
  export default {
    name: 'CartBottomBar',
    components: {
      CheckButton
    },
    methods: {
      GoAccounts() {
        // 判断是否有商品选中，如果全部不选中那就弹出toast
        let aa = this.cartLists.find(item => item.check)
        if(this.cartLists.length === 0 || aa == undefined) {
          this.$toast.show('请选择购买的商品')
        }
      },
      elseCheck() {
        // 判断 这个东西是否为选中和不选中，如果有不选中的这个函数会返回一个false
        // 如果全部都选中的 那就返回一个 true
        if(this.isSelectAll) { // 返回true的时候就证明商品全部给选中了  就执行这个全部设置成false的条件
          this.cartLists.forEach(item => item.check = false)
        }else { // 返回false的时候就证明有一些商品是没有给选中的 就执行这个全部设置成true的条件
          this.cartLists.forEach(item => item.check = true)
        }
      }
    },
    computed: {
      ...mapGetters(['cartLists']),
      totalPaice() {
        return '￥' + this.cartLists.filter(item => {
          return item.check
        }).reduce((preValue, item) => {
          return preValue + item.price * item.count
        }, 0).toFixed(2)
      },
      checkLength() {
        return this.cartLists.filter(item => {
          return item.check
        }).length
      },
      isSelectAll() {
        // 判断是否全选
        if(this.cartLists.length === 0) return false
        // 高级函数遍历判断
//      filter 性能不是很好，因为它要全部遍历完
//      return !this.cartLists.filter(item => !this.check)
//      find 如果找到一个满足判断条件的，那就直接返回了
        return !this.cartLists.find(item => !item.check)
        
        // 普通遍历判断
//      for(let item of this.cartLists) {
//        if(!item.check) {
//          return false
//        }
//      }
//      return true
      }
    }
  }
</script>

<style scoped>
  .bottom-bar {
    position: relative;
    align-items: center;
    display: flex;
    justify-content: space-between;
    height: 40px;
    padding: 5px 8px;
    text-align: center;
    background-color: #F0F8FF;
    font-size: 15px;
  }
  .check-bar {
    width: 20px;
    height: 20px;
  }
  .check-botton {
    display: flex;
  }
  .check-botton span {
    margin: 2px 0 0 5px;
  }
  .sum-count {
    color: #101010;
  }
  .sum-count span {
    color: #ff6700;
  }
  .pay-the-bill {
    width: 90px;
    height: 40px;
    line-height: 40px;
    background: #ff6700;
    color: #fff;
  }
</style>