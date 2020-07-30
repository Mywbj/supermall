export default {
  addCounter(state, payload) {
    // 旧的一条加1
    payload.count++
    console.log(state.cartList)
  },
  addToCart(state, payload) {
    // 新的一条
    payload.check = true
    state.cartList.push(payload)
    payload.count = 1
  }
}

