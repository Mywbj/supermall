<template>
  <div class="showToast" v-show="isShow">
    <div>{{message}}</div>
  </div>
</template>

<script>
  export default {
    name: 'Toast',
    data() {
      return {
        isShow: false,
        message: ''
      }
    },
    methods: {
      show(conText="默认文字", time=1500) {
        this.isShow = true
        this.message = conText
        
        setTimeout(() => {
          this.isShow = false
        }, time)
      }
    }
  }
</script>

<style scoped>
  .showToast {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%);
    padding: 10px 15px;
    background: rgba(0, 0, 0, .7);
    color: #fff;
    z-index: 999;
    font-size: 14px;
  }
</style>