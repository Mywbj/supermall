import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 导入解决移动端300ms延迟 
import fastClick from 'fastclick'
// 导入懒加载
import LazyLoad from 'vue-lazyload'
// 导入自定义vue插件
import Toast from 'components/common/toast/index'

Vue.config.productionTip = false
// 安装toast插件
Vue.use(Toast)

// 添加事件总线对象
Vue.prototype.$bus = new Vue()

// 解决移动端300ms延迟 
// 1. 安装fastclick 2.导入 3. 调用attach函数  fastClick.attach(document.body)
fastClick.attach(document.body)

// 安装懒加载
// 1.安装vue-lazyload  2.导入 3.安装Vue.use(插件名字)
Vue.use(LazyLoad, {
  loading: require('./assets/img/common/20200728014649.gif')
})

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
