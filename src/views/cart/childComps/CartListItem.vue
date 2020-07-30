<template>
  <div id="cart-info">
    <div class="cart-item-box">
      <!-- 选中和不选中 -->
      <check-button class="check-button"
        :is-check="cartList.check"
        @click.native="checkClick">
      </check-button>
        
      <div class="item-box1">
        <img :src="cartList.topImages">
      </div>
      <div class="item-box2">
        <p class="cart-title">{{cartList.title}}</p>
        <p class="cart-desc">{{cartList.desc}}</p>
        <div class="bottom-price">
          <span class="cart-price">￥{{cartList.price}}</span>
          <span class="cart-sum">x{{cartList.count}}</span>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
  import CheckButton from 'components/content/checkButton/CheckButton'
  export default {
    name: 'CartListItem',
    components: {
      CheckButton
    },
    props: {
      cartList: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    methods: {
      checkClick() {
        this.cartList.check = !this.cartList.check
      },
      sssaaa() {
//      this.$store.dispatch('addCounter', this.cartList)
      }
    }
  }
</script>

<style scoped>
  #cart-info {
    padding: 0 5px;
  }
  .cart-item-box {
    display: flex;
    padding: 7px 5px 6px 5px;
    background: #fff;
    border-radius: 10px;
    margin: 5px 0;
    align-items: center;
  }
  .item-box1 img {
    width: 80px;
    height: 90px;
    border-radius: 5px;
  }
  .item-box1 {
    margin-left: 5px;
  }
  .item-box2 {
    width: 100%;
    margin-left: 10px;
    white-space: nowrap;
    overflow: hidden;
  }
  .item-box2 p {
    text-overflow: ellipsis;
    overflow: hidden;
    margin-bottom: 15px;
  }
  .bottom-price {
    display: flex;
    justify-content: space-between;
  }
  .bottom-price .cart-price {
    font-size: 14px;
    color: #FF6700;
  }
  .bottom-price .cart-sum {
    font-size: 14px;
    color: #000;
  }
  .cart-title {
    color: #000;
    font-size: 15px;
    font-weight: 600;
  }
  .cart-desc {
    font-size: 13px;
    margin: 23px 0;
  }
  /* checkButton */
  .check-button {
    width: 20px;
    height: 20px;
  }
</style>