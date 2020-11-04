import Request from './request'
// import Cookies from 'js-cookie'

// const test = new Request()
// test.setConfig((config) => { /* 设置全局配置 */
//   config.baseUrl = process.env.NODE_ENV === 'development' ? 'http://192.168.10.184:32010/v1' : 'http://192.168.10.181:32020/v1/'
//   // config.baseUrl = 'http://192.168.10.181:32020/v1/'
//   config.header = {
//     ...config.header
//   }
//   // config.custom = { auth: true }
//   return config
// })

// test.interceptor.request((config, cancel) => { /* 请求之前拦截器 */
//   config.header = {
//     ...config.header
//   }
//   // if (config.custom.auth) {
//   //   config.header.token = 'token'
//   // }
//   /*
//   if (!token) { // 如果token不存在，调用cancel 会取消本次请求，但是该函数的catch() 仍会执行
//     cancel('token 不存在') // 接收一个参数，会传给catch((err) => {}) err.errMsg === 'token 不存在'
//   }
//   */
//   return config
// })

// /**
//  * 自定义验证器，如果返回true 则进入响应拦截器的响应成功函数(resolve)，否则进入响应拦截器的响应错误函数(reject)
//  * @param { Number } statusCode - 请求响应体statusCode（只读）
//  * @return { Boolean } 如果为true,则 resolve, 否则 reject
//  */
// test.validateStatus = (statusCode) => {
//   return statusCode === 200
// }

// test.interceptor.response((response) => { /* 请求之后拦截器 */
//   return response
// }, (response) => { // 请求错误做点什么
//   return response
// })

const http = new Request()
let baseUrl
switch (process.env.NODE_ENV) {
  case 'development':
    baseUrl = 'http://192.168.10.184:32010/'
    break
  case 'uat':
    baseUrl = 'https://api-uat-37points.woouo.com/'
    break
  case 'prod':
    baseUrl = 'https://api-37points.woouo.com/'
    break
}
http.setConfig((config) => { /* 设置全局配置 */
  config.baseUrl = baseUrl
  config.header = {
    ...config.header
  }
  // if (token) {
  //   config.header['Authorization'] = ''
  // }
  return config
})

/**
 * 自定义验证器，如果返回true 则进入响应拦截器的响应成功函数(resolve)，否则进入响应拦截器的响应错误函数(reject)
 * @param { Number } statusCode - 请求响应体statusCode（只读）
 * @return { Boolean } 如果为true,则 resolve, 否则 reject
 */
http.validateStatus = (statusCode) => {
  return statusCode === 200
}

http.interceptor.request((config, cancel) => { /* 请求之前拦截器 */
  config.header = {
    ...config.header,
    platform: 'agent_h5'
  }
  // if (token) {
  //   config.header['Authorization'] = ''
  // }
  /*
  if (!token) { // 如果token不存在，调用cancel 会取消本次请求，但是该函数的catch() 仍会执行
    cancel('token 不存在') // 接收一个参数，会传给catch((err) => {}) err.errMsg === 'token 不存在'
  }
  */
  return config
})

http.interceptor.response((response) => { /* 请求之后拦截器 */
  if (response.data.code !== 200) { // 服务端返回的状态码不等于200，则reject()
    if (response.data.code === 401) {
      // removeToken()
      // uni.removeStorage({
      //   key: 'userid'
      // })
      // // Cookies.remove('userid')
      // uni.showToast({
      //   title: '登录已过期，请重新登录',
      //   duration: 2000,
      //   icon: 'none'
      // })
      // setTimeout(() => {
      //   uni.reLaunch({
      //     url: '/pages/login/login'
      //   })
      // }, 1500)
    } else if (response.data.code === 400 && response.data.message === '商户id不能为空') {
    } else {
      // uni.showToast({
      //   title: response.data.message || '网络错误',
      //   duration: 2000,
      //   icon: 'none'
      // })
    }
    return Promise.reject(response)
  }
  // if (response.config.custom.verification) { // 演示自定义参数的作用
  //   return response.data
  // }
  return response.data
}, (response) => { // 请求错误做点什么
  return response
})

export {
  http
}
