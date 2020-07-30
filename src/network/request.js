import axios from 'axios'

export function request(config) {
			// 1.创建axios的实例
			const instance = axios.create({
//				baseURL: 'http://123.207.32.32:8000',
				baseURL: 'http://106.54.54.237:8000/api/mn',
//				timeuot: 5000
			})
			
			// 2.axios的拦截器
			// 2.1 请求拦截的作用
			instance.interceptors.request.use(config => {
//				console.log(config)
				// 那么拦截可以做一些什么事情呢？ 如下文字：
				// 1. 比如config中的一些信息不符合服务器的要求
				// 2. 比如每次发送网络请求时，都希望在界面中显示一个请求的图标
				// 3. 某些网络请求（比如登录（token）），必须携带一些特殊的信息
				
				// 拦截之后记得要返回回去
				return config
			}, err => {
				console.log('错误信息：'+err)
			})
			
			// 2.2 响应拦截
			instance.interceptors.request.use(res => {
//				console.log(res)
				return res
			}, err => {
				console.log('拦截失败'+err)
			})
			
			// 发送真正的网络请求
			// 直接return 就是下面的最终写法了
			return instance(config)
}

//最终写法
//export function request(config) {
//	return new Promise((resolve, reject) => {
//			// 1.创建axios的实例
//			const instance = axios.create({
//				baseURL: 'http://localhost:9090',
//				timeuot: 5000
//			})
//			// 发送真正的网络请求
//			instance(config).then(res => {
//				resolve(res)
//			}).catch(err => {
//				reject(err)
//			})
//	})
//}


