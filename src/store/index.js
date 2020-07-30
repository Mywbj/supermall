import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import actions from './actions'
import getters from './getters'

// 1.安装创建
Vue.use(Vuex)

const state = {
  cartList: []
}

// 2.创建Store
const store = new Vuex.Store({
  // 把那些方法都抽离出去
  state,
  mutations,
  actions,
  getters
})

export default store
