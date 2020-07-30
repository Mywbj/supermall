<template>
  <div id="box" v-if="Object.keys(paramInfo).length !== 0">
    <div class="paramTable" @click="aaa">
      <table>
        <tr v-for="item in paramInfo.tables[0]">
          <td v-for="itens in item">{{itens}}</td>
        </tr>
      </table>
    </div>
    <div class="paramTable2">
      <table>
        <tr v-for="item in paramInfo.set">
          <td>{{item.key}}</td>
          <td>{{item.value}}</td>
        </tr>
      </table>
      <div class="imgshow">
        <img v-if="paramInfo.images !== ''" :src="paramInfo.images">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DetailParamInfo',
    props: {
      paramInfo: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    methods: {
      aaa() {
        console.log(this)
      }
    }
  }
</script>

<style scoped>
  #box {
    padding: 0 7px;
  }
  .paramTable {
    border-top: 3px solid #F0F0F0;
    margin-top: 15px;
    padding: 18px 10px 0;
  }
  .paramTable table tr {
    display: block;
    width: 90vw;
    line-height: 40px;
    border-bottom: 1px solid #F0F0F0;
  }
  .paramTable table tr:last-child {
    border-bottom: 3px solid #F0F0F0;
  }
  .paramTable table td {
    display: inline-block;
    width: 50px;
    font-size: 14px;
  }
  .paramTable table td:nth-of-type(1) {
    width: 28%;
  }
  .paramTable table td:not(:first-child) {
    font-size: 13px;
  }   
  
  .paramTable2 {
    padding: 0 10px;
    font-size: 14px;
  }
  .paramTable2 table tr {
    display: block;
    width: 90vw;
    padding: 10px 0;
    border-bottom: 1px solid #F0F0F0;
  }
  .paramTable2 table td {
    display: inline-block;
    width: 75%;
    font-size: 14px;
  }
  .paramTable2 table td:nth-of-type(1) {
    width: 25%;
  }
  .paramTable2 table td:not(:first-child) {
    font-size: 13px;
    color: palevioletred;
  }
  .imgshow {
    /*text-align: center;*/
  }
  .imgshow img {
    width: 100%;
  }
</style>