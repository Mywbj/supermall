<template>
  <div id="base-infos" v-if="Object.keys(Goods).length !==0">
    <div class="info-title">{{Goods.title}}</div>
    <div class="info-price">
      <span class="info-span1">{{Goods.price}}</span>
      <span class="info-span2">{{Goods.oldPrice}}</span>
      <span class="info-span3">{{Goods.discountDesc}}</span>
    </div>
    <div class="info-other">
      <span>{{Goods.columns[0]}}</span>
      <span>{{Goods.columns[1]}}</span>
      <span>{{Goods.services[Goods.services.length-1].name}}</span>
    </div>
    <div class="info-services">
      <span v-for="index in Goods.services.length-1">
        <img :src="Goods.services[index-1].icon">
        <span>{{Goods.services[index-1].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DetailBaseInfo',
    props: {
      Goods: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  #base-infos {
    padding: 0 8px;
    margin-top: 10px;
  }
  .info-title {
    font-size: 16px;
    color: #000;
  }
  .info-price {
    margin-top: 7px;
    position: relative;
  }
  .info-span1 {
    color: #DD4A68;
    font-size: 25px;
  }
  .info-span2 {
    font-size: 13px;
    text-decoration: line-through;
    margin: 0 4px;
  }
  .info-span3 {
    font-family: "微软雅黑";
    font-size: 12px;
    color: #fff;
    background-color: #ff6974;
    padding: 2px 4px;
    border-radius: 18px;
    position: absolute;
  }
  .info-other {
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    margin-top: 15px;
    color: #ACACB4;
    padding-bottom: 6px;
    border-bottom: 1px solid #f0f0f0;
  }
  .info-services {
    margin-top: 15px;
    font-size: 13px;
    display: flex;
    justify-content: space-between;
    color: #000;
  }
  .info-services img {
    width: 12px;
    height: 12px;
  }
</style>