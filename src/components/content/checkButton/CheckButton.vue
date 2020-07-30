<template>
  <div class="check-button" :class="{check: isCheck}">
    <img src="~assets/img/cart/tick.svg">
  </div>
</template>

<script>
  export default {
    name: 'CheckButton',
    props:{
      isCheck: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style scoped>
  .check-button {
    border-radius: 50%;
    border: 2px solid #aaa;
    padding-top: 1px;
  }
  .check-button img {
    width: 15px;
  }
  .check {
    border-color: red;
    background: red;
  }
</style>