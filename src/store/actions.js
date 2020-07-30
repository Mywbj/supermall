export default {
  addCart({state, commit}, payload) {
    return new Promise((resolve, reject)=> {
      // 1.利用 find API 遍历数组，在里面判断 如果之前的商品如果和传进来的一样，那就返回给olproduct
      let olproduct = state.cartList.find((item) => {
        return item.iid === payload.iid
      })
      // 2. 拿到olproduct之后判断，如果olproduct有值，那就给它count+1，否则就添加一条新的商品
      if(olproduct) { // 添加旧的一条
        commit('addCounter', olproduct)
        resolve('当前商品+1')
      }else { // 添加新的一条
        commit('addToCart', payload)
        resolve('添加成功,在购物车等亲~')
      }      
    })

  }    
}