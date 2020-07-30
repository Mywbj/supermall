import Toast from './Toast'
const obj = {}

obj.install = function(vue) {
  // 自定义vue创建
  // 1. 创建一个组件构造器，把组件模板放进去
  const toastContrustor = vue.extend(Toast)
  // 2. new出一个vue组件，new的方式，根据组件构造器，可以创建出来一个组件对象
  const toast = new toastContrustor()
  // 3. 把组件挂载到div中
  toast.$mount(document.createElement('div'))
  // 4. 把div添加到body里面 toast.$el对应的就是div
  document.body.appendChild(toast.$el)
  // 最后给Vue原型添加$toast属性
  vue.prototype.$toast = toast
}

export default obj
