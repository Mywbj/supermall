<template>
  <div id="shop-info">
    <div class="logo-info">
      <span>
      <img :src="Shop.logo">
      <span>{{Shop.name}}</span>
      </span>
    </div>
    <div class="described-info">
      <div class="left-info">
        <div class="left-info-left">
          <div>{{Shop.sells}}</div>
          <div>总销量</div>
        </div>
        <div class="left-info-right">
          <div>{{Shop.goodsCount}}</div>
          <div>全部宝贝</div>
        </div>
      </div>
      <div class="right-info">
        <table ref="tabInfo">
        	<tr v-for="item in Shop.score">
        	  <td class="td1">{{item.name}}</td>
        	  <td class="Gcolor td2" :class="{activecolor: item.isBetter}">{{item.score}}</td>
        	  <td>
        	    <span style="display: inline-block;" v-if="item.isBetter"
        	      class="right-info-td" :class="{activebgc: item.isBetter}">高</span>
        	    <span v-else class="right-info-td">低</span>
        	  </td>
        	</tr>
        </table>
      </div>
    </div>
    <div class="baguette">进店逛街</div>
  </div>
</template>

<script>
  export default {
    name: 'DetailShopInfo',
    props: {
      Shop: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    data() {
      return {
      }
    }
  }
</script>

<style scoped>
  table tr {
    height: 20px;
  }
  .td1 {
    width: 65px;
  }
  .td2 {
    width: 32px;
  }
#shop-info {
  margin: 18px 0 0;
  padding: 0 7px;
  border-top: 3px solid #F0F0F0;
  border-bottom: 3px solid #F0F0F0;
}
.logo-info {
  display: flex;
  margin-top: 20px;
}
.logo-info img {
  width: 50px;
  height: 50px;
  border: 1px solid #ccc;
  border-radius: 50%;
  vertical-align: middle;
  margin-right: 8px;
}
.described-info {
  display: flex;
  justify-content: space-around;
  margin-top: 28px;
}
.left-info {
  display: flex;
  text-align: center;
}
.left-info-left {
  margin-right: 15px;
  color: #2B2A2D;
}
.left-info-right {
  color: #2B2A2D;
}
.left-info-left div:nth-of-type(1) {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 10px;
}
.left-info-left div:nth-of-type(2) {
  font-size: 12px;
}
.left-info-right div:nth-of-type(1) {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 10px;
}
.left-info-right div:nth-of-type(2) {
  font-size: 12px;
}
.right-info {
  font-size: 13px;
  margin-top: -10px;
}
.right-info-td {
  color: #fff;
  background-color: green;
}
.Gcolor {
  color: green;
}
.activecolor {
  color: tomato;
}
.activebgc {
  background-color: tomato;
}
.baguette {
  width: 150px;
  height: 28px;
  line-height: 28px;
  text-align: center;
  background-color: #F3F4FA;
  border-radius: 10px;
  margin: 10px auto 20px;
  font-size: 16px;
}
</style>