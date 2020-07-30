<template>
  <div id="bootom-bar">
    <div class="bootom-service">
      
      <div>
        <div class="service-ico"></div>
          <span>客服</span>
        </div>
      <div>
        
      <div>  
        <div class="shop-ico"></div>
          <span>店铺</span>
        </div>
      </div>
      
      <div>
        <div class="collect-ico"></div>
        <span>收藏</span>
      </div>    
      
    </div>
    
    <div class="sss">
      <div>
        <span @click="addMerchandise">加入购物车</span>
      </div>
      <div>
        <span>购买</span>
      </div>
    </div>
    
  </div>
</template>

<script>
  export default {
    name: 'DetailBottomBar',
    methods: {
      addMerchandise() {
        this.$emit('addMerchandise')
      }
    }
  }
</script>

<style scoped>
  #bootom-bar {
    height: 49px;
    background: #fff;
    position: relative;
    z-index: 999;
    text-align: center;
    display: flex;
  }
  .bootom-service {
    width: calc(100vw - 85px - 85px);
    display: flex;
    justify-content: space-around;
  }
  .bootom-service>div {
    font-size: 14px;
  }
  .service-ico {
    width: 50px;
    height: 31px;
    background: url(~assets/img/detail/detail_bottom.png) no-repeat center -58px / 50%;
  }
  .shop-ico {
    width: 50px;
    height: 28px;
    margin-bottom: 3px;
    background: url(~assets/img/detail/detail_bottom.png) no-repeat center -108px / 50%;
  }
  .collect-ico {
    width: 50px;
    height: 31px;
    background: url(~assets/img/detail/detail_bottom.png) no-repeat center 3px / 50%;
  }
  .sss {
    height: 49px;
    position: absolute;
    right: 0;
    display: flex;
  }
  .sss div:nth-of-type(1) {
    background: yellow;
    color: #000;
  }
  .sss div:nth-of-type(2) {
    background: hotpink;
    color: #fff;
  }
  .sss div {
    font-size: 15px;
    width: 85px;
    line-height: 49px;
  }
</style>