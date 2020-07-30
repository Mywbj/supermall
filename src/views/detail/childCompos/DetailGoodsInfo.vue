<template>
  <div v-if="Object.keys(detailInfo).length !== 0">
    <div class="toText">
      <div class="leftText"></div>
      <div class="caretText">{{detailInfo.desc}}</div>
      <div class="rightText"></div>
      <div class="effect">{{detailInfo.detailImage[0].key}}</div>
    </div>
    <div class="textImg">
      <img v-for="item in detailInfo.detailImage[0].list" :src="item" @load="imgLoad">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DetailGoodsInfo',
    props: {
      detailInfo: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    data() {
      return {
        counter: 0,
        imagesLinegth: 0
      }
    },
    methods: {
      imgLoad() {
        if(++this.counter === Number(this.imagesLinegth)) {
          this.$emit('imagesLoad')
        }
      }
    },
    // watch属性，监听某个属性的变化，变化的时候会执行这个函数
    watch:{
      detailInfo() {
        this.imagesLinegth = this.detailInfo.detailImage[0].list.length
      }
    }
  }
</script>

<style scoped>
  .toText {
    padding: 5px 15px;
    position: relative;
  }
  .caretText {
    margin-top: 30px;
    font-size: 14px;
  }
  .leftText {
   float: left;
  }
  .rightText {
    float: right;
  }
  .leftText::before {
    content: '';
    display: inline-block;
    width: 5px;
    height: 5px;
    background-color: #000;
  }
  .leftText::after {
    content: '';
    display: inline-block;
    width: 100px;
    height: 1px;
    background-color: #505050;
  }
  .rightText::before {
    content: '';
    display: inline-block;
    width: 100px;
    height: 1px;
    background-color: #505050;
  }
  .rightText::after {
    content: '';
    display: inline-block;
    width: 5px;
    height: 5px;
    background-color: #000;
  }
  .effect {
    margin-top: 30px;
    font-size: 15px;
    color: #404040;
  }
  .textImg img {
    width: 100%;
  }
</style>